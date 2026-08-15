import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { Eyebrow, IrisMark, Topography } from "@/components/brand/ornaments";
import {
  addressLine,
  contact,
  footerServices,
  navigation,
  openingHours,
  primaryCta,
  secondaryCta,
  site,
} from "@/lib/site";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
      {children}
    </h2>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-32 size-[46rem] text-royal-300 opacity-[0.18]"
      >
        <Topography rings={10} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lens-wash-soft"
      />

      {/* Closing call to action */}
      <div className="shell relative section-y-tight">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Zakažite pregled</Eyebrow>
            <p className="mt-4 max-w-xl font-display text-title">
              Vaš vid zaslužuje{" "}
              <em className="wonk not-italic text-accent">pregled bez</em>{" "}
              čekanja.
            </p>
            <p className="mt-4 max-w-md text-lead text-muted-foreground">
              Pozovite nas ili pošaljite zahtjev za termin — javljamo se istog
              radnog dana.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button size="lg" variant="primary" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="relative rule-t">
        <div className="shell grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Specijalizovani centar za oftalmologiju, očnu hirurgiju i optiku u
              Brčkom. Tradicija od {site.founded}.
            </p>
          </div>

          <nav aria-label="Podnožje — stranice">
            <ColumnTitle>Stranice</ColumnTitle>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Podnožje — usluge">
            <ColumnTitle>Usluge</ColumnTitle>
            <ul className="space-y-2.5 text-sm">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>Kontakt</ColumnTitle>
            <address className="space-y-4 text-sm not-italic">
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">
                  {addressLine}
                  <br />
                  {contact.region}, {contact.country}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="numeric font-semibold transition-colors hover:text-accent"
                >
                  {contact.phoneInternational}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div className="text-muted-foreground">
                  {openingHours.map((slot) => (
                    <div key={slot.label}>
                      {slot.label}:{" "}
                      <span className="numeric text-foreground">
                        {slot.opens ? `${slot.opens}–${slot.closes}` : "zatvoreno"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="relative rule-t">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-6 text-[0.75rem] text-subtle-foreground">
          <p>
            © {year} {site.legalName}
          </p>
          <p className="flex items-center gap-2">
            <IrisMark className="size-2.5 text-accent" />
            Sva prava zadržana
          </p>
        </div>
      </div>
    </footer>
  );
}
