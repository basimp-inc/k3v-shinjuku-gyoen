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
    <section id="access" className="bg-(--color-bg-card) px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-(--color-accent)">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl/normal text-(--color-text) md:text-3xl/normal">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-[1.8] text-(--color-text-soft) md:text-base">
            {t("description")}
          </p>

          <dl className="mt-8 space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col gap-1 border-b border-(--color-bg-card-deep) pb-4 sm:flex-row sm:items-baseline sm:gap-6">
                <dt className="w-24 shrink-0 text-xs tracking-wide text-(--color-accent)">
                  {d.label}
                </dt>
                <dd className="text-sm text-(--color-text)">{d.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/stay"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm text-(--color-cream) transition-all duration-200 hover:scale-[1.03] hover:bg-(--color-accent-dark)"
          >
            {t("cta")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[22px] bg-(--color-bg-card-deep)">
            <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label={t("mapAlt")}>
              <rect width="400" height="340" fill="var(--color-bg)" />
              <g stroke="var(--color-line)" strokeWidth="10">
                <path d="M0 100h400" />
                <path d="M0 220h400" />
                <path d="M120 0v340" />
                <path d="M280 0v340" />
              </g>
              <g fill="var(--color-line-strong)" opacity="0.6">
                <rect x="150" y="130" width="34" height="34" rx="4" />
                <rect x="200" y="150" width="26" height="26" rx="4" />
                <rect x="90" y="60" width="30" height="30" rx="4" />
                <rect x="230" y="70" width="28" height="28" rx="4" />
              </g>
              <circle cx="200" cy="170" r="14" fill="var(--color-accent2)" />
              <circle cx="200" cy="170" r="24" fill="none" stroke="var(--color-accent2)" strokeWidth="2" opacity="0.5" />
              <path
                d="M193 172v-8l7-6 7 6v8h-4v-5h-6v5Z"
                fill="var(--color-cream)"
              />
            </svg>
            <div className="absolute bottom-5 left-5 rounded-full bg-(--color-bg)/90 px-4 py-2 text-xs text-(--color-text)">
              {t("mapCaption")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
