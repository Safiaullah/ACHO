import Image from "next/image";
import { site } from "@/config/site";

type Props = { className?: string };

/**
 * ACHO logo — the circular "A.C.H.O" infinity badge.
 *
 * Rendered as a clean circular "coin" (the source PNG's white corners are
 * clipped away) with a defining ring + shadow so it reads on both the dark
 * hero and the cream scrolled header. On hover the cyclic mark spins a full
 * turn, lifts, and gains a warm glow — gated behind motion-safe so
 * reduced-motion users get the calm static badge.
 *
 * Size by setting a height utility on `className` (e.g. h-8); width follows.
 * Any text-color utilities passed in are harmless no-ops on the raster mark.
 */
export default function Logo({ className = "h-8 w-auto" }: Props) {
  return (
    <span
      className={`group/logo relative inline-flex items-center justify-center ${className}`}
    >
      {/* Warm glow that blooms on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-warm/50 opacity-0 blur-lg transition-opacity duration-500 ease-out group-hover/logo:opacity-100"
      />
      <Image
        src="/acho-logo.png"
        alt={`${site.name} — ${site.fullName}`}
        width={512}
        height={512}
        className="h-full w-auto rounded-full bg-white shadow-sm ring-1 ring-black/10 transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover/logo:shadow-lg motion-safe:group-hover/logo:rotate-[360deg] motion-safe:group-hover/logo:scale-110"
      />
    </span>
  );
}
