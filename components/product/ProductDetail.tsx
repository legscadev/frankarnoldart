"use client";

import Link from "next/link";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import type { Artwork } from "@/lib/artworks";

export function ProductDetail({ artwork, related }: { artwork: Artwork; related: Artwork[] }) {
  return (
    <>
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto w-full max-w-[78rem] px-6 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.16em] text-muted text-center">
            <Link href="/painting-sculpture" className="hover:text-accent">
              Paintings &amp; Sculptures
            </Link>
            <span className="mx-3">/</span>
            <span className="text-ink">{artwork.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="max-w-[560px] mx-auto w-full">
              <PlaceholderImage
                ratio={artwork.ratio}
                tone={artwork.tone}
                label={artwork.title}
                src={artwork.imageUrl}
                fit="contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="bg-canvas-soft"
              />
            </div>

            <div className="text-center lg:text-left lg:pl-6">
              <h1 className="gold-title text-3xl md:text-5xl">{artwork.title}</h1>
              <p className="mt-3 text-sm text-muted uppercase tracking-[0.16em]">
                {artwork.medium} · {artwork.year}
              </p>

              <dl className="mt-10 divide-y divide-stone border-t border-b border-stone text-left">
                {[
                  { label: "Year", value: String(artwork.year) },
                  { label: "Medium", value: artwork.medium },
                  { label: "Dimensions", value: artwork.dimensions },
                  { label: "Category", value: artwork.category.replace("-", " ") },
                  { label: "Status", value: artwork.status },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[9rem_1fr] gap-6 py-3">
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted pt-0.5">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-ink capitalize">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-sm text-ink-soft leading-relaxed">
                Available directly through the Frank Arnold Gallery. Please
                contact us for pricing, shipping, and provenance details.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href={`mailto:frank@frankarnoldart.com?subject=Inquiry: ${artwork.title}`}
                  className="btn-gold"
                >
                  Inquire
                </a>
                <Link
                  href="/painting-sculpture"
                  className="btn-gold"
                  style={{ background: "transparent", color: "var(--color-accent)", border: "1px solid var(--color-accent)" }}
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-14 border-t border-stone bg-canvas">
          <div className="mx-auto w-full max-w-[78rem] px-6 sm:px-8 lg:px-12">
            <h2 className="gold-title text-2xl md:text-3xl text-center mb-10">
              Related works
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/product/${r.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden bg-canvas-soft">
                    <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                      <PlaceholderImage
                        ratio="square"
                        tone={r.tone}
                        label={r.title}
                        src={r.imageUrl}
                        sizes="(min-width: 768px) 25vw, 50vw"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
