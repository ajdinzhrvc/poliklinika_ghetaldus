import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow, IrisMark, LensDivider } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { photos } from "@/lib/photos";
import { contact, primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Očna optika",
  description:
    "Salon očne optike u Brčkom — dioptrijski i sunčani okviri renomiranih brendova, stakla sa antirefleksnim i UV zaštitnim slojevima, jednofokalna i progresivna stakla. Dioptriju određuje oftalmolog.",
  alternates: { canonical: "/optika" },
};

const lensTypes = [
  {
    name: "Jednofokalna stakla",
    body: "Za korekciju na jednoj udaljenosti — daljinu ili blizinu. Najčešći i najpristupačniji izbor.",
  },
  {
    name: "Progresivna stakla",
    body: "Neprekidan prelaz od daljine do blizine u jednom staklu, bez vidljive linije podjele.",
  },
  {
    name: "Antirefleksni sloj",
    body: "Smanjuje odsjaje i bliještanje — posebno primjetno pri radu na ekranu i vožnji noću.",
  },
  {
    name: "UV i zaštitni slojevi",
    body: "Zaštita od ultravioletnog zračenja, tvrdi sloj protiv ogrebotina i sloj koji odbija vodu i prašinu.",
  },
] as const;

const opticsSteps = [
  {
    n: "01",
    title: "Dioptrija kod specijaliste",
    body: "Dioptriju određuje oftalmolog, a ne aparat u prolazu — što je razlika koju osjetite prvog dana nošenja.",
  },
  {
    n: "02",
    title: "Izbor okvira i stakala",
    body: "Okvir birate prema obliku lica i načinu nošenja, a stakla prema dioptriji i tome čime se svakodnevno bavite.",
  },
  {
    n: "03",
    title: "Izrada i prilagođavanje",
    body: "Naočale se izrađuju i podešavaju na licu. Ako nešto ne stoji kako treba, doradimo bez naknade.",
  },
] as const;

/**
 * The salon shot large, then three closer frames. Ordered widest-to-tightest so
 * the reader gets the room before the merchandise — the point being that the
 * selection is real and in stock, not a catalogue to order from.
 */
const gallery = [
  photos.salonUgao,
  photos.okviriVitrina,
  photos.okviriBoje,
  photos.okviriDetalj,
] as const;

export default function OpticsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Optika"
        title={
          <>
            Naočale koje počinju{" "}
            <em className="wonk not-italic text-accent">kod specijaliste</em>
          </>
        }
        lede="Salon očne optike je u istoj zgradi kao i ordinacije. Dioptrija koju specijalista utvrdi na pregledu ide direktno u izradu — bez drugog odlaska i bez prepisivanja tuđeg nalaza."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" variant="primary" asChild>
            <Link href={primaryCta.href}>Zakaži pregled vida</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#salon">Pogledajte salon</Link>
          </Button>
        </div>
      </PageHero>

      {/* Frames + process */}
      <section className="section-y">
        <div className="shell grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FocusReveal>
            <div className="arch relative aspect-[3/4] overflow-hidden bg-surface-sunken shadow-lift">
              <Image
                src={photos.okviriZid.src}
                alt={photos.okviriZid.alt}
                fill
                priority
                placeholder="blur"
                blurDataURL={photos.okviriZid.blur}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <Eyebrow>Okviri i stakla</Eyebrow>
            <h2 className="mt-4 text-title">
              Prednost je{" "}
              <em className="wonk not-italic text-accent">u istoj zgradi</em>
            </h2>
            <p className="mt-6 text-lead text-muted-foreground">
              Ghetaldus je u Brčkom počeo kao optika — to je naš najstariji
              posao. U ponudi su dioptrijski i sunčani okviri renomiranih
              brendova, za sve uzraste, uključujući okvire za djecu.
            </p>

            <LensDivider className="my-9" />

            <Stagger className="grid gap-6 sm:grid-cols-2">
              {lensTypes.map((lens) => (
                <StaggerItem key={lens.name}>
                  <div className="flex gap-3">
                    <IrisMark className="mt-1.5 size-3.5 shrink-0 text-accent" />
                    <div>
                      <h3 className="font-sans text-[1rem] font-semibold">
                        {lens.name}
                      </h3>
                      <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                        {lens.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </FocusReveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-sunken section-y">
        <div className="shell">
          <FocusReveal>
            <div className="max-w-2xl">
              <Eyebrow>Kako do naočala</Eyebrow>
              <h2 className="mt-4 text-title">Tri koraka</h2>
            </div>
          </FocusReveal>

          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-sm bg-hairline lg:grid-cols-3">
            {opticsSteps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="h-full bg-background p-7">
                  <p className="numeric font-display text-[1.75rem] leading-none text-accent">
                    {step.n}
                  </p>
                  <h3 className="mt-4 text-subheading font-sans font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Salon gallery */}
      <section
        id="salon"
        className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground section-y"
      >
        <div className="shell relative">
          <FocusReveal>
            <div className="max-w-2xl">
              <Eyebrow>Naš salon</Eyebrow>
              <h2 className="mt-4 text-title">
                Okvire birate{" "}
                <em className="wonk not-italic text-accent">uživo</em>
              </h2>
              <p className="mt-6 text-lead text-muted-foreground">
                Sve što vidite na ovim fotografijama je u salonu, na
                Bosne Srebrene 6. Okvir se proba na licu, uz ogledalo i uz
                mišljenje optičara — ne bira se sa slike u katalogu.
              </p>
            </div>
          </FocusReveal>

          {/* First photo takes the full width of the grid on desktop; the three
              tighter shots sit under it as a row of thirds. */}
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo, index) => (
              <StaggerItem
                key={photo.src}
                className={index === 0 ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <div
                  className={`relative overflow-hidden rounded-sm bg-surface-sunken ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={photo.blur}
                    sizes={
                      index === 0
                        ? "(min-width: 1280px) 1152px, 100vw"
                        : "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                    }
                    className="object-cover transition-transform duration-700 ease-[var(--ease-optical)] hover:scale-[1.03]"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FocusReveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center gap-3 rule-t pt-9">
              <p className="mr-auto max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
                Tražite određeni brend ili okvir za dijete? Pozovite prije
                dolaska i provjerićemo šta imamo na stanju.
              </p>
              <Button size="lg" variant="primary" asChild>
                <a href={`tel:${contact.phoneHref}`}>
                  Pozovite <span className="numeric">{contact.phoneDisplay}</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt#termin">Pošaljite upit</Link>
              </Button>
            </div>
          </FocusReveal>
        </div>
      </section>
    </main>
  );
}
