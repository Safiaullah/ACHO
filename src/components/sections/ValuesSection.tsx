import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { stats, values } from "@/constants/content";

export default function ValuesSection() {
  return (
    <Section className="bg-sand">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Why ACHO"
            title={
              <>
                Care that sees the <span className="italic text-teal">whole</span>{" "}
                child
              </>
            }
            intro="We believe great therapy is built on respect, science, and genuine partnership with families. These principles guide everything we do."
          />

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="rounded-2xl border border-black/5 bg-cream p-5"
              >
                <p className="font-display text-3xl text-teal">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={((i % 2) + 1) as 1 | 2}
              className="group rounded-3xl border border-black/5 bg-cream p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm/15 text-warm transition-transform duration-500 group-hover:scale-110">
                <Icon name={v.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
