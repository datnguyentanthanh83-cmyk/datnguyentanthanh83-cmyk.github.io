/* Macro Eco — daily content only. UI lives in index.html (do not replace daily). */
window.MACRO_DATA = {
  meta: {
    title: "Macro Markets Dashboard",
    subtitle: "Theo dõi hàng ngày · Rates · FX · Risk · Asia · cho Dat",
    dateLabel: "T3 · 22/09/2026",
    asOf: "As-of ~20:00 ICT",
    status: "Snapshot tối · công khai"
  },
  kpis: [
    { label: "Fed funds", value: "3.75–4.00%", sub: "FOMC 16/09: +25bp · Warsh" },
    { label: "DXY", value: "~100.1", subHtml: 'Giữ >100 · Fedspeak hawkish' },
    { label: "UST 10Y", value: "~4.94%", subHtml: 'T3 Mỹ sớm · wires · 2s10s hẹp' },
    { label: "VN-Index", value: "1,816.93", subHtml: 'Ngày: <b class="up">+0.96%</b> · đóng T3' }
  ],
  cards: [
    {
      icon: "📈", title: "US Rates & Fed", subtitle: "So với kỳ gần nhất (FOMC)", tag: "+25bp vs kỳ trước", tagClass: "green",
      level: "3.75–4.00%", levelSmall: "Fed funds",
      cols: ["Chỉ số", "Kỳ gần nhất", "Thay đổi"],
      rows: [
        { name: "Fed funds target", day: "3.50–3.75%", week: "+25bp", weekClass: "up" },
        { name: "FOMC 16/09 (Warsh)", day: "Giữ / chờ", week: "Hike", weekClass: "up" },
        { name: "Fedspeak 21–22/09", day: "Goolsbee/Musalem/Collins", week: "Bias hike thêm", weekClass: "up" }
      ],
      note: "So sánh với kỳ họp / mức chính sách gần nhất — không dùng % ngày/% tuần.",
      news: "FOMC 16/09 +25bp lên 3.75–4.00%. Musalem (21/09): cần restraint thêm, mức hiện tại còn “accommodative”. Goolsbee/Collins gắn supply shock Iran với bias hike thêm trong năm. T3 Mỹ: chờ Williams/Barkin/Jefferson + ADP việc làm."
    },
    {
      icon: "📊", title: "US Bond Yields", subtitle: "2Y · 10Y · Curve", tag: "Yields firmer", tagClass: "amber",
      level: "~4.94%", levelSmall: "10Y · wires T3",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "2Y UST", day: "~4.74%", dayClass: "val", week: "—", live: "ust2y" },
        { name: "10Y UST", day: "~4.94%", dayClass: "val", week: "—", live: "ust10y" },
        { name: "2s10s", day: "~+20bp", dayClass: "up", week: "—", live: "ust2s10s" }
      ],
      note: "Mốc wires CNBC/TradingEconomics sáng–trưa T3 Mỹ; Investing delayed giữ last-good nếu API lỗi.",
      news: "Sau Fedspeak hawkish, 10Y quanh 4.94–4.98% (wires); 2Y ~4.74%. Curve thoát đảo sâu buổi sáng Investing — vẫn nhạy tin dầu/Iran và Fed speakers còn lại trong ngày."
    },
    {
      icon: "💵", title: "DXY", subtitle: "US Dollar Index", tag: "USD firm", tagClass: "green",
      level: "~100.1",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [{ name: "DXY", day: "giữ >100", dayClass: "up", week: "—", live: "dxy" }],
      note: "% ngày vs prior close · delayed / last-good nếu Investing fail.",
      news: "DXY giữ quanh 100–100.2 nhờ differential Fed hike bias + trú ẩn địa chính trị trước Trump–Xi 24/09 và kênh Iran tại UNGA."
    },
    {
      icon: "🔥", title: "Inflation", subtitle: "So tháng trước (MoM) · YoY", tag: "Chờ Aug PCE", tagClass: "amber",
      level: "3.4%", levelSmall: "CPI y/y · Aug",
      cols: ["Chỉ số", "MoM", "YoY"],
      rows: [
        { name: "CPI (Aug)", day: "+0.4%", dayClass: "up", week: "+3.4%", weekClass: "up" },
        { name: "Core CPI (Aug)", day: "+0.3%", dayClass: "up", week: "+2.4%", weekClass: "flat" },
        { name: "PCE (Jul)", day: "+0.2%", dayClass: "up", week: "+3.7%", weekClass: "up" },
        { name: "Core PCE (Jul)", day: "+0.2%", dayClass: "up", week: "+3.3%", weekClass: "up" }
      ],
      note: "MoM = so tháng trước; YoY = so cùng kỳ năm trước.",
      news: "Không có print lạm phát mới trong khung tối T3. Catalyst: Aug PCE 30/09. Energy shock Iran + diesel EU căng vẫn là rủi ro đẩy lại đường đi lạm phát."
    },
    {
      icon: "🌍", title: "FX — Majors", subtitle: "Asia evening · delayed", tag: "USD bid", tagClass: "",
      level: "USD bid",
      cols: ["Cặp tỷ giá", "% ngày", "% tuần"],
      rows: [
        { name: "EUR/USD", day: "~1.146", dayClass: "val", week: "—", live: "eurusd" },
        { name: "GBP/USD", day: "~1.336", dayClass: "val", week: "—", live: "gbpusd" },
        { name: "USD/JPY", day: "~157.3", dayClass: "val", week: "—", live: "usdjpy" },
        { name: "AUD/USD", day: "~0.711", dayClass: "val", week: "—", live: "audusd" }
      ],
      note: "Nhật nghỉ lễ đến hết 23/09 — thanh khoản JPY vẫn mỏng.",
      news: "USD/JPY quanh 157.2–157.5; yên yếu khi BoJ 1.25% bị đọc là chưa đủ hawkish so với Fed. EUR/USD giữ quanh 1.146 trước UNGA/Trump–Xi."
    },
    {
      icon: "🏦", title: "Equities & Risk", subtitle: "Phiên Mỹ 21/09 · VN T3", tag: "Risk-on selective", tagClass: "green",
      level: "7,765", levelSmall: "S&P 500 · đóng T2 Mỹ",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "S&P 500", day: "+1.49%", dayClass: "up", week: "—", live: "spx" },
        { name: "Nasdaq", day: "+2.26%", dayClass: "up", week: "—", live: "ndx" },
        { name: "Dow", day: "+0.71%", dayClass: "up", week: "—", live: "dji" },
        { name: "Russell", day: "+0.49%", dayClass: "up", week: "—", live: "rut" }
      ],
      note: "% ngày Mỹ = phiên 21/09 vs prior close; phiên T3 Mỹ mới mở lúc chốt digest VN.",
      news: "S&P/Nasdaq phiên 21/09 tăng chọn lọc nhờ AI/semis khi dầu hạ. Phiên T3 Mỹ vừa mở cửa theo giờ ICT — theo dõi phản ứng tin Hormuz/Iran và Fed speakers."
    },
    {
      icon: "🛢️", title: "Oil & Commodities", subtitle: "WTI · Brent · Gold", tag: "Brent ~98", tagClass: "amber",
      level: "~$98.3", levelSmall: "Brent · Geo Pulse",
      cols: ["Tài sản", "% ngày", "% tuần"],
      rows: [
        { name: "WTI", day: "cao 80s–90s", dayClass: "val", week: "—", live: "wti" },
        { name: "Brent", day: "~−2%", dayClass: "down", week: "—", live: "brent" },
        { name: "Gold", day: "dịu nhẹ", dayClass: "down", week: "—", live: "gold" }
      ],
      note: "Brent chiều ~98.3 (−2%) theo Geo Pulse; Investing API tối fail — giữ last-good WTI/gold.",
      news: "Brent lùi về ~98 khi tin Iran đề xuất mở Hormuz trong 7 ngày + dòng Yanbu; Macron cảnh báo nếu Hormuz đóng và East–West không chạy có thể mất ≥4 mb/d. Diesel EU vẫn căng. Gold quanh 4.370–4.390."
    },
    {
      icon: "🇻🇳", title: "Asia / Việt Nam / EM", subtitle: "VN-Index · NHNN · USD/VND", tag: "NHNN bơm ròng", tagClass: "green",
      level: "1,816.93",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "VN-Index", day: "+0.96%", dayClass: "up", week: "hồi 1,790–1,820", weekClass: "up", live: "vnindex" },
        { name: "OMO 21/09 bơm ròng · LS 4.5%", day: "47.915 nghìn tỷ", dayClass: "up", week: "Dư cầm cố ~200.4 nghìn tỷ" },
        { name: "LN H 21/09 ON / 7D / 14D / 30D", day: "7.0% / 4.8% / 6.0% / 6.5%", dayClass: "val", week: "ON +2.5 điểm %" },
        { name: "USD/VND mid", day: "~25,970", week: "—", live: "usdvnd" }
      ],
      note: "CafeF/VIRA 22/09: OMO + LN H phiên 21/09; swap FX 7D max 2 tỷ USD value 22/09.",
      news: "21/09 NHNN chào OMO 7D/14D/35D/91D LS 4.5%/năm, trúng 57.066 nghìn tỷ, đáo hạn 9.151 → bơm ròng 47.915 nghìn tỷ; dư cầm cố ~200.403 nghìn tỷ. Song song swap FX 7D max 2 tỷ USD (mua 24.406 / kỳ hạn 24.412, value 22/09). LN H: ON 7.0% (+2.5 điểm %), 7D 4.8%, 14D 6.0%, 30D 6.5%. VN-Index đóng T3 1,816.93 (+0.96%, +17.26đ) dù ngoại bán ròng ~286 tỷ — VIC dẫn."
    },
    {
      icon: "🌏", title: "Asia extras", subtitle: "China · Japan · Korea", tag: "Nhật nghỉ đến 23/09", tagClass: "",
      level: "LPR giữ",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "China 1Y / 5Y LPR · 3.00% / 3.50%", day: "—", week: "Giữ tháng 16" },
        { name: "BoJ policy rate", day: "1.25%", dayClass: "val", week: "+25bp (18/09)" },
        { name: "Japan equities", day: "Nghỉ 21–23/09", week: "Mở lại 24/09" }
      ],
      note: "Không gán % khi thiếu mốc so sánh.",
      news: "PBoC giữ LPR tháng 16. Nhật nghỉ Respect for Aged / Citizens’ Holiday / Equinox đến hết 23/09; Nikkei cash mở lại 24/09 (đóng trước 65,018.95 ngày 18/09). Biến số Trung Quốc gần: Trump–Xi 24/09 và gia hạn truce Busan (~10/11)."
    }
  ],
  geoNews: {
    title: "Geo Pulse · Tin quan trọng",
    window: "24h · ~20:15 ICT 21/09 → ~20:15 ICT 22/09",
    sourceNote: "Geo Pulse pack 22/09 tối + Reuters/Guardian/Al Jazeera/Euronews — không phải lời khuyên đầu tư.",
    items: [
      {
        tag: "Oil / Hormuz", tagClass: "oil", when: "22/09",
        headline: "Hormuz gần tê liệt (~2 tàu/ngày vs ~125); 2 vụ đạn/projectile trên tàu",
        summary: "Lưu lượng Hormuz vẫn cực thấp so với bình thường. Báo cáo đạn/projectile liên quan tàu LR Stephanie và Al Maryah. Bab el-Mandeb quanh ~26 tàu — nút thắt cung vẫn là Hormuz chứ chưa chuyển hết sang Red Sea.",
        url: "https://www.reuters.com/world/middle-east/iran-ready-reopen-strait-hormuz-if-us-eases-military-pressure-lifts-blockade-2026-09-22/"
      },
      {
        tag: "Iran / Diplomacy", tagClass: "oil", when: "22/09",
        headline: "Iran đề xuất mở Hormuz trong 7 ngày nếu Mỹ nới áp lực quân sự + dỡ phong tỏa cảng",
        summary: "Đề xuất qua trung gian; không có lịch họp Pezeshkian–Trump. Mỹ mở tiếp xúc Iran tại UNGA nhưng Rubio chưa có lịch. Trump phát biểu UNGA trọng tâm Iran/Gaza/Ukraine và họp GCC về Hormuz — narrative đàm phán vs siết chạy song song.",
        url: "https://www.reuters.com/world/middle-east/iran-ready-reopen-strait-hormuz-if-us-eases-military-pressure-lifts-blockade-2026-09-22/"
      },
      {
        tag: "Houthi / Red Sea", tagClass: "oil", when: "21–22/09",
        headline: "Houthi Kahboub nhìn Bab; Saudi không kích Mokha; Trump từng hủy strike Houthi phút chót",
        summary: "Al Jazeera/NYT: Houthi theo dõi Bab el-Mandeb; Saudi không kích Mokha trong khung gần. NYT: Trump hủy đòn vào Houthi ở phút chót. UK Voyager hỗ trợ AAR cho Saudi — leo thang Houthi–Saudi vẫn là đuôi rủi ro dầu.",
        url: "https://www.aljazeera.com/"
      },
      {
        tag: "Oil / Macro", tagClass: "oil", when: "chiều 22/09",
        headline: "Brent ~98.3 (−2%) khi tin mở Hormuz + Yanbu; Macron cảnh báo mất ≥4 mb/d nếu kẹt kép",
        summary: "Dầu lùi premium khi tin lộ trình 7 ngày và dòng Yanbu; diesel EU vẫn căng. Macron: nếu Hormuz đóng và đường East–West không chạy, thị trường có thể mất ≥4 triệu thùng/ngày — kịch bản đuôi vẫn dày.",
        url: "https://www.euronews.com/"
      },
      {
        tag: "Mỹ – Trung", tagClass: "uscn", when: "21–22/09",
        headline: "Trump–Xi 24/09: kỳ vọng thấp; trục gia hạn truce Busan (hết 10/11) + nông sản/NTB",
        summary: "Bessent gọi đàm phán với Hà Lập Phong “very successful” (AI dialogue, Board of Trade) nhưng Greer hạ nhiệt grand bargain. Trọng tâm thực tế: gia hạn truce thuế Busan trước hạn 10/11, nông sản và hàng rào phi thuế — deliverable khiêm tốn hơn là reset lớn.",
        url: "https://www.reuters.com/world/china/xi-rolls-into-trump-summit-with-chinas-trade-engine-roaring-2026-09-21/"
      },
      {
        tag: "Âu – Nga", tagClass: "eu", when: "UNGA 22/09",
        headline: "Zelenskyy–Trump đẩy energy truce; Macron–Trump bàn moratorium đánh hạ tầng năng lượng",
        summary: "Tại UNGA, kênh Ukraine–Mỹ nhấn mạnh tạm dừng đánh hạ tầng năng lượng để giảm shock diesel/nhiên liệu. Đây là kênh thứ cấp so với Hormuz/Iran nhưng cùng hướng giảm premium năng lượng nếu chốt được tín hiệu.",
        url: "https://www.reuters.com/"
      }
    ]
  },
  comment: {
    badge: "Macro Eco · Nhận định",
    title: "Khung tin: sau snapshot sáng ~07:15 đến ~20:00 ICT 22/09/2026",
    paragraphs: [
      "\u003cstrong\u003e1) Fed \u0026 lãi suất Mỹ.\u003c/strong\u003e FOMC 16/09 (Chair Warsh) đã +25bp lên 3.75–4.00%. Sang khung tối T3, thị trường vẫn định giá theo Fedspeak 21/09: Musalem cho rằng thiếu restraint thêm thì lạm phát dễ lệch trên 2% sau ~18 tháng và mức hiện tại còn nghiêng nới; Goolsbee/Collins củng cố bias thêm một lần hike trong năm khi supply shock Iran kéo dài. Lợi suất 10Y wires quanh 4.94–4.98%; 2Y ~4.74%; DXY giữ trên 100. Luồng Fed→lãi suất→USD→tín dụng→tài sản vẫn là trục chính trước khi lan sang Việt Nam qua tỷ giá và chi phí vốn.",
      "\u003cstrong\u003e2) Trump \u0026 Bộ Tài chính Mỹ.\u003c/strong\u003e Trước thượng đỉnh Trump–Tập 24/09, Bessent khẳng định đàm phán Mỹ–Trung “very successful” với AI dialogue và Board of Trade, nhưng kỳ vọng thị trường thấp: trọng tâm thực tế là gia hạn truce Busan (hết hạn ~10/11) cùng nông sản/NTB, chưa phải grand bargain. Song song kênh Iran tại UNGA: Mỹ mở tiếp xúc qua trung gian; Iran đề xuất mở Hormuz trong 7 ngày nếu Mỹ nới áp lực quân sự và dỡ phong tỏa cảng — chưa có lịch Pezeshkian–Trump. Bessent vẫn giữ lịch siết hàng không Iran từ 23/09. Hai narrative đàm phán–truce và áp lực tối đa tiếp tục là nút đảo premium dầu/USD trong 24–72 giờ.",
      "\u003cstrong\u003e3) Việt Nam.\u003c/strong\u003e Phiên 21/09, NHNN bơm ròng mạnh qua OMO: chào thầu 7D 46.000 / 14D 12.000 / 35D 4.000 / 91D 1.000 tỷ đồng, lãi suất đồng loạt 4.5%/năm; trúng 57.066 nghìn tỷ, đáo hạn 9.151 nghìn tỷ → \u003cstrong\u003ebơm ròng ~47.915 nghìn tỷ\u003c/strong\u003e; dư cầm cố lên ~200.403 nghìn tỷ (CafeF/VIRA). Lãi suất liên ngân hàng 21/09: ON 7.0% (+2.5 điểm %), 7D 4.8%, 14D 6.0%, 30D 6.5% — ON nhảy phản ánh thiếu hụt ngắn hạn dù NHNN đã bơm. Cùng ngày NHNN mở hoán đổi FX 7 ngày max 2 tỷ USD (mua 24.406 / kỳ hạn 24.412), value 22/09 — bơm VND tạm rồi thu sau 7 ngày. VN-Index đóng T3 1,816.93 (+0.96%, +17.26 điểm) dù khối ngoại bán ròng ~286 tỷ trên HoSE; VIC dẫn sóng. USD/VND mid quanh 25.970. Truyền dẫn: Fed/USD vững + diesel căng → NHNN ưu tiên bơm VND ngắn hạn nhưng vẫn neo tỷ giá qua swap FX.",
      "\u003cstrong\u003e4) Nhật Bản.\u003c/strong\u003e BoJ đã +25bp lên 1.25% (7–2) ngày 18/09. Sàn Tokyo nghỉ lễ 21–23/09 (mở lại 24/09); USD/JPY quanh 157.2–157.5 khi thị trường đọc BoJ chưa đủ hawkish so với Fed — thanh khoản yên vẫn mỏng.",
      "\u003cstrong\u003e5) Trung Quốc.\u003c/strong\u003e PBoC tiếp tục giữ LPR 1 năm 3,00% và 5 năm 3,50% — tháng thứ 16 liên tiếp. Biến số gần không phải nới lãi ngay, mà là Trump–Xi 24/09 và khả năng gia hạn truce thuế Busan trước hạn 10/11; AI dialogue là deliverable mềm đi kèm.",
      "\u003cstrong\u003e6) Vĩ mô toàn cầu khác.\u003c/strong\u003e Không có CPI/PCE mới trong khung tối. Brent chiều ~98.3 USD (−khoảng 2%) khi tin lộ trình mở Hormuz và dòng Yanbu; Macron cảnh báo kịch bản mất ≥4 mb/d nếu Hormuz đóng và East–West không chạy. Hormuz thực tế vẫn gần tê liệt (~2 tàu/ngày vs ~125 trước). Phiên Mỹ 21/09: S\u0026P ~7.765 (+1,49%), Nasdaq +2,26%. Vàng quanh 4.370–4.390 USD. Catalyst gần: Iran airlines cutoff 23/09, Trump–Xi 24/09, Aug PCE 30/09, Sep CPI 14/10.",
      "\u003cstrong\u003e7) Kịch bản nghiên cứu 24–72h (không phải lời khuyên đầu tư).\u003c/strong\u003e \u003cem\u003eBase:\u003c/em\u003e trao đổi Iran qua trung gian chưa mở Hormuz thật; Trump–Xi gia hạn truce thuế khiêm tốn; dầu neo cao vùng 90s; Fed giữ restrictive — USD và lợi suất được đỡ, Việt Nam tiếp tục phụ thuộc OMO/swap để hạ nhiệt LN H. \u003cem\u003eUpside:\u003c/em\u003e tín hiệu Mỹ nới blockade / Iran lộ trình 7 ngày rõ / Yanbu ổn / extension truce rõ → premium dầu giảm, risk-on nhẹ lan sang EM/VN. \u003cem\u003eDownside:\u003c/em\u003e projectile hoặc chặn tàu mới, leo thang Houthi–Saudi, hoặc Trump–Xi lệch kỳ vọng → premium dầu + USD trú ẩn; Việt Nam thắt qua tỷ giá và kênh năng lượng."
    ]
  },
  trading: {
    badge: "Macro Eco · Trading",
    title: "Chiến lược Trading",
    body: "(i) Bias chung vẫn là Fed restrictive kết hợp rủi ro Hormuz/Iran — ngoại giao đang kéo premium xuống tạm, chưa phải all-clear khi lưu lượng Hormuz vẫn gần tê liệt. (ii) Rates/FX: DXY giữ trên 100 và Fedspeak còn hawkish; không đọc nhầm nhịp dầu giảm thành tín hiệu Fed sắp pivot. (iii) Năng lượng: Brent ~98 phản ánh kỳ vọng lộ trình 7 ngày hơn là cung đã thông — giữ quy mô nhỏ trước UNGA/GCC và cutoff hàng không Iran 23/09. (iv) Việt Nam: ưu tiên theo dõi OMO (bơm ròng 21/09, dư cầm cố ~200 nghìn tỷ), LN H ON 7% và hiệu ứng swap FX value 22/09; VN-Index đã lấy lại 1.816 nhưng phụ thuộc trụ VIC và thanh khoản còn mỏng. (v) Catalyst: 23/09 Iran airlines, 24/09 Trump–Xi, Aug PCE 30/09."
  },
  sources: "CafeF/VIRA — OMO \u0026 LN H 21/09; HOSE — VN-Index 22/09; Geo Pulse pack tối 22/09; Reuters Hormuz/Iran reopen; CNBC/Bloomberg/TradingEconomics yields; Euronews Macron; Fed FOMC 16/09; Investing last-good (API tối lỗi).",
  bottomLine: [
    "Hormuz vẫn gần tê liệt; Iran đề xuất mở trong 7 ngày nếu Mỹ nới blockade — Brent ~98 (−2%), premium hạ tạm chứ chưa all-clear.",
    "Fed speakers củng cố bias hike thêm; 10Y wires ~4.94–4.98%; DXY giữ >100 trước Trump–Xi 24/09.",
    "Việt Nam: NHNN 21/09 bơm ròng ~47.9 nghìn tỷ (LS 4.5%), dư cầm cố ~200.4 nghìn tỷ; LN H ON 7.0% / 7D 4.8% / 14D 6.0% / 30D 6.5%; VN-Index 1,816.93 (+0.96%).",
    "Trump–Xi 24/09: kỳ vọng thấp — gia hạn truce Busan + nông sản/NTB; AI dialogue là lớp mềm."
  ],
  catalysts: [
    { when: "23/09", what: "Iran airlines cutoff toàn cầu (Bessent)" },
    { when: "24/09", what: "Thượng đỉnh Trump–Tập · truce thuế Busan" },
    { when: "Tuần này", what: "UNGA · kênh Iran qua trung gian · GCC Hormuz" },
    { when: "30/09", what: "Aug PCE · thước đo ưa thích của Fed" },
    { when: "14/10", what: "Sep CPI" }
  ],
  footer: {
    left: "Macro Eco · Snapshot tối · index.html cố định · data.js đổi hàng ngày",
    source: "Nguồn: Fed · CafeF/VIRA/HOSE · Geo Pulse · Reuters/CNBC · Investing last-good — not investment advice"
  }
};
