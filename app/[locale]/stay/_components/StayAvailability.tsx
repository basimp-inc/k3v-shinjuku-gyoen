import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { roomThemes, roomTagClass, type RoomSlug } from "@/lib/rooms";
import RoomVisual from "@/components/RoomVisual";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

type RoomItem = {
  tag: string;
  name: string;
  subtitle: string;
  alt: string;
  slug: string;
};

export default async function StayAvailability() {
  const t = await getTranslations("stayPage.availability");
  const rooms = await getTranslations("rooms");
  const items = rooms.raw("items") as RoomItem[];

  return (
    <section id="availability" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-xl text-2xl leading-[1.5] text-[#4a3a24] md:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.8] text-[#6f5c3f] md:text-base">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {items.map((room, i) => (
            <Reveal key={room.slug} delay={i * 80}>
              <Link
                href={`/rooms/${room.slug}`}
                className="group flex items-center gap-4 rounded-[16px] bg-[#efe5d3] p-3 transition-colors duration-200 hover:bg-[#e8dcc4]"
              >
                <div className="h-16 w-20 shrink-0 overflow-hidden rounded-[10px]">
                  <RoomVisual theme={roomThemes[room.slug as RoomSlug]} alt={room.alt} />
                </div>
                <div className="min-w-0">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] tracking-wide ${roomTagClass[room.slug as RoomSlug]}`}
                  >
                    {room.tag}
                  </span>
                  <p className="mt-1.5 truncate text-sm text-[#4a3a24]">{room.subtitle}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 rounded-[18px] bg-[#f3ece1] p-6">
            <p className="text-sm leading-[1.8] text-[#8a6b45]">{t("pendingNote")}</p>
            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#8a6b45] px-7 py-3.5 text-sm text-[#faf6ee] transition-all duration-200 hover:scale-[1.03] hover:bg-[#745936]"
            >
              {t("cta")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
