import { placeholder } from "@/lib/placeholders";

/**
 * The three service pillars. This list is the authoritative catalogue for the
 * whole site — the home grid, the footer and the /usluge pages all read from it.
 *
 * Scope is strictly ophthalmology, ophthalmic surgery and optics. The clinic no
 * longer performs general medical examinations, occupational medicine, lab work
 * or any other specialty; nothing of that kind belongs in this file.
 */

export type ServicePillar = {
  id: string;
  number: string;
  title: string;
  summary: string;
  items: readonly { label: string; detail: string }[];
  href: string;
  image: { src: string; alt: string };
};

export const servicePillars: readonly ServicePillar[] = [
  {
    id: "dijagnostika",
    number: "01",
    title: "Dijagnostika i pregledi vida",
    summary:
      "Kompletna specijalistička obrada oka na savremenim aparatima — od oštrine vida do slojevitog snimka mrežnjače.",
    items: [
      {
        label: "Kompletan oftalmološki pregled",
        detail:
          "Oštrina vida, kompjuterska refraktometrija, biomikroskopija prednjeg i zadnjeg segmenta i tonometrija.",
      },
      {
        label: "Određivanje dioptrije i kontaktnih sočiva",
        detail:
          "Precizna korekcija vida, proba sočiva i edukacija pacijenta za samostalno nošenje.",
      },
      {
        label: "OCT — optička koherentna tomografija",
        detail:
          "Slojeviti snimak mrežnjače i očnog živca za rano otkrivanje glaukoma i oboljenja makule.",
      },
      {
        label: "Kompjuterizovano vidno polje",
        detail: "Analiza funkcionalnih ispada vidnog polja.",
      },
      {
        label: "Ultrazvučni pregled oka",
        detail:
          "Precizna ultrazvučna dijagnostika unutrašnjih struktura oka.",
      },
    ],
    href: "/usluge#dijagnostika",
    image: placeholder.eyeMacro,
  },
  {
    id: "hirurgija",
    number: "02",
    title: "Očna hirurgija",
    summary:
      "Operativni zahvati u lokalnoj anesteziji, u vlastitoj sali — bez putovanja u druge centre.",
    items: [
      {
        label: "Operacija katarakte (fakoemulzifikacija)",
        detail:
          "Bezbolno uklanjanje mrene u lokalnoj anesteziji, uz ugradnju monofokalnih, toričnih ili multifokalnih intraokularnih sočiva.",
      },
      {
        label: "Zamjena intraokularnog sočiva",
        detail: "IOL exchange kada ugrađeno sočivo treba zamijeniti.",
      },
      {
        label: "Kombinovane operacije",
        detail: "Istovremeni zahvati na katarakti i glaukomu.",
      },
      {
        label: "Anti-VEGF terapija",
        detail:
          "Intravitrealna aplikacija lijekova za makularnu degeneraciju i dijabetesnu retinopatiju.",
      },
      {
        label: "Ektropion, entropion i ksantelazme",
        detail: "Plastično-rekonstruktivni zahvati na očnim kapcima.",
      },
      {
        label: "Blefaroplastika i operacija halaciona",
        detail: "Estetski i funkcionalni zahvati na kapcima.",
      },
    ],
    href: "/operacija-katarakte",
    image: placeholder.surgery,
  },
  {
    id: "optika",
    number: "03",
    title: "Očna optika i slušni aparati",
    summary:
      "Salon optike u istoj zgradi — dioptrija utvrđena kod specijaliste postaje naočale bez dodatnog odlaska.",
    items: [
      {
        label: "Dioptrijski i sunčani okviri",
        detail:
          "Veliki izbor okvira renomiranih brendova za sve uzraste.",
      },
      {
        label: "Vrhunska stakla sa zaštitnim slojevima",
        detail:
          "Antirefleksni, tvrdi i UV zaštitni slojevi, jednofokalna i progresivna stakla.",
      },
      {
        label: "Widex slušni aparati",
        detail:
          "Distribucija, prilagođavanje i servis digitalnih Widex slušnih aparata.",
      },
      {
        label: "Servox govorni aparati",
        detail: "Distribucija i održavanje Servox govornih aparata.",
      },
    ],
    href: "/optika",
    image: placeholder.eyewear,
  },
] as const;

/** Facts strip under the hero. Deliberately verifiable, not marketing puffery. */
export const clinicFacts = [
  {
    value: "1967",
    label: "Ghetaldus tradicija u Brčkom",
    detail: "Kao poslovna jedinica Optičke industrije Ghetaldus Zagreb.",
  },
  {
    value: "50+",
    label: "Godina rada kao poliklinika",
    detail: "Neprekinut kontinuitet u oftalmologiji i optici.",
  },
  {
    value: "OCT",
    label: "Slojevita dijagnostika",
    detail: "Snimak mrežnjače i očnog živca u rezoluciji mikrometara.",
  },
  {
    value: "Phaco",
    label: "Fakoemulzifikacija",
    detail: "Savremena metoda operacije katarakte u lokalnoj anesteziji.",
  },
] as const;
