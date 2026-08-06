import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ROOM_SLUGS, roomThemes, roomTagClass } from "@/lib/rooms";
import PageHero from "@/components/PageHero";
import RoomVisual from "@/components/RoomVisual";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "roomsIndex" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

type RoomItem = {
  tag: string;
  name: string;
  subtitle: string;
  text: string;
  cta: string;
  alt: string;
  slug: string;
};

export default async function RoomsPage() {
  const t = await getTranslations("roomsIndex");
  const rooms = await getTranslations("rooms");
  const items = rooms.raw("items") as RoomItem[];

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        headingLines={[t("headingLine1"), t("headingLine2")]}
        description={t("intro")}
      />

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((room, i) => (
              <Reveal key={room.slug} delay={i * 100}>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] bg-[#efe5d3] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="aspect-[4/3] overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                    <RoomVisual theme={roomThemes[room.slug as (typeof ROOM_SLUGS)[number]]} alt={room.alt} />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] tracking-wide ${roomTagClass[room.slug as (typeof ROOM_SLUGS)[number]]}`}
                    >
                      {room.tag}
                    </span>

                    <h2 className="font-en mt-4 text-sm tracking-[0.15em] text-[#8a6b45]">{room.name}</h2>
                    <p className="mt-1 text-lg text-[#4a3a24]">{room.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-[1.8] text-[#6f5c3f]">{room.text}</p>

                    <span className="group/link mt-6 inline-flex items-center gap-2 text-sm text-[#4a3a24]">
                      {room.cta}
                      <ArrowIcon className="h-4 w-4 text-[#c77b4f] transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe5d3] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">{t("designerEyebrow")}</p>
            <h2 className="mt-3 max-w-md text-xl leading-[1.5] text-[#4a3a24] md:text-2xl">
              {t("designerHeading")}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-[1.8] text-[#6f5c3f]">{t("designerText")}</p>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href="/rooms/meet-the-designer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#8a6b45] px-7 py-3.5 text-sm text-[#faf6ee] transition-all duration-200 hover:scale-[1.03] hover:bg-[#745936]"
            >
              {t("designerCta")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
