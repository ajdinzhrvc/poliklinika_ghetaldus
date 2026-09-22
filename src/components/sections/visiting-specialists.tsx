import Link from "next/link";
import { CalendarClock, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eyebrow, LensRings } from "@/components/brand/ornaments";
import { FocusReveal } from "@/components/motion/focus-reveal";
import { contact, visitingSpecialists } from "@/lib/site";

/**
 * Visiting consultants from Novi Sad and Tuzla.
 *
 * Deliberately short, and deliberately without a calendar: the rotation changes
 * month to month, and a printed date that has gone stale costs more trust than
 * it buys. The phone number is the whole answer, so it is the whole call to
 * action.
 */
export function VisitingSpecialists() {
  const cities = visitingSpecialists.cities;
  const cityList = `${cities.slice(0, -1).join(", ")} i ${cities.at(-1)}`;

  return (
    <section
      aria-labelledby="gostujuci-specijalisti"
      className="relative isolate overflow-hidden bg-surface-sunken section-y-tight"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 size-[32rem] text-royal-400 opacity-[0.1]"
      >
        <LensRings rings={7} />
      </div>

      <div className="shell relative">
        <FocusReveal>
          <div className="flex flex-col gap-9 rounded-sm border border-hairline bg-background p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-14">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <CalendarClock
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5 shrink-0 text-accent"
                />
                <Eyebrow>Gostujući specijalisti</Eyebrow>
              </div>

              <h2
                id="gostujuci-specijalisti"
                className="mt-4 text-heading text-balance"
              >
                Kod nas primaju i doktori specijalisti iz{" "}
                <em className="wonk not-italic text-accent">{cityList}</em>
              </h2>

              <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                Uz naš stalni tim, u poliklinici povremeno primaju i specijalisti
                iz {cityList}. Raspored njihovih dolazaka se mijenja, pa termine
                ne objavljujemo unaprijed — tačan datum i prvi slobodan termin
                saznaćete pozivom na naš broj telefona.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col lg:items-stretch">
              <Button size="lg" variant="accent" asChild>
                <a href={`tel:${contact.phoneHref}`}>
                  <Phone aria-hidden="true" className="size-4" />
                  <span className="numeric">{contact.phoneDisplay}</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt#termin">Pošaljite upit</Link>
              </Button>
            </div>
          </div>
        </FocusReveal>
      </div>
    </section>
  );
}
