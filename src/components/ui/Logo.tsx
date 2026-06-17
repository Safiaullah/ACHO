type Props = { className?: string };

/**
 * ACHO wordmark — an abstract "bloom" mark (growth / individuality) + wordmark.
 * Color follows `currentColor`; the petal accent uses the warm brand tone.
 * Size by setting a height utility on `className` (e.g. h-8).
 */
export default function Logo({ className = "h-8 w-auto text-ink" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="h-full w-auto"
        aria-hidden="true"
      >
        {/* petals */}
        <circle cx="20" cy="11" r="6.5" className="fill-warm" />
        <circle cx="11.5" cy="24" r="6.5" className="fill-teal" />
        <circle cx="28.5" cy="24" r="6.5" className="fill-teal-bright" />
        {/* center */}
        <circle cx="20" cy="20" r="4.5" fill="currentColor" />
      </svg>
      <span
        className="font-display font-semibold leading-none tracking-tight"
        style={{ fontSize: "1.35em" }}
      >
        ACHO
      </span>
    </span>
  );
}
