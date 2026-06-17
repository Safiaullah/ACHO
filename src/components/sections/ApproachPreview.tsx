import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { approachSteps } from "@/constants/content";

export default function ApproachPreview() {
  return (
    <Section className="overflow-hidden bg-deep text-cream">
      <div className="grain" />
      <div className="blob absolute -right-20 top-10 h-80 w-80 bg-teal/30" />

      <div className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Our approach"
          title="A clear path, from hello to growth"
          intro="We make starting care feel simple and human. Here's how a journey with ACHO unfolds."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step, i) => (
            <Reveal
              key={step.step}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group relative bg-deep-alt p-8 transition-colors duration-500 hover:bg-deep-alt/70"
            >
              <span className="font-display text-5xl text-warm/40 transition-colors duration-500 group-hover:text-warm">
                {step.step}
              </span>
              <h3 className="mt-5 font-display text-xl text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-light">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button href="/approach" variant="light">
            See our full approach
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
