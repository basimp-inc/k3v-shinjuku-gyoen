#!/usr/bin/env python3
"""Add the per-design Latin display lines (`display.*`) to messages/{ja,en,zh}.json.

REVIEW-ONLY. Background: the six alternative TOP designs all render the same
six canonical sections from the same canonical (Japanese) message namespaces.
Five of them were built around a Latin display face — Fraunces, Instrument
Serif, Newsreader, Archivo Black — carrying a big English line, and that line
was where each design's typographic character lived. Setting the canonical
Japanese headings in those faces is not possible (no 和文 glyphs), so the big
Latin line comes back as its own element above the Japanese heading.

These lines are a TYPOGRAPHIC device, not information:

  * they carry no facts (no walk times, no room counts, no prices), so they
    cannot drift out of sync with the canonical Japanese copy;
  * they are identical across ja/en/zh — a display face specimen, not
    translated copy;
  * the substantive content of all six sections stays canonical and identical
    across all six designs, which is what makes the mockups comparable.

Doma Ceramic is deliberately absent: its display face IS a 和文 face (Zen Maru
Gothic 900) and "和文 leads, no 明朝, no gloss" is that design's stated
argument. Giving it a big Latin line would erase the one design in the set
that leads with Japanese.

Removal: delete this file and the "display" block from each design namespace.

Idempotent — re-running overwrites the blocks in place.
"""

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

# key order mirrors the canonical section order
DISPLAY = {
    # Fraunces serif · 御苑の緑が主役、いちばん建築的な案
    "gyoen": {
        "hero": "Live Tokyo Beautifully.",
        "location": "Green on One Side.",
        "renovated": "Everything Made New.",
        "amenities": "Already Yours.",
        "rooms": "Three Rooms, Three Lives.",
        "access": "Find the Door.",
    },
    # Fraunces serif · デニム×桜、いちばん柔らかい案
    "denim": {
        "hero": "Not Just a Stay.",
        "location": "Just Around Here.",
        "renovated": "Cut, Sewn, Finished.",
        "amenities": "Packed and Ready.",
        "rooms": "Three Cuts of Cloth.",
        "access": "Come Find Us.",
    },
    # Instrument Serif · 生デニムと無垢材、いちばん暗い案
    "timber": {
        "hero": "Live Tokyo Beautifully.",
        "location": "Where the City Softens.",
        "renovated": "Timber, Indigo, New.",
        "amenities": "Travel Light.",
        "rooms": "Three Rooms, One House.",
        "access": "Getting Here.",
    },
    # Barlow Condensed / Newsreader italic · 洗いざらしのデニム、明るい反転案
    "chambray": {
        "hero": "Stay Steps Away.",
        "location": "Everything Nearby.",
        "renovated": "Washed, Not Worn.",
        "amenities": "Bring Yourself.",
        "rooms": "Three Rooms, Three Cloths.",
        "access": "Find Us Here.",
    },
    # Archivo Black / Anton · リソグラフ3色刷り、いちばん大きい活字
    "kraft": {
        "hero": "Live Tokyo Beautifully",
        "location": "Minutes Away",
        "renovated": "All New, All Over",
        "amenities": "Pack Nothing",
        "rooms": "Three Rooms, Three Inks",
        "access": "Come On Over",
    },
}


def main() -> None:
    for locale in ("ja", "en", "zh"):
        path = ROOT / "messages" / f"{locale}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        for design, block in DISPLAY.items():
            if design not in data:
                raise SystemExit(f"{path.name}: missing '{design}' namespace")
            data[design]["display"] = block
        path.write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(f"{path.relative_to(ROOT)}: display lines for {len(DISPLAY)} designs")


if __name__ == "__main__":
    main()
