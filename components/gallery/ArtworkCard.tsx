import Link from "next/link";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import type { Artwork } from "@/lib/artworks";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link
      href={`/product/${artwork.slug}`}
      className="group block"
      aria-label={`View ${artwork.title}`}
    >
      <div className="overflow-hidden bg-canvas-soft">
        <div className="transition-transform duration-700 group-hover:scale-[1.03]">
          <PlaceholderImage
            ratio="square"
            tone={artwork.tone}
            label={artwork.title}
            src={artwork.imageUrl}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </div>
      </div>
    </Link>
  );
}
