import { getTranslations } from "next-intl/server";
import { LeafIcon, CupIcon, HouseIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

type Pillar = {
  tag: string;
  title: string;
  text: string;
};

const icons = [HouseIcon, LeafIcon, CupIcon];

export default async function Concept() {
  const t = await getTranslations("concept");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section id="concept" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl leading-[1.5] text-[#4a3a24] md:text-3xl">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={pillar.tag} delay={i * 100}>
                <div className="h-full rounded-[18px] bg-[#efe5d3] p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ece1] text-[#8a6b45]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-[#c77b4f] px-3 py-1 text-xs text-[#faf6ee]">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg text-[#4a3a24]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#6f5c3f]">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
