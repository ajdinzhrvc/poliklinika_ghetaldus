import { cn } from "@/lib/utils";

/**
 * Decorative optical furniture. Every piece is drawn from real ophthalmic
 * imaging — corneal topography maps, iris rings, Snellen charts — so the page
 * has ornament specific to this clinic. Nothing here is a ruled grid: contours
 * curve, which reads as anatomy rather than engineering. All are aria-hidden.
 */

/**
 * Builds one closed contour ring. Radius is modulated by summed sines so each
 * ring is organically irregular the way a real corneal elevation map is —
 * and deterministic, so server and client render identically.
 */
function contour(baseR: number, seed: number, steps = 84) {
  const pts: string[] = [];
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const wobble =
      1 +
      0.09 * Math.sin(a * 3 + seed * 1.7) +
      0.05 * Math.sin(a * 5 - seed * 0.9) +
      0.03 * Math.sin(a * 2 + seed * 2.6);
    const r = baseR * wobble;
    pts.push(
      `${(200 + Math.cos(a) * r * 1.14).toFixed(2)} ${(
        200 +
        Math.sin(a) * r * 0.9
      ).toFixed(2)}`,
    );
  }
  return `M${pts.join("L")}Z`;
}

/**
 * Corneal topography. The house background ornament — soft nested elevation
 * contours. Used large, low-opacity and cropped, never as a full pattern.
 */
export function Topography({
  className,
  rings = 9,
}: {
  className?: string;
  rings?: number;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn("size-full", className)}
    >
      {Array.from({ length: rings }, (_, i) => {
        const t = i / Math.max(rings - 1, 1);
        return (
          <path
            key={i}
            d={contour(22 + t * 150, i * 1.35)}
            stroke="currentColor"
            strokeWidth={0.85}
            opacity={0.5 - t * 0.3}
          />
        );
      })}
    </svg>
  );
}

/** Concentric iris rings. Quieter counterpart to Topography. */
export function LensRings({
  className,
  rings = 7,
}: {
  className?: string;
  rings?: number;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn("size-full", className)}
    >
      {Array.from({ length: rings }, (_, i) => {
        const r = 26 + i * ((174 - 26) / Math.max(rings - 1, 1));
        return (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={r}
            stroke="currentColor"
            strokeWidth={i === rings - 1 ? 1.1 : 0.7}
            opacity={0.14 + (i / rings) * 0.26}
          />
        );
      })}
    </svg>
  );
}

/**
 * Iris glyph — a ring around a pupil. The house bullet and marker. Replaces
 * the earlier crosshair reticle, which read as instrumentation UI.
 */
export function IrisMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("size-3.5", className)}
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="8" cy="8" r="2.4" fill="currentColor" />
    </svg>
  );
}

/**
 * A hairline rule broken by an iris glyph — the house section divider. Reads as
 * an optical axis rather than a plain <hr>.
 */
export function LensDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-3 text-accent", className)}
    >
      <span className="h-px flex-1 bg-hairline" />
      <IrisMark className="size-3 shrink-0 opacity-80" />
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}

/**
 * Snellen acuity ornament: one word set at descending sizes, as on a wall
 * chart. Purely decorative, so hidden from assistive tech.
 */
export function AcuityMark({
  lines = ["VID", "OKO", "FOKUS"],
  className,
}: {
  lines?: string[];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex flex-col items-center gap-1 font-display font-semibold uppercase leading-none text-current",
        className,
      )}
    >
      {lines.map((line, i) => (
        <span
          key={line}
          style={{
            fontSize: `${2.5 / (i * 0.55 + 1)}rem`,
            letterSpacing: `${0.32 / (i + 1)}em`,
            opacity: 1 - i * 0.18,
          }}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

/** Eyebrow label — small caps kicker used above every section heading. */
export function Eyebrow({
  children,
  className,
  withMark = true,
}: {
  children: React.ReactNode;
  className?: string;
  withMark?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-eyebrow uppercase text-accent",
        className,
      )}
    >
      {withMark && <IrisMark className="size-2.5 shrink-0" />}
      <span>{children}</span>
    </p>
  );
}
