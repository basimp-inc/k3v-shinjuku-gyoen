import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // All locales supported by the site.
  locales: ["ja", "en", "zh"],

  // Used when no locale matches (and as the fallback for "/").
  defaultLocale: "ja",

  // Always show the locale prefix, e.g. /ja, /en, /zh.
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];
