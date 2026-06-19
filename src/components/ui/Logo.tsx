import Image from "next/image";
import { site } from "@/config/site";

type Props = {
  className?: string;
  /** True when the logo sits on a dark background (dark hero, footer). */
  onDark?: boolean;
};

/**
 * ACHO primary logo — the horizontal infinity lockup (feather + stethoscope +
 * EKG) with the A.C.H.O. wordmark, on a transparent background.
 *
 * Two tones are cross-faded by `onDark`: the navy wordmark for light surfaces
 * (cream / scrolled header) and a cream-wordmark variant for dark surfaces
 * (dark hero, footer). Size with a height utility on `className` (e.g. h-12).
 */
export default function Logo({ className = "h-12 w-auto", onDark = false }: Props) {
  const img =
    "h-full w-auto object-contain transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-safe:group-hover/logo:scale-105";
  return (
    <span className={`group/logo relative inline-flex items-center ${className}`}>
      <Image
        src="/acho-primary.png"
        alt={`${site.name} — ${site.fullName}`}
        width={750}
        height={512}
        className={`${img} ${onDark ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src="/acho-primary-light.png"
        alt=""
        aria-hidden
        width={750}
        height={512}
        className={`${img} absolute inset-0 ${onDark ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
}
