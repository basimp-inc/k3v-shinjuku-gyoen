import type { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import ChambrayGyoenBehaviour from "./ChambrayGyoenBehaviour";
import { CG_SVG_DEFS } from "./defs";
import { CG_FLORA_DEFS } from "../chambray/flora";
import * as WC from "../chambray/scenes";
import {
  MockConvenience,
  MockFacilities,
  MockLangSwitch,
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
 * REVIEW-ONLY alternative TOP page — the fourth entry of the 配色プレビュー
 * switcher ("Chambray Gyoen"): the requested merge of the two shortlisted
 * designs. Tone, section structure AND the hero composition (wood-framed
 * illustration + raw-denim patch + wood rail) come from Washed Chambray;
 * the palette is the approved chambray-gyoen set — light stonewashed
 * grounds, 新緑 fava green, pale oak, brick, and a mid-lightness denim ink in
 * place of every dark (no colour below L*≈33).
 *
 * Styles: app/chambray-gyoen-design.css (materials/type/chrome) +
 * app/mock-structure.css (the canonical section layouts), both scoped under
 * .chambray-gyoen-top. Removal steps are listed at the top of the design CSS.
 *
 * Structure is deliberately NOT a design decision: the canonical six sections
 * in the canonical order — Hero → PrimeLocation → Renovated → Amenities →
 * Rooms → Access — from the canonical message namespaces (the chambray
 * namespace supplies the Latin display lines; the only key of its own is
 * chambray.footer.creditGyoen, this design's signature line).
 *
 * DEPENDENCY: the illustrated scenes are imported from ../chambray/scenes and
 * re-namespaced wc- → cg- at render time (both designs are in the DOM at once,
 * and duplicate SVG ids resolve to the hidden copy). If Washed Chambray is
 * ever removed, move scenes.ts into this directory instead of deleting it.
 *
 * Section ids are cg- prefixed because the current design and the other
 * alternatives are all still in the DOM (hidden) and already own #rooms,
 * #access and friends.
 */

/** wc- → cg- id namespacing. Safe: every `wc-` in scenes.ts sits in an id
 *  definition or reference (id="wc-…", url(#wc-…), href="#wc-…"）。
 *
 *  あわせて、ヒーローの物干しに吊るしたシャツへ .cg-hang を付ける。ページで
 *  唯一「吊るされている」ものなので、ここが揺れると絵が生きる。回転原点は
 *  この g の原点＝物干し竿との接点なので、CSS 側は角度を振るだけでよい。
 *
 *  scenes.ts は washed-chambray と共有しているため、あちらには一切触れず
 *  chambray-gyoen のレンダリング時にだけ差し込む。マークアップが変わって
 *  一致しなくなった場合は静かに no-op になり、シャツが揺れなくなるだけ。 */
function cg(svg: string): string {
  return svg
    .replaceAll("wc-", "cg-")
    .replace('<g transform="translate(560 168) rotate(2)">', '<g class="cg-hang" transform="translate(560 168) rotate(2)">');
}

/** The illustrated scenes are authored SVG, injected as-is. `.scene` is
 *  display:contents so the svg still sizes against its `.ph` frame. */
function Scene({ svg, stamp, className }: { svg: string; stamp?: string; className?: string }) {
  return (
    <div className={className ? `ph ${className}` : "ph"}>
      <div className="scene" dangerouslySetInnerHTML={{ __html: cg(svg) }} />
      {stamp && <span className="stamp">{stamp}</span>}
    </div>
  );
}

export default async function ChambrayGyoenTop() {
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
    ["location", "#cg-location"],
    ["renovated", "#cg-renovated"],
    ["amenities", "#cg-amenities"],
    ["rooms", "#cg-rooms"],
    ["access", "#cg-access"],
  ] as const;

  const nearbyScenes = [WC.EXP_GYOEN, WC.EXP_KISSA, WC.EXP_LAUNDRY, WC.EXP_YOKOCHO, WC.EXP_SKYLINE];
  const roomScenes = [WC.ROOM1, WC.ROOM2, WC.ROOM3];
  /* the three cloths the renovation is cut from — oak / chambray / 新緑 */
  const sampleFaces = ["mat-wood", "mat-cham", "mat-forest"];
  /* the coloured ring on each walk-time row */
  const accLines = ["g", "", "w"];

  const arrow = (
    <span className="arw" aria-hidden="true">
      →
    </span>
  );

  /* --- 御苑の植物。面・点・線の3役 -------------------------------------
     どれも aria-hidden の純粋な装飾で、z-index:0 の .flora 層に入る。
     .wrap（z-index:2）より下なので、本文の可読性には干渉しない。

     2026-08-21 Step 2：配置を「単体を散らす」から「群落」へ。

     前は18個の植物が単体で置かれていて、計測すると
       ・全ページで重なっている植物のペアが 0
       ・大株2つを除く全個体が画面端 200px 以内、しかも上から L/R ほぼ交互
       ・実インク幅が leaf 152 / avar 157 / aucuba 147 / mug 136 と、
         下位4種が全部同じ大きさ（宣言していた強/中/弱の3段が存在しない）
     という状態だった。重なりが1つもない完結したシルエットは、脳が確実に
     「切り抜き素材」と判定する。等間隔の左右交互は便箋の縁飾りと同じ構造。
     つまり「無造作に散らばって見える」の正体は、数の多さではなく
     「接地していない」「重なっていない」「大きさが一段しかない」の3つ。

     対策として、植物を <i class="cl"> の中に入れ子にして群落として組む。
     群落の中では % 指定で互いに 25〜40% 食い込ませ、奥／中／手前の3層に
     振り分ける。群落は6つに減らし、1つあたりのインク面積を増やす。

     接地について：群落は必ず画面の左右いずれかの端で切る（.flora の
     overflow:hidden がその役をする）。セクションの上下境界は跨がせない。
     水平の直線で切れた茎は「定規で切った」ように見えるが、画面端で切れた
     ものは「フレームの外へ続いている」と読めるため。跨げない理由はもう
     ひとつあって、レンガ節（mat-shadow）とフッター（#EFEAE0）は地の色が
     違うので、跨いだ瞬間に葉色の上書きが片側にしか効かない。 */

  const leafSvg = (id: string, box: string) => (
    <span>
      <svg viewBox={box}>
        <use href={`#${id}`} />
      </svg>
    </span>
  );

  /* 面 — ヤツデの大株。葉が重なった塊（参考写真1）。群落の主役。
     viewBox はシンボル側の 0 0 460 560 と一致させること。以前ここが
     0 0 460 420 になっていて、preserveAspectRatio の meet により株が
     0.75 倍に縮み、確保した箱（410×499）に対しインクが 304×356 しか
     出ていなかった（面積充填率 53%）。ページで唯一「大きい」はずの
     要素が半分しか使っていなかったのが、インパクト不足の一因 */
  const clump = (cls: string) => (
    <i className={`fl clump ${cls}`} key={`c${cls}`}>
      {leafSvg("cg-fatsia-clump", "0 0 460 560")}
    </i>
  );
  /* 面 — ヤツデの葉1枚 */
  const leaf = (cls: string) => (
    <i className={`fl leaf ${cls}`} key={`l${cls}`}>
      {leafSvg("cg-fatsia-leaf", "0 0 240 240")}
    </i>
  );
  /* 点 — アオキ（実つき）。参考写真3。ページ唯一の鮮やかな赤 */
  const aucuba = (cls: string) => (
    <i className={`fl aucuba ${cls}`} key={`a${cls}`}>
      {leafSvg("cg-aucuba-sprig", "0 0 220 260")}
    </i>
  );
  /* 点 — 斑入りアオキ。参考写真4。ページで最も明るい植物要素 */
  const aucubaVar = (cls: string) => (
    <i className={`fl avar ${cls}`} key={`v${cls}`}>
      {leafSvg("cg-aucuba-variegated", "0 0 220 240")}
    </i>
  );
  /* 線 — ヨモギ。参考写真2。細かく裂けた葉の繋ぎ */
  const mug = (cls: string) => (
    <i className={`fl mug ${cls}`} key={`m${cls}`}>
      {leafSvg("cg-mugwort-sprig", "0 0 240 120")}
    </i>
  );

  const kinds = { clump, leaf, aucuba, avar: aucubaVar, mug } as const;

  /* 群落の1員。x/y/w は群落ボックスに対する % で、種類ごとの aspect-ratio
     から高さが決まる。z は奥行き層（CSS 側で葉色を差し替える）。
     株（clump）はシンボル内部で既に4層を持っているので z を付けない */
  type Member = {
    k: keyof typeof kinds;
    x: number;
    y: number;
    w: number;
    z?: "air" | "back" | "front";
    /* 傾きと反転。同じシンボルを何枚も並べるので、これを振らないと
       葉脈と鏡面の位置が全部そろって「型紙で抜いた」ことが露見する。
       角度は ±16° まで。それ以上倒すと葉柄の向きが不自然になる */
    rot?: number;
    flip?: boolean;
  };

  /* 群落。中の座標は % なので、群落ごと大きさを変えても構成が崩れない。
     隣り合う要素は必ず 25〜40% 重ねること。重なりが 0 の要素を作ると、
     その1つだけが「貼り付けた素材」に戻る */
  const cluster = (cls: string, members: Member[]) => (
    <i className={`cl ${cls}`} key={`cl${cls}`}>
      {members.map((m, n) => {
        const t = [m.rot ? `rotate(${m.rot}deg)` : "", m.flip ? "scaleX(-1)" : ""]
          .filter(Boolean)
          .join(" ");
        return (
          <i
            className="slot"
            key={n}
            style={{
              left: `${m.x}%`,
              top: `${m.y}%`,
              width: `${m.w}%`,
              ...(t ? { transform: t } : null),
            }}
          >
            {kinds[m.k](m.z ? `z-${m.z}` : "")}
          </i>
        );
      })}
    </i>
  );

  /* 主群落。ページに2つだけ（入口＝ヒーロー、出口＝アクセス）。
     外周へ葉を1枚「飛ばす」のは、輪郭を閉じさせないため。閉じた輪郭を
     持つ塊は、中身がどれだけ複雑でも1個のオブジェクトとして読まれ、
     「ただの大きなイラスト」になる */
  const ANCHOR: Member[] = [
    { k: "clump", x: 24, y: -6, w: 68, z: "air", flip: true },
    { k: "leaf", x: -2, y: 20, w: 40, z: "air", rot: -13 },
    { k: "leaf", x: 36, y: 0, w: 30, z: "back", rot: 9 },
    { k: "clump", x: -6, y: 6, w: 76 },
    { k: "aucuba", x: 54, y: 24, w: 25, z: "back", rot: 12, flip: true },
    { k: "mug", x: 24, y: 68, w: 46, z: "front" },
    { k: "leaf", x: 64, y: 50, w: 33, z: "front", rot: -8, flip: true },
  ];
  /* 主群落その2。同じレシピを2回使うと「型」が見えるので、こちらは
     アオキとヨモギ主導・株は脇役にして構成を変える */
  const ANCHOR2: Member[] = [
    { k: "clump", x: -4, y: -4, w: 66, z: "air" },
    { k: "leaf", x: 62, y: 16, w: 38, z: "air", rot: 14 },
    { k: "leaf", x: 4, y: 4, w: 32, z: "back", rot: -11, flip: true },
    { k: "clump", x: 30, y: 10, w: 70, flip: true },
    { k: "aucuba", x: 2, y: 34, w: 28, rot: -14 },
    { k: "avar", x: 20, y: 52, w: 26, z: "front", rot: 7 },
    { k: "mug", x: 40, y: 72, w: 48, z: "front", flip: true },
  ];
  /* 副群落。奥層を省いた2層。主群落と同じ画面に入らない距離に置く */
  const SEC: Member[] = [
    { k: "leaf", x: 30, y: 14, w: 52, z: "air", rot: 12 },
    { k: "leaf", x: 0, y: 26, w: 44, z: "back", rot: -14, flip: true },
    { k: "leaf", x: 24, y: 0, w: 56 },
    { k: "mug", x: 6, y: 60, w: 60, z: "front", flip: true },
    { k: "aucuba", x: 56, y: 32, w: 28, z: "front", rot: 10 },
  ];

  /* 縁 — ツタのガーランド。モバイル専用（CSS 側で display 制御）。
     カードや写真帯の**上端に掛ける**前提なので、群落と違って「足元を隠す」
     必要がない。縁そのものが接地になる */
  const garland = (cls: string) => (
    <i className={`fl gl ${cls}`} key={`g${cls}`}>
      {leafSvg("cg-ivy-garland", "0 0 600 150")}
    </i>
  );

  const flora = (items: ReactNode) => (
    <div className="flora" aria-hidden="true">
      {items}
    </div>
  );

  /* 見出しの点線ルールの終端につく標。全セクション共通の文法。
     もとはヨモギの枝を置いていたが、枝は「何かから生えている」形なので、
     点線の先に浮いていると生育の文脈がなく不自然に見えた。花序は丸く
     完結した形なので、行末の飾りとして無理なく納まる。 */
  const sprig = (
    <i className="fl sprig" aria-hidden="true">
      {leafSvg("cg-fatsia-mark", "0 0 120 84")}
    </i>
  );

  return (
    <div className="chambray-gyoen-top" data-design="chambray-gyoen">
      <ChambrayGyoenBehaviour />
      <div className="grain" aria-hidden="true" />

      {/* 御苑の樹冠とオーク。ヒーローの「地」に敷く（前面のUIには触れない） */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "absolute" }}
        dangerouslySetInnerHTML={{ __html: CG_SVG_DEFS }}
      />
      {/* ヤツデ・アオキ・ヨモギ。面・点・線の3役 */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "absolute" }}
        dangerouslySetInnerHTML={{ __html: CG_FLORA_DEFS }}
      />

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
                <a href={`/${l}?theme=chambray-gyoen`} aria-current={l === locale ? "true" : undefined}>
                  {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : (localeLabels[l] ?? l.toUpperCase())}
                </a>
              </span>
            ))}
          </div>
          <Link href="/stay" className="btn btn-ink">
            <span>{nav("book")}</span>
            {arrow}
          </Link>
          <MockLangSwitch locale={locale} theme="chambray-gyoen" />
          <button type="button" className="burger" aria-label={nav("menu")}>
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      {/* ===================== 1. HERO =====================
          Washed Chambray's composition — a wood-framed illustration beside
          the copy, a raw-denim patch sewn onto the light ground, and a wood
          rail previewing the walk times — recoloured to this design's palette. */}
      <section id="cg-hero" className="hero mat-cham">
        {/* 地＝新宿御苑の樹冠。構図は Washed Chambray のまま、その背後だけを
            織り目から御苑に差し替える。御苑が地を語り、部屋が主題として前に立つ。
            スクリムで一段白く沈めているので、前面のインク文字は 4.5:1 を保つ。 */}
        <div className="hero-vis" aria-hidden="true">
          <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 900">
            <use href="#cg-canopy" />
          </svg>
          <div className="hero-scrim" />
        </div>

        {flora([cluster("cl-he", ANCHOR)])}

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
                <Link href="/stay" className="btn btn-ink">
                  <span>{hero("ctaPrimary")}</span>
                  {arrow}
                </Link>
                <a href="#cg-rooms" className="btn btn-line" style={{ color: "var(--cham-pale)" }}>
                  <span>{hero("ctaSecondary")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-fig rv d1">
            <div className="frame" aria-label={hero("illustrationAlt")}>
              <Scene svg={WC.HERO} stamp={t("hero.stamp")} />
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
      </section>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section id="cg-location" className="mat-cham bleach">
        {flora([cluster("cl-lo", SEC)])}
        <div className="wrap cut">
          <div className="marks" aria-hidden="true">
            <i className="v" style={{ left: "33.33%" }} />
            <i className="v" style={{ left: "66.66%" }} />
          </div>

          <div className="sidx rv">
            <span className="n">01</span>
            <span className="l">{loc("eyebrow")}</span>
            <span className="rule" />
            {sprig}
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
                <Scene svg={WC.LIVING} />
              </div>
            </div>
          </div>

          {/* 近所 — the horizontal rail, auto display (see chambray/autoRail.ts) */}
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

      {/* ===================== 3. RENOVATED =====================
          Washed Chambray anchored this section in warm black; darks are out,
          so the anchor is carried by saturation instead — the brick field. */}
      <section id="cg-renovated" className="mat-shadow">
        {/* レンガの地では緑が沈むので、CSS 側で葉色を明るく差し替えている */}
        {flora([aucubaVar("re-r"), garland("gl-re")])}
        <div className="wrap">
          <div className="sidx rv" style={{ color: "#FFFFFF" }}>
            <span className="n">02</span>
            <span className="l">{ren("eyebrow")}</span>
            <span className="rule" />
            {sprig}
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
      <section id="cg-amenities" className="mat-cham">
        {flora([aucuba("am-a"), garland("gl-am")])}
        <div className="wrap">
          <div className="sidx rv">
            <span className="n">03</span>
            <span className="l">{ame("eyebrow")}</span>
            <span className="rule" />
            {sprig}
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
      <section id="cg-rooms" className="rooms mat-cham">
        {/* 帯は全幅で不透明なので、植物が見えるのは見出し脇と最下部だけ */}
        {flora([cluster("cl-ro", SEC)])}
        <div className="wrap">
          <div className="sidx rv">
            <span className="n">04</span>
            <span className="l">{rm("eyebrow")}</span>
            <span className="rule" />
            {sprig}
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
                {i === 0 ? (
                  <>
                    <input type="radio" name="cg-r1-slide" id="cg-r1-slide-0" className="s-radio" defaultChecked />
                    <input type="radio" name="cg-r1-slide" id="cg-r1-slide-1" className="s-radio" />
                    <Scene svg={roomScenes[0]} stamp={r.name} className="s0" />
                    <Scene svg={WC.ROOM1_MORNING} stamp={t("hero.stamp")} className="s1" />
                    <div className="s-dots">
                      <label htmlFor="cg-r1-slide-0" aria-label={r.name} />
                      <label htmlFor="cg-r1-slide-1" aria-label={t("hero.stamp")} />
                    </div>
                  </>
                ) : (
                  <Scene svg={roomScenes[i % roomScenes.length]} stamp={r.name} />
                )}
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
      <section id="cg-access" className="mat-cham bleach">
        {flora([cluster("cl-ac", ANCHOR2)])}
        <div className="wrap">
          <div className="sidx rv">
            <span className="n">05</span>
            <span className="l">{acc("eyebrow")}</span>
            <span className="rule" />
            {sprig}
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
                  <div className="scene" dangerouslySetInnerHTML={{ __html: cg(WC.HOOD_CITY) }} />
                  <span className="t">{acc("mapCaption")}</span>
                </div>
                <div className="h">
                  <div className="scene" dangerouslySetInnerHTML={{ __html: cg(WC.HOOD_PARK) }} />
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
        {/* ページの終わりに御苑へ還る。低い位置に葉を重ねる */}
        {flora([mug("ft-r")])}
        <div className="ft">
          <div className="ft-brand">
            <a href={`/${locale}`} className="k">
              K3<em>v</em>
            </a>
            <p>{t("footer.desc")}</p>
          </div>
          <div className="ft-col">
            <h5>{t("footer.stayH")}</h5>
            <a href="#cg-rooms">{t("footer.s1")}</a>
            <a href="#cg-rooms">{t("footer.s2")}</a>
            <a href="#cg-rooms">{t("footer.s3")}</a>
            <Link href="/stay">{nav("book")}</Link>
          </div>
          <div className="ft-col">
            <h5>{t("footer.houseH")}</h5>
            <a href="#cg-location">{nav("location")}</a>
            <a href="#cg-renovated">{nav("renovated")}</a>
            <a href="#cg-amenities">{nav("amenities")}</a>
            <a href="#cg-access">{nav("access")}</a>
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
          <span>{t("footer.creditGyoen")}</span>
        </div>
      </footer>
    </div>
  );
}
