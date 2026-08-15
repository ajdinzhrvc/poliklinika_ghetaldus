import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder sources only — remove once the client's own photography and
    // the local /public pipeline replace them.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
