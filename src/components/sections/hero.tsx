import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Eyebrow, IrisMark, Topography } from "@/components/brand/ornaments";
import { photos } from "@/lib/photos";
import { patientOrigins, reviews } from "@/lib/content/reviews";
import { primaryCta, site } from "@/lib/site";

const featured = reviews.find((r) => r.featured) ?? reviews[0];

/**
 * Asymmetric editorial hero on the deep royal scope — a dark opening reads as a
 * specialist centre rather than a general practice, and it lets the arch carry
 * the one image most patients already recognise: the shopfront on Bosne
 * Srebrene, sign and all.
 *
 * The headline states the strategic pivot as a virtue: this clinic treats eyes
 * and nothing else, and has done so for over half a century.
 */
export function Hero() {
  return (
    <section className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 size-[54rem] text-royal-300 opacity-[0.22]"
      >
        <Topography rings={11} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lens-wash"
      />

      <div className="shell relative grid items-center gap-14 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-24 lg:pt-20">
        <div>
          <Eyebrow>Oftalmologija · Očna hirurgija · Optika</Eyebrow>

          <h1 className="optical-left mt-6 text-display">
            Samo oči.
            <br />
            <em className="wonk not-italic text-accent">
              Već više od pola vijeka.
            </em>
          </h1>

          <p className="mt-7 max-w-xl text-lead text-muted-foreground">
            Poliklinika Ghetaldus je specijalizovani centar za oftalmologiju,
            očnu hirurgiju i optiku u Brčkom. Kompletna dijagnostika, operacija
            katarakte i salon optike — na jednom mjestu, u terminu koji vam je
            zakazan.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" variant="primary" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/operacija-katarakte">Operacija katarakte</Link>
            </Button>
          </div>

          {/* Social proof, kept qualitative. A star rating is deliberately not
              shown until the client confirms the verified Google figure. */}
          <figure className="mt-12 max-w-lg rule-t pt-7">
            <blockquote className="font-display text-[1.0625rem] leading-relaxed text-foreground">
              „{featured.quote}“
            </blockquote>
            <figcaption className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-subtle-foreground">
              <IrisMark className="size-2.5 text-accent" />
              <span className="font-semibold text-muted-foreground">
                {featured.name}
              </span>
              {featured.city && <span>iz {featured.city}</span>}
              <span aria-hidden="true">·</span>
              <span>Google recenzija</span>
            </figcaption>
          </figure>

          <p className="mt-6 text-[0.8125rem] text-subtle-foreground">
            Pacijenti nam dolaze iz {patientOrigins.slice(0, -1).join(", ")} i{" "}
            {patientOrigins.at(-1)}.
          </p>
        </div>

        {/* Arch — the signature shape, used once per page at scale. */}
        <div className="relative">
          <div className="arch relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden bg-surface-sunken shadow-float">
            <Image
              src={photos.eksterijer.src}
              alt={photos.eksterijer.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={photos.eksterijer.blur}
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Heritage stamp, tucked into the arch's lower corner. */}
          <div className="absolute -bottom-4 left-0 rounded-sm border border-hairline-strong bg-background/85 px-5 py-3 backdrop-blur-md sm:left-4">
            <p className="numeric font-display text-[1.75rem] leading-none text-accent">
              {site.founded}
            </p>
            <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-subtle-foreground">
              Godina tradicije
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
