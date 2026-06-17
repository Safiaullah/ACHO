import Link from "next/link";
import type { Service } from "@/constants/content";
import Icon from "./Icon";

type Props = { service: Service; href?: string };

export default function ServiceCard({ service, href = "/services" }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-teal/20 hover:shadow-[0_24px_48px_-24px_rgba(15,118,110,0.35)]"
    >
      {/* hover wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-soft/0 to-teal-soft/0 opacity-0 transition-opacity duration-500 group-hover:from-teal-soft/30 group-hover:opacity-100" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft/60 text-teal transition-colors duration-500 group-hover:bg-teal group-hover:text-white">
        <Icon name={service.icon} className="h-7 w-7" />
      </div>

      <h3 className="relative mt-6 font-display text-xl text-ink">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
        {service.blurb}
      </p>

      <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
        Learn more
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
