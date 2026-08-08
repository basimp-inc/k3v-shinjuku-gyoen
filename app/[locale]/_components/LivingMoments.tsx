import { getTranslations } from "next-intl/server";
import { CupIcon, SunIcon, BookIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

type Moment = {
  time: string;
  title: string;
  text: string;
};

const visuals = [
  { icon: CupIcon, grad: "from-(--color-glow) to-(--color-bg-card)" },
  { icon: BookIcon, grad: "from-(--color-bg-card-deep) to-(--color-line)" },
  { icon: CupIcon, grad: "from-(--color-bg-card) to-(--color-bg)" },
  { icon: SunIcon, grad: "from-(--color-glow) to-(--color-line)" },
  { icon: BookIcon, grad: "from-(--color-bg-card-deep) to-(--color-bg)" },
];

export default async function LivingMoments() {
  const t = await getTranslations("moments");
  const moments = t.raw("items") as Moment[];

  return (
    <section id="moments" className="px-6 py-20 md:px-10 md:py-28">
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
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {moments.map((moment, i) => {
            const { icon: Icon, grad } = visuals[i % visuals.length];
            return (
              <Reveal key={moment.title} delay={i * 100}>
                <div className="overflow-hidden rounded-[18px] bg-(--color-bg-card) transition-transform duration-300 hover:-translate-y-1">
                  <div className={`flex aspect-[5/4] items-center justify-center bg-gradient-to-br ${grad}`}>
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-(--color-bg)/80 text-(--color-accent)">
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="font-en text-xs tracking-[0.2em] text-(--color-accent2)">
                      {moment.time}
                    </span>
                    <h3 className="mt-2 text-lg text-(--color-text)">{moment.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-(--color-text-soft)">
                      {moment.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
