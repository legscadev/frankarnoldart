"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import type { Artwork } from "@/lib/artworks";
import { cn } from "@/lib/cn";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-4"
    >
      <Link
        href={`/product/${artwork.slug}`}
        className="relative block overflow-hidden bg-canvas-soft"
        aria-label={`View ${artwork.title}`}
      >
        <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          <PlaceholderImage
            ratio={artwork.ratio}
            tone={artwork.tone}
            label={artwork.title}
            src={artwork.imageUrl}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-flex items-center gap-2 text-canvas text-[0.7rem] uppercase tracking-[0.28em]">
            View piece
            <svg viewBox="0 0 24 12" className="w-6 h-2 fill-none stroke-current stroke-[1.5]">
              <path d="M0 6h22M17 1l5 5-5 5" />
            </svg>
          </span>
        </div>
        {artwork.status !== "available" ? (
          <span
            className={cn(
              "absolute top-3 left-3 px-2 py-1 text-[0.6rem] uppercase tracking-[0.28em]",
              artwork.status === "sold"
                ? "bg-ink text-canvas"
                : "bg-canvas text-ink"
            )}
          >
            {artwork.status}
          </span>
        ) : null}
      </Link>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl leading-tight">
            {artwork.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mt-1">
            {artwork.medium} · {artwork.year}
          </p>
        </div>
        <span className="text-xs text-muted whitespace-nowrap mt-1">
          {artwork.dimensions}
        </span>
      </div>
    </motion.article>
  );
}
