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
 * Every entry other than "current" goes further than colour: "gyoen-green"
 * and "washed-chambray" replace the whole TOP page — layout, typography,
 * materials and chrome. Those designs live in app/gyoen-design.css and
 * app/chambray-design.css, which also carry their own removal steps.
 *
 * The four designs dropped after the 2026-08-17 review (denim-sakura /
 * timber-indigo / kraft-riso / doma-ceramic) were removed from this repo and
 * archived in ~/workbench/design-mock-library.
 *
 * Selecting a theme also rewrites the ?theme= query string in place — the URL
 * in the address bar is always a shareable link to exactly what is on screen.
 * Only the query string is touched, so the /ja | /en | /zh locale prefix and
 * the rest of the path survive untouched.
 */

const STORAGE_KEY = "k3v-theme";

/**
 * Phase 1.5 — the two Washed Chambray variations the client asked to compare
 * (2026-08-17 feedback). They are independent of the theme: each writes its own
 * <html data-wc-*> attribute, so any combination is reachable and shareable.
 * Only shown while Washed Chambray is the active theme.
 */
const VARIATIONS = [
  {
    attr: "data-wc-rail",
    param: "wcRail",
    storage: "k3v-wc-rail",
    title: "近隣SHOPの見せ方",
    options: [
      { id: "manual", label: "横スライド（手動）", note: "指/トラックパッドで送る" },
      { id: "auto", label: "横スライド（オートプレイ）", note: "ゆっくり自動で流れる" },
    ],
  },
  {
    attr: "data-wc-footer",
    param: "wcFooter",
    storage: "k3v-wc-footer",
    title: "最終セクションの地",
    options: [
      { id: "plaster", label: "素材感のある塗り壁", note: "明るいエクリュ＋塗り肌" },
      { id: "wood", label: "カジュアルなウッド柄", note: "ハニーオーク・板の継ぎ目" },
      { id: "moquette", label: "モケットグリーン", note: "織り目のあるセージ" },
    ],
  },
] as const;

const THEMES = [
  { id: "current", label: "Current", note: "現行" },
  { id: "gyoen-green", label: "Gyoen Green", note: "御苑グリーン×デニム" },
  { id: "washed-chambray", label: "Washed Chambray", note: "薄デニム×無垢材×御苑緑×影" },
] as const;

const INIT_SCRIPT = `(function(){try{
var p=new URLSearchParams(location.search);
var q=p.get('theme');
var ids=${JSON.stringify(THEMES.map((t) => t.id))};
var t=(q&&ids.indexOf(q)>-1)?q:(localStorage.getItem('${STORAGE_KEY}')||'current');
if(ids.indexOf(t)<0)t='current';
document.documentElement.setAttribute('data-theme',t);
localStorage.setItem('${STORAGE_KEY}',t);
${JSON.stringify(
  VARIATIONS.map((v) => ({
    attr: v.attr,
    param: v.param,
    storage: v.storage,
    ids: v.options.map((o) => o.id),
  }))
)}.forEach(function(v){
var s=p.get(v.param);
var val=(s&&v.ids.indexOf(s)>-1)?s:(localStorage.getItem(v.storage)||v.ids[0]);
if(v.ids.indexOf(val)<0)val=v.ids[0];
document.documentElement.setAttribute(v.attr,val);
localStorage.setItem(v.storage,val);
});
}catch(e){}})();`;

/** <html data-theme> is owned by the inline script, not by React, so read it as
 *  external state. getServerSnapshot returns null, which also serves as the
 *  "not hydrated yet" signal — on the server we emit the script and nothing else. */
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", ...VARIATIONS.map((v) => v.attr)],
  });
  return () => observer.disconnect();
}

/** Theme plus every variation, as one string — the switcher only ever needs to
 *  re-render when something in that set changes. */
function readState() {
  const el = document.documentElement;
  return [el.getAttribute("data-theme") || "current", ...VARIATIONS.map((v) => el.getAttribute(v.attr) || "")].join(
    "|"
  );
}

export default function ThemeMock() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const state = useSyncExternalStore(subscribeToTheme, readState, () => null);
  const active = state?.split("|")[0] ?? null;

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

  function selectVariation(v: (typeof VARIATIONS)[number], id: string) {
    document.documentElement.setAttribute(v.attr, id);
    try {
      localStorage.setItem(v.storage, id);
    } catch {
      /* private mode — the variation just won't persist across pages */
    }
    const url = new URL(window.location.href);
    url.searchParams.set(v.param, id);
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

            {/* Washed Chambray ships two open questions for this review, so its
                variations hang off the theme list rather than becoming themes
                of their own — the client picks a design first, then a detail. */}
            {active === "washed-chambray" &&
              VARIATIONS.map((v) => {
                const currentId = document.documentElement.getAttribute(v.attr) || v.options[0].id;
                return (
                  <div key={v.attr} className="border-t border-neutral-100">
                    <p className="px-4 pt-2.5 pb-1 text-[11px] font-semibold tracking-wide text-neutral-500">
                      {v.title}
                    </p>
                    <ul className="pb-1">
                      {v.options.map((o) => {
                        const isActive = o.id === currentId;
                        return (
                          <li key={o.id}>
                            <button
                              type="button"
                              onClick={() => selectVariation(v, o.id)}
                              aria-current={isActive ? "true" : undefined}
                              className={`flex w-full items-center gap-3 px-4 py-2 text-left transition-colors ${
                                isActive ? "bg-neutral-100" : "hover:bg-neutral-50"
                              }`}
                            >
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-[13px] font-medium text-neutral-900">
                                  {o.label}
                                </span>
                                <span className="block truncate text-[11px] text-neutral-500">{o.note}</span>
                              </span>
                              {isActive && <span className="shrink-0 text-[13px] text-neutral-900">✓</span>}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

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
