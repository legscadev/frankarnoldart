import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  description?: ReactNode;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
