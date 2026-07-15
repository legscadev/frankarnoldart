import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { artworks } from "@/lib/artworks";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedWorks() {
  const featured = artworks.slice(0, 4);
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow">Recent works</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                From the studio
              </h2>
            </div>
            <Link
              href="/painting-sculpture"
              className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-ink"
            >
              View all works
              <svg
                viewBox="0 0 24 12"
                className="w-6 h-3 stroke-current stroke-[1.4] fill-none transition-transform duration-500 group-hover:translate-x-1"
              >
                <path d="M0 6h22M17 1l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-16">
          {featured.map((a) => (
            <ArtworkCard key={a.slug} artwork={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
