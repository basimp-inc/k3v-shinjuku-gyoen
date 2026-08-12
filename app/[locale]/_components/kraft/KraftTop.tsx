import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import KraftBehaviour from "./KraftBehaviour";
import * as S from "./scenes";
import {
  MockMap,
  type MockDetail,
  type MockItem,
  type MockNearby,
  type MockPoint,
  type MockRoom,
  type MockStat,
} from "../mockShared";

/**
 * REVIEW-ONLY alternative TOP page — the sixth entry of the 配色プレビュー
 * switcher ("Kraft Riso"). It ships its own nav and footer, so the current
 * design's chrome is hidden by CSS while this is on screen.
 *
 * Material source: docs/top-page-mock-9.html
 * Styles: app/kraft-design.css (materials/type) + app/mock-structure.css (the
 * canonical section layouts), both scoped under .kraft-top.
 * Removal steps are listed at the top of app/kraft-design.css.
 *
 * Structure is deliberately NOT a design decision: like the other five
 * alternatives this renders the canonical six sections in the canonical order
 * — Hero → PrimeLocation → Renovated → Amenities → Rooms → Access — from the
 * canonical message namespaces, so the client compares direction, not content.
 *
 * What IS this design's argument: the page is printed, not rendered. Three
 * riso inks, a coarse 45° halftone, one page-wide misregistration offset, tombo
 * marks and a colour bar. Three rooms = three inks, so the room bands are
 * .ink-green / .ink-orange / .ink-blue rather than variations of one treatment,
 * and Renovated gets the *overprints* — what those same three inks make where
 * they overlap — so the two sections argue from one printing idea.
 *
 * The bright inks cannot carry body type (2.03 / 1.86 contrast on kraft), which
 * is why the green and orange bands take 墨 text and only the blue band takes
 * paper-coloured text.
 *
 * Section ids are kr-prefixed because the current design and the other five
 * alternatives are all still in the DOM (hidden) and already own #rooms,
 * #access and friends. The SVG ids in ./scenes.ts carry the same prefix.
 */

/** The illustrated scenes are authored SVG, injected as-is. `.scene` is
 *  display:contents so the svg still sizes against the figure it sits in. */
function Scene({ svg }: { svg: string }) {
  return <div className="scene" dangerouslySetInnerHTML={{ __html: svg }} />;
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default async function KraftTop() {
  const t = await getTranslations("kraft");
  const nav = await getTranslations("mockNav");
  const hero = await getTranslations("hero");
  const loc = await getTranslations("primeLocation");
  const ren = await getTranslations("renovated");
  const ame = await getTranslations("amenities");
  const rm = await getTranslations("rooms");
  const acc = await getTranslations("access");
  const locale = await getLocale();

  const stats = loc.raw("stats") as MockStat[];
  const nearby = loc.raw("nearby") as MockNearby[];
  const points = ren.raw("points") as MockPoint[];
  const amenityItems = ame.raw("items") as MockItem[];
  const rooms = rm.raw("items") as MockRoom[];
  const details = acc.raw("details") as MockDetail[];

  const localeLabels: Record<string, string> = { ja: "JA", en: "EN", zh: "中文" };
  const navLinks = [
    ["location", "#kr-location"],
    ["renovated", "#kr-renovated"],
    ["amenities", "#kr-amenities"],
    ["rooms", "#kr-rooms"],
    ["access", "#kr-access"],
  ] as const;

  /* One run of the marquee. The track holds two of these so the -50% keyframe
     lands exactly on the seam. */
  const tickerRun = (
    <span>
      {(["w1", "w2", "w3", "w4", "w5"] as const).map((k, i) => (
        <span key={k} style={{ display: "contents" }}>
          {t(`ticker.${k}`)}
          <i style={{ background: ["var(--orange)", "var(--green)", "var(--blue)"][i % 3] }} />
        </span>
      ))}
      {(["w1", "w2", "w3", "w4", "w5"] as const).map((k, i) => (
        <span key={`${k}-b`} style={{ display: "contents" }}>
          {t(`ticker.${k}`)}
          <i style={{ background: ["var(--green)", "var(--blue)", "var(--orange)"][i % 3] }} />
        </span>
      ))}
    </span>
  );

  const colorbar = (
    <div className="colorbar" aria-hidden="true">
      {["--green", "--orange", "--blue", "--op-go", "--op-gb", "--op-ob", "--ink"].map((c) => (
        <i key={c} style={{ background: `var(${c})` }} />
      ))}
    </div>
  );

  /* 三色 — one ink per room, in the order the rooms appear. `knock` marks the
     band dark enough to need paper-coloured type. */
  const roomInks = [
    { face: "ink-green", knock: false },
    { face: "ink-orange", knock: false },
    { face: "ink-blue", knock: true },
  ];

  /* Renovated is printed in the OVERPRINTS — where two of the three inks
     overlap — so it reads as the same press, one pass later. */
  const overprints = ["--op-go", "--op-gb", "--op-ob"];

  const nearbyScenes = [S.EXP_GYOEN, S.EXP_KISSA, S.EXP_LAUNDRY, S.EXP_YOKOCHO, S.EXP_SKYLINE];

  return (
    <div className="kraft-top" data-design="kraft">
      <KraftBehaviour />

      {/* ===================== NAV ===================== */}
      <header className="nav paper board">
        <div className="wrap nav-in">
          <a href={`/${locale}`} className="logo">
            K3<b>v</b>
            <i>Shinjuku Gyoen</i>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map(([key, href]) => (
              <a key={key} href={href}>
                {nav(key)}
              </a>
            ))}
          </nav>
          <div className="lang">
            {routing.locales.map((l, i) => (
              <span key={l} style={{ display: "contents" }}>
                {i > 0 && <span>/</span>}
                <a href={`/${l}?theme=kraft-riso`} aria-current={l === locale ? "true" : undefined}>
                  {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : localeLabels[l] ?? l.toUpperCase()}
                </a>
              </span>
            ))}
          </div>
          <Link href="/stay" className="btn btn-ink">
            {nav("book")}
            <Arrow />
          </Link>
          <button type="button" className="burger" aria-label={nav("menu")}>
            <span />
          </button>
        </div>
      </header>

      {/* ===================== 1. HERO ===================== */}
      <section id="kr-hero" className="hero paper" aria-labelledby="kr-hero-h">
        <div className="hero-marks" aria-hidden="true">
          <i className="tombo tl" />
          <i className="tombo tr" />
        </div>
        <div className="wrap">
          <div className="hero-head">
            <p className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 9, height: 9, background: "var(--orange)", display: "block" }} />
              {hero("eyebrow")}
            </p>

            {/* The display line is printed as a solid ink area with the type
                knocked out of it — the one place Archivo Black gets to do its
                job, since the 和文 heading below cannot use it. */}
            <p className="mock-dsp">
              <span className="fill halftone knock">{t("display.hero")}</span>
            </p>
            <h1 id="kr-hero-h">
              {hero("titleLine1")}
              <br />
              {hero("titleLine2")}
            </h1>
          </div>

          <div className="hero-lower">
            <div>
              <p className="hero-sub jp">{hero("description")}</p>

              <div className="hero-cta">
                <Link href="/stay" className="btn btn-ink">
                  {hero("ctaPrimary")}
                  <Arrow />
                </Link>
                <a href="#kr-rooms" className="btn btn-line">
                  {hero("ctaSecondary")}
                </a>
              </div>
            </div>

            <figure className="hero-art" aria-label={hero("illustrationAlt")}>
              <Scene svg={S.HERO} />
            </figure>
          </div>
        </div>

        <div style={{ marginTop: "clamp(40px,5vw,72px)" }}>{colorbar}</div>

        {/* decorative */}
        <div className="ticker board" aria-hidden="true">
          <div className="ticker-track">
            {tickerRun}
            {tickerRun}
          </div>
        </div>
      </section>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section id="kr-location" className="paper paper-lt sec-pad rv" aria-labelledby="kr-l-h">
        <div className="wrap">
          <div className="head">
            <span className="no">01</span>
            <span className="nm">{loc("eyebrow")}</span>
          </div>
          <p className="mock-dsp">{t("display.location")}</p>
          <h2 className="h2" id="kr-l-h">
            {loc("headingLine1")}
            <br />
            {loc("headingLine2")}
          </h2>
          <p className="lead mock-lead">{loc("description")}</p>

          <div className="loc-grid">
            <div className="routes routes-plain">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="line">{s.label}</span>
                  <span className="min">{s.value}</span>
                </div>
              ))}
            </div>

            <figure className="plate">
              <Scene svg={S.LIVING} />
            </figure>
          </div>

          <div className="exp-grid exp-grid-4">
            {nearby.map((n, i) => (
              <article className="exp-card" key={n.label}>
                <Scene svg={nearbyScenes[i % nearbyScenes.length]} />
                <h3>{n.label}</h3>
                <p>{n.distance}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3. RENOVATED ===================== */}
      <section id="kr-renovated" className="board sec-pad rv" aria-labelledby="kr-r-h">
        <div className="wrap">
          <div className="head">
            <span className="no">02</span>
            <span className="nm">{ren("eyebrow")}</span>
          </div>
          <p className="mock-dsp">{t("display.renovated")}</p>
          <h2 className="h2" id="kr-r-h">
            {ren("headingLine1")}
            <br />
            {ren("headingLine2")}
          </h2>
          <p className="lead mock-lead">{ren("description")}</p>

          <div className="ink-grid">
            {points.map((p, i) => (
              <article className="ink-card paper" key={p.title}>
                <div
                  className="ink-swatch ink-area halftone"
                  style={{ background: `var(${overprints[i % overprints.length]})` }}
                />
                <div className="ink-meta">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 4. AMENITIES ===================== */}
      <section id="kr-amenities" className="paper sec-pad rv" aria-labelledby="kr-a-h">
        <div className="wrap">
          <div className="head">
            <span className="no">03</span>
            <span className="nm">{ame("eyebrow")}</span>
          </div>
          <p className="mock-dsp">{t("display.amenities")}</p>
          <h2 className="h2" id="kr-a-h">
            {ame("headingLine1")}
            <br />
            {ame("headingLine2")}
          </h2>
          <p className="lead mock-lead">{ame("description")}</p>

          {/* a printed checklist: hairline gaps, mono numerals, no rounding */}
          <ul className="mock-ami">
            {amenityItems.map((item, i) => (
              <li key={item.label}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <b>{item.label}</b>
              </li>
            ))}
          </ul>

          <p className="lead mock-note">{ame("note")}</p>
        </div>
      </section>

      {/* ===================== 5. ROOMS ===================== */}
      <section id="kr-rooms" className="paper paper-lt sec-pad rv" aria-labelledby="kr-rm-h">
        <div className="wrap">
          <div className="head">
            <span className="no">04</span>
            <span className="nm">{rm("eyebrow")}</span>
          </div>
          <p className="mock-dsp">{t("display.rooms")}</p>
          <h2 className="h2" id="kr-rm-h">
            {rm("headingLine1")}
            <br />
            {rm("headingLine2")}
          </h2>
          <p className="lead mock-lead">{rm("description")}</p>
        </div>

        <div className="rooms-list">
          {rooms.map((r, i) => {
            const ink = roomInks[i % roomInks.length];
            return (
              <article
                className={`room ink-area ${ink.face} halftone ${ink.knock ? "fine on-blue" : "fine"}`}
                key={r.slug}
              >
                <div className="room-no">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="room-top">
                    <h3 className="room-brand">{r.subtitle}</h3>
                  </div>
                  <p className="room-en">{r.name}</p>
                  <p className="room-jp">{r.text}</p>
                </div>
                <div className="room-go">
                  <p className="room-tag cnd">{r.tag}</p>
                  <Link
                    href={`/rooms/${r.slug}`}
                    className={`btn btn-line${ink.knock ? " on-blue" : ""}`}
                  >
                    {r.cta}
                    <Arrow />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="wrap">
          <Link href="/rooms" className="btn btn-line mock-viewall">
            {rm("viewAll")}
            <Arrow />
          </Link>
        </div>
      </section>

      {/* ===================== 6. ACCESS ===================== */}
      <section id="kr-access" className="paper sec-pad rv" aria-labelledby="kr-ac-h">
        <div className="wrap">
          <div className="head">
            <span className="no">05</span>
            <span className="nm">{acc("eyebrow")}</span>
          </div>
          <p className="mock-dsp">{t("display.access")}</p>
          <h2 className="h2" id="kr-ac-h">
            {acc("headingLine1")}
            <br />
            {acc("headingLine2")}
          </h2>
          <p className="lead mock-lead">{acc("description")}</p>

          <div className="loc-grid">
            <div>
              <dl className="mock-details">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>

              <Link href="/stay" className="btn btn-green mock-access-cta">
                {acc("cta")}
                <Arrow />
              </Link>
            </div>

            <figure className="map">
              <MockMap title={acc("mapAlt")} className="mock-map" />
              <figcaption className="plate-tag">{acc("mapCaption")}</figcaption>
            </figure>
          </div>
        </div>
        <i className="tombo bl" style={{ opacity: 0.4 }} />
        <i className="tombo br" style={{ opacity: 0.4 }} />
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="board">
        {colorbar}
        <div className="wrap">
          <div className="foot-in">
            <div>
              <a href={`/${locale}`} className="logo">
                K3<b>v</b>
                <i>Shinjuku Gyoen</i>
              </a>
              <p className="foot-note">{t("footer.note")}</p>
            </div>
            <nav aria-label={t("footer.hRooms")}>
              <h4>{t("footer.hRooms")}</h4>
              <ul>
                <li>
                  <a href="#kr-rooms">{t("footer.l1")}</a>
                </li>
                <li>
                  <a href="#kr-rooms">{t("footer.l2")}</a>
                </li>
                <li>
                  <a href="#kr-rooms">{t("footer.l3")}</a>
                </li>
                <li>
                  <Link href="/stay">{nav("book")}</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label={t("footer.hHouse")}>
              <h4>{t("footer.hHouse")}</h4>
              <ul>
                <li>
                  <a href="#kr-location">{nav("location")}</a>
                </li>
                <li>
                  <a href="#kr-renovated">{nav("renovated")}</a>
                </li>
                <li>
                  <a href="#kr-amenities">{nav("amenities")}</a>
                </li>
                <li>
                  <a href="#kr-access">{nav("access")}</a>
                </li>
              </ul>
            </nav>
            <nav aria-label={t("footer.hInfo")}>
              <h4>{t("footer.hInfo")}</h4>
              <ul>
                <li>
                  <a href="#">{t("footer.rules")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.faq")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.privacy")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.law")}</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="foot-bar">
            <span>{t("footer.copyright")}</span>
            <span>{t("footer.credit")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
