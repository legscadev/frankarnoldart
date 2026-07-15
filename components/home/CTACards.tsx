import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteImages } from "@/lib/site-images";

const cards = [
  {
    title: "View Artwork",
    href: "/painting-sculpture",
    src: siteImages.featured.artwork4,
  },
  {
    title: "Purchase Artwork & Books",
    href: "/purchase",
    src: siteImages.featured.artwork5,
  },
  {
    title: "Studio | Gallery",
    href: "/san-jose-del-cabo-gallery",
    src: siteImages.featured.galleryCabo1,
  },
];

export function CTACards() {
  return (
    <section className="py-14 md:py-20 bg-canvas">
      <Container size="wide">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-canvas-soft">
                <Image
                  src={card.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="gold-title text-center text-xl md:text-2xl px-4">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
