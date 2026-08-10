import { getLocale, getTranslations } from "next-intl/server";
import NavClient from "./NavClient";

export default async function Nav() {
  const t = await getTranslations("nav");
  const locale = await getLocale();

  const links = [
    // { label: t("concept"), href: `/${locale}#concept` },
    { label: t("rooms"), href: `/${locale}/rooms` },
    // { label: t("moments"), href: `/${locale}#moments` },
    { label: t("access"), href: `/${locale}#access` },
  ];

  return <NavClient locale={locale} links={links} ctaLabel={t("cta")} />;
}
