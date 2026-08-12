"use client";

import { useEffect } from "react";

/**
 * Client-side behaviour for the review-only "Timber Indigo" design:
 * the nav's scrolled state and the scroll reveals.
 *
 * Everything is scoped to the .timber-top subtree, and the whole subtree is
 * display:none unless the theme is active — so when it is not on screen this
 * only costs one querySelector.
 *
 * That display:none is also why the observer is (re)wired from a MutationObserver
 * on <html data-theme> rather than once on mount: a hidden element generates no
 * boxes, so an IntersectionObserver created while the design is off screen never
 * fires, and picking the theme in the switcher would reveal a page of invisible
 * sections. Wiring it the moment the subtree gains layout makes the observer
 * deliver its initial callbacks against the real viewport.
 *
 * Unlike the other two alternative designs, the grain here is a static data URI
 * in the stylesheet, so there is nothing to generate at runtime.
 */
export default function TimberBehaviour() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".timber-top");
    if (!root) return;

    const nav = root.querySelector<HTMLElement>(".nav");
    const onScroll = () => nav?.classList.toggle("solid", window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [...root.querySelectorAll<HTMLElement>(".rv")];
    const pending = () => targets.filter((el) => !el.classList.contains("in"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | undefined;
    const wire = () => {
      io?.disconnect();
      if (!root.getClientRects().length) return; // still hidden — nothing to observe
      if (reduced || !("IntersectionObserver" in window)) {
        pending().forEach((el) => el.classList.add("in"));
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      pending().forEach((el) => io?.observe(el));
    };

    wire();
    const themeChange = new MutationObserver(() => requestAnimationFrame(wire));
    themeChange.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      window.removeEventListener("scroll", onScroll);
      themeChange.disconnect();
      io?.disconnect();
    };
  }, []);

  return null;
}
