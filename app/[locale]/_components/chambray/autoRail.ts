/**
 * 近隣SHOP の横スライド — オートディスプレイ（全デザイン共通）
 *
 * Phase 1.5 で A・B 比較していた「手動 / オートプレイ」は、クライアント確認の結果
 * **オートディスプレイで統一**（2026-08-21）。切り替え用の <html data-wc-rail> は
 * 廃止し、Washed Chambray / Chambray Gyoen の両デザインがこの一本を共有する。
 *
 * The run of cards is cloned so the wrap-around is a plain subtraction of one
 * run's width rather than a visible rewind.
 *
 * The drift stops while the pointer is over the rail, while anything inside has
 * focus, while the tab is hidden, and entirely under prefers-reduced-motion —
 * a carousel the reader cannot stop is worse than no carousel.
 *
 * @param root  the design's subtree (.chambray-top / .chambray-gyoen-top)
 * @returns a teardown that removes the clones and every listener
 */
export function wireAutoRail(root: HTMLElement): () => void {
  const rail = root.querySelector<HTMLElement>("[data-wc-rail-track]");
  if (!rail) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let frame = 0;
  let held = false;
  let releaseTimer = 0;
  const release = () => (held = false);
  const hold = () => {
    held = true;
    clearTimeout(releaseTimer);
    releaseTimer = 0;
  };
  /* Wheel and touch scrolling send no pointerdown/up pair, so they get a hold
     that lapses on its own once the reader stops pushing the rail. */
  const nudge = () => {
    held = true;
    clearTimeout(releaseTimer);
    releaseTimer = window.setTimeout(release, 1200);
  };

  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    clearTimeout(releaseTimer);
    releaseTimer = 0;
    rail.querySelectorAll("[data-wc-clone]").forEach((el) => el.remove());
    rail.scrollLeft = 0;
  };

  /* The wrap distance is one full run of cards *including the gap after it*
     — i.e. where the first clone starts. scrollWidth / 2 is not that number:
     the rail carries padding-inline, so half of it lands ~50px short of the
     clone and the loop jumps visibly on every cycle. */
  const loopWidth = () => {
    const first = rail.firstElementChild as HTMLElement | null;
    const clone = rail.querySelector<HTMLElement>("[data-wc-clone]");
    return first && clone ? clone.offsetLeft - first.offsetLeft : 0;
  };

  const start = () => {
    if (frame || reduced) return;
    const run = [...rail.children];
    const addRun = () =>
      run.forEach((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-wc-clone", "");
        clone.setAttribute("aria-hidden", "true");
        rail.append(clone);
      });
    if (!rail.querySelector("[data-wc-clone]")) {
      addRun();
      /* One copy is not always enough: the rail can only scroll
         scrollWidth − clientWidth, and with four cards on a wide viewport
         that maximum falls short of a full loop, so the wrap never fires and
         the rail simply parks at its end. Add runs until a whole loop fits. */
      for (let i = 0; i < 6 && rail.scrollWidth - rail.clientWidth < loopWidth(); i++) addRun();
    }

    /* ~22px/s — slow enough to read a card while it drifts.

       The offset is carried in a float instead of being read back out of
       scrollLeft every frame. scrollLeft quantises to device pixels (0.5px at
       dpr 2), so `scrollLeft = scrollLeft + 0.36` throws the remainder away
       and rounds up on every frame — the rail actually drifted 0.5px/frame,
       ~39% faster than intended. Scaling by the frame delta rather than
       assuming 60fps likewise keeps a 120Hz display from running at double
       speed. The delta is capped so a stalled frame cannot teleport the rail. */
    const SPEED = 22 / 1000; // px per ms
    let offset = rail.scrollLeft;
    let written = rail.scrollLeft;
    let last = 0;
    const step = (now: number) => {
      const loop = loopWidth();
      const elapsed = last ? now - last : 0;
      last = now;
      /* While the reader is holding it, their own scrolling is authoritative —
         otherwise releasing a dragged rail would snap back to our offset. */
      if (held) {
        offset = rail.scrollLeft;
      } else {
        /* Anything that moved the rail behind our back — a wheel event whose
           hold has since lapsed, a keyboard scroll, focus pulling a card into
           view — wins too: carry on from where it left the rail rather than
           yanking it back to the offset we happened to be holding. */
        if (Math.abs(rail.scrollLeft - written) > 1) offset = rail.scrollLeft;
        if (!document.hidden && loop > 0) {
          offset += Math.min(elapsed, 50) * SPEED;
          if (offset >= loop) offset -= loop;
          rail.scrollLeft = offset;
          written = rail.scrollLeft;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  };

  /* The subtree is display:none while its theme is not selected, so the rail
     has no layout to measure until then — (re)start it whenever the theme
     changes, and clear the clones again when the design goes off screen. */
  const sync = () => {
    if (root.getClientRects().length) start();
    else stop();
  };

  rail.addEventListener("pointerenter", hold);
  rail.addEventListener("pointerleave", release);
  rail.addEventListener("pointerdown", hold);
  rail.addEventListener("focusin", hold);
  rail.addEventListener("focusout", release);
  rail.addEventListener("wheel", nudge, { passive: true });
  rail.addEventListener("touchmove", nudge, { passive: true });
  window.addEventListener("pointerup", release);

  sync();
  const themeChange = new MutationObserver(() => requestAnimationFrame(sync));
  themeChange.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  return () => {
    themeChange.disconnect();
    stop();
    rail.removeEventListener("pointerenter", hold);
    rail.removeEventListener("pointerleave", release);
    rail.removeEventListener("pointerdown", hold);
    rail.removeEventListener("focusin", hold);
    rail.removeEventListener("focusout", release);
    rail.removeEventListener("wheel", nudge);
    rail.removeEventListener("touchmove", nudge);
    window.removeEventListener("pointerup", release);
  };
}
