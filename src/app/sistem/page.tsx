import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/brand/logo";
import {
  AcuityMark,
  Eyebrow,
  IrisMark,
  LensDivider,
  LensRings,
  Topography,
} from "@/components/brand/ornaments";
import {
  FocusReveal,
  Stagger,
  StaggerItem,
} from "@/components/motion/focus-reveal";
import { photos } from "@/lib/photos";
import { brandPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sistem dizajna",
  robots: { index: false, follow: false },
};

const SCALES = [
  {
    name: "Royal",
    note: "Jedini brend glas. 700–800 za površine, 600 za interakciju, 950 za invertovane sekcije.",
    prefix: "royal",
    steps: [
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "950",
    ],
  },
  {
    name: "Ink",
    note: "Hladni neutrali za tekst i tihi UI. Niska zasićenost — royal uvijek ostaje najglasniji.",
    prefix: "ink",
    steps: [
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "950",
    ],
  },
  {
    name: "Bone",
    note: "Topli papirni neutrali — podloga cijelog sajta umjesto sterilno bijele.",
    prefix: "bone",
    steps: ["50", "100", "200", "300", "400", "500"],
  },
  {
    name: "Sand",
    note: "Namjerno prigušen. Nije akcent — samo tekstura i ornament, da stranica ne postane hladna.",
    prefix: "sand",
    steps: ["100", "200", "300", "400", "500"],
  },
] as const;

const TYPE_SPECIMEN = [
  { cls: "text-display font-display", token: "text-display", sample: "Vid" },
  {
    cls: "text-title font-display",
    token: "text-title",
    sample: "Operacija katarakte",
  },
  {
    cls: "text-heading font-display",
    token: "text-heading",
    sample: "Optička koherentna tomografija",
  },
  {
    cls: "text-subheading font-sans font-semibold",
    token: "text-subheading",
    sample: "Fakoemulzifikacija bez šavova",
  },
  {
    cls: "text-lead font-sans text-muted-foreground",
    token: "text-lead",
    sample:
      "Precizna dijagnostika mrežnjače i očnog živca za rano otkrivanje glaukoma.",
  },
  {
    cls: "text-base font-sans text-muted-foreground",
    token: "text-base",
    sample:
      "Kompletan oftalmološki pregled obuhvata utvrđivanje oštrine vida, kompjutersku refraktometriju, biomikroskopiju i tonometriju.",
  },
] as const;

function Section({
  id,
  index,
  title,
  lede,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-y-tight rule-t">
      <div className="shell">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>{index}</Eyebrow>
          <h2 className="mt-3 text-heading">{title}</h2>
          {lede && (
            <p className="mt-3 text-lead text-muted-foreground">{lede}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function TokenRow({ token, value }: { token: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-hairline py-2.5 text-sm last:border-0">
      <code className="font-mono text-[0.8125rem] text-foreground">
        {token}
      </code>
      <span className="numeric text-right text-[0.8125rem] text-muted-foreground">
        {value}
      </span>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main>
      {/* ---------------- Cover ---------------- */}
      <section className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[52rem] text-royal-300 opacity-30"
        >
          <Topography rings={11} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lens-wash"
        />

        <div className="shell relative section-y">
          <div className="max-w-4xl">
            <Eyebrow>Sistem dizajna · Faza 1–2</Eyebrow>
            <h1 className="optical-left mt-5 text-display">
              Jasnoća je{" "}
              <em className="wonk not-italic text-accent">medicinski</em>{" "}
              standard.
            </h1>
            <p className="mt-7 max-w-xl text-lead text-muted-foreground">
              Duboko kraljevsko plavo nosi cijeli identitet — boja proširene
              zjenice pod biomikroskopom i hirurške draperije. Toplina dolazi iz
              papira, ne iz drugog akcenta.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" variant="primary">
                Primarni CTA
              </Button>
              <Button size="lg" variant="outline">
                Sekundarni CTA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Concept ---------------- */}
      <Section
        id="koncept"
        index="01 — Koncept"
        title="Duboko plavo, topli papir"
        lede="Umjesto zasićenog „tech plavog“ na sterilno bijelom: duboko kraljevsko plavo na toplom papiru, s ornamentom izvedenim iz snimka rožnjače — organski, nikad rasterska mreža."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Blizu monohromije",
              b: "Jedna porodica boja. Naglasak dolazi iz težine, veličine i praznog prostora — ne iz druge boje koja se nadvikuje.",
            },
            {
              t: "Bone, ne bijelo",
              b: "Topla papirna podloga (#fcfaf6) sa suptilnom teksturom. Manje bljeska pri čitanju, više osjećaja ustanove s tradicijom.",
            },
            {
              t: "Kontura, ne mreža",
              b: "Ornament su izohipse rožnjače i prstenovi irisa. Krivulje čitaju kao anatomija; ravna mreža čita kao IT firma.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-sm border border-hairline bg-surface p-6 shadow-hairline"
            >
              <IrisMark className="size-4 text-accent" />
              <h3 className="mt-4 text-subheading font-sans font-semibold">
                {c.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Colour ---------------- */}
      <Section
        id="boje"
        index="02 — Boja"
        title="Palete"
        lede="Royal je jedini glas. Sand se nikada ne koristi kao akcent — samo kao tekstura i ornament."
      >
        <div className="space-y-10">
          {SCALES.map((scale) => (
            <div key={scale.name}>
              <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-subheading font-sans font-semibold">
                  {scale.name}
                </h3>
                <p className="max-w-xl text-sm text-muted-foreground">
                  {scale.note}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {scale.steps.map((step) => (
                  <div key={step} className="w-[4.5rem]">
                    <div
                      className="h-16 rounded-sm border border-hairline"
                      style={{
                        backgroundColor: `var(--${scale.prefix}-${step})`,
                      }}
                    />
                    <p className="numeric mt-1.5 text-[0.6875rem] text-subtle-foreground">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Scoped inversion ---------------- */}
      <Section
        id="scope"
        index="03 — Semantički tokeni"
        title="Jedna klasa mijenja cijelu sekciju"
        lede="Semantički tokeni su scoped. Klase .on-ink i .on-royal redefinišu ih, pa se svaka komponenta unutra — uključujući shadcn — automatski invertuje."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { cls: "", label: "default (bone)" },
            { cls: "on-ink", label: ".on-ink" },
            { cls: "on-royal", label: ".on-royal" },
          ].map((scope) => (
            <div
              key={scope.label}
              className={`${scope.cls} rounded-sm border border-hairline bg-background p-6 text-foreground`}
            >
              <code className="text-[0.75rem] text-accent">{scope.label}</code>
              <h3 className="mt-3 text-heading">Termin znači termin</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pregled počinje u vrijeme za koje ste zakazani.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button size="sm">Primarni</Button>
                <Button size="sm" variant="accent">
                  Akcent
                </Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
              </div>
              <div className="mt-5 rounded-sm bg-surface p-3 text-xs text-muted-foreground">
                bg-surface unutar scope-a
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Type ---------------- */}
      <Section
        id="tipografija"
        index="04 — Tipografija"
        title="Fraunces + Instrument Sans"
        lede="Varijabilni serif za naslove (autoritet, 1967) i grotesk za tekst (klinička čitljivost). Obje familije nose latin-ext — č, ć, ž, š, đ se renderuju iz pravog fonta."
      >
        <div className="space-y-7">
          {TYPE_SPECIMEN.map((t) => (
            <div key={t.token} className="rule-b pb-6">
              <code className="text-[0.6875rem] uppercase tracking-widest text-subtle-foreground">
                {t.token}
              </code>
              <p className={`mt-2 ${t.cls}`}>{t.sample}</p>
            </div>
          ))}
          <div className="rounded-sm bg-surface-sunken p-6">
            <code className="text-[0.6875rem] uppercase tracking-widest text-subtle-foreground">
              .wonk — akcentna varijanta osi
            </code>
            <p className="mt-2 font-display text-title">
              Bez čekanja.{" "}
              <em className="wonk not-italic text-accent">Bez improvizacije.</em>
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------- Shape & ornament ---------------- */}
      <Section
        id="oblik"
        index="05 — Oblik i ornament"
        title="Luk, kontura, zrno"
        lede="Radijusi su tijesni (2–10px). Jedini ekspresivni oblik je luk sočiva — nosi ga fotografija, ne kartice. Tekstura je papirno zrno, ne raster."
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="arch relative aspect-[3/4] overflow-hidden bg-surface-sunken">
              <Image
                src={photos.okviriDetalj.src}
                alt={photos.okviriDetalj.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <code className="text-accent">.arch</code> — luk sočiva na
              portretnoj fotografiji. Potpisni oblik sistema.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-sm border border-hairline bg-surface p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-16 size-72 text-royal-500 opacity-70"
              >
                <Topography />
              </div>
              <p className="relative text-sm text-muted-foreground">
                <code className="text-accent">&lt;Topography /&gt;</code> —
                izohipse rožnjače. Glavni ornament sistema.
              </p>
            </div>

            <div className="paper-grain relative overflow-hidden rounded-sm border border-hairline bg-surface-sunken p-8">
              <p className="relative text-sm text-muted-foreground">
                <code className="text-accent">.paper-grain</code> — papirno
                zrno preko podloge. Zamjenjuje raster mrežu.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-hairline bg-surface p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-56 text-royal-400"
              >
                <LensRings />
              </div>
              <p className="relative text-sm text-muted-foreground">
                <code className="text-accent">&lt;LensRings /&gt;</code> —
                tiši, koncentrični prstenovi irisa.
              </p>
            </div>

            <div className="rounded-sm border border-hairline bg-surface p-8">
              <LensDivider />
              <p className="mt-4 text-sm text-muted-foreground">
                <code className="text-accent">&lt;LensDivider /&gt;</code> —
                optička os kao razdjelnik sekcija.
              </p>
            </div>

            <div className="flex items-center gap-8 rounded-sm border border-hairline bg-surface p-8">
              <AcuityMark className="text-royal-800" />
              <p className="text-sm text-muted-foreground">
                <code className="text-accent">&lt;AcuityMark /&gt;</code> —
                Snellenova skala kao ornament.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------- Buttons ---------------- */}
      <Section
        id="komponente"
        index="06 — Komponente"
        title="Dugmad"
        lede="Uglasta (radius-sm), podižu se na hover umjesto da mijenjaju veličinu. Sve varijante čitaju scoped tokene."
      >
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 rounded-sm border border-hairline bg-surface p-6">
            <Button variant="primary">Rezerviši termin</Button>
            <Button variant="accent">Rezerviši termin</Button>
            <Button variant="outline">Saznaj više</Button>
            <Button variant="subtle">Saznaj više</Button>
            <Button variant="ghost">Saznaj više</Button>
            <Button variant="link">Sve usluge</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-sm border border-hairline bg-surface p-6">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Mark">
              <LogoMark className="size-5" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ---------------- Motion ---------------- */}
      <Section
        id="animacija"
        index="07 — Animacija"
        title="Iz zamućenja u fokus"
        lede="Kućna tranzicija: sadržaj se izoštrava iz blura, kao slika na autorefraktometru. Skrolujte — kartice ispod ulaze u fokus u nizu. Sve poštuje prefers-reduced-motion."
      >
        <Stagger className="grid gap-4 md:grid-cols-3">
          {brandPillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-sm border border-hairline bg-surface p-6 shadow-hairline">
                <IrisMark className="size-4 text-accent" />
                <h3 className="mt-4 text-subheading font-sans font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FocusReveal className="mt-10">
          <div className="on-ink rounded-sm bg-background p-10 text-foreground">
            <Eyebrow>FocusReveal</Eyebrow>
            <p className="mt-3 max-w-lg font-display text-heading">
              Blur 8px → 0, y 16px → 0, 850ms na krivulji{" "}
              <code className="text-accent">--ease-optical</code>.
            </p>
          </div>
        </FocusReveal>
      </Section>

      {/* ---------------- Shell ---------------- */}
      <Section
        id="ljuska"
        index="08 — Ljuska"
        title="Header, navigacija, podnožje"
        lede="Header ima gornju uslužnu traku (adresa, radno vrijeme, telefon) koja se skuplja pri skrolu, a glavna traka se stisne i dobije hairline i blur. Na mobilnom: full-screen drawer i akciona traka koja se pojavljuje nakon heroja."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              t: "Uslužna traka",
              b: "Adresa, radno vrijeme i telefon iznad svega ostalog — prvo što pacijent traži. Kolabira na 0 pri skrolu.",
            },
            {
              t: "Kondenzovanje pri skrolu",
              b: "80px → 64px, pozadina prelazi u 85% + backdrop-blur, pojavljuje se hairline. 500ms, --ease-optical.",
            },
            {
              t: "rule-draw navigacija",
              b: "Podvlaka se izvlači iz centra na hover i ostaje na aktivnoj stranici. Bez pomjeranja teksta.",
            },
            {
              t: "Mobilna akciona traka",
              b: "Pojavljuje se nakon 620px skrola: „Pozovite“ + „Rezerviši termin“. Ne takmiči se s CTA u heroju.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-sm border border-hairline bg-surface p-6"
            >
              <h3 className="text-subheading font-sans font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Tokens ---------------- */}
      <Section
        id="tokeni"
        index="09 — Reference"
        title="Tokeni"
        lede="Sve vrijednosti žive u globals.css. Nema magičnih brojeva u komponentama."
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-subheading font-sans font-semibold">
              Radijusi
            </h3>
            {[
              ["--radius-xs", "2px"],
              ["--radius-sm", "4px · default"],
              ["--radius-md", "6px"],
              ["--radius-lg", "10px"],
              ["--radius-xl", "16px"],
              [".arch", "999rem (gore)"],
            ].map(([t, v]) => (
              <TokenRow key={t} token={t} value={v} />
            ))}
          </div>
          <div>
            <h3 className="mb-3 text-subheading font-sans font-semibold">
              Sjene
            </h3>
            {[
              ["--shadow-hairline", "1px rub"],
              ["--shadow-lift", "kartice"],
              ["--shadow-float", "modali, akciona traka"],
              ["--shadow-accent", "akcent CTA"],
            ].map(([t, v]) => (
              <TokenRow key={t} token={t} value={v} />
            ))}
            <div className="mt-5 space-y-3">
              <div className="h-12 rounded-sm bg-surface shadow-lift" />
              <div className="h-12 rounded-sm bg-surface shadow-float" />
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-subheading font-sans font-semibold">
              Ritam i kretanje
            </h3>
            {[
              [".shell", "max 82.5rem"],
              [".section-y", "clamp(4rem, 9vw, 8.5rem)"],
              ["--ease-optical", "0.16, 1, 0.3, 1"],
              ["--ease-soft", "0.33, 1, 0.68, 1"],
              ["--ease-inout", "0.65, 0, 0.35, 1"],
            ].map(([t, v]) => (
              <TokenRow key={t} token={t} value={v} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
