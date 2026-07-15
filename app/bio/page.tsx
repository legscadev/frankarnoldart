import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Reveal } from "@/components/shared/Reveal";
import { siteImages } from "@/lib/site-images";
import { artworks } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "About Frank Arnold",
  description:
    "Biography of Frank Arnold — abstract figurative painter and sculptor working between San José del Cabo, Mexico City, and Central California.",
};

const stats = [
  { value: "50+", label: "Years painting" },
  { value: "200+", label: "Works in collections" },
  { value: "3", label: "Working studios" },
  { value: "12", label: "Solo exhibitions" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biography"
        title={
          <>
            About
            <br />
            <span className="italic text-accent">Frank Arnold</span>
          </>
        }
        intro="A five-decade practice built on figures dissolving into gesture — abstract figuration made from the residue of a wildly lived life."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <PlaceholderImage
                ratio="portrait"
                tone="warm"
                label="Frank Arnold portrait"
                src={siteImages.hero.portrait}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="shadow-frame"
              />
              <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="border-t border-stone pt-4">
                    <p className="font-display text-4xl">{s.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-7">
              <div className="prose-lg max-w-none space-y-6 text-base md:text-lg leading-relaxed text-ink-soft">
                <p className="font-display text-2xl md:text-3xl italic text-ink leading-snug">
                  &ldquo;Every painting is an argument with the previous one.
                  If it wins, I keep going.&rdquo;
                </p>
                <p>
                  Frank Arnold grew up in Central California, raised by adoptive
                  parents who encouraged an early fascination with drawing.
                  What began in the margins of school notebooks became the
                  spine of a life: a decades-long practice devoted to
                  translating the human form into color, gesture, and weight.
                </p>
                <p>
                  Before dedicating himself fully to the studio, Arnold taught
                  art in public classrooms and — for several formative years —
                  inside a maximum-security women&apos;s prison. He also
                  pursued a successful career in professional auto racing.
                  Every one of those lives keeps arriving in the paint: the
                  discipline of the racetrack, the raw humanity of the cell
                  block, the patience required to teach.
                </p>
                <p>
                  His work today is called <em>abstract figurative</em>:
                  recognizable bodies pulled through veils of color until they
                  begin to breathe with their own inner light. Bronzes extend
                  the practice into three dimensions — the same figures now
                  weighing on the ground rather than the wall.
                </p>
                <p>
                  Arnold maintains three working studios — in San José del
                  Cabo, Mexico City, and Central California — and his flagship
                  gallery anchors the historic Gallery District of San José
                  del Cabo, where the adjacent Frank Arnold Plaza doubles as a
                  public sculpture garden.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-canvas-soft">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <Reveal>
              <span className="eyebrow">In print</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Read the full story.
              </h2>
              <p className="mt-4 text-ink-soft max-w-md leading-relaxed">
                Two authored books extend the practice beyond the canvas — a
                bilingual biography and a collaboration on the creative process
                with depth psychologist Dr. Jim Manganiello.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="grid grid-cols-2 gap-6">
              <PlaceholderImage
                ratio="portrait"
                tone="ink"
                label={artworks[4].title}
                src={artworks[4].imageUrl}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <PlaceholderImage
                ratio="portrait"
                tone="warm"
                label={artworks[11].title}
                src={artworks[11].imageUrl}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
