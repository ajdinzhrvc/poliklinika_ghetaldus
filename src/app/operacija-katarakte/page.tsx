import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow, IrisMark, LensDivider } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { photos } from "@/lib/photos";
import { faqItems } from "@/lib/content/faq";
import { contact, primaryCta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Operacija katarakte",
  description:
    "Fakoemulzifikacija — savremena, bezbolna operacija mrene u lokalnoj anesteziji, bez šavova, uz ugradnju monofokalnih, toričnih ili multifokalnih intraokularnih sočiva. U Brčkom, bez putovanja.",
  alternates: { canonical: "/operacija-katarakte" },
};

const symptoms = [
  "Vid kao kroz zamagljeno staklo ili maglu",
  "Blijeđenje i „ispiranje“ boja",
  "Bliještanje i oreoli oko svjetla, posebno pri vožnji noću",
  "Sve češće mijenjanje dioptrije naočala",
  "Otežano čitanje pri slabijem osvjetljenju",
  "Dvostruke slike na jednom oku",
] as const;

const steps = [
  {
    n: "01",
    title: "Konsultacija i dijagnostika",
    body: "Kompletan oftalmološki pregled, biomikroskopija i mjerenje očnog pritiska. Biometrijom određujemo tačnu jačinu sočiva koje ćemo ugraditi.",
  },
  {
    n: "02",
    title: "Izbor sočiva",
    body: "Zajedno birate tip intraokularnog sočiva — u odnosu na stanje mrežnjače, oblik rožnjače i vaše dnevne navike i očekivanja od vida.",
  },
  {
    n: "03",
    title: "Zahvat",
    body: "Kroz rez od oko dva milimetra zamućeno sočivo se ultrazvukom razgrađuje i odstranjuje, a na njegovo mjesto se ugrađuje vještačko sočivo. Bez šavova, u lokalnoj anesteziji, 15 do 20 minuta.",
  },
  {
    n: "04",
    title: "Isti dan kući",
    body: "Nakon kratkog odmora i provjere idete kući. Dobijate kapi po tačnoj shemi i pisane upute šta smijete, a šta ne.",
  },
  {
    n: "05",
    title: "Kontrole i naočale",
    body: "Kontrole su zakazane unaprijed. Kada se oko stabilizuje, u našoj optici određujemo konačnu dioptriju ako su vam naočale još potrebne.",
  },
] as const;

const lenses = [
  {
    name: "Monofokalno sočivo",
    body: "Oštar vid na jednoj udaljenosti — najčešće na daljinu. Za čitanje su potrebne naočale. Najprovjereniji i najpredvidljiviji izbor.",
  },
  {
    name: "Toričko sočivo",
    body: "Uz katarakat korigira i astigmatizam rožnjače, pa je vid na daljinu oštriji nego što bi bio uz standardno sočivo.",
  },
  {
    name: "Multifokalno sočivo",
    body: "Dobar vid i na daljinu i na blizinu, uz znatno veću samostalnost od naočala. Zahtijeva zdravu mrežnjaču i realna očekivanja.",
  },
] as const;

/* The cataract-specific questions already live in the shared FAQ set — reuse
   them here instead of writing a second, divergent copy. */
const cataractFaqKeywords = ["katarakte", "sočivo", "operacij"];
const cataractFaq = faqItems.filter((item) =>
  cataractFaqKeywords.some((k) => item.question.toLowerCase().includes(k)),
);

function procedureSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Operacija katarakte (fakoemulzifikacija)",
    alternateName: "Fakoemulzifikacija",
    procedureType: "https://schema.org/SurgicalProcedure",
    bodyLocation: "Oko",
    howPerformed:
      "Kroz rez od približno dva milimetra zamućeno prirodno sočivo razgrađuje se ultrazvukom i odstranjuje, nakon čega se ugrađuje vještačko intraokularno sočivo. Zahvat se izvodi u lokalnoj anesteziji, bez šavova.",
    preparation:
      "Kompletan oftalmološki pregled sa biomikroskopijom, tonometrijom i biometrijom radi određivanja jačine intraokularnog sočiva.",
    followup:
      "Kapi po propisanoj shemi, zakazane kontrole i određivanje konačne dioptrije nakon stabilizacije oka.",
    provider: { "@id": `${site.url}/#klinika` },
  };
}

function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cataractFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export default function CataractPage() {
  return (
    <main>
      <JsonLd data={[procedureSchema(), faqPageSchema()]} />

      <PageHero
        eyebrow="Očna hirurgija"
        title={
          <>
            Operacija katarakte{" "}
            <em className="wonk not-italic text-accent">u Brčkom</em>
          </>
        }
        lede="Fakoemulzifikacija je danas najčešća i najprovjerenija operacija u medicini. Bezbolna je, traje 15 do 20 minuta, izvodi se u lokalnoj anesteziji i bez šavova — a kući idete istog dana."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" variant="primary" asChild>
            <Link href={primaryCta.href}>Zakaži konsultaciju</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`tel:${contact.phoneHref}`}>
              Pozovite <span className="numeric">{contact.phoneDisplay}</span>
            </a>
          </Button>
        </div>
      </PageHero>

      {/* What it is + symptoms */}
      <section className="section-y">
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <FocusReveal>
            <Eyebrow>Šta je katarakta</Eyebrow>
            <h2 className="mt-4 text-title">
              Mrena nije bolest —{" "}
              <em className="wonk not-italic text-accent">to je zamućenje</em>
            </h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                Katarakta je zamućenje prirodnog sočiva oka. Dolazi postepeno, s
                godinama, i najčešće se ne osjeti kao bol nego kao vid koji
                „slabi“ — kao da gledate kroz zamagljeno staklo koje se ne može
                obrisati.
              </p>
              <p>
                Zamućeno sočivo se ne može razbistriti kapima, lijekovima ni
                naočalama. Jedini način je zamijeniti ga vještačkim
                intraokularnim sočivom — i upravo to je operacija katarakte.
              </p>
              <p>
                Dobra vijest je da nema potrebe čekati da vid postane vrlo slab.
                Zahvat se danas radi ranije i sigurnije nego prije, a oporavak
                je kratak.
              </p>
            </div>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <div className="rounded-sm border border-hairline bg-surface-sunken p-7">
              <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
                Znakovi na koje treba obratiti pažnju
              </h3>
              <ul className="mt-5 space-y-3">
                {symptoms.map((symptom) => (
                  <li key={symptom} className="flex gap-2.5">
                    <IrisMark className="mt-1 size-3 shrink-0 text-accent" />
                    <span className="text-[0.9375rem] leading-relaxed">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rule-t pt-5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                Ovi znakovi ne moraju značiti kataraktu — mogu upućivati i na
                druga stanja. Zato prvi korak nije operacija, nego pregled.
              </p>
            </div>
          </FocusReveal>
        </div>
      </section>

      {/* Why here */}
      <section className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground section-y">
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FocusReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-sunken shadow-float">
              <Image
                src={photos.eksterijer.src}
                alt={photos.eksterijer.alt}
                fill
                placeholder="blur"
                blurDataURL={photos.eksterijer.blur}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <Eyebrow>Zašto kod nas</Eyebrow>
            <h2 className="mt-4 text-title">Bez puta u drugi grad</h2>
            <p className="mt-6 text-lead text-muted-foreground">
              Do nedavno je operacija katarakte za pacijente iz Brčkog, Posavine
              i okoline značila put u Beograd — i dodatni trošak od 100 do 150 KM
              samo na prevoz, prije samog zahvata.
            </p>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Danas se zahvat radi ovdje. Za stariju populaciju, kojoj je svako
              putovanje napor, to nije samo pitanje udobnosti — nego i to hoće li
              se na operaciju uopšte otići. Isti tim koji vas pregleda vas i
              operiše i vodi kroz kontrole.
            </p>

            <LensDivider className="my-8" />

            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                ["Lokalna anestezija", "Bez opšte anestezije"],
                ["Bez šavova", "Rez od oko 2 mm"],
                ["Kući istog dana", "Bez bolničkog ležanja"],
              ].map(([label, detail]) => (
                <div key={label}>
                  <dt className="font-sans text-[0.9375rem] font-semibold">
                    {label}
                  </dt>
                  <dd className="mt-1 text-[0.8125rem] text-muted-foreground">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </FocusReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section-y">
        <div className="shell">
          <FocusReveal>
            <div className="max-w-2xl">
              <Eyebrow>Kako izgleda put</Eyebrow>
              <h2 className="mt-4 text-title">Od pregleda do naočala</h2>
            </div>
          </FocusReveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-sm bg-hairline md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="h-full bg-background p-6">
                  <p className="numeric font-display text-[1.5rem] leading-none text-accent">
                    {step.n}
                  </p>
                  <h3 className="mt-4 font-sans text-[1rem] font-semibold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lenses */}
      <section className="bg-surface-sunken section-y">
        <div className="shell">
          <FocusReveal>
            <div className="max-w-2xl">
              <Eyebrow>Intraokularna sočiva</Eyebrow>
              <h2 className="mt-4 text-title">
                Sočivo se bira{" "}
                <em className="wonk not-italic text-accent">za vaš život</em>
              </h2>
              <p className="mt-5 text-lead text-muted-foreground">
                Ne postoji jedno najbolje sočivo — postoji ono koje najbolje
                odgovara stanju vašeg oka i onome što od vida očekujete.
              </p>
            </div>
          </FocusReveal>

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {lenses.map((lens) => (
              <StaggerItem key={lens.name}>
                <article className="h-full rounded-sm border border-hairline bg-background p-7">
                  <IrisMark className="size-4 text-accent" />
                  <h3 className="mt-4 text-subheading font-sans font-semibold">
                    {lens.name}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {lens.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FocusReveal>
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Česta pitanja</Eyebrow>
              <h2 className="mt-4 text-title">Ono što pacijenti pitaju</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Ako vas nešto brine a nije navedeno, pozovite nas prije
                zakazivanja — objasnićemo bez obaveze.
              </p>
              <Button variant="accent" asChild className="mt-7">
                <a href={`tel:${contact.phoneHref}`}>
                  <span className="numeric">{contact.phoneInternational}</span>
                </a>
              </Button>
            </div>
          </FocusReveal>

          <FocusReveal delay={0.1}>
            <Accordion type="single" collapsible defaultValue="cat-0">
              {cataractFaq.map((item, i) => (
                <AccordionItem key={item.question} value={`cat-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FocusReveal>
        </div>
      </section>
    </main>
  );
}
