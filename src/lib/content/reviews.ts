/**
 * Patient reviews from the clinic's Google profile.
 *
 * EDITORIAL NOTE — two deliberate departures from the raw source, both flagged
 * for the client to approve:
 *
 * 1. Spelling and spacing were lightly corrected where the original had obvious
 *    typos or run-together words ("zuzetno" → "Izuzetno", "rečjubaznomi" →
 *    "ljubazno"). Wording, voice and meaning are untouched — including
 *    colloquialisms like "insani", which are part of why these read as real.
 *
 * 2. Maja Softić's review originally praised the clinic's laboratory test
 *    prices. The clinic no longer performs lab work, so quoting it would
 *    advertise a discontinued service. That sentence is removed; the rest of
 *    her review stands.
 *
 * `verifyName` marks an attribution whose exact spelling should be confirmed
 * against the Google profile before launch.
 */

export type Review = {
  name: string;
  city?: string;
  quote: string;
  featured?: boolean;
  verifyName?: boolean;
};

export const reviews: readonly Review[] = [
  {
    name: "Ema",
    city: "Tuzla",
    featured: true,
    quote:
      "Topla preporuka za polikliniku i uposlenike. Prvobitno su insani od ljudi, a veliki specijalisti — malo je ovakvih u regionu. Svaka čast i sretno u daljem radu, od srca.",
  },
  {
    name: "Enver Salkanović",
    quote:
      "Odlična poliklinika. Od skora nudi i operacije katarakte, što uveliko olakšava operacije starijoj populaciji koja bi za put u Beograd morala izdvojiti dodatnih 100 do 150 KM.",
  },
  {
    name: "Aldin Softić",
    quote:
      "Sve pohvale za ovakvu ustanovu na ovim prostorima. Vrhunska ponuda usluga i sama aparatura kojom poliklinika raspolaže, te ljubazno i susretljivo osoblje zajedno s doktorima, koji uvijek maksimalno izlaze u susret pacijentima.",
  },
  {
    name: "Maja Softić",
    city: "Tuzla",
    quote:
      "Izuzetno kvalitetna usluga, osoblje predivno, susretljivo i ljubazno. Doktori imaju predivan pristup pacijentu. Postoji i mogućnost slanja nalaza na e-mail. Zadovoljstvo je biti njihov pacijent.",
  },
  {
    name: "Zora Kapetanović",
    verifyName: true,
    quote:
      "Svima mogu preporučiti našu najbolju kliniku Ghetaldus Brčko. Sve pohvale za dr. Popović-Beganović, najbolji ste.",
  },
  {
    name: "Aleksandar Krsić",
    quote:
      "Sve pohvale i preporuke. Stručno i profesionalno obavljaju svoj posao.",
  },
] as const;

/**
 * Regions patients travel from — drawn from the reviews themselves rather than
 * invented. Used as quiet social proof beside the hero.
 */
export const patientOrigins = [
  "Brčko Distrikt",
  "Tuzla",
  "Bijeljina",
  "Posavina",
] as const;
