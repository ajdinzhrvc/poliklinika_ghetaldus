import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { site } from "@/lib/site";

/**
 * Display face. Fraunces is a variable serif with SOFT and WONK axes — it holds
 * editorial authority at display sizes (the 1967 heritage) without the coldness
 * of a Didone. Both faces load `latin-ext`, which is non-negotiable: Bosnian
 * copy needs č, ć, ž, š and đ.
 */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

/** Text face. A grotesque with real character but clinical legibility at 14px. */
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.city} — ${site.descriptor}`,
    template: `%s — ${site.name} ${site.city}`,
  },
  description:
    "Specijalizovani centar za oftalmologiju, očnu hirurgiju i optiku u Brčkom. Kompletan oftalmološki pregled, OCT dijagnostika, operacija katarakte i vrhunska očna optika — tradicija od 1967.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: `${site.name} ${site.city}`,
    url: site.url,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1b40" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.lang}
      className={`${fraunces.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      {/* Bottom padding reserves room for the mobile action bar so it can never
          cover the footer's last line. */}
      <body className="flex min-h-full flex-col bg-background pb-[4.75rem] text-foreground lg:pb-0">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
        >
          Pređi na sadržaj
        </a>
        <SiteHeader />
        <div id="sadrzaj" className="flex-1">
          {children}
        </div>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
