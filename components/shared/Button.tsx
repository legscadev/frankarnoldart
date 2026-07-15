import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide uppercase text-[0.72rem] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:ring-ink";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas hover:bg-accent hover:text-canvas active:translate-y-[1px]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-canvas",
  ghost: "text-ink hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-14 px-8 text-[0.78rem]",
};

type Base = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = Base & { href: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof Base | "href"
>;

type ButtonAsButton = Base & { href?: undefined } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof Base
>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    return (
      <Link {...(rest as ButtonAsLink)} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonAsButton)} className={classes}>
      {children}
    </button>
  );
}
