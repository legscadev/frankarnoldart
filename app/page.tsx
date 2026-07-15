import { Hero } from "@/components/home/Hero";
import { CTACards } from "@/components/home/CTACards";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Testimonial } from "@/components/home/Testimonial";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CTACards />
      <AboutSnippet />
      <Testimonial />
      <FeaturedWorks />
    </>
  );
}
