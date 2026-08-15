import { Eyebrow, Topography } from "@/components/brand/ornaments";

/**
 * Shared subpage opener. Keeps every inner page starting on the same beat as
 * the home hero — royal scope, topography, eyebrow, display heading — without
 * each page re-inventing the layout.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 size-[46rem] text-royal-300 opacity-[0.22]"
      >
        <Topography rings={10} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lens-wash-soft"
      />

      <div className="shell relative pb-16 pt-14 lg:pb-20 lg:pt-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="optical-left mt-5 max-w-4xl text-title">{title}</h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
