/**
 * REVIEW-ONLY helpers shared by the six alternative TOP-page designs
 * (Gyoen Green, Denim Sakura, Timber Indigo, Washed Chambray, Kraft Riso,
 * Doma Ceramic).
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

/** Same address the production Access section uses, so every design pins the
 *  same point on the same map. */
export const MOCK_ADDRESS = "東京都新宿区大久保２丁目２";

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
