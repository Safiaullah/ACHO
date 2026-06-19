import Link from "next/link";
import { nav, site } from "@/config/site";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-cream">
      <div className="grain" />
      {/* CTA band */}
      <div className="relative border-b border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
              Ready to take the first step?
            </h2>
            <p className="mt-4 text-muted-light">
              It starts with a simple, no-pressure conversation. We&apos;d love to
              learn about your child and family.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-warm px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d97c4a]"
          >
            Get Started &rarr;
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo onDark className="h-20 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-light">
            {site.fullName}. {site.description}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5 text-warm-soft">Explore</p>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-light transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-warm-soft">Contact</p>
          <ul className="space-y-3 text-sm text-muted-light">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="transition-colors hover:text-cream">
                {site.email}
              </a>
            </li>
            <li className="pt-2 leading-relaxed">{site.serviceArea}</li>
            <li className="pt-2">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline transition-colors hover:text-cream"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-light sm:flex-row">
          <p>
            &copy; 2022 {site.fullName}. All rights reserved.
          </p>
          <p>Compassionate, evidence-based autism care.</p>
        </div>
      </div>
    </footer>
  );
}
