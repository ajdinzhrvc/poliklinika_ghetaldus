import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { FactsStrip } from "@/components/sections/facts-strip";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Cataract } from "@/components/sections/cataract";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, medicalClinicSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  // The root title is already the clinic name + descriptor, so this page opts
  // out of the "%s — …" template rather than repeating the name twice.
  title: {
    absolute: `${site.name} ${site.city} — ${site.descriptor}`,
  },
  description:
    "Specijalizovani centar za oftalmologiju, očnu hirurgiju i optiku u Brčkom. Kompletan oftalmološki pregled, OCT dijagnostika, operacija katarakte i salon optike — tradicija od 1967.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[medicalClinicSchema(), faqSchema()]} />
      <Hero />
      <FactsStrip />
      <Services />
      <About />
      <Cataract />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}
