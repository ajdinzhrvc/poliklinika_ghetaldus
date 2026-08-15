"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { IrisMark, Topography } from "@/components/brand/ornaments";
import {
  addressLine,
  contact,
  navigation,
  openingHours,
  primaryCta,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const OPTICAL = [0.16, 1, 0.3, 1] as const;

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  /* The drawer records which route it was opened on. Navigating anywhere makes
     `open` false by derivation, so the drawer closes on route change without an
     effect — and without cascading renders. */
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  /* Condense the header once the page has moved — the utility strip collapses
     and the bar tightens, so vertical space goes back to the content. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      data-scrolled={scrolled}
      className="group/header sticky top-0 z-50 w-full"
    >
      {/* Utility strip — practical detail a clinic visitor actually wants
          before anything else: where, when, and the phone number. */}
      <div className="on-ink hidden overflow-hidden bg-background text-foreground transition-[height,opacity] duration-500 ease-[var(--ease-optical)] h-9 group-data-[scrolled=true]/header:h-0 group-data-[scrolled=true]/header:opacity-0 md:block">
        <div className="shell flex h-9 items-center justify-between text-[0.75rem]">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-accent" aria-hidden="true" />
              {addressLine}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-accent" aria-hidden="true" />
              {openingHours[0].label}: {openingHours[0].opens}–
              {openingHours[0].closes}
            </span>
          </div>
          <a
            href={`tel:${contact.phoneHref}`}
            className="flex items-center gap-1.5 font-semibold text-foreground transition-colors hover:text-accent"
          >
            <Phone className="size-3.5 text-accent" aria-hidden="true" />
            <span className="numeric">{contact.phoneInternational}</span>
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "relative border-b transition-[height,background-color,border-color,backdrop-filter] duration-500 ease-[var(--ease-optical)]",
          "h-20 border-transparent bg-background",
          "group-data-[scrolled=true]/header:h-16 group-data-[scrolled=true]/header:border-hairline group-data-[scrolled=true]/header:bg-background/85 group-data-[scrolled=true]/header:backdrop-blur-xl",
        )}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-sm text-foreground"
            aria-label="Poliklinika Ghetaldus — početna"
          >
            <Logo />
          </Link>

          <nav aria-label="Glavna navigacija" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      data-current={current}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "rule-draw text-[0.875rem] font-medium tracking-[-0.005em] transition-colors",
                        current
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${contact.phoneHref}`}
              className="hidden items-center gap-2 rounded-sm px-3 py-2 text-[0.875rem] font-semibold text-foreground transition-colors hover:text-accent md:flex lg:hidden xl:flex"
            >
              <Phone className="size-4 text-accent" aria-hidden="true" />
              <span className="numeric">{contact.phoneDisplay}</span>
            </a>

            <Button variant="accent" asChild className="hidden sm:inline-flex">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Otvori meni"
              aria-expanded={open}
              aria-controls="mobilni-meni"
              className="-mr-1 flex size-11 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-accent-quiet lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobilni-meni"
            role="dialog"
            aria-modal="true"
            aria-label="Meni"
            className="on-ink paper-grain fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background text-foreground lg:hidden"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: OPTICAL }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-16 size-[30rem] text-royal-300 opacity-25"
            >
              <Topography rings={8} />
            </div>

            <div className="shell relative flex h-20 shrink-0 items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zatvori meni"
                autoFocus
                className="-mr-1 flex size-11 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-accent-quiet"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobilna navigacija"
              className="shell relative flex-1 py-8"
            >
              <ul className="space-y-1">
                {navigation.map((item, i) => {
                  const current = isCurrent(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduced ? false : { opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.06 + i * 0.05,
                        ease: OPTICAL,
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        className="flex items-center gap-3 border-b border-hairline py-4 font-display text-[1.75rem] tracking-[-0.02em] transition-colors hover:text-accent"
                      >
                        {current && (
                          <IrisMark className="size-3 shrink-0 text-accent" />
                        )}
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-10 space-y-5">
                <Button size="lg" variant="primary" asChild className="w-full">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>

                <dl className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <dt className="sr-only">Telefon</dt>
                    <Phone
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <dd>
                      <a
                        href={`tel:${contact.phoneHref}`}
                        className="numeric font-semibold text-foreground"
                      >
                        {contact.phoneInternational}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <dt className="sr-only">Adresa</dt>
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <dd>{addressLine}</dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <dt className="sr-only">Radno vrijeme</dt>
                    <Clock
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <dd>
                      {openingHours[0].label}: {openingHours[0].opens}–
                      {openingHours[0].closes}
                      <br />
                      <span className="text-subtle-foreground">
                        {openingHours[1].label}: zatvoreno
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
