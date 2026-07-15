import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Purchase Artwork & Books",
  description:
    "Original oil paintings, sculptures, fine art prints — plus two authored books by Frank Arnold.",
};

export default function PurchasePage() {
  return (
    <>
      <PageHeader
        title="Artwork | Books"
        subtitle="Oil Paintings | Sculptures | Fine Art Prints"
      />

      <section className="py-6 bg-canvas">
        <Container size="narrow" className="text-center">
          <Link href="/san-jose-del-cabo-gallery" className="btn-gold">
            Contact
          </Link>
        </Container>
      </section>

      <div className="border-t border-stone my-16" />

      <section className="pb-20 bg-canvas">
        <Container size="narrow">
          <div className="flex justify-center gap-4 mb-3">
            <div className="relative w-40 md:w-52 aspect-[3/4] overflow-hidden bg-canvas-soft">
              <Image
                src={siteImages.featured.artwork5}
                alt="Frank Arnold · Painting and Sculpture — book cover"
                fill
                sizes="(min-width: 768px) 13rem, 10rem"
                className="object-cover"
              />
            </div>
            <div className="relative w-40 md:w-52 aspect-[3/4] overflow-hidden bg-canvas-soft">
              <Image
                src={siteImages.featured.artwork6}
                alt="Your Creative Imagination Unlocked — book cover"
                fill
                sizes="(min-width: 768px) 13rem, 10rem"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Amazon
            </a>
          </div>

          <h2 className="gold-title text-2xl md:text-3xl text-center mt-14">
            Books by Frank Arnold
          </h2>

          <p className="mt-6 text-center text-sm md:text-base text-ink-soft leading-[1.9] max-w-2xl mx-auto">
            Two authored books extend the practice beyond the canvas — a
            bilingual biography spanning Arnold&apos;s upbringing, teaching
            years, and successful racing career; and a collaboration with
            depth psychologist Dr. Jim Manganiello on the creative process,
            with observations on Kandinsky, Picasso, Rothko, and other masters.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Amazon
            </a>
            <Link href="/san-jose-del-cabo-gallery" className="btn-gold">
              Contact
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
