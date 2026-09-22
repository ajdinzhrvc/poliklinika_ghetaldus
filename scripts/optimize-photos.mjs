/**
 * Turns the client's raw camera JPEGs in /assets into web-ready WebP files in
 * /public/slike, and prints the blur placeholders that src/lib/photos.ts needs.
 *
 * The originals are 4–11 MB at up to 8064px wide and are deliberately NOT
 * committed — only the optimized output is. Re-run this after dropping new
 * photos into /assets:
 *
 *   node scripts/optimize-photos.mjs
 *
 * sharp comes in with Next's image optimizer, so there is no extra dependency.
 */

import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const SRC = "assets";
const OUT = path.join("public", "slike");

/** 2400px covers a full-bleed 2x retina column; beyond that is wasted bytes. */
const MAX_WIDTH = 2400;
const QUALITY = 78;

/** Width of the inline blur-up placeholder baked into the JS bundle. */
const BLUR_WIDTH = 16;

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.jpe?g$/i.test(f)).sort();
const blurs = [];

for (const file of files) {
  const slug = file.replace(/\.jpe?g$/i, "");
  const input = path.join(SRC, file);

  // `.rotate()` with no argument applies the EXIF orientation and strips it —
  // without this the portrait shots come out on their side.
  const base = sharp(input).rotate();
  const { width, height } = await base.metadata();

  const info = await base
    .clone()
    .resize({ width: Math.min(width, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(path.join(OUT, `${slug}.webp`));

  const blur = await base
    .clone()
    .resize({ width: BLUR_WIDTH })
    .webp({ quality: 25 })
    .toBuffer();

  blurs.push({
    slug,
    dataUrl: `data:image/webp;base64,${blur.toString("base64")}`,
  });

  console.log(
    `${slug.padEnd(28)} ${width}x${height} → ${info.width}x${info.height}` +
      `  ${(info.size / 1024).toFixed(0)} kB`,
  );
}

// Printed rather than written to /public: these belong inline in photos.ts so
// they ship with the JS and paint before any network request for the image.
console.log("\nBlur placeholders — paste into src/lib/photos.ts:\n");
console.log(blurs.map((b) => `  "${b.slug}": "${b.dataUrl}",`).join("\n"));
