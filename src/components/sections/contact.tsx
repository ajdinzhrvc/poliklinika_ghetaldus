import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/brand/ornaments";
import { FocusReveal } from "@/components/motion/focus-reveal";
import {
  addressLine,
  contact,
  maps,
  openingHours,
  primaryCta,
} from "@/lib/site";

/**
 * Practical closing section: where, when, and two ways to reach the clinic.
 *
 * The map is Google's keyless embed, lazy-loaded so it costs nothing until it
 * scrolls into view. The directions link sits beside it because on a phone,
 * opening the native map app is what people actually want.
 */
export function Contact() {
  return (
    <section id="kontakt" className="section-y">
      <div className="shell">
        <FocusReveal>
          <div className="max-w-3xl">
            <Eyebrow>Kontakt i lokacija</Eyebrow>
            <h2 className="mt-4 text-title">
              Nalazimo se u{" "}
              <em className="wonk not-italic text-accent">centru Brčkog</em>
            </h2>
          </div>
        </FocusReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FocusReveal>
            <dl className="space-y-8">
              <div className="flex gap-4">
                <MapPin
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <div>
                  <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                    Adresa
                  </dt>
                  <dd className="mt-2 text-[1.0625rem] text-foreground">
                    {addressLine}
                    <br />
                    <span className="text-muted-foreground">
                      {contact.region}, {contact.country}
                    </span>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <div>
                  <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                    Telefon
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="numeric font-display text-[1.5rem] tracking-[-0.02em] text-foreground transition-colors hover:text-accent"
                    >
                      {contact.phoneInternational}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <div>
                  <dt className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                    Radno vrijeme
                  </dt>
                  <dd className="mt-2 space-y-1">
                    {openingHours.map((slot) => (
                      <div
                        key={slot.label}
                        className="flex flex-wrap gap-x-3 text-[0.9375rem]"
                      >
                        <span className="text-muted-foreground">
                          {slot.label}
                        </span>
                        <span className="numeric font-semibold text-foreground">
                          {slot.opens
                            ? `${slot.opens} – ${slot.closes}`
                            : "Zatvoreno"}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" variant="accent" asChild>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prikaži rutu
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-hairline bg-surface-sunken lg:aspect-[16/11]">
              <iframe
                src={maps.embedUrl}
                title={`Lokacija poliklinike — ${addressLine}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </FocusReveal>
        </div>
      </div>
    </section>
  );
}
