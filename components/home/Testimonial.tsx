import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { siteImages } from "@/lib/site-images";
import { artworks } from "@/lib/artworks";

export function Testimonial() {
  const grid = [
    artworks[3].imageUrl!,
    artworks[9].imageUrl!,
    siteImages.featured.artwork6,
    siteImages.featured.artwork7,
  ];

  return (
    <section className="py-16 md:py-24 bg-canvas">
      <Container size="wide">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-lg md:text-xl italic text-ink font-light">
            &ldquo;Frank Arnold — Host Artist / Art Critic of &lsquo;Two Artists
            Walk into a Bar&rsquo;&rdquo;
          </p>
          <p className="mt-4 text-sm text-muted">— Carol McQuaid</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {grid.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden bg-canvas-soft">
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
