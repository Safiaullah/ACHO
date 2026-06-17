import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import { stats } from "@/constants/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet ACHO and founder Suman Mohammad Asra, M.A., LBA, BCBA — a board-certified behavior analyst delivering compassionate, individualized autism care.",
};

const credentials = [
  { label: "BCBA", desc: "Board Certified Behavior Analyst" },
  { label: "LBA", desc: "Licensed Behavior Analyst" },
  { label: "M.A.", desc: "Master of Arts" },
];

export default function AboutPage() {
  const { founder } = site;
  return (
    <main>
      <PageHeader
        eyebrow="About ACHO"
        title="A practice built on care, science & trust"
        intro="ACHO — the Autism Clinical Health Organization — exists to give children and families autism care that feels as human as it is effective."
      />

      {/* Mission */}
      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Our mission"
            title={
              <>
                Unlocking each child&apos;s potential —{" "}
                <span className="italic text-teal">on their terms</span>
              </>
            }
            intro="We founded ACHO to do autism care differently: deeply individualized, genuinely affirming, and built around the whole family. We measure success not just in milestones, but in confidence, connection, and joy."
          />
          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-black/5 bg-sand p-6"
                >
                  <p className="font-display text-4xl text-teal">{s.value}</p>
                  <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Founder */}
      <Section className="bg-sand">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal to-deep">
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
                {/* PLACEHOLDER: replace with a real portrait of Suman */}
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-deep">
                  Photo coming soon
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-black/5 bg-cream p-5">
                <p className="font-display text-lg text-ink">{founder.name}</p>
                <p className="text-sm text-muted">{founder.credentials}</p>
                <p className="mt-1 text-sm font-semibold text-teal">
                  {founder.role}
                </p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-block text-sm font-semibold text-teal"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-warm">Meet our founder</p>
              <h2 className="font-display text-3xl text-ink text-balance sm:text-4xl">
                {founder.name}
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Suman is a board-certified behavior analyst (BCBA) and licensed
                  behavior analyst (LBA) who has dedicated her career to
                  supporting children on the autism spectrum and the families who
                  love them.
                </p>
                <p>
                  She founded ACHO with a clear conviction: that the best autism
                  care is both rigorously evidence-based and deeply personal.
                  Under her leadership, every treatment plan is grounded in the
                  science of applied behavior analysis — and shaped by genuine
                  respect for each child&apos;s individuality.
                </p>
                <p>
                  Suman believes families are the most important members of any
                  care team. That&apos;s why coaching, communication, and
                  collaboration are woven into everything ACHO does.
                </p>
                <p className="text-sm italic text-muted/80">
                  {/* PLACEHOLDER: replace the paragraphs above with Suman's real
                      bio — her education, years of experience, specialties,
                      populations served, and personal story. */}
                  This bio is placeholder copy — we&apos;ll personalize it with
                  Suman&apos;s real story, experience, and credentials.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-black/5 bg-cream p-5 text-center"
                  >
                    <p className="font-display text-2xl text-teal">{c.label}</p>
                    <p className="mt-1 text-xs leading-snug text-muted">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-8">
                <Button href="/contact">Work with Suman&apos;s team</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
