import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Buttons are deliberately squared off (radius-sm) rather than pill-shaped, and
 * lift on hover instead of changing size. All variants read from the scoped
 * semantic tokens, so a button inside `.on-ink` inverts automatically.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans text-sm font-semibold tracking-[-0.005em] outline-none transition-[background-color,color,box-shadow,translate,border-color] duration-200 ease-[var(--ease-soft)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-lift hover:-translate-y-px hover:bg-primary-hover active:translate-y-0",
        accent:
          "bg-accent text-accent-foreground shadow-accent hover:-translate-y-px hover:bg-accent-hover active:translate-y-0",
        outline:
          "border border-hairline-strong bg-transparent text-foreground hover:border-primary hover:bg-primary/[0.04]",
        subtle:
          "bg-surface-sunken text-foreground hover:bg-accent-quiet",
        ghost: "bg-transparent text-foreground hover:bg-primary/[0.06]",
        link: "h-auto rounded-none p-0 text-foreground underline decoration-accent decoration-2 underline-offset-[0.3em] hover:decoration-[3px]",
      },
      size: {
        sm: "h-9 px-3.5 text-[0.8125rem]",
        md: "h-11 px-5",
        lg: "h-[3.25rem] px-7 text-[0.9375rem]",
        icon: "size-11",
      },
    },
    compoundVariants: [{ variant: "link", size: "md", class: "px-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
