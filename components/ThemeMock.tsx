"use client";

import { useState, useSyncExternalStore } from "react";

/**
 * REVIEW-ONLY palette switcher. Not part of the product.
 *
 * To remove before launch:
 *   1. delete this file
 *   2. delete the <ThemeMock /> line in app/[locale]/layout.tsx
 * (`suppressHydrationWarning` on <html> can stay or go — it is inert either way.)
 *
 * How it works: the inline script below sets <html data-theme="…"> from
 * ?theme= (falling back to localStorage, then "current") before the page
 * paints, so there is no flash of the wrong palette. Every colour in the site
 * resolves through a --color-* variable, and app/globals.css redefines those
 * per [data-theme="…"], so nothing else has to know a theme exists.
 *
 * Every entry other than "current" goes further than colour: "gyoen-green",
 * "denim-sakura", "timber-indigo", "washed-chambray", "kraft-riso" and
 * "doma-ceramic" replace the whole TOP page — layout, typography, materials and
 * chrome. Those designs live in app/gyoen-design.css, app/denim-design.css,
 * app/timber-design.css, app/chambray-design.css, app/kraft-design.css and
 * app/doma-design.css, which also carry their own removal steps.
 *
 * Selecting a theme also rewrites the ?theme= query string in place — the URL
 * in the address bar is always a shareable link to exactly what is on screen.
 * Only the query string is touched, so the /ja | /en | /zh locale prefix and
 * the rest of the path survive untouched.
 */

const STORAGE_KEY = "k3v-theme";

const THEMES = [
  { id: "current", label: "Current", note: "現行" },
  { id: "gyoen-green", label: "Gyoen Green", note: "御苑グリーン×デニム" },
  { id: "denim-sakura", label: "Denim Sakura", note: "デニムスカイ×御苑緑×桜" },
  { id: "timber-indigo", label: "Timber Indigo", note: "生デニム×無垢材×御苑緑×影" },
  { id: "washed-chambray", label: "Washed Chambray", note: "薄デニム×無垢材×御苑緑×影" },
  { id: "kraft-riso", label: "Kraft Riso", note: "クラフト紙×リソグラフ3色刷り" },
  { id: "doma-ceramic", label: "Doma Ceramic", note: "和紙×三つの釉×土間" },
] as const;

const INIT_SCRIPT = `(function(){try{
var q=new URLSearchParams(location.search).get('theme');
var ids=${JSON.stringify(THEMES.map((t) => t.id))};
var t=(q&&ids.indexOf(q)>-1)?q:(localStorage.getItem('${STORAGE_KEY}')||'current');
if(ids.indexOf(t)<0)t='current';
document.documentElement.setAttribute('data-theme',t);
localStorage.setItem('${STORAGE_KEY}',t);
}catch(e){}})();`;

/** <html data-theme> is owned by the inline script, not by React, so read it as
 *  external state. getServerSnapshot returns null, which also serves as the
 *  "not hydrated yet" signal — on the server we emit the script and nothing else. */
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export default function ThemeMock() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const active = useSyncExternalStore(
    subscribeToTheme,
    () => document.documentElement.getAttribute("data-theme") || "current",
    () => null
  );

  function select(id: string) {
    // The MutationObserver above turns this into a re-render.
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* private mode — the theme just won't persist across pages */
    }
    const url = new URL(window.location.href);
    url.searchParams.set("theme", id);
    window.history.replaceState(null, "", url);
    setCopied(false);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the address bar still holds the right URL */
    }
  }

  const script = <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />;
  if (active === null) return script;

  const current = THEMES.find((t) => t.id === active) ?? THEMES[0];

  return (
    <>
      {script}
      <div
        data-theme-mock=""
        className="fixed right-4 bottom-28 z-60 flex flex-col items-end gap-2 font-sans lg:bottom-6"
      >
        {open && (
          <div className="w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
            <p className="border-b border-neutral-100 px-4 py-2.5 text-[11px] font-semibold tracking-wide text-neutral-500">
              配色プレビュー（レビュー用）
            </p>

            <ul>
              {THEMES.map((t) => {
                const isActive = t.id === active;
                return (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => select(t.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        isActive ? "bg-neutral-100" : "hover:bg-neutral-50"
                      }`}
                    >
                      {/* data-theme on the swatch itself, so it always previews
                          the real palette without duplicating any values */}
                      <span data-theme={t.id} className="flex shrink-0 gap-0.5">
                        <i className="h-6 w-2.5 rounded-l-sm bg-(--color-bg)" />
                        <i className="h-6 w-2.5 bg-(--color-bg-card-deep)" />
                        <i className="h-6 w-2.5 bg-(--color-accent)" />
                        <i className="h-6 w-2.5 rounded-r-sm bg-(--color-accent2)" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13px] font-medium text-neutral-900">
                          {t.label}
                        </span>
                        <span className="block truncate text-[11px] text-neutral-500">{t.note}</span>
                      </span>
                      {isActive && <span className="shrink-0 text-[13px] text-neutral-900">✓</span>}
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={copyLink}
              className="w-full border-t border-neutral-100 px-4 py-2.5 text-left text-[12px] text-neutral-600 transition-colors hover:bg-neutral-50"
            >
              {copied ? "コピーしました" : "この配色のリンクをコピー"}
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-2 pr-4 pl-2.5 shadow-xl transition-transform hover:scale-[1.03]"
        >
          <span data-theme={current.id} className="flex shrink-0 gap-0.5">
            <i className="h-5 w-2 rounded-l-sm bg-(--color-bg)" />
            <i className="h-5 w-2 bg-(--color-accent)" />
            <i className="h-5 w-2 rounded-r-sm bg-(--color-accent2)" />
          </span>
          <span className="text-[12px] font-medium whitespace-nowrap text-neutral-900">
            {current.label}
          </span>
        </button>
      </div>
    </>
  );
}
