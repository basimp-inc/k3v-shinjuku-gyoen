"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

/**
 * Fixed bottom navigation for mobile screens (hidden on lg+ where the
 * pill top-nav takes over). Highlights the section currently in view
 * and keeps a raised "reserve" button in the center.
 *
 * Drop this file into components/MobileBottomNav.tsx — it only depends
 * on next-intl (already wired up via NextIntlClientProvider) and the
 * existing "nav" translation namespace, so no other files need to change.
 */

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconProps}>
      <path d="M5 19c8-1 12-6 13-13-8 1-13 5-13 13Z" />
      <path d="M6.5 17.5C9 14 11 12 15.5 9.5" />
    </svg>
  );
}

function BedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconProps}>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18v2M21 18v2" />
      <path d="M3 14h18" />
      <path d="M6 11V7.5A1.5 1.5 0 0 1 7.5 6H10a1.5 1.5 0 0 1 1.5 1.5V11" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6 16.8 7.2M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconProps}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

const items = [
  // { id: "concept", icon: LeafIcon },
  { id: "rooms", icon: BedIcon },
] as const;

const itemsRight = [
  // { id: "moments", icon: SunIcon },
  { id: "access", icon: PinIcon },
] as const;

export default function MobileBottomNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = ["concept", "rooms", "moments", "access"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const renderItem = (id: string, Icon: (p: { className?: string }) => React.JSX.Element) => {
    const active = activeId === id;
    const href = id === "rooms" ? `/${locale}/rooms` : `/${locale}#${id}`;
    return (
      <a
        key={id}
        href={href}
        className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] transition-colors duration-200"
      >
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${
            active ? "bg-(--color-bg-card) text-(--color-accent)" : "text-(--color-on-dark-muted)"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className={active ? "text-(--color-text)" : "text-(--color-on-dark-muted)"}>
          {t(id as "concept" | "rooms" | "moments" | "access")}
        </span>
      </a>
    );
  };

  return (
    <nav
      data-chrome="current"
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto flex max-w-md items-center gap-1 rounded-t-3xl border-t border-(--color-bg-card-deep) bg-(--color-bg)/95 px-2 pb-[env(safe-area-inset-bottom)] pt-1 shadow-[0_-8px_24px_-12px_rgb(var(--color-shadow)/0.25)] backdrop-blur-md">
        {items.map(({ id, icon }) => renderItem(id, icon))}

        <a
          href={`/${locale}/stay`}
          className="mx-1 -mt-6 flex h-14 shrink-0 items-center gap-1.5 rounded-full bg-(--color-accent) px-4 text-(--color-cream) shadow-[0_8px_16px_-6px_rgb(var(--color-shadow)/0.35)] transition-transform duration-200 active:scale-95"
        >
          <BedIcon className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap text-[12px] font-medium leading-tight">
            {t("cta")}
          </span>
        </a>

        {itemsRight.map(({ id, icon }) => renderItem(id, icon))}
      </div>
    </nav>
  );
}
