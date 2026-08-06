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
    <section id="reviews" className="bg-[#efe5d3] px-6 py-20 md:px-10 md:py-28">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={category.label} delay={i * 80}>
                <div className="flex h-full flex-col items-center gap-3 rounded-[18px] border-2 border-dashed border-[#dccca9] bg-[#f3ece1]/60 p-6 text-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ece1] text-[#8a6b45]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-[#4a3a24]">{category.label}</p>
                  <span className="rounded-full bg-[#e8dcc4] px-3 py-1 text-[11px] tracking-wide text-[#8a6b45]">
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
