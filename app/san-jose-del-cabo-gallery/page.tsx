import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio & Gallery",
  description:
    "Visit Frank Arnold Gallery in the historic Gallery District of San José del Cabo, Mexico.",
};

export default function GalleryContactPage() {
  return (
    <>
      <PageHeader
        title="San Jose del Cabo Gallery Studio"
        subtitle="Explore the gallery and working studio of international abstract painter and sculptor Frank Arnold."
      />

      <section className="pb-16 bg-canvas">
        <Container size="wide">
          <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden bg-canvas-soft">
            <Image
              src={siteImages.studios.cabo[0]}
              alt="Frank Arnold Gallery interior"
              fill
              sizes="(min-width: 1024px) 62rem, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="pb-16 bg-canvas">
        <Container size="narrow">
          <h2 className="gold-title text-3xl md:text-4xl text-center">
            Frank Arnold Gallery
          </h2>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-muted">
            San José del Cabo, BCS, Mexico
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 text-sm md:text-[0.95rem]">
            <div className="text-center md:text-right">
              <p className="font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Tuesday – Sunday
              </p>
              <p className="mt-1 text-ink-soft">2:00 pm – 7:00 pm</p>
              <p className="mt-6 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Art Walk Thursday
              </p>
              <p className="mt-1 text-ink-soft">5:00 pm – 9:00 pm</p>
              <p className="mt-6 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Closed on Mondays
              </p>
            </div>

            <div className="text-center md:text-left">
              <p className="font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Gallery Address
              </p>
              <p className="mt-1 text-ink-soft">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.locality}
              </p>
              <p className="mt-6 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Gallery Phone
              </p>
              <p className="mt-1 text-ink-soft">{siteConfig.phones.gallery}</p>
              <p className="mt-6 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Frank Arnold
              </p>
              <p className="mt-1 text-ink-soft">
                USA {siteConfig.phones.usa}
                <br />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-t border-stone my-6" />

      <section className="pt-4 pb-16 bg-canvas">
        <Container size="narrow" className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center text-accent text-xs font-semibold tracking-[0.16em]">
            FA
          </div>
          <h2 className="gold-title text-2xl md:text-3xl mt-8">
            San Jose del Cabo Gallery District
          </h2>
          <p className="mt-6 text-sm md:text-[0.95rem] leading-[1.9] text-ink-soft max-w-2xl mx-auto">
            The historic Gallery District of San José del Cabo is the leading
            art destination of its kind in Mexico. The Cape Verde area — a
            revitalized 300-year-old mission town — hosts working galleries
            around the plaza. The Frank Arnold Gallery, which anchors this
            evolving community, has been rated the number one Cabo attraction
            by TripAdvisor and described as arguably the best gallery space in
            town.
          </p>
        </Container>
      </section>

      <section className="pt-6 pb-20 bg-canvas">
        <Container size="wide">
          <h2 className="gold-title text-3xl md:text-4xl text-center">
            Mexico City Sculpture Studio
          </h2>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-muted mb-10">
            Mexico City, Mexico
          </p>
          <div className="grid grid-cols-2 gap-4">
            {siteImages.studios.mexico.slice(0, 2).map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden bg-canvas-soft">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-6 pb-24 bg-canvas">
        <Container size="wide">
          <h2 className="gold-title text-3xl md:text-4xl text-center">
            California Studio
          </h2>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-muted mb-10">
            Central California, USA
          </p>
          <div className="grid grid-cols-2 gap-4">
            {siteImages.studios.california.slice(0, 2).map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden bg-canvas-soft">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
