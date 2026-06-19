import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get started with ACHO. Reach out to schedule a no-pressure conversation about your child and family.",
};

const details = [
  { label: "Call us", value: site.phone, href: site.phoneHref },
  { label: "Email", value: site.email, href: site.emailHref },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get started"
        title="Let's start the conversation"
        intro="Reaching out is the first step — and it's an easy one. Tell us a little about your child, and we'll guide you through everything else."
      />

      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Info column */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="font-display text-2xl text-ink">
                We&apos;d love to hear from you
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Whether you&apos;re just exploring options or ready to begin, our
                team is here to listen and help — no pressure, no obligation.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={((i % 2) + 1) as 1 | 2}>
                  <a
                    href={d.href}
                    className="group flex items-center justify-between rounded-2xl border border-black/5 bg-sand px-6 py-5 transition-colors hover:border-teal/30"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {d.label}
                      </p>
                      <p className="mt-1 font-display text-xl text-ink">
                        {d.value}
                      </p>
                    </div>
                    <span className="text-teal transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={2}>
              <div className="mt-4 rounded-2xl border border-black/5 bg-sand px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Where we serve
                </p>
                <p className="mt-2 leading-relaxed text-ink/85">
                  {site.serviceArea}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
