import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ImageSlider } from "@/components/shared/ImageSlider";
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
        subtitle="Explore the gallery and working studio of international abstract painter and sculptor Frank Arnold"
      />

      {/* Hero gallery slider */}
      <section className="pb-14 bg-canvas">
        <Container size="wide">
          <div className="mx-auto max-w-4xl">
            <ImageSlider
              images={siteImages.studios.cabo}
              alt="Frank Arnold Gallery"
              aspect="video"
            />
          </div>
        </Container>
      </section>

      {/* Gallery info block */}
      <section className="pb-16 bg-canvas">
        <Container size="narrow">
          <h2 className="gold-title text-3xl md:text-4xl text-center">
            Frank Arnold Gallery
          </h2>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-muted">
            San Jose del Cabo, BCS, Mexico
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 text-sm md:text-[0.95rem]">
            {/* Hours (left / centered on mobile) */}
            <div className="text-center md:text-right">
              <p className="font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Tuesday – Sunday
              </p>
              <p className="mt-1 text-ink-soft">2:00 pm – 7:00 pm</p>
              <p className="mt-2 text-ink-soft italic text-xs">
                Closed on Mondays
              </p>

              <p className="mt-8 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Art Walk Thursday
              </p>
              <p className="mt-1 text-ink-soft">5:00 pm – 9:00 pm</p>
              <p className="mt-2 text-ink-soft italic text-xs">
                Every Thursday
              </p>

              <p className="mt-10 text-xs text-muted italic max-w-xs md:ml-auto">
                Ring Bell for Entrance or Contact Frank Arnold
              </p>
            </div>

            {/* Contact (right / centered on mobile) */}
            <div className="text-center md:text-left">
              <p className="font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Gallery Address
              </p>
              <p className="mt-1 text-ink-soft">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.locality}
              </p>

              <p className="mt-8 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Gallery Phone
              </p>
              <p className="mt-1 text-ink-soft">{siteConfig.phones.gallery}</p>

              <p className="mt-8 font-semibold text-ink uppercase tracking-[0.14em] text-xs">
                Frank Arnold
              </p>
              <p className="mt-1 text-ink-soft">
                USA {siteConfig.phones.usa}
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-t border-stone mx-auto max-w-4xl" />

      {/* Gallery District block — dark heading, not gold */}
      <section className="pt-12 pb-16 bg-canvas">
        <Container size="narrow" className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center text-accent text-[0.65rem] font-semibold tracking-[0.16em]">
            FA
          </div>
          <h2 className="mt-8 font-display text-2xl md:text-3xl text-ink">
            San Jose del Cabo Gallery District
          </h2>
          <p className="mt-6 text-sm md:text-[0.95rem] leading-[1.9] text-ink-soft max-w-2xl mx-auto">
            The historic Gallery District of San Jose del Cabo is the leading
            art destination of its kind in Mexico — a revitalized 300-year-old
            mission town where galleries line the plaza. The Frank Arnold
            Gallery, which anchors the community, has been rated the number
            one Cabo attraction by TripAdvisor and described as arguably the
            best gallery space in town.
          </p>
        </Container>
      </section>

      <div className="border-t border-stone mx-auto max-w-4xl" />

      {/* Mexico City Sculpture Studio */}
      <section className="pt-14 pb-24 bg-canvas">
        <Container size="wide">
          <h2 className="gold-title text-3xl md:text-4xl text-center">
            Mexico City Sculpture Studio
          </h2>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-muted mb-10">
            Mexico City, Mexico
          </p>
          <div className="mx-auto max-w-4xl">
            <ImageSlider
              images={siteImages.studios.mexico}
              alt="Mexico City sculpture studio"
              aspect="video"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
