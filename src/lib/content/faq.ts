import { contact, openingHours, site, visitingSpecialists } from "@/lib/site";

const visitingCities = `${visitingSpecialists.cities.slice(0, -1).join(", ")} i ${visitingSpecialists.cities.at(-1)}`;

/**
 * Home-page FAQ. Answers are written to remove the actual friction a patient
 * feels before calling: what to bring, how long it takes, what recovery is
 * really like, and where to park.
 *
 * Scope note: nothing here refers to medical certificates for driving. The
 * advice not to drive immediately after an examination is patient safety
 * following pupil dilation — a clinical instruction, not a service.
 */

export type FaqItem = { question: string; answer: string };

export const faqItems: readonly FaqItem[] = [
  {
    question: "Kako se pripremiti za oftalmološki pregled?",
    answer:
      "Donesite naočale ili kontaktna sočiva koje trenutno nosite, spisak lijekova koje uzimate i sve prethodne oftalmološke nalaze ako ih imate. Ako nosite tvrda kontaktna sočiva, izvadite ih nekoliko sati prije pregleda. Za većinu pregleda potrebno je proširiti zjenice kapima, pa vam vid ostaje zamućen i osjetljiv na svjetlo još dva do tri sata — zato ponesite sunčane naočale i organizujte da vas neko doveze i odveze kući.",
  },
  {
    question: "Koliko traje kompletan oftalmološki pregled?",
    answer:
      "Kompletan pregled sa širenjem zjenica traje od 45 do 60 minuta, jer je potrebno sačekati da kapi djeluju. Ciljani pregled ili određivanje dioptrije traje kraće. Termin počinje u vrijeme za koje ste zakazani — kod nas se ne čeka u redu.",
  },
  {
    question: "Da li je potrebno zakazati termin?",
    answer: `Jeste. Radimo isključivo po zakazanim terminima kako niko ne bi čekao. Pozovite nas na ${contact.phoneInternational} ili pošaljite zahtjev putem obrasca — javljamo se istog radnog dana i predlažemo prvi slobodan termin. Radno vrijeme: ${openingHours[0].label} od ${openingHours[0].opens} do ${openingHours[0].closes}, nedjeljom ne radimo.`,
  },
  {
    question: `Kada u polikliniku dolaze specijalisti iz ${visitingCities}?`,
    answer: `Uz naš stalni tim, kod nas povremeno primaju i doktori specijalisti iz ${visitingCities}. Raspored njihovih dolazaka se mijenja iz mjeseca u mjesec, pa termine ne objavljujemo unaprijed — pozovite nas na ${contact.phoneInternational} i reći ćemo vam tačan datum sljedećeg dolaska i prvi slobodan termin.`,
  },
  {
    question: "Da li je operacija katarakte bolna?",
    answer:
      "Nije. Fakoemulzifikacija se izvodi u lokalnoj anesteziji — oko se obezboli kapima i injekcijom, pa sam zahvat ne boli. Budni ste tokom operacije, ali ne vidite detalje zahvata i ne osjećate bol. Zahvat na jednom oku obično traje oko 15 do 20 minuta.",
  },
  {
    question: "Kako izgleda oporavak nakon operacije katarakte?",
    answer:
      "Kući idete istog dana. Prvih dana vid je zamućen i postepeno se izoštrava — većina pacijenata primijeti jasno poboljšanje već u prvoj nedjelji. Dobijate kapi po tačno određenoj shemi i zakazane kontrole. U prvih nekoliko nedjelja treba izbjegavati dizanje težih predmeta, naginjanje, trljanje oka, prašinu, bazen i saunu. Konačnu dioptriju za naočale određujemo kada se oko potpuno stabilizuje.",
  },
  {
    question: "Kada se ugrađuje multifokalno, a kada monofokalno sočivo?",
    answer:
      "Monofokalno sočivo daje oštar vid na jednoj udaljenosti — najčešće na daljinu, uz naočale za čitanje. Toričko sočivo dodatno korigira astigmatizam. Multifokalno sočivo omogućava dobar vid i na daljinu i na blizinu, uz veću samostalnost od naočala. Koje sočivo je za vas najbolje zavisi od stanja mrežnjače, oblika rožnjače i vaših dnevnih navika — o tome odlučujemo zajedno nakon dijagnostike.",
  },
  {
    question: "Ima li parkinga i da li je ulaz pristupačan?",
    answer: `Poliklinika se nalazi u ulici ${contact.street} u ${site.cityLocative}, u mirnom dijelu grada, sa parkingom u neposrednoj blizini zgrade. Ako dolazite sa slabovidnom ili starijom osobom, dovezite je do samog ulaza — javite nam pri zakazivanju pa ćemo izaći u susret.`,
  },
  {
    question: "Da li mogu doći sa uputnicom ili se pregled plaća?",
    answer:
      "Poliklinika radi kao privatna zdravstvena ustanova, pa se pregledi i zahvati plaćaju direktno. Cijenu pregleda, dijagnostike ili operacije reći ćemo vam unaprijed i precizno pri zakazivanju, bez naknadnih troškova o kojima niste obaviješteni. Za dokumentaciju koju treba dostaviti drugoj ustanovi dobijate kompletan nalaz.",
  },
] as const;
