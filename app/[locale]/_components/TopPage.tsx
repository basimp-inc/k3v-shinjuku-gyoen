import { getLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import TopBehaviour from "./TopBehaviour";
import * as S from "./scenes";
import { FLORA_DEFS } from "./flora";
import {
  AccessMap,
  LangSwitch,
  getPrimeLocationPhotos,
  type ConvenienceItem,
  type Detail,
  type Point,
  type RoomCard,
  type Stat,
} from "./topShared";

/**
 * TOPページ本体（デザイン名 "Washed Chambray" / 2026-08-25 クライアント採用）。
 *
 * このページだけが自前のナビとフッターを持つ。共通クローム（components/Nav・
 * Footer・MobileBottomNav）は app/styles/top-design.css の :has() ルールで
 * このページでだけ隠れる。下層ページ（/rooms・/stay）は共通クロームを使う。
 *
 * スタイル：app/styles/top-design.css（素材・タイポグラフィ）と
 * app/styles/top-layout.css（セクションのレイアウト）。どちらも .top-page 配下。
 *
 * 構成：Hero → PrimeLocation → Renovated → Rooms → Access。
 * 03 EVERYTHING YOU NEED（アメニティ）は 2026-08-25 に TOP から外した
 * —— 節があった位置のコメントを参照。
 *
 * デザインの主張：地は洗いざらしのシャンブレーで、生デニム #1B3A57 は面ではなく
 * 「インク」。濃い面は RENOVATED の1箇所だけ。全体が服の仕立てのように組んで
 * ある —— 破線のステッチ罫、ヒーローに縫い付けた生デニムのパッチ、リベット、
 * そして部屋の帯が端まで突き抜ける12列グリッド。
 */

/** The illustrated scenes are authored SVG, injected as-is. `.scene` is
 *  display:contents so the svg still sizes against its `.ph` frame. */
function Scene({ svg, stamp, className }: { svg: string; stamp?: string; className?: string }) {
  return (
    <div className={className ? `ph ${className}` : "ph"}>
      <div className="scene" dangerouslySetInnerHTML={{ __html: svg }} />
      {stamp && <span className="stamp">{stamp}</span>}
    </div>
  );
}

export default async function TopPage() {
  const t = await getTranslations("top");
  const nav = await getTranslations("top.nav");
  const hero = await getTranslations("hero");
  const loc = await getTranslations("primeLocation");
  const ren = await getTranslations("renovated");
  const rm = await getTranslations("rooms");
  const acc = await getTranslations("access");
  const locale = await getLocale();

const stats = loc.raw("stats") as Stat[];
const nearby = loc.raw("convenience.items") as {
  title: string;
  text: string;
}[];
const points = ren.raw("points") as Point[];
  const rooms = rm.raw("items") as RoomCard[];
  const details = acc.raw("details") as Detail[];
  const convItems = loc.raw("convenience.items") as ConvenienceItem[];
  const primeLocationPhotos = getPrimeLocationPhotos();
  const localeLabels: Record<string, string> = { ja: "JA", en: "EN", zh: "中文" };
  const navLinks = [
    ["location", "#location"],
    ["renovated", "#renovated"],
    ["rooms", "#rooms"],
    ["access", "#access"],
  ] as const;

  const roomScenes = [S.ROOM1, S.ROOM2, S.ROOM3];
  /* the three cloths the renovation is cut from */
const sampleFaces = [
"/renovation/IMG_6194.JPG",
"/renovation/IMG_6326.JPG",
"/renovation/IMG_6347.JPG  ",
];
  const arrow = (
    <span className="arw" aria-hidden="true">
      →
    </span>
  );

  /* --- 御苑の植物。面・点・線の3役 -------------------------------------
     2026-08-25 にクライアント採択（chambray-gyoen で好評だったものを移植）。
     素材は ./flora.ts、レイアウトは app/styles/top-design.css の FLORA 節。
     どれも aria-hidden の純粋な装飾で、z-index:0 の .flora 層に入る。
     .wrap（z-index:2）より下なので、本文の可読性には干渉しない。

     配置の考え方（chambray-gyoen での検証結果をそのまま引き継ぐ）：
     植物は単体で散らさず <i class="cl"> の群落として組む。群落の中では
     % 指定で互いに 25〜40% 食い込ませ、奥／中／手前の3層に振り分ける。
     重なりが1つも無い完結したシルエットは、脳が確実に「切り抜き素材」と
     判定するため。群落は必ず画面の左右いずれかの端で切り、セクションの
     上下境界は跨がせない（跨いだ瞬間に葉色の上書きが片側にしか効かない）。 */

  const leafSvg = (id: string, box: string) => (
    <span>
      <svg viewBox={box}>
        <use href={`#${id}`} />
      </svg>
    </span>
  );

  /* 面 — ヤツデの大株。葉が重なった塊。群落の主役。
     viewBox はシンボル側の 0 0 460 560 と一致させること */
  const clump = (cls: string) => (
    <i className={`fl clump ${cls}`} key={`c${cls}`}>
      {leafSvg("fig-fatsia-clump", "0 0 460 560")}
    </i>
  );
  /* 面 — ヤツデの葉1枚 */
  const leaf = (cls: string) => (
    <i className={`fl leaf ${cls}`} key={`l${cls}`}>
      {leafSvg("fig-fatsia-leaf", "0 0 240 240")}
    </i>
  );
  /* 点 — アオキ（実つき）。ページ唯一の鮮やかな赤 */
  const aucuba = (cls: string) => (
    <i className={`fl aucuba ${cls}`} key={`a${cls}`}>
      {leafSvg("fig-aucuba-sprig", "0 0 220 260")}
    </i>
  );
  /* 点 — 斑入りアオキ。ページで最も明るい植物要素 */
  const aucubaVar = (cls: string) => (
    <i className={`fl avar ${cls}`} key={`v${cls}`}>
      {leafSvg("fig-aucuba-variegated", "0 0 220 240")}
    </i>
  );
  /* 線 — ヨモギ。細かく裂けた葉の繋ぎ */
  const mug = (cls: string) => (
    <i className={`fl mug ${cls}`} key={`m${cls}`}>
      {leafSvg("fig-mugwort-sprig", "0 0 240 120")}
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
    /* 傾きと反転。同じシンボルを何枚も並べるので、これを振らないと葉脈と
       鏡面の位置が全部そろって「型紙で抜いた」ことが露見する。±16° まで */
    rot?: number;
    flip?: boolean;
  };

  /* 群落。中の座標は % なので、群落ごと大きさを変えても構成が崩れない。
     隣り合う要素は必ず 25〜40% 重ねること */
  const cluster = (cls: string, members: Member[]) => (
    <i className={`cl ${cls}`} key={`cl${cls}`}>
      {members.map((m, n) => {
        const tf = [m.rot ? `rotate(${m.rot}deg)` : "", m.flip ? "scaleX(-1)" : ""]
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
              ...(tf ? { transform: tf } : null),
            }}
          >
            {kinds[m.k](m.z ? `z-${m.z}` : "")}
          </i>
        );
      })}
    </i>
  );

  /* 主群落。ページに2つだけ（入口＝ヒーロー、出口＝アクセス）。
     外周へ葉を1枚「飛ばす」のは、輪郭を閉じさせないため。閉じた輪郭を持つ
     塊は、中身がどれだけ複雑でも1個のオブジェクトとして読まれてしまう */
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
      {leafSvg("fig-ivy-garland", "0 0 600 150")}
    </i>
  );

  const flora = (items: ReactNode) => (
    <div className="flora" aria-hidden="true">
      {items}
    </div>
  );

  /* --- まとめ帯 -----------------------------------------------------------
     2026-08-25 クライアント指示「各項目にWOOD調を入れ、まとめのような役割で
     使う」。ヒーロー末尾の `.rail.mat-wood`（徒歩時間の帯）と同じ文法を、
     各セクションの締めとして繰り返す。読み終わりに木の面が一枚入ることで
     節の切れ目がはっきりし、要点だけを持ち帰れる。

     中身は**既存の messages から拾うだけ**で、新しいコピーは作らない。
     帯が要点を持つぶん、同じことを言っていた説明文は落としてある
     （情報量の削減。messages 側で2文目を削除済み）。 */
  const sumbar = (items: { v: string; l?: string }[]) => (
    <div className="sumbar mat-wood">
      {items.map((it) => (
        <div className="f" key={it.v + (it.l ?? "")}>
          <b>{it.v}</b>
          {it.l && <span>{it.l}</span>}
        </div>
      ))}
    </div>
  );

  /* 見出しの点線ルールの終端につく標。全セクション共通の文法。花序は丸く
     完結した形なので、行末の飾りとして無理なく納まる（枝は「何かから生えて
     いる」形なので、点線の先に浮いていると生育の文脈がなく不自然だった） */
  const sprig = (
    <i className="fl sprig" aria-hidden="true">
      {leafSvg("fig-fatsia-mark", "0 0 120 84")}
    </i>
  );

  return (
    <div className="top-page">
      <TopBehaviour />
      <div className="grain" aria-hidden="true" />

      {/* ヤツデ・アオキ・ヨモギ・ツタ。面・点・線・縁の4役 */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "absolute" }}
        dangerouslySetInnerHTML={{ __html: FLORA_DEFS }}
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
                <a href={`/${l}`} aria-current={l === locale ? "true" : undefined}>
                  {l === locale ? <b>{localeLabels[l] ?? l.toUpperCase()}</b> : (localeLabels[l] ?? l.toUpperCase())}
                </a>
              </span>
            ))}
          </div>
          <Link href="/stay" className="btn btn-ink">
            <span>{nav("book")}</span>
            {arrow}
          </Link>
          <LangSwitch locale={locale} />
          <button type="button" className="burger" aria-label={nav("menu")}>
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      {/* ===================== 1. HERO ===================== */}
      <section id="hero" className="hero mat-cham">
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
            <p className="display-line">{t("display.hero")}</p>
            <h1 className="rv d1">

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
                <a href="#rooms" className="btn btn-line" style={{ color: "var(--cham-pale)" }}>
                  <span>{hero("ctaSecondary")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-fig rv d1">
            <div className="frame" aria-label={hero("illustrationAlt")}>
              <Scene svg={S.HERO} stamp={t("hero.stamp")} />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 2. PRIME LOCATION ===================== */}
      <section id="location" className="mat-cham bleach">
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
                <p className="display-line">{t("display.location")}</p>
                <h2 className="rv">{loc("heading")}</h2>
              </div>
              <div className="nearby mat-wood rv d1">
                <ul className="nearby-col">
                  {stats.map((s) => (
                    <li key={s.label}>
                      <span className="p">
                        <span className="nearby-mark" aria-hidden="true" />
                        <b>{s.label}</b>
                      </span>
                      <i>{s.value}</i>
                    </li>
                  ))}
                </ul>
                <ul className="nearby-col">
                  {convItems.slice(0, 2).map((c) => (
                    <li key={c.title}>
                      <span className="p">
                        <span className="nearby-mark" aria-hidden="true" />
                        <b>{c.title}</b>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              <div className="rail-x rv d2">
                {nearby.map((n, i) => (
                  <article className="card" key={n.title}>
                    {primeLocationPhotos[i] && (
                      <div className="ph">
                        <img src={primeLocationPhotos[i]} alt={n.title} loading="lazy" />
                      </div>
                    )}

                    <div className="meta">
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <h4>{n.title}</h4>
                    </div>

                    <p>{n.text}</p>
                  </article>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* ===================== 3. RENOVATED ===================== */}
      <section id="renovated" className="mat-shadow">
        {flora([aucubaVar("re-r"), garland("gl-re")])}

        <div className="wrap">
          <div className="sidx rv" style={{ color: "var(--ecru)" }}>
            <span className="n">02</span>
            <span className="l">{ren("eyebrow")}</span>
            <span className="rule" />
            {sprig}
          </div>

          <div className="mhead">
            <p className="display-line">{t("display.renovated")}</p>
            <h2 className="rv">{ren("heading")}</h2>
          </div>

          {/* cut samples pinned to the board.
              2026-08-25：各カードの本文（`points[].text`）を落として見出しだけに。
              ここだけ まとめ帯（.sumbar）を置いていないのは、載せられる中身が
              この3つの見出しそのもので、帯にすると同じ語が2回出るため。
              節の締めは mat-shadow の板そのものが担っている。 */}
          <div className="samples rv d1 samples-3">
            {points.map((p, i) => (
              <article className="sample" key={p.title}>
                  <div className="swatch">
                  <img
                  src={sampleFaces[i % sampleFaces.length]}
                  alt=""
                  className="sample-photo"
                  />                  
                  <span className="pin rivet" aria-hidden="true" />
                </div>
                <b>{p.title}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 EVERYTHING YOU NEED は 2026-08-25 のクライアント判断で TOP から外した。
          設備・アメニティの内容は各客室の紹介ページ（/rooms/[room]）に載せる予定
          なので、messages の `amenities` キー一式はそのまま残してある
          （TASK.md Phase 2 の未消化タスク）。 */}
      {/* ===================== 4. ROOMS ===================== */}
      <section id="rooms" className="rooms mat-cham">
        {flora([cluster("cl-ro", SEC), garland("gl-ro")])}

        <div className="wrap">
          <div className="sidx rv">
            <span className="n">03</span>
            <span className="l">{rm("eyebrow")}</span>
            <span className="rule" />
            {sprig}
          </div>
          <div className="rhead">
            <p className="display-line">{t("display.rooms")}</p>
            <h2 className="rv">{rm("heading")}</h2>
          </div>
        </div>

        <div className="seam" aria-hidden="true" />

        {rooms.map((r, i) => {
          /* ROOM 02（JOURNAL STANDARD FURNITURE）はクライアント未承認のため一時非公開。
             "Coming soon" 表示に置き換え。公開可否が決まったらこの分岐を削除する
             （元のカード実装は git 履歴に残っている）。 */
          if (r.slug === "journal-standard-furniture") {
            return (
              <div key={r.slug}>
                <article className={`band rv${i % 2 === 1 ? " rev" : ""} is-coming-soon`}>
                  <div className="pic">
                    <Scene svg={roomScenes[i % roomScenes.length]} stamp={rm("comingSoon")} />
                  </div>
                  <div className="txt mat-raw">
                    <span className="no" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="brand">
                      <span className="tag">{r.tag}</span>
                    </div>
                    <h3>{r.subtitle}</h3>
                    <span className="go is-disabled" aria-disabled="true">
                      <span>{rm("comingSoon")}</span>
                    </span>
                  </div>
                </article>
                <div className="seam" aria-hidden="true" />
              </div>
            );
          }

          return (
            <div key={r.slug}>
              <article className={`band rv${i % 2 === 1 ? " rev" : ""}`}>
                <div className="pic">
                  {i === 0 ? (
                    <>
                      <input type="radio" name="room1-slide" id="room1-slide-0" className="s-radio" defaultChecked />
                      <input type="radio" name="room1-slide" id="room1-slide-1" className="s-radio" />
                      <Scene svg={roomScenes[0]} stamp={r.name} className="s0" />
                      <Scene svg={S.ROOM1_MORNING} stamp={t("hero.stamp")} className="s1" />
                      <div className="s-dots">
                        <label htmlFor="room1-slide-0" aria-label={r.name} />
                        <label htmlFor="room1-slide-1" aria-label={t("hero.stamp")} />
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
                  <Link href={`/rooms/${r.slug}`} className="go">
                    <span>{r.cta}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
              <div className="seam" aria-hidden="true" />
            </div>
          );
        })}
      </section>

      {/* ===================== 5. ACCESS ===================== */}
      <section id="access" className="mat-cham bleach">
        {flora([cluster("cl-ac", ANCHOR2)])}

        <div className="wrap">
          <div className="sidx rv">
            <span className="n">04</span>
            <span className="l">{acc("eyebrow")}</span>
            <span className="rule" />
            {sprig}
          </div>

          <div className="lgrid">
            <div className="lmap rv">
              <AccessMap title={acc("mapAlt")} className="access-map" />
            </div>

            <div className="linfo">
              <p className="display-line">{t("display.access")}</p>
              <h2 className="rv">{acc("heading")}</h2>
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

              <Link href="/stay" className="btn btn-ink access-cta rv d2">
                <span>{acc("cta")}</span>
                {arrow}
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* ===================== FOOTER ===================== */}
      <footer>
        {flora([mug("ft-r")])}

        <div className="ft">
          <div className="ft-brand">
            <a href={`/${locale}`} className="k">
              K3<em>v</em>
            </a>
          </div>
          <div className="ft-col">
            <h5>{t("footer.stayH")}</h5>
            <a href="#rooms">{t("footer.s1")}</a>
            <a href="#rooms">{t("footer.s2")}</a>
            <a href="#rooms">{t("footer.s3")}</a>
            <Link href="/stay">{nav("book")}</Link>
          </div>
          <div className="ft-col">
            <h5>{t("footer.houseH")}</h5>
            <a href="#location">{nav("location")}</a>
            <a href="#renovated">{nav("renovated")}</a>
            <a href="#access">{nav("access")}</a>
          </div>
          <div className="ft-col">
            <h5>{t("footer.infoH")}</h5>
            <a href="#">{t("footer.i1")}</a>
            <a href="#">{t("footer.i2")}</a>
            <a href="#">{t("footer.i3")}</a>
            <a href="#">{t("footer.i4")}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
