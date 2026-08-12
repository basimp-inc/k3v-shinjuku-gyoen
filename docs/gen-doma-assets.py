#!/usr/bin/env python3
"""Generate the Doma Ceramic design assets from docs/top-page-mock-10.html.

Emits:
  app/[locale]/_components/doma/scenes.ts  — the mock's illustrated SVG scenes,
                                              every id namespaced dc-
  app/doma-design.css                      — the mock's CSS scoped under .doma-top

Differences from gen-chambray-assets.py:
  * mock 10 draws its button arrows inline as 24×24 SVGs. Those are markup, not
    artwork — the component renders them as JSX — so they are filtered out here
    rather than being extracted as scenes.
  * the illustrations carry <title>, not aria-label. Same problem though: the
    text is Japanese and would stay Japanese on /en and /zh, so the scenes are
    hidden from assistive tech and the facts are left to the adjacent copy.
  * ids are rewritten across every scene rather than per scene, so a gradient or
    filter declared in one scene stays resolvable if it is reused in another.
"""
import re, pathlib

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")
PREFIX = "dc-"
src = (ROOT / "docs/top-page-mock-10.html").read_text()

# ---------------------------------------------------------------- scenes
SCENE_NAMES = [
    "HERO",        # 障子と三和土、床に置いた三つの器
    "LIVING",      # 窓辺のソファと観葉植物、床の器
    "EXP_GYOEN", "EXP_KISSA", "EXP_LAUNDRY", "EXP_YOKOCHO", "EXP_SKYLINE",
    "BOWL_ORIBE", "BOWL_AME", "BOWL_TETSU", "BOWL_DOMA",   # 素材セクションの4枚
    "MAP",
]

tail = src[src.index("</style>") :]  # the stylesheet mentions "<svg" in data URIs
svgs = re.findall(r"<svg\b.*?</svg>", tail, re.S)
scenes = [s for s in svgs if 'viewBox="0 0 24 24"' not in s]
assert len(scenes) == len(SCENE_NAMES), (
    f"the mock has {len(scenes)} illustrations but SCENE_NAMES lists {len(SCENE_NAMES)} — "
    "update the list (and the component) before regenerating"
)

ids = sorted({i for s in scenes for i in re.findall(r'id="([^"]+)"', s)}, key=len, reverse=True)
out = []
for name, svg in zip(SCENE_NAMES, scenes):
    svg = re.sub(r"<title\b[^>]*>.*?</title>", "", svg, flags=re.S)
    svg = re.sub(r'\s*aria-labelledby="[^"]*"', "", svg)
    svg = svg.replace('role="img"', 'aria-hidden="true"', 1)
    if "aria-hidden" not in svg:
        svg = svg.replace("<svg", '<svg aria-hidden="true"', 1)
    for i in ids:
        svg = svg.replace(f'id="{i}"', f'id="{PREFIX}{i}"')
        svg = svg.replace(f"url(#{i})", f"url(#{PREFIX}{i})")
        svg = svg.replace(f'href="#{i}"', f'href="#{PREFIX}{i}"')
    assert "`" not in svg and "${" not in svg, f"{name} would break the template literal"
    out.append(f"export const {name} = String.raw`\n{svg}\n`;\n")

(ROOT / "app/[locale]/_components/doma").mkdir(parents=True, exist_ok=True)
(ROOT / "app/[locale]/_components/doma/scenes.ts").write_text(
    "/* Auto-extracted verbatim from docs/top-page-mock-10.html, with every SVG id\n"
    f"   namespaced `{PREFIX}`: the other alternative designs sit in the same document\n"
    "   and short ids (#doma-g, #grit, #pane) would otherwise resolve to whichever\n"
    "   block the browser met first.\n\n"
    "   Kept as raw strings and injected with dangerouslySetInnerHTML: this is static\n"
    "   authored markup, and hand-converting several hundred SVG attributes to JSX\n"
    "   casing would only add transcription risk.\n"
    "   Re-run docs/gen-doma-assets.py if the mock changes. */\n\n"
    + "\n".join(out)
)
print(f"scenes.ts    {len(scenes)} scenes, {len(ids)} ids namespaced, {len(svgs)-len(scenes)} icons skipped")

# ---------------------------------------------------------------- css
css = re.search(r"<style>(.*?)</style>", src, re.S).group(1)

# @keyframes cannot live inside a style rule: nested, Lightning CSS reports
# "Unknown at rule" and drops every bare declaration of the enclosing block with
# it, taking the whole palette. Lift them out and namespace the animation names,
# which are global and would collide with the other designs.
KEYFRAMES = []


def lift_keyframes(text):
    out, i = "", 0
    while True:
        m = re.compile(r"@keyframes\s+[\w-]+\s*\{").search(text, i)
        if not m:
            return out + text[i:]
        out += text[i : m.start()]
        depth, j = 1, m.end()
        while depth:
            depth += {"{": 1, "}": -1}.get(text[j], 0)
            j += 1
        KEYFRAMES.append(text[m.start() : j])
        i = j


css = lift_keyframes(css)
for name in re.findall(r"@keyframes\s+([\w-]+)", "".join(KEYFRAMES)):
    KEYFRAMES = [k.replace(f"@keyframes {name}", f"@keyframes {PREFIX}{name}") for k in KEYFRAMES]
    css = re.sub(
        r"(animation(?:-name)?\s*:[^;}]*?)\b" + re.escape(name) + r"\b",
        lambda m: m.group(1) + f"{PREFIX}{name}",
        css,
    )
assert KEYFRAMES, "no @keyframes found — did the mock's animations go away?"


def split_rules(text):
    """Top-level (prelude, body) pairs. Brace counting rather than a regex —
    @media blocks and nested rules both nest braces."""
    out, depth, buf = [], 0, ""
    for ch in text:
        buf += ch
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                head, _, rest = buf.partition("{")
                out.append((head.strip(), rest.rstrip()[:-1]))
                buf = ""
    return out


HOIST = {":root", "body"}  # declarations move onto .doma-top itself
DROP = {"html"}            # document-level rules have no meaning when scoped


def render(rules, indent):
    pad = " " * indent
    hoisted, nested = [], []
    for head, body in rules:
        m = re.match(r"^((?:\s*/\*.*?\*/)*)\s*(.*)$", head, re.S)
        lead, sel = m.group(1).strip(), m.group(2).strip()
        lead = f"{pad}{lead}\n" if lead else ""
        if sel.startswith("@media"):
            inner = render(split_rules(body), indent + 2)
            nested.append(f"{lead}{pad}{sel} {{\n{inner}\n{pad}}}")
            continue
        parts = [s.strip() for s in sel.split(",")]
        if all(p in DROP for p in parts):
            continue
        if all(p in HOIST for p in parts):
            hoisted.append(body.strip())
            continue
        nested.append(f"{lead}{pad}{sel} {{{body.rstrip()}\n{pad}}}")
    return "\n".join(hoisted + nested)


body = render(split_rules(css), 2)

header = """/* ---------------------------------------------------------------------------
   REVIEW-ONLY alternative TOP page design ("Doma Ceramic").

   The seventh entry of the 配色プレビュー switcher. Like Gyoen Green, Denim Sakura,
   Timber Indigo and Washed Chambray — and unlike the palette-only themes — this
   swaps the entire TOP page: layout, typography, materials and chrome.

   Mechanism: every design is rendered into the DOM and CSS decides which one is
   visible, so switching is instant with no flash and no hydration mismatch (the
   theme is set on <html> by an inline script before paint).

   和紙 ground, three matte glazes and a clay floor. No gloss anywhere — matte
   is what keeps this out of 高級旅館 territory, together with the ban on 明朝
   (the display face is 角丸ゴシック, and 和文 leads).
   Three rooms = three glazes (unico 織部 / journal standard 飴釉 / crash gate 鉄釉).

   Glaze rules, verified — one rule covers every glaze:
     和紙・粉引     墨 13.51 / 11.38, 織部 4.62, 飴釉 4.82, 土間影 5.45
     釉薬のベタ面   紙色のみ  織部 5.00 / 飴釉 5.22 / 鉄釉 11.52
     三和土 #A99177 だけが墨文字を受ける中間トーン 5.26

   To remove before launch:
     1. delete this file and its @import in app/globals.css
     2. delete app/[locale]/_components/doma/
     3. drop <DomaTop /> from app/[locale]/page.tsx
     4. remove the "doma" namespace from messages/{ja,en,zh}.json
     5. drop the doma-ceramic entry from components/ThemeMock.tsx
   Source of the design: docs/top-page-mock-10.html
   Generated by docs/gen-doma-assets.py — edit the mock and re-run, or edit here
   and delete the script; do not do both.
   --------------------------------------------------------------------------- */

/* --- which design is on screen ------------------------------------------- */
[data-design="doma"] {
  display: none;
}
[data-theme="doma-ceramic"] [data-design="doma"] {
  display: block;
}
[data-theme="doma-ceramic"] [data-design="current"] {
  display: none;
}
/* The current design's chrome (sticky nav, footer, mobile tab bar) and the
   bottom padding that reserves space for it.

   Scoped with :has() to pages that actually carry the replacement design.
   Only the TOP page renders <KraftTop>, so hiding the chrome unconditionally
   would strip /rooms and every other page of its navigation. */
[data-chrome-pad]:has([data-design="doma"]) {
  [data-theme="doma-ceramic"] & {
    padding-bottom: 0;

    [data-chrome="current"] {
      display: none;
    }
  }
}

/* --- the design itself, all nested under .doma-top ----------------------- */
.doma-top {
"""

footer = (
    f"\n/* --- animations, hoisted out of the scoped block and {PREFIX}namespaced ------ */\n"
    + "\n".join(KEYFRAMES)
    + """

/* --- React-integration fixes, not part of the mock ------------------------ */
/* Each scene is injected with dangerouslySetInnerHTML, which needs a host
   element the mock does not have. display:contents removes that wrapper from
   layout so the svg still sizes against the figure it sits in. */
.doma-top .scene {
  display: contents;
}
"""
)

(ROOT / "app/doma-design.css").write_text(header + body + "\n}\n" + footer)
print("doma-design.css written")
