"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ImageSliderProps = {
  images: readonly string[];
  alt?: string;
  aspect?: "video" | "square" | "landscape";
  className?: string;
  autoAdvanceMs?: number;
  sizes?: string;
};

const aspects = {
  video: "aspect-video",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
} as const;

export function ImageSlider({
  images,
  alt = "",
  aspect = "video",
  className,
  autoAdvanceMs = 6000,
  sizes = "(min-width: 1024px) 62rem, 100vw",
}: ImageSliderProps) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(
      () => setI((n) => (n + 1) % images.length),
      autoAdvanceMs
    );
    return () => clearInterval(id);
  }, [paused, autoAdvanceMs, images.length]);

  const prev = () => setI((n) => (n - 1 + images.length) % images.length);
  const next = () => setI((n) => (n + 1) % images.length);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-canvas-soft",
        aspects[aspect],
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label={alt || "Image slider"}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={images[i]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[i]}
            alt={alt}
            fill
            sizes={sizes}
            priority={i === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 ? (
        <>
          <SliderButton direction="prev" onClick={prev} />
          <SliderButton direction="next" onClick={next} />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((src, idx) => (
              <button
                key={src}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === i}
                onClick={() => setI(idx)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-300",
                  idx === i ? "bg-white w-5" : "bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function SliderButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-16 md:w-12 md:h-20 flex items-center justify-center",
        "text-white bg-black/25 hover:bg-black/50 transition-colors",
        isPrev ? "left-0" : "right-0"
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "w-5 h-5 md:w-6 md:h-6 fill-none stroke-current stroke-[1.5]",
          isPrev ? "" : "rotate-180"
        )}
        aria-hidden
      >
        <path d="M15 6l-6 6 6 6" />
      </svg>
    </button>
  );
}
