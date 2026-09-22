/**
 * Curated stock photography — used ONLY where no real photo of the clinic
 * shows the thing the copy is claiming (diagnostic equipment, the operating
 * theatre). Everywhere else, /lib/photos.ts's real photography is correct and
 * should be preferred: a real waiting room or an optics salon, even shown in
 * the wrong section, is worse than admitting the client hasn't sent that shot
 * yet and using an honest, well-matched stand-in instead.
 *
 * Both URLs were spot-checked for a 200 response and for alt text that
 * describes what the photo actually shows (not what we wish it showed).
 * Replace each entry — and drop the `images.unsplash.com` remote pattern in
 * next.config.ts — the moment the client sends real diagnostics/surgery
 * photography.
 */

const U = "https://images.unsplash.com";
const P = "auto=format&fit=crop&w=1600&q=70";

export const stockPhotos = {
  /** Clinicians reviewing diagnostic imaging on screens — generic clinical, not eye-specific, but not a false claim either. */
  diagnostics: {
    src: `${U}/photo-1666214280391-8ff5bd3c0bf0?${P}`,
    alt: "Ljekari analiziraju dijagnostičke snimke na monitorima",
  },
  /** Surgical team above the operating table, patient's viewpoint. */
  surgery: {
    src: `${U}/photo-1579684385127-1ef15d508118?${P}`,
    alt: "Hirurški tim u operacionoj sali",
  },
} as const;

export type StockPhotoKey = keyof typeof stockPhotos;
