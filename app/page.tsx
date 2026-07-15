import { Hero } from "@/components/home/Hero";
import { CTACards } from "@/components/home/CTACards";
import { MarqueeBanner } from "@/components/home/MarqueeBanner";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Testimonial } from "@/components/home/Testimonial";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <CTACards />
      <AboutSnippet />
      <Testimonial />
      <FeaturedWorks />
    </>
  );
}
