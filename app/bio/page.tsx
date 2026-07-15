import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About Frank Arnold",
  description:
    "Biography of Frank Arnold — abstract figurative painter and sculptor.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Frank Arnold"
        subtitle="International Abstract Figurative Painter and Sculptor"
      />

      <section className="pb-16 md:pb-20 bg-canvas">
        <Container size="narrow">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="relative aspect-square overflow-hidden bg-canvas-soft">
              <Image
                src={siteImages.hero.portrait}
                alt="Frank Arnold portrait"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="text-sm md:text-[0.95rem] leading-[1.9] text-ink-soft space-y-4">
              <p>
                Frank Arnold was born in Long Beach, California and raised in
                the San Joaquin Valley. He is considered by many to be one of
                the foremost abstract figurative painters and sculptors of our
                time, with work in private and corporate collections worldwide.
              </p>
              <p>
                Alongside his paintings and bronzes, Arnold is the author of
                two books — a bilingual biography, and a collaboration with
                depth psychologist Dr. Jim Manganiello on the creative
                process. His flagship gallery anchors the historic Gallery
                District of San José del Cabo, Mexico, with working studios
                in Mexico City and Central California.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28 bg-canvas">
        <Container size="narrow">
          <div className="grid gap-6 md:grid-cols-2">
            <VideoCard
              caption="Frank Arnold"
              backgroundSrc={siteImages.hero.artistInCabo}
            />
            <VideoCard
              caption="FRANK ARNOLD"
              backgroundSrc={siteImages.featured.artwork1}
              overlay="dark"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-xs text-muted italic">
              &ldquo;Unlock your imagination and become who you truly are.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted">— Frank Arnold</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted italic max-w-xl mx-auto">
              &ldquo;I chat with one of the foremost abstract figurative painters
              of our time. Frank Arnold, Big gorgeous oils and bronzes.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted">
              Carol McQuaid · Host Artist / Art Critic of &lsquo;Two Artists Walk into a Bar&rsquo;
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function VideoCard({
  caption,
  backgroundSrc,
  overlay = "light",
}: {
  caption: string;
  backgroundSrc: string;
  overlay?: "light" | "dark";
}) {
  return (
    <div className="relative aspect-video overflow-hidden bg-canvas-soft cursor-pointer group">
      <Image
        src={backgroundSrc}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div
        className={
          overlay === "dark"
            ? "absolute inset-0 bg-black/45"
            : "absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors"
        }
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/85 flex items-center justify-center group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-ink ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {overlay === "dark" ? (
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="gold-title text-2xl md:text-3xl tracking-[0.2em]">{caption}</p>
        </div>
      ) : null}
    </div>
  );
}
