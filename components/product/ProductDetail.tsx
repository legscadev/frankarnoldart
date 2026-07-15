"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Button } from "@/components/shared/Button";
import type { Artwork } from "@/lib/artworks";

export function ProductDetail({ artwork, related }: { artwork: Artwork; related: Artwork[] }) {
  const meta = [
    { label: "Year", value: String(artwork.year) },
    { label: "Medium", value: artwork.medium },
    { label: "Dimensions", value: artwork.dimensions },
    { label: "Category", value: artwork.category.replace("-", " ") },
    { label: "Status", value: artwork.status },
  ];

  return (
    <>
      <section className="pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.28em] text-muted">
            <Link href="/painting-sculpture" className="hover:text-accent">
              Collection
            </Link>
            <span className="mx-3">/</span>
            <span className="text-ink">{artwork.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <PlaceholderImage
                ratio={artwork.ratio}
                tone={artwork.tone}
                label={artwork.title}
                src={artwork.imageUrl}
                fit="contain"
                sizes="(min-width: 1024px) 58vw, 100vw"
                priority
                className="shadow-frame bg-canvas"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:col-span-5 lg:pl-6"
            >
              <span className="eyebrow">
                {artwork.category.replace("-", " ")}
              </span>
              <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1]">
                {artwork.title}
              </h1>
              <p className="mt-4 text-lg text-muted">
                {artwork.medium} · {artwork.year}
              </p>

              <dl className="mt-10 divide-y divide-stone border-t border-b border-stone">
                {meta.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[10rem_1fr] gap-6 py-4"
                  >
                    <dt className="text-xs uppercase tracking-[0.24em] text-muted pt-1">
                      {row.label}
                    </dt>
                    <dd className="text-ink capitalize">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-ink-soft leading-relaxed">
                Available directly through the Frank Arnold Gallery. Prices,
                shipping, and provenance are shared privately after inquiry.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={`mailto:frank@frankarnoldart.com?subject=Inquiry: ${artwork.title}`}
                  size="lg"
                >
                  Inquire about this piece
                </Button>
                <Button href="/painting-sculpture" size="lg" variant="outline">
                  Back to collection
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-20 md:py-24 border-t border-stone">
          <div className="mx-auto w-full max-w-[84rem] px-6 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-3xl md:text-4xl">Related works</h2>
              <Link
                href="/painting-sculpture"
                className="text-[0.72rem] uppercase tracking-[0.28em] text-muted hover:text-accent"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/product/${r.slug}`}
                  className="group flex flex-col gap-3"
                >
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                      <PlaceholderImage
                        ratio={r.ratio}
                        tone={r.tone}
                        label={r.title}
                        src={r.imageUrl}
                        sizes="(min-width: 768px) 25vw, 50vw"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg leading-tight group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted mt-1">
                      {r.year}
                    </p>
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
