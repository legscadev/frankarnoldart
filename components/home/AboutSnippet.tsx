import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Reveal } from "@/components/shared/Reveal";
import { siteImages } from "@/lib/site-images";

export function AboutSnippet() {
  return (
    <section className="py-24 md:py-32 bg-canvas-soft">
      <Container>
        <div className="grid gap-12 lg:gap-20 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative">
                <PlaceholderImage
                  ratio="portrait"
                  tone="ink"
                  label="Featured painting"
                  src={siteImages.featured.artwork2}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="shadow-frame"
                />
                <div className="absolute -bottom-6 -right-6 hidden md:block bg-canvas px-6 py-4 shadow-frame">
                  <p className="font-display text-2xl italic">
                    &ldquo;A living master.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <span className="eyebrow">About the artist</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Painting the space between
                <span className="italic text-accent"> form and emotion</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-ink-soft max-w-2xl">
                <p>
                  Frank Arnold&apos;s work has been called abstract figurative:
                  bodies dissolve into gesture, gesture into pigment. His
                  paintings and bronzes hang in private collections and public
                  institutions across the Americas and Europe.
                </p>
                <p>
                  Raised by adoptive parents, he taught art in classrooms and
                  in a maximum-security women&apos;s prison, and raced cars
                  professionally before turning fully to the studio. Each life
                  keeps arriving in the paint.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/bio"
                  className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-ink"
                >
                  <span className="relative">
                    Read the full biography
                    <span className="absolute left-0 -bottom-1 h-px w-full bg-ink origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0" />
                    <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </span>
                  <svg
                    viewBox="0 0 30 12"
                    className="w-8 h-3 stroke-current stroke-[1.4] fill-none transition-transform duration-500 group-hover:translate-x-1"
                  >
                    <path d="M0 6h27M22 1l6 5-6 5" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
