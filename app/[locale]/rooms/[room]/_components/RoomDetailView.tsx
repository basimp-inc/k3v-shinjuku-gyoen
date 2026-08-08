import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/icons";
import RoomVisual from "@/components/RoomVisual";
import Reveal from "@/components/Reveal";
import { ROOM_SLUGS, roomThemes, roomTagClass, type RoomSlug } from "@/lib/rooms";

type Highlight = { title: string; text: string };
type Spec = { label: string; value: string };
type DesignerQuote = { quote: string; name: string };

type RoomDetail = {
  tag: string;
  name: string;
  subtitle: string;
  lead: string;
  story: string[];
  comingSoonNote?: string;
  highlights: Highlight[];
  specs: Spec[];
  designerQuote: DesignerQuote;
  cta: string;
};

export default async function RoomDetailView({ slug }: { slug: RoomSlug }) {
  const t = await getTranslations("roomDetails");
  const common = await getTranslations("roomsCommon");
  const room = t.raw(slug) as RoomDetail;
  const theme = roomThemes[slug];
  const tagClass = roomTagClass[slug];

  const index = ROOM_SLUGS.indexOf(slug);
  const prevSlug = ROOM_SLUGS[(index - 1 + ROOM_SLUGS.length) % ROOM_SLUGS.length];
  const nextSlug = ROOM_SLUGS[(index + 1) % ROOM_SLUGS.length];

  return (
    <article>
      <section className="px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/rooms"
              className="font-en text-xs tracking-[0.25em] text-(--color-accent) transition-colors duration-200 hover:text-(--color-text)"
            >
              ← {common("breadcrumb")}
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <span className={`inline-flex rounded-full px-3 py-1 text-[11px] tracking-wide ${tagClass}`}>
                {room.tag}
              </span>
              <p className="font-en mt-4 text-sm tracking-[0.15em] text-(--color-accent)">{room.name}</p>
              <h1 className="mt-2 text-3xl leading-[1.3] text-(--color-text) md:text-4xl">{room.subtitle}</h1>
              <p className="mt-5 max-w-md text-sm leading-[1.8] text-(--color-text-soft) md:text-base">{room.lead}</p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm text-(--color-cream) transition-all duration-200 hover:scale-[1.03] hover:bg-(--color-accent-dark)"
              >
                {room.cta}
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </Reveal>

            <Reveal delay={150}>
              <div className="aspect-4/3 overflow-hidden rounded-[22px]">
                <RoomVisual theme={theme} alt={room.subtitle} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-card) px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5">
            {room.story.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={i * 100}>
                <p className="text-sm leading-[1.9] text-(--color-text-soft) md:text-base">{p}</p>
              </Reveal>
            ))}
          </div>

          {room.comingSoonNote && (
            <Reveal delay={room.story.length * 100}>
              <p className="mt-6 rounded-2xl bg-(--color-bg) px-5 py-4 text-sm leading-[1.8] text-(--color-accent)">
                <span className="font-en tracking-widest">{common("comingSoonBadge")}</span> — {room.comingSoonNote}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {room.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 100}>
                <div className="h-full rounded-[18px] bg-(--color-bg-card) p-6">
                  <h3 className="text-base text-(--color-text)">{h.title}</h3>
                  <p className="mt-2 text-sm leading-[1.8] text-(--color-text-soft)">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-card) px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <Reveal>
            <dl className="space-y-4">
              {room.specs.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col gap-1 border-b border-(--color-bg-card-deep) pb-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="w-28 shrink-0 text-xs tracking-wide text-(--color-accent)">{d.label}</dt>
                  <dd className="text-sm text-(--color-text)">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <blockquote className="rounded-[22px] bg-(--color-bg) p-7">
              <p className="text-sm leading-[1.9] text-(--color-text) md:text-base">
                &ldquo;{room.designerQuote.quote}&rdquo;
              </p>
              <footer className="mt-4 font-en text-xs tracking-[0.15em] text-(--color-accent)">
                — {room.designerQuote.name}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/rooms"
            className="text-sm text-(--color-accent) transition-colors duration-200 hover:text-(--color-text)"
          >
            {common("backToRooms")}
          </Link>

          <div className="flex gap-3">
            <Link
              href={`/rooms/${prevSlug}`}
              className="rounded-full bg-(--color-bg-card) px-5 py-2.5 text-sm text-(--color-text) transition-colors duration-200 hover:bg-(--color-bg-card-deep)"
            >
              ← {common("prevRoom")}
            </Link>
            <Link
              href={`/rooms/${nextSlug}`}
              className="rounded-full bg-(--color-bg-card) px-5 py-2.5 text-sm text-(--color-text) transition-colors duration-200 hover:bg-(--color-bg-card-deep)"
            >
              {common("nextRoom")} →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
