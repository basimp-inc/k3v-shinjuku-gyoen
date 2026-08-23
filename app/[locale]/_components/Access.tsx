import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

type Detail = {
  label: string;
  value: string;
};

const ADDRESS = "東京都新宿区新宿１丁目１９−６";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

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

          {/* 2026-08-22 — スマホでラベルと値が上下に割れて1件2行になっていた。
              値を「事実そのもの」まで短くしたので、どの幅でも1行の組で置ける。
              ラベルは幅を固定して値の左端を揃える（階層は色と太さで取る）。 */}
          <dl className="mt-8 space-y-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-baseline gap-4 border-b border-(--color-bg-card-deep) pb-3 sm:gap-6"
              >
                <dt className="w-20 shrink-0 text-[13px] font-medium tracking-wide text-(--color-accent) sm:w-24">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
