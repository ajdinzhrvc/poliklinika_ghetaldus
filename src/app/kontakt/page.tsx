import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow } from "@/components/brand/ornaments";
import { FocusReveal } from "@/components/motion/focus-reveal";
import { AppointmentForm } from "@/components/sections/appointment-form";
import {
  addressLine,
  contact,
  maps,
  openingHours,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt i zakazivanje",
  description:
    "Zakažite oftalmološki pregled u Poliklinici Ghetaldus Brčko — Bosne Srebrene 6, telefon +387 49 216-242. Radno vrijeme ponedjeljak–subota 08:00–18:00.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Zakažite termin{" "}
            <em className="wonk not-italic text-accent">bez čekanja</em>
          </>
        }
        lede="Najbrži način je telefonom — javljamo se odmah i predlažemo prvi slobodan termin. Ako vam više odgovara pisano, pošaljite zahtjev putem obrasca i mi vas pozivamo."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" variant="primary" asChild>
            <a href={`tel:${contact.phoneHref}`}>
              <Phone aria-hidden="true" className="size-4" />
              <span className="numeric">{contact.phoneInternational}</span>
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={maps.directionsUrl} target="_blank" rel="noopener noreferrer">
              Prikaži rutu
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Details */}
      <section aria-label="Podaci za kontakt" className="rule-b bg-surface-sunken">
        <div className="shell grid gap-8 py-12 sm:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Adresa",
              body: (
                <>
                  {addressLine}
                  <br />
                  <span className="text-muted-foreground">
                    {contact.region}, {contact.country}
                  </span>
                </>
              ),
            },
            {
              icon: Phone,
              title: "Telefon",
              body: (
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="numeric font-semibold transition-colors hover:text-accent"
                >
                  {contact.phoneInternational}
                </a>
              ),
            },
            {
              icon: Clock,
              title: "Radno vrijeme",
              body: (
                <>
                  {openingHours.map((slot) => (
                    <div key={slot.label}>
                      {slot.label}:{" "}
                      <span className="numeric font-semibold">
                        {slot.opens ? `${slot.opens}–${slot.closes}` : "zatvoreno"}
                      </span>
                    </div>
                  ))}
                </>
              ),
            },
          ].map((item) => (
            <div key={item.title}>
              <item.icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-5 text-accent"
              />
              <h2 className="mt-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                {item.title}
              </h2>
              <div className="mt-2 text-[0.9375rem] leading-relaxed">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section id="termin" className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <FocusReveal>
            <Eyebrow>Zahtjev za termin</Eyebrow>
            <h2 className="mt-4 text-title">Ostavite podatke</h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Popunite obrazac i pozvaćemo vas radi potvrde termina. Obrazac nije
              potvrda termina — termin je zakazan tek kada ga potvrdimo
              telefonom.
            </p>

            <div className="mt-9">
              <AppointmentForm />
            </div>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-hairline bg-surface-sunken">
                <iframe
                  src={maps.embedUrl}
                  title={`Lokacija poliklinike — ${addressLine}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
              </div>

              <div className="mt-6 rounded-sm border border-hairline bg-surface-sunken p-6">
                <h3 className="font-sans text-[1rem] font-semibold">
                  Dolazak i parking
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  Nalazimo se u ulici {contact.street}, u mirnom dijelu {contact.city}a,
                  sa parkingom u neposrednoj blizini zgrade. Ako dolazite sa
                  slabovidnom ili starijom osobom, dovezite je do samog ulaza —
                  javite nam pri zakazivanju pa ćemo izaći u susret.
                </p>
                <Button variant="link" asChild className="mt-4">
                  <a
                    href={maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Otvori navigaciju
                  </a>
                </Button>
              </div>
            </div>
          </FocusReveal>
        </div>
      </section>
    </main>
  );
}
