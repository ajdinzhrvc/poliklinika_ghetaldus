import type { MetadataRoute } from "next";

import { navigation, site } from "@/lib/site";

/* Priorities reflect commercial intent: the cataract page is the clinic's
   highest-value entry point after the home page. */
const priorities: Record<string, number> = {
  "/": 1,
  "/operacija-katarakte": 0.9,
  "/usluge": 0.8,
  "/optika": 0.8,
  "/kontakt": 0.7,
  "/o-nama": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navigation.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: priorities[item.href] ?? 0.5,
  }));
}
