"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "./icons";
import LocaleSwitcher from "./LocaleSwitcher";

type NavLink = {
  label: string;
  href: string;
};

type NavClientProps = {
  locale: string;
  links: NavLink[];
  ctaLabel: string;
};

const HIDE_SCROLL_RATIO = 0.25;
const MOBILE_BREAKPOINT = 1024; // matches lg: breakpoint used for the desktop pill nav

export default function NavClient({ locale, links, ctaLabel }: NavClientProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setHidden(false);
        return;
      }

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? scrollY / maxScroll : 0;

      setHidden(scrollRatio > HIDE_SCROLL_RATIO);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#f3ece1]/85 backdrop-blur-md transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
            {ctaLabel}
            <ArrowIcon className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
          </a>
        </div>
      </div>
    </header>
  );
}
