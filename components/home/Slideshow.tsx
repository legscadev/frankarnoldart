"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { siteImages } from "@/lib/site-images";
import { cn } from "@/lib/cn";

const slides = [
  { src: siteImages.featured.artwork1, alt: "Artwork — study I" },
  { src: siteImages.featured.artwork4, alt: "Artwork — study II" },
  { src: siteImages.featured.artwork2, alt: "Artwork — study III" },
  { src: siteImages.featured.artwork7, alt: "Artwork — study IV" },
  { src: siteImages.featured.artwork5, alt: "Artwork — study V" },
  { src: siteImages.featured.artwork6, alt: "Artwork — study VI" },
];

const INTERVAL_MS = 5000;

export function Slideshow() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setI((n) => (n + 1) % slides.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      aria-label="Selected works"
      className="py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="eyebrow">In the studio</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Selected works
            </h2>
          </div>
          <div
            role="tablist"
            aria-label="Slide indicators"
            className="flex items-center gap-2"
          >
            {slides.map((s, idx) => (
              <button
                key={s.src}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-0.5 transition-all duration-500",
                  idx === i ? "w-10 bg-accent" : "w-5 bg-stone hover:bg-muted"
                )}
              />
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-canvas-soft shadow-frame">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={slides[i].src}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 6, ease: "linear" },
              }}
              className="absolute inset-0"
            >
              <Image
                src={slides[i].src}
                alt={slides[i].alt}
                fill
                sizes="(min-width: 1024px) 84vw, 100vw"
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-canvas">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] opacity-80">
              {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
