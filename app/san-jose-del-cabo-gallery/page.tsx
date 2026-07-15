import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Reveal";
import { ContactForm } from "@/components/shared/ContactForm";
import { siteConfig } from "@/lib/site";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Studio & Gallery",
  description:
    "Visit Frank Arnold Gallery in the historic Gallery District of San José del Cabo, Mexico — rated the #1 attraction in Cabo on TripAdvisor.",
};

const studioImages = [
  { tone: "warm" as const, ratio: "landscape" as const, label: "Gallery interior", src: siteImages.studios.cabo[0] },
  { tone: "ink" as const, ratio: "portrait" as const, label: "Sculpture room", src: siteImages.studios.cabo[3] },
  { tone: "sand" as const, ratio: "landscape" as const, label: "Frank Arnold Plaza", src: siteImages.studios.cabo[10] },
  { tone: "cool" as const, ratio: "square" as const, label: "Mexico City studio", src: siteImages.studios.mexico[0] },
  { tone: "warm" as const, ratio: "square" as const, label: "California studio", src: siteImages.studios.california[0] },
  { tone: "ink" as const, ratio: "landscape" as const, label: "Bronze in progress", src: siteImages.studios.cabo[6] },
];

export default function GalleryContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio · Gallery · Contact"
        title={
          <>
            San José
            <br />
            del <span className="italic text-accent">Cabo</span>
          </>
        }
        intro="Frank Arnold Gallery anchors the historic Gallery District — a revitalized 300-year-old mission town on the tip of the Baja peninsula, and the leading art destination of its kind in Mexico."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col gap-10">
              <Reveal>
                <div>
                  <p className="eyebrow">Address</p>
                  <p className="mt-4 font-display text-2xl md:text-3xl leading-snug">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.locality}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="eyebrow">Hours</p>
                  <ul className="mt-4 divide-y divide-stone">
                    {siteConfig.hours.map((row) => (
                      <li
                        key={row.label}
                        className="flex justify-between py-3 text-ink-soft"
                      >
                        <span className="text-sm">{row.label}</span>
                        <span className="text-sm font-medium text-ink">
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <p className="eyebrow">Contact</p>
                  <ul className="mt-4 flex flex-col gap-2 text-ink-soft">
                    <li>
                      Gallery{" "}
                      <a
                        href={`tel:${siteConfig.phones.gallery}`}
                        className="text-ink hover:text-accent transition-colors"
                      >
                        {siteConfig.phones.gallery}
                      </a>
                    </li>
                    <li>
                      USA{" "}
                      <a
                        href={`tel:${siteConfig.phones.usa}`}
                        className="text-ink hover:text-accent transition-colors"
                      >
                        {siteConfig.phones.usa}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-ink hover:text-accent transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal delay={0.15}>
                <div className="border border-stone bg-canvas p-8 md:p-10">
                  <h2 className="font-display text-3xl md:text-4xl leading-tight">
                    Get in touch
                  </h2>
                  <p className="mt-3 text-sm text-muted max-w-md">
                    For gallery visits, commissions, and press inquiries.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-canvas-soft">
        <Container>
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="eyebrow">Three studios, one plaza</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Inside the practice.
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Alongside the flagship San José del Cabo gallery — with its
                adjacent sculpture plaza — Frank Arnold maintains working
                studios in Mexico City and Central California.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {studioImages.map((img, i) => (
              <StaggerItem
                key={i}
                className={i === 2 ? "col-span-2 md:col-span-2" : ""}
              >
                <PlaceholderImage
                  ratio={img.ratio}
                  tone={img.tone}
                  label={img.label}
                  src={img.src}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="shadow-frame"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
