"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { siteImages } from "@/lib/site-images";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-8 pb-32 md:pt-14 md:pb-40"
    >
      <Container className="relative">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-12 items-end">
          <motion.div
            style={{ y, opacity }}
            className="lg:col-span-7 relative z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="eyebrow"
            >
              A living master
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[15vw] leading-[0.92] tracking-[-0.02em] sm:text-[9rem] md:text-[10rem] lg:text-[12rem] text-ink"
            >
              Frank
              <br />
              <span className="italic text-accent">Arnold</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-ink-soft"
            >
              International abstract figurative painter and sculptor.
              Original oil paintings, bronzes, and books — from the studios of
              San José del Cabo, Mexico City, and Central California.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-3 items-center"
            >
              <Link
                href="/painting-sculpture"
                className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-ink"
              >
                <span className="relative">
                  Enter the collection
                  <span className="absolute left-0 -bottom-1 h-px w-full bg-ink origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0" />
                  <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </span>
                <svg
                  viewBox="0 0 30 12"
                  className="w-8 h-3 stroke-current stroke-[1.4] fill-none"
                  aria-hidden
                >
                  <path d="M0 6h27M22 1l6 5-6 5" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <PlaceholderImage
                ratio="tall"
                tone="warm"
                label="Featured painting"
                src={siteImages.featured.artwork1}
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority
                className="shadow-frame"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-10 -left-6 md:-left-16 hidden md:block bg-canvas border border-stone px-6 py-4"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-muted">
                  Est. 1975
                </p>
                <p className="mt-1 font-display text-2xl">50+ Years of Practice</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-[140%] max-w-none aspect-square opacity-40"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(213,173,24,0.14) 0%, rgba(246,243,236,0) 70%)",
        }}
      />
    </section>
  );
}
