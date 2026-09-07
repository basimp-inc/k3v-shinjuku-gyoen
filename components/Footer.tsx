import { getLocale, getTranslations } from "next-intl/server";
import { ArrowIcon } from "./icons";

export default async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const locale = await getLocale();

  /* TOPページに実在する節だけを指す。#concept / #moments は節そのものが無く、
     クリックしてもページ先頭に着地するだけだったので外した（Nav 側では以前から
     同じ2つが外れていた）。 */
  const links = [
    { label: nav("rooms"), href: `/${locale}/rooms` },
    { label: nav("access"), href: `/${locale}#access` },
  ];

  return (
    <footer
      id="contact"
      data-chrome="current"
      className="bg-(--color-text) px-6 py-16 text-(--color-bg-card) md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-en text-2xl font-semibold text-(--color-bg)">K3V</p>
            <p className="mt-3 max-w-sm text-base leading-[1.8] text-(--color-on-dark-soft)">
              {t("tagline")}
            </p>
          </div>

          <a
            href="mailto:stay@k3v-shinjuku-gyoen.jp"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-(--color-accent2) px-7 py-3.5 text-sm text-(--color-cream) transition-all duration-200 hover:scale-[1.03] hover:bg-(--color-accent2-dark)"
          >
            {t("contactCta")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full bg-(--color-line-on-dark) px-4 py-2 text-sm text-(--color-bg-card) transition-colors duration-200 hover:bg-(--color-text-soft)"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-(--color-line-on-dark) pt-6 text-xs text-(--color-on-dark-muted) sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t("copyrightName")}</p>
          <p>{t("address")}</p>
        </div>
      </div>
    </footer>
  );
}
