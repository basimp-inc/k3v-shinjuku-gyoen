#!/usr/bin/env python3
"""Add (or refresh) the "denim" namespace in messages/{ja,en,zh}.json.

Review-only: the namespace feeds the Denim Sakura design, the third entry of the
配色プレビュー switcher. Delete the namespace when the switcher goes.

Display headlines stay English in every locale — they are part of the visual
identity, exactly as the "gyoen" namespace does it.
"""
import json, pathlib, collections

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")

JA = {
    "nav": {"concept": "コンセプト", "rooms": "お部屋", "location": "御苑", "stay": "滞在", "book": "空室を見る"},
    "hero": {
        "chip": "全3室・新宿御苑", "kicker": "Design Apartments",
        "titleA": "Not just a stay.", "titleEm": "Live Tokyo", "titleB": "beautifully.",
        "lead1": "新宿御苑のすぐそばで、東京を暮らすように滞在する。",
        "lead2": "全3室、家具ブランドごとにまるごと世界観の違う部屋。",
        "ctaPrimary": "公式サイト予約", "ctaSecondary": "See the rooms",
        "panelTitle": "Tonight", "r1": "UNICO ROOM", "r1Price": "¥24,800~",
        "r2": "JSF ROOM", "r2Price": "¥26,400~", "r3": "CRASH GATE", "r3Note": "準備中",
    },
    "facts": {
        "gateNum": "2 min", "gateLabel": "御苑・新宿門まで",
        "staNum": "8 min", "staLabel": "新宿駅まで",
        "roomsNum": "03", "roomsLabel": "室のみ", "scroll": "SCROLL ↓",
    },
    "concept": {
        "lab": "コンセプト", "titleA": "Stay steps away from", "titleEm": "Shinjuku Gyoen.",
        "jp1": "公園のとなりに、", "jp2": "もうひとつの東京の暮らし。",
        "body1": "朝は御苑の緑を抜けて散歩、昼は新宿まで歩いて買い物、夜は静かな路地に帰ってくる。ホテルというより、東京にちょっとだけ住所を持つ感覚です。",
        "body2": "3室しかないので、チェックインの行列もフロントの気疲れもありません。鍵を開けて、荷物を置いて、いつも通りの暮らしをはじめてください。",
        "col1H": "Furniture-led", "col1P": "UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE。部屋ごとに家具ブランドを丸ごと1つ。",
        "col2H": "Live, don't visit", "col2P": "キッチン・洗濯機つき。連泊するほど、旅が生活に変わっていきます。",
        "figNum": "01", "figCap": "The door you'll get used to opening.",
        "careName": "K3V SHINJUKU GYOEN", "careCode": "100% TOKYO",
        "care1": "Wash slow · 急がないこと", "care2": "Tumble through Tokyo, low heat",
        "care3": "Hang dry in Gyoen sunlight", "care4": "Do not dry-clean the mood",
        "careFoot1": "MADE IN SHINJUKU", "careFoot2": "ROOMS 03 / EST. 2026",
        "careAlt": "コンセプトを洗濯タグに見立てた表示",
    },
    "rooms": {
        "lab": "お部屋", "titleA": "Three rooms,", "titleB": "three ways to", "titleEm": "live here.",
        "note": "同じ建物なのに、ドアを開けると別の街にいるみたいに空気が変わります。家具ブランドを部屋ごとに一つだけ選び、その世界観のまま暮らせるようにしました。",
        "r1Lab": "Room 01", "r1Name": "UNICO ROOM", "r1Em": "Natural Living",
        "r1Body": "淡いオークと麻。窓からの光がいちばん長く入る部屋です。朝はここでコーヒーを淹れて、御苑へ出かける支度をどうぞ。",
        "r1S1": "32 m²", "r1S2": "2–3 guests", "r1S3": "KITCHEN", "r1S4": "LAUNDRY",
        "r1Link": "View room 01", "r1PatchT": "unico", "r1PatchS": "natural living",
        "r2Lab": "Room 02", "r2Name": "JSF ROOM", "r2Em": "Urban Vintage",
        "r2Body": "インディゴのファブリックと使い込んだレザー。夜がいちばん似合う部屋。窓の外の街あかりごと、部屋の一部です。",
        "r2S1": "28 m²", "r2S2": "2 guests", "r2S3": "KITCHEN", "r2S4": "CITY VIEW",
        "r2Link": "View room 02", "r2PatchT": "journal standard", "r2PatchS": "urban vintage",
        "r3Lab": "Room 03", "r3Name": "CRASH GATE", "r3Em": "Industrial Modern",
        "r3Body": "アイアンと無垢材の、いちばん硬派な部屋。いま仕上げの真っ最中です。公開までもう少しだけお待ちください。",
        "r3S1": "2026 OPEN", "r3S2": "準備中", "r3Soon": "Opening soon",
    },
    "location": {
        "lab": "アクセス", "titleA": "The park is", "titleEm": "the front garden.",
        "body": "58ヘクタール、1万本以上の樹。新宿御苑は「近くの公園」ではなく、この宿のいちばん広い部屋だと思っています。年間パスを買う滞在者もいるくらいです。",
        "w1n": "新宿御苑 新宿門", "w1t": "徒歩 2分",
        "w2n": "新宿御苑前駅（丸ノ内線）", "w2t": "徒歩 4分",
        "w3n": "新宿三丁目駅", "w3t": "徒歩 6分",
        "w4n": "新宿駅（JR / 私鉄）", "w4t": "徒歩 8分",
        "w5n": "コンビニ・スーパー", "w5t": "徒歩 1分",
        "tag": "walk 2 min", "capL": "SHINJUKU-KU, TOKYO", "capR": "35.6852°N / 139.7100°E",
        "mapAlt": "新宿御苑と K3V の位置関係を示した地図",
    },
    "exp": {
        "lab": "一日の過ごし方", "titleA": "Ordinary hours,", "titleEm": "somewhere lovely.",
        "it": "Nothing on the itinerary. That is rather the point.",
        "m1t": "07:10", "m1x": "Coffee before the gate opens.", "m1jp": "まだ静かな窓辺で一杯目。",
        "m2t": "09:40", "m2x": "Under the yaezakura, again.", "m2jp": "八重桜の下を、今日も通り抜ける。",
        "m3t": "13:00", "m3x": "A blanket, a book, no plan.", "m3jp": "芝生にデニムを一枚敷いて昼寝。",
        "m4t": "19:30", "m4x": "Dinner two corners away.", "m4jp": "路地の店で軽く飲んで帰る。",
        "quote": "“I stopped taking photos on the third day. I was just living there.”",
        "who": "Guest · 6 nights · Room 01",
    },
    "cta": {
        "lab": "ご予約", "titleA": "Come and", "titleEm": "live here", "titleB": "a while.",
        "body": "公式サイトからのご予約が、いつでもいちばん安い金額です。空室状況はリアルタイムで反映されます。",
        "ctaPrimary": "空室を見る / Check availability", "ctaSecondary": "お問い合わせ",
        "p1": "ベストレート保証", "p2": "3泊以上で 10% OFF",
        "p3": "アーリーチェックイン優先", "p4": "荷物の前後預かり無料",
        "note": "JA / EN / 中文 対応 · 前日18時まで無料キャンセル",
    },
    "footer": {
        "tagline": "Not just a stay.",
        "addr1": "〒160-0022", "addr2": "東京都新宿区新宿1-◯-◯", "addr3": "新宿御苑前駅より徒歩4分",
        "exploreH": "Explore", "e1": "コンセプト", "e2": "お部屋", "e3": "新宿御苑", "e4": "一日の過ごし方",
        "infoH": "Info", "i1": "アクセス", "i2": "よくあるご質問", "i3": "ご利用規約", "i4": "プライバシーポリシー",
        "bookH": "Book", "bookBtn": "Book direct",
        "license1": "住宅宿泊事業届出番号", "license2": "M000-000000-0000",
        "copyright": "© 2026 K3V SHINJUKU GYOEN",
    },
}

EN = {
    "nav": {"concept": "Concept", "rooms": "Rooms", "location": "Gyoen", "stay": "Stay", "book": "Book direct"},
    "hero": {
        "chip": "3 Rooms · Shinjuku Gyoen", "kicker": "Design Apartments",
        "titleA": "Not just a stay.", "titleEm": "Live Tokyo", "titleB": "beautifully.",
        "lead1": "Stay steps away from Shinjuku Gyoen and live Tokyo rather than visit it.",
        "lead2": "Three rooms only — each one furnished top to bottom by a single Tokyo furniture label.",
        "ctaPrimary": "Book direct", "ctaSecondary": "See the rooms",
        "panelTitle": "Tonight", "r1": "UNICO ROOM", "r1Price": "¥24,800~",
        "r2": "JSF ROOM", "r2Price": "¥26,400~", "r3": "CRASH GATE", "r3Note": "Opening soon",
    },
    "facts": {
        "gateNum": "2 min", "gateLabel": "to Gyoen-mae gate",
        "staNum": "8 min", "staLabel": "to Shinjuku Sta.",
        "roomsNum": "03", "roomsLabel": "rooms only", "scroll": "SCROLL ↓",
    },
    "concept": {
        "lab": "Concept", "titleA": "Stay steps away from", "titleEm": "Shinjuku Gyoen.",
        "jp1": "Next door to the park,", "jp2": "a second life in Tokyo.",
        "body1": "Walk out through the greenery in the morning, walk into Shinjuku for the afternoon, come home to a quiet side street at night. Less a hotel than a temporary Tokyo address.",
        "body2": "With only three rooms there is no check-in queue and no front-desk formality. Unlock the door, put your bags down, and carry on with an ordinary day.",
        "col1H": "Furniture-led", "col1P": "UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE — one label per room, all the way through.",
        "col2H": "Live, don't visit", "col2P": "Kitchen and laundry in every room. The longer you stay, the more the trip turns into living.",
        "figNum": "01", "figCap": "The door you'll get used to opening.",
        "careName": "K3V SHINJUKU GYOEN", "careCode": "100% TOKYO",
        "care1": "Wash slow · take your time", "care2": "Tumble through Tokyo, low heat",
        "care3": "Hang dry in Gyoen sunlight", "care4": "Do not dry-clean the mood",
        "careFoot1": "MADE IN SHINJUKU", "careFoot2": "ROOMS 03 / EST. 2026",
        "careAlt": "The concept written as a garment wash-care label",
    },
    "rooms": {
        "lab": "Rooms", "titleA": "Three rooms,", "titleB": "three ways to", "titleEm": "live here.",
        "note": "One building, but the air changes when you open each door. Every room is furnished by a single label and left to be that world all the way through.",
        "r1Lab": "Room 01", "r1Name": "UNICO ROOM", "r1Em": "Natural Living",
        "r1Body": "Pale oak and linen, and the longest run of daylight in the building. Make coffee here in the morning and get ready for the park.",
        "r1S1": "32 m²", "r1S2": "2–3 guests", "r1S3": "KITCHEN", "r1S4": "LAUNDRY",
        "r1Link": "View room 01", "r1PatchT": "unico", "r1PatchS": "natural living",
        "r2Lab": "Room 02", "r2Name": "JSF ROOM", "r2Em": "Urban Vintage",
        "r2Body": "Indigo fabric and worn leather. The room that suits the evening best — the city lights outside are part of the furniture.",
        "r2S1": "28 m²", "r2S2": "2 guests", "r2S3": "KITCHEN", "r2S4": "CITY VIEW",
        "r2Link": "View room 02", "r2PatchT": "journal standard", "r2PatchS": "urban vintage",
        "r3Lab": "Room 03", "r3Name": "CRASH GATE", "r3Em": "Industrial Modern",
        "r3Body": "Iron and solid timber — the toughest room of the three. Currently being finished; not long to wait now.",
        "r3S1": "2026 OPEN", "r3S2": "In preparation", "r3Soon": "Opening soon",
    },
    "location": {
        "lab": "Location", "titleA": "The park is", "titleEm": "the front garden.",
        "body": "58 hectares and more than ten thousand trees. We don't think of Shinjuku Gyoen as the park nearby — it is the largest room we have. Some guests buy the annual pass.",
        "w1n": "Shinjuku Gyoen, Shinjuku Gate", "w1t": "2 min walk",
        "w2n": "Shinjuku-gyoenmae Sta. (Marunouchi)", "w2t": "4 min walk",
        "w3n": "Shinjuku-sanchome Sta.", "w3t": "6 min walk",
        "w4n": "Shinjuku Sta. (JR / private lines)", "w4t": "8 min walk",
        "w5n": "Convenience store · supermarket", "w5t": "1 min walk",
        "tag": "walk 2 min", "capL": "SHINJUKU-KU, TOKYO", "capR": "35.6852°N / 139.7100°E",
        "mapAlt": "Map showing K3V in relation to Shinjuku Gyoen",
    },
    "exp": {
        "lab": "A day here", "titleA": "Ordinary hours,", "titleEm": "somewhere lovely.",
        "it": "Nothing on the itinerary. That is rather the point.",
        "m1t": "07:10", "m1x": "Coffee before the gate opens.", "m1jp": "The first cup, at a still-quiet window.",
        "m2t": "09:40", "m2x": "Under the yaezakura, again.", "m2jp": "Through the late cherry blossom, same as yesterday.",
        "m3t": "13:00", "m3x": "A blanket, a book, no plan.", "m3jp": "Denim spread on the lawn, and a nap.",
        "m4t": "19:30", "m4x": "Dinner two corners away.", "m4jp": "A drink at the place down the side street.",
        "quote": "“I stopped taking photos on the third day. I was just living there.”",
        "who": "Guest · 6 nights · Room 01",
    },
    "cta": {
        "lab": "Book direct", "titleA": "Come and", "titleEm": "live here", "titleB": "a while.",
        "body": "Booking on this site is always the lowest price we offer, and availability updates in real time.",
        "ctaPrimary": "Check availability", "ctaSecondary": "Contact us",
        "p1": "Best rate guaranteed", "p2": "10% off from 3 nights",
        "p3": "Priority early check-in", "p4": "Free luggage hold, before and after",
        "note": "JA / EN / 中文 · free cancellation until 18:00 the day before",
    },
    "footer": {
        "tagline": "Not just a stay.",
        "addr1": "〒160-0022", "addr2": "1-◯-◯ Shinjuku, Shinjuku-ku, Tokyo", "addr3": "4 min from Shinjuku-gyoenmae Sta.",
        "exploreH": "Explore", "e1": "Concept", "e2": "Rooms", "e3": "Shinjuku Gyoen", "e4": "A day here",
        "infoH": "Info", "i1": "Access", "i2": "FAQ", "i3": "Terms of use", "i4": "Privacy policy",
        "bookH": "Book", "bookBtn": "Book direct",
        "license1": "Private lodging registration no.", "license2": "M000-000000-0000",
        "copyright": "© 2026 K3V SHINJUKU GYOEN",
    },
}

ZH = {
    "nav": {"concept": "概念", "rooms": "客房", "location": "御苑", "stay": "住停", "book": "查看空房"},
    "hero": {
        "chip": "全3间客房・新宿御苑", "kicker": "Design Apartments",
        "titleA": "Not just a stay.", "titleEm": "Live Tokyo", "titleB": "beautifully.",
        "lead1": "就在新宿御苑旁，以生活的方式停留东京。",
        "lead2": "全部只有3间客房，每一间都由一个家具品牌完整打造。",
        "ctaPrimary": "官网预订", "ctaSecondary": "See the rooms",
        "panelTitle": "Tonight", "r1": "UNICO ROOM", "r1Price": "¥24,800~",
        "r2": "JSF ROOM", "r2Price": "¥26,400~", "r3": "CRASH GATE", "r3Note": "筹备中",
    },
    "facts": {
        "gateNum": "2 min", "gateLabel": "至御苑新宿门",
        "staNum": "8 min", "staLabel": "至新宿站",
        "roomsNum": "03", "roomsLabel": "间客房", "scroll": "SCROLL ↓",
    },
    "concept": {
        "lab": "概念", "titleA": "Stay steps away from", "titleEm": "Shinjuku Gyoen.",
        "jp1": "公园的旁边，", "jp2": "另一种东京生活。",
        "body1": "早晨穿过御苑的绿意散步，白天走去新宿购物，夜里回到安静的小巷。与其说是酒店，不如说是在东京暂时有了一个住址。",
        "body2": "只有3间客房，没有排队登记，也没有前台的拘谨。开门、放下行李，然后照常过一天就好。",
        "col1H": "Furniture-led", "col1P": "UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE。每间客房完整采用一个家具品牌。",
        "col2H": "Live, don't visit", "col2P": "配备厨房与洗衣机。住得越久，旅行就越接近生活。",
        "figNum": "01", "figCap": "The door you'll get used to opening.",
        "careName": "K3V SHINJUKU GYOEN", "careCode": "100% TOKYO",
        "care1": "Wash slow · 不必着急", "care2": "Tumble through Tokyo, low heat",
        "care3": "Hang dry in Gyoen sunlight", "care4": "Do not dry-clean the mood",
        "careFoot1": "MADE IN SHINJUKU", "careFoot2": "ROOMS 03 / EST. 2026",
        "careAlt": "以洗涤标签形式呈现的概念说明",
    },
    "rooms": {
        "lab": "客房", "titleA": "Three rooms,", "titleB": "three ways to", "titleEm": "live here.",
        "note": "同一栋建筑，推开门却像走进了另一条街。每间客房只选一个家具品牌，并让那个世界观贯穿始终。",
        "r1Lab": "Room 01", "r1Name": "UNICO ROOM", "r1Em": "Natural Living",
        "r1Body": "浅色橡木与亚麻，是全楼日照时间最长的房间。早晨在这里煮杯咖啡，再出门前往御苑。",
        "r1S1": "32 m²", "r1S2": "2–3 guests", "r1S3": "KITCHEN", "r1S4": "LAUNDRY",
        "r1Link": "View room 01", "r1PatchT": "unico", "r1PatchS": "natural living",
        "r2Lab": "Room 02", "r2Name": "JSF ROOM", "r2Em": "Urban Vintage",
        "r2Body": "靛蓝布料与用旧的皮革。最适合夜晚的房间，窗外的城市灯火也是陈设的一部分。",
        "r2S1": "28 m²", "r2S2": "2 guests", "r2S3": "KITCHEN", "r2S4": "CITY VIEW",
        "r2Link": "View room 02", "r2PatchT": "journal standard", "r2PatchS": "urban vintage",
        "r3Lab": "Room 03", "r3Name": "CRASH GATE", "r3Em": "Industrial Modern",
        "r3Body": "铁艺与实木，三间之中最硬朗的一间。目前正在收尾，敬请再稍候。",
        "r3S1": "2026 OPEN", "r3S2": "筹备中", "r3Soon": "Opening soon",
    },
    "location": {
        "lab": "位置", "titleA": "The park is", "titleEm": "the front garden.",
        "body": "58公顷，逾一万棵树。对我们来说，新宿御苑并不是「附近的公园」，而是这里最宽敞的一个房间。有的客人甚至会买张年票。",
        "w1n": "新宿御苑 新宿门", "w1t": "步行 2分",
        "w2n": "新宿御苑前站（丸之内线）", "w2t": "步行 4分",
        "w3n": "新宿三丁目站", "w3t": "步行 6分",
        "w4n": "新宿站（JR / 私铁）", "w4t": "步行 8分",
        "w5n": "便利店・超市", "w5t": "步行 1分",
        "tag": "walk 2 min", "capL": "SHINJUKU-KU, TOKYO", "capR": "35.6852°N / 139.7100°E",
        "mapAlt": "显示 K3V 与新宿御苑位置关系的地图",
    },
    "exp": {
        "lab": "这里的一天", "titleA": "Ordinary hours,", "titleEm": "somewhere lovely.",
        "it": "Nothing on the itinerary. That is rather the point.",
        "m1t": "07:10", "m1x": "Coffee before the gate opens.", "m1jp": "在还很安静的窗边，先来一杯。",
        "m2t": "09:40", "m2x": "Under the yaezakura, again.", "m2jp": "今天也从八重樱下穿过。",
        "m3t": "13:00", "m3x": "A blanket, a book, no plan.", "m3jp": "在草坪铺一块丹宁，睡个午觉。",
        "m4t": "19:30", "m4x": "Dinner two corners away.", "m4jp": "在巷子里的小店小酌后回家。",
        "quote": "“I stopped taking photos on the third day. I was just living there.”",
        "who": "Guest · 6 nights · Room 01",
    },
    "cta": {
        "lab": "预订", "titleA": "Come and", "titleEm": "live here", "titleB": "a while.",
        "body": "通过官网预订，永远是我们提供的最低价格，空房状况亦为实时更新。",
        "ctaPrimary": "查看空房 / Check availability", "ctaSecondary": "联系我们",
        "p1": "最优价格保证", "p2": "连住3晚享9折",
        "p3": "优先提前入住", "p4": "入住前后免费寄存行李",
        "note": "支持 JA / EN / 中文 · 入住前一日18时前免费取消",
    },
    "footer": {
        "tagline": "Not just a stay.",
        "addr1": "〒160-0022", "addr2": "东京都新宿区新宿1-◯-◯", "addr3": "新宿御苑前站步行4分",
        "exploreH": "Explore", "e1": "概念", "e2": "客房", "e3": "新宿御苑", "e4": "这里的一天",
        "infoH": "Info", "i1": "交通", "i2": "常见问题", "i3": "使用条款", "i4": "隐私政策",
        "bookH": "Book", "bookBtn": "Book direct",
        "license1": "住宅宿泊事业申报编号", "license2": "M000-000000-0000",
        "copyright": "© 2026 K3V SHINJUKU GYOEN",
    },
}


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
    doc["denim"] = data
    path.write_text(dump(doc) + "\n")
    print(f"messages/{name}.json  denim namespace: {len(ref)} keys")
