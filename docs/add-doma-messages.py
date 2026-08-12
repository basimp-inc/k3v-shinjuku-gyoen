#!/usr/bin/env python3
"""Add (or refresh) the "doma" namespace in messages/{ja,en,zh}.json.

Review-only: the namespace feeds the Doma Ceramic design, the seventh entry of
the 配色プレビュー switcher. Delete the namespace when the switcher goes.

This design is 和文主導 — the display face is Japanese and the Latin sits under
it as a subtitle — so far more of it is translated than in Kraft Riso. What stays
English in every locale is the small Latin subtitle line, the figure captions and
the hex/role labels, which are part of the visual identity.

The hero headline is split into four slots (titleA + titleEm + titleB, then
titleC on the second line) because the emphasised words sit in a different place
in each language: 「<em>新宿御苑</em>のとなりで、」 vs "Next door to
<em>Shinjuku Gyoen</em>,".
"""
import json, pathlib, collections

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")

# Identical in all three locales: set as display type, not as copy.
DISPLAY = {
    "hero": {
        "eyebrow": "03 Rooms — Shinjuku Gyoenmae, Tokyo",
        "lat": "Not just a stay. Live Tokyo beautifully.",
        "figL": "Fig. 01 — Doma & three glazes", "figR": "Oribe · Ame · Tetsu",
    },
    "stats": {"l1": "Rooms Only", "l2": "To Shinjuku Gyoen",
              "l3": "To Shinjuku Station", "l4": "Guests Max"},
    "concept": {"idx": "01", "nm": "Concept", "lat": "Three glazes, one clay",
                "en": "Three rooms fired from the same clay, finished in three different glazes. "
                      "Matte, a little rough, made to be used every day — not the kind you keep "
                      "in the cabinet.",
                "figTag": "Fig. 02 — Living / Room 01"},
    "rooms": {
        "idx": "02", "nm": "Rooms", "lat": "Three rooms, three ways to live",
        "r1Brand": "unico", "r2Brand": "journal standard furniture", "r3Brand": "crash gate",
        "r1Glaze": "織部釉 · Oribe green · Natural Living",
        "r2Glaze": "飴釉 · Amber glaze · Urban Vintage",
        "r3Glaze": "鉄釉 · Iron glaze · Industrial Modern",
        "r1Size": "32㎡", "r1Bed": "Double + Sofa", "r1Floor": "2F",
        "r2Size": "34㎡", "r2Bed": "Queen + Sofa", "r2Floor": "3F",
        "r3Open": "2026 —", "r3Floor": "4F",
    },
    "exp": {"idx": "03", "nm": "Neighbourhood", "lat": "Step out — the city is the lobby"},
    "glaze": {"idx": "04", "nm": "Material", "lat": "Three glazes and the clay under them",
              "g1Hex": "#5C7052 · 織部釉", "g2Hex": "#9A5622 · 飴釉",
              "g3Hex": "#3A332C · 鉄釉", "g4Hex": "#A99177 · 三和土",
              "g1Role": "Room 01 — unico", "g2Role": "Room 02 — journal standard",
              "g3Role": "Room 03 — crash gate"},
    "location": {"idx": "05", "nm": "Location & Access",
                 "lat": "Three minutes from the garden gate",
                 "zip": "〒160-0022", "name": "K3V SHINJUKU GYOEN",
                 "figTag": "Fig. 03 — Neighbourhood",
                 "m1": "3", "m2": "7", "m3": "8", "m4": "3", "unit": "min"},
    "cta": {"eyebrow": "Direct Booking — Best Rate Guaranteed", "price": "¥18,000"},
    "footer": {"brand": "K3V Shinjuku Gyoen",
               "hRooms": "Rooms", "hHouse": "House", "hInfo": "Info",
               "l1": "Room 01 — unico", "l2": "Room 02 — journal standard",
               "l3": "Room 03 — crash gate",
               "copyright": "© 2026 K3V Shinjuku Gyoen",
               "credit": "Doma Ceramic — 織部 · 飴釉 · 鉄釉 on 和紙"},
}

JA = {
    "nav": {"concept": "コンセプト", "rooms": "お部屋", "experience": "まちのこと",
            "material": "素材", "access": "アクセス", "book": "空室を見る", "menu": "メニュー"},
    "hero": {"titleA": "", "titleEm": "新宿御苑", "titleB": "のとなりで、",
             "titleC": "暮らすように過ごす。",
             "sub": "土間があって、器があって、窓の外に御苑の緑。\n家具ブランドごとに世界の違う、全3室の小さな家です。",
             "ctaPrimary": "公式サイトで予約", "ctaSecondary": "3室を見る"},
    "ticker": {"w1": "器と土間と、御苑の緑。", "w2": "全3室",
               "w3": "新宿御苑まで3分", "w4": "公式サイトが最安"},
    "stats": {"n1": "3室", "n2": "3分", "n3": "8分", "n4": "4名"},
    "concept": {
        "title": "三つの釉薬と、ひとつの土。",
        "p1": "新宿三丁目の喧騒から二本入ると、空気がすっとゆるむ。K3V SHINJUKU GYOEN は、その路地に建つ全3室の小さな家です。",
        "p2": "玄関を開けると三和土の土間。棚には器が三つ、それぞれ釉薬が違います。部屋も同じで、家具ブランドごとに色と質感を変えました。同じ土から焼いたのに、窯から出すと違う顔をしている ── そんな3室です。",
        "p3": "つるつるした高級感ではなく、手に持ったときに少しざらつく、あの感じを目指しました。毎日使うほうの器です。",
    },
    "rooms": {
        "title": "ドアを開けると、色が変わる。",
        "note": "家具ブランドごとに世界観を変えた全3室。同じ建物なのに、部屋ごとに空気の質感が違います。",
        "open": "受付中", "soon": "準備中",
        "sizeLab": "広さ", "guestsLab": "定員", "bedLab": "ベッド",
        "floorLab": "階", "openLab": "オープン",
        "r1Jp": "やわらかい北欧", "r2Jp": "使い込んだ質感", "r3Jp": "骨太なインダストリアル",
        "r1Guests": "2–4名", "r2Guests": "2–4名", "tba": "準備中",
        "r1Body": "オークの家具と麻のファブリック。朝の光がいちばん長く入る部屋です。ベッドの脇には小さなワークデスク。窓辺には御苑と同じ色の鉢をひとつ。",
        "r2Body": "アイアンと古材、履き込んだインディゴのソファ。夜がいちばん似合う部屋。灯りを落とすと、外の新宿がちょうどよく遠くなります。",
        "r3Body": "アイアンと無垢材のコントラストで組み上げる3室目。いま、いちばん骨太な部屋をつくっています。オープンは追ってお知らせします。",
        "r1Cta": "この部屋を見る", "r2Cta": "この部屋を見る", "r3Cta": "オープンを知らせる",
    },
    "exp": {
        "title": "玄関を出たら、もう滞在。",
        "note": "御苑の芝生、路地裏の喫茶店、深夜のうどん。まちのほうが、部屋より広いリビングです。",
        "c1": "御苑", "c2": "喫茶店", "c3": "洗濯機", "c4": "横丁", "c5": "空",
        "b1": "徒歩3分。朝いちの芝生はほぼ貸切です。",
        "b2": "昭和から続く喫茶店が、まだ何軒も残っています。",
        "b3": "洗濯機は部屋にも。長く居るほど、旅が生活になります。",
        "b4": "新宿三丁目の路地。深夜1時でも灯りが残っている。",
        "b5": "電線と高層ビルと木。東京らしい風景がぜんぶある。",
        "d1": "新宿御苑", "d2": "伊勢丹", "d3": "ゴールデン街", "d4": "思い出横丁",
        "d5": "代々木公園", "d6": "羽田", "d7": "成田",
        "t1": "3分", "t2": "9分", "t3": "12分", "t4": "14分",
        "t5": "18分", "t6": "45分", "t7": "90分",
    },
    "glaze": {
        "title": "この家は、四つの素材でできています。",
        "note": "手で触れられるものだけで世界観をつくりました。どれもマットで、少しざらつきます。",
        "g1": "織部", "g2": "飴", "g3": "鉄", "g4": "土間",
        "g4Role": "玄関 · 共用部",
        "g1Body": "御苑の芝と、窓辺の鉢。いちばん面積の広い釉です。深いのに重くならない緑。",
        "g2Body": "使い込んだ革、錆びたアイアン、夕方の光。時間が経つほど良くなるものの色。",
        "g3Body": "アイアンと影。黒というより、焼き締まった鉄の色です。3室でいちばん骨太。",
        "g4Body": "三つの釉の下にある土。骨材が見える荒い床で、靴のまま入れます。",
    },
    "location": {
        "title": "大木戸門まで、歩いて3分。",
        "addr": "東京都新宿区新宿1丁目 ×-×-×",
        "r1": "丸ノ内線 新宿御苑前", "r2": "副都心線 新宿三丁目",
        "r3": "JR 新宿駅 東南口", "r4": "新宿御苑 大木戸門",
    },
    "cta": {
        "title": "公式サイトからが、いちばんお得です。",
        "body": "OTA手数料のぶんは、そのまま宿泊料に還元しています。空室状況もこちらがいちばん早く反映されます。",
        "ctaPrimary": "空室を見る", "ctaSecondary": "質問する",
        "priceNote": "1泊 / 2名〜",
        "li1": "チェックイン 16:00 — アウト 11:00",
        "li2": "セルフチェックイン / Wi-Fi 無料",
        "li3": "全室に洗濯乾燥機",
    },
    "footer": {
        "note": "新宿御苑のすぐそばで、東京を暮らすように滞在する。家具ブランドごとにコンセプトが異なる、全3室のデザイナーズ民泊。",
        "book": "空室を見る", "concept": "コンセプト", "material": "素材",
        "experience": "まちのこと", "access": "アクセス",
        "rules": "ハウスルール", "faq": "よくある質問", "privacy": "プライバシーポリシー",
        "law": "住宅宿泊事業法 表示",
    },
}

EN = {
    "nav": {"concept": "Concept", "rooms": "Rooms", "experience": "Neighbourhood",
            "material": "Material", "access": "Access", "book": "Check Availability", "menu": "Menu"},
    "hero": {"titleA": "Next door to ", "titleEm": "Shinjuku Gyoen", "titleB": ",",
             "titleC": "living like you live here.",
             "sub": "An earth floor at the entrance, bowls on the shelf, the garden's green out the window.\nThree small rooms, each with a world of its own.",
             "ctaPrimary": "Book Direct", "ctaSecondary": "See the three rooms"},
    "ticker": {"w1": "Bowls, clay floor, garden green.", "w2": "Three rooms only",
               "w3": "3 min to Shinjuku Gyoen", "w4": "Best rate on the official site"},
    "stats": {"n1": "3", "n2": "3 min", "n3": "8 min", "n4": "4"},
    "concept": {
        "title": "Three glazes, one clay.",
        "p1": "Two streets in from the noise of Shinjuku Sanchome the air loosens. K3V SHINJUKU GYOEN is a small house on that lane, with three rooms in total.",
        "p2": "Open the door and there is a packed-earth floor. Three bowls on the shelf, each in a different glaze — and the rooms work the same way, one colour and texture per furniture brand. Fired from the same clay, they come out of the kiln with different faces.",
        "p3": "Not the polished kind of luxury, but the slight roughness you feel when you pick a piece up. The kind of bowl you use every day.",
    },
    "rooms": {
        "title": "Open the door and the colour changes.",
        "note": "Three rooms, each built around a different furniture brand. Same building — but the air has a different texture in each.",
        "open": "Now Open", "soon": "Coming Soon",
        "sizeLab": "Size", "guestsLab": "Guests", "bedLab": "Bed",
        "floorLab": "Floor", "openLab": "Opens",
        "r1Jp": "Soft Scandinavian", "r2Jp": "Worn-in texture", "r3Jp": "Solid industrial",
        "r1Guests": "2–4", "r2Guests": "2–4", "tba": "TBA",
        "r1Body": "Oak furniture and linen. The room that holds the morning light longest, with a small work desk beside the bed and a pot on the sill in the same green as the garden.",
        "r2Body": "Iron, reclaimed timber and a well-worn indigo sofa. This room is at its best at night — turn the lights down and Shinjuku moves comfortably far away.",
        "r3Body": "The third room, built on the contrast between iron and solid timber. We are making the most solid room of the three. Opening date to follow.",
        "r1Cta": "View this room", "r2Cta": "View this room", "r3Cta": "Notify me when it opens",
    },
    "exp": {
        "title": "Step out the door and the stay has started.",
        "note": "The lawn at Gyoen, a back-street kissaten, udon at midnight. The neighbourhood is a bigger living room than the room is.",
        "c1": "Gyoen", "c2": "Kissaten", "c3": "Laundry", "c4": "Yokocho", "c5": "Sky",
        "b1": "Three minutes on foot. First thing in the morning the lawn is more or less yours.",
        "b2": "Several kissaten around here have been open since the Showa era.",
        "b3": "There is a washer in every room. The longer you stay, the more the trip becomes life.",
        "b4": "The lanes of Shinjuku Sanchome. Lights still on at one in the morning.",
        "b5": "Power lines, towers and trees — the whole Tokyo skyline in one view.",
        "d1": "Shinjuku Gyoen", "d2": "Isetan", "d3": "Golden Gai", "d4": "Omoide Yokocho",
        "d5": "Yoyogi Park", "d6": "Haneda", "d7": "Narita",
        "t1": "3 min", "t2": "9 min", "t3": "12 min", "t4": "14 min",
        "t5": "18 min", "t6": "45 min", "t7": "90 min",
    },
    "glaze": {
        "title": "This house is made of four materials.",
        "note": "We built the whole thing from things you can touch. All of them matte, all of them a little rough.",
        "g1": "Oribe", "g2": "Amber", "g3": "Iron", "g4": "Clay floor",
        "g4Role": "Entrance · shared areas",
        "g1Body": "The lawn at Gyoen and the pot on the sill. The widest glaze on the page — deep without being heavy.",
        "g2Body": "Worn leather, rusted iron, late afternoon light. The colour of things that improve with time.",
        "g3Body": "Iron and shadow. Less black than fired-down iron. The most solid of the three rooms.",
        "g4Body": "The clay under all three glazes. A rough floor with the aggregate showing — keep your shoes on.",
    },
    "location": {
        "title": "Three minutes on foot to the Okido Gate.",
        "addr": "1-x-x Shinjuku, Shinjuku-ku, Tokyo",
        "r1": "Marunouchi Line — Shinjuku-gyoenmae", "r2": "Fukutoshin Line — Shinjuku-sanchome",
        "r3": "JR Shinjuku Station — South East Exit", "r4": "Shinjuku Gyoen — Okido Gate",
    },
    "cta": {
        "title": "Booking on the official site is always the best rate.",
        "body": "What we would pay in OTA commission goes straight back into the room rate, and availability updates here first.",
        "ctaPrimary": "Check availability", "ctaSecondary": "Ask a question",
        "priceNote": "per night / from, 2 guests",
        "li1": "Check-in 16:00 — Check-out 11:00",
        "li2": "Self check-in / Free Wi-Fi",
        "li3": "Washer & dryer in every room",
    },
    "footer": {
        "note": "Stay steps away from Shinjuku Gyoen and live Tokyo rather than visit it. Three design apartments, each built around a different furniture brand.",
        "book": "Check availability", "concept": "Concept", "material": "Material",
        "experience": "Neighbourhood", "access": "Access",
        "rules": "House Rules", "faq": "FAQ", "privacy": "Privacy",
        "law": "Housing Accommodation Business Act notice",
    },
}

ZH = {
    "nav": {"concept": "概念", "rooms": "客房", "experience": "街区",
            "material": "材质", "access": "交通", "book": "查看空房", "menu": "菜单"},
    "hero": {"titleA": "就在", "titleEm": "新宿御苑", "titleB": "旁边，",
             "titleC": "像生活一样住下来。",
             "sub": "玄关是三和土的泥地，架上摆着器皿，窗外是御苑的绿。\n三间客房，各有各的世界。",
             "ctaPrimary": "官网预订", "ctaSecondary": "查看3间客房"},
    "ticker": {"w1": "器皿、泥地，与御苑的绿。", "w2": "仅3间客房",
               "w3": "步行3分钟到新宿御苑", "w4": "官网价格最优"},
    "stats": {"n1": "3间", "n2": "3分钟", "n3": "8分钟", "n4": "4人"},
    "concept": {
        "title": "三种釉，一种土。",
        "p1": "从新宿三丁目的喧嚣往里走两条街，空气忽然松了下来。K3V SHINJUKU GYOEN 就是这样一条小巷里、只有3间客房的小房子。",
        "p2": "推开门是三和土的泥地。架上三只器皿，各上不同的釉；房间也一样，每个家具品牌对应一种颜色与质感。明明是同一种土烧的，出窑却是三张面孔。",
        "p3": "我们要的不是光滑的高级感，而是拿在手里时那一点点粗糙——是每天都会用的那种器皿。",
    },
    "rooms": {
        "title": "推开门，颜色就换了。",
        "note": "三间客房各自围绕一个家具品牌。明明是同一栋楼，每间房的空气质感却不一样。",
        "open": "接受预订", "soon": "筹备中",
        "sizeLab": "面积", "guestsLab": "可住", "bedLab": "床型",
        "floorLab": "楼层", "openLab": "开放",
        "r1Jp": "柔和的北欧", "r2Jp": "用旧的质感", "r3Jp": "硬朗的工业感",
        "r1Guests": "2–4人", "r2Guests": "2–4人", "tba": "待定",
        "r1Body": "橡木家具与亚麻织物。晨光停留最久的房间，床边有一张小书桌，窗台上放着一只与御苑同色的花盆。",
        "r2Body": "铁件、旧木料，还有一张穿旧了的靛蓝沙发。这是最适合夜晚的房间——把灯调暗，窗外的新宿就恰到好处地远了。",
        "r3Body": "第三间房以铁件与实木的对比构成，是三间里最硬朗的一间，目前仍在施工。开放时间另行通知。",
        "r1Cta": "查看这间房", "r2Cta": "查看这间房", "r3Cta": "开放时通知我",
    },
    "exp": {
        "title": "走出玄关，住宿就开始了。",
        "note": "御苑的草坪、巷子里的咖啡馆、深夜的乌冬。街区比房间更像客厅。",
        "c1": "御苑", "c2": "咖啡馆", "c3": "洗衣机", "c4": "小巷", "c5": "天空",
        "b1": "步行3分钟。清早的草坪几乎是你一个人的。",
        "b2": "这一带还留着好几家从昭和年代开到今天的咖啡馆。",
        "b3": "每间房都有洗衣机。住得越久，旅行就越像生活。",
        "b4": "新宿三丁目的小巷。凌晨一点也还亮着灯。",
        "b5": "电线、高楼和树。东京该有的风景这里都有。",
        "d1": "新宿御苑", "d2": "伊势丹", "d3": "黄金街", "d4": "回忆横丁",
        "d5": "代代木公园", "d6": "羽田", "d7": "成田",
        "t1": "3分钟", "t2": "9分钟", "t3": "12分钟", "t4": "14分钟",
        "t5": "18分钟", "t6": "45分钟", "t7": "90分钟",
    },
    "glaze": {
        "title": "这栋房子由四种材质构成。",
        "note": "只用手能触到的东西来构筑整体。全都是哑光的，摸上去还有点粗。",
        "g1": "织部", "g2": "饴釉", "g3": "铁釉", "g4": "泥地",
        "g4Role": "玄关 · 公共区域",
        "g1Body": "御苑的草坪与窗边的花盆。面积最大的一种釉，深却不沉重的绿。",
        "g2Body": "用旧的皮革、生锈的铁件、傍晚的光。属于那些越用越好的东西的颜色。",
        "g3Body": "铁与影。与其说是黑，不如说是烧结后的铁色。三间里最硬朗的一间。",
        "g4Body": "三种釉底下的土。看得见骨料的粗糙地面，可以穿着鞋进来。",
    },
    "location": {
        "title": "步行3分钟到大木户门。",
        "addr": "东京都新宿区新宿1丁目 ×-×-×",
        "r1": "丸之内线 新宿御苑前", "r2": "副都心线 新宿三丁目",
        "r3": "JR 新宿站 东南口", "r4": "新宿御苑 大木户门",
    },
    "cta": {
        "title": "通过官网预订，永远最优惠。",
        "body": "省下的OTA手续费，我们直接回馈到房价里。空房状况也是这里更新得最快。",
        "ctaPrimary": "查看空房", "ctaSecondary": "咨询",
        "priceNote": "每晚 / 2人起",
        "li1": "入住 16:00 — 退房 11:00",
        "li2": "自助入住 / 免费 Wi-Fi",
        "li3": "全室配备洗烘一体机",
    },
    "footer": {
        "note": "就在新宿御苑旁，以生活的方式住进东京。三间客房，各自围绕不同的家具品牌打造。",
        "book": "查看空房", "concept": "概念", "material": "材质",
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
    doc["doma"] = data
    path.write_text(dump(doc) + "\n")
    print(f"messages/{name}.json  doma namespace: {len(ref)} keys")
