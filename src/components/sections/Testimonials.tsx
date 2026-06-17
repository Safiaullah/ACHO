import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/constants/content";

export default function Testimonials() {
  return (
    <Section className="bg-sand">
      <SectionHeading
        align="center"
        eyebrow="Family stories"
        title="You'll be so proud of their progress"
        intro="The families we serve are at the heart of everything. Here's what a few of them have shared."
        className="mx-auto"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={i}
            delay={((i % 3) + 1) as 1 | 2 | 3}
            className="flex h-full flex-col rounded-3xl border border-black/5 bg-cream p-8"
          >
            <span className="font-display text-5xl leading-none text-warm/60">
              &ldquo;
            </span>
            <p className="mt-2 flex-1 text-base leading-relaxed text-ink/85">
              {t.quote}
            </p>
            <div className="mt-6 border-t border-black/5 pt-5">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        Testimonials shown are illustrative placeholders — replace with real,
        consented family stories before launch.
      </p>
    </Section>
  );
}
