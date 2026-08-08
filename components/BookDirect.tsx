import { getTranslations } from "next-intl/server";
import { ShieldIcon, CalendarIcon, BookIcon, ClockIcon, HeadsetIcon, ArrowIcon } from "./icons";
import Reveal from "./Reveal";
import { Link } from "@/i18n/navigation";

type Benefit = {
  title: string;
  text: string;
};

const icons = [ShieldIcon, CalendarIcon, BookIcon, ClockIcon, HeadsetIcon];

export default async function BookDirect({ showCta = true }: { showCta?: boolean }) {
  const t = await getTranslations("bookDirect");
  const benefits = t.raw("benefits") as Benefit[];

  return (
    <section id="book-direct" className="px-6 py-20 md:px-10 md:py-28">
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

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={benefit.title} delay={i * 80}>
                <div className="h-full rounded-[18px] bg-(--color-bg-card) p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--color-bg) text-(--color-accent)">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base text-(--color-text)">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-[1.8] text-(--color-text-soft)">{benefit.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {showCta && (
          <Reveal delay={150}>
            <Link
              href="/stay"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm text-(--color-cream) transition-all duration-200 hover:scale-[1.03] hover:bg-(--color-accent-dark)"
            >
              {t("cta")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
