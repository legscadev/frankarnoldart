import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Reveal";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { siteImages } from "@/lib/site-images";

const cards = [
  {
    eyebrow: "01",
    title: "View Artwork",
    body: "Explore an evolving catalog of paintings, sculptures, and works on paper.",
    href: "/painting-sculpture",
    cta: "Enter gallery",
    tone: "warm" as const,
    src: siteImages.featured.artwork1,
  },
  {
    eyebrow: "02",
    title: "Purchase Artwork & Books",
    body: "Acquire originals or read the artist's bilingual biography and creativity book.",
    href: "/purchase",
    cta: "Shop the collection",
    tone: "ink" as const,
    src: siteImages.featured.artwork2,
  },
  {
    eyebrow: "03",
    title: "Studio | Gallery",
    body: "Visit the flagship gallery and plaza in San José del Cabo, Mexico.",
    href: "/san-jose-del-cabo-gallery",
    cta: "Plan your visit",
    tone: "cool" as const,
    src: siteImages.featured.galleryCabo1,
  },
];

export function CTACards() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <span className="eyebrow">Three ways in</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Begin your visit
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Every corner of the practice — gallery, purchase, and studio —
              opens through the same door.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <Link
                href={card.href}
                className="group relative flex flex-col h-full bg-canvas-soft overflow-hidden"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
                    <PlaceholderImage
                      ratio="landscape"
                      tone={card.tone}
                      label={card.title}
                      src={card.src}
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-7 md:p-8">
                  <span className="text-xs uppercase tracking-[0.28em] text-accent">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {card.body}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-ink group-hover:text-accent transition-colors">
                    {card.cta}
                    <svg
                      viewBox="0 0 24 12"
                      className="w-6 h-3 stroke-current stroke-[1.4] fill-none transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <path d="M0 6h22M17 1l5 5-5 5" />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
