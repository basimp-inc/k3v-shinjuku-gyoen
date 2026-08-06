import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

type Detail = {
  label: string;
  value: string;
};

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
            <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label={t("mapAlt")}>
              <rect width="400" height="340" fill="#f3ece1" />
              <g stroke="#dccca9" strokeWidth="10">
                <path d="M0 100h400" />
                <path d="M0 220h400" />
                <path d="M120 0v340" />
                <path d="M280 0v340" />
              </g>
              <g fill="#c9a874" opacity="0.6">
                <rect x="150" y="130" width="34" height="34" rx="4" />
                <rect x="200" y="150" width="26" height="26" rx="4" />
                <rect x="90" y="60" width="30" height="30" rx="4" />
                <rect x="230" y="70" width="28" height="28" rx="4" />
              </g>
              <circle cx="200" cy="170" r="14" fill="#c77b4f" />
              <circle cx="200" cy="170" r="24" fill="none" stroke="#c77b4f" strokeWidth="2" opacity="0.5" />
              <path
                d="M193 172v-8l7-6 7 6v8h-4v-5h-6v5Z"
                fill="#faf6ee"
              />
            </svg>
            <div className="absolute bottom-5 left-5 rounded-full bg-[#f3ece1]/90 px-4 py-2 text-xs text-[#4a3a24]">
              {t("mapCaption")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
