#!/usr/bin/env python3
"""Add (or refresh) the "kraft" namespace in messages/{ja,en,zh}.json.

Review-only: the namespace feeds the Kraft Riso design, the sixth entry of the
配色プレビュー switcher. Delete the namespace when the switcher goes.

Display headlines, the ink names and the printer's marks stay English in every
locale — they are part of the visual identity, exactly as the other alternative
designs do it. Body copy, nav labels and anything a guest has to act on are
translated.
"""
import json, pathlib, collections

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")

# Identical in all three locales: set as display type, not as copy.
DISPLAY = {
    "hero": {
        "eyebrow": "03 Rooms — Shinjuku Gyoenmae, Tokyo",
        "titleA": "Live", "titleB": "Tokyo", "titleOut": "Beautifully.",
        "en": "Three rooms. Three inks. One small house next to the garden.",
        "figL": "Fig. 01 — Gyoen / 3 plates", "figR": "Green × Orange × Blue",
    },
    "ticker": {"w1": "Kraft", "w2": "Riso", "w3": "3 Rooms 3 Inks",
               "w4": "Shinjuku Gyoen 3′", "w5": "Printed in Tokyo"},
    "stats": {"n1": "03", "n2": "3′", "n3": "8′", "n4": "4",
              "l1": "Rooms Only", "l2": "To Shinjuku Gyoen",
              "l3": "To Shinjuku Station", "l4": "Guests Max"},
    "concept": {"idx": "01", "nm": "Concept",
                "titleA": "Three inks,", "titleB": "one small house.",
                "en": "Three rooms between the noise of Shinjuku and the quiet of the garden. "
                      "We printed each one in its own ink — green for the lawn, orange for worn "
                      "leather, blue for washed indigo. Built to be lived in, not checked into.",
                "figTag": "Fig. 02 — Living / Room 01"},
    "rooms": {
        "idx": "02", "nm": "Rooms",
        "titleA": "Three rooms.", "titleB": "Three ways to live here.",
        "sizeLab": "Size", "guestsLab": "Guests", "bedLab": "Bed",
        "floorLab": "Floor", "openLab": "Open",
        "r1Brand": "unico", "r2Brand": "journal standard furniture", "r3Brand": "crash gate",
        "r1En": "Natural Living", "r2En": "Urban Vintage", "r3En": "Industrial Modern",
        "r1Size": "32㎡", "r1Guests": "2–4", "r1Bed": "Double + Sofa", "r1Floor": "2F",
        "r2Size": "34㎡", "r2Guests": "2–4", "r2Bed": "Queen + Sofa", "r2Floor": "3F",
        "r3Open": "2026 —", "r3Floor": "4F",
    },
    "exp": {"idx": "03", "nm": "Experience",
            "titleA": "Step out.", "titleB": "The city is the lobby.",
            "c1": "Gyoen", "c2": "Kissa", "c3": "Laundry", "c4": "Yokocho", "c5": "Skyline",
            "d1": "Shinjuku Gyoen", "d2": "Isetan", "d3": "Golden Gai", "d4": "Omoide Yokocho",
            "d5": "Yoyogi Park", "d6": "Haneda", "d7": "Narita",
            "t1": "3′", "t2": "9′", "t3": "12′", "t4": "14′", "t5": "18′", "t6": "45′", "t7": "90′"},
    "ink": {"idx": "04", "nm": "Ink",
            "titleA": "Three inks.", "titleB": "One sheet of kraft.",
            "i1": "Gyoen", "i2": "Worn", "i3": "Indigo",
            "i1Hex": "#00A95C · fluo green", "i2Hex": "#FF6C2F · orange",
            "i3Hex": "#3D5588 · federal blue",
            "i1Role": "Room 01 — unico", "i2Role": "Room 02 — journal standard",
            "i3Role": "Room 03 — crash gate",
            "op1": "Green × Orange", "op2": "Green × Blue", "op3": "Orange × Blue"},
    "location": {"idx": "05", "nm": "Location & Access",
                 "titleA": "Three minutes", "titleB": "from the garden gate.",
                 "zip": "〒160-0022", "name": "K3V SHINJUKU GYOEN",
                 "pin": "K3V — HERE", "figTag": "Fig. 03 — Neighbourhood",
                 "m1": "3", "m2": "7", "m3": "8", "m4": "3", "unit": "min"},
    "cta": {"eyebrow": "Direct Booking — Best Rate Guaranteed",
            "titleA": "Stay in the heart of Tokyo.", "titleB": "Live it beautifully.",
            "price": "¥18,000"},
    "footer": {"brand": "K3V Shinjuku Gyoen",
               "hRooms": "Stay", "hHouse": "House", "hInfo": "Info",
               "l1": "Room 01 — unico", "l2": "Room 02 — journal standard",
               "l3": "Room 03 — crash gate",
               "copyright": "© 2026 K3V Shinjuku Gyoen",
               "credit": "Kraft Riso — Green × Orange × Blue on Kraft"},
}

JA = {
    "nav": {"concept": "コンセプト", "rooms": "お部屋", "experience": "まちのこと",
            "ink": "インク", "access": "アクセス", "book": "空室を見る", "menu": "メニュー"},
    "hero": {"sub": "刷りたてのZINEみたいに、ざらっとした東京。\n御苑まで3分、全3室。ぜんぶ違う色で刷ってあります。",
             "ctaPrimary": "公式サイトで予約", "ctaSecondary": "3室を見る"},
    "concept": {
        "p1": "新宿三丁目の喧騒から二本入ると、空気がすっとゆるむ。K3V SHINJUKU GYOEN は、その路地に建つ全3室の小さな家です。",
        "p2": "部屋は3つ、それぞれ家具ブランドが違います。だから3色で刷り分けました。緑は御苑の芝、オレンジは使い込んだ革とアイアン、青は洗いざらしのデニム。ページをめくるみたいに、ドアごとに色が変わります。",
        "p3": "整いすぎたホテルの快適さではなく、「ここに住んでみたい」と思う快適さを目指しました。",
    },
    "rooms": {
        "note": "家具ブランドごとに世界観を変えた全3室。同じ建物なのに、ドアを開けると空気が変わります。",
        "open": "受付中", "soon": "準備中",
        "r1Jp": "やわらかい北欧", "r2Jp": "使い込んだ質感", "r3Jp": "準備中",
        "r1Body": "オークの家具と麻のファブリック。朝の光がいちばん長く入る部屋です。ベッドの脇には小さなワークデスク。",
        "r2Body": "アイアンと古材、履き込んだインディゴのソファ。夜がいちばん似合う部屋。灯りを落とすと、外の新宿がちょうどよく遠くなります。",
        "r3Body": "アイアンと無垢材のコントラストで組み上げる3室目。いま、いちばん骨太な部屋をつくっています。オープンは追ってお知らせします。",
        "r1Cta": "この部屋を見る", "r2Cta": "この部屋を見る", "r3Cta": "オープンを知らせる",
        "tba": "準備中",
    },
    "exp": {
        "note": "御苑の芝生、路地裏の喫茶店、深夜のうどん。玄関を出た瞬間から、滞在は始まっています。",
        "b1": "徒歩3分。朝いちの芝生はほぼ貸切です。",
        "b2": "昭和から続く喫茶店が、まだ何軒も残っています。",
        "b3": "洗濯機は部屋にも。長く居るほど、旅が生活になります。",
        "b4": "新宿三丁目の路地。深夜1時でも灯りが残っている。",
        "b5": "電線と高層ビルと木。東京らしい風景がぜんぶある。",
    },
    "ink": {
        "note": "この建物は、たった3つの色でできています。混ぜず、重ねる。重なったところに4つ目の色が出る ── リソグラフと同じつくりかたです。",
        "i1Body": "御苑の芝と、窓辺の鉢。いちばん面積の広いインクで、朝の部屋を刷っています。",
        "i2Body": "使い込んだ革、錆びたアイアン、夕方の光。時間が経つほど良くなるものの色です。",
        "i3Body": "洗いざらしのデニムと、夜の新宿。文字を刷れる唯一の明るいインクでもあります。",
        "op1Note": "廊下と階段のオリーブ", "op2Note": "夕暮れの御苑の深緑", "op3Note": "古材と革の赤茶",
    },
    "location": {
        "addr": "東京都新宿区新宿1丁目 ×-×-×",
        "r1": "丸ノ内線 新宿御苑前", "r2": "副都心線 新宿三丁目",
        "r3": "JR 新宿駅 東南口", "r4": "新宿御苑 大木戸門",
    },
    "cta": {
        "body": "公式サイトからのご予約が、いちばんお得です。OTA手数料のぶん、そのまま宿泊料に還元しています。",
        "ctaPrimary": "空室を見る", "ctaSecondary": "質問する",
        "priceNote": "1泊 / 2名〜",
        "li1": "チェックイン 16:00 — アウト 11:00",
        "li2": "セルフチェックイン / Wi-Fi 無料",
        "li3": "全室に洗濯乾燥機",
    },
    "footer": {
        "note": "新宿御苑のすぐそばで、東京を暮らすように滞在する。家具ブランドごとにコンセプトが異なる、全3室のデザイナーズ民泊。",
        "book": "空室を見る", "concept": "コンセプト", "ink": "インク",
        "experience": "まちのこと", "access": "アクセス",
        "rules": "ハウスルール", "faq": "よくある質問", "privacy": "プライバシーポリシー",
        "law": "住宅宿泊事業法 表示",
    },
}

EN = {
    "nav": {"concept": "Concept", "rooms": "Rooms", "experience": "Experience",
            "ink": "Ink", "access": "Access", "book": "Book Now", "menu": "Menu"},
    "hero": {"sub": "Tokyo with the texture of a freshly printed zine.\nThree minutes to the garden, three rooms — each one printed in its own colour.",
             "ctaPrimary": "Book Direct", "ctaSecondary": "See The Rooms"},
    "concept": {
        "p1": "Two streets in from the noise of Shinjuku Sanchome the air loosens. K3V SHINJUKU GYOEN is a small house on that lane, with three rooms in total.",
        "p2": "Three rooms, three furniture brands — so we printed each in its own ink. Green for the lawn at Gyoen, orange for worn leather and iron, blue for washed indigo. The colour changes at every door, like turning a page.",
        "p3": "Not the tidy comfort of a hotel, but the kind that makes you think you could live here.",
    },
    "rooms": {
        "note": "Three rooms, each built around a different furniture brand. Same building — but the air changes when you open the door.",
        "open": "Now Open", "soon": "Coming Soon",
        "r1Jp": "Soft Scandinavian", "r2Jp": "Worn-in texture", "r3Jp": "In preparation",
        "r1Body": "Oak furniture and linen. The room that holds the morning light longest, with a small work desk beside the bed.",
        "r2Body": "Iron, reclaimed timber and a well-worn indigo sofa. This room is at its best at night — turn the lights down and Shinjuku moves comfortably far away.",
        "r3Body": "The third room, built on the contrast between iron and solid timber. We are making the most solid room of the three. Opening date to follow.",
        "r1Cta": "View Room 01", "r2Cta": "View Room 02", "r3Cta": "Get Notified",
        "tba": "TBA",
    },
    "exp": {
        "note": "The lawn at Gyoen, a back-street kissaten, udon at midnight. The stay starts the moment you step out the door.",
        "b1": "Three minutes on foot. First thing in the morning the lawn is more or less yours.",
        "b2": "Several kissaten around here have been open since the Showa era.",
        "b3": "There is a washer in every room. The longer you stay, the more the trip becomes life.",
        "b4": "The lanes of Shinjuku Sanchome. Lights still on at one in the morning.",
        "b5": "Power lines, towers and trees — the whole Tokyo skyline in one view.",
    },
    "ink": {
        "note": "This building is made of exactly three colours. Not mixed — layered. A fourth colour appears where they overlap, which is how risograph works.",
        "i1Body": "The lawn at Gyoen and the pot on the windowsill. The widest ink on the page; it prints the morning room.",
        "i2Body": "Worn leather, rusted iron, late afternoon light. The colour of things that improve with time.",
        "i3Body": "Washed indigo and Shinjuku at night. Also the only bright ink that can carry type.",
        "op1Note": "the olive of the stairwell", "op2Note": "Gyoen at dusk", "op3Note": "reclaimed timber and leather",
    },
    "location": {
        "addr": "1-x-x Shinjuku, Shinjuku-ku, Tokyo",
        "r1": "Marunouchi Line — Shinjuku-gyoenmae", "r2": "Fukutoshin Line — Shinjuku-sanchome",
        "r3": "JR Shinjuku Station — South East Exit", "r4": "Shinjuku Gyoen — Okido Gate",
    },
    "cta": {
        "body": "Booking through the official site is always the best rate. What we would pay in OTA commission goes straight back into the room rate.",
        "ctaPrimary": "Book Your Stay", "ctaSecondary": "Ask a Question",
        "priceNote": "/ night — from, 2 guests",
        "li1": "Check-in 16:00 — Check-out 11:00",
        "li2": "Self check-in / Free Wi-Fi",
        "li3": "Washer & dryer in every room",
    },
    "footer": {
        "note": "Stay steps away from Shinjuku Gyoen and live Tokyo rather than visit it. Three design apartments, each built around a different furniture brand.",
        "book": "Book Direct", "concept": "Concept", "ink": "Ink",
        "experience": "Experience", "access": "Access",
        "rules": "House Rules", "faq": "FAQ", "privacy": "Privacy",
        "law": "Housing Accommodation Business Act notice",
    },
}

ZH = {
    "nav": {"concept": "概念", "rooms": "客房", "experience": "街区",
            "ink": "油墨", "access": "交通", "book": "查看空房", "menu": "菜单"},
    "hero": {"sub": "像刚印好的ZINE一样，带着颗粒感的东京。\n步行3分钟到御苑，共3间客房，每一间都用不同的颜色印刷。",
             "ctaPrimary": "官网预订", "ctaSecondary": "查看3间客房"},
    "concept": {
        "p1": "从新宿三丁目的喧嚣往里走两条街，空气忽然松了下来。K3V SHINJUKU GYOEN 就是这样一条小巷里、只有3间客房的小房子。",
        "p2": "三间房，三个家具品牌，所以我们用三种颜色分别印刷。绿色是御苑的草坪，橙色是用旧的皮革与铁件，蓝色是洗旧的丹宁。每开一扇门，颜色就换一次，像翻页一样。",
        "p3": "我们想要的不是酒店那种整齐的舒适，而是让人想「住进来看看」的舒适。",
    },
    "rooms": {
        "note": "三间客房各自围绕一个家具品牌。明明是同一栋楼，推开门空气却不一样。",
        "open": "接受预订", "soon": "筹备中",
        "r1Jp": "柔和的北欧", "r2Jp": "用旧的质感", "r3Jp": "筹备中",
        "r1Body": "橡木家具与亚麻织物。晨光停留最久的房间，床边还有一张小书桌。",
        "r2Body": "铁件、旧木料，还有一张穿旧了的靛蓝沙发。这是最适合夜晚的房间——把灯调暗，窗外的新宿就恰到好处地远了。",
        "r3Body": "第三间房以铁件与实木的对比构成，是三间里最硬朗的一间，目前仍在施工。开放时间另行通知。",
        "r1Cta": "查看这间房", "r2Cta": "查看这间房", "r3Cta": "开放时通知我",
        "tba": "待定",
    },
    "exp": {
        "note": "御苑的草坪、巷子里的咖啡馆、深夜的乌冬。走出玄关的那一刻，住宿就已经开始了。",
        "b1": "步行3分钟。清早的草坪几乎是你一个人的。",
        "b2": "这一带还留着好几家从昭和年代开到今天的咖啡馆。",
        "b3": "每间房都有洗衣机。住得越久，旅行就越像生活。",
        "b4": "新宿三丁目的小巷。凌晨一点也还亮着灯。",
        "b5": "电线、高楼和树。东京该有的风景这里都有。",
    },
    "ink": {
        "note": "这栋房子只由三种颜色构成。不混合，而是叠印。重叠处会浮现出第四种颜色——这正是孔版印刷的做法。",
        "i1Body": "御苑的草坪，窗边的花盆。面积最大的一种油墨，印出清晨的房间。",
        "i2Body": "用旧的皮革、生锈的铁件、傍晚的光。属于那些越用越好的东西的颜色。",
        "i3Body": "洗旧的丹宁与夜晚的新宿。也是唯一能承载文字的亮色油墨。",
        "op1Note": "楼梯间的橄榄色", "op2Note": "黄昏时御苑的深绿", "op3Note": "旧木与皮革的赤褐",
    },
    "location": {
        "addr": "东京都新宿区新宿1丁目 ×-×-×",
        "r1": "丸之内线 新宿御苑前", "r2": "副都心线 新宿三丁目",
        "r3": "JR 新宿站 东南口", "r4": "新宿御苑 大木户门",
    },
    "cta": {
        "body": "通过官网预订永远是最优惠的。省下的OTA手续费，我们直接回馈到房价里。",
        "ctaPrimary": "查看空房", "ctaSecondary": "咨询",
        "priceNote": "每晚 / 2人起",
        "li1": "入住 16:00 — 退房 11:00",
        "li2": "自助入住 / 免费 Wi-Fi",
        "li3": "全室配备洗烘一体机",
    },
    "footer": {
        "note": "就在新宿御苑旁，以生活的方式住进东京。三间客房，各自围绕不同的家具品牌打造。",
        "book": "查看空房", "concept": "概念", "ink": "油墨",
        "experience": "街区", "access": "交通",
        "rules": "住宿规则", "faq": "常见问题", "privacy": "隐私政策",
        "law": "住宅宿泊事业法 标示",
    },
}


def merged(locale_data):
    out = collections.OrderedDict()
    for section, values in locale_data.items():
        s = collections.OrderedDict(values)
        s.update(DISPLAY.get(section, {}))
        out[section] = s
    for section, values in DISPLAY.items():
        if section not in out:
            out[section] = collections.OrderedDict(values)
    return out


JA, EN, ZH = merged(JA), merged(EN), merged(ZH)


def keys(d):
    return {f"{s}.{k}" for s, v in d.items() for k in v}


ref = keys(JA)
for name, data in (("en", EN), ("zh", ZH)):
    missing, extra = ref - keys(data), keys(data) - ref
    assert not missing and not extra, f"{name}: missing={sorted(missing)} extra={sorted(extra)}"


def dump(obj, indent=0):
    """json.dumps(indent=2), except arrays of scalars stay on one line — that is
    the existing formatting in messages/*.json and there is no formatter in the
    repo to normalise it back."""
    pad, inner = " " * indent, " " * (indent + 2)
    if isinstance(obj, dict):
        if not obj:
            return "{}"
        items = [f"{inner}{json.dumps(k, ensure_ascii=False)}: {dump(v, indent + 2)}" for k, v in obj.items()]
        return "{\n" + ",\n".join(items) + f"\n{pad}}}"
    if isinstance(obj, list):
        if all(not isinstance(v, (dict, list)) for v in obj):
            return "[" + ", ".join(dump(v, indent) for v in obj) + "]"
        items = [f"{inner}{dump(v, indent + 2)}" for v in obj]
        return "[\n" + ",\n".join(items) + f"\n{pad}]"
    return json.dumps(obj, ensure_ascii=False)


for name, data in (("ja", JA), ("en", EN), ("zh", ZH)):
    path = ROOT / f"messages/{name}.json"
    doc = json.loads(path.read_text(), object_pairs_hook=collections.OrderedDict)
    doc["kraft"] = data
    path.write_text(dump(doc) + "\n")
    print(f"messages/{name}.json  kraft namespace: {len(ref)} keys")
