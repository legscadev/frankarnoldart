"use client";

import { motion } from "framer-motion";

const items = [
  "Paintings",
  "Sculpture",
  "Works on Paper",
  "Bronzes",
  "Editions",
  "Books",
];

export function MarqueeBanner() {
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-stone bg-canvas py-6"
    >
      <motion.div
        className="flex whitespace-nowrap gap-16"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-4xl md:text-6xl italic text-ink/70"
          >
            {item}
            <span className="ml-16 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
