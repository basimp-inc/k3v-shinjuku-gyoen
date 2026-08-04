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
      className="flex items-center gap-1 rounded-full bg-[#efe5d3] p-1"
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
                ? "bg-[#8a6b45] text-[#faf6ee]"
                : "text-[#6f5c3f] hover:bg-[#e8dcc4] hover:text-[#4a3a24]"
            }`}
          >
            {t(code)}
          </Link>
        );
      })}
    </div>
  );
}
