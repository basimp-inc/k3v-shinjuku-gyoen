"use client";

import { useEffect } from "react";

import { wireAutoRail } from "./autoRail";

/**
 * TOPページのクライアント側の振る舞い：ナビのスクロール状態、`.rv` の
 * スクロールリビール、近隣SHOP の横スライドのオートディスプレイ（./autoRail.ts）。
 *
 * すべて .top-page のサブツリーにスコープしてある。
 */
export default function TopBehaviour() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".top-page");
    if (!root) return;

    const nav = root.querySelector<HTMLElement>(".nav");
    const onScroll = () => nav?.classList.toggle("solid", window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [...root.querySelectorAll<HTMLElement>(".rv")];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | undefined;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
      );
      targets.forEach((el) => io?.observe(el));
    }

    const unwireRail = wireAutoRail(root);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      unwireRail();
    };
  }, []);

  return null;
}
