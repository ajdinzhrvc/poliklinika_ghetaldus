import { Eyebrow, IrisMark } from "@/components/brand/ornaments";
import { FocusReveal, Stagger, StaggerItem } from "@/components/motion/focus-reveal";
import { reviews } from "@/lib/content/reviews";

/* The hero already carries the flagged review, so this section shows the rest —
   the first of them promoted to full width. */
const rest = reviews.filter((review) => !review.featured);
const [lead, ...others] = rest;

function Attribution({
  name,
  city,
}: {
  name: string;
  city?: string;
}) {
  return (
    <figcaption className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem]">
      <IrisMark className="size-2.5 text-accent" />
      <span className="font-semibold text-foreground">{name}</span>
      {city && <span className="text-muted-foreground">iz {city}</span>}
      <span aria-hidden="true" className="text-subtle-foreground">
        ·
      </span>
      <span className="text-subtle-foreground">Google recenzija</span>
    </figcaption>
  );
}

/**
 * Patient reviews as editorial pull-quotes rather than a testimonial carousel.
 * Sand appears here as the oversized quote glyph — one of the few places the
 * warm tone is used at all.
 */
export function Reviews() {
  return (
    <section id="recenzije" className="section-y">
      <div className="shell">
        <FocusReveal>
          <div className="max-w-3xl">
            <Eyebrow>Riječ pacijenata</Eyebrow>
            <h2 className="mt-4 text-title">
              Ono što se{" "}
              <em className="wonk not-italic text-accent">ne može naručiti</em>
            </h2>
            <p className="mt-5 text-lead text-muted-foreground">
              Recenzije koje su pacijenti sami ostavili na Google profilu
              poliklinike.
            </p>
          </div>
        </FocusReveal>

        <FocusReveal className="mt-14">
          <figure className="relative rounded-sm bg-surface-sunken p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-2 font-display text-[7rem] leading-none text-sand-300 sm:left-8"
            >
              „
            </span>
            <blockquote className="relative max-w-3xl font-display text-heading leading-[1.35]">
              {lead.quote}
            </blockquote>
            <Attribution name={lead.name} city={lead.city} />
          </figure>
        </FocusReveal>

        <Stagger className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((review) => (
            <StaggerItem key={review.name}>
              <figure className="h-full rounded-sm border border-hairline bg-surface p-7 shadow-hairline">
                <blockquote className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  „{review.quote}“
                </blockquote>
                <Attribution name={review.name} city={review.city} />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
