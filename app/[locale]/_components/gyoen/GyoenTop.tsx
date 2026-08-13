import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { GYOEN_SVG_DEFS } from "./defs";
import GyoenBehaviour from "./GyoenBehaviour";
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
 * REVIEW-ONLY alternative TOP page — the second entry of the 配色プレビュー
 * switcher ("Gyoen Green"). It ships its own nav and footer, so the current
 * design's chrome is hidden by CSS while this is on screen.
 *
 * Material source: docs/top-page-mock-5.html
 * Styles: app/gyoen-design.css (materials/type) + app/mock-structure.css (the
 * canonical section layouts), both scoped under .gyoen-top.
 * Removal steps are listed at the top of app/gyoen-design.css.
 *
 * Structure is deliberately NOT a design decision: like the other five
 * alternatives this renders the canonical six sections in the canonical order
 * — Hero → PrimeLocation → Renovated → Amenities → Rooms → Access — from the
 * canonical message namespaces, so the client compares direction, not content.
 *
 * What IS this design's argument: the greenest and the most architectural. A
 * cinematic canopy hero cropped by a walnut ledge, real wood surfaces with
 * seams and sheen rather than flat fills, outlined numerals, and rooms that
 * each break the grid a different way. The only design in the set where the
 * park — not the interior — leads.
 *
 * Section ids and SVG ids are gy-/sc- prefixed because the current design and
 * the other five alternatives are all still in the DOM (hidden) and already
 * own #rooms, #access and friends.
 */
export default async function GyoenTop() {
  const t = await getTranslations("gyoen");
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
    ["location", "#gy-location"],
    ["renovated", "#gy-renovated"],
    ["amenities", "#gy-amenities"],
    ["rooms", "#gy-rooms"],
    ["access", "#gy-access"],
  ] as const;

  const roomSyms = ["sc-room-a", "sc-room-b", "sc-room-c"];

  return (
    <div className="gyoen-top" data-design="gyoen">
      <GyoenBehaviour />

      {/* wood grains, grain filters and the illustrated scenes */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "absolute" }}
        dangerouslySetInnerHTML={{ __html: GYOEN_SVG_DEFS }}
      />

      {/* ===================== NAV ===================== */}
      <header className="gnav">
        <a className="mark" href={`/${locale}`}>
          K3V<small>SHINJUKU GYOEN</small>
        </a>
        <div className="nav-mid">
          <nav aria-label="Primary">
            <ul>
              {navLinks.map(([key, href]) => (
                <li key={key}>
                  <a href={href}>{nav(key)}</a>
                </li>
              ))}
            </ul>
          </nav>
          <span className="lang">
            {routing.locales.map((l) => (
              <a key={l} href={`/${l}?theme=gyoen-green`} aria-current={l === locale ? "true" : undefined}>
                {localeLabels[l] ?? l.toUpperCase()}
              </a>
            ))}
          </span>
          <Link className="book" href="/stay">
            {nav("book")}
          </Link>
        </div>
      </header>

      {/* ===================== 1. HERO ===================== */}
      <section className="hero" id="gy-hero">
        <div className="hero-vis" aria-label={hero("illustrationAlt")}>
          <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 900">
            <use href="#sc-canopy" />
          </svg>
          <div className="hero-scrim" />
          <div className="grain-l" />
        </div>

        <div className="hero-body">
          <div className="wrap grid">
            <div className="hero-copy">
              <p className="hero-eyebrow lab">
                <span className="dot" />
                {hero("eyebrow")}
              </p>
              <p className="mock-dsp">{t("display.hero")}</p>
              <h1 className="dsp">
                {hero("titleLine1")}
                <br />
                {hero("titleLine2")}
              </h1>
              <p className="jp jp-lead">{hero("description")}</p>
              <div className="hero-cta">
                <Link className="btn" href="/stay">
                  {hero("ctaPrimary")}
                </Link>
                <a className="btn-ghost" href="#gy-rooms">
                  {hero("ctaSecondary")}
                </a>
              </div>
            </div>
            <div className="hero-side">
              <p className="big">{stats[0]?.value}</p>
              <p className="lab">{stats[0]?.label}</p>
            </div>
          </div>
        </div>

        {/* the walnut ledge that crops the canopy — the walk times, previewed */}
        <div className="ledge wood dark">
          <svg className="fill" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
            <use href="#wood-walnut" />
          </svg>
          <div className="seams" />
          <div className="sheen" />
          <div className="ledge-inner">
            {stats.map((s) => (
              <span key={s.label}>
                {s.label} <b>{s.value}</b>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section className="loc" id="gy-location">
        <div className="wrap grid">
          <div className="txt">
            <div className="rule-lime" style={{ marginBottom: 16 }} />
            <p className="lab">01 — {loc("eyebrow")}</p>
            <p className="mock-dsp">{t("display.location")}</p>
            <h2 className="dsp">
              {loc("headingLine1")}
              <br />
              {loc("headingLine2")}
            </h2>
            <p className="jp jp-lead">{loc("description")}</p>
            <dl className="walk">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>
                    <b>{s.value}</b>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mapbox">
            <svg viewBox="0 0 900 620" aria-hidden="true">
              <use href="#sc-entry" />
            </svg>
            <div className="mock-chiprow">
              {nearby.map((n) => (
                <span className="chip on-dark" key={n.label}>
                  <span className="sq" />
                  {n.label}
                  <b className="mock-chip-val">{n.distance}</b>
                </span>
              ))}
            </div>
            <p className="mapnote">{acc("mapCaption")}</p>
          </div>
        </div>
      </section>

      {/* ===================== 3. RENOVATED ===================== */}
      <section className="concept" id="gy-renovated">
        <div className="paper-grain" />
        <div className="wrap grid">
          <div className="kicker">
            <div className="rule-lime" />
            <p className="lab">{ren("eyebrow")}</p>
            <p className="mono" style={{ color: "var(--sky-deep)" }}>
              02 / 06
            </p>
          </div>

          <div className="head">
            <p className="mock-dsp">{t("display.renovated")}</p>
            <h2 className="dsp">
              {ren("headingLine1")}
              <br />
              {ren("headingLine2")}
            </h2>
          </div>

          <div className="body">
            <p className="jp jp-lead">{ren("description")}</p>
            <p style={{ marginTop: "2em" }}>
              <Link className="btn-ghost" style={{ color: "var(--green)" }} href="/rooms">
                {rm("viewAll")}
              </Link>
            </p>
          </div>

          <div className="aside">
            {/* the three surfaces the renovation is made of */}
            <div className="swatchrow">
              <div style={{ background: "var(--green)" }}>
                <span className="lbl" style={{ color: "var(--sky)" }}>
                  {t("concept.swatchGreen")}
                </span>
              </div>
              <div className="denim">
                <span className="lbl" style={{ color: "var(--green-deep)" }}>
                  {t("concept.swatchDenim")}
                </span>
              </div>
              <div className="wood" style={{ minHeight: 78 }}>
                <svg className="fill" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
                  <use href="#wood-rose" />
                </svg>
                <div className="seams" />
                <span className="lbl" style={{ color: "#FBF9F3", position: "absolute", zIndex: 2 }}>
                  {t("concept.swatchWood")}
                </span>
              </div>
            </div>

            <dl className="spec">
              {points.map((p) => (
                <div key={p.title}>
                  <dt>{p.title}</dt>
                  <dd className="mock-spec-body">{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="concept-fig">
            <div className="fig">
              <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 800">
                <use href="#sc-room-a" />
              </svg>
              <span className="chip tagtop">
                <span className="sq" />
                {ren("eyebrow")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4. AMENITIES ===================== */}
      <section className="exp" id="gy-amenities">
        <div className="paper-grain" />
        <div className="wrap">
          <div className="exp-head">
            <div className="rule-lime" style={{ marginBottom: 16 }} />
            <p className="lab" style={{ color: "var(--green)" }}>
              03 — {ame("eyebrow")}
            </p>
            <p className="mock-dsp">{t("display.amenities")}</p>
            <h2 className="dsp">
              {ame("headingLine1")}
              <br />
              {ame("headingLine2")}
            </h2>
            <p className="jp jp-lead">{ame("description")}</p>
          </div>

          {/* set on a lime baseline rule, the way the section heads are */}
          <ul className="mock-ami">
            {amenityItems.map((item, i) => (
              <li key={item.label}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <b>{item.label}</b>
              </li>
            ))}
          </ul>

          <p className="jp mock-note">{ame("note")}</p>
        </div>
      </section>

      {/* ===================== 5. ROOMS ===================== */}
      <section className="rooms" id="gy-rooms">
        <div className="wrap">
          <div className="rooms-head">
            <div>
              <div className="rule-lime" style={{ marginBottom: 16 }} />
              <p className="lab">04 — {rm("eyebrow")}</p>
              <p className="mock-dsp">{t("display.rooms")}</p>
              <h2 className="dsp">
                {rm("headingLine1")}
                <br />
                {rm("headingLine2")}
              </h2>
            </div>
            <Link className="btn solid-green" href="/rooms">
              {rm("viewAll")}
            </Link>
          </div>

          {/* ROOM 01 — image left, copy right */}
          <article className="room r01 grid">
            <div className="numwrap num-out">01</div>
            <div className="fig">
              <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
                <use href={`#${roomSyms[0]}`} />
              </svg>
              <span className="chip tagtop">
                <span className="sq" />
                {rooms[0]?.tag}
              </span>
              <span className="cap">{rooms[0]?.name}</span>
            </div>
            <div className="meta">
              <p className="mono" style={{ color: "var(--sky-deep)" }}>
                {rooms[0]?.name}
              </p>
              <h3 className="dsp">{rooms[0]?.subtitle}</h3>
              <p className="jpsub">{rooms[0]?.tag}</p>
              <p className="desc">{rooms[0]?.text}</p>
              <Link
                className="btn-ghost"
                style={{ color: "var(--green)", alignSelf: "flex-start" }}
                href={`/rooms/${rooms[0]?.slug}`}
              >
                {rooms[0]?.cta}
              </Link>
            </div>
          </article>

          {/* ROOM 02 — copy over a rosewood panel */}
          <article className="room r02">
            <div className="panel wood">
              <svg className="fill" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
                <use href="#wood-rose" />
              </svg>
              <div className="seams" />
              <div className="sheen" />
            </div>
            <div className="wrap grid" style={{ width: "100%" }}>
              <div className="numwrap num-out">02</div>
              {/* The rosewood panel starts at 30%, so this copy sits on the
                  paper, not on the wood — sky (#a9c3d6) would read at ~1.5:1.
                  Same pairing ROOM 01 uses on the same ground. */}
              <div className="meta">
                <p className="mono" style={{ color: "var(--sky-deep)" }}>
                  {rooms[1]?.name}
                </p>
                <h3 className="dsp">{rooms[1]?.subtitle}</h3>
                <p className="jpsub">{rooms[1]?.tag}</p>
                <p className="desc">{rooms[1]?.text}</p>
                <Link
                  className="btn-ghost"
                  style={{ color: "var(--green)", alignSelf: "flex-start" }}
                  href={`/rooms/${rooms[1]?.slug}`}
                >
                  {rooms[1]?.cta}
                </Link>
              </div>
              <div className="fig">
                <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
                  <use href={`#${roomSyms[1]}`} />
                </svg>
                <span className="chip tagtop">
                  <span className="sq" />
                  {rooms[1]?.tag}
                </span>
              </div>
            </div>
          </article>

          {/* ROOM 03 — copy left, image right, on the deep ground */}
          <article className="room r03">
            <div className="wrap grid" style={{ width: "100%" }}>
              <div className="numwrap num-out">03</div>
              <div className="meta">
                <p className="mono" style={{ color: "var(--sky)" }}>
                  {rooms[2]?.name}
                </p>
                <h3 className="dsp">{rooms[2]?.subtitle}</h3>
                <p className="jpsub">{rooms[2]?.tag}</p>
                <p className="desc">{rooms[2]?.text}</p>
                <Link
                  className="btn-ghost"
                  style={{ color: "var(--sky)", alignSelf: "flex-start" }}
                  href={`/rooms/${rooms[2]?.slug}`}
                >
                  {rooms[2]?.cta}
                </Link>
              </div>
              <div className="fig">
                <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
                  <use href={`#${roomSyms[2]}`} />
                </svg>
                <span className="chip tagtop">
                  <span className="sq" />
                  {rooms[2]?.tag}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===================== 6. ACCESS ===================== */}
      <section className="cta" id="gy-access">
        <div className="cta-grid">
          <div className="cta-wood wood">
            <svg className="fill" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
              <use href="#wood-rose" />
            </svg>
            <div className="seams" />
            <div className="sheen" />
            <div className="badge">
              <p className="lab">{acc("eyebrow")}</p>
              <p className="dsp">
                {stats[0]?.value}
                <br />
                {stats[0]?.label}
              </p>
            </div>
          </div>
          <div className="cta-body">
            <div className="rule-lime" />
            <p className="mock-dsp">{t("display.access")}</p>
            <h2 className="dsp">
              {acc("headingLine1")}
              <br />
              {acc("headingLine2")}
            </h2>
            <p className="jp jp-lead mock-access-lead">{acc("description")}</p>

            <div className="cta-perks">
              {details.map((d) => (
                <span className="chip on-dark" key={d.label}>
                  <span className="sq" />
                  {d.label}
                  <b className="mock-chip-val">{d.value}</b>
                </span>
              ))}
            </div>

            <div className="mock-mapframe">
              <MockMap title={acc("mapAlt")} className="mock-map" />
            </div>
            <p className="cta-note">{acc("mapCaption")}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}>
              <Link className="btn" href="/stay">
                {acc("cta")}
              </Link>
              <a className="btn-ghost" href="#gy-rooms">
                {hero("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="gfoot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <p className="mark">
                K3V<small>SHINJUKU GYOEN</small>
              </p>
              <p className="addr">
                {t("footer.addr1")}
                <br />
                {t("footer.addr2")}
              </p>
            </div>
            <div>
              <h4>{t("footer.roomsHeading")}</h4>
              <ul>
                <li>
                  <Link href="/rooms">{t("footer.room1")}</Link>
                </li>
                <li>
                  <Link href="/rooms">{t("footer.room2")}</Link>
                </li>
                <li>
                  <Link href="/rooms">{t("footer.room3")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>{t("footer.stayHeading")}</h4>
              <ul>
                <li>
                  <a href="#gy-location">{nav("location")}</a>
                </li>
                <li>
                  <a href="#gy-renovated">{nav("renovated")}</a>
                </li>
                <li>
                  <a href="#gy-amenities">{nav("amenities")}</a>
                </li>
                <li>
                  <a href="#gy-access">{nav("access")}</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>{t("footer.contactHeading")}</h4>
              <ul>
                <li>
                  <Link href="/stay">{nav("book")}</Link>
                </li>
                <li>
                  <a href="#">{t("footer.contact1")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.contact2")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-base">
            <p>{t("footer.copy")}</p>
            <p>JA / EN / 中文</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
