#!/usr/bin/env python3
"""Add (or refresh) the "chambray" namespace in messages/{ja,en,zh}.json.

Review-only: the namespace feeds the Washed Chambray design, the fifth entry of
the 配色プレビュー switcher. Delete the namespace when the switcher goes.

Display headlines and the four material words stay English in every locale —
they are part of the visual identity, exactly as the other alternative designs
do it.
"""
import json, pathlib, collections

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")

# Identical in all three locales: set as display type, not as copy.
DISPLAY = {
    "hero": {"titleA": "Live", "titleB": "Tokyo", "titleOut": "Beautifully.",
             "sub": "Washed, worn, and three minutes from the garden.",
             "side": "Est. 2026 — Shinjuku, Tokyo", "stamp": "Engawa / Morning"},
    "ticker": {"w1": "Wood", "w2": "Denim", "w3": "Forest", "w4": "Shadow", "em": "Washed in Tokyo"},
    "concept": {"titleA": "Cut from", "titleB": "one cloth", "titleEm": "— wood, denim, and a park.",
                "stamp": "Living / Room 01"},
    "rooms": {
        "titleA": "Three rooms.", "titleEm": "Three ways to live here.",
        "r1Name": "Natural Living", "r2Name": "Urban Vintage", "r3Name": "Industrial Modern",
    },
    "exp": {"titleA": "Step out.", "titleEm": "The city is the lobby.",
            "c1": "Gyoen", "c2": "Kissa", "c3": "Laundry", "c4": "Yokocho", "c5": "Skyline"},
    "material": {
        "titleA": "Four materials.", "titleEm": "One small house.",
        "m1": "Denim", "m1Em": "indigo, sun-faded", "m1Hex": "#1B3A57 · washed",
        "m2": "Wood", "m2Em": "warm, knotted", "m2Hex": "#6B4A32 · solid",
        "m3": "Forest", "m3Em": "the park next door", "m3Hex": "#1F3A2E · garden",
        "m4": "Shadow", "m4Em": "and the light that makes it", "m4Hex": "#2B2620 · depth",
    },
    "location": {"titleA": "Two minutes", "titleEm": "from the garden gate.", "pin": "K3V — Here"},
    "cta": {"titleA": "Stay in the heart of Tokyo.", "titleEm": "Live it beautifully."},
    "footer": {"brand": "K3V Shinjuku Gyoen", "credit": "Washed Chambray — Wood × Denim × Forest × Shadow"},
}


def merged(locale_data):
    out = collections.OrderedDict()
    for section, values in locale_data.items():
        s = collections.OrderedDict(values)
        s.update(DISPLAY.get(section, {}))
        out[section] = s
    return out


JA = {
    "nav": {
        "stay": "ステイ", "rooms": "お部屋", "experience": "まちあるき", "material": "素材",
        "location": "立地", "access": "アクセス", "book": "空室を見る", "menu": "メニュー",
    },
    "hero": {
        "eyebrow": "全3室 — 新宿御苑前、東京",
        "vertical": "洗いざらしのデニムみたいな、東京の朝。",
        "patch": "木とデニムと、御苑の緑。\n新宿のど真ん中で、暮らすように過ごす全3室。",
        "ctaPrimary": "公式サイトで予約", "ctaSecondary": "お部屋を見る",
        "chipN": "Room 01 — 03", "chipT": "unico · JSF · Crash Gate",
    },
    "rail": {
        "f1n": "03", "f1l": "室のみ",
        "f2n": "3′", "f2l": "新宿御苑まで",
        "f3n": "8′", "f3l": "新宿駅まで",
        "f4n": "4", "f4l": "1室あたり最大",
        "scroll": "Scroll",
    },
    "ticker": {},
    "concept": {
        "idx": "コンセプト", "kick": "新宿で、ちがう泊まり方を",
        "jp1": "新宿三丁目の喧騒から二本入ると、空気がすっとゆるむ。K3V SHINJUKU GYOEN は、その路地に建つ全3室の小さな家です。",
        "jp2": "床は無垢の木、ソファは洗いざらしのデニム、窓の外には御苑の樹。整いすぎたホテルの快適さではなく、「ここに住んでみたい」と思う快適さを目指しました。",
        "en": "Three rooms between the noise of Shinjuku and the quiet of the garden. Solid timber, washed indigo, warm shadow — built to be lived in, not checked into.",
        "tagN": "Material No.01", "tagP": "座ると少し沈む、洗いざらしのシャンブレー。",
        "swatchCap": "Shinjuku Gyoen — 3 min",
        "w1": "Denim", "w1Note": "#1B3A57 · washed",
        "w2": "Wood", "w2Note": "#6B4A32 · solid",
        "w3": "Forest", "w3Note": "#1F3A2E · garden",
        "w4": "Shadow", "w4Note": "#2B2620 · depth",
    },
    "rooms": {
        "idx": "お部屋",
        "note": "家具ブランドごとに世界観を変えた全3室。同じ建物なのに、ドアを開けると空気が変わります。",
        "sizeLab": "広さ", "guestsLab": "定員", "bedLab": "ベッド", "floorLab": "階", "openLab": "オープン",
        "open": "販売中", "soon": "準備中",
        "r1Tag": "unico", "r1Em": "やわらかい北欧",
        "r1Body": "オークの家具と麻のファブリック。朝の光がいちばん長く入る部屋です。ベッドの脇には小さなワークデスク。",
        "r1Size": "32㎡", "r1Guests": "2–4名", "r1Bed": "ダブル + ソファ", "r1Floor": "2F",
        "r1Link": "Room 01 を見る", "r1Stamp": "Room 01 / unico",
        "r2Tag": "journal standard furniture", "r2Em": "使い込んだ質感",
        "r2Body": "アイアンと古材、履き込んだインディゴのソファ。夜がいちばん似合う部屋。灯りを落とすと、外の新宿がちょうどよく遠くなります。",
        "r2Size": "34㎡", "r2Guests": "2–4名", "r2Bed": "クイーン + ソファ", "r2Floor": "3F",
        "r2Link": "Room 02 を見る", "r2Stamp": "Room 02 / journal standard furniture",
        "r3Tag": "crash gate", "r3Em": "準備中",
        "r3Body": "アイアンと無垢材のコントラストで組み上げる3室目。いま、いちばん骨太な部屋をつくっています。オープンは追ってお知らせします。",
        "r3Size": "未定", "r3Guests": "未定", "r3Open": "2026年 —",
        "r3Link": "オープンを知らせる", "r3Stamp": "Room 03 / crash gate — 準備中",
    },
    "exp": {
        "idx": "まちあるき",
        "note": "御苑の芝生、路地裏の喫茶店、深夜のうどん。玄関を出た瞬間から、滞在は始まっています。",
        "c1p": "徒歩3分。朝いちの芝生はほぼ貸切です。",
        "c2p": "昭和から続く喫茶店が、まだ何軒も残っています。",
        "c3p": "洗濯機は部屋にも。長く居るほど、旅が生活になります。",
        "c4p": "新宿三丁目の路地。深夜1時でも灯りが残っている。",
        "c5p": "電線と高層ビルと木。東京らしい風景がぜんぶある。",
        "s1": "新宿御苑 3′", "s2": "伊勢丹 9′", "s3": "ゴールデン街 12′",
        "s4": "思い出横丁 14′", "s5": "代々木公園 18′", "s6": "羽田 45′", "s7": "成田 90′",
    },
    "material": {
        "idx": "素材",
        "note": "この建物は、たった4つの素材でできています。手で触れられるものだけで、世界観をつくりました。",
        "m1Body": "ソファ、カーテン、ベッドスロー。触れる面はすべて、洗うほど良くなる布に。",
        "m2Body": "床・柱・建具。節も色ムラもそのまま活かした無垢材を使っています。",
        "m3Body": "窓辺の鉢、玄関の植栽、そして御苑。緑は室内にも少しずつ引き込みます。",
        "m4Body": "格子から落ちる影も、素材のひとつ。時間で表情が変わる部屋です。",
    },
    "location": {
        "idx": "立地とアクセス",
        "addr1": "〒160-0022", "addr2": "東京都新宿区新宿1丁目 ×-×-×", "addr3": "K3V SHINJUKU GYOEN",
        "a1": "丸ノ内線 新宿御苑前", "a1Min": "3",
        "a2": "副都心線 新宿三丁目", "a2Min": "7",
        "a3": "JR 新宿駅 東南口", "a3Min": "8",
        "a4": "新宿御苑 大木戸門", "a4Min": "3",
        "minUnit": "分", "hood1": "新宿三丁目", "hood2": "御苑 大木戸門",
    },
    "cta": {
        "lab": "公式予約 — 最安値保証",
        "body": "公式サイトからのご予約が、いちばんお得です。OTA手数料のぶん、そのまま宿泊料に還元しています。",
        "primary": "このサイトで予約する", "secondary": "問い合わせる",
        "price": "¥18,000", "priceNote": "/ 泊 — 2名から",
        "note": "チェックイン 16:00 — チェックアウト 11:00\nセルフチェックイン / Wi-Fi無料 / 洗濯乾燥機",
    },
    "footer": {
        "desc": "新宿御苑のすぐそばで、東京を暮らすように滞在する。家具ブランドごとにコンセプトが異なる、全3室のデザイナーズ民泊。",
        "stayH": "Stay", "s1": "Room 01 — unico", "s2": "Room 02 — journal standard",
        "s3": "Room 03 — crash gate", "s4": "公式サイトで予約",
        "houseH": "House", "h1": "コンセプト", "h2": "素材", "h3": "まちあるき", "h4": "アクセス",
        "infoH": "Info", "i1": "ハウスルール", "i2": "よくある質問", "i3": "プライバシー", "i4": "住宅宿泊事業法 表示",
        "followH": "Follow", "fo1": "Instagram", "fo2": "Airbnb", "fo3": "Booking.com",
        "copyright": "© 2026 K3V Shinjuku Gyoen",
    },
}

EN = {
    "nav": {
        "stay": "Stay", "rooms": "Rooms", "experience": "Experience", "material": "Material",
        "location": "Location", "access": "Access", "book": "Book Now", "menu": "Menu",
    },
    "hero": {
        "eyebrow": "03 Rooms — Shinjuku Gyoenmae, Tokyo",
        "vertical": "洗いざらしのデニムみたいな、東京の朝。",
        "patch": "Timber, denim and the green of the garden.\nThree rooms to live in, right in the middle of Shinjuku.",
        "ctaPrimary": "Book Direct", "ctaSecondary": "See The Rooms",
        "chipN": "Room 01 — 03", "chipT": "unico · JSF · Crash Gate",
    },
    "rail": {
        "f1n": "03", "f1l": "Rooms Only",
        "f2n": "3′", "f2l": "To Shinjuku Gyoen",
        "f3n": "8′", "f3l": "To Shinjuku Station",
        "f4n": "4", "f4l": "Guests Max",
        "scroll": "Scroll",
    },
    "ticker": {},
    "concept": {
        "idx": "Concept", "kick": "Stay Different in Shinjuku",
        "jp1": "Two streets off the noise of Shinjuku 3-chome the air loosens. K3V SHINJUKU GYOEN is a small three-room house on exactly that kind of lane.",
        "jp2": "Solid timber underfoot, washed denim on the sofa, the trees of the garden through the window. Not the tidy comfort of a hotel — the comfort of a room you'd want to move into.",
        "en": "Three rooms between the noise of Shinjuku and the quiet of the garden. Solid timber, washed indigo, warm shadow — built to be lived in, not checked into.",
        "tagN": "Material No.01", "tagP": "A sofa that gives a little when you sit — washed chambray, softened by use.",
        "swatchCap": "Shinjuku Gyoen — 3 min",
        "w1": "Denim", "w1Note": "#1B3A57 · washed",
        "w2": "Wood", "w2Note": "#6B4A32 · solid",
        "w3": "Forest", "w3Note": "#1F3A2E · garden",
        "w4": "Shadow", "w4Note": "#2B2620 · depth",
    },
    "rooms": {
        "idx": "Rooms",
        "note": "Three rooms, each built around one furniture brand. Same building — open the door and the air changes.",
        "sizeLab": "Size", "guestsLab": "Guests", "bedLab": "Bed", "floorLab": "Floor", "openLab": "Open",
        "open": "Now Open", "soon": "Coming Soon",
        "r1Tag": "unico", "r1Em": "soft nordic",
        "r1Body": "Oak furniture and linen. Morning light stays in this room the longest. A small work desk sits beside the bed.",
        "r1Size": "32 m²", "r1Guests": "2–4", "r1Bed": "Double + Sofa", "r1Floor": "2F",
        "r1Link": "View Room 01", "r1Stamp": "Room 01 / unico",
        "r2Tag": "journal standard furniture", "r2Em": "worn-in texture",
        "r2Body": "Iron, reclaimed timber and an indigo sofa you've broken in. This room is at its best at night — dim the lights and Shinjuku moves comfortably far away.",
        "r2Size": "34 m²", "r2Guests": "2–4", "r2Bed": "Queen + Sofa", "r2Floor": "3F",
        "r2Link": "View Room 02", "r2Stamp": "Room 02 / journal standard furniture",
        "r3Tag": "crash gate", "r3Em": "in preparation",
        "r3Body": "A third room built on the contrast of iron and solid timber. It's the toughest of the three, and it's still being finished. We'll announce the opening shortly.",
        "r3Size": "TBA", "r3Guests": "TBA", "r3Open": "2026 —",
        "r3Link": "Get Notified", "r3Stamp": "Room 03 / crash gate — in preparation",
    },
    "exp": {
        "idx": "Experience",
        "note": "Lawns in the garden, a back-street coffee house, udon at midnight. The stay starts the moment you step out the door.",
        "c1p": "Three minutes on foot. First thing in the morning the lawn is almost yours.",
        "c2p": "Coffee houses that have been running since the Showa era — several still here.",
        "c3p": "There's a washer in the room too. The longer you stay, the more the trip turns into living.",
        "c4p": "The lanes of Shinjuku 3-chome. Lights still on at 1am.",
        "c5p": "Power lines, towers and trees. Every Tokyo view at once.",
        "s1": "Shinjuku Gyoen 3′", "s2": "Isetan 9′", "s3": "Golden Gai 12′",
        "s4": "Omoide Yokocho 14′", "s5": "Yoyogi Park 18′", "s6": "Haneda 45′", "s7": "Narita 90′",
    },
    "material": {
        "idx": "Material",
        "note": "This house is made of four materials. The whole world of it is built from things you can put your hand on.",
        "m1Body": "Sofa, curtains, bed throw. Every surface you touch is cloth that gets better with washing.",
        "m2Body": "Floors, posts, joinery — solid timber with its knots and colour shifts left in.",
        "m3Body": "Pots by the window, planting at the entrance, and the garden itself. The green comes indoors a little at a time.",
        "m4Body": "The shadow falling through the lattice is a material too. The room changes face by the hour.",
    },
    "location": {
        "idx": "Location & Access",
        "addr1": "〒160-0022", "addr2": "1-x-x Shinjuku, Shinjuku-ku, Tokyo", "addr3": "K3V SHINJUKU GYOEN",
        "a1": "Marunouchi Line — Shinjuku-gyoenmae", "a1Min": "3",
        "a2": "Fukutoshin Line — Shinjuku-sanchome", "a2Min": "7",
        "a3": "JR Shinjuku Sta. — South East Exit", "a3Min": "8",
        "a4": "Shinjuku Gyoen — Okido Gate", "a4Min": "3",
        "minUnit": "min", "hood1": "Shinjuku 3-chome", "hood2": "Gyoen Okido Gate",
    },
    "cta": {
        "lab": "Direct Booking — Best Rate Guaranteed",
        "body": "Booking on this site is always the best price. The commission we don't pay an OTA goes straight back into the rate.",
        "primary": "Book Your Stay", "secondary": "Ask a Question",
        "price": "¥18,000", "priceNote": "/ night — from, 2 guests",
        "note": "Check-in 16:00 — Check-out 11:00\nSelf check-in / Free Wi-Fi / Washer & Dryer",
    },
    "footer": {
        "desc": "Stay steps away from Shinjuku Gyoen and live Tokyo rather than visit it. Three design apartments, each built around a different furniture brand.",
        "stayH": "Stay", "s1": "Room 01 — unico", "s2": "Room 02 — journal standard",
        "s3": "Room 03 — crash gate", "s4": "Book Direct",
        "houseH": "House", "h1": "Concept", "h2": "Material", "h3": "Experience", "h4": "Access",
        "infoH": "Info", "i1": "House Rules", "i2": "FAQ", "i3": "Privacy", "i4": "Licence Information",
        "followH": "Follow", "fo1": "Instagram", "fo2": "Airbnb", "fo3": "Booking.com",
        "copyright": "© 2026 K3V Shinjuku Gyoen",
    },
}

ZH = {
    "nav": {
        "stay": "住宿", "rooms": "客房", "experience": "街区", "material": "材质",
        "location": "位置", "access": "交通", "book": "查看空房", "menu": "菜单",
    },
    "hero": {
        "eyebrow": "全3间 — 新宿御苑前，东京",
        "vertical": "洗いざらしのデニムみたいな、東京の朝。",
        "patch": "木、丹宁，以及御苑的绿。\n在新宿正中央，像生活一样度过的全3间客房。",
        "ctaPrimary": "官网直订", "ctaSecondary": "查看客房",
        "chipN": "Room 01 — 03", "chipT": "unico · JSF · Crash Gate",
    },
    "rail": {
        "f1n": "03", "f1l": "仅3间",
        "f2n": "3′", "f2l": "至新宿御苑",
        "f3n": "8′", "f3l": "至新宿站",
        "f4n": "4", "f4l": "每间最多",
        "scroll": "Scroll",
    },
    "ticker": {},
    "concept": {
        "idx": "概念", "kick": "在新宿，换一种住法",
        "jp1": "从新宿三丁目的喧嚣往里走两条街，空气忽然松了下来。K3V SHINJUKU GYOEN 就是这样一条小巷里、只有3间客房的小房子。",
        "jp2": "地板是实木，沙发是洗旧的丹宁，窗外是御苑的树。我们想要的不是酒店那种整齐的舒适，而是让人想「住进来看看」的舒适。",
        "en": "Three rooms between the noise of Shinjuku and the quiet of the garden. Solid timber, washed indigo, warm shadow — built to be lived in, not checked into.",
        "tagN": "Material No.01", "tagP": "坐下去会微微下陷，洗旧了的青年布。",
        "swatchCap": "Shinjuku Gyoen — 3 min",
        "w1": "Denim", "w1Note": "#1B3A57 · washed",
        "w2": "Wood", "w2Note": "#6B4A32 · solid",
        "w3": "Forest", "w3Note": "#1F3A2E · garden",
        "w4": "Shadow", "w4Note": "#2B2620 · depth",
    },
    "rooms": {
        "idx": "客房",
        "note": "每间客房都以一个家具品牌构成不同的世界观。同一栋建筑，推开门，空气就变了。",
        "sizeLab": "面积", "guestsLab": "人数", "bedLab": "床型", "floorLab": "楼层", "openLab": "开业",
        "open": "现已开放", "soon": "即将开放",
        "r1Tag": "unico", "r1Em": "柔和北欧",
        "r1Body": "橡木家具与亚麻织物。晨光停留最久的房间，床边还有一张小书桌。",
        "r1Size": "32㎡", "r1Guests": "2–4人", "r1Bed": "双人床 + 沙发", "r1Floor": "2F",
        "r1Link": "查看 Room 01", "r1Stamp": "Room 01 / unico",
        "r2Tag": "journal standard furniture", "r2Em": "用旧的质感",
        "r2Body": "铁艺、旧木与穿旧了的靛蓝沙发。最适合夜晚的房间——把灯调暗，窗外的新宿就恰好远了一些。",
        "r2Size": "34㎡", "r2Guests": "2–4人", "r2Bed": "大床 + 沙发", "r2Floor": "3F",
        "r2Link": "查看 Room 02", "r2Stamp": "Room 02 / journal standard furniture",
        "r3Tag": "crash gate", "r3Em": "筹备中",
        "r3Body": "以铁与实木的对比构成的第三间。目前正在施工，是三间里最硬朗的一间，开放时间将另行公布。",
        "r3Size": "待定", "r3Guests": "待定", "r3Open": "2026年 —",
        "r3Link": "开放时通知我", "r3Stamp": "Room 03 / crash gate — 筹备中",
    },
    "exp": {
        "idx": "街区",
        "note": "御苑的草坪、巷子里的咖啡店、深夜的乌冬面。走出门的那一刻，旅程就已经开始。",
        "c1p": "步行3分钟。清晨的草坪几乎属于你一个人。",
        "c2p": "从昭和年代经营至今的咖啡店，这一带还留着好几家。",
        "c3p": "房间里也有洗衣机。住得越久，旅行越像生活。",
        "c4p": "新宿三丁目的小巷。凌晨一点仍有灯亮着。",
        "c5p": "电线、高楼和树。东京该有的风景全都在。",
        "s1": "新宿御苑 3′", "s2": "伊势丹 9′", "s3": "黄金街 12′",
        "s4": "回忆横丁 14′", "s5": "代代木公园 18′", "s6": "羽田 45′", "s7": "成田 90′",
    },
    "material": {
        "idx": "材质",
        "note": "这栋房子只用了四种材料。我们只用手能触到的东西，构成了它的全部气质。",
        "m1Body": "沙发、窗帘、床尾毯。所有会碰到的表面，都用越洗越好的布。",
        "m2Body": "地板、柱子、门窗。保留木节与色差的实木。",
        "m3Body": "窗边的盆栽、玄关的植栽，以及御苑。绿意一点一点被引进室内。",
        "m4Body": "从格栅落下的影子也是一种材料。房间的表情随时间变化。",
    },
    "location": {
        "idx": "位置与交通",
        "addr1": "〒160-0022", "addr2": "东京都新宿区新宿1丁目 ×-×-×", "addr3": "K3V SHINJUKU GYOEN",
        "a1": "丸之内线 新宿御苑前", "a1Min": "3",
        "a2": "副都心线 新宿三丁目", "a2Min": "7",
        "a3": "JR 新宿站 东南口", "a3Min": "8",
        "a4": "新宿御苑 大木户门", "a4Min": "3",
        "minUnit": "分钟", "hood1": "新宿三丁目", "hood2": "御苑 大木户门",
    },
    "cta": {
        "lab": "官网直订 — 最优价格保证",
        "body": "通过官网预订最为划算。省下的OTA佣金，我们直接回馈到房价里。",
        "primary": "立即预订", "secondary": "咨询我们",
        "price": "¥18,000", "priceNote": "/ 每晚起 — 2人",
        "note": "入住 16:00 — 退房 11:00\n自助入住 / 免费Wi-Fi / 洗衣烘干机",
    },
    "footer": {
        "desc": "就在新宿御苑旁，像生活一样住进东京。以家具品牌区分概念的全3间设计民宿。",
        "stayH": "Stay", "s1": "Room 01 — unico", "s2": "Room 02 — journal standard",
        "s3": "Room 03 — crash gate", "s4": "官网直订",
        "houseH": "House", "h1": "概念", "h2": "材质", "h3": "街区", "h4": "交通",
        "infoH": "Info", "i1": "住宿规则", "i2": "常见问题", "i3": "隐私政策", "i4": "住宅宿泊事业法 标示",
        "followH": "Follow", "fo1": "Instagram", "fo2": "Airbnb", "fo3": "Booking.com",
        "copyright": "© 2026 K3V Shinjuku Gyoen",
    },
}

JA, EN, ZH = merged(JA), merged(EN), merged(ZH)


def keys(o, p=""):
    out = set()
    for k, v in o.items():
        out |= keys(v, p + k + ".") if isinstance(v, dict) else {p + k}
    return out


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
    doc["chambray"] = data
    path.write_text(dump(doc) + "\n")
    print(f"messages/{name}.json  chambray namespace: {len(ref)} keys")
