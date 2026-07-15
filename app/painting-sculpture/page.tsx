import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ArtgalleriaFrame } from "@/components/gallery/ArtgalleriaFrame";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Paintings & Sculptures",
  description:
    "Explore original oil paintings and bronze sculptures by Frank Arnold.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        backgroundSrc={siteImages.featured.galleryCabo1}
        title="Paintings & Sculptures"
        subtitle="Explore the profound connection between form and emotion through Frank Arnold's unique paintings and sculptures. Each piece tells a story, blending contemporary aesthetics with timeless expression."
      />
      <section className="py-10 md:py-14 bg-canvas">
        <Container size="wide">
          <ArtgalleriaFrame />
        </Container>
      </section>
    </>
  );
}
