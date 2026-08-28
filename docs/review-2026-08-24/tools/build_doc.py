# -*- coding: utf-8 -*-
"""Build the printable A4 handout for the 2026-08-24 mobile design review."""
import base64, io, json, os, html
from PIL import Image

SRC = os.path.dirname(os.path.abspath(__file__))
SHOTS = os.path.join(SRC, "shots")
OUT = "/Users/apple/workbench/k3v-shinjuku-gyoen/docs/review-2026-08-24"
os.makedirs(OUT, exist_ok=True)

manifest = {d["theme"]: d for d in json.load(open(os.path.join(SHOTS, "manifest.json")))}
VH = 844

SEC_LABEL = [
    ("hero", "ヒーロー"), ("top", "ヒーロー"),
    ("location", "立地・近隣"), ("renovated", "リノベーション"),
    ("amenities", "設備・アメニティ"), ("rooms", "客室 01–03"),
    ("access", "アクセス"), ("foot", "フッター"),
]

def label_for(theme, y):
    secs = [s for s in manifest[theme]["sections"] if s["h"] > 200]
    end = max(s["top"] + s["h"] for s in secs)
    total = manifest[theme]["height"]
    if end < total - 80:
        secs = secs + [{"id": "zfoot", "cls": "foot", "top": end, "h": total - end}]
    best, area = "フッター", 0
    for s in secs:
        ov = min(y + VH, s["top"] + s["h"]) - max(y, s["top"])
        if ov > area:
            for key, jp in SEC_LABEL:
                if s["id"].endswith(key) or s["cls"].split()[0:1] == [key]:
                    best, area = jp, ov
                    break
            else:
                best, area = "フッター", ov
    return best

def b64(path, width, quality=74):
    im = Image.open(path).convert("RGB")
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()

DESIGNS = [
    {
        "id": "current", "no": "A", "name": "現行案", "short": "現行案", "en": "Current",
        "url": "?theme=current",
        "lead": "クリーム地＋ブラウン、角丸と丸ゴシック。4案でいちばん素直で読みやすい。",
        "chips": [("#f3ece1", "地"), ("#efe5d3", "カード"), ("#8a6b45", "アクセント"),
                  ("#c77b4f", "アクセント2"), ("#4a3a24", "文字")],
        "good": ["文字が大きく、上から下まで迷わず読める", "情報の重なりが無く、いちばん破綻が少ない",
                 "画面数が10でいちばん短い＝離脱しにくい"],
        "watch": ["ビジュアルの押しが弱く、他の民泊サイトとの差がつきにくい",
                  "写真・イラストの面積が小さく「家具ブランドごとに世界が違う」が伝わりにくい"],
    },
    {
        "id": "gyoen-green", "no": "B", "name": "御苑グリーン案", "short": "御苑グリーン", "en": "Gyoen Green",
        "url": "?theme=gyoen-green",
        "lead": "御苑の緑が主役。8/22に暗い深緑をやめ、明るいセージの織りクロスに置き換えた。",
        "chips": [("#f2efe6", "地"), ("#7baa75", "セージ"), ("#cc8043", "ウッド"),
                  ("#a9c3d6", "スカイ"), ("#1e2a1c", "文字")],
        "good": ["ヒーローの立体感（樹冠＋木の見切り）が4案で最も強い",
                 "「御苑のそば」という立地が色だけで伝わる",
                 "レイアウトはクライアント高評価のまま、色だけ明るく差し替えた"],
        "watch": ["緑の面積が大きく、好みが分かれやすい",
                  "ROOM 02 は文字がウッドの上に直接乗り、本文が読みにくい（09枚目・要修正）",
                  "テーマ名「Gyoen Green」がもう内容と合っていない（深緑ではない）"],
    },
    {
        "id": "washed-chambray", "no": "C", "name": "ウォッシュドデニム案", "short": "デニム", "en": "Washed Chambray",
        "url": "?theme=washed-chambray",
        "lead": "色落ちしたデニム×無垢材。英字の見出しが大きく、雑誌的な組み方。",
        "chips": [("#EDF2F7", "淡デニム"), ("#C6D6E4", "シャンブレー"), ("#1B3A57", "インディゴ"),
                  ("#cc8043", "ウッド"), ("#4C6E31", "フォレスト")],
        "good": ["英字ディスプレイが効いて、4案でいちばん「作り込まれた」印象",
                 "デニム＝カジュアルの記号が方針（チープシック）と噛み合う",
                 "近隣ショップの自動スライドなど、動きの設計が入っている"],
        "watch": ["濃紺・黒に近い面が数箇所残り、「重い／クールすぎ」に触れる可能性",
                  "13画面ぶんスクロールが必要（4案で最長タイ）",
                  "英字が強い分、日本語の見出しが従属して見える"],
    },
    {
        "id": "chambray-gyoen", "no": "D", "name": "統合案", "short": "統合案", "en": "Chambray Gyoen",
        "url": "?theme=chambray-gyoen",
        "lead": "Cのトーンに、Bのヒーロー構成を組み合わせた案。暗い色を意図的に外してある。",
        "chips": [("#F3F7FA", "淡デニム"), ("#DEE8F1", "シャンブレー"), ("#3A5E7D", "デニムインク"),
                  ("#cc8043", "ウッド"), ("#83A94D", "フォレスト")],
        "good": ["最も暗い色でも L*33.7 まで（Cの濃紺・黒面を全部置換）＝重さが出にくい",
                 "御苑の植物（ヤツデ・アオキ・ヨモギ）と木漏れ日が全セクションを通して入る",
                 "本文コントラストは最も薄い組合せでも 4.60 を確保"],
        "watch": ["淡い色が続くので、メリハリ＝押しどころが弱く見えないか",
                  "13画面ぶんスクロールが必要（4案で最長タイ）",
                  "植物・木漏れ日の演出が「やりすぎ」でないか"],
    },
]

def esc(s): return html.escape(s, quote=False)

# ---------- assets ----------
for d in DESIGNS:
    m = manifest[d["id"]]
    d["height"] = m["height"]
    d["frames"] = [
        {"src": b64(os.path.join(SHOTS, f["file"]), 470),
         "y": f["y"], "label": label_for(d["id"], f["y"])}
        for f in m["frames"]
    ]
    d["hero"] = b64(os.path.join(SHOTS, m["frames"][0]["file"]), 760, 82)
    d["hero2"] = b64(os.path.join(SHOTS, m["frames"][1]["file"]), 700, 80)

CSS = """
@page { size: A4; margin: 12mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  font-family: "Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic",
               "Noto Sans JP",system-ui,sans-serif;
  font-size: 8.4pt; line-height: 1.62; color: #1b1b1b; background: #fff;
  font-feature-settings: "palt" 1;
}
.page { position: relative; width: 186mm; height: 273mm; overflow: hidden;
        page-break-after: always; break-after: page; }
.page:last-child { page-break-after: auto; break-after: auto; }
.foot { position: absolute; left: 0; right: 0; bottom: 0; display: flex;
        justify-content: space-between; font-size: 6pt; letter-spacing: .08em;
        color: #8c8c8c; border-top: .4pt solid #ddd; padding-top: 1.6mm; }
.mono { font-family: "SFMono-Regular",Menlo,monospace; }
.eyebrow { font-size: 6.2pt; letter-spacing: .22em; color: #8c8c8c;
           font-family: "SFMono-Regular",Menlo,monospace; }
h1 { font-size: 20pt; line-height: 1.35; font-weight: 700; letter-spacing: .01em; }
h2 { font-size: 10.5pt; font-weight: 700; letter-spacing: .04em; }
h3 { font-size: 8.6pt; font-weight: 700; }
.rule { border-top: 1.1pt solid #1b1b1b; margin: 3mm 0; }
.hair { border-top: .4pt solid #d6d6d6; margin: 2.6mm 0; }
.muted { color: #6e6e6e; }
.acc { color: #a8452f; }

/* --- cover --- */
.cover-head { padding-top: 2mm; }
.meta-line { font-size: 7pt; color: #6e6e6e; letter-spacing: .04em; margin-top: 3mm; }
.decide { display: grid; grid-template-columns: 7mm 1fr; gap: 1.5mm 3mm; margin-top: 2mm; }
.decide .n { font-family: "SFMono-Regular",Menlo,monospace; font-size: 12pt;
             font-weight: 700; line-height: 1.1; color: #a8452f; }
.decide .b { padding-bottom: 2.4mm; }
.decide .b b { font-size: 9.4pt; }
.decide .b p { font-size: 7.6pt; color: #5e5e5e; margin-top: .6mm; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; }
.box { border: .5pt solid #cfcfcf; padding: 3mm 3.4mm; }
.box h3 { margin-bottom: 1.6mm; }
ul { list-style: none; }
li { position: relative; padding-left: 3.4mm; margin-bottom: .9mm; font-size: 7.6pt; }
li::before { content: ""; position: absolute; left: 0; top: 1.45mm;
             width: 1.5mm; height: 1.5mm; border: .5pt solid #1b1b1b; }
li.ng::before { background: #a8452f; border-color: #a8452f; }
li.ok::before { background: #1b1b1b; }
table { width: 100%; border-collapse: collapse; font-size: 7.4pt; }
th, td { text-align: left; padding: 1.5mm 1.8mm; border-bottom: .4pt solid #dcdcdc;
         vertical-align: top; }
th { font-size: 6.4pt; letter-spacing: .12em; color: #7c7c7c; font-weight: 500;
     border-bottom: .8pt solid #1b1b1b; }
td.num { font-family: "SFMono-Regular",Menlo,monospace; white-space: nowrap; }
.tag { display: inline-block; font-family: "SFMono-Regular",Menlo,monospace;
       font-size: 6.4pt; border: .5pt solid #1b1b1b; padding: .2mm 1.2mm;
       margin-right: 1mm; }

/* --- first view compare --- */
.fv { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm; margin-top: 3mm; }
.fv img { width: 100%; display: block; border: .4pt solid #c8c8c8; }
.fv .nm { display: flex; align-items: baseline; gap: 1.6mm; margin-bottom: 1.4mm; }
.fv .nm .no { font-family: "SFMono-Regular",Menlo,monospace; font-size: 11pt;
              font-weight: 700; line-height: 1; }
.fv .nm .jp { font-size: 8.4pt; font-weight: 700; }
.fv .en { font-family: "SFMono-Regular",Menlo,monospace; font-size: 5.9pt;
          letter-spacing: .1em; color: #8c8c8c; margin-bottom: 1.6mm; }
.fv p { font-size: 6.9pt; line-height: 1.5; color: #4a4a4a; margin-top: 1.8mm; }
.fv2 img { width: 32mm; }
.fv2 .cp { font-size: 5.8pt; color: #8c8c8c; margin-top: .8mm; }
.chips { display: flex; gap: .8mm; margin-top: 1.6mm; }
.chips i { display: block; width: 100%; height: 3mm; border: .3pt solid rgba(0,0,0,.18); }

/* --- design sheet --- */
.dhead { display: flex; align-items: flex-end; justify-content: space-between; gap: 4mm; }
.dhead .no { font-family: "SFMono-Regular",Menlo,monospace; font-size: 15pt;
             font-weight: 700; line-height: 1; }
.dhead .jp { font-size: 13pt; font-weight: 700; }
.dhead .en { font-family: "SFMono-Regular",Menlo,monospace; font-size: 6.4pt;
             letter-spacing: .16em; color: #8c8c8c; }
.stats { display: flex; gap: 5mm; font-size: 6.6pt; color: #6e6e6e; text-align: right; }
.stats b { display: block; font-family: "SFMono-Regular",Menlo,monospace;
           font-size: 9.5pt; color: #1b1b1b; }
.dcols { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin: 2.4mm 0 3mm; }
.dcols h3 { font-size: 7.2pt; letter-spacing: .1em; color: #7c7c7c; font-weight: 500;
            margin-bottom: 1.2mm; }
.strip { display: grid; grid-template-columns: repeat(6, 1fr); gap: 2.4mm; }
.shot img { width: 100%; display: block; border: .4pt solid #c8c8c8; }
.shot .cap { font-size: 5.6pt; color: #7c7c7c; margin-top: .8mm; display: flex;
             justify-content: space-between; gap: 1mm;
             font-family: "SFMono-Regular",Menlo,monospace; }
.shot .cap span:last-child { font-family: "Hiragino Sans",sans-serif; color: #4a4a4a; }
.page.sheet { display: flex; flex-direction: column; padding-bottom: 8mm; }
.memo { border: .5pt dashed #b8b8b8; padding: 2.4mm; font-size: 6.4pt; color: #9a9a9a;
        flex: 1 1 auto; }
.memo b { display: block; font-size: 6.6pt; color: #6e6e6e; margin-bottom: 1mm;
          letter-spacing: .1em; }

/* --- decision sheet --- */
.vote { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4mm; margin-top: 3mm; }
.vote .cell { border: .5pt solid #cfcfcf; padding: 3mm; min-height: 34mm; }
.vote .cell .hd { display: flex; align-items: flex-start; gap: 2mm; margin-bottom: 2mm; }
.vote .cell .tick { flex: 0 0 auto; }
.vote .cell .tick { width: 5mm; height: 5mm; border: .9pt solid #1b1b1b; }
.lines { margin-top: 2mm; }
.lines i { display: block; border-bottom: .4pt solid #dcdcdc; height: 5.6mm; }
"""

def chips_html(chips):
    return '<div class="chips">' + "".join(
        f'<i style="background:{c}"></i>' for c, _ in chips) + "</div>"

pages = []

# ---------- P1 cover ----------
rows = "".join(
    f'<tr><td class="num">{d["no"]}</td><td><b>{esc(d["name"])}</b> '
    f'<span class="muted mono" style="font-size:6.2pt">{d["en"]}</span></td>'
    f'<td class="num">{len(d["frames"])} 画面</td>'
    f'<td class="num">{d["height"]:,} px</td>'
    f'<td class="muted">{esc(d["lead"])}</td></tr>'
    for d in DESIGNS)

pages.append(f"""
<section class="page">
  <div class="cover-head">
    <div class="eyebrow">K3V SHINJUKU GYOEN — TOP PAGE / DESIGN REVIEW</div>
    <div class="rule"></div>
    <h1>TOPページ モバイル版<br>4案 確認会</h1>
    <div class="meta-line">
      2026-08-24 ／ 実機幅 390 × 844 px（iPhone 相当・日本語表示）でキャプチャ<br>
      全 {sum(len(d["frames"]) for d in DESIGNS)} 画面。各案とも同じ中身・同じセクション順で、違うのはビジュアルだけ。
    </div>
  </div>

  <div class="hair" style="margin:5mm 0 4mm"></div>
  <h2>この会で決めたいこと</h2>
  <div class="decide">
    <div class="n">1</div><div class="b"><b>TOPページのデザインを1案に決める</b>
      <p>A〜Dの4案から1つ。ここが決まらないと、下層ページ（エリア／ギャラリー／FAQ 等）に進めない。</p></div>
    <div class="n">2</div><div class="b"><b>スクロールの長さを今のままでよいか</b>
      <p>いちばん長い案で 13 画面ぶん（約 10,500px）。削るなら「どのセクションを短くするか」まで決めたい。</p></div>
    <div class="n">3</div><div class="b"><b>ページに載せる情報の宿題を確定する</b>
      <p>部屋番号とブランドの対応、ROOM 03 の詳細、予約エンジン。裏面の一覧で埋まっていないものを潰す。</p></div>
  </div>

  <div class="hair"></div>
  <div class="two">
    <div class="box">
      <h3>判断のものさし（クライアント方針・2026-08-05 確定）</h3>
      <ul>
        <li class="ng">シックになりすぎない</li>
        <li class="ng">重くなりすぎない</li>
        <li class="ng">クールすぎない</li>
        <li class="ng">高級感を出さない</li>
      </ul>
      <div class="hair" style="margin:2mm 0"></div>
      <ul>
        <li class="ok">カジュアル・ナチュラル</li>
        <li class="ok">「Living感」＝生活感・暮らしやすさが伝わる</li>
      </ul>
      <p style="font-size:7.2pt;margin-top:2mm">
        全体トーンは <b>“チープシック”</b>
        <span class="muted">— 安っぽさではなく、肩の力が抜けた・気取らない上質さ。</span></p>
    </div>
    <div class="box">
      <h3>進め方（目安 60 分）</h3>
      <table style="font-size:7.2pt">
        <tr><td class="num" style="width:14mm">10 分</td><td>p.2 ファーストビューだけを4案並べて第一印象</td></tr>
        <tr><td class="num">30 分</td><td>p.3–6 各案を1枚ずつ、上から下まで通して見る</td></tr>
        <tr><td class="num">10 分</td><td>p.7 比較表で気になる点を突き合わせ</td></tr>
        <tr><td class="num">10 分</td><td>p.8 決定シートに記入・宿題の確認</td></tr>
      </table>
      <p style="font-size:6.9pt;color:#6e6e6e;margin-top:2.4mm">
        手元で動かす場合は <span class="mono">http://localhost:3000/ja?theme=&lt;案ID&gt;</span>。
        画面右下のスウォッチでも切り替えられる（レビュー用。公開前に外す）。</p>
    </div>
  </div>

  <div class="hair"></div>
  <h2>4案の一覧</h2>
  <table style="margin-top:2mm">
    <tr><th style="width:8mm">案</th><th style="width:44mm">名称</th>
        <th style="width:16mm">画面数</th><th style="width:18mm">総スクロール</th><th>ひとこと</th></tr>
    {rows}
  </table>
  <p style="font-size:6.6pt;color:#8c8c8c;margin-top:2mm">
    「画面数」＝スマホ1画面（844px）ぶんずつ送ったときの枚数。数字が大きいほど、最後まで読むのに指を動かす回数が多い。</p>

  <div class="hair" style="margin:5mm 0 3mm"></div>
  <h2>この資料の構成</h2>
  <table style="margin-top:2mm;font-size:7.2pt">
    <tr><td class="num" style="width:14mm">p.2</td><td style="width:62mm">ファーストビュー比較</td>
      <td class="muted">4案の1画面目・2画面目を並べたもの</td></tr>
    <tr><td class="num">p.3–6</td><td>各案のモバイル全画面</td>
      <td class="muted">上から下まで、1画面ずつ送ったもの（A→B→C→D）</td></tr>
    <tr><td class="num">p.7</td><td>比較表・直したい点・宿題</td>
      <td class="muted">方針に照らした比較と、今日のキャプチャで見つかった課題</td></tr>
    <tr><td class="num">p.8</td><td>決定シート</td>
      <td class="muted">記入用。ここが埋まれば次の工程に進める</td></tr>
  </table>

  <div class="foot"><span>K3V SHINJUKU GYOEN ／ モバイル版 4案 確認会</span>
    <span>2026-08-24 ／ p.1</span></div>
</section>""")

# ---------- P2 first view ----------
fv = "".join(f"""
  <div>
    <div class="nm"><span class="no">{d["no"]}</span><span class="jp">{esc(d["name"])}</span></div>
    <div class="en">{d["en"].upper()}</div>
    <img src="{d["hero"]}" alt="">
    {chips_html(d["chips"])}
  </div>""" for d in DESIGNS)
fv2 = "".join(f'<div><img src="{d["hero2"]}" alt="">'
                f'<div class="cp">{d["no"]}／2画面目</div></div>' for d in DESIGNS)

pages.append(f"""
<section class="page">
  <div class="eyebrow">01 — FIRST VIEW</div>
  <div class="rule"></div>
  <h2>ファーストビュー（スマホを開いて最初に見える1画面）</h2>
  <p class="muted" style="font-size:7.4pt;margin-top:1.4mm">
    ここで「入るか、閉じるか」がほぼ決まる。文章は読まず、色・明るさ・重さの印象だけで比べてください。</p>
  {f'<div class="fv">{fv}</div>'}
  <div class="eyebrow" style="margin:3.4mm 0 1.4mm">1 スクロールぶん指を送った、次の1画面</div>
  {f'<div class="fv fv2" style="margin-top:0">{fv2}</div>'}
  <div class="hair" style="margin-top:4mm"></div>
  <div class="two">
    <div class="box">
      <h3>この4枚で見てほしいところ</h3>
      <ul>
        <li>明るいか／重くないか（方針の「高級感を出さない」に照らして）</li>
        <li>「新宿御苑のすぐそば」が色や絵から伝わるか</li>
        <li>「空室を探す」ボタンが迷わず目に入るか</li>
        <li>生活感（Living感）があるか。ホテルの広告に見えていないか</li>
      </ul>
    </div>
    <div class="box">
      <h3>4案とも共通していること</h3>
      <ul>
        <li>セクションの順番と中身は同一（ヒーロー→立地→近隣→リノベ→設備→客室→アクセス）</li>
        <li>文言は共通の翻訳ファイルから読むので、案によって内容がズレることはない</li>
        <li>日本語・英語・中国語の3言語。スマホのヘッダーから言語を切り替えられる</li>
        <li>「空室を探す」は現状すべて問い合わせ導線（予約エンジン未選定）</li>
      </ul>
    </div>
  </div>
  <div class="foot"><span>K3V SHINJUKU GYOEN ／ モバイル版 4案 確認会</span>
    <span>2026-08-24 ／ p.2</span></div>
</section>""")

# ---------- P3-6 design sheets ----------
for i, d in enumerate(DESIGNS):
    shots = "".join(f"""
    <div class="shot"><img src="{f["src"]}" alt="">
      <div class="cap"><span>{n+1:02d}</span><span>{esc(f["label"])}</span></div></div>"""
        for n, f in enumerate(d["frames"]))
    memo = ""
    memo_below = ('<div class="memo" style="margin-top:3.4mm;min-height:16mm">'
                  '<b>MEMO　気になった画面の番号と、その理由</b></div>')
    good = "".join(f"<li>{esc(x)}</li>" for x in d["good"])
    watch = "".join(f"<li class='ng'>{esc(x)}</li>" for x in d["watch"])
    pages.append(f"""
<section class="page sheet">
  <div class="eyebrow">0{i+2} — DESIGN {d["no"]}</div>
  <div class="rule" style="margin:2mm 0 2.6mm"></div>
  <div class="dhead">
    <div style="display:flex;align-items:baseline;gap:3mm">
      <span class="no">{d["no"]}</span>
      <span><span class="jp">{esc(d["name"])}</span>
        <span class="en" style="margin-left:2mm">{d["en"].upper()}</span></span>
    </div>
    <div class="stats">
      <div>画面数<b>{len(d["frames"])}</b></div>
      <div>総スクロール<b>{d["height"]:,}<span style="font-size:6pt"> px</span></b></div>
      <div style="text-align:left;min-width:26mm">主要色{chips_html(d["chips"])}</div>
    </div>
  </div>
  <div class="dcols">
    <div><h3>この案の良さ</h3><ul>{good}</ul></div>
    <div><h3>確認したい点</h3><ul>{watch}</ul></div>
  </div>
  <div class="strip">{shots}{memo}</div>
  {memo_below}
  <div class="foot"><span>{d["no"]} ／ {esc(d["name"])}（{d["en"]}）　
    <span class="mono">{d["url"]}</span></span><span>2026-08-24 ／ p.{i+3}</span></div>
</section>""")

# ---------- P7 comparison ----------
cmp_rows = [
    ("重さ・高級感（方針のNG）", [
        "明るく軽い。装飾が少ないぶん重さは出ない",
        "セージの面が広い。8/22に深緑を撤去し、重さは解消済み",
        "濃紺・黒に近い面が数箇所残る。4案でいちばん締まって見える",
        "暗い色を意図的に排除（最暗 L*33.7）。4案でいちばん軽い"]),
    ("生活感（Living感）", [
        "イラストは小さめ。生活の場面は伝わりにくい",
        "室内イラストが大きく入る。窓辺・鉢植えなど暮らしの気配あり",
        "室内イラスト＋近隣ショップの自動スライドで生活圏まで見せる",
        "同上＋御苑の植物と木漏れ日が全体に入る"]),
    ("読みやすさ", [
        "4案でいちばん読みやすい",
        "おおむね良好。ただし ROOM 02 のみ本文がウッドに乗り読みにくい",
        "本文4.5:1以上を確保。英字が強く和文が従属して見える場面あり",
        "最も薄い組合せでも 4.60。淡い色が続くのでメリハリは弱め"]),
    ("スクロール量", ["10 画面（7,888px）", "12 画面（9,943px）",
                 "13 画面（10,519px）", "13 画面（10,543px）"]),
    ("実装の状況", [
        "本番コンポーネント。下層ページ（/rooms・/stay）と地続き",
        "TOPのみ。レビュー用CSSで丸ごと差し替える方式",
        "TOPのみ。同上",
        "TOPのみ。同上。three.js の木漏れ日は選択時だけ読み込む"]),
]
cmp_html = "".join(
    "<tr><th style='border-bottom:.4pt solid #dcdcdc;color:#1b1b1b;font-weight:700;"
    "font-size:7pt;letter-spacing:0'>" + esc(k) + "</th>" +
    "".join(f"<td>{esc(v)}</td>" for v in vals) + "</tr>"
    for k, vals in cmp_rows)

pages.append(f"""
<section class="page">
  <div class="eyebrow">06 — COMPARISON</div>
  <div class="rule"></div>
  <h2>4案の比較</h2>
  <table style="margin-top:3mm">
    <tr><th style="width:26mm"></th>
      <th style="width:38mm">A 現行案</th><th style="width:38mm">B 御苑グリーン</th>
      <th style="width:38mm">C ウォッシュドデニム</th><th>D 統合案</th></tr>
    {cmp_html}
  </table>

  <div class="hair" style="margin:5mm 0 3mm"></div>
  <h2>今日のキャプチャで見つかった、直したい点</h2>
  <table style="margin-top:2mm">
    <tr><th style="width:22mm">案</th><th style="width:24mm">場所</th><th>内容</th><th style="width:18mm">扱い</th></tr>
    <tr><td>B 御苑グリーン</td><td class="num">09枚目 / ROOM 02</td>
      <td>本文と「ROOM 02」ラベルがウッドパネルの上に直接乗り、コントラストが足りない。<span class="acc">この案を採用する場合は必修</span></td>
      <td>レイアウト修正</td></tr>
    <tr><td>B 御苑グリーン</td><td class="num">10枚目 / ROOM 03下</td>
      <td>客室ブロックとアクセスの間に、何も無い帯が1/3画面ぶん空く</td><td>余白調整</td></tr>
    <tr><td>4案共通</td><td class="num">—</td>
      <td>Guest Reviews（お客様の声）は実績が無いため未掲載。開業後の宿泊者レビューが集まり次第、差し込む場所を決めたい</td>
      <td>要相談</td></tr>
    <tr><td>4案共通</td><td class="num">—</td>
      <td>「空室を探す」は問い合わせフォーム止まり。実予約は予約エンジン確定後</td><td>Phase 3</td></tr>
  </table>

  <div class="hair" style="margin:5mm 0 3mm"></div>
  <h2>クライアント確認事項（この会で埋めたい宿題）</h2>
  <div class="two" style="gap:5mm">
    <div class="box">
      <ul>
        <li>部屋番号 <span class="mono">305 / 401 / 503</span> と3ブランド（unico / journal standard furniture / crash gate）の対応</li>
        <li>ROOM 03（CRASH GATE）の詳細 — 現在は「準備中」表記</li>
        <li>各部屋の面積・定員・ベッドタイプ</li>
      </ul>
    </div>
    <div class="box">
      <ul>
        <li>予約エンジンの選定（Beds24 / CHILLNW など）と連携方式</li>
        <li>新宿三丁目・歌舞伎町までの徒歩分数（現在は「すぐそこ」等の定性表現）</li>
        <li>音楽設備の機種選定</li>
      </ul>
    </div>
  </div>
  <div class="hair" style="margin:5mm 0 3mm"></div>
  <h2>前回レビュー（8/17）からの変更点</h2>
  <div class="two" style="gap:5mm;margin-top:2mm">
    <div class="box">
      <h3>4案に共通して入れたこと</h3>
      <ul>
        <li>木の色柄をサイト全体で1種類に統一（あたたかいオレンジの無垢材・斜め木目）</li>
        <li>緑もセージ1本に統一。中間色の地には濃い文字、という規則に揃えた</li>
        <li>近隣ショップの見せ方を「自動でゆっくり流れるスライド」に統一</li>
        <li>スマホのヘッダーから言語を切り替えられるように</li>
        <li>文字サイズと行間を見直し、1画面あたりの情報量を下げた</li>
      </ul>
    </div>
    <div class="box">
      <h3>案ごとの変更</h3>
      <ul>
        <li><b>B 御苑グリーン</b> — 「暗い深緑が高級感を出してしまう」の指摘を受け、レイアウトは一切触らずに色だけ明るいセージへ。イラストもDと同じものに差し替え</li>
        <li><b>C ウォッシュドデニム</b> — 最終セクションの濃茶ブロックを、明るいウッド調に変更。白の細字をやめ濃い文字に反転</li>
        <li><b>D 統合案</b> — 御苑の植物（ヤツデ・アオキ・ヨモギ）と木漏れ日を追加</li>
      </ul>
    </div>
  </div>
  <div class="foot"><span>K3V SHINJUKU GYOEN ／ モバイル版 4案 確認会</span>
    <span>2026-08-24 ／ p.7</span></div>
</section>""")

# ---------- P8 decision ----------
vote = "".join(f"""
  <div class="cell">
    <div class="hd"><span class="tick"></span>
      <b style="font-size:9pt">{d["no"]}　{esc(d["short"])}</b></div>
    <div class="lines"><i></i><i></i><i></i><i></i></div>
  </div>""" for d in DESIGNS)

pages.append(f"""
<section class="page">
  <div class="eyebrow">07 — DECISION</div>
  <div class="rule"></div>
  <h2>決定シート</h2>
  <p class="muted" style="font-size:7.4pt;margin-top:1.4mm">
    採用する案にチェックを入れ、下の行に「なぜそれか／直してほしいところ」を書いてください。</p>
  <div class="vote">{vote}</div>

  <div class="hair" style="margin:6mm 0 3mm"></div>
  <h2>決めたこと</h2>
  <table style="margin-top:2mm">
    <tr><th style="width:52mm">決定事項</th><th style="width:26mm">結論</th><th>補足・条件</th></tr>
    <tr><td>1. TOPページのデザイン</td><td style="height:11mm"></td><td></td></tr>
    <tr><td>2. スクロールの長さ</td><td style="height:11mm"></td><td></td></tr>
    <tr><td>3. 部屋番号とブランドの対応</td><td style="height:11mm"></td><td></td></tr>
    <tr><td>4. 予約エンジン</td><td style="height:11mm"></td><td></td></tr>
    <tr><td>5. その他</td><td style="height:11mm"></td><td></td></tr>
  </table>

  <div class="hair" style="margin:5mm 0 3mm"></div>
  <h2>決定後にこちらで進めること</h2>
  <div class="two">
    <div class="box">
      <h3>すぐ着手</h3>
      <ul>
        <li>採用案を本番のTOPページに昇格し、不採用3案のCSS・コンポーネントを撤去</li>
        <li>レビュー用の配色スウォッチ（画面右下）を撤去</li>
        <li>採用案に残っている読みにくさの修正</li>
      </ul>
    </div>
    <div class="box">
      <h3>続いて</h3>
      <ul>
        <li>下層ページの追加 — エリア／ギャラリー／レビュー／お知らせ／FAQ／周辺ガイド／お問い合わせ</li>
        <li>予約エンジン連携（確定後）</li>
        <li>Googleビジネスプロフィール登録とSEO設計</li>
      </ul>
    </div>
  </div>

  <div style="margin-top:6mm">
    <h2>自由記入</h2>
    <div class="lines" style="margin-top:2mm">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
  </div>
  <div class="foot"><span>K3V SHINJUKU GYOEN ／ モバイル版 4案 確認会</span>
    <span>2026-08-24 ／ p.8</span></div>
</section>""")

doc = ("<!doctype html><html lang='ja'><head><meta charset='utf-8'>"
       "<title>K3V モバイル版 4案 確認会</title><style>" + CSS + "</style></head><body>"
       + "".join(pages) + "</body></html>")

path = os.path.join(OUT, "mobile-review-2026-08-24.html")
open(path, "w").write(doc)
print(path, round(len(doc) / 1024 / 1024, 2), "MB")
