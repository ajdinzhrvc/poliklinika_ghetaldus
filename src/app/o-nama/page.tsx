import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow, IrisMark, LensRings } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { VisitingSpecialists } from "@/components/sections/visiting-specialists";
import { photos } from "@/lib/photos";
import { brandPillars, primaryCta, site } from "@/lib/site";
import { clinicFacts } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Ghetaldus u Brčkom od 1967. godine — od poslovne jedinice Optičke industrije Ghetaldus Zagreb do specijalizovane poliklinike za oftalmologiju, očnu hirurgiju i optiku.",
  alternates: { canonical: "/o-nama" },
};

const timeline = [
  {
    year: "1967",
    title: "Ghetaldus dolazi u Brčko",
    body: "Optika se otvara kao poslovna jedinica Optičke industrije Ghetaldus Zagreb, tada jednog od vodećih optičkih imena u regiji.",
  },
  {
    year: "1970-e",
    title: "Od optike do poliklinike",
    body: "Uz optičarsku djelatnost razvija se i specijalistička oftalmološka praksa — pacijenti dobijaju pregled i naočale na istom mjestu.",
  },
  {
    year: "2000-e",
    title: "Savremena dijagnostika",
    body: "Uvođenje kompjuterske refraktometrije, tonometrije i kompjuterizovanog vidnog polja podiže obradu pacijenta na nivo regionalnih centara.",
  },
  {
    year: "Danas",
    title: "Dijagnostika, hirurgija i optika",
    body: "OCT dijagnostika, fakoemulzifikacija katarakte i anti-VEGF terapija rade se u Brčkom — bez upućivanja pacijenata u druge gradove.",
  },
] as const;

const expertise = [
  {
    title: "Obrazovanje i van BiH",
    body: "Naši specijalisti dio obrazovanja i subspecijalističke obuke stekli su u inostranstvu.",
  },
  {
    title: "Kontinuirana edukacija",
    body: "Znanje se dopunjava na domaćim i stranim kongresima — oftalmologija se mijenja brže od većine grana medicine.",
  },
  {
    title: "Jedna specijalnost",
    body: "Poliklinika se bavi isključivo okom i vidom. Fokus je razlog zašto se zahvati rade rutinski, a ne povremeno.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="O nama"
        title={
          <>
            Više od pola vijeka na{" "}
            <em className="wonk not-italic text-accent">istoj adresi</em>
          </>
        }
        lede={`Ghetaldus je u Brčkom prisutan od ${site.founded}. godine. Ono što je počelo kao optika izraslo je u specijalizovanu polikliniku koja danas pokriva cijeli put pacijenta — od prvog pregleda do naočala nakon operacije.`}
      />

      {/* Facts */}
      <section aria-label="Ključne činjenice" className="rule-b bg-surface-sunken">
        <div className="shell">
          <Stagger className="grid divide-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {clinicFacts.map((fact) => (
              <StaggerItem key={fact.value}>
                <div className="border-b border-hairline py-8 sm:border-b-0 sm:px-7 sm:first:pl-0 lg:last:pr-0">
                  <p className="numeric font-display text-[2.25rem] leading-none tracking-[-0.03em] text-accent">
                    {fact.value}
                  </p>
                  <h2 className="mt-3 font-sans text-[0.9375rem] font-semibold">
                    {fact.label}
                  </h2>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {fact.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Story + portrait */}
      <section className="section-y">
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <FocusReveal>
            <Eyebrow>Naša priča</Eyebrow>
            <h2 className="mt-4 text-title">
              Kontinuitet je{" "}
              <em className="wonk not-italic text-accent">najteže kupiti</em>
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                Aparat se može kupiti, a kadar zaposliti. Ono što se ne može
                ubrzati je vrijeme — generacije pacijenata koje dolaze na istu
                adresu i znanje koje se prenosi unutar iste ustanove.
              </p>
              <p>
                Ghetaldus tradicija u Brčkom traje od {site.founded}. godine, a
                kao poliklinika radimo više od pet decenija. U tom vremenu
                mijenjala se oprema, mijenjale su se metode — ali se nije
                mijenjalo to da pacijent u istoj zgradi dobije pregled,
                dijagnostiku, zahvat i naočale.
              </p>
              <p>
                Danas se bavimo isključivo okom i vidom. To je svjesno sužavanje:
                specijalizacija je jedini način da se zahvati poput
                fakoemulzifikacije katarakte rade rutinski i sigurno.
              </p>
            </div>

            <Button variant="link" asChild className="mt-8">
              <Link href="/usluge">Pogledajte sve usluge</Link>
            </Button>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <div className="arch relative aspect-[3/4] overflow-hidden bg-surface-sunken shadow-lift">
              <Image
                src={photos.salonPanorama.src}
                alt={photos.salonPanorama.alt}
                fill
                placeholder="blur"
                blurDataURL={photos.salonPanorama.blur}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </FocusReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative isolate overflow-hidden bg-surface-sunken section-y">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-0 size-[40rem] text-royal-400 opacity-[0.12]"
        >
          <LensRings rings={9} />
        </div>
        <div className="shell relative">
          <FocusReveal>
            <div className="max-w-2xl">
              <Eyebrow>Hronologija</Eyebrow>
              <h2 className="mt-4 text-title">Kako smo stigli dovde</h2>
            </div>
          </FocusReveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-sm bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((entry) => (
              <StaggerItem key={entry.year}>
                <div className="h-full bg-background p-7">
                  <p className="numeric font-display text-[1.75rem] leading-none text-accent">
                    {entry.year}
                  </p>
                  <h3 className="mt-4 font-sans text-[1.0625rem] font-semibold">
                    {entry.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {entry.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values + expertise */}
      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FocusReveal>
            <Eyebrow>Na čemu insistiramo</Eyebrow>
            <h2 className="mt-4 text-heading">Tri obećanja</h2>
            <dl className="mt-8 space-y-7">
              {brandPillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-3.5">
                  <IrisMark className="mt-1.5 size-3.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-sans text-[1.0625rem] font-semibold">
                      {pillar.title}
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <Eyebrow>Stručni kadar</Eyebrow>
            <h2 className="mt-4 text-heading">Znanje koje se obnavlja</h2>
            <dl className="mt-8 space-y-7">
              {expertise.map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <IrisMark className="mt-1.5 size-3.5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-sans text-[1.0625rem] font-semibold">
                      {item.title}
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {item.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 rounded-sm border border-hairline bg-surface-sunken p-6">
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                Imena i biografije specijalista dodajemo po dostavljanju
                podataka od poliklinike.
              </p>
              <Button variant="accent" asChild className="mt-5">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            </div>
          </FocusReveal>
        </div>
      </section>

      <VisitingSpecialists />
    </main>
  );
}
