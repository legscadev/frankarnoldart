export type Category = "paintings" | "sculpture" | "works-on-paper";

export type Artwork = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  category: Category;
  ratio: "square" | "portrait" | "landscape" | "wide" | "tall";
  tone: "warm" | "cool" | "ink" | "sand";
  status: "available" | "sold" | "reserved";
  imageUrl?: string;
  description?: string;
};

const UPLOADS = "https://frankarnoldart.com/wp-content/uploads/2024/12";

/**
 * Sample data drawn from real product slugs on frankarnoldart.com.
 * `imageUrl` values are hotlinked from the live site for preview only.
 */
export const artworks: Artwork[] = [
  { slug: "frank-arnold-arise", title: "Arise", year: 2023, medium: "Oil on canvas", dimensions: "60 × 48 in", category: "paintings", ratio: "portrait", tone: "warm", status: "available", imageUrl: `${UPLOADS}/a9bbf1de-1cd2-41b1-aea7-c4c7047b5c27-l.jpg` },
  { slug: "frank-arnold-azul-20", title: "Azul 20", year: 2022, medium: "Oil on canvas", dimensions: "48 × 48 in", category: "paintings", ratio: "square", tone: "cool", status: "available", imageUrl: `${UPLOADS}/5510a0ac-b794-40fa-8c9a-47de0497b68a-l.jpeg` },
  { slug: "frank-arnold-black-5", title: "Black 5", year: 2024, medium: "Oil on canvas", dimensions: "72 × 60 in", category: "paintings", ratio: "portrait", tone: "ink", status: "sold", imageUrl: `${UPLOADS}/0fa5a1ae-f257-418a-9940-6ab98840cf9d-l.jpg` },
  { slug: "frank-arnold-toro-azul", title: "Toro Azul", year: 2023, medium: "Bronze, patina", dimensions: "38 × 22 × 14 in", category: "sculpture", ratio: "tall", tone: "cool", status: "available", imageUrl: `${UPLOADS}/62c80065-fc58-47bc-a026-192bd0df1305-l.jpg` },
  { slug: "frank-arnold-neuvoa", title: "Neuvoa", year: 2024, medium: "Bronze on stone", dimensions: "72 × 24 × 20 in", category: "sculpture", ratio: "tall", tone: "warm", status: "available", imageUrl: `${UPLOADS}/11dcc14b-396e-41bb-a75f-49c4a9b736ed-l.jpg` },
  { slug: "frank-arnold-cabo-azul-3", title: "Cabo Azul 3", year: 2022, medium: "Oil on linen", dimensions: "48 × 60 in", category: "paintings", ratio: "landscape", tone: "cool", status: "available", imageUrl: `${UPLOADS}/8a170f2e-7eea-4603-b6e3-00e653157738-l.jpeg` },
  { slug: "frank-arnold-verde-8", title: "Verde 8", year: 2023, medium: "Oil on canvas", dimensions: "40 × 40 in", category: "paintings", ratio: "square", tone: "sand", status: "available", imageUrl: `${UPLOADS}/21f6173d-a6de-417a-a73a-1728bccbcb28-l.png` },
  { slug: "frank-arnold-strong-man", title: "Strong Man", year: 2021, medium: "Bronze, dark patina", dimensions: "62 × 20 × 18 in", category: "sculpture", ratio: "tall", tone: "ink", status: "available", imageUrl: `${UPLOADS}/f97058dd-cb4b-4769-bd4b-2632f95df5d5-l.jpg` },
  { slug: "frank-arnold-yellow-rush", title: "Yellow Rush", year: 2024, medium: "Oil on canvas", dimensions: "48 × 72 in", category: "paintings", ratio: "landscape", tone: "sand", status: "available", imageUrl: `${UPLOADS}/04b4e6c9-86e9-481b-b007-a397856296cb-l.jpg` },
  { slug: "frank-arnold-winged-woman", title: "Winged Woman", year: 2023, medium: "Bronze", dimensions: "44 × 30 × 12 in", category: "sculpture", ratio: "portrait", tone: "warm", status: "available", imageUrl: `${UPLOADS}/382b0f05-33c2-4886-8048-78a1423e8bc5-l.jpg` },
  { slug: "frank-arnold-solo", title: "Solo", year: 2022, medium: "Oil on canvas", dimensions: "60 × 48 in", category: "paintings", ratio: "portrait", tone: "ink", status: "available", imageUrl: `${UPLOADS}/3aeae09b-9182-4c58-a2f1-3b89a94a1a18-l.jpg` },
  { slug: "frank-arnold-pride", title: "Pride", year: 2024, medium: "Oil on canvas", dimensions: "72 × 48 in", category: "paintings", ratio: "portrait", tone: "warm", status: "available", imageUrl: `${UPLOADS}/65bb0de8-3899-4e9c-ba9c-8f10c077f49c-l.jpg` },
  { slug: "frank-arnold-mask-3", title: "Mask 3", year: 2023, medium: "Mixed media on paper", dimensions: "30 × 22 in", category: "works-on-paper", ratio: "portrait", tone: "sand", status: "available", imageUrl: `${UPLOADS}/95aac135-3e04-4874-a14b-6553c30cdf02-l.jpg` },
  { slug: "frank-arnold-bird", title: "Bird", year: 2022, medium: "Bronze", dimensions: "18 × 24 × 10 in", category: "sculpture", ratio: "landscape", tone: "warm", status: "sold", imageUrl: `${UPLOADS}/1bc70b42-3788-44ef-9cc7-8769107e739e-l.jpg` },
  { slug: "frank-arnold-spirit", title: "Spirit", year: 2024, medium: "Oil on canvas", dimensions: "60 × 60 in", category: "paintings", ratio: "square", tone: "cool", status: "available", imageUrl: `${UPLOADS}/71f4a3f5-70b6-4dbf-92e9-e65f6735d47d-l.jpg` },
  { slug: "frank-arnold-woman-3", title: "Woman 3", year: 2023, medium: "Oil on canvas", dimensions: "72 × 48 in", category: "paintings", ratio: "portrait", tone: "warm", status: "available", imageUrl: `${UPLOADS}/c26b5b7c-1f40-41a2-a2c5-f7c34bc363f7-l.jpg` },
  { slug: "frank-arnold-passage-a", title: "Passage A", year: 2024, medium: "Mixed media on paper", dimensions: "30 × 22 in", category: "works-on-paper", ratio: "portrait", tone: "ink", status: "available", imageUrl: `${UPLOADS}/c6fc0e50-5707-4d92-bee8-0b8ad83ecf7e-l.jpg` },
  { slug: "frank-arnold-eclipse", title: "Eclipse", year: 2023, medium: "Oil on canvas", dimensions: "48 × 48 in", category: "paintings", ratio: "square", tone: "ink", status: "available", imageUrl: `${UPLOADS}/4d4da46a-4ed9-47ca-b62e-60fe36e76c3c-l.jpg` },
];

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All works" },
  { value: "paintings", label: "Paintings" },
  { value: "sculpture", label: "Sculpture" },
  { value: "works-on-paper", label: "Works on paper" },
];

export function findArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}
