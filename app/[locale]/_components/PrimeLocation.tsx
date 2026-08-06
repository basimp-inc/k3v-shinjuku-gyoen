import { getTranslations } from "next-intl/server";
import { PinIcon, StoreIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

type Stat = {
  value: string;
  label: string;
};

type Nearby = {
  label: string;
  distance: string;
};

export default async function PrimeLocation() {
  const t = await getTranslations("primeLocation");
  const stats = t.raw("stats") as Stat[];
  const nearby = t.raw("nearby") as Nearby[];

  return (
    <section id="location" className="px-6 py-20 md:px-10 md:py-28">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex h-full items-center gap-4 rounded-[18px] bg-[#efe5d3] p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3ece1] text-[#8a6b45]">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg text-[#4a3a24]">{stat.value}</p>
                  <p className="mt-0.5 text-xs/[1.5] text-[#6f5c3f]">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap gap-3 rounded-[18px] bg-[#f6ceac]/25 p-6">
            {nearby.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-[#faf6ee] px-4 py-2 text-sm text-[#4a3a24]"
              >
                <StoreIcon className="h-4 w-4 text-[#c77b4f]" />
                {item.label}
                <span className="text-xs text-[#8a6b45]">{item.distance}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
