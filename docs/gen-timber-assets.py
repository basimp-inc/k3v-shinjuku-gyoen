#!/usr/bin/env python3
"""Generate the Timber Indigo design assets from docs/top-page-mock-7.html.

Emits:
  app/[locale]/_components/timber/scenes.ts  — the mock's inline SVG scenes,
                                               every id namespaced tb-
  app/timber-design.css                      — the mock's CSS scoped under .timber-top

Unlike Gyoen Green and Denim Sakura, mock 7 has no shared <defs>/<symbol> block:
each scene carries its own <defs>. They still need namespacing — the three
alternative designs are all in the same document, and short ids like #sky, #wall
or #glow would otherwise resolve to whichever block the browser met first.
"""
import re, pathlib

ROOT = pathlib.Path("/Users/apple/workbench/k3v-shinjuku-gyoen")
src = (ROOT / "docs/top-page-mock-7.html").read_text()

# ---------------------------------------------------------------- scenes
# Named in document order. Keep this list in step with the mock: the assert
# below fails loudly if a scene is added or removed rather than silently
# shifting every name by one.
SCENE_NAMES = [
    "HERO",      # 木の格子 × 夕暮れの新宿
    "LIVING",    # 無垢の木とデニムのリビング
    "GYOEN_SQ",  # 御苑の樹（小さな正方形）
    "ROOM1", "ROOM2", "ROOM3",
    "EXP_GYOEN", "EXP_YOKOCHO", "EXP_KISSA", "EXP_SKYLINE",
    "SHADOW",    # material 04 のセル
    "MAP",
    "HOOD_CITY", "HOOD_PARK",
]

tail = src[src.index("</style>") :]  # the stylesheet mentions "<svg" in data URIs
scenes = re.findall(r"<svg\b.*?</svg>", tail, re.S)
assert len(scenes) == len(SCENE_NAMES), (
    f"the mock has {len(scenes)} scenes but SCENE_NAMES lists {len(SCENE_NAMES)} — "
    "update the list (and the component) before regenerating"
)

ids = sorted({i for s in scenes for i in re.findall(r'id="([^"]+)"', s)}, key=len, reverse=True)
out = []
for name, svg in zip(SCENE_NAMES, scenes):
    # The mock labels each scene in Japanese; injected raw, that label would stay
    # Japanese on /en and /zh. The scenes are illustrative and every fact they
    # carry is in the adjacent copy, so hide them from assistive tech instead of
    # shipping an untranslated alt.
    svg = re.sub(r'\s*aria-label="[^"]*"', "", svg)
    svg = svg.replace('role="img"', 'aria-hidden="true"', 1)
    for i in ids:
        svg = svg.replace(f'id="{i}"', f'id="tb-{i}"')
        svg = svg.replace(f"url(#{i})", f"url(#tb-{i})")
        svg = svg.replace(f'href="#{i}"', f'href="#tb-{i}"')
    assert "`" not in svg and "${" not in svg, f"{name} would break the template literal"
    out.append(f"export const {name} = String.raw`\n{svg}\n`;\n")

(ROOT / "app/[locale]/_components/timber").mkdir(parents=True, exist_ok=True)
(ROOT / "app/[locale]/_components/timber/scenes.ts").write_text(
    "/* Auto-extracted verbatim from docs/top-page-mock-7.html, with every SVG id\n"
    "   namespaced `tb-`: the Gyoen Green and Denim Sakura designs sit in the same\n"
    "   document and generic ids (#sky, #wall, #glow, #soft) would collide.\n\n"
    "   Kept as raw strings and injected with dangerouslySetInnerHTML: this is static\n"
    "   authored markup, and hand-converting several hundred SVG attributes to JSX\n"
    "   casing would only add transcription risk.\n"
    "   Re-run docs/gen-timber-assets.py if the mock changes. */\n\n"
    + "\n".join(out)
)
print(f"scenes.ts    {len(scenes)} scenes, {len(ids)} ids namespaced")

# ---------------------------------------------------------------- css
css = re.search(r"<style>(.*?)</style>", src, re.S).group(1)

# @keyframes cannot live inside a style rule: nested, Lightning CSS reports
# "Unknown at rule" and — the part that actually bites — drops every bare
# declaration of the enclosing block with it, taking the whole colour palette.
# Lift them to the top level, and namespace the animation names, which are
# global and would otherwise collide with the other two designs.
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
    KEYFRAMES = [k.replace(f"@keyframes {name}", f"@keyframes tb-{name}") for k in KEYFRAMES]
    css = re.sub(
        r"(animation(?:-name)?\s*:[^;}]*?)\b" + re.escape(name) + r"\b",
        lambda m: m.group(1) + f"tb-{name}",
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


HOIST = {":root", "body"}  # declarations move onto .timber-top itself
DROP = {"html"}            # document-level rules have no meaning when scoped


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
   REVIEW-ONLY alternative TOP page design ("Timber Indigo").

   The fourth entry of the 配色プレビュー switcher. Like Gyoen Green and Denim
   Sakura — and unlike the palette-only themes — this swaps the entire TOP page:
   layout, typography, materials and chrome.

   Mechanism: every design is rendered into the DOM and CSS decides which one is
   visible, so switching is instant with no flash and no hydration mismatch (the
   theme is set on <html> by an inline script before paint).

   To remove before launch:
     1. delete this file and its @import in app/globals.css
     2. delete app/[locale]/_components/timber/
     3. drop <TimberTop /> from app/[locale]/page.tsx
     4. remove the "timber" namespace from messages/{ja,en,zh}.json
     5. drop the timber-indigo entry from components/ThemeMock.tsx
   Source of the design: docs/top-page-mock-7.html
   Generated by docs/gen-timber-assets.py — edit the mock and re-run, or edit here
   and delete the script; do not do both.
   --------------------------------------------------------------------------- */

/* --- which design is on screen ------------------------------------------- */
[data-design="timber"] {
  display: none;
}
[data-theme="timber-indigo"] [data-design="timber"] {
  display: block;
}
[data-theme="timber-indigo"] [data-design="current"] {
  display: none;
}
/* The current design's chrome (sticky nav, footer, mobile tab bar) and the
   bottom padding that reserves space for it.

   Scoped with :has() to pages that actually carry the replacement design.
   Only the TOP page renders <TimberTop>, so hiding the chrome unconditionally
   would strip /rooms and every other page of its navigation. */
[data-chrome-pad]:has([data-design="timber"]) {
  [data-theme="timber-indigo"] & {
    padding-bottom: 0;

    [data-chrome="current"] {
      display: none;
    }
  }
}

/* --- the design itself, all nested under .timber-top ---------------------- */
.timber-top {
"""

footer = (
    "\n/* --- animations, hoisted out of the scoped block and tb-namespaced ------- */\n"
    + "\n".join(KEYFRAMES)
    + """

/* --- React-integration fixes, not part of the mock ------------------------ */
/* Each scene is injected with dangerouslySetInnerHTML, which needs a host
   element the mock does not have. display:contents removes that wrapper from
   layout so `.ph svg { height: 100% }` still resolves against `.ph`. */
.timber-top .scene {
  display: contents;
}
/* The film grain is fixed-position and covers the viewport; in the standalone
   mock nothing sits above it, but here the 配色プレビュー switcher does. It is
   pointer-events:none either way — this only keeps it from tinting the panel. */
.timber-top .grain {
  z-index: 40;
}
"""
)

(ROOT / "app/timber-design.css").write_text(header + body + "\n}\n" + footer)
print("timber-design.css written")
