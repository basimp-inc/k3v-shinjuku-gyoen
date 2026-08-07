import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

type Detail = {
  label: string;
  value: string;
};

const ADDRESS = "東京都新宿区大久保２丁目２";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default async function Access() {
  const t = await getTranslations("access");
  const details = t.raw("details") as Detail[];

  return (
    <section id="access" className="bg-[#efe5d3] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl/normal text-[#4a3a24] md:text-3xl/normal">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-[1.8] text-[#6f5c3f] md:text-base">
            {t("description")}
          </p>

          <dl className="mt-8 space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col gap-1 border-b border-[#e8dcc4] pb-4 sm:flex-row sm:items-baseline sm:gap-6">
                <dt className="w-24 shrink-0 text-xs tracking-wide text-[#8a6b45]">
                  {d.label}
                </dt>
                <dd className="text-sm text-[#4a3a24]">{d.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/stay"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#8a6b45] px-7 py-3.5 text-sm text-[#faf6ee] transition-all duration-200 hover:scale-[1.03] hover:bg-[#745936]"
          >
            {t("cta")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[22px] bg-[#e8dcc4]">
            <iframe
              title={t("mapAlt")}
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
              allowFullScreen
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-[#f3ece1]/90 px-4 py-2 text-xs text-[#4a3a24]">
              {t("mapCaption")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
