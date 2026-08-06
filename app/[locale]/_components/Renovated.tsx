import { getTranslations } from "next-intl/server";
import { SparkleIcon, HouseIcon, DropletIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

type Point = {
  title: string;
  text: string;
};

const icons = [HouseIcon, SparkleIcon, DropletIcon];

export default async function Renovated() {
  const t = await getTranslations("renovated");
  const points = t.raw("points") as Point[];

  return (
    <section id="renovated" className="bg-[#efe5d3] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-xl text-2xl/[1.5] text-[#4a3a24] md:text-3xl/[1.5]">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.8] text-[#6f5c3f] md:text-base">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point.title} delay={i * 100}>
                <div className="h-full rounded-[18px] bg-[#f3ece1] p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#efe5d3] text-[#c77b4f]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg text-[#4a3a24]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-[1.8] text-[#6f5c3f]">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
