"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay tier 1–5 (maps to .reveal-N) */
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
};

/* ------------------------------------------------------------------
   One-time IntersectionObserver health probe (module scope).
   In any real browser, an IO callback fires once shortly after
   observe(). If it never does (IO unsupported, or a non-painting
   environment), we mark IO "broken" and force every Reveal visible —
   so content is never permanently stuck at opacity:0. When IO works,
   this never triggers and the genuine scroll-reveal effect is kept.
------------------------------------------------------------------- */
let probeStarted = false;
let ioBroken = false;
const forceVisibleCallbacks = new Set<() => void>();

function startProbe(el: Element) {
  if (probeStarted) return;
  probeStarted = true;

  if (typeof IntersectionObserver === "undefined") {
    ioBroken = true;
    forceVisibleCallbacks.forEach((cb) => cb());
    return;
  }

  let fired = false;
  const probe = new IntersectionObserver(() => {
    fired = true;
    probe.disconnect();
  });
  probe.observe(el);

  window.setTimeout(() => {
    if (!fired) {
      ioBroken = true;
      probe.disconnect();
      forceVisibleCallbacks.forEach((cb) => cb());
    }
  }, 1200);
}

/**
 * Wraps content in a scroll-reveal animation using IntersectionObserver.
 * Adds `.is-visible` when the element enters the viewport (once).
 */
export default function Reveal({ children, className = "", delay, as }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    // If we've already determined IO is unavailable, reveal immediately.
    if (ioBroken) {
      show();
      return;
    }

    // Register for the global failsafe, and kick off the health probe.
    forceVisibleCallbacks.add(show);
    startProbe(el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      forceVisibleCallbacks.delete(show);
    };
  }, []);

  const delayClass = delay ? ` reveal-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
