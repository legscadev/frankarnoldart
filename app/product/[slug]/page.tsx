import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artworks, findArtwork } from "@/lib/artworks";
import { ProductDetail } from "@/components/product/ProductDetail";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const artwork = findArtwork(slug);
  if (!artwork) return { title: "Artwork not found" };
  return {
    title: artwork.title,
    description: `${artwork.title} — ${artwork.medium}, ${artwork.year}. ${artwork.dimensions}.`,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const artwork = findArtwork(slug);
  if (!artwork) notFound();

  const related = artworks
    .filter((a) => a.slug !== artwork.slug && a.category === artwork.category)
    .slice(0, 4);

  return <ProductDetail artwork={artwork} related={related} />;
}
