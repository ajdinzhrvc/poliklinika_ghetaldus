/**
 * The clinic's own photography, served from /public/slike.
 *
 * Every entry is a real photograph of Poliklinika Ghetaldus in Brčko — the
 * building on Bosne Srebrene, the waiting lounge, the reception and the optics
 * salon. Alt text describes what is actually in the frame; none of it claims a
 * room or a procedure the photo does not show.
 *
 * Sources live in /assets (raw camera JPEGs, 4–11 MB, not committed) and are
 * converted by `node scripts/optimize-photos.mjs`, which also prints the
 * `blur` strings below. `blur` is a 16px WebP inlined here so every image has
 * something to paint before its bytes arrive.
 *
 * NOTE FOR THE CLIENT: there is still no photography of the examination rooms,
 * the diagnostic equipment (OCT, vidno polje) or the operating theatre. Those
 * slots currently borrow the neutral interior shots. Send clinical photos and
 * only this file needs to change.
 */

export type Photo = {
  src: string;
  alt: string;
  blur: string;
};

const dir = "/slike";

export const photos = {
  /** Street view of the entrance, with the GHETALDUS sign over the door. */
  eksterijer: {
    src: `${dir}/slika_eksterijera_1.webp`,
    alt: "Ulaz u Polikliniku Ghetaldus u ulici Bosne Srebrene u Brčkom",
    blur: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQAAwABIByJYwC7ADtD60HWAAA/mV29fQYJzqD5043lko8GBqWj1M3sHasiNa8REqQou+gGfX2YdCMxWo1N84A",
  },
  /** Waiting lounge just inside the entrance. */
  cekaonica: {
    src: `${dir}/slika_cekaonica.webp`,
    alt: "Čekaonica poliklinike sa foteljama uz ulaz",
    blur: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoQAAwABIByJZACdADHosfA8rgA/hebhsCBEgSsX4qnrg7zoInmfYgtFAR87KTOYX1inOOx6AAY64dRD//6GYp7FZOg/I0GAIqaJvIAAAA=",
  },
  /** Reception counter, first point of contact for a patient. */
  recepcija: {
    src: `${dir}/slika_enterijera.webp`,
    alt: "Recepcija poliklinike sa pultom i ulazom u ordinacije",
    blur: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABwAQCdASoQAAwABIByJZQAAO6gYADLAP70cOz62GmjPxzwRdF8dqa1L4O5rTxVnlL1oJM0glNq86zcNR3zDrLKocQu1OO4loA1EWICAAA=",
  },
  /** The salon's arcade of frame walls, seen straight on. */
  salonArkade: {
    src: `${dir}/slika_enterijera_2.webp`,
    alt: "Salon očne optike sa zidnim displejima dioptrijskih okvira",
    blur: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACQAQCdASoQAAwABIByJZwAAS8WI8AAzdNjmab+CY61wmHqWWrr0D1vad2Y2Jb/PeFPmKq7uEf8rOVunPIGuLFQ2eu8ggAA",
  },
  /** Wider view of the same arcade, with the display case in front. */
  salonPanorama: {
    src: `${dir}/displej_naocala_udaljeni.webp`,
    alt: "Pogled na salon optike sa vitrinom i displejima okvira",
    blur: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoQAAwABIByJZwAAeHawy5RgADMInKUyEwYkpkPhjJsiMMlnuc/2Uz0ZOMosGnRmgM9G5FvSxvqMYpU1KhJMQet+rHjgAAA",
  },
  /** Corner of the salon towards the fitting mirror. */
  salonUgao: {
    src: `${dir}/displej_naocala_udaljeni_2.webp`,
    alt: "Ugao salona optike sa ogledalom za probu okvira",
    blur: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoQAAwABIByJZwAAnzhMWNAAPqH2iZkDX4YBGZEY/DVHT7WAGK9X8Xk+eac0GlW9Ncvw+a0kWNk68DpGlyCGcXYgAA=",
  },
  /** Portrait of a full frame wall — the one native vertical shot. */
  okviriZid: {
    src: `${dir}/displej_naocala_3.webp`,
    alt: "Zid sa dioptrijskim okvirima u salonu optike",
    blur: "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACwAwCdASoQABUAPyV6tFGuJ6UisAgBwCSJZwAAQxidtpNlquayYAD+hkXqoZvX/ZtSXYNgg0G6ccIlGj99U/pN7cSpJltlBkqWRzv3CruUbm3EIX0C59M2Psea/91HkvifhhgOFWilIAAA",
  },
  /** Close-up along a rail of metal and acetate frames. */
  okviriDetalj: {
    src: `${dir}/displej_naocala_1.webp`,
    alt: "Detalj displeja sa metalnim i acetatnim dioptrijskim okvirima",
    blur: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoQAAwABIByJZwAAiZqwGkAAPtv7+8R8Gc3rts5WhWM5LO97f2p+I7lUQwPmXIBop/ZqV4RM87OTkgA",
  },
  /** Close-up of the coloured women's frames. */
  okviriBoje: {
    src: `${dir}/displej_naocala_2.webp`,
    alt: "Displej sa okvirima u različitim bojama i oblicima",
    blur: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoQAAwABIByJZwAAZ96TtIAAP1mkyCtUVcWb/POhYO3YwfCAExWYP15A4f4H1zzsQaKdP/q07hxpR5l7MgAAA==",
  },
  /** Selected frames laid out on the counter. */
  okviriVitrina: {
    src: `${dir}/displej_naocala_4.webp`,
    alt: "Odabrani dioptrijski okviri izloženi na pultu salona",
    blur: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoQAAwABIByJYwAAmjCZs2syAD2ZiZZ0ABg8QPZmjyEIzaA6/F8WvIoJdQRRT/iNX4cOzFKq8Cqm7RpCt2dKCJ4CA2p39Roy9wAAA==",
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
