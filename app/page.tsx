import { Hero } from "@/components/home/Hero";
import { Slideshow } from "@/components/home/Slideshow";
import { CTACards } from "@/components/home/CTACards";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Testimonial } from "@/components/home/Testimonial";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Slideshow />
      <CTACards />
      <AboutSnippet />
      <Testimonial />
      <FeaturedWorks />
    </>
  );
}
