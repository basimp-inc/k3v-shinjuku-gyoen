import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

type PlanItem = {
  tag: string;
  title: string;
  text: string;
};

export default async function StayPlans() {
  const t = await getTranslations("stayPage.plans");
  const items = t.raw("items") as PlanItem[];

  return (
    <section id="plans" className="bg-[#efe5d3] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-xl text-2xl leading-[1.5] text-[#4a3a24] md:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.8] text-[#6f5c3f] md:text-base">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 100}>
              <div className="h-full rounded-[18px] bg-[#f3ece1] p-7">
                <span className="font-en inline-flex rounded-full bg-[#efe5d3] px-3 py-1 text-[11px] tracking-wide text-[#8a6b45]">
                  {plan.tag}
                </span>
                <h3 className="mt-4 text-lg text-[#4a3a24]">{plan.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-[#6f5c3f]">{plan.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
