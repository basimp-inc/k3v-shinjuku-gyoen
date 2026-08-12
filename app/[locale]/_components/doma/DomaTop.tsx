import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import DomaBehaviour from "./DomaBehaviour";
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
 * REVIEW-ONLY alternative TOP page — the seventh entry of the 配色プレビュー
 * switcher ("Doma Ceramic"). It ships its own nav and footer, so the current
 * design's chrome is hidden by CSS while this is on screen.
 *
 * Material source: docs/top-page-mock-10.html
 * Styles: app/doma-design.css (materials/type) + app/mock-structure.css (the
 * canonical section layouts), both scoped under .doma-top.
 * Removal steps are listed at the top of app/doma-design.css.
 *
 * Structure is deliberately NOT a design decision: like the other five
 * alternatives this renders the canonical six sections in the canonical order
 * — Hero → PrimeLocation → Renovated → Amenities → Rooms → Access — from the
 * canonical message namespaces, so the client compares direction, not content.
 *
 * What IS this design's argument: 和紙 ground and 粉引 panels alternating
 * section by section, three matte glazes carrying the three rooms as
 * full-width stripes, and a numbered 高台 circle heading every section. No
 * gloss and no 明朝 anywhere — those two bans are what keep a ceramic palette
 * out of 高級旅館 territory. 和文 leads; Latin is demoted to mono labels.
 *
 * Section ids are dc-prefixed because the current design and the other five
 * alternatives are all still in the DOM (hidden) and already own #rooms,
 * #access and friends. The SVG ids in ./scenes.ts carry the same prefix.
 */

/** The illustrated scenes are authored SVG, injected as-is. `.scene` is
 *  display:contents so the svg still sizes against the figure it sits in. */
function Scene({ svg }: { svg: string }) {
  return <div className="scene" dangerouslySetInnerHTML={{ __html: svg }} />;
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default async function DomaTop() {
  const t = await getTranslations("doma");
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
    ["location", "#dc-location"],
    ["renovated", "#dc-renovated"],
    ["amenities", "#dc-amenities"],
    ["rooms", "#dc-rooms"],
    ["access", "#dc-access"],
  ] as const;

  /* One run of the marquee. The track holds two of these so the -50% keyframe
     lands exactly on the seam. */
  const tickerRun = (
    <span>
      {(["w1", "w2", "w3", "w4", "w1", "w2", "w3", "w4"] as const).map((k, i) => (
        <span key={`${k}-${i}`} style={{ display: "contents" }}>
          {t(`ticker.${k}`)}
          <i />
        </span>
      ))}
    </span>
  );

  /* 近隣の店 — one illustrated spot each. The fifth scene (skyline) belongs to
     the hero's horizon rather than to a shop, so it is not in this list. */
  const nearbyScenes = [S.EXP_GYOEN, S.EXP_KISSA, S.EXP_LAUNDRY, S.EXP_YOKOCHO, S.EXP_SKYLINE];

  /* 三つの釉 — one per renovation point, in the same order the rooms use them. */
  const glazeFaces = [
    { face: "glaze g-oribe", svg: S.BOWL_ORIBE },
    { face: "glaze g-ame", svg: S.BOWL_AME },
    { face: "glaze g-tetsu", svg: S.BOWL_TETSU },
  ];

  const roomGlazes = ["g-oribe", "g-ame", "g-tetsu"];

  return (
    <div className="doma-top" data-design="doma">
      <DomaBehaviour />

      {/* ===================== NAV ===================== */}
      <header className="nav washi">
        <div className="wrap nav-in">
          <a href={`/${locale}`} className="logo">
            K3v<i>Shinjuku Gyoen</i>
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
                <a href={`/${l}?theme=doma-ceramic`} aria-current={l === locale ? "true" : undefined}>
                  {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : localeLabels[l] ?? l.toUpperCase()}
                </a>
              </span>
            ))}
          </div>
          <Link href="/stay" className="btn btn-oribe">
            {nav("book")}
            <Arrow />
          </Link>
          <button type="button" className="burger" aria-label={nav("menu")}>
            <span />
          </button>
        </div>
      </header>

      {/* ===================== 1. HERO ===================== */}
      <section id="dc-hero" className="hero washi" aria-labelledby="dc-hero-h">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span
                style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--oribe)", display: "block" }}
              />
              {hero("eyebrow")}
            </p>

            <h1 id="dc-hero-h">
              {hero("titleLine1")}
              <br />
              {hero("titleLine2")}
            </h1>

            <p className="hero-sub">{hero("description")}</p>

            <div className="hero-cta">
              <Link href="/stay" className="btn btn-ame">
                {hero("ctaPrimary")}
                <Arrow />
              </Link>
              <a href="#dc-rooms" className="btn btn-line">
                {hero("ctaSecondary")}
              </a>
            </div>
          </div>

          <figure className="hero-art" aria-label={hero("illustrationAlt")}>
            <Scene svg={S.HERO} />
          </figure>
        </div>

        {/* decorative — the clay strip that separates 和紙 from 粉引 */}
        <div className="ticker doma doma-dk" aria-hidden="true">
          <div className="ticker-track">
            {tickerRun}
            {tickerRun}
          </div>
        </div>
      </section>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section id="dc-location" className="kohiki sec-pad rv" aria-labelledby="dc-l-h">
        <div className="wrap">
          <div className="head">
            <span className="no">01</span>
            <span className="nm">{loc("eyebrow")}</span>
          </div>
          <h2 className="h2" id="dc-l-h">
            {loc("headingLine1")}
            <br />
            {loc("headingLine2")}
          </h2>
          <p className="lead mock-lead">
            {loc("description")}
          </p>

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
      <section id="dc-renovated" className="washi sec-pad rv" aria-labelledby="dc-r-h">
        <div className="wrap">
          <div className="head">
            <span className="no">02</span>
            <span className="nm">{ren("eyebrow")}</span>
          </div>
          <h2 className="h2" id="dc-r-h">
            {ren("headingLine1")}
            <br />
            {ren("headingLine2")}
          </h2>
          <p className="lead mock-lead">
            {ren("description")}
          </p>

          <div className="glaze-grid glaze-grid-3">
            {points.map((p, i) => (
              <article className="g-card kohiki" key={p.title}>
                <div className={`g-bowl ${glazeFaces[i % glazeFaces.length].face}`} style={{ borderRadius: 0 }}>
                  <Scene svg={glazeFaces[i % glazeFaces.length].svg} />
                </div>
                <div className="g-meta">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 4. AMENITIES ===================== */}
      <section id="dc-amenities" className="kohiki sec-pad rv" aria-labelledby="dc-a-h">
        <div className="wrap">
          <div className="head">
            <span className="no">03</span>
            <span className="nm">{ame("eyebrow")}</span>
          </div>
          <h2 className="h2" id="dc-a-h">
            {ame("headingLine1")}
            <br />
            {ame("headingLine2")}
          </h2>
          <p className="lead mock-lead">
            {ame("description")}
          </p>

          {/* 器の並ぶ棚 — no illustration, just the label on a 粉引 tile */}
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
      <section id="dc-rooms" className="washi sec-pad rv" aria-labelledby="dc-rm-h">
        <div className="wrap">
          <div className="head">
            <span className="no">04</span>
            <span className="nm">{rm("eyebrow")}</span>
          </div>
          <h2 className="h2" id="dc-rm-h">
            {rm("headingLine1")}
            <br />
            {rm("headingLine2")}
          </h2>
          <p className="lead mock-lead">
            {rm("description")}
          </p>
        </div>

        <div className="wrap rooms-list">
          {rooms.map((r, i) => (
            <article className={`room room-3col glaze ${roomGlazes[i % roomGlazes.length]}`} key={r.slug}>
              <div className="room-no">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="room-top">
                  <h3 className="room-brand">{r.subtitle}</h3>
                  <span className="chip">{r.tag}</span>
                </div>
                <p className="room-glaze">{r.name}</p>
                <p className="room-jp">{r.text}</p>
              </div>
              {/* the action gets its own column so the stripe reads
                  番号 → 暮らし → 行き先 left to right rather than trailing off */}
              <div className="room-go">
                <Link href={`/rooms/${r.slug}`} className="btn btn-line on-dark">
                  {r.cta}
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="wrap">
          <Link href="/rooms" className="btn btn-line mock-viewall">
            {rm("viewAll")}
            <Arrow />
          </Link>
        </div>
      </section>

      {/* ===================== 6. ACCESS ===================== */}
      <section id="dc-access" className="kohiki sec-pad rv" aria-labelledby="dc-ac-h">
        <div className="wrap">
          <div className="head">
            <span className="no">05</span>
            <span className="nm">{acc("eyebrow")}</span>
          </div>
          <h2 className="h2" id="dc-ac-h">
            {acc("headingLine1")}
            <br />
            {acc("headingLine2")}
          </h2>
          <p className="lead mock-lead">
            {acc("description")}
          </p>

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

              <Link href="/stay" className="btn btn-ame mock-access-cta">
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
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="doma doma-dk">
        <div className="wrap">
          <div className="foot-in">
            <div>
              <a href={`/${locale}`} className="logo" style={{ color: "var(--washi-lt)" }}>
                K3v<i style={{ color: "rgba(250,246,236,.6)" }}>Shinjuku Gyoen</i>
              </a>
              <p className="foot-note">{t("footer.note")}</p>
            </div>
            <nav aria-label={t("footer.hRooms")}>
              <h4>{t("footer.hRooms")}</h4>
              <ul>
                <li>
                  <a href="#dc-rooms">{t("footer.l1")}</a>
                </li>
                <li>
                  <a href="#dc-rooms">{t("footer.l2")}</a>
                </li>
                <li>
                  <a href="#dc-rooms">{t("footer.l3")}</a>
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
                  <a href="#dc-location">{nav("location")}</a>
                </li>
                <li>
                  <a href="#dc-renovated">{nav("renovated")}</a>
                </li>
                <li>
                  <a href="#dc-amenities">{nav("amenities")}</a>
                </li>
                <li>
                  <a href="#dc-access">{nav("access")}</a>
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
