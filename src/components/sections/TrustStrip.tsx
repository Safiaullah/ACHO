const items = [
  "Neurodiversity-affirming",
  "BCBA-led care",
  "Evidence-based",
  "Family-centered",
  "Individualized plans",
  "In-home & telehealth",
  "Data-driven progress",
  "Strengths-based",
];

/** Infinite marquee of brand pillars (doubled for seamless loop). */
export default function TrustStrip() {
  return (
    <div className="marquee overflow-hidden border-y border-black/5 bg-sand py-5">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-8 text-sm font-medium uppercase tracking-[0.18em] text-ink/55"
          >
            {item}
            <span className="ml-8 text-warm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
