import { getTranslations } from "next-intl/server";
import { PinIcon, SparkleIcon, HouseIcon, WasherIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

type Category = {
  label: string;
};

const icons = [PinIcon, SparkleIcon, HouseIcon, WasherIcon];

export default async function Reviews() {
  const t = await getTranslations("reviews");
  const categories = t.raw("categories") as Category[];

  return (
    <section id="reviews" className="bg-(--color-bg-card) px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-(--color-accent)">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-xl text-2xl/[1.5] text-(--color-text) md:text-3xl/[1.5]">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.8] text-(--color-text-soft) md:text-base">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={category.label} delay={i * 80}>
                <div className="flex h-full flex-col items-center gap-3 rounded-[18px] border-2 border-dashed border-(--color-line) bg-(--color-bg)/60 p-6 text-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--color-bg) text-(--color-accent)">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-(--color-text)">{category.label}</p>
                  <span className="rounded-full bg-(--color-bg-card-deep) px-3 py-1 text-[11px] tracking-wide text-(--color-accent)">
                    {t("comingSoon")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
