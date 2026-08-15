import { faqItems } from "@/lib/content/faq";
import { servicePillars } from "@/lib/content/services";
import { contact, openingHours, site } from "@/lib/site";

/**
 * JSON-LD builders. Everything reads from the same modules the visible page
 * reads from, so structured data cannot drift away from the rendered copy.
 *
 * Deliberately omitted: aggregateRating. Google requires it to reflect a real,
 * verifiable average, and no confirmed figure exists yet — inventing one would
 * be both a policy violation and a lie. Add it once the client supplies it.
 */

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${site.url}/#klinika`,
    name: `${site.name} ${site.city}`,
    legalName: site.legalName,
    description: `Specijalizovani centar za oftalmologiju, očnu hirurgiju i optiku u ${site.city}u. Tradicija od ${site.founded}. godine.`,
    url: site.url,
    telephone: contact.phoneInternational,
    email: contact.email,
    foundingDate: String(site.founded),
    medicalSpecialty: "Ophthalmologic",
    currenciesAccepted: "BAM",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressLocality: contact.city,
      postalCode: contact.postalCode,
      addressRegion: contact.region,
      addressCountry: contact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.lat,
      longitude: contact.geo.lng,
    },
    openingHoursSpecification: openingHours
      .filter((slot) => slot.opens !== null)
      .map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.days.map((day) => `https://schema.org/${day}`),
        opens: slot.opens,
        closes: slot.closes,
      })),
    availableService: servicePillars.flatMap((pillar) =>
      pillar.items.map((item) => ({
        "@type": "MedicalProcedure",
        name: item.label,
        description: item.detail,
        category: pillar.title,
      })),
    ),
    areaServed: [
      "Brčko Distrikt",
      "Tuzlanski kanton",
      "Bijeljina",
      "Posavina",
      "Bosna i Hercegovina",
    ].map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
