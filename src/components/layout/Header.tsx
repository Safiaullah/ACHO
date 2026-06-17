"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens with a dark hero/header, so when the bar is transparent
  // (not scrolled) it sits over a dark background and needs light text.
  const lightText = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-black/5 bg-cream/85 backdrop-blur-xl py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label={`${site.name} home`} className="relative z-50">
          <Logo
            className={`h-8 w-auto transition-colors duration-300 ${
              lightText ? "text-cream" : "text-ink"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm font-medium transition-colors ${
                  active
                    ? lightText
                      ? "text-warm-soft"
                      : "text-teal"
                    : lightText
                      ? "text-cream/85 hover:text-cream"
                      : "text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              lightText
                ? "bg-cream text-deep hover:bg-white"
                : "bg-teal text-white hover:bg-teal-bright"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              lightText ? "bg-cream" : "bg-ink"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              lightText ? "bg-cream" : "bg-ink"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              lightText ? "bg-cream" : "bg-ink"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-6 pt-28 transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-black/5 py-4 font-display text-2xl text-ink"
              style={{
                transitionDelay: open ? `${i * 50 + 100}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-4 text-base font-semibold text-white"
        >
          Get Started
        </Link>
        <div className="mt-auto pb-10 pt-8 text-sm text-muted">
          <a href={site.phoneHref} className="block font-medium text-ink">
            {site.phone}
          </a>
          <a href={site.emailHref} className="block">
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
