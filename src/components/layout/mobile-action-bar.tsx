"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Phone } from "lucide-react";

import { contact, primaryCta } from "@/lib/site";

const OPTICAL = [0.16, 1, 0.3, 1] as const;

/**
 * Phone calls are this clinic's primary conversion, and most visitors arrive on
 * a phone. The bar stays hidden until the visitor has scrolled past the hero,
 * so it never competes with the hero's own call to action.
 */
export function MobileActionBar() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: OPTICAL }}
        >
          <div className="flex items-stretch gap-2 rounded-sm border border-hairline bg-background/90 p-2 shadow-float backdrop-blur-xl">
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-sm px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent-quiet"
            >
              <Phone className="size-4 text-accent" aria-hidden="true" />
              Pozovite
            </a>
            <span aria-hidden="true" className="w-px bg-hairline" />
            <Link
              href={primaryCta.href}
              className="flex flex-1 items-center justify-center rounded-sm bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              {primaryCta.label}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
