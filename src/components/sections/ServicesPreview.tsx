import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services } from "@/constants/content";

export default function ServicesPreview() {
  return (
    <Section id="services" className="bg-cream">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Care designed around your child"
          intro="Every service we offer is built on one idea: no two children are alike. We meet each child where they are — and grow from there."
        />
        <Reveal delay={2} className="hidden md:block">
          <Button href="/services" variant="ghost">
            All services
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <ServiceCard service={service} href={`/services#${service.id}`} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 md:hidden">
        <Button href="/services" variant="ghost">
          All services
        </Button>
      </Reveal>
    </Section>
  );
}
