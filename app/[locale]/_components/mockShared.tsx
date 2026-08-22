/**
 * REVIEW-ONLY helpers shared by the six alternative TOP-page designs
 * (Washed Chambray, Gyoen Green).
 *
 * The six designs deliberately share their *content* and their *information
 * architecture* — Hero → PrimeLocation → Renovated → Amenities → Rooms →
 * Access, all read from the canonical `hero` / `primeLocation` / `renovated` /
 * `amenities` / `rooms` / `access` message namespaces — so a client comparing
 * them is only ever comparing visual direction. Anything that would otherwise
 * be copy-pasted six times and could silently drift lives here.
 *
 * To remove before launch: delete this file together with the six *Top.tsx
 * components (see the removal steps at the top of each design's stylesheet).
 */

import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

/** Same address the production Access section uses, so every design pins the
 *  same point on the same map. */
export const MOCK_ADDRESS = "東京都新宿区新宿１丁目１９−６";

export const MOCK_MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MOCK_ADDRESS
)}&output=embed`;

/**
 * The Access map. Every design frames it differently — that framing is the
 * design's job, passed in as `className` — but the embed itself is identical
 * everywhere so the section stays comparable.
 */
export function MockMap({ title, className }: { title: string; className?: string }) {
  return (
    <div className={className}>
      <iframe
        title={title}
        src={MOCK_MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

/** Copy that carries an intentional line break in the message file. */
export function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/** The room list, shaped the same way for all six designs. */
export type MockRoom = {
  tag: string;
  name: string;
  subtitle: string;
  text: string;
  cta: string;
  alt: string;
  slug: string;
};

export type MockStat = { value: string; label: string };
export type MockNearby = { label: string; distance: string };
export type MockPoint = { title: string; text: string };
export type MockItem = { label: string };
export type MockDetail = { label: string; value: string };

/* ---------------------------------------------------------------------------
   Phase 1.5 — the two content blocks the 2026-08-17 client feedback asked for.
   Only Washed Chambray and Gyoen Green render these; the four archived designs
   never read the keys, so their output is unchanged.

   Both are deliberately plain markup with `mock-conv-*` / `mock-fac-*` class
   names. Each design styles them inside its own scope in mock-structure.css —
   same split as the rest of the canonical sections.
   --------------------------------------------------------------------------- */

export type MockConvenienceItem = { title: string; text: string };

/**
 * "至近にこれだけ揃っている / 夜中でも買いに行ける" — the convenience argument
 * the location section was missing. It sits under the walk times, because it
 * is the answer to "and what is actually around it?".
 */
export function MockConvenience({
  eyebrow,
  heading,
  text,
  items,
}: {
  eyebrow: string;
  heading: string;
  text: string;
  items: MockConvenienceItem[];
}) {
  return (
    <div className="mock-conv">
      <div className="mock-conv-head">
        <span className="mock-conv-eyebrow">{eyebrow}</span>
        <h3 className="mock-conv-h">{heading}</h3>
        <p className="mock-conv-lead">{text}</p>
      </div>
      <ul className="mock-conv-list">
        {items.map((item) => (
          <li key={item.title}>
            <b>{item.title}</b>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type MockRoomFacility = { room: string; items: MockItem[] };

/**
 * Per-room fittings (305 / 401 / 503) plus the every-room list.
 *
 * Rooms are keyed by number, not by furniture brand: which number maps to
 * UNICO / JOURNAL STANDARD FURNITURE / CRASH GATE is still unconfirmed with
 * the client, so nothing here claims a pairing. When it is confirmed, the
 * brand belongs in the `room` string in messages/*.json and nowhere else.
 */
export function MockFacilities({
  heading,
  text,
  roomLabel,
  rooms,
  commonHeading,
  common,
}: {
  heading: string;
  text: string;
  roomLabel: string;
  rooms: MockRoomFacility[];
  commonHeading: string;
  common: MockItem[];
}) {
  return (
    <div className="mock-fac">
      <div className="mock-fac-head">
        <h3 className="mock-fac-h">{heading}</h3>
        <p className="mock-fac-lead">{text}</p>
      </div>
      <div className="mock-fac-grid">
        {rooms.map((r) => (
          <article className="mock-fac-room" key={r.room}>
            <h4>
              <span className="mock-fac-lab">{roomLabel}</span>
              <span className="mock-fac-no">{r.room}</span>
            </h4>
            <ul>
              {r.items.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mock-fac-common">
        <b>{commonHeading}</b>
        <ul>
          {common.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Mobile language button (all mock designs).

   Every mock nav carries a desktop `.lang` strip that its stylesheet hides at
   the phone breakpoint, which left mobile visitors — the majority for a 民泊
   site, and the ones most likely to need EN/中文 — with no way to switch.
   This is the phone-sized replacement: one compact button in the nav that
   opens the three locales.

   No JS. The open/closed state is a hidden checkbox and CSS `:checked`, the
   same technique as the ROOM 01 slider, so the mocks stay server-rendered and
   the button works even while the design is only being reviewed.

   `theme` keeps the 配色プレビュー selection across the locale change — the mock
   navs already link `/{locale}?theme=…` for exactly that reason.

   Styles: the `.mlang*` block at the end of app/mock-structure.css.
   --------------------------------------------------------------------------- */

/** Short label for the button face; the popup uses the full native names from
 *  the `localeSwitcher` namespace. */
const MOCK_LOCALE_SHORT: Record<string, string> = { ja: "JA", en: "EN", zh: "中文" };

export async function MockLangSwitch({ locale, theme }: { locale: string; theme: string }) {
  const t = await getTranslations("localeSwitcher");
  const id = `mlang-${theme}`;

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
        <b>{MOCK_LOCALE_SHORT[locale] ?? locale.toUpperCase()}</b>
      </label>
      <ul className="mlang-pop">
        {routing.locales.map((l) => (
          <li key={l}>
            <a href={`/${l}?theme=${theme}`} aria-current={l === locale ? "true" : undefined}>
              {t(l)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
