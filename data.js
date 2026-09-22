/* Macro Eco — daily content only. UI lives in index.html (do not replace daily). */
window.MACRO_DATA = {
  meta: {
    title: "Macro Markets Dashboard",
    subtitle: "Theo dõi hàng ngày · Rates · FX · Risk · Asia · cho Dat",
    dateLabel: "T3 · 22/09/2026",
    asOf: "As-of ~07:15 ICT",
    status: "Snapshot công khai"
  },
  kpis: [
    { label: "Fed funds", value: "3.75–4.00%", sub: "FOMC 16/09: +25bp · Warsh" },
    { label: "DXY", value: "100.15", subHtml: 'Ngày: <b class="up">+0.16%</b> · Investing' },
    { label: "UST 10Y", value: "4.751%", subHtml: 'Ngày: <b class="down">−0.5bp</b> · 2s10s <b class="down">−20bp</b>' },
    { label: "VN-Index", value: "1,799.67", subHtml: 'Ngày: <b class="down">−0.88%</b> · đóng T2' }
  ],
  cards: [
    {
      icon: "📈", title: "US Rates & Fed", subtitle: "So với kỳ gần nhất (FOMC)", tag: "+25bp vs kỳ trước", tagClass: "green",
      level: "3.75–4.00%", levelSmall: "Fed funds",
      cols: ["Chỉ số", "Kỳ gần nhất", "Thay đổi"],
      rows: [
        { name: "Fed funds target", day: "3.50–3.75%", week: "+25bp", weekClass: "up" },
        { name: "FOMC 16/09 (Warsh)", day: "Giữ / chờ", week: "Hike", weekClass: "up" },
        { name: "Fedspeak 21/09", day: "Goolsbee/Musalem/Collins", week: "Bias hike thêm", weekClass: "up" }
      ],
      note: "So sánh với kỳ họp / mức chính sách gần nhất — không dùng % ngày/% tuần.",
      news: "FOMC 16/09 +25bp lên 3.75–4.00%. Phiên Mỹ 21/09: Goolsbee, Musalem, Collins củng cố khả năng thêm một lần tăng trong năm; Collins gắn hike tuần trước với Iran energy shock."
    },
    {
      icon: "📊", title: "US Bond Yields", subtitle: "2Y · 10Y · Curve", tag: "Curve đảo", tagClass: "red",
      level: "4.751%", levelSmall: "10Y · Investing",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "2Y UST", day: "−3.3bp", dayClass: "down", week: "—", live: "ust2y" },
        { name: "10Y UST", day: "−0.5bp", dayClass: "down", week: "—", live: "ust10y" },
        { name: "2s10s", day: "−20bp", dayClass: "down", week: "—", live: "ust2s10s" }
      ],
      note: "bp = thay đổi lợi suất vs prior close (Investing delayed). Curve 2s10s âm ~20bp.",
      news: "Sau đà dầu giảm phiên Mỹ 21/09, 2Y ~4.95% (−3bp), 10Y ~4.75%; curve đảo. Yields dịu nhưng USD vẫn giữ nhờ bias hike thêm."
    },
    {
      icon: "💵", title: "DXY", subtitle: "US Dollar Index", tag: "USD firm", tagClass: "green",
      level: "100.15",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [{ name: "DXY", day: "+0.16%", dayClass: "up", week: "—", live: "dxy" }],
      note: "% ngày vs prior close · Investing delayed.",
      news: "DXY giữ trên 100 dù dầu giảm; Fedspeak hawkish + differential vẫn đỡ USD trước Trump–Xi 24/09."
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
      news: "Không có print mới trong khung sáng T3. Catalyst: Aug PCE 30/09; energy shock Iran vẫn là rủi ro đẩy lại lạm phát."
    },
    {
      icon: "🌍", title: "FX — Majors", subtitle: "Asia morning · delayed", tag: "USD bid", tagClass: "",
      level: "USD bid",
      cols: ["Cặp tỷ giá", "% ngày", "% tuần"],
      rows: [
        { name: "EUR/USD", day: "−0.12%", dayClass: "down", week: "—", live: "eurusd" },
        { name: "GBP/USD", day: "−0.16%", dayClass: "down", week: "—", live: "gbpusd" },
        { name: "USD/JPY", day: "+0.23%", dayClass: "up", week: "—", live: "usdjpy" },
        { name: "AUD/USD", day: "−0.04%", dayClass: "down", week: "—", live: "audusd" }
      ],
      note: "Nhật nghỉ lễ T3 — thanh khoản JPY mỏng.",
      news: "EUR/USD ~1.1465; USD/JPY ~157.36. USD giữ vững trước UNGA/Trump–Xi."
    },
    {
      icon: "🏦", title: "Equities & Risk", subtitle: "Phiên Mỹ 21/09", tag: "Risk-on selective", tagClass: "green",
      level: "7,765", levelSmall: "S&P 500",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "S&P 500", day: "+1.49%", dayClass: "up", week: "—", live: "spx" },
        { name: "Nasdaq", day: "+2.26%", dayClass: "up", week: "—", live: "ndx" },
        { name: "Dow", day: "+0.71%", dayClass: "up", week: "—", live: "dji" },
        { name: "Russell", day: "+0.49%", dayClass: "up", week: "—", live: "rut" }
      ],
      note: "% ngày = phiên Mỹ 21/09 vs prior close (Investing).",
      news: "S&P +1.5%, Nasdaq dẫn nhờ Meta/AI/semis; Energy kém. Risk-on tách khỏi dầu giảm."
    },
    {
      icon: "🛢️", title: "Oil & Commodities", subtitle: "WTI · Brent · Gold", tag: "Dầu dump", tagClass: "red",
      level: "$92.23", levelSmall: "WTI · Investing",
      cols: ["Tài sản", "% ngày", "% tuần"],
      rows: [
        { name: "WTI", day: "−3.59%", dayClass: "down", week: "—", live: "wti" },
        { name: "Brent", day: "−3.28%", dayClass: "down", week: "—", live: "brent" },
        { name: "Gold", day: "−0.15%", dayClass: "down", week: "—", live: "gold" }
      ],
      note: "Giá delayed Investing sáng T3.",
      news: "WTI ~$92 (−3.6%), Brent ~$100 (−3.3%) khi Trump mở cửa gặp Pezeshkian + Saudi XK phục hồi một phần. Gold ~$4,405."
    },
    {
      icon: "🇻🇳", title: "Asia / Việt Nam / EM", subtitle: "VN-Index · NHNN · USD/VND", tag: "Thanh khoản linh hoạt", tagClass: "amber",
      level: "1,799.67",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "VN-Index", day: "−0.88%", dayClass: "down", week: "+1.14%", weekClass: "up", live: "vnindex" },
        { name: "NHNN swap FX 7D · max 2 tỷ USD", day: "~48.8 nghìn tỷ VND", dayClass: "val", week: "Value 22/09" },
        { name: "OMO tuần 14–18/09 hút ròng", day: "62.543 nghìn tỷ", dayClass: "val", week: "Dư cầm cố ~152.5 nghìn tỷ" },
        { name: "USD/VND mid", day: "—", week: "—", live: "usdvnd" }
      ],
      note: "LN H cuối 18/09 (CafeF): ON 4.5%, 1W 4.8%, 2W/1M 6%.",
      news: "21/09 NHNN mở lại hoán đổi FX 7 ngày, max 2 tỷ USD (value 22/09) sau tuần OMO hút ròng >62 nghìn tỷ. VN-Index 1,799.67 (−0.88%) kiểm 1,790–1,800."
    },
    {
      icon: "🌏", title: "Asia extras", subtitle: "China · Japan · Korea", tag: "LPR giữ", tagClass: "",
      level: "LPR giữ",
      cols: ["Chỉ số", "% ngày", "% tuần"],
      rows: [
        { name: "China 1Y / 5Y LPR · 3.00% / 3.50%", day: "—", week: "Giữ tháng 16" },
        { name: "BoJ policy rate", day: "1.25%", dayClass: "val", week: "+25bp (18/09)" },
        { name: "Japan equities/FX", day: "Nghỉ lễ T3", week: "—" }
      ],
      note: "Không gán % khi thiếu mốc so sánh.",
      news: "PBoC giữ LPR tháng 16; BoJ +25bp lên 1.25% (7–2) tuần trước — yên yếu, USD/JPY ~157."
    }
  ],
  geoNews: {
    title: "Geo Pulse · Tin quan trọng",
    window: "24h · chốt ~07:15 ICT 22/09 (open wires)",
    sourceNote: "Public wires 21–22/09 — không phải lời khuyên đầu tư. Geo Pulse chưa trả brief trong run này.",
    items: [
      {
        tag: "Oil / Iran", tagClass: "oil", when: "phiên Mỹ 21/09",
        headline: "Dầu lao dốc trên kỳ vọng Trump–Pezeshkian tại UNGA; Hormuz vẫn rối",
        summary: "WTI/Brent giảm ~3–4% khi Trump “probably open” gặp Pezeshkian tại UNGA, vẫn đe dọa leo thang. UKMTO nhận báo cáo chậm sự cố LPG gần Hormuz 21/09. Iran tái khẳng định Hormuz “đóng” đến khi 7 điều kiện được đáp ứng — ngoại giao kéo premium xuống tạm.",
        url: "https://www.cnbc.com/2026/09/21/us-iran-war-trump-hormuz.html"
      },
      {
        tag: "Mỹ – Trung", tagClass: "uscn", when: "21/09 ICT",
        headline: "Bessent: đàm phán Mỹ–Trung “very successful”; AI dialogue trước Trump–Tập 24/09",
        summary: "Sau ~12h đàm phán: AI dialogue + incident line; Board of Trade hàng non-sensitive. Truce thuế (~hết hạn 10/11) là trọng tâm nhưng chưa chốt gia hạn. Greer: không grand bargain. Nút đảo: thượng đỉnh 24/09.",
        url: "https://www.bloomberg.com/news/articles/2026-09-21/bessent-hails-very-successful-china-talks-on-ai-threats-trade"
      },
      {
        tag: "Oil / Shipping", tagClass: "oil", when: "cuối tuần–21/09",
        headline: "Saudi tăng tải từ Gulf; Libya Sharara bị cắt van — cung hỗn hợp",
        summary: "Aramco xếp ~14 triệu thùng lên 7 VLCC từ Gulf; NOC Libya: nhóm vũ trang đóng van 7 đường ống Sharara→Zawiya. Premium dầu phụ thuộc tín hiệu ngoại giao Mỹ–Iran hơn tắc Hormuz hoàn toàn.",
        url: "https://www.reuters.com/world/middle-east/vessels-trickle-through-strait-hormuz-mideast-tension-persists-2026-09-21/"
      },
      {
        tag: "Treasury / Iran", tagClass: "oil", when: "21/09",
        headline: "Bessent: hãng hàng không Iran bị đóng toàn cầu từ 23/09",
        summary: "Treasury siết áp lực kinh tế; Bessent đã thảo luận Iran với Trung Quốc. Greer: không loại trừ công cụ Iran sanctions. Qatar/UAE kêu gọi reset khu vực — đàm phán vs siết chạy song song trước UNGA.",
        url: "https://www.newsquawk.com/headlines/newsquawk-daily-asia-pac-opening-news---22nd-september-2026"
      },
      {
        tag: "Âu – Nga", tagClass: "eu", when: "20–21/09",
        headline: "Trump bảo Zelensky ngừng đánh lọc dầu Nga; Moskva từng dừng sau UAV",
        summary: "FT: Trump lo diesel, yêu cầu Ukraine hạn chế đòn lọc dầu Nga. Nhà máy Moskva từng dừng sau UAV 20/09. Zelensky sẵn sàng ngừng bắn nếu Nga đồng thuận — kênh thứ cấp vs Hormuz/Iran.",
        url: "https://www.cnn.com/2026/09/20/europe/moscow-ukraine-attack-russia-election"
      }
    ]
  },
  comment: {
    badge: "Macro Eco · Nhận định",
    title: "Khung tin: 19:00 21/09 – 07:15 22/09/2026 giờ Việt Nam",
    paragraphs: [
      "<strong>1) Fed & lãi suất Mỹ.</strong> FOMC 16/09 (Chair Warsh) +25bp lên 3.75–4.00%, nhấn “timelier” về 2%. Fedspeak 21/09 (Goolsbee/Musalem/Collins) củng cố bias thêm một lần hike trong năm; Musalem: thiếu restraint thêm thì lạm phát dễ trên 2% rõ sau 18 tháng. UST 2Y ~4.948% (−3.3bp), 10Y ~4.751% (−0.5bp), 2s10s đảo ~−20bp (Investing delayed); DXY 100.15 (+0.16%) vẫn được đỡ.",
      "<strong>2) Trump & Bộ Tài chính Mỹ.</strong> Trước Trump–Tập 24/09, Bessent gọi đàm phán Mỹ–Trung “very successful”: AI dialogue + Board of Trade; truce thuế (~10/11) chưa chốt gia hạn. Song song kênh Iran: Trump “probably open” gặp Pezeshkian tại UNGA nhưng “deciding mode”; Bessent tuyên bố đóng hãng bay Iran toàn cầu từ 23/09. Hai narrative đàm phán–truce vs áp lực tối đa là nút đảo risk premium dầu/USD 24–72h.",
      "<strong>3) Việt Nam.</strong> 21/09 NHNN mở lại <em>hoán đổi FX kỳ hạn 7 ngày</em>, max 2 tỷ USD (~48.812 nghìn tỷ VND nếu dùng hết), tỷ giá mua 24.406 / kỳ hạn 24.412, value 22/09 — bơm VND tạm rồi thu sau 7 ngày (CafeF). Tuần 14–18/09: OMO cầm cố chào 38 nghìn tỷ (LS 4.5%/năm), trúng 22.135 nghìn tỷ, đáo hạn 84.678 nghìn tỷ → <strong>hút ròng 62.543 nghìn tỷ</strong>; dư cầm cố ~152.488 nghìn tỷ. LN H cuối 18/09: ON 4.5% (+1.2 điểm %), 7D 4.8%, 14D & 30D 6%. VN-Index đóng T2 1,799.67 (−0.88%; tuần +1.14%), vùng 1,790–1,800. USD/VND mid ~25,995; VCB từng 25.800/26.210.",
      "<strong>4) Nhật Bản.</strong> BoJ +25bp lên 1.25% (7–2) ngày 18/09. USD/JPY ~157.36 (+0.23%) sáng T3 khi Nhật nghỉ lễ — thanh khoản JPY mỏng.",
      "<strong>5) Trung Quốc.</strong> PBoC tiếp tục giữ LPR kỳ hạn 1 năm ở 3,00% và LPR 5 năm ở 3,50% — tháng thứ 16 liên tiếp không điều chỉnh. Trong khung gần, biến số quan trọng với Trung Quốc không phải nới lãi suất ngay, mà là kết quả thượng đỉnh Trump–Tập ngày 24/09 và khả năng gia hạn thỏa thuận tạm dừng thuế.",
      "<strong>6) Vĩ mô toàn cầu khác.</strong> Không có số CPI hay PCE mới trong khung giờ này. Phiên Mỹ 21/09, chứng khoán tăng chọn lọc: S&P 500 khoảng 7.765 (+1,49%) và Nasdaq +2,26%, trong khi dầu giảm mạnh — WTI khoảng 92 USD (−3,59%) và Brent khoảng 100 USD (−3,28%). Vàng quanh 4.405 USD; Bitcoin khoảng 86,5 nghìn USD (+6,5%). Các mốc cần theo dõi tiếp: hạn chế hàng không Iran từ 23/09, thượng đỉnh Trump–Tập 24/09, Aug PCE ngày 30/09 và Sep CPI ngày 14/10.",
      "<strong>7) Kịch bản nghiên cứu 24–72h (không phải lời khuyên đầu tư).</strong> <em>Base:</em> tín hiệu tại UNGA giúp giữ premium dầu ở mức thấp hơn (Brent khoảng 95–105 USD), Trump–Tập đạt gia hạn tạm kỹ thuật cho thỏa thuận thuế, và Fed vẫn giữ lập trường restrictive — USD cùng lợi suất được đỡ. <em>Upside:</em> nếu Trump–Pezeshkian có tiến triển rõ và truce Mỹ–Trung được khẳng định, dầu có thể lùi thêm và tâm lý risk-on mở rộng. <em>Downside:</em> nếu xuất hiện bước quân sự, đòn vào Hormuz hoặc truce Mỹ–Trung đổ vỡ, dầu dễ tăng mạnh trở lại kèm USD mạnh và risk-off.",
      "<strong>8) Chiến lược Trading.</strong> (i) Bias chung vẫn là Fed restrictive kết hợp rủi ro địa chính trị, dù ngoại giao đang kéo premium xuống tạm thời — chưa thể coi là all-clear. (ii) Với rates và FX, DXY vẫn trên 100 và đường cong 2s10s còn đảo; không nên đọc việc lợi suất dịu nhẹ như tín hiệu Fed sắp pivot. (iii) Ở năng lượng, WTI dưới 95 USD phản ánh kỳ vọng ngoại giao hơn là rủi ro cung đã hết — nên giữ quy mô nhỏ trước các mốc Iran và UNGA. (iv) Với Việt Nam, ưu tiên theo dõi thanh khoản NHNN qua OMO và hoán đổi FX, cùng vùng hỗ trợ VN-Index 1.790–1.800. (v) Các catalyst gần: hạn chế hàng không Iran 23/09, Trump–Tập 24/09 và Aug PCE 30/09.",
      "<strong>Sources:</strong> CafeF — NHNN mở kênh bơm VND >48.000 tỷ; Thời báo Tài chính VN — tiền tệ tuần 14–18/9; Newsquawk Asia-Pac 22/09; CNBC/Bloomberg/Reuters wires; Fed FOMC 16/09; Investing delayed quotes."
    ]
  },
  bottomLine: [
    "Dầu dump ~3–4% trên kỳ vọng ngoại giao UNGA/Trump–Iran; premium hạ tạm — quyết định quân sự hay deal vẫn là nút đảo.",
    "Fed speakers củng cố bias hike thêm; DXY giữ >100 dù yields dịu và curve 2s10s đảo ~20bp.",
    "Việt Nam: NHNN swap FX 7D max 2 tỷ USD (value 22/09) sau OMO hút ròng 62.5 nghìn tỷ; LN H ON 4.5% / 7D 4.8% / 14D–30D 6% (cuối 18/09).",
    "Trump–Tập 24/09: trọng tâm gia hạn truce thuế; AI dialogue là deliverable mềm — chưa grand bargain."
  ],
  catalysts: [
    { when: "23/09", what: "Iran airlines cutoff toàn cầu (Bessent)" },
    { when: "24/09", what: "Thượng đỉnh Trump–Tập · truce thuế" },
    { when: "Tuần này", what: "UNGA · Trump–Pezeshkian? · Fedspeak" },
    { when: "30/09", what: "Aug PCE · thước đo ưa thích của Fed" },
    { when: "14/10", what: "Sep CPI" }
  ],
  footer: {
    left: "Macro Eco · Snapshot · index.html cố định · data.js đổi hàng ngày",
    source: "Nguồn: Fed · Investing delayed · CafeF/TBTCvN · Newsquawk · public wires — not investment advice"
  }
};
