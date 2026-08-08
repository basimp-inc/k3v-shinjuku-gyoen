import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "@/components/icons";
import HeroIllustration from "./HeroIllustration";
import Reveal from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-10">
        <Reveal>
          <p className="font-en mb-5 inline-flex items-center gap-2 rounded-full bg-(--color-bg-card) px-4 py-1.5 text-xs tracking-[0.2em] text-(--color-accent)">
            {t("eyebrow")}
          </p>

          <h1 className="text-[2.35rem] leading-[1.35] text-(--color-text) md:text-[3.1rem] md:leading-[1.3]">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-(--color-text-soft) md:text-base">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/stay"
              className="group inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3.5 text-sm text-(--color-cream) transition-all duration-200 hover:scale-[1.03] hover:bg-(--color-accent-dark)"
            >
              {t("ctaPrimary")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#rooms"
              className="text-sm text-(--color-text-soft) underline decoration-(--color-accent2) decoration-2 underline-offset-4 transition-colors hover:text-(--color-text)"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto aspect-[6/5.2] w-full max-w-md overflow-hidden rounded-[28px] shadow-[0_18px_36px_-20px_rgb(var(--color-shadow)/0.28)]">
            <HeroIllustration alt={t("illustrationAlt")} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
