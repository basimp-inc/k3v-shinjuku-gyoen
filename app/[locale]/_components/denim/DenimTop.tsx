import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { DENIM_SVG_DEFS } from "./defs";
import DenimBehaviour from "./DenimBehaviour";
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
 * REVIEW-ONLY alternative TOP page — the third entry of the 配色プレビュー
 * switcher ("Denim Sakura"). It ships its own nav and footer, so the current
 * design's chrome is hidden by CSS while this is on screen.
 *
 * Material source: docs/top-page-mock-6.html
 * Styles: app/denim-design.css (materials/type) + app/mock-structure.css (the
 * canonical section layouts), both scoped under .denim-top.
 * Removal steps are listed at the top of app/denim-design.css.
 *
 * Structure is deliberately NOT a design decision: like the other five
 * alternatives this renders the canonical six sections in the canonical order
 * — Hero → PrimeLocation → Renovated → Amenities → Rooms → Access — from the
 * canonical message namespaces, so the client compares direction, not content.
 *
 * What IS this design's argument: the softest of the six, and the only one
 * with a third colour. Denim ground, 御苑 green, sakura pink as the accent that
 * keeps it from reading corporate. Everything is garment-made — selvedge
 * edges, dashed stitching, rivets, a woven brand patch, and a real care label
 * carrying the renovation. The room layouts are the only place in the set
 * where all three rooms get a *different* composition rather than a repeated
 * one.
 *
 * Section ids and SVG ids are dn-prefixed because the current design and the
 * other five alternatives are all still in the DOM (hidden) and already own
 * #rooms, #access and friends.
 */
export default async function DenimTop() {
  const t = await getTranslations("denim");
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
    ["location", "#dn-location"],
    ["renovated", "#dn-renovated"],
    ["amenities", "#dn-amenities"],
    ["rooms", "#dn-rooms"],
    ["access", "#dn-access"],
  ] as const;

  /* 近所 — one illustrated scene each, staggered down the page */
  const moods = [
    { cls: "m1", sym: "dn-sc-coffee", sel: "selvedge" },
    { cls: "m2", sym: "dn-sc-sakura", sel: "" },
    { cls: "m3", sym: "dn-sc-lawn", sel: "" },
    { cls: "m4", sym: "dn-sc-street", sel: "selvedge r" },
  ] as const;

  const roomSyms = ["dn-sc-room-a", "dn-sc-room-b", "dn-sc-room-c"];

  const arrow = (
    <svg className="arw" viewBox="0 0 16 8" fill="none" aria-hidden="true">
      <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
  const tick = (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7.5 5 11.5 13 2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="denim-top" data-design="denim">
      <DenimBehaviour />

      {/* denim weaves, grain filters and the illustrated scenes */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "absolute" }}
        dangerouslySetInnerHTML={{ __html: DENIM_SVG_DEFS }}
      />

      {/* ===================== NAV ===================== */}
      <nav className="nav" aria-label="Primary">
        <a className="mark" href={`/${locale}`}>
          K3V<span className="sub">Shinjuku Gyoen</span>
        </a>
        <div className="links">
          {navLinks.map(([key, href]) => (
            <a className="nlink" key={key} href={href}>
              {nav(key)}
            </a>
          ))}
        </div>
        <div className="nav-lang">
          {routing.locales.map((l, i) => (
            <span key={l}>
              {i > 0 && "/ "}
              <a href={`/${l}?theme=denim-sakura`} aria-current={l === locale ? "true" : undefined}>
                {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : (localeLabels[l] ?? l.toUpperCase())}
              </a>{" "}
            </span>
          ))}
        </div>
        <Link className="btn" href="/stay">
          {nav("book")}
          {arrow}
        </Link>
      </nav>

      {/* ===================== 1. HERO ===================== */}
      <header className="hero grained" id="dn-hero">
        <div className="bg">
          <svg aria-hidden="true">
            <use href="#dn-sc-canopy" />
          </svg>
        </div>
        <div className="veil" />

        <div className="rail" aria-hidden="true">
          <span>Shinjuku Gyoen · Tokyo · Est. 2026</span>
        </div>

        {/* the riveted twill panel — the walk times, previewed */}
        <div className="hero-panel twill-dark stitched">
          <div className="rivets" aria-hidden="true">
            <i className="rivet" />
            <i className="rivet" />
            <i className="rivet" />
            <i className="rivet" />
          </div>
          <h4>{loc("eyebrow")}</h4>
          <ul>
            {stats.map((s) => (
              <li key={s.label}>
                <span>{s.label}</span>
                <b>{s.value}</b>
              </li>
            ))}
          </ul>
        </div>

        <div className="wrap">
          <div className="hero-kicker">
            <span className="chip on-dark">
              <i className="dot" />
              {hero("eyebrow")}
            </span>
          </div>

          <p className="mock-dsp">{t("display.hero")}</p>
          <h1 className="dsp">
            {hero("titleLine1")}
            <span className="l2">{hero("titleLine2")}</span>
          </h1>

          <div className="hero-foot">
            <p className="jp jp-lead lead">{hero("description")}</p>
            <div className="hero-cta">
              <Link className="btn lime" href="/stay">
                {hero("ctaPrimary")}
                {arrow}
              </Link>
              <a className="btn-ghost" href="#dn-rooms">
                {hero("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>

        <div className="factbar twill-dark">
          <div className="wrap">
            <div className="inner">
              {nearby.slice(0, 3).map((n, i) => (
                <span className="f" key={n.label}>
                  <i className={i % 2 === 0 ? "dot" : "dot pink"} />
                  <b>{n.label}</b> <span>{n.distance}</span>
                </span>
              ))}
              <span className="f scroll" style={{ marginLeft: "auto" }}>
                <span className="mono-s">{t("facts.scroll")}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section className="loc grained" id="dn-location">
        <div className="leaves" aria-hidden="true">
          <svg>
            <use href="#dn-sc-botanic" />
          </svg>
        </div>
        <div className="wrap">
          <div className="g12">
            <div className="txt">
              <span className="lab" style={{ color: "var(--lime)" }}>
                — 01 {loc("eyebrow")}
              </span>
              <p className="mock-dsp">{t("display.location")}</p>
              <h2 className="dsp">
                {loc("headingLine1")}
                <br />
                <em>{loc("headingLine2")}</em>
              </h2>
              <p className="jp jp-lead">{loc("description")}</p>
              <ul className="walks">
                {stats.map((s, i) => (
                  <li key={s.label} className={i === 0 ? "key" : undefined}>
                    <i className={i === 0 ? "dot" : "dot pink"} />
                    <span className="nm">{s.label}</span>
                    <span className="tm">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="mapbox">
              <div className="tag">
                <span className="patch">
                  <span className="t">{loc("eyebrow")}</span>
                </span>
              </div>
              <div className="frame stitched">
                <svg viewBox="0 0 900 640" aria-hidden="true">
                  <use href="#dn-sc-entry" />
                </svg>
              </div>
              <figcaption className="cap">
                <span>{stats[0]?.label}</span>
                <span>{stats[0]?.value}</span>
              </figcaption>
            </figure>
          </div>

          {/* 近所 — staggered, the way the source mock staggered its moments */}
          <div className="moods mock-nearby">
            {nearby.map((n, i) => {
              const m = moods[i % moods.length];
              return (
                <div className={`mood ${m.cls}`} key={n.label}>
                  <figure className={`shot ${m.sel}`}>
                    <svg aria-hidden="true">
                      <use href={`#${m.sym}`} />
                    </svg>
                  </figure>
                  <div className="cap">
                    <span className="t">{n.distance}</span>
                    <span className="x">
                      <span>{n.label}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grassline" aria-hidden="true">
          <svg>
            <use href="#dn-sc-grassline" />
          </svg>
        </div>
      </section>

      {/* ===================== 3. RENOVATED ===================== */}
      <section className="concept grained" id="dn-renovated">
        <div className="ghost" aria-hidden="true">
          NEW
        </div>
        <div className="wrap">
          <div className="g12">
            <div className="c-visual">
              <figure className="shot selvedge">
                <svg aria-hidden="true">
                  <use href="#dn-sc-room-a" />
                </svg>
              </figure>

              {/* the care label — where a garment says how to look after it */}
              <div className="care">
                <div className="hd">
                  <span className="n">{ren("eyebrow")}</span>
                  <span className="c">K3V · 3 ROOMS</span>
                </div>
                <ul>
                  {points.map((p) => (
                    <li key={p.title}>
                      {tick}
                      {p.title}
                    </li>
                  ))}
                </ul>
                <div className="foot">
                  <span>{stats[0]?.label}</span>
                  <span>{stats[0]?.value}</span>
                </div>
              </div>
            </div>

            <div className="c-text">
              <span className="lab" style={{ color: "var(--sakura-dp)" }}>
                — 02 {ren("eyebrow")}
              </span>
              <p className="mock-dsp">{t("display.renovated")}</p>
              <h2 className="dsp">
                {ren("headingLine1")}
                <br />
                <em>{ren("headingLine2")}</em>
              </h2>
              <div className="body">
                <p className="jp">{ren("description")}</p>
              </div>

              <div className="c-cols">
                {points.map((p) => (
                  <div className="item" key={p.title}>
                    <h5>{p.title}</h5>
                    <p className="jp">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4. AMENITIES ===================== */}
      <section className="exp grained" id="dn-amenities">
        <div className="blush" aria-hidden="true" />
        <div className="wrap">
          <div className="exp-head">
            <span className="lab" style={{ color: "var(--sakura-dp)" }}>
              — 03 {ame("eyebrow")}
            </span>
            <p className="mock-dsp">{t("display.amenities")}</p>
            <h2 className="dsp">
              {ame("headingLine1")}
              <br />
              <em>{ame("headingLine2")}</em>
            </h2>
            <p className="it">{ame("description")}</p>
          </div>

          {/* each item a woven tag, stitched like the rest of the garment */}
          <ul className="mock-ami">
            {amenityItems.map((item, i) => (
              <li key={item.label} className="stitched tight">
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <b>{item.label}</b>
              </li>
            ))}
          </ul>

          <p className="pullquote mock-note">{ame("note")}</p>
        </div>
      </section>

      {/* ===================== 5. ROOMS ===================== */}
      <section className="rooms grained" id="dn-rooms">
        <div className="wrap">
          <div className="rooms-head">
            <div>
              <span className="lab" style={{ color: "var(--sakura-dp)" }}>
                — 04 {rm("eyebrow")}
              </span>
              <p className="mock-dsp">{t("display.rooms")}</p>
              <h2 className="dsp" style={{ marginTop: 14 }}>
                {rm("headingLine1")}
                <br />
                <em>{rm("headingLine2")}</em>
              </h2>
            </div>
            <p className="r jp jp-s">{rm("description")}</p>
          </div>

          {rooms.map((r, i) => (
            <article className={`room room-0${i + 1}`} key={r.slug}>
              <span className="num idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="patch-wrap">
                <span className="patch">
                  <span className="t">{r.name}</span>
                  <br />
                  <span className="s">{r.subtitle}</span>
                </span>
              </div>
              <div className="g12">
                <figure className={`shot${i === 0 ? " selvedge" : i === 2 ? " selvedge r" : ""}`}>
                  <svg aria-hidden="true">
                    <use href={`#${roomSyms[i % roomSyms.length]}`} />
                  </svg>
                </figure>
                <div className="meta">
                  <span className="lab" style={{ color: "var(--lime-dp)" }}>
                    {r.tag}
                  </span>
                  <h3 className="dsp">{r.subtitle}</h3>
                  {/* 48ch, not 34: `ch` is the half-width "0" in the JP face,
                      so 34 gave 17 Japanese characters in a 424px column */}
                  <p className="jp jp-s" style={{ color: "var(--ink-soft)", maxWidth: "48ch" }}>
                    {r.text}
                  </p>
                  <Link className="btn-ghost" href={`/rooms/${r.slug}`} style={{ color: "var(--green-deep)" }}>
                    {r.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <Link className="btn-ghost mock-viewall" href="/rooms" style={{ color: "var(--green-deep)" }}>
            {rm("viewAll")}
          </Link>
        </div>
      </section>

      {/* ===================== 6. ACCESS ===================== */}
      <section className="cta grained" id="dn-access">
        <div className="wrap">
          <div className="g12">
            <div className="cta-body">
              <span className="lab" style={{ color: "var(--sakura)" }}>
                — 05 {acc("eyebrow")}
              </span>
              <p className="mock-dsp">{t("display.access")}</p>
              <h2 className="dsp">
                {acc("headingLine1")}
                <br />
                <em>{acc("headingLine2")}</em>
              </h2>
              <p className="jp">{acc("description")}</p>

              <figure className="mapbox mock-mapbox">
                <div className="frame stitched">
                  <MockMap title={acc("mapAlt")} className="mock-map" />
                </div>
                <figcaption className="cap">
                  <span>{acc("mapCaption")}</span>
                </figcaption>
              </figure>

              <div className="cta-actions">
                <Link className="btn lime" href="/stay">
                  {acc("cta")}
                  {arrow}
                </Link>
              </div>
            </div>

            <ul className="perks">
              {details.map((d) => (
                <li key={d.label}>
                  {tick}
                  <span>
                    <b className="mock-perk-label">{d.label}</b>
                    {d.value}
                  </span>
                </li>
              ))}
              <li className="note">{loc("description")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="foot">
        <div className="wrap">
          <div className="g12">
            <div className="brand">
              <p className="mk">K3V SHINJUKU GYOEN</p>
              <p className="tl">{t("footer.tagline")}</p>
              <p className="ad">
                {t("footer.addr1")}
                <br />
                {t("footer.addr2")}
                <br />
                {t("footer.addr3")}
              </p>
            </div>
            <div className="col">
              <h6>{t("footer.exploreH")}</h6>
              <ul>
                <li>
                  <a href="#dn-location">{nav("location")}</a>
                </li>
                <li>
                  <a href="#dn-renovated">{nav("renovated")}</a>
                </li>
                <li>
                  <a href="#dn-amenities">{nav("amenities")}</a>
                </li>
                <li>
                  <a href="#dn-rooms">{nav("rooms")}</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h6>{t("footer.infoH")}</h6>
              <ul>
                {/* /faq, /terms and /privacy do not exist yet — left as "#" so
                    the review build has no dead routes */}
                <li>
                  <a href="#dn-access">{nav("access")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.i2")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.i3")}</a>
                </li>
                <li>
                  <a href="#">{t("footer.i4")}</a>
                </li>
              </ul>
            </div>
            <div className="book">
              <h6>{t("footer.bookH")}</h6>
              <Link className="btn lime" href="/stay" style={{ marginBottom: 16 }}>
                {t("footer.bookBtn")}
                {arrow}
              </Link>
              <p className="mono-s" style={{ color: "rgba(251,250,245,.55)", lineHeight: 1.9 }}>
                {t("footer.license1")}
                <br />
                {t("footer.license2")}
              </p>
            </div>
          </div>
          <div className="foot-base">
            <p>
              <span className="sel" aria-hidden="true" />
              {t("footer.copyright")}
            </p>
            <p>JA / EN / 中文</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
