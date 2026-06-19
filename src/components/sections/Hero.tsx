"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/config/site";

export default function Hero() {
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const layerC = useRef<HTMLDivElement>(null);

  // Lightweight parallax on the decorative layers
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerA.current) layerA.current.style.transform = `translateY(${y * 0.18}px)`;
        if (layerB.current) layerB.current.style.transform = `translateY(${y * -0.12}px)`;
        if (layerC.current) layerC.current.style.transform = `translateY(${y * 0.28}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-deep px-6 pt-28 pb-16 text-cream">
      <div className="grain" />

      {/* Aurora / blobs */}
      <div
        ref={layerA}
        className="blob float-slow absolute -left-32 top-10 h-[36rem] w-[36rem] bg-teal/40"
      />
      <div
        ref={layerB}
        className="blob absolute -right-24 top-1/4 h-[30rem] w-[30rem] bg-warm/25"
      />
      <div
        ref={layerC}
        className="blob float-slow absolute bottom-0 left-1/3 h-[24rem] w-[24rem] bg-teal-bright/25"
      />

      {/* Soft radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_40%,rgba(10,32,29,0.85)_100%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow mb-6 inline-flex items-center gap-2 text-warm-soft animate-[fadeIn_0.8s_ease]">
            <span className="h-px w-8 bg-warm-soft" />
            {site.fullName}
          </p>

          <h1 className="font-display text-[2.7rem] font-light leading-[1.04] text-balance sm:text-6xl lg:text-[4.2rem]">
            Helping every child{" "}
            <span className="italic text-warm-soft">grow</span>,
            <br className="hidden sm:block" /> as themselves.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-light">
            ACHO delivers individualized, neurodiversity-affirming ABA therapy —
            designed and led by board-certified behavior analysts, and built
            entirely around your child and family.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-warm px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(226,137,90,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d97c4a]"
            >
              Start the conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Explore our services
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-light">
            In-clinic · In-home · Telehealth — New York metro &amp; surrounding areas
          </p>
        </div>

        {/* Floating credential card */}
        <div className="relative hidden lg:block">
          <div className="float-slow rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warm/20 text-2xl">
                🌱
              </div>
              <div>
                <p className="font-display text-xl text-cream">Led by a BCBA</p>
                <p className="text-sm text-muted-light">
                  Every plan, board-certified
                </p>
              </div>
            </div>
            <div className="my-6 h-px w-full bg-white/10" />
            <ul className="space-y-4 text-sm text-muted-light">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-warm-soft">✓</span>
                Individualized, data-driven treatment plans
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-warm-soft">✓</span>
                Family coaching woven into every step
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-warm-soft">✓</span>
                Warm, affirming, strengths-based care
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-light sm:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-muted-light to-transparent" />
      </div>
    </section>
  );
}
