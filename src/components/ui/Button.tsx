import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-semibold transition-colors duration-200 ease-out disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-ink text-paper hover:bg-brand-deep",
        brand: "bg-brand text-ink hover:bg-brand-deep hover:text-paper",
        tech: "bg-tech text-paper hover:bg-tech-deep",
        outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
        ghost: "border border-line text-ink hover:border-ink",
      },
      size: {
        md: "h-11 px-5 text-[0.9375rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  }
);

type Variants = VariantProps<typeof buttonStyles>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
