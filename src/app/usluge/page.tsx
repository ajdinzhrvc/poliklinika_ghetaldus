import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow, IrisMark, LensDivider } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { servicePillars } from "@/lib/content/services";
import { contact, primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Kompletan oftalmološki pregled, OCT dijagnostika, kompjuterizovano vidno polje, ultrazvuk oka, operacija katarakte, anti-VEGF terapija, hirurgija kapaka i očna optika u Brčkom.",
  alternates: { canonical: "/usluge" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Usluge"
        title={
          <>
            Sve što oko traži,{" "}
            <em className="wonk not-italic text-accent">na jednom mjestu</em>
          </>
        }
        lede="Dijagnostika, hirurgija i optika pod istim krovom. Ispod je kompletan katalog usluga — ako ne znate šta vam je potrebno, pozovite nas i objasnićemo prije nego zakažete."
      >
        <nav aria-label="Prečice do usluga" className="mt-9">
          <ul className="flex flex-wrap gap-2.5">
            {servicePillars.map((pillar) => (
              <li key={pillar.id}>
                <a
                  href={`#${pillar.id}`}
                  className="inline-flex items-center gap-2 rounded-sm border border-hairline-strong px-4 py-2 text-[0.875rem] font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="numeric text-accent">{pillar.number}</span>
                  {pillar.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {servicePillars.map((pillar, index) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={
            index % 2 === 1
              ? "bg-surface-sunken section-y"
              : "section-y"
          }
        >
          <div className="shell">
            <FocusReveal>
              <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                <div className="max-w-2xl">
                  <Eyebrow>{`Oblast ${pillar.number}`}</Eyebrow>
                  <h2 className="mt-4 text-title">{pillar.title}</h2>
                  <p className="mt-5 text-lead text-muted-foreground">
                    {pillar.summary}
                  </p>
                </div>
                {pillar.href !== `/usluge#${pillar.id}` && (
                  <Button variant="outline" asChild>
                    <Link href={pillar.href}>
                      Detaljna stranica
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </FocusReveal>

            <LensDivider className="mt-10" />

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
              <Stagger className="grid gap-px overflow-hidden rounded-sm bg-hairline sm:grid-cols-2">
                {pillar.items.map((item) => (
                  <StaggerItem key={item.label}>
                    <article className="h-full bg-background p-6">
                      <IrisMark className="size-3.5 text-accent" />
                      <h3 className="mt-3.5 font-sans text-[1.0625rem] font-semibold leading-snug">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>

              <FocusReveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-sunken">
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </FocusReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="on-royal bg-background text-foreground section-y-tight">
        <div className="shell flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-heading">
              Niste sigurni koji pregled vam je potreban?
            </h2>
            <p className="mt-3 text-[1.0625rem] text-muted-foreground">
              Pozovite nas — objasnićemo šta obuhvata koji pregled, koliko traje
              i koliko košta, prije nego što zakažete.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="primary" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${contact.phoneHref}`}>
                <span className="numeric">{contact.phoneDisplay}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
