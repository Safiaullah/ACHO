import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { resources } from "@/constants/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Family resources, frequently asked questions, and guidance on ABA therapy, insurance, and getting started with ACHO.",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Family resources"
        title="Helpful answers, every step of the way"
        intro="Starting autism care comes with questions. We're here to make things clear, calm, and simple — here are a few resources to begin with."
      />

      {/* Resource cards */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Guides"
          title="Where to start"
          intro="Short, practical overviews for families navigating their next steps."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={r.href}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-sand p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-cream hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.25)]"
              >
                <h3 className="font-display text-xl text-ink">{r.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  Read more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-sand">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
          intro="Can't find what you're looking for? We're always happy to talk it through."
          className="mx-auto"
        />
        <div className="mt-12">
          <FaqAccordion />
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/contact">Ask us anything</Button>
        </Reveal>
      </Section>
    </main>
  );
}
