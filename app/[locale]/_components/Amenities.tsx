import { getTranslations } from "next-intl/server";
import {
  SnowflakeIcon,
  TvIcon,
  WasherIcon,
  WifiIcon,
  CupIcon,
  TowelIcon,
  DropletIcon,
  SunIcon,
} from "@/components/icons";
import Reveal from "@/components/Reveal";

type Item = {
  label: string;
};

const icons = [SnowflakeIcon, TvIcon, WasherIcon, WifiIcon, CupIcon, TowelIcon, DropletIcon, SunIcon];

export default async function Amenities() {
  const t = await getTranslations("amenities");
  const items = t.raw("items") as Item[];

  return (
    <section id="amenities" className="px-6 py-20 md:px-10 md:py-28">
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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.label} delay={i * 60}>
                <div className="flex h-full flex-col items-center gap-3 rounded-[18px] bg-(--color-bg-card) p-5 text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-(--color-bg) text-(--color-accent)">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="text-sm text-(--color-text)">{item.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-sm leading-[1.8] text-(--color-text-soft)">
            {t("note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
