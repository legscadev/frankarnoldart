import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Paintings & Sculptures",
  description:
    "Explore original oil paintings and bronze sculptures by Frank Arnold — the profound connection between form and emotion.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collection"
        title={
          <>
            Paintings &<br />
            <span className="italic text-accent">Sculptures</span>
          </>
        }
        intro="Explore the profound connection between form and emotion through Frank Arnold's unique paintings and sculptures. Each piece tells a story, blending contemporary aesthetics with timeless expression."
      />
      <section className="py-16 md:py-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
