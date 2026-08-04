import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "./icons";

export default async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  const links = [
    { label: nav("concept"), href: "#concept" },
    { label: nav("rooms"), href: "#rooms" },
    { label: nav("moments"), href: "#moments" },
    { label: nav("access"), href: "#access" },
  ];

  return (
    <footer id="stay" className="bg-[#4a3a24] px-6 py-16 text-[#efe5d3] md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-en text-3xl font-semibold text-[#f3ece1]">K3v</p>
            <p className="mt-3 max-w-sm text-sm leading-[1.8] text-[#c9bda3]">
              {t("tagline")}
            </p>
          </div>

          <a
            href="mailto:stay@k3v-tokyo.jp"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#c77b4f] px-7 py-3.5 text-sm text-[#faf6ee] transition-all duration-200 hover:scale-[1.03] hover:bg-[#b96b40]"
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
              className="rounded-full bg-[#5c4a30] px-4 py-2 text-sm text-[#efe5d3] transition-colors duration-200 hover:bg-[#6f5c3f]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#5c4a30] pt-6 text-xs text-[#a99878] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t("copyrightName")}</p>
          <p>{t("address")}</p>
        </div>
      </div>
    </footer>
  );
}
