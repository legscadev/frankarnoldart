import { Hero } from "@/components/home/Hero";
import { CTACards } from "@/components/home/CTACards";
import { ArtistBanner } from "@/components/home/ArtistBanner";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Testimonial } from "@/components/home/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CTACards />
      <ArtistBanner />
      <AboutSnippet />
      <Testimonial />
    </>
  );
}
