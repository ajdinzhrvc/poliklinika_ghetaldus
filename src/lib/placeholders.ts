/**
 * TEMPORARY IMAGERY — replace all of these with the client's own photography.
 *
 * Only URLs verified to return 200 are listed, and the alt text describes what
 * each photo actually shows rather than what we wish it showed. Two of them are
 * loose fits (`diagnostics` is generic clinical, `surgery` is a surgical team
 * seen from the table) and are here purely to hold layout. Swap the `src`
 * values and rewrite the alt text when the real assets arrive; keep the keys.
 */

const U = "https://images.unsplash.com";
const P = "auto=format&fit=crop&w=1600&q=70";

export const placeholder = {
  /** Verified: macro of a blue-green iris. Also happens to match the palette. */
  eyeMacro: {
    src: `${U}/photo-1494869042583-f6c911f04b4c?${P}`,
    alt: "Makro snimak ljudskog oka sa plavo-zelenom šarenicom",
  },
  /** Verified: clinicians reviewing diagnostic imaging on screens. */
  diagnostics: {
    src: `${U}/photo-1666214280391-8ff5bd3c0bf0?${P}`,
    alt: "Ljekari analiziraju dijagnostičke snimke na monitorima",
  },
  /** Verified: surgical team above the operating table, patient's viewpoint. */
  surgery: {
    src: `${U}/photo-1579684385127-1ef15d508118?${P}`,
    alt: "Hirurški tim u operacionoj sali",
  },
  /** Verified: spectacle frames. */
  eyewear: {
    src: `${U}/photo-1574258495973-f010dfbb5371?${P}`,
    alt: "Dioptrijski okvir sa tortoise dezenom",
  },
} as const;

export type PlaceholderKey = keyof typeof placeholder;
