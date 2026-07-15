import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: "narrow" | "wide" | "full";
} & HTMLAttributes<HTMLElement>;

const sizes = {
  narrow: "max-w-[68rem]",
  wide: "max-w-[84rem]",
  full: "max-w-[96rem]",
} as const;

export function Container({
  as,
  size = "wide",
  className,
  children,
  ...props
}: ContainerProps) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
