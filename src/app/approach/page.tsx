import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { approachSteps, values } from "@/constants/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How ACHO delivers neurodiversity-affirming, evidence-based ABA therapy — from first conversation to lasting progress, with families as partners.",
};

export default function ApproachPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our approach"
        title="Science and compassion, working together"
        intro="We pair the rigor of applied behavior analysis with a warm, whole-child philosophy — so progress is real, measurable, and meaningful."
      />

      {/* Philosophy */}
      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our philosophy"
            title="We help children thrive as themselves"
            intro="Our goal is never to change who a child is. It's to build the communication, connection, and independence that help them flourish — celebrating their strengths every step of the way."
          />
          <Reveal delay={1}>
            <div className="rounded-3xl border border-black/5 bg-sand p-8">
              <p className="font-display text-2xl leading-snug text-ink">
                &ldquo;Every child has a unique way of experiencing the world. Our
                job is to understand it, honor it, and help them grow within
                it.&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-teal">
                — The ACHO philosophy
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Steps */}
      <Section className="overflow-hidden bg-deep text-cream">
        <div className="grain" />
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="The journey"
          title="What working with us looks like"
          intro="A clear, supportive path from your first hello to lasting growth."
          className="mx-auto"
        />
        <div className="relative mt-16 space-y-px">
          {approachSteps.map((step, i) => (
            <Reveal
              key={step.step}
              className="group grid gap-4 rounded-2xl bg-white/[0.03] p-8 transition-colors duration-500 hover:bg-white/[0.07] sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <span className="font-display text-5xl text-warm/50 transition-colors duration-500 group-hover:text-warm sm:text-6xl">
                {step.step}
              </span>
              <div>
                <h3 className="font-display text-2xl text-cream">{step.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-light">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values recap */}
      <Section className="bg-sand">
        <SectionHeading
          align="center"
          eyebrow="What guides us"
          title="The principles behind every plan"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="rounded-3xl border border-black/5 bg-cream p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Icon name={v.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/contact">Begin your family&apos;s journey</Button>
        </Reveal>
      </Section>
    </main>
  );
}
