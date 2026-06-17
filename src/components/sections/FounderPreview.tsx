import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";

export default function FounderPreview() {
  const { founder } = site;
  return (
    <Section className="bg-cream">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Portrait placeholder */}
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal to-deep">
            <div className="grain" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-7xl text-white/90">
                {founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>
            {/* PLACEHOLDER: replace gradient block with a real photo of Suman
                e.g. <Image src="/suman.jpg" fill className="object-cover" alt={founder.name} /> */}
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-deep">
              Photo coming soon
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4 text-warm">Meet our founder</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl leading-tight text-ink text-balance sm:text-4xl">
              {founder.name},{" "}
              <span className="text-muted">{founder.credentials}</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-teal">
              {founder.role}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Suman is a board-certified behavior analyst (BCBA) and licensed
                behavior analyst who founded ACHO with a simple belief: every
                child deserves care that honors who they are.
              </p>
              <p>
                With a background in applied behavior analysis and a deeply
                family-centered philosophy, she leads a practice where science
                and compassion go hand in hand — and where parents are true
                partners in their child&apos;s progress.
                {/* PLACEHOLDER: expand with Suman's real bio, experience & education */}
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about">Read her story</Button>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-teal/30 px-7 py-3.5 text-sm font-semibold text-teal transition-all duration-300 hover:border-teal hover:bg-teal hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
