#!/usr/bin/env python3
"""Add the shared `mockNav` namespace to messages/{ja,en,zh}.json.

REVIEW-ONLY. The six alternative TOP-page designs (Gyoen Green, Denim Sakura,
Timber Indigo, Washed Chambray, Kraft Riso, Doma Ceramic) all render the same
six canonical sections, so they share one set of navigation labels instead of
each carrying its own. Only the *treatment* of the nav differs per design.

Removal: delete this file, the "mockNav" namespace from the three message
files, and the six *Top.tsx components.

Idempotent — re-running overwrites the namespace in place and keeps key order.
"""

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

# Section labels mirror the canonical eyebrows in `primeLocation`, `renovated`,
# `amenities`, `rooms` and `access` so the nav and the sections cannot drift.
MOCK_NAV = {
    "ja": {
        "location": "立地",
        "renovated": "リノベーション",
        "amenities": "設備",
        "rooms": "お部屋",
        "access": "アクセス",
        "book": "空室を探す",
        "menu": "メニュー",
        "close": "閉じる",
        "home": "ホーム",
    },
    "en": {
        "location": "Location",
        "renovated": "Renovated",
        "amenities": "Amenities",
        "rooms": "Rooms",
        "access": "Access",
        "book": "Check Availability",
        "menu": "Menu",
        "close": "Close",
        "home": "Home",
    },
    "zh": {
        "location": "地段",
        "renovated": "翻新",
        "amenities": "设施",
        "rooms": "客房",
        "access": "交通",
        "book": "查询空房",
        "menu": "菜单",
        "close": "关闭",
        "home": "首页",
    },
}


def main() -> None:
    for locale, block in MOCK_NAV.items():
        path = ROOT / "messages" / f"{locale}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        data["mockNav"] = block
        path.write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(f"{path.relative_to(ROOT)}: mockNav ({len(block)} keys)")


if __name__ == "__main__":
    main()
