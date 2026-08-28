/**
 * TOPページのセクションが共有する型と小さな部品。
 *
 * 各セクションの中身（見出し・本文・リスト）は messages の
 * `hero` / `primeLocation` / `renovated` / `rooms` / `access` 名前空間から読む。
 * `t.raw()` で配列を取り出す箇所の形をここで一度だけ宣言している。
 */

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

/** ACCESS セクションが指す住所。地図の埋め込み URL もここから作る。 */
export const ACCESS_ADDRESS = "東京都新宿区新宿１丁目１９−６";

export const ACCESS_MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ACCESS_ADDRESS
)}&output=embed`;

/** ACCESS セクションの地図。枠のとり方は呼び出し側が className で決める。 */
export function AccessMap({ title, className }: { title: string; className?: string }) {
  return (
    <div className={className}>
      <iframe
        title={title}
        src={ACCESS_MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

/* --- messages から読む配列の形 ------------------------------------------- */

/** ROOMS セクションの1室。`rooms.items` の各要素。 */
export type RoomCard = {
  tag: string;
  name: string;
  subtitle: string;
  text: string;
  cta: string;
  alt: string;
  slug: string;
};

/** PRIME LOCATION の徒歩分数（`primeLocation.stats`）。 */
export type Stat = { value: string; label: string };
/** 近隣SHOPの横スライド1枚（`primeLocation.nearby`）。 */
export type Nearby = { label: string; distance: string };
/** RENOVATED の素材カード（`renovated.points`）。 */
export type Point = { title: string; text: string };
/** ACCESS のまとめ帯の1項目（`access.details`）。 */
export type Detail = { label: string; value: string };
/** 立地の利便性の1項目（`primeLocation.convenience.items`）。 */
export type ConvenienceItem = { title: string; text: string };

/* ---------------------------------------------------------------------------
   モバイル用の言語ボタン。

   TOPページのナビは自前で、デスクトップの `.lang` ストリップを電話幅で隠す。
   そのままだと 民泊サイトで最も多いモバイル訪問者 —— EN/中文 を最も必要と
   する層 —— に言語切替の手段が無くなるので、その置き換えとして小さな地球儀
   ボタンをナビに置いている。

   JS は使わない。開閉は隠しチェックボックスと CSS `:checked` で、ROOM 01 の
   スライダーと同じ手。サーバーレンダリングのままで動く。

   スタイル：app/styles/top-layout.css 末尾の `.mlang*` ブロック。
   --------------------------------------------------------------------------- */

/** ボタン面に出す短いラベル。ポップアップ側は `localeSwitcher` の正式名を使う。 */
const LOCALE_SHORT: Record<string, string> = { ja: "JA", en: "EN", zh: "中文" };

export async function LangSwitch({ locale }: { locale: string }) {
  const t = await getTranslations("localeSwitcher");
  const id = "mlang";

  return (
    <div className="mlang">
      <input type="checkbox" id={id} className="mlang-in" />
      {/* closes the popup on any tap outside it */}
      <label htmlFor={id} className="mlang-scrim" aria-hidden="true" />
      <label htmlFor={id} className="mlang-btn" aria-label={t("label")}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <b>{LOCALE_SHORT[locale] ?? locale.toUpperCase()}</b>
      </label>
      <ul className="mlang-pop">
        {routing.locales.map((l) => (
          <li key={l}>
            <a href={`/${l}`} aria-current={l === locale ? "true" : undefined}>
              {t(l)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
