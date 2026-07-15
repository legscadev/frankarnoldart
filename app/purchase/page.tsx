import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { artworks } from "@/lib/artworks";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Purchase Artwork & Books",
  description:
    "Acquire original oil paintings, bronze sculptures, and fine art prints — plus two authored books by Frank Arnold.",
};

const books = [
  {
    title: "Frank Arnold · Painting and Sculpture",
    subtitle: "Bilingual biography",
    body:
      "A bilingual biography delving into Arnold's upbringing by adoptive parents, teaching art in the classroom and in a maximum-security women's prison, a successful auto racing career, and the profound influence of these experiences on his artistic journey.",
    href: "https://www.amazon.com",
    tone: "ink" as const,
    src: siteImages.featured.artwork5,
  },
  {
    title: "Your Creative Imagination Unlocked",
    subtitle: "With Dr. Jim Manganiello",
    body:
      "A collaboration with depth psychologist Dr. Jim Manganiello exploring the wellspring of Arnold's creative process — discussing artists like Kandinsky, Picasso, and Rothko.",
    href: "https://www.amazon.com",
    tone: "warm" as const,
    src: siteImages.featured.artwork6,
  },
];

export default function PurchasePage() {
  return (
    <>
      <PageHeader
        eyebrow="Acquire"
        title={
          <>
            Purchase Artwork
            <br />
            & <span className="italic text-accent">Books</span>
          </>
        }
        intro="Original oil paintings, bronze sculptures, and fine art prints are available directly through the studio and gallery. Two authored books are shipped worldwide via Amazon."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 items-center">
            <Reveal className="md:col-span-6">
              <span className="eyebrow">Original works</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Available paintings & bronzes.
              </h2>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-lg">
                Every original — oil on canvas, mixed media on paper, and cast
                bronze — is offered through the Frank Arnold Gallery. Prices
                and availability are shared privately after inquiry.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/painting-sculpture" variant="primary">
                  Browse the collection
                </Button>
                <Button href="/san-jose-del-cabo-gallery" variant="outline">
                  Inquire with the gallery
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-6 grid grid-cols-2 gap-4">
              <PlaceholderImage
                ratio="portrait"
                tone="warm"
                label={artworks[0].title}
                src={artworks[0].imageUrl}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <PlaceholderImage
                ratio="portrait"
                tone="cool"
                label={artworks[1].title}
                src={artworks[1].imageUrl}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <PlaceholderImage
                ratio="landscape"
                tone="ink"
                label={artworks[3].title}
                src={artworks[3].imageUrl}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="col-span-2"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-canvas-soft">
        <Container>
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <span className="eyebrow">Books</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Two authored volumes.
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Read further into the practice — the life that made it, and the
                creative process that keeps it moving.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-8 md:grid-cols-2">
            {books.map((book) => (
              <StaggerItem key={book.title}>
                <article className="group flex flex-col h-full bg-canvas border border-stone">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                      <PlaceholderImage
                        ratio="wide"
                        tone={book.tone}
                        label={book.title}
                        src={book.src}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="eyebrow text-muted">{book.subtitle}</p>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                      {book.title}
                    </h3>
                    <p className="mt-4 text-ink-soft leading-relaxed">
                      {book.body}
                    </p>
                    <div className="mt-8">
                      <Link
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-ink group-hover:text-accent transition-colors"
                      >
                        Order on Amazon
                        <svg
                          viewBox="0 0 24 12"
                          className="w-6 h-3 stroke-current stroke-[1.4] fill-none transition-transform duration-500 group-hover:translate-x-1"
                        >
                          <path d="M0 6h22M17 1l5 5-5 5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
