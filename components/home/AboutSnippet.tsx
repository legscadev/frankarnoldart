import { Container } from "@/components/layout/Container";

export function AboutSnippet() {
  return (
    <section className="py-20 md:py-28 bg-canvas">
      <Container size="narrow">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="gold-title text-3xl md:text-5xl">Frank Arnold</h2>
          <p className="mt-8 text-base md:text-[1.02rem] leading-[1.9] text-ink-soft">
            International abstract figurative painter and sculptor, held in
            private and corporate collections worldwide. Working from studios
            in San José del Cabo, Mexico City, and Central California, Arnold
            is the author of two books — a bilingual biography and a
            collaboration on the creative process with depth psychologist Dr.
            Jim Manganiello.
          </p>
        </div>
      </Container>
    </section>
  );
}
