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
    <div className="flex flex-col gap-12">
      <div
        role="tablist"
        aria-label="Filter artworks by category"
        className="flex flex-wrap gap-2 border-b border-stone pb-6"
      >
        {categories.map((c) => (
          <button
            key={c.value}
            role="tab"
            aria-selected={active === c.value}
            onClick={() => setActive(c.value)}
            className={cn(
              "relative px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors",
              active === c.value ? "text-accent" : "text-muted hover:text-ink"
            )}
          >
            {c.label}
            <span
              className={cn(
                "absolute left-3 right-3 -bottom-[calc(1.5rem+1px)] h-px transition-colors",
                active === c.value ? "bg-accent" : "bg-transparent"
              )}
            />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-16">
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
