import { Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { clinicFacts } from "@/lib/content/services";

/**
 * Verifiable facts rather than marketing claims, set as a hairline-divided
 * register directly beneath the hero. Mixed numerals and instrument names
 * (OCT, Phaco) are intentional — the specifics are the credibility.
 */
export function FactsStrip() {
  return (
    <section aria-label="Ključne činjenice" className="rule-b bg-surface-sunken">
      <div className="shell">
        <Stagger className="grid divide-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {clinicFacts.map((fact) => (
            <StaggerItem key={fact.value}>
              <div className="border-b border-hairline px-0 py-8 sm:border-b-0 sm:px-7 sm:first:pl-0 lg:last:pr-0">
                <p className="numeric font-display text-[2.25rem] leading-none tracking-[-0.03em] text-accent">
                  {fact.value}
                </p>
                <h3 className="mt-3 font-sans text-[0.9375rem] font-semibold text-foreground">
                  {fact.label}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {fact.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
