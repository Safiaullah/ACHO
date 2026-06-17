import type { IconName } from "@/constants/content";

type Props = { name: IconName; className?: string };

/** Lightweight inline-SVG icon set (1.5px stroke, currentColor). */
export default function Icon({ name, className = "h-6 w-6" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "puzzle":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M10 3.5a1.5 1.5 0 0 1 3 0c0 .6-.3 1-.5 1.5-.2.4 0 1 .5 1h2.5a1 1 0 0 1 1 1V9c0 .5.6.7 1 .5.5-.2.9-.5 1.5-.5a1.5 1.5 0 0 1 0 3c-.6 0-1-.3-1.5-.5-.4-.2-1 0-1 .5v2.5a1 1 0 0 1-1 1H13c-.5 0-.7.6-.5 1 .2.5.5.9.5 1.5a1.5 1.5 0 0 1-3 0c0-.6.3-1 .5-1.5.2-.4 0-1-.5-1H7.5a1 1 0 0 1-1-1V13c0-.5-.6-.7-1-.5-.5.2-.9.5-1.5.5a1.5 1.5 0 0 1 0-3c.6 0 1 .3 1.5.5.4.2 1 0 1-.5V7.5a1 1 0 0 1 1-1H10c.5 0 .7-.6.5-1-.2-.5-.5-.9-.5-1.5Z" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
          <path d="M9 11h6M9 14h4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 20s-7-4.3-9.3-8.7A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5.3C19 15.7 12 20 12 20Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 6a3 3 0 0 1 0 6m4.5 8a5.5 5.5 0 0 0-4-5.3" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M5 20c0-9 6-15 15-15 0 9-6 15-15 15Z" />
          <path d="M5 20c4-6 8-9 12-10" />
        </svg>
      );
    default:
      return null;
  }
}
