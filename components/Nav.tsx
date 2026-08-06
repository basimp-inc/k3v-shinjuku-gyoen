import { getLocale, getTranslations } from "next-intl/server";
import { ArrowIcon } from "./icons";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Nav() {
  const t = await getTranslations("nav");
  const locale = await getLocale();

  const links = [
    { label: t("concept"), href: `/${locale}#concept` },
    { label: t("rooms"), href: `/${locale}/rooms` },
    { label: t("moments"), href: `/${locale}#moments` },
    { label: t("access"), href: `/${locale}#access` },
  ];

  return (
    <header className='sticky top-0 z-50 w-full bg-[#f3ece1]/85 backdrop-blur-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10 md:py-4'>
        <a href={`/${locale}`} className='font-en text-xl font-semibold tracking-wide text-[#4a3a24] md:text-2xl'>
          K3V
        </a>

        <nav className='hidden items-center gap-2 rounded-full bg-[#efe5d3] p-1.5 lg:flex'>
          {links.map((link) => (
            <a key={link.href} href={link.href} className='rounded-full px-4 py-2 text-sm text-[#6f5c3f] transition-colors duration-200 hover:bg-[#e8dcc4] hover:text-[#4a3a24]'>
              {link.label}
            </a>
          ))}
        </nav>

        <div className='flex shrink-0 items-center gap-2 md:gap-3'>
          <LocaleSwitcher />
          <a href={`/${locale}/stay`} className='group hidden items-center gap-2 rounded-full bg-[#8a6b45] px-5 py-2.5 text-sm text-[#faf6ee] transition-all duration-200 hover:bg-[#745936] hover:scale-[1.03] lg:inline-flex'>
            {t("cta")}
            <ArrowIcon className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
          </a>
        </div>
      </div>
    </header>
  );
}
