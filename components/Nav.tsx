import { getLocale, getTranslations } from "next-intl/server";
import NavClient from "./NavClient";

export default async function Nav() {
  const t = await getTranslations("nav");
  const locale = await getLocale();

  const links = [
    { label: t("rooms"), href: `/${locale}/rooms` },
    { label: t("access"), href: `/${locale}#access` },
  ];

  return <NavClient locale={locale} links={links} ctaLabel={t("cta")} />;
}
