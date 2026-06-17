import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { services } from "@/constants/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individualized ABA therapy, early intervention, assessment, parent training, social skills support, and telehealth — all designed and led by a BCBA.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="What we offer"
        title="Services built around every child"
        intro="From assessment to everyday support, our services share one foundation: individualized, evidence-based care that honors who your child is."
      />

      <Section className="bg-cream">
        <div className="space-y-20 sm:space-y-28">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
              >
                {/* Visual */}
                <Reveal
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-soft/60 to-sand">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-teal shadow-lg">
                        <Icon name={service.icon} className="h-12 w-12" />
                      </div>
                    </div>
                    <span className="absolute left-6 top-6 font-display text-7xl text-teal/15">
                      0{i + 1}
                    </span>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal delay={1} className={flip ? "lg:order-1" : ""}>
                  <h2 className="font-display text-3xl text-ink text-balance sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    {service.detail}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-ink/85"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-xs text-teal">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-sand text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl text-ink text-balance sm:text-4xl">
            Not sure which service fits? Let&apos;s figure it out together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A short conversation is all it takes. We&apos;ll listen, answer your
            questions, and help you find the right starting point.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Get started</Button>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
