"use client";

import { useEffect } from "react";

/**
 * Client-side behaviour for the review-only "Denim Sakura" design:
 * paper grain, the nav's scrolled state, and scroll reveals.
 *
 * Everything is scoped to the .denim-top subtree, and the whole subtree is
 * display:none unless the theme is active — so when it is not on screen this
 * only costs one querySelector.
 */
export default function DenimBehaviour() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".denim-top");
    if (!root) return;

    // Grain, generated once as a data URI rather than shipped as an asset.
    const noise =
      "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>" +
      "<filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'>" +
      "<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='7' stitchTiles='stitch'/>" +
      "<feColorMatrix values='0 0 0 0 .52 0 0 0 0 .56 0 0 0 0 .60 .30 .30 .30 0 0'/>" +
      "</filter><rect width='220' height='220' filter='url(#g)'/></svg>";
    root.style.setProperty("--dn-grain", `url("data:image/svg+xml,${encodeURIComponent(noise)}")`);

    const nav = root.querySelector<HTMLElement>(".nav");
    const onScroll = () => nav?.classList.toggle("stuck", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [
      ...root.querySelectorAll<HTMLElement>(
        ".c-visual, .c-text, .care, .rooms-head, .room, .loc .txt, .mapbox," +
          " .exp-head, .mood, .pullquote, .cta-body, .perks"
      ),
    ];
    targets.forEach((el) => el.classList.add("rv"));
    const pending = () => targets.filter((el) => !el.classList.contains("in"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Wired from the theme attribute, not once on mount: this subtree is
       display:none until the theme is picked, and a hidden element generates no
       boxes — an observer created while it is off screen never fires, which
       would leave every section invisible the moment the design is selected. */
    let io: IntersectionObserver | undefined;
    const wire = () => {
      io?.disconnect();
      if (!root.getClientRects().length) return;
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
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
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
