import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow, IrisMark, LensDivider } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { placeholder } from "@/lib/placeholders";
import { contact, primaryCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Očna optika i slušni aparati",
  description:
    "Salon očne optike u Brčkom — dioptrijski i sunčani okviri, stakla sa antirefleksnim i UV zaštitnim slojevima, progresivna stakla. Distribucija i servis Widex slušnih aparata i Servox govornih aparata.",
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

const widexServices = [
  "Odabir i prilagođavanje digitalnih Widex slušnih aparata",
  "Programiranje aparata prema nalazu sluha",
  "Redovan servis, čišćenje i zamjena potrošnih dijelova",
  "Distribucija i održavanje Servox govornih aparata",
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
            <Link href="#widex">Widex slušni aparati</Link>
          </Button>
        </div>
      </PageHero>

      {/* Frames + process */}
      <section className="section-y">
        <div className="shell grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FocusReveal>
            <div className="arch relative aspect-[3/4] overflow-hidden bg-surface-sunken shadow-lift">
              <Image
                src={placeholder.eyewear.src}
                alt={placeholder.eyewear.alt}
                fill
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

      {/* Widex */}
      <section
        id="widex"
        className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground section-y"
      >
        <div className="shell relative grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <FocusReveal>
            <Eyebrow>Widex i Servox</Eyebrow>
            <h2 className="mt-4 text-title">Slušni i govorni aparati</h2>
            <p className="mt-6 text-lead text-muted-foreground">
              Uz očnu optiku, ovlašteni smo distributer i serviser digitalnih
              Widex slušnih aparata te Servox govornih aparata. Aparat se ne
              prodaje „iz kutije“ — programira se i prilagođava, a zatim redovno
              servisira.
            </p>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Za mnoge naše pacijente to znači jedno mjesto za dvije stvari koje
              najviše utiču na svakodnevnu samostalnost: vid i sluh.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
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

          <FocusReveal delay={0.1}>
            <div className="rounded-sm border border-hairline bg-surface p-7">
              <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                Šta obuhvata usluga
              </h3>
              <ul className="mt-5 space-y-3.5">
                {widexServices.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <IrisMark className="mt-1 size-3 shrink-0 text-accent" />
                    <span className="text-[0.9375rem] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FocusReveal>
        </div>
      </section>
    </main>
  );
}
