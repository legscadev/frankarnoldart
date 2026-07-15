import Image from "next/image";
import { Container } from "@/components/layout/Container";
import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: ReactNode;
  backgroundSrc?: string;
  variant?: "dark" | "light";
};

/**
 * Two-mode page header:
 *  - "dark": image band with gold title over dark overlay (gallery, studio)
 *  - "light": clean white section with gold title + subtitle (bio, cv, reviews)
 */
export function PageHeader({
  title,
  subtitle,
  backgroundSrc,
  variant = "light",
}: PageHeaderProps) {
  if (variant === "dark" && backgroundSrc) {
    return (
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[42vh] min-h-[320px] max-h-[520px]">
          <Image src={backgroundSrc} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="gold-title text-4xl md:text-6xl">{title}</h1>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-white text-sm md:text-base font-light leading-relaxed italic">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 md:pt-20 pb-10 bg-canvas">
      <Container size="wide" className="text-center">
        <h1 className="gold-title text-4xl md:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
