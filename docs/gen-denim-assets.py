#!/usr/bin/env python3
"""Generate the Denim Sakura design assets from docs/top-page-mock-6.html.

Emits:
  app/[locale]/_components/denim/defs.ts   — SVG <defs>, every id namespaced dn-
  app/denim-design.css                     — the mock's CSS scoped under .denim-top

Namespacing matters: the gyoen defs are in the same document and share 11 ids
(sc-canopy, sc-room-a, wallA, …). Duplicate ids make <use> resolve to whichever
block comes first, which would break one of the two designs.
"""
import re, pathlib

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")
src = (ROOT / "docs/top-page-mock-6.html").read_text()

# ---------------------------------------------------------------- defs
# Anchored past </style> on purpose. The stylesheet mentions "<defs>" inside a
# comment, so searching the whole file starts the match in the CSS; and symbols
# carry their own nested <defs>, so the closing tag has to be the LAST one, not
# the first. Slice explicitly rather than trusting a regex with either hazard.
tail = src[src.index("</style>") :]
defs = tail[tail.index("<defs>") : tail.rindex("</defs>") + len("</defs>")]

assert defs.startswith("<defs>") and defs.endswith("</defs>"), "defs slice is off"
for stray in ("<style", "<svg", "<body", "</html>"):
    assert stray not in defs, f"defs slice swallowed {stray!r} — extraction anchors are wrong"
assert defs.count("<symbol") == src.count("<symbol"), "lost symbols"

ids = sorted(set(re.findall(r'id="([^"]+)"', defs)), key=len, reverse=True)
for i in ids:
    defs = defs.replace(f'id="{i}"', f'id="dn-{i}"')
    defs = defs.replace(f"url(#{i})", f"url(#dn-{i})")
    defs = defs.replace(f'href="#{i}"', f'href="#dn-{i}"')

assert "`" not in defs and "${" not in defs, "defs would break the template literal"

(ROOT / "app/[locale]/_components/denim").mkdir(parents=True, exist_ok=True)
(ROOT / "app/[locale]/_components/denim/defs.ts").write_text(
    "/* Auto-extracted verbatim from docs/top-page-mock-6.html, with every SVG id\n"
    "   namespaced `dn-`: the Gyoen Green defs are in the same document and share\n"
    "   11 ids (sc-canopy, sc-room-a, wallA, …), and duplicate ids would make <use>\n"
    "   resolve to whichever block comes first.\n\n"
    "   Kept as a raw string and injected with dangerouslySetInnerHTML: it is static\n"
    "   authored markup, and hand-converting ~250 SVG attributes to JSX casing would\n"
    "   only add transcription risk. Re-run docs/gen-denim-assets.py if the mock changes. */\n"
    "export const DENIM_SVG_DEFS = String.raw`\n" + defs + "\n`;\n"
)
print(f"defs.ts      {len(ids)} ids namespaced")

# ---------------------------------------------------------------- css
css = re.search(r"<style>(.*?)</style>", src, re.S).group(1)
css = css.replace("--grain", "--dn-grain")  # set per-subtree, not on <html>

# Split top-level into (prelude, body) rule pairs.
def split_rules(text):
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

HOIST = {":root", "body"}   # declarations move onto .denim-top itself
DROP = {"html"}             # document-level rules have no meaning when scoped

def render(rules, indent):
    pad = " " * indent
    hoisted, nested = [], []
    for head, body in rules:
        # a rule's prelude carries its leading comments; classify on the
        # selector alone but keep the comments in the output
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
   REVIEW-ONLY alternative TOP page design ("Denim Sakura").

   The third entry of the 配色プレビュー switcher. Like Gyoen Green — and unlike
   the palette-only themes — this swaps the entire TOP page: layout, typography,
   materials and chrome.

   Mechanism: every design is rendered into the DOM and CSS decides which one is
   visible, so switching is instant with no flash and no hydration mismatch (the
   theme is set on <html> by an inline script before paint).

   To remove before launch:
     1. delete this file and its @import in app/globals.css
     2. delete app/[locale]/_components/denim/
     3. drop <DenimTop /> from app/[locale]/page.tsx
     4. remove the "denim" namespace from messages/{ja,en,zh}.json
     5. drop the denim-sakura entry from components/ThemeMock.tsx
   Source of the design: docs/top-page-mock-6.html
   Generated by docs/gen-denim-assets.py — edit the mock and re-run, or edit here
   and delete the script; do not do both.
   --------------------------------------------------------------------------- */

/* --- which design is on screen ------------------------------------------- */
[data-design="denim"] {
  display: none;
}
[data-theme="denim-sakura"] [data-design="denim"] {
  display: block;
}
[data-theme="denim-sakura"] [data-design="current"] {
  display: none;
}
/* the current design's chrome (sticky nav, footer, mobile tab bar) and the
   bottom padding that reserves space for it */
[data-theme="denim-sakura"] [data-chrome="current"] {
  display: none;
}
[data-theme="denim-sakura"] [data-chrome-pad] {
  padding-bottom: 0;
}

/* --- the design itself, all nested under .denim-top ----------------------- */
.denim-top {
"""

(ROOT / "app/denim-design.css").write_text(header + body + "\n}\n")
print("denim-design.css written")
