import type { ReactNode } from "react";

export function PageHero({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-14 md:py-20">
        <h1 className="font-display text-3xl font-bold text-brand-dark md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ title, sub, children }: { title: string; sub?: string; children?: ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="font-display text-2xl font-bold text-brand-dark md:text-3xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
      {children}
    </div>
  );
}
