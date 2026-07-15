import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/shared/Reveal";

export function Testimonial() {
  return (
    <section className="py-28 md:py-36 bg-ink text-canvas">
      <Container size="narrow">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-8">
            <span className="eyebrow text-accentSoft">A living master</span>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] italic text-canvas max-w-4xl">
              &ldquo;Arnold is that rare living master. His figures do not
              stand still — they arrive, they leave, they hold the room
              hostage. Each canvas is a whole century of feeling, patiently
              layered.&rdquo;
            </blockquote>
            <footer className="mt-2 text-xs uppercase tracking-[0.32em] text-canvas/70">
              Carol McQuaid <span className="rule bg-canvas/50" /> Art Critic
            </footer>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
