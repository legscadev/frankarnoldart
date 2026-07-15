import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Stagger, StaggerItem } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Critical reception and press coverage of Frank Arnold's work.",
};

const reviews = [
  {
    quote:
      "Arnold is that rare living master. His figures do not stand still — they arrive, they leave, they hold the room hostage.",
    author: "Carol McQuaid",
    outlet: "Art Critic",
  },
  {
    quote:
      "There is a patience in these paintings that recalls the great Spanish colorists, matched by the muscularity of a sculptor who thinks in weight.",
    author: "Anonymous",
    outlet: "Gallery Guide, Cabo",
  },
  {
    quote:
      "Arguably the best gallery space in town — the plaza alone is worth the visit.",
    author: "TripAdvisor",
    outlet: "Rated #1 Cabo attraction",
  },
  {
    quote:
      "Bodies that look painted from the inside out. Arnold has built a private language that anyone can read.",
    author: "Dr. Jim Manganiello",
    outlet: "Co-author, Your Creative Imagination Unlocked",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press & Criticism"
        title={
          <>
            <span className="italic text-accent">Reviews</span>
          </>
        }
        intro="Selected words from critics, collectors, and collaborators who have spent time with the work."
      />
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <Stagger className="flex flex-col gap-16">
            {reviews.map((r) => (
              <StaggerItem key={r.author}>
                <figure className="border-l-2 border-accent pl-8 md:pl-12">
                  <blockquote className="font-display text-2xl md:text-4xl leading-snug text-ink italic">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">
                    {r.author}
                    <span className="rule" />
                    {r.outlet}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
