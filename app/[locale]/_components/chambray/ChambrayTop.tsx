import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import ChambrayBehaviour from "./ChambrayBehaviour";
import * as S from "./scenes";
import {
  MockConvenience,
  MockFacilities,
  MockMap,
  type MockConvenienceItem,
  type MockDetail,
  type MockItem,
  type MockNearby,
  type MockPoint,
  type MockRoom,
  type MockRoomFacility,
  type MockStat,
} from "../mockShared";

/**
 * REVIEW-ONLY alternative TOP page — the fifth entry of the 配色プレビュー
 * switcher ("Washed Chambray"). It ships its own nav and footer, so the current
 * design's chrome is hidden by CSS while this is on screen.
 *
 * Material source: docs/top-page-mock-8.html
 * Styles: app/chambray-design.css (materials/type) + app/mock-structure.css
 * (the canonical section layouts), both scoped under .chambray-top.
 * Removal steps are listed at the top of app/chambray-design.css.
 *
 * Structure is deliberately NOT a design decision: like the other five
 * alternatives this renders the canonical six sections in the canonical order
 * — Hero → PrimeLocation → Renovated → Amenities → Rooms → Access — from the
 * canonical message namespaces, so the client compares direction, not content.
 *
 * What IS this design's argument: the light inversion of Timber Indigo. The
 * ground is washed chambray and #1B3A57 is ink rather than field, with exactly
 * one dark anchor (Renovated). Everything is built like a garment — dashed
 * stitch rules, a raw-denim patch sewn onto the hero, rivets, and a 12-column
 * grid that room bands break out of edge to edge.
 *
 * Section ids are wc-prefixed because the current design and the other five
 * alternatives are all still in the DOM (hidden) and already own #rooms,
 * #access and friends. The SVG ids in ./scenes.ts carry the same prefix.
 */

/** The illustrated scenes are authored SVG, injected as-is. `.scene` is
 *  display:contents so the svg still sizes against its `.ph` frame. */
function Scene({ svg, stamp }: { svg: string; stamp?: string }) {
  return (
    <div className="ph">
      <div className="scene" dangerouslySetInnerHTML={{ __html: svg }} />
      {stamp && <span className="stamp">{stamp}</span>}
    </div>
  );
}

export default async function ChambrayTop() {
  const t = await getTranslations("chambray");
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
  const convItems = loc.raw("convenience.items") as MockConvenienceItem[];
  const facRooms = ame.raw("facilities.rooms") as MockRoomFacility[];
  const facCommon = ame.raw("facilities.common") as MockItem[];

  const localeLabels: Record<string, string> = { ja: "JA", en: "EN", zh: "中文" };
  const navLinks = [
    ["location", "#wc-location"],
    ["renovated", "#wc-renovated"],
    ["amenities", "#wc-amenities"],
    ["rooms", "#wc-rooms"],
    ["access", "#wc-access"],
  ] as const;

  const nearbyScenes = [S.EXP_GYOEN, S.EXP_KISSA, S.EXP_LAUNDRY, S.EXP_YOKOCHO, S.EXP_SKYLINE];
  const roomScenes = [S.ROOM1, S.ROOM2, S.ROOM3];
  /* the three cloths the renovation is cut from */
  const sampleFaces = ["mat-wood", "mat-cham", "mat-forest"];
  /* the coloured ring on each walk-time row */
  const accLines = ["g", "", "w"];

  const arrow = (
    <span className="arw" aria-hidden="true">
      →
    </span>
  );

  return (
    <div className="chambray-top" data-design="chambray">
      <ChambrayBehaviour />
      <div className="grain" aria-hidden="true" />

      {/* ===================== NAV ===================== */}
      <header className="nav">
        <a href={`/${locale}`} className="mark">
          <span className="k">
            K3<em>v</em>
          </span>
          <span className="s">Shinjuku&nbsp;Gyoen</span>
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
                <a href={`/${l}?theme=washed-chambray`} aria-current={l === locale ? "true" : undefined}>
                  {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : (localeLabels[l] ?? l.toUpperCase())}
                </a>
              </span>
            ))}
          </div>
          <Link href="/stay" className="btn btn-ink">
            <span>{nav("book")}</span>
            {arrow}
          </Link>
          <button type="button" className="burger" aria-label={nav("menu")}>
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      {/* ===================== 1. HERO ===================== */}
      <section id="wc-hero" className="hero mat-cham">
        <div className="hero-side">
          <span>{t("hero.side")}</span>
        </div>
        <div className="hero-vjp">{t("hero.vertical")}</div>

        <div className="hero-body">
          <div>
            <div className="hero-kicker rv">
              <span className="dot" aria-hidden="true" />
              <span className="mono-s">{hero("eyebrow")}</span>
            </div>
            <p className="mock-dsp">{t("display.hero")}</p>
            <h1 className="rv d1">
              <span className="h1">
                {hero("titleLine1")}
                <br />
                {hero("titleLine2")}
              </span>
            </h1>

            {/* the raw-denim patch sewn onto the washed ground */}
            <div className="patch mat-raw rv d2">
              <span className="edge" aria-hidden="true" />
              <p className="jp">{hero("description")}</p>
              <div className="acts">
                <Link href="/stay" className="btn btn-thread">
                  <span>{hero("ctaPrimary")}</span>
                  {arrow}
                </Link>
                <a href="#wc-rooms" className="btn btn-line" style={{ color: "var(--cham-pale)" }}>
                  <span>{hero("ctaSecondary")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-fig rv d1">
            <div className="frame" aria-label={hero("illustrationAlt")}>
              <Scene svg={S.HERO} stamp={t("hero.stamp")} />
            </div>
            <div className="hero-chip mat-paper">
              <span className="n">{t("hero.chipN")}</span>
              <span className="t">{t("hero.chipT")}</span>
            </div>
          </div>
        </div>

        {/* the walk times previewed on the hem, expanded in PrimeLocation */}
        <div className="rail mat-wood">
          {stats.map((s) => (
            <div className="f" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
          <div className="f">
            <span className="cue">
              <i aria-hidden="true" />
              <span className="mono-s">{t("rail.scroll")}</span>
            </span>
          </div>
        </div>

        {/* decorative */}
        <div className="ticker mat-raw" aria-hidden="true">
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
      <section id="wc-location" className="mat-cham bleach">
        <div className="wrap cut">
          <div className="marks" aria-hidden="true">
            <i className="v" style={{ left: "33.33%" }} />
            <i className="v" style={{ left: "66.66%" }} />
          </div>

          <div className="sidx rv">
            <span className="n">01</span>
            <span className="l">{loc("eyebrow")}</span>
            <span className="rule" />
          </div>

          <div className="cgrid">
            <div className="c-left">
              <div className="c-head">
                <p className="mock-dsp">{t("display.location")}</p>
                <h2 className="rv">
                  {loc("headingLine1")}
                  <em>{loc("headingLine2")}</em>
                </h2>
              </div>
              <div className="c-copy rv d1">
                <p className="jp">{loc("description")}</p>
              </div>
              <ul className="acc rv d1">
                {stats.map((s, i) => (
                  <li key={s.label}>
                    <span className="p">
                      <span className={`ln ${accLines[i % accLines.length]}`} aria-hidden="true" />
                      <b>{s.label}</b>
                    </span>
                    <i>{s.value}</i>
                  </li>
                ))}
              </ul>
            </div>

            <div className="c-fig rv d1">
              <div className="frame">
                <Scene svg={S.LIVING} />
              </div>
            </div>
          </div>

          {/* 近所 — the signature horizontal rail. `data-rail` is read by
              ChambrayBehaviour: "auto" turns it into a slow autoplay carousel
              for the A/B the client asked for. */}
          <div className="rail-x rv d2" data-wc-rail-track="">
            {nearby.map((n, i) => (
              <article className="card" key={n.label}>
                <Scene svg={nearbyScenes[i % nearbyScenes.length]} />
                <div className="meta">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{n.label}</h4>
                </div>
                <p>{n.distance}</p>
              </article>
            ))}
          </div>

          <MockConvenience
            eyebrow={loc("convenience.eyebrow")}
            heading={loc("convenience.heading")}
            text={loc("convenience.text")}
            items={convItems}
          />
        </div>
      </section>

      {/* ===================== 3. RENOVATED ===================== */}
      <section id="wc-renovated" className="mat-shadow">
        <div className="wrap">
          <div className="sidx rv" style={{ color: "var(--ecru)" }}>
            <span className="n">02</span>
            <span className="l">{ren("eyebrow")}</span>
            <span className="rule" />
          </div>

          <div className="mhead">
            <p className="mock-dsp">{t("display.renovated")}</p>
            <h2 className="rv">
              {ren("headingLine1")}
              <em>{ren("headingLine2")}</em>
            </h2>
            <p className="rv d1">{ren("description")}</p>
          </div>

          {/* cut samples pinned to the board */}
          <div className="samples rv d1 samples-3">
            {points.map((p, i) => (
              <article className="sample" key={p.title}>
                <div className={`swatch ${sampleFaces[i % sampleFaces.length]}`}>
                  <span className="pin rivet" aria-hidden="true" />
                </div>
                <b>{p.title}</b>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 4. AMENITIES ===================== */}
      <section id="wc-amenities" className="mat-cham">
        <div className="wrap">
          <div className="sidx rv">
            <span className="n">03</span>
            <span className="l">{ame("eyebrow")}</span>
            <span className="rule" />
          </div>

          <div className="ehead">
            <p className="mock-dsp">{t("display.amenities")}</p>
            <h2 className="rv">
              {ame("headingLine1")}
              <em>{ame("headingLine2")}</em>
            </h2>
            <p className="rv d1">{ame("description")}</p>
          </div>

          {/* every item a small patch, dashed-stitched like the hero's */}
          <ul className="mock-ami rv d1">
            {amenityItems.map((item, i) => (
              <li key={item.label}>
                <span className="edge" aria-hidden="true" />
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <b>{item.label}</b>
              </li>
            ))}
          </ul>

          <MockFacilities
            heading={ame("facilities.heading")}
            text={ame("facilities.text")}
            roomLabel={ame("facilities.roomLabel")}
            rooms={facRooms}
            commonHeading={ame("facilities.commonHeading")}
            common={facCommon}
          />

          <p className="walkline mock-note rv d2">{ame("note")}</p>
        </div>
      </section>

      {/* ===================== 5. ROOMS ===================== */}
      <section id="wc-rooms" className="rooms mat-cham">
        <div className="wrap">
          <div className="sidx rv">
            <span className="n">04</span>
            <span className="l">{rm("eyebrow")}</span>
            <span className="rule" />
          </div>
          <div className="rhead">
            <p className="mock-dsp">{t("display.rooms")}</p>
            <h2 className="rv">
              {rm("headingLine1")}
              <em>{rm("headingLine2")}</em>
            </h2>
            <p className="rv d1">{rm("description")}</p>
          </div>
        </div>

        <div className="seam" aria-hidden="true" />

        {rooms.map((r, i) => (
          <div key={r.slug}>
            <article className={`band rv${i % 2 === 1 ? " rev" : ""}`}>
              <div className="pic">
                <Scene svg={roomScenes[i % roomScenes.length]} stamp={r.name} />
              </div>
              <div className="txt mat-raw">
                <span className="no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="brand">
                  <span className="tag">{r.tag}</span>
                </div>
                <h3>{r.subtitle}</h3>
                <p className="jp">{r.text}</p>
                <Link href={`/rooms/${r.slug}`} className="go">
                  <span>{r.cta}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            <div className="seam" aria-hidden="true" />
          </div>
        ))}

        <div className="wrap mock-viewall-wrap">
          <Link href="/rooms" className="btn btn-line">
            <span>{rm("viewAll")}</span>
            {arrow}
          </Link>
        </div>
      </section>

      {/* ===================== 6. ACCESS ===================== */}
      <section id="wc-access" className="mat-cham bleach">
        <div className="wrap">
          <div className="sidx rv">
            <span className="n">05</span>
            <span className="l">{acc("eyebrow")}</span>
            <span className="rule" />
          </div>

          <div className="lgrid">
            <div className="lmap rv">
              <MockMap title={acc("mapAlt")} className="mock-map" />
            </div>

            <div className="linfo">
              <p className="mock-dsp">{t("display.access")}</p>
              <h2 className="rv">
                {acc("headingLine1")}
                <em>{acc("headingLine2")}</em>
              </h2>
              <p className="addr rv d1">{acc("description")}</p>

              <ul className="acc rv d1">
                {details.map((d, i) => (
                  <li key={d.label}>
                    <span className="p">
                      <span className={`ln ${accLines[i % accLines.length]}`} aria-hidden="true" />
                      <b>{d.label}</b>
                    </span>
                    <i className="mock-detail-value">{d.value}</i>
                  </li>
                ))}
              </ul>

              <div className="hoods rv d2">
                <div className="h">
                  <div className="scene" dangerouslySetInnerHTML={{ __html: S.HOOD_CITY }} />
                  <span className="t">{acc("mapCaption")}</span>
                </div>
                <div className="h">
                  <div className="scene" dangerouslySetInnerHTML={{ __html: S.HOOD_PARK }} />
                  <span className="t">{stats[0]?.label}</span>
                </div>
              </div>

              <Link href="/stay" className="btn btn-ink mock-access-cta rv d2">
                <span>{acc("cta")}</span>
                {arrow}
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
            <a href="#wc-rooms">{t("footer.s1")}</a>
            <a href="#wc-rooms">{t("footer.s2")}</a>
            <a href="#wc-rooms">{t("footer.s3")}</a>
            <Link href="/stay">{nav("book")}</Link>
          </div>
          <div className="ft-col">
            <h5>{t("footer.houseH")}</h5>
            <a href="#wc-location">{nav("location")}</a>
            <a href="#wc-renovated">{nav("renovated")}</a>
            <a href="#wc-amenities">{nav("amenities")}</a>
            <a href="#wc-access">{nav("access")}</a>
          </div>
          <div className="ft-col">
            <h5>{t("footer.infoH")}</h5>
            <a href="#">{t("footer.i1")}</a>
            <a href="#">{t("footer.i2")}</a>
            <a href="#">{t("footer.i3")}</a>
            <a href="#">{t("footer.i4")}</a>
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
