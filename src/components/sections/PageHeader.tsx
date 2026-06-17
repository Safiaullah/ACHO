import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Compact dark hero used at the top of inner pages. */
export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="relative overflow-hidden bg-deep px-6 pt-36 pb-20 text-cream sm:pt-40 sm:pb-24">
      <div className="grain" />
      <div className="blob float-slow absolute -left-20 -top-10 h-80 w-80 bg-teal/35" />
      <div className="blob absolute -right-16 bottom-0 h-72 w-72 bg-warm/20" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-5 inline-flex items-center gap-2 text-warm-soft">
          <span className="h-px w-8 bg-warm-soft" />
          {eyebrow}
          <span className="h-px w-8 bg-warm-soft" />
        </p>
        <h1 className="font-display text-4xl font-light leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-light">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
