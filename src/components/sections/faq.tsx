import Link from "next/link";
import { Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "@/components/brand/ornaments";
import { FocusReveal } from "@/components/motion/focus-reveal";
import { faqItems } from "@/lib/content/faq";
import { contact } from "@/lib/site";

/**
 * FAQ in a two-column editorial split: the heading and a fallback contact card
 * stay on the left while the questions scroll past on the right.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-surface-sunken section-y">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <FocusReveal>
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Česta pitanja</Eyebrow>
            <h2 className="mt-4 text-title">
              Prije nego{" "}
              <em className="wonk not-italic text-accent">dođete</em>
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Priprema za pregled, oporavak nakon operacije, zakazivanje i
              parking — sve što pacijenti najčešće pitaju telefonom.
            </p>

            <div className="mt-8 rounded-sm border border-hairline bg-background p-6">
              <p className="text-[0.9375rem] font-semibold text-foreground">
                Nema odgovora na vaše pitanje?
              </p>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                Pozovite nas — rado ćemo objasniti sve prije nego zakažete.
              </p>
              <a
                href={`tel:${contact.phoneHref}`}
                className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-accent"
              >
                <Phone className="size-4 text-accent" aria-hidden="true" />
                <span className="numeric">{contact.phoneInternational}</span>
              </a>
              <p className="mt-3 text-[0.8125rem] text-muted-foreground">
                Ili{" "}
                <Link
                  href="/kontakt#termin"
                  className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-[0.25em]"
                >
                  pošaljite zahtjev za termin
                </Link>
                .
              </p>
            </div>
          </div>
        </FocusReveal>

        <FocusReveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="faq-0">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FocusReveal>
      </div>
    </section>
  );
}
