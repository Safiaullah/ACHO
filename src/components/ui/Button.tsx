import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "light" | "outline-light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";

const variants: Record<Variant, string> = {
  // Warm coral CTA for light backgrounds
  primary:
    "bg-warm text-white shadow-[0_8px_24px_-8px_rgba(226,137,90,0.6)] hover:bg-[#d97c4a] hover:shadow-[0_12px_32px_-8px_rgba(226,137,90,0.7)] hover:-translate-y-0.5",
  // Teal-outline subtle on light
  ghost:
    "border border-teal/30 text-teal hover:border-teal hover:bg-teal hover:text-white",
  // Solid light button for dark backgrounds
  light:
    "bg-cream text-deep hover:bg-white hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]",
  // Outline on dark
  "outline-light":
    "border border-white/25 text-cream hover:border-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}
