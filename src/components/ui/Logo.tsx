import Image from "next/image";
import { site } from "@/config/site";

type Props = { className?: string };

/**
 * ACHO logo — the circular "A.C.H.O" infinity badge.
 * Size by setting a height utility on `className` (e.g. h-8); width follows
 * automatically. Any text-color utilities passed in are harmless no-ops on the
 * raster mark.
 */
export default function Logo({ className = "h-8 w-auto" }: Props) {
  return (
    <Image
      src="/acho-logo.png"
      alt={`${site.name} — ${site.fullName}`}
      width={512}
      height={512}
      className={className}
    />
  );
}
