/**
 * Single source of truth for clinic identity, contact (NAP) and navigation.
 * Anything that appears in more than one place — or that also has to appear in
 * structured data — lives here, so the two can never drift apart.
 */

export const site = {
  name: "Poliklinika Ghetaldus",
  shortName: "Ghetaldus",
  legalName: "Zdravstvena Ustanova Poliklinika Ghetaldus Brčko Distrikt",
  city: "Brčko",
  url: "https://poliklinikaghetaldus.com",
  locale: "bs_BA",
  lang: "bs",

  /** Used as the default document title suffix and in the footer. */
  descriptor: "Oftalmologija, očna hirurgija i optika",

  founded: 1967,
  yearsOfTradition: new Date().getFullYear() - 1967,
} as const;

export const contact = {
  street: "Bosne Srebrene 6",
  postalCode: "76100",
  city: "Brčko",
  region: "Brčko Distrikt",
  country: "Bosna i Hercegovina",
  countryCode: "BA",

  /** Display form, as locals would read it aloud. */
  phoneDisplay: "049 216-242",
  /** International display form. */
  phoneInternational: "+387 49 216-242",
  /** Dial form for tel: links — digits only, no spaces or dashes. */
  phoneHref: "+38749216242",

  email: "info@poliklinikaghetaldus.com",

  /** Approximate — replace with surveyed coordinates before launch. */
  geo: { lat: 44.8728, lng: 18.8103 },
} as const;

export const addressLine = `${contact.street}, ${contact.postalCode} ${contact.city}`;

/** Full address used for map queries and structured data. */
export const addressFull = `${contact.street}, ${contact.postalCode} ${contact.city}, ${contact.country}`;

const mapsQuery = encodeURIComponent(`${site.legalName}, ${addressFull}`);

export const maps = {
  /** Keyless embed — no API key or billing account required. */
  embedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  /** Opens turn-by-turn directions in the user's map app. */
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
} as const;

/**
 * Opening hours. `days` uses schema.org DayOfWeek values so this array can be
 * emitted directly as openingHoursSpecification.
 */
export const openingHours = [
  {
    label: "Ponedjeljak – Subota",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  {
    label: "Nedjelja",
    days: ["Sunday"],
    opens: null,
    closes: null,
  },
] as const;

export const navigation = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Usluge", href: "/usluge" },
  { label: "Operacija katarakte", href: "/operacija-katarakte" },
  { label: "Optika", href: "/optika" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const primaryCta = {
  label: "Rezerviši termin",
  href: "/kontakt#termin",
} as const;

export const secondaryCta = {
  label: `Pozovite ${contact.phoneDisplay}`,
  href: `tel:${contact.phoneHref}`,
} as const;

/**
 * Service shortcuts for the footer. Deep links into /usluge sections until
 * those pages exist in Phase 4 — deliberately excludes every service the
 * clinic no longer offers.
 */
export const footerServices = [
  { label: "Oftalmološki pregledi", href: "/usluge#dijagnostika" },
  { label: "OCT dijagnostika", href: "/usluge#dijagnostika" },
  { label: "Operacija katarakte", href: "/operacija-katarakte" },
  { label: "Anti-VEGF terapija", href: "/usluge#hirurgija" },
  { label: "Hirurgija očnih kapaka", href: "/usluge#hirurgija" },
  { label: "Očna optika", href: "/optika" },
  { label: "Widex slušni aparati", href: "/optika#widex" },
] as const;

/** The three promises the clinic is built on — used in the trust strip. */
export const brandPillars = [
  {
    title: "Savremena tehnologija",
    body: "OCT, kompjuterizovano vidno polje i fakoemulzifikacija — dijagnostika i hirurgija na nivou regionalnih centara.",
  },
  {
    title: "Bez čekanja",
    body: "Termin znači termin. Pregled počinje u vrijeme za koje ste zakazani.",
  },
  {
    title: "Stručni kadar",
    body: "Specijalisti sa međunarodnim obrazovanjem i kontinuiranom edukacijom na domaćim i stranim kongresima.",
  },
] as const;
