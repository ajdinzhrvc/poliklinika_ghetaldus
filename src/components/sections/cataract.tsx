import Image from "next/image";
import Link from "next/link";
import { Clock, Home, Syringe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eyebrow, IrisMark, Topography } from "@/components/brand/ornaments";
import { FocusReveal } from "@/components/motion/focus-reveal";
import { placeholder } from "@/lib/placeholders";

const quickFacts = [
  { icon: Syringe, label: "Lokalna anestezija", detail: "Bez opšte anestezije" },
  { icon: Clock, label: "15–20 minuta", detail: "Trajanje zahvata po oku" },
  { icon: Home, label: "Kući istog dana", detail: "Bez bolničkog ležanja" },
] as const;

const lenses = [
  {
    name: "Monofokalno sočivo",
    detail: "Oštar vid na jednoj udaljenosti, uz naočale za čitanje.",
  },
  {
    name: "Toričko sočivo",
    detail: "Dodatno korigira astigmatizam rožnjače.",
  },
  {
    name: "Multifokalno sočivo",
    detail: "Dobar vid i na daljinu i na blizinu, uz veću samostalnost.",
  },
] as const;

/**
 * Flagship service band. The strongest argument here is geographic, and it came
 * from a patient rather than from marketing: this procedure used to mean a trip
 * to Belgrade. Saying that plainly is more persuasive than any superlative.
 */
export function Cataract() {
  return (
    <section
      id="katarakta"
      className="on-ink paper-grain relative isolate overflow-hidden bg-background text-foreground section-y"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[48rem] text-royal-300 opacity-[0.2]"
      >
        <Topography rings={10} />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lens-wash-soft"
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <FocusReveal>
          <Eyebrow>Operacija katarakte</Eyebrow>
          <h2 className="mt-4 text-title">
            Mrena se skida{" "}
            <em className="wonk not-italic text-accent">u Brčkom</em>
          </h2>

          <p className="mt-6 max-w-xl text-lead text-muted-foreground">
            Fakoemulzifikacija je savremena metoda uklanjanja mrene: kroz rez od
            oko dva milimetra zamućeno sočivo se razgrađuje ultrazvukom i
            zamjenjuje vještačkim intraokularnim sočivom. Bez šavova, bez opšte
            anestezije, bez noćenja u bolnici.
          </p>

          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Do nedavno je ovaj zahvat za pacijente iz našeg regiona značio put u
            Beograd i dodatne troškove. Danas se radi ovdje — što je posebno
            važno starijim pacijentima kojima je svako putovanje napor.
          </p>

          <dl className="mt-10 grid gap-6 rule-t pt-8 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <fact.icon
                  aria-hidden="true"
                  className="size-5 text-accent"
                  strokeWidth={1.5}
                />
                <dt className="mt-3 font-sans text-[0.9375rem] font-semibold text-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[0.8125rem] text-muted-foreground">
                  {fact.detail}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" variant="primary" asChild>
              <Link href="/operacija-katarakte">Kako izgleda zahvat</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/kontakt#termin">Zakaži konsultaciju</Link>
            </Button>
          </div>
        </FocusReveal>

        <FocusReveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-sunken shadow-float">
            <Image
              src={placeholder.surgery.src}
              alt={placeholder.surgery.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8">
            <h3 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
              Izbor intraokularnog sočiva
            </h3>
            <ul className="mt-4 space-y-3.5">
              {lenses.map((lens) => (
                <li key={lens.name} className="flex gap-2.5">
                  <IrisMark className="mt-1 size-3 shrink-0 text-accent" />
                  <div>
                    <p className="text-[0.9375rem] font-semibold text-foreground">
                      {lens.name}
                    </p>
                    <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                      {lens.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FocusReveal>
      </div>
    </section>
  );
}
