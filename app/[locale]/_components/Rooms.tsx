import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "@/components/icons";
import RoomVisual from "@/components/RoomVisual";
import Reveal from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

type RoomItem = {
  tag: string;
  name: string;
  subtitle: string;
  text: string;
  cta: string;
  alt: string;
  slug: string;
};

const roomStyles = [
  { theme: "warm" as const, tagClass: "bg-[#c77b4f] text-[#faf6ee]" },
  { theme: "vintage" as const, tagClass: "bg-[#3d2f21] text-[#e8dcc4]" },
  { theme: "industrial" as const, tagClass: "bg-[#2e2721] text-[#e8dcc4]" },
];

export default async function Rooms() {
  const t = await getTranslations("rooms");
  const items = t.raw("items") as RoomItem[];
  const rooms = items.map((item, i) => ({ ...item, ...roomStyles[i] }));

  return (
    <section id="rooms" className="bg-[#efe5d3] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-xl text-2xl leading-[1.5] text-[#4a3a24] md:text-3xl">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.8] text-[#6f5c3f] md:text-base">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[18px] bg-[#f3ece1] transition-transform duration-300 hover:-translate-y-1.5">
                <div className="aspect-[4/3] overflow-hidden rounded-t-[18px] transition-transform duration-500 group-hover:scale-[1.03]">
                  <RoomVisual theme={room.theme} alt={room.alt} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-[11px] tracking-wide ${room.tagClass}`}>
                      {room.tag}
                    </span>
                  </div>

                  <h3 className="font-en mt-4 text-sm tracking-[0.15em] text-[#8a6b45]">
                    {room.name}
                  </h3>
                  <p className="mt-1 text-lg text-[#4a3a24]">{room.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-[1.8] text-[#6f5c3f]">
                    {room.text}
                  </p>

                  <Link
                    href={`/rooms/${room.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm text-[#4a3a24]"
                  >
                    {room.cta}
                    <ArrowIcon className="h-4 w-4 text-[#c77b4f] transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={rooms.length * 100}>
          <Link
            href="/rooms"
            className="group/link mt-10 inline-flex items-center gap-2 text-sm text-[#4a3a24]"
          >
            {t("viewAll")}
            <ArrowIcon className="h-4 w-4 text-[#c77b4f] transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
