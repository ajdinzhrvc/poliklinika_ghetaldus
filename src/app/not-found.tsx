import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AcuityMark, Eyebrow, Topography } from "@/components/brand/ornaments";
import { navigation, contact } from "@/lib/site";

/**
 * The Snellen ornament finally earns its keep: an eye chart is exactly the right
 * joke for "we can't find this page", and it stays on-brand instead of reaching
 * for a generic 404 illustration.
 */
export default function NotFound() {
  return (
    <main className="on-ink paper-grain relative isolate flex min-h-[70vh] items-center overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[42rem] text-royal-300 opacity-[0.2]"
      >
        <Topography rings={9} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lens-wash-soft"
      />

      <div className="shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>Greška 404</Eyebrow>
          <h1 className="optical-left mt-5 text-title">
            Ova stranica nam{" "}
            <em className="wonk not-italic text-accent">nije pred očima</em>
          </h1>
          <p className="mt-6 max-w-lg text-lead text-muted-foreground">
            Adresa je možda pogrešno upisana ili stranica više ne postoji. Vid
            provjeravamo redovno — linkove očito rjeđe.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" variant="primary" asChild>
              <Link href="/">Na početnu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${contact.phoneHref}`}>
                Pozovite <span className="numeric">{contact.phoneDisplay}</span>
              </a>
            </Button>
          </div>

          <nav aria-label="Ostale stranice" className="mt-12 rule-t pt-7">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navigation
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="flex justify-center">
          <AcuityMark
            lines={["404", "NEMA", "STRANICE"]}
            className="text-royal-200"
          />
        </div>
      </div>
    </main>
  );
}
