import { getTranslations } from "next-intl/server";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

type Step = {
  step: string;
  title: string;
  text: string;
};

export default async function StayHowToBook() {
  const t = await getTranslations("stayPage.reservation");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="how-to-book" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-(--color-accent)">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-xl text-2xl/[1.5] text-(--color-text) md:text-3xl/[1.5]">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-(--measure-lead) text-base leading-[1.8] text-(--color-text-soft) md:text-lg">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="h-full rounded-[18px] bg-(--color-bg-card) p-7">
                <span className="font-en text-3xl text-(--color-line-strong)">{step.step}</span>
                <h3 className="mt-3 text-xl text-(--color-text)">{step.title}</h3>
                <p className="mt-2 text-base leading-[1.8] text-(--color-text-soft)">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm text-(--color-cream) transition-all duration-200 hover:scale-[1.03] hover:bg-(--color-accent-dark)"
          >
            {t("cta")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
