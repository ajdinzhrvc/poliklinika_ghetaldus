import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, IrisMark } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { servicePillars } from "@/lib/content/services";

/**
 * The three pillars, numbered as a catalogue. Images stay squared here — the
 * arch is reserved for the hero and the About portrait so it keeps its weight
 * as a signature rather than becoming a card decoration.
 */
export function Services() {
  return (
    <section id="usluge" className="section-y">
      <div className="shell">
        <FocusReveal>
          <div className="max-w-3xl">
            <Eyebrow>Usluge</Eyebrow>
            <h2 className="mt-4 text-title">
              Tri oblasti,{" "}
              <em className="wonk not-italic text-accent">jedna specijalnost</em>
            </h2>
            <p className="mt-5 text-lead text-muted-foreground">
              Dijagnostika, hirurgija i optika pod istim krovom. Dioptrija koju
              specijalista utvrdi ujutro može biti u vašim naočalama isti dan.
            </p>
          </div>
        </FocusReveal>

        <Stagger className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-3">
          {servicePillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <article className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface-sunken">
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    fill
                    {...(pillar.image.blur
                      ? { placeholder: "blur" as const, blurDataURL: pillar.image.blur }
                      : {})}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 90vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-optical)] hover:scale-[1.03]"
                  />
                  <span className="numeric absolute left-0 top-0 bg-background px-3 py-1.5 font-display text-[0.875rem] text-accent">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-6 text-heading">{pillar.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {pillar.summary}
                </p>

                <ul className="mt-6 flex-1 space-y-3 rule-t pt-6">
                  {pillar.items.map((item) => (
                    <li key={item.label} className="flex gap-2.5">
                      <IrisMark className="mt-1 size-3 shrink-0 text-accent" />
                      <div>
                        <p className="text-[0.9375rem] font-semibold leading-snug text-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pillar.href}
                  className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-accent"
                >
                  Detaljnije
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-accent transition-transform duration-300 ease-[var(--ease-optical)] group-hover:translate-x-1"
                  />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
