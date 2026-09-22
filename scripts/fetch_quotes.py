#!/usr/bin/env python3
"""Fetch delayed quotes from Investing.com + FX. Day change vs previous close.

Never wipe last-good prices: on Investing 403/empty, keep prior quotes.json values.
"""
from __future__ import annotations
import json, time, urllib.error, urllib.request
from datetime import datetime, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

OUT = Path(__file__).resolve().parents[1] / "quotes.json"
STATE = Path(__file__).resolve().parents[1] / "quotes-state.json"
UA = {
    # Investing blocks Chrome-looking UAs from Actions/bots with 403.
    "User-Agent": "Mozilla/5.0 MacroEcoBot",
    "Accept": "application/json",
}

PAIRS = {
    "dxy": 8827,
    "ust10y": 23701,
    "ust2y": 23705,
    "vnindex": 41063,
    "wti": 8849,
    "brent": 8833,
    "gold": 8830,
    "spx": 166,
    "ndx": 14958,
    "dji": 169,
    "rut": 170,
    "gbpusd": 2,
    "audusd": 5,
    "eurusd": 1,
    "usdjpy": 3,
    "btc": 1057391,
}


def get_json(url: str, timeout: float = 15.0, retries: int = 2):
    last_err = None
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.loads(r.read().decode())
        except Exception as e:
            last_err = e
            if attempt < retries:
                time.sleep(0.4 * (attempt + 1))
    raise last_err  # type: ignore[misc]


def investing_quote(pair_id: int):
    intra = get_json(
        f"https://api.investing.com/api/financialdata/{pair_id}/historical/chart/"
        f"?period=P1D&interval=PT5M&pointscount=60"
    )
    rows = intra.get("data") or []
    if not rows:
        raise ValueError("empty intraday")
    price = float(rows[-1][4])
    ts = int(rows[-1][0])

    daily = get_json(
        f"https://api.investing.com/api/financialdata/{pair_id}/historical/chart/"
        f"?period=P1W&interval=P1D&pointscount=60"
    )
    drows = daily.get("data") or []
    prev = None
    if len(drows) >= 2:
        last_d_ts = int(drows[-1][0]) // 1000
        last_i_ts = ts // 1000
        d_last = datetime.fromtimestamp(last_d_ts, timezone.utc).date()
        d_intra = datetime.fromtimestamp(last_i_ts, timezone.utc).date()
        if d_last == d_intra:
            prev = float(drows[-2][4])
        else:
            prev = float(drows[-1][4])
    elif len(drows) == 1:
        prev = float(drows[0][1])

    chg_abs = (price - prev) if prev is not None else None
    chg_pct = ((price - prev) / prev * 100.0) if prev else None
    return {
        "price": price,
        "prevClose": prev,
        "chgPct": chg_pct,
        "chgAbs": chg_abs,
        "ts": ts,
        "source": "investing",
        "pairId": pair_id,
    }


def fx_with_state(state: dict):
    data = get_json("https://open.er-api.com/v6/latest/USD")
    rates = data.get("rates") or {}
    out = {}
    vnd = float(rates["VND"]) if "VND" in rates else None
    if vnd is not None:
        prev = state.get("usdvnd")
        chg = ((vnd - prev) / prev * 100.0) if prev else None
        out["usdvnd"] = {
            "price": vnd,
            "prevClose": prev,
            "chgPct": chg,
            "chgAbs": (vnd - prev) if prev is not None else None,
            "source": "er-api",
        }
        state["usdvnd"] = vnd
    return out


def load_previous() -> dict:
    if not OUT.exists():
        return {}
    try:
        prev = json.loads(OUT.read_text())
        return prev.get("quotes") or {}
    except Exception:
        return {}


def main():
    state = {}
    if STATE.exists():
        try:
            state = json.loads(STATE.read_text())
        except Exception:
            state = {}

    previous = load_previous()
    fresh: dict = {}
    errors: list[str] = []
    retained: list[str] = []

    for key, pid in PAIRS.items():
        try:
            fresh[key] = investing_quote(pid)
            time.sleep(0.1)
        except Exception as e:
            errors.append(f"{key}:{e}")
            if key in previous and previous[key].get("price") is not None:
                kept = dict(previous[key])
                kept["retained"] = True
                fresh[key] = kept
                retained.append(key)

    try:
        for k, v in fx_with_state(state).items():
            fresh[k] = v
    except Exception as e:
        errors.append(f"fx:{e}")
        if "usdvnd" in previous and previous["usdvnd"].get("price") is not None:
            kept = dict(previous["usdvnd"])
            kept["retained"] = True
            fresh["usdvnd"] = kept
            retained.append("usdvnd")

    # Keep other prior keys (e.g. derived) if still useful
    for k, v in previous.items():
        if k not in fresh and v and v.get("price") is not None:
            kept = dict(v)
            kept["retained"] = True
            fresh[k] = kept
            if k not in retained:
                retained.append(k)

    if "ust2y" in fresh and "ust10y" in fresh:
        try:
            spread = fresh["ust10y"]["price"] - fresh["ust2y"]["price"]
            fresh["ust2s10s"] = {
                "price": spread,
                "chgPct": None,
                "chgAbs": None,
                "source": "derived",
            }
        except Exception:
            pass

    investing_ok = sum(
        1
        for k in PAIRS
        if k in fresh and not fresh[k].get("retained") and fresh[k].get("source") == "investing"
    )

    # Safety: never commit a near-empty file if we still had a full prior snapshot
    if investing_ok == 0 and len(previous) > 3 and len([k for k in fresh if not fresh[k].get("retained")]) <= 1:
        # Still write merged retained file (above already filled from previous)
        pass

    ict = datetime.now(ZoneInfo("Asia/Ho_Chi_Minh"))
    payload = {
        "asOf": ict.strftime("%Y-%m-%d %H:%M:%S ICT"),
        "asOfUnix": int(time.time()),
        "provider": "Investing.com (vs prior close) + er-api FX",
        "quotes": fresh,
        "errors": errors,
        "retained": retained,
        "investingOk": investing_ok,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    STATE.write_text(json.dumps(state, indent=2) + "\n")
    print(f"wrote {OUT} keys={len(fresh)} fresh_investing={investing_ok} retained={len(retained)} errors={len(errors)}")
    for k in ("dxy", "ust10y", "eurusd", "usdjpy", "usdvnd", "vnindex", "wti", "btc"):
        q = fresh.get(k)
        if q:
            flag = " [retained]" if q.get("retained") else ""
            print(f"  {k}: {q.get('price')} chgPct={q.get('chgPct')}{flag}")


if __name__ == "__main__":
    main()
