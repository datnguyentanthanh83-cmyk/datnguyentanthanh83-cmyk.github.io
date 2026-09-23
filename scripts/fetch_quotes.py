#!/usr/bin/env python3
"""Fetch delayed quotes from Investing.com + FX. Day change vs previous close.

Never wipe last-good prices: on Investing 403/empty, keep prior quotes.json values.
"""
from __future__ import annotations
import json, re, time, urllib.error, urllib.request
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


def _parse_num(s):
    if s is None:
        return None
    t = str(s).replace(",", "").replace(" ", "").strip()
    if not t or t == "-":
        return None
    return float(t)


def fetch_vcb_usd():
    """VCB listed USD/VND trading rates (cash / transfer buy / sell)."""
    day = datetime.now(ZoneInfo("Asia/Ho_Chi_Minh")).strftime("%Y-%m-%d")
    data = get_json(f"https://www.vietcombank.com.vn/api/exchangerates?date={day}")
    rows = data.get("Data") or []
    usd = next((r for r in rows if str(r.get("currencyCode", "")).upper() == "USD"), None)
    if not usd:
        raise ValueError("VCB USD row missing")
    cash = _parse_num(usd.get("cash"))
    transfer = _parse_num(usd.get("transfer"))
    sell = _parse_num(usd.get("sell"))
    if transfer is None or sell is None:
        raise ValueError("VCB USD incomplete")
    mid = round((transfer + sell) / 2.0)
    return {
        "cash": cash,
        "transfer": transfer,
        "sell": sell,
        "mid": mid,
        "updated": data.get("UpdatedDate") or data.get("Date"),
    }


def fetch_sbv_center():
    """SBV central USD/VND rate from sbv.gov.vn tỷ giá page."""
    url = "https://www.sbv.gov.vn/webcenter/portal/m/menu/trangchu/tg"
    req = urllib.request.Request(
        url, headers={"User-Agent": UA["User-Agent"], "Accept": "text/html"}
    )
    with urllib.request.urlopen(req, timeout=25) as r:
        html = r.read().decode("utf-8", "replace")
    # Headline near chart: "25,635.00 VND" + day change
    m = re.search(
        r"([0-9]{2},[0-9]{3}(?:\.[0-9]+)?)\s*VND\s*<span[^>]*>\s*([+\-]?[0-9,.]+)\s*\(",
        html,
    )
    if m:
        return {"price": _parse_num(m.group(1)), "chgAbs": _parse_num(m.group(2))}
    m2 = re.search(r"([0-9]{2},[0-9]{3}(?:\.[0-9]+)?)\s*VND", html)
    if m2:
        return {"price": _parse_num(m2.group(1)), "chgAbs": None}
    m3 = re.search(
        r"\[([0-9,\s]+)\]\s*;\s*const ctx = document\.getElementById\('TyGiaChart'\)",
        html,
    )
    if m3:
        rates = [int(x) for x in re.findall(r"\d+", m3.group(1))]
        if rates:
            return {"price": float(rates[-1]), "chgAbs": None}
    raise ValueError("SBV central rate not found")


def fx_with_state(state: dict):
    """USD/VND: VCB trading mid as price + SBV central as sbvCenter."""
    out = {}
    vcb = fetch_vcb_usd()
    sbv = None
    try:
        sbv = fetch_sbv_center()
    except Exception:
        sbv = None
    mid = vcb["mid"]
    prev = state.get("usdvnd")
    chg = ((mid - prev) / prev * 100.0) if prev else None
    item = {
        "price": mid,
        "buy": vcb["transfer"],
        "sell": vcb["sell"],
        "cash": vcb["cash"],
        "transfer": vcb["transfer"],
        "prevClose": prev,
        "chgPct": chg,
        "chgAbs": (mid - prev) if prev is not None else None,
        "source": "vcb",
        "vcbUpdated": vcb.get("updated"),
    }
    if sbv and sbv.get("price") is not None:
        item["sbvCenter"] = sbv["price"]
        item["sbvChgAbs"] = sbv.get("chgAbs")
        item["source"] = "vcb+sbv"
    out["usdvnd"] = item
    state["usdvnd"] = mid
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
        "provider": "Investing.com (vs prior close) + VCB/SBV USDVND",
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
