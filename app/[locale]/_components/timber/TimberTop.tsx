import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import TimberBehaviour from "./TimberBehaviour";
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
 * REVIEW-ONLY alternative TOP page — the fourth entry of the 配色プレビュー
 * switcher ("Timber Indigo"). It ships its own nav and footer, so the current
 * design's chrome is hidden by CSS while this is on screen.
 *
 * Material source: docs/top-page-mock-7.html
 * Styles: app/timber-design.css (materials/type) + app/mock-structure.css (the
 * canonical section layouts), both scoped under .timber-top.
 * Removal steps are listed at the top of app/timber-design.css.
 *
 * Structure is deliberately NOT a design decision: like the other five
 * alternatives this renders the canonical six sections in the canonical order
 * — Hero → PrimeLocation → Renovated → Amenities → Rooms → Access — from the
 * canonical message namespaces, so the client compares direction, not content.
 *
 * What IS this design's argument: the dark one. A full-bleed raw-denim hero
 * with the artwork behind a veil rather than beside the copy, sections that
 * swing paper → shadow → paper, rooms on the darkest ground the set has, and a
 * riveted wood plate carrying the walk times. Instrument Serif italic is the
 * only soft thing on the page.
 *
 * Section ids are tb-prefixed because the current design and the other five
 * alternatives are all still in the DOM (hidden) and already own #rooms,
 * #access and friends. The SVG ids in ./scenes.ts carry the same prefix.
 */

/** The illustrated scenes are authored SVG, injected as-is. `.scene` is
 *  display:contents so the svg still sizes against its `.ph` frame. */
function Scene({ svg, label }: { svg: string; label?: string }) {
  return (
    <div className="ph">
      <div className="scene" dangerouslySetInnerHTML={{ __html: svg }} />
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}

export default async function TimberTop() {
  const t = await getTranslations("timber");
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
    ["location", "#tb-location"],
    ["renovated", "#tb-renovated"],
    ["amenities", "#tb-amenities"],
    ["rooms", "#tb-rooms"],
    ["access", "#tb-access"],
  ] as const;

  const nearbyScenes = [S.EXP_GYOEN, S.EXP_YOKOCHO, S.EXP_KISSA, S.EXP_SKYLINE];
  const roomScenes = [S.ROOM1, S.ROOM2, S.ROOM3];
  /* the three materials the renovation is made of */
  const matFaces = ["mat-wood", "mat-denim", "mat-forest"];

  return (
    <div className="timber-top" data-design="timber">
      <TimberBehaviour />

      {/* ===================== NAV ===================== */}
      <header className="nav">
        <a href={`/${locale}`} className="brand">
          <span className="k">
            K3<em>v</em>
          </span>
          <span className="sub">Shinjuku&nbsp;Gyoen</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map(([key, href]) => (
            <a key={key} href={href}>
              {nav(key)}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <div className="lang">
            {routing.locales.map((l, i) => (
              <span key={l} style={{ display: "contents" }}>
                {i > 0 && <span>/</span>}
                <a href={`/${l}?theme=timber-indigo`} aria-current={l === locale ? "true" : undefined}>
                  {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : (localeLabels[l] ?? l.toUpperCase())}
                </a>
              </span>
            ))}
          </div>
          <Link href="/stay" className="btn btn-book">
            <span>{nav("book")}</span>
            <span className="arw">→</span>
          </Link>
          <button type="button" className="burger" aria-label={nav("menu")}>
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      {/* ===================== 1. HERO ===================== */}
      <section id="tb-hero" className="hero mat-denim">
        <div className="hero-media" aria-label={hero("illustrationAlt")}>
          <div className="scene" dangerouslySetInnerHTML={{ __html: S.HERO }} />
        </div>
        <div className="hero-veil" />
        <div className="hero-veil2" />
        <div className="hero-tex" />

        <div className="hero-edge">
          <span>{t("hero.edge")}</span>
        </div>
        <div className="stitch-v" style={{ left: "calc(var(--pad) - 14px)", zIndex: 5 }} />

        <div className="hero-vjp">{t("hero.vertical")}</div>

        <div className="hero-inner">
          <div>
            <div className="eyebrow rv">
              <span className="dot" />
              <span className="mono-s">{hero("eyebrow")}</span>
            </div>
            <p className="mock-dsp">{t("display.hero")}</p>
            <h1 className="rv d1">
              <span className="h1-a">
                {hero("titleLine1")}
                <br />
                {hero("titleLine2")}
              </span>
            </h1>
            <div className="hero-lead rv d2">
              <p className="jp">{hero("description")}</p>
            </div>
            <div className="hero-cta rv d3">
              <Link href="/stay" className="btn btn-book">
                <span>{hero("ctaPrimary")}</span>
                <span className="arw">→</span>
              </Link>
              <a href="#tb-rooms" className="btn btn-ghost" style={{ color: "var(--chalk)" }}>
                <span>{hero("ctaSecondary")}</span>
              </a>
            </div>
          </div>

          {/* the riveted wood plate — the walk times, previewed */}
          <div className="plate mat-wood rv d2">
            <span className="rivet a" />
            <span className="rivet b" />
            <span className="rivet c" />
            <span className="rivet d" />
            <span className="lab">{loc("eyebrow")}</span>
            <ul>
              {stats.map((s, i) => (
                <li key={s.label}>
                  <span className="n">{`0${i + 1}`}</span>
                  <span className="t">
                    {s.value}
                    <small>{s.label}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* decorative */}
        <div className="ticker mat-shadow" aria-hidden="true">
          <div className="ticker-in">
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                {t("ticker.w1")} <i /> {t("ticker.w2")} <i /> {t("ticker.w3")} <i /> {t("ticker.w4")} <i />{" "}
                <em>{t("ticker.em")}</em> <i />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section id="tb-location" className="exp mat-paper">
        <div className="wrap">
          <div className="sec-idx rv">
            <span className="n">01</span>
            <span className="l">{loc("eyebrow")}</span>
            <span className="line" />
          </div>

          <div className="concept-grid">
            <div className="concept-left">
              <div className="concept-h">
                <p className="mock-dsp">{t("display.location")}</p>
                <h2 className="rv">
                  {loc("headingLine1")}
                  <em>{loc("headingLine2")}</em>
                </h2>
              </div>
              <div className="concept-body rv d1">
                <p className="jp">{loc("description")}</p>
              </div>
            </div>

            <div className="concept-img rv d1">
              <Scene svg={S.LIVING} label={loc("eyebrow")} />
            </div>
          </div>

          {/* 近所 — the staggered rail */}
          <div className="exp-rail rv d2">
            {nearby.map((n, i) => (
              <article className="exp-card" key={n.label}>
                <Scene svg={nearbyScenes[i % nearbyScenes.length]} />
                <div className="meta">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{n.label}</h4>
                </div>
                <p>{n.distance}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3. RENOVATED ===================== */}
      <section id="tb-renovated" className="material mat-shadow">
        <div className="wrap">
          <div className="sec-idx rv" style={{ color: "var(--paper)" }}>
            <span className="n">02</span>
            <span className="l">{ren("eyebrow")}</span>
            <span className="line" />
          </div>

          <div className="mt-head">
            <p className="mock-dsp">{t("display.renovated")}</p>
            <h2 className="rv">
              {ren("headingLine1")}
              <em>{ren("headingLine2")}</em>
            </h2>
            <p className="rv d1">{ren("description")}</p>
          </div>

          <div className="mt-grid mt-grid-3 rv d1">
            {points.map((p, i) => (
              <article className={`mt-cell ${matFaces[i % matFaces.length]}`} key={p.title}>
                <span className="grad" aria-hidden="true" />
                <span className="n mt-n">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-body">
                  <b>{p.title}</b>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 4. AMENITIES ===================== */}
      <section id="tb-amenities" className="mat-paper">
        <div className="wrap">
          <div className="sec-idx rv">
            <span className="n">03</span>
            <span className="l">{ame("eyebrow")}</span>
            <span className="line" />
          </div>

          <div className="exp-head">
            <p className="mock-dsp">{t("display.amenities")}</p>
            <h2 className="rv">
              {ame("headingLine1")}
              <em>{ame("headingLine2")}</em>
            </h2>
            <p className="rv d1">{ame("description")}</p>
          </div>

          {/* a stock list, ruled like a spec sheet */}
          <ul className="mock-ami rv d1">
            {amenityItems.map((item, i) => (
              <li key={item.label}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <b>{item.label}</b>
              </li>
            ))}
          </ul>

          <p className="mock-note rv d2">{ame("note")}</p>
        </div>
      </section>

      {/* ===================== 5. ROOMS ===================== */}
      <section id="tb-rooms" className="rooms">
        <div className="wrap">
          <div className="sec-idx rv">
            <span className="n">04</span>
            <span className="l">{rm("eyebrow")}</span>
            <span className="line" />
          </div>

          <div className="rooms-head">
            <p className="mock-dsp">{t("display.rooms")}</p>
            <h2 className="rv">
              {rm("headingLine1")}
              <em>{rm("headingLine2")}</em>
            </h2>
            <p className="rv d1">{rm("description")}</p>
          </div>

          {rooms.map((r, i) => (
            <article className={`room rv${i % 2 === 1 ? " flip" : ""}`} key={r.slug}>
              <div className="rm-img">
                <Scene svg={roomScenes[i % roomScenes.length]} label={r.name} />
              </div>
              <div className="rm-txt">
                <span className="rm-no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="inner">
                  <div className="rm-brand">
                    <span className="tag">{r.tag}</span>
                  </div>
                  <h3>{r.subtitle}</h3>
                  <p className="jp">{r.text}</p>
                  <Link href={`/rooms/${r.slug}`} className="rm-link">
                    <span>{r.cta}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <Link href="/rooms" className="btn btn-ghost mock-viewall" style={{ color: "var(--paper)" }}>
            <span>{rm("viewAll")}</span>
            <span className="arw">→</span>
          </Link>
        </div>
      </section>

      {/* ===================== 6. ACCESS ===================== */}
      <section id="tb-access" className="loc">
        <div className="wrap">
          <div className="sec-idx rv">
            <span className="n">05</span>
            <span className="l">{acc("eyebrow")}</span>
            <span className="line" />
          </div>

          <div className="loc-grid">
            <div className="loc-map rv">
              <MockMap title={acc("mapAlt")} className="mock-map" />
            </div>

            <div className="loc-info">
              <p className="mock-dsp">{t("display.access")}</p>
              <h2 className="rv">
                {acc("headingLine1")}
                <em>{acc("headingLine2")}</em>
              </h2>
              <p className="addr rv d1">{acc("description")}</p>

              <dl className="mock-details rv d1">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="loc-hoods rv d2">
                <div className="h">
                  <div className="scene" dangerouslySetInnerHTML={{ __html: S.HOOD_CITY }} />
                  <span className="t">{acc("mapCaption")}</span>
                </div>
                <div className="h">
                  <div className="scene" dangerouslySetInnerHTML={{ __html: S.HOOD_PARK }} />
                  <span className="t">{stats[0]?.label}</span>
                </div>
              </div>

              <Link href="/stay" className="btn btn-book mock-access-cta rv d2">
                <span>{acc("cta")}</span>
                <span className="arw">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer>
        <div className="ft">
          <div className="ft-brand">
            <a href={`/${locale}`} className="k">
              K3<em>v</em>
            </a>
            <p>{t("footer.desc")}</p>
          </div>
          <div className="ft-col">
            <h5>{t("footer.stayH")}</h5>
            <a href="#tb-rooms">{t("footer.s1")}</a>
            <a href="#tb-rooms">{t("footer.s2")}</a>
            <a href="#tb-rooms">{t("footer.s3")}</a>
            <Link href="/stay">{nav("book")}</Link>
          </div>
          <div className="ft-col">
            <h5>{t("footer.houseH")}</h5>
            <a href="#tb-location">{nav("location")}</a>
            <a href="#tb-renovated">{nav("renovated")}</a>
            <a href="#tb-amenities">{nav("amenities")}</a>
            <a href="#tb-access">{nav("access")}</a>
          </div>
          <div className="ft-col">
            <h5>{t("footer.infoH")}</h5>
            <a href="#">{t("footer.i1")}</a>
            <a href="#">{t("footer.i2")}</a>
            <a href="#">{t("footer.i3")}</a>
            <a href="#">{t("footer.i4")}</a>
          </div>
          <div className="ft-col">
            <h5>{t("footer.followH")}</h5>
            <a href="#">{t("footer.fo1")}</a>
            <a href="#">{t("footer.fo2")}</a>
            <a href="#">{t("footer.fo3")}</a>
          </div>
        </div>
        <div className="ft-bot">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.credit")}</span>
        </div>
      </footer>
    </div>
  );
}
