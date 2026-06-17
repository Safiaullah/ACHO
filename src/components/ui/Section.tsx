import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** max content width */
  container?: boolean;
};

export function Section({
  children,
  className = "",
  id,
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:py-28 ${className}`}>
      {container ? (
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: HeadingProps) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "dark" ? "text-warm-soft" : "text-warm";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const introColor = tone === "dark" ? "text-muted-light" : "text-muted";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow mb-4 ${eyebrowColor}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`font-display text-3xl leading-[1.1] text-balance sm:text-4xl md:text-[2.75rem] ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
