"use client";

import { useMemo, useState } from "react";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { artworks, categories, type Category } from "@/lib/artworks";
import { cn } from "@/lib/cn";

type Filter = Category | "all";

export function GalleryGrid() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? artworks
        : artworks.filter((a) => a.category === active),
    [active]
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Filter artworks by category"
        className="flex flex-wrap justify-center gap-4"
      >
        {categories.map((c) => (
          <button
            key={c.value}
            role="tab"
            aria-selected={active === c.value}
            onClick={() => setActive(c.value)}
            className={cn(
              "px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] border transition-colors",
              active === c.value
                ? "bg-accent text-white border-accent"
                : "bg-transparent text-ink border-stone hover:border-accent hover:text-accent"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((a) => (
          <ArtworkCard key={a.slug} artwork={a} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted">No works in this category yet.</p>
      ) : null}
    </div>
  );
}
