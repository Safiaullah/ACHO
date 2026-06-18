import Image from "next/image";
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-deep">
            <Image
              src="/suman.jpg"
              alt={`${founder.name}, ${founder.credentials}`}
              fill
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/60 to-transparent" />
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
