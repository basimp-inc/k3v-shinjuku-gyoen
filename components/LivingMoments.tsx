import { getTranslations } from "next-intl/server";
import { CupIcon, SunIcon, BookIcon } from "./icons";
import Reveal from "./Reveal";

type Moment = {
  time: string;
  title: string;
  text: string;
};

const visuals = [
  { icon: CupIcon, grad: "from-[#f6ceac] to-[#efe5d3]" },
  { icon: SunIcon, grad: "from-[#e8dcc4] to-[#dccca9]" },
  { icon: BookIcon, grad: "from-[#efe5d3] to-[#f3ece1]" },
];

export default async function LivingMoments() {
  const t = await getTranslations("moments");
  const moments = t.raw("items") as Moment[];

  return (
    <section id="moments" className="px-6 py-20 md:px-10 md:py-28">
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
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {moments.map((moment, i) => {
            const { icon: Icon, grad } = visuals[i % visuals.length];
            return (
              <Reveal key={moment.title} delay={i * 100}>
                <div className="overflow-hidden rounded-[18px] bg-[#efe5d3] transition-transform duration-300 hover:-translate-y-1">
                  <div className={`flex aspect-[5/4] items-center justify-center bg-gradient-to-br ${grad}`}>
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f3ece1]/80 text-[#8a6b45]">
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="font-en text-xs tracking-[0.2em] text-[#c77b4f]">
                      {moment.time}
                    </span>
                    <h3 className="mt-2 text-lg text-[#4a3a24]">{moment.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-[#6f5c3f]">
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
