import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, LensRings } from "@/components/brand/ornaments";
import { FocusReveal } from "@/components/motion/focus-reveal";
import { photos } from "@/lib/photos";
import { brandPillars, site } from "@/lib/site";

/**
 * Heritage and authority. The 1967 Ghetaldus Zagreb lineage is the single most
 * defensible claim the clinic has in this region, so it leads — followed by the
 * two things that make the tradition current: equipment and continuing
 * education.
 */
export function About() {
  return (
    <section
      id="o-nama"
      className="relative isolate overflow-hidden bg-surface-sunken section-y"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 -top-24 size-[42rem] text-royal-400 opacity-[0.13]"
      >
        <LensRings rings={9} />
      </div>

      <div className="shell relative grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <FocusReveal>
          <div className="arch relative aspect-[3/4] overflow-hidden bg-background shadow-lift">
            <Image
              src={photos.recepcija.src}
              alt={photos.recepcija.alt}
              fill
              placeholder="blur"
              blurDataURL={photos.recepcija.blur}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
        </FocusReveal>

        <FocusReveal delay={0.1}>
          <Eyebrow>O nama</Eyebrow>
          <h2 className="mt-4 text-title">
            Tradicija koja se{" "}
            <em className="wonk not-italic text-accent">mjeri decenijama</em>
          </h2>

          <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
            <p>
              Ghetaldus je u Brčkom počeo {site.founded}. godine, kao poslovna
              jedinica Optičke industrije Ghetaldus Zagreb — tada jednog od
              vodećih optičkih imena u regiji. Iz te optičarske tradicije
              izrasla je poliklinika koja danas, više od pola vijeka kasnije,
              pokriva cijeli put pacijenta: od prvog pregleda i dijagnostike, do
              operacije i naočala.
            </p>
            <p>
              Kontinuitet je ono što nas razlikuje. Generacije pacijenata iz
              Brčkog, Tuzle, Bijeljine i Posavine dolaze na istu adresu — a
              oprema i znanje se u tom vremenu nisu prestali obnavljati.
            </p>
            <p>
              Naši specijalisti obrazovani su i u inostranstvu, a znanje
              kontinuirano dopunjavaju na domaćim i stranim kongresima. Zato
              zahvate poput fakoemulzifikacije katarakte i anti-VEGF terapije
              danas radimo u Brčkom, a ne upućujemo pacijente u druge centre.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 rule-t pt-8 sm:grid-cols-3">
            {brandPillars.map((pillar) => (
              <div key={pillar.title}>
                <dt className="font-sans text-[0.9375rem] font-semibold text-foreground">
                  {pillar.title}
                </dt>
                <dd className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {pillar.body}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/o-nama"
            className="group mt-9 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-accent"
          >
            Više o poliklinici
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-accent transition-transform duration-300 ease-[var(--ease-optical)] group-hover:translate-x-1"
            />
          </Link>
        </FocusReveal>
      </div>
    </section>
  );
}
