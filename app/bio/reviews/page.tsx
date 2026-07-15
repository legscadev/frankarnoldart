import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Selected press and critical reception of Frank Arnold's work.",
};

const reviews = [
  {
    quote:
      "Frank's Artwork ... is a Masterpiece of Contemporary Painting.",
    author: "Aid Peralta Aguirre",
    outlet:
      "Critico de Arte, Curator-Consultor Cultural. International Association of Art Critics AICA-UNESCO. Dominican Association of Art Critics ADCA.",
  },
  {
    quote:
      "In Mexico the people address him as Maestro, Frank's work has deep psychological and spiritual power.",
    author: "Dr. Jim Manganiello",
    outlet: "Author Your Creative Imagination Unlocked",
  },
  {
    quote:
      "Arnold is compensated by his ability to access the emotional and the psychological as it relates to the human experience. He's been known by brush alone to unravel the intensely knitted nervous system of human emotion, drawing out raw tears and personal anecdotes.",
    author: "MAC Art Galleries",
    outlet: "Florida",
  },
  {
    quote:
      "I've known many of the modern masters, including Picasso, Matisse and Twombly. I love Frank's work. He's made it to the top.",
    author: "Will Barnett",
    outlet: "Noted American Abstract Artist, New York",
  },
  {
    quote:
      "San José del Cabo's leading artist... Frank Arnold definitely reminds me of my favorites: the colors of Wemer, the brushwork of Parks and Oliveira and the imagination of Bischoff. I applaud his talent!",
    author: "Joseph Mendonca",
    outlet: "Fine Art Editor, Utopie Magazine",
  },
  {
    quote:
      "Don't miss the Abstract Paintings and Sculptures of Frank Arnold!",
    author: "Elaine Glusac",
    outlet: "New York Times",
  },
  {
    quote:
      "His paintings are wonderful. Something so personal can be so universal. You will see something very special in you.",
    author: "Aiden James",
    outlet: "President, National Arts Club of New York",
  },
  {
    quote:
      "Like de Kooning, Gorky, or Hans Hofmann... Frank Arnold paints from the gut.",
    author: "Don Starkey",
    outlet: "New York Times, San Luis Obispo, CA",
  },
  {
    quote: "'A Living Master' — Frank Arnold",
    author: "Ocean Blue Magazine",
    outlet: "Artist Section OceanBlueWorld.com",
  },
  {
    quote:
      "Some wave break, others fiery, and still others seemed to sort of float there in a haze of ambiguity, almost daring the viewer to let down his or her defenses and melt into the work.",
    author: "The Munro Review",
    outlet: "Renowned Arts Journalist and Scholar Donald Munro",
  },
  {
    quote:
      "'Arnight' — so today we've got the honor of introducing you to Frank Arnold!",
    author: "Canvas Rebel Magazine",
    outlet: "",
  },
  {
    quote: "Frank... Laughs like a kid and paints like a dragon.",
    author: "Luis Herrera",
    outlet: "Art Prodigy, Viejo El Cabo, San Jose del Cabo",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader title="Reviews" />
      <section className="pt-6 pb-20 bg-canvas">
        <Container size="narrow">
          <div className="flex flex-col divide-y divide-stone">
            {reviews.map((r, i) => (
              <div key={i} className="py-8 md:py-10 text-center">
                <p className="text-sm md:text-base italic text-ink leading-[1.9] max-w-2xl mx-auto">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="mt-4 text-xs md:text-sm text-muted">
                  {r.author}
                  {r.outlet ? (
                    <>
                      <br />
                      <span className="text-[0.72rem]">{r.outlet}</span>
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
