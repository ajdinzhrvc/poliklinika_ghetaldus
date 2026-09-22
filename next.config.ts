import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Most imagery is the clinic's own, served from /public/slike (see
    // scripts/optimize-photos.mjs). This host carries the small number of
    // stock stand-ins in src/lib/stock-photos.ts for sections with no
    // matching real photo yet (diagnostics, surgery) — remove once those
    // arrive.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
