import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/shared/Reveal";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="pt-14 md:pt-20 pb-16 md:pb-24 border-b border-stone">
      <Container>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1] text-ink">
                {title}
              </h1>
            </div>
            {intro ? (
              <div className="md:col-span-4">
                <p className="text-base md:text-lg leading-relaxed text-ink-soft">
                  {intro}
                </p>
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
