import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * The mark is a vesica — the shape formed where two circles overlap. It is
 * simultaneously the cross-section of a biconvex lens and the outline of an
 * eye, which is the whole brand in one figure. The iris is struck in royal so
 * the mark reads as branded even at favicon size.
 *
 * Placeholder until the client supplies the official Ghetaldus lockup.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      {/* Lens body: two arcs meeting at the canthi. */}
      <path
        d="M2 16C2 16 8 6.5 16 6.5S30 16 30 16 24 25.5 16 25.5 2 16 2 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Iris. */}
      <circle
        cx="16"
        cy="16"
        r="5.25"
        stroke="var(--accent)"
        strokeWidth="1.6"
      />
      {/* Pupil. */}
      <circle cx="16" cy="16" r="1.9" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  showDescriptor = true,
}: {
  className?: string;
  showDescriptor?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="size-8 shrink-0 text-current" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.02em]">
          Ghetaldus
        </span>
        {showDescriptor && (
          <span className="mt-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-subtle-foreground">
            Poliklinika {site.city}
          </span>
        )}
      </span>
    </span>
  );
}
