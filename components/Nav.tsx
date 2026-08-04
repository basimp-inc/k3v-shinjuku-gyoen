import { getTranslations } from "next-intl/server";
import { ArrowIcon } from "./icons";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Nav() {
  const t = await getTranslations("nav");

  const links = [
    { label: t("concept"), href: "#concept" },
    { label: t("rooms"), href: "#rooms" },
    { label: t("moments"), href: "#moments" },
    { label: t("access"), href: "#access" },
  ];

  return (
    <header className='hidden lg:block sticky top-0 z-50 w-full bg-[#f3ece1]/85 backdrop-blur-md'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10'>
        <a href='#top' className='font-en text-2xl font-semibold tracking-wide text-[#4a3a24]'>
          K3v
        </a>

        <nav className='hidden items-center gap-2 rounded-full bg-[#efe5d3] p-1.5 lg:flex'>
          {links.map((link) => (
            <a key={link.href} href={link.href} className='rounded-full px-4 py-2 text-sm text-[#6f5c3f] transition-colors duration-200 hover:bg-[#e8dcc4] hover:text-[#4a3a24]'>
              {link.label}
            </a>
          ))}
        </nav>

        <div className='flex shrink-0 items-center gap-3'>
          <LocaleSwitcher />
          <a href='#stay' className='group inline-flex items-center gap-2 rounded-full bg-[#8a6b45] px-5 py-2.5 text-sm text-[#faf6ee] transition-all duration-200 hover:bg-[#745936] hover:scale-[1.03]'>
            {t("cta")}
            <ArrowIcon className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
          </a>
        </div>
      </div>

      {/* Mobile menu row */}
      <div className='flex gap-2 overflow-x-auto px-6 pb-4 lg:hidden'>
        {links.map((link) => (
          <a key={link.href} href={link.href} className='shrink-0 rounded-full bg-[#efe5d3] px-4 py-2 text-sm text-[#6f5c3f]'>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
