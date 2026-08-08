"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");

  return (
    <div
      className="flex items-center gap-1 rounded-full bg-(--color-bg-card) p-1"
      aria-label={t("label")}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
              active
                ? "bg-(--color-accent) text-(--color-cream)"
                : "text-(--color-text-soft) hover:bg-(--color-bg-card-deep) hover:text-(--color-text)"
            }`}
          >
            {t(code)}
          </Link>
        );
      })}
    </div>
  );
}
