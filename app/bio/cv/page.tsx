import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Frank Arnold — exhibits, galleries, private and corporate collections worldwide, publications, and press bibliography.",
};

const exhibits: string[] = [
  "Private & Corporate Collections | Worldwide",
  "New York National Art Club Museum | New York, New York",
  "Museum de Hacienda | Mexico City, Mexico",
  "Minch Gallery | by Francisco Paris | Cabo San Lucas Mexico",
  "Arte Americas Museum",
  "Maurer Gallery | Cabo San Lucas Mexico",
  "Denise Roberge Art Gallery | Palm Desert, California",
  "Frank Arnold | Gallery San José del Cabo Mexico",
  "Ortin Gallery | San Francisco, California",
  "Skot Foreman Gallery | San Miguel de Allende Mexico",
  "Marshall Watson | New York Architectural Digest",
  "Gallery Strada | Fresno, California",
  "Steynberg Gallery | San Luis Obispo, California",
  "Field Gallery | San Jose del Cabo Mexico",
  "Fresno Art Museum | Next Wave",
  "Skot Foreman Gallery | Cabo San Lucas Mexico",
  "International Artist Day, B.C. Canada",
  "Artist of the Year — Horizon Award 2013",
  "The Great Eight Exhibit | At the Patterson",
  "Fresno Art Museum | Chairisma",
  "Frank Arnold | Studio 8 Fresno, California",
  "ArtHop | First Thursdays",
  "Fresno Art Museum | Conversation with the Artist",
  "Fresno City Hall | Guest Artist",
  "Kristin Kilmer Design Inc | Hollywood, California",
  "Art Center FCC",
  "NG2 Gallery",
  "Studios 1528",
  "Inside Out Gallery",
  "Bus Barn Studio",
  "D O Art Dealer",
  "Berg Gallery",
  "10 @ Studio",
  "Privado Gallery",
  "Louis Vargas | Gallery Space",
  "Quady Winery Gallery",
  "Interior Systems",
  "Spectrum Art Space",
  "Urban Art Space",
];

type Collection = { region: string; cities: string };

const collectionsUS: Collection[] = [
  { region: "Arizona", cities: "Flagstaff · Phoenix · Scottsdale · Tucson · Yuma" },
  { region: "Arkansas", cities: "Little Rock" },
  {
    region: "California",
    cities:
      "Agoura Hills · Beverly Hills · Carmel · Del Mar · El Cajon · Fresno · Hollywood · Irvine · La Jolla · Laguna Beach · Long Beach · Los Angeles · Palm Desert · Palm Springs · Sacramento · San Diego · San Francisco · San Juan Capistrano · San Luis Obispo · Santa Monica · San Rafael · Thousand Oaks · Valencia · Mountain View · Oakland",
  },
  { region: "Colorado", cities: "Aspen · Boulder · Denver" },
  { region: "Connecticut", cities: "Darien" },
  { region: "Florida", cities: "Miami · Orlando · Pensacola · Tampa Bay · Naples" },
  { region: "Georgia", cities: "Atlanta · Alpharetta" },
  { region: "Idaho", cities: "Boise · Coeur d’Alene" },
  { region: "Illinois", cities: "Chicago · Glencoe" },
  { region: "Louisiana", cities: "Baton Rouge · New Orleans" },
  { region: "Maine", cities: "Bangor" },
  { region: "Maryland", cities: "Baltimore" },
  { region: "Massachusetts", cities: "Groveland" },
  { region: "Michigan", cities: "Detroit · Grand Rapids" },
  { region: "Minnesota", cities: "Minneapolis · St. Paul" },
  { region: "Missouri", cities: "St. Louis" },
  { region: "Montana", cities: "Bozeman · Billings" },
  { region: "Nevada", cities: "Las Vegas · Reno · Lake Tahoe" },
  { region: "New Jersey", cities: "Trenton" },
  { region: "New Mexico", cities: "Albuquerque · Santa Fe" },
  { region: "New York", cities: "Albany · New York · Rochester · South Hampton" },
  { region: "North Carolina", cities: "Charlotte · Raleigh · Wilmington" },
  { region: "Ohio", cities: "Cincinnati" },
  { region: "Oklahoma", cities: "Oklahoma City · Edmond" },
  { region: "Oregon", cities: "Ashland · Bend · Eugene · Medford · Portland · Salem" },
  { region: "Pennsylvania", cities: "Philadelphia · Pittsburgh" },
  {
    region: "Texas",
    cities:
      "Austin · Dallas · Galveston · Houston · Laredo · Midland · Court Springs · Wimberley",
  },
  { region: "Utah", cities: "Ogden · Salt Lake City" },
  { region: "Virginia", cities: "Norfolk · Richmond" },
  { region: "Washington, D.C.", cities: "" },
  { region: "Washington", cities: "Olympia · Seattle · Spokane · Ridgefield" },
  { region: "Wisconsin", cities: "Elm Grove" },
];

const collectionsIntl: Collection[] = [
  { region: "Argentina", cities: "Buenos Aires" },
  { region: "Australia", cities: "Sydney · Queensland · Tasmania" },
  { region: "Brazil", cities: "Rio de Janeiro · São Paulo" },
  {
    region: "Canada",
    cities:
      "Banff · Calgary · Edmonton · Hamilton · Horseshoe Bay · Kelowna · Kingston · Montreal · Ottawa · Prince George · Prince Rupert · Quebec City · Regina · Saguenay · Saskatoon · Surrey · Thunder Bay · Toronto · Vancouver · Victoria · Whistler · Thornbury",
  },
  { region: "China", cities: "Beijing · Shanghai · Singapore" },
  { region: "Egypt", cities: "Cairo" },
  { region: "England", cities: "London" },
  { region: "Emirates", cities: "Dubai" },
  { region: "Finland", cities: "Helsinki · Turku" },
  { region: "France", cities: "Paris" },
  { region: "Germany", cities: "Stuttgart" },
  { region: "Guatemala", cities: "Antigua · Guatemala" },
  { region: "Ireland", cities: "Dublin" },
  { region: "Japan", cities: "Tokyo" },
  {
    region: "Mexico",
    cities:
      "Acapulco · Cabo San Lucas · Chetumal · Durango · Hermosillo · Heroica · Vera Cruz · La Paz · Leon · Manzanillo · Mazatlan · Mexico City · Monterrey · Morelos · Playa del Carmen · Puebla · Puerto Vallarta · San Jose del Cabo · San Miguel de Allende · Tijuana · Toluca · Torreon",
  },
  { region: "New Zealand", cities: "Auckland" },
  { region: "Panama", cities: "Panama City" },
  { region: "Russia", cities: "Moscow · St. Petersburg" },
  { region: "Saudi Arabia", cities: "Jeddah" },
  { region: "South Africa", cities: "Cape Town" },
  { region: "Spain", cities: "Barcelona · Madrid" },
  { region: "Switzerland", cities: "Zurich" },
];

type Publication = { title: string; meta: string };

const publications: Publication[] = [
  {
    title: "Frank Arnold Speaks · Painting & Sculpture",
    meta: "©2014, 2018 Hardcover — Frank Arnold and William Choate, Jr.",
  },
  {
    title: "Your Creative Imagination UNLOCKED: Become Who You Truly Are",
    meta: "©2016 Hardcover — Dr. Jim Manganiello & Frank Arnold",
  },
];

type Bib = { title: string; author?: string; href?: string };

const bibliography: Bib[] = [
  {
    title: "T&C Travel Guide: Los Cabos, Mexico",
    author: "Deborah Klein Lev-Tov · 12/14/2016",
    href: "http://www.townandcountrymag.com/leisure/travel-guide/news/a8906/travel-guide-los-cabos-cabo-mexico/",
  },
  {
    title: "Los Cabos Guide — Frank Arnold Gallery",
    author: "Tyson Promotions",
    href: "http://www.loscabosguide.com/frank-arnold-gallery/",
  },
  {
    title: "Guide to San Jose del Cabo’s Gallery District Art Walk",
    author: "Blakely Trettenero",
    href: "http://hungryfortravels.com/guide-to-san-jose-del-cabos-gallery-district-art-walk/",
  },
  {
    title: "Cabo San Lucas: Beyond the beer is a booming culture scene",
    author: "Olivia Hall · December 9, 2016 · Seattle Times",
    href: "http://www.seattletimes.com/nwshowcase/journeys/cabo-san-lucas-beyond-the-beer-is-a-booming-culture-scene",
  },
  {
    title: "The Best of Baja",
    author: "Lindsey Olander · Oct 20, 2016 · Jetsetter",
    href: "https://www.jetsetter.com/magazine/993/best-of-baja",
  },
  {
    title: "Gallery Strada — Featured Artist",
    href: "http://gallerystrada.com/index.php/featured-artist/frank-arnold",
  },
  {
    title: "Arta Gallery Toronto",
    author: "Libby Simms · 7/9/2013",
    href: "http://www.jaynelibby.com",
  },
  {
    title: "The Scene — Los Cabos Magazine",
    author: "Sandra Bery & Chris Sands · 4/3/14",
    href: "http://www.loscabosmagazine.com/2014/04/the-scene",
  },
  {
    title: "Three Perfect Days: Los Cabos",
    author: "United Airlines",
    href: "http://www.unitedmags.com/three-perfect-days-los-cabos",
  },
  {
    title: "Two Artists Walk into a Bar — Going Deeper with Frank Arnold",
    href: "http://www.twoartistswalkintoabar.com",
  },
  {
    title: "Art Lovers Are Flocking to Cabo, And Here’s Why",
    author: "Anna Kocharian · 4/13/17 · Domino",
    href: "https://domino.com/san-jose-del-cabo-travel-guide",
  },
  {
    title: "Fodor’s Review — Frank Arnold Gallery",
    href: "http://www.fodors.com/world/mexico-and-central-america/mexico/los-cabos/things-to-do/shopping/reviews/frank-arnold-gallery-486383",
  },
  {
    title: "New York Magazine — Weekend Travel",
    href: "http://nymag.com/nymag/rss/travel/loscabos/index4.html",
  },
  {
    title: "Gallery District — San Jose del Cabo",
    href: "http://www.artcabo.com/frank-arnold.html",
  },
  {
    title: "A Living Master — Frank Arnold",
    author: "Art & Design · 4/20/17 · Ocean Blue World",
    href: "https://www.oceanblueworld.com/luxury-living/art_design/living-master-frank-arnold/",
  },
  {
    title: "36 Hours in Los Cabos, Mexico",
    author: "Elaine Glusac · The New York Times · 3/11/15",
    href: "https://www.nytimes.com/2015/03/15/travel/what-to-do-in-36-hours-in-los-cabos-mexico.html",
  },
  {
    title: "Fresno Boy Basks in the Mexican Sun",
    author: "Mike Dunne · 3/14/12",
    href: "http://findingloscabos.blogspot.com/2012/03/fresno-boy-basks-in-mexican-sun.html",
  },
  {
    title: "Frank Arnold Gallery",
    author: "San Jose del Cabo Guide · July 2016",
    href: "http://www.sanjosedelcaboguide.com/art-galleries/frank-arnold-gallery/",
  },
  {
    title: "Art and Wine at Art Walk San Jose del Cabo",
    author: "Janice and George · March 6, 2014 · Sand in My Suitcase",
    href: "http://www.sandinmysuitcase.com/art-walk-san-jose-del-cabo/",
  },
];

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum Vitae"
        title={
          <>
            <span className="italic text-accent">CV</span>
          </>
        }
        intro="Exhibits, galleries, collections worldwide, publications, and press."
      />

      {/* Contact + Statement */}
      <section className="py-20 md:py-24">
        <Container size="narrow">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl leading-tight">
                  Contact
                </h2>
                <ul className="mt-6 flex flex-col gap-2 text-ink-soft text-sm">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>USA {siteConfig.phones.usa}</li>
                  <li>Mexico {siteConfig.phones.gallery}</li>
                </ul>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-2xl md:text-3xl leading-tight">
                  Statement
                </h2>
                <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-ink-soft">
                  <p>
                    Frank Arnold was born in Long Beach, California and raised
                    in the San Joaquin Valley. He is considered by many to be
                    one of the foremost abstract figurative painters and
                    sculptors of our time. His work is held in private and
                    corporate collections worldwide.
                  </p>
                  <p>
                    In addition to oil paintings and bronze sculpture, Arnold
                    has produced two books. The first, <em>Frank Arnold
                    Speaks</em>, is a bilingual English-and-Spanish biography
                    covering his upbringing by adoptive parents and the impact
                    those experiences have had on his artwork. The second,
                    <em> Your Creative Imagination Unlocked</em>, is a
                    collaboration with depth psychologist Dr. Jim Manganiello
                    that explores his creative process alongside observations
                    on Cy Twombly, Wassily Kandinsky, Pablo Picasso, Mark
                    Rothko, and Banksy — and how art can be a path to
                    rediscovering the creative imagination.
                  </p>
                  <p>
                    Arnold’s earlier work centered on his own life from
                    childhood to the present, each story told in a personal
                    code that was both cathartic and confidential. For the past
                    decade his practice has drawn from a deeper connection —
                    producing pieces that speak in many voices, some familiar
                    and some unknown, even to Arnold. It is not uncommon for
                    viewers to be moved to tears, pouring out feelings and
                    stories accessed by a painting or sculpture. Arnold is
                    honored and humbled by these encounters, and makes himself
                    as available as possible to visitors in his studios and
                    gallery.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Exhibits | Galleries */}
      <section className="py-16 md:py-20 border-t border-stone">
        <Container size="narrow">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              <h2 className="md:col-span-1 font-display text-2xl md:text-3xl leading-tight">
                Exhibits &<br />Galleries
              </h2>
              <ul className="md:col-span-3 divide-y divide-stone">
                {exhibits.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-base md:text-lg text-ink-soft leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Collections — United States */}
      <section className="py-16 md:py-20 border-t border-stone">
        <Container size="narrow">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="md:col-span-1">
                <span className="eyebrow">Private &amp; Corporate</span>
                <h2 className="mt-3 font-display text-2xl md:text-3xl leading-tight">
                  Collections<br />
                  <span className="italic text-accent">United States</span>
                </h2>
              </div>
              <dl className="md:col-span-3 divide-y divide-stone">
                {collectionsUS.map((c) => (
                  <div
                    key={c.region}
                    className="grid grid-cols-[9rem_1fr] gap-6 py-4"
                  >
                    <dt className="text-xs uppercase tracking-[0.24em] text-ink pt-1">
                      {c.region}
                    </dt>
                    <dd className="text-base text-ink-soft leading-relaxed">
                      {c.cities || "—"}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Collections — International */}
      <section className="py-16 md:py-20 border-t border-stone">
        <Container size="narrow">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="md:col-span-1">
                <span className="eyebrow">Private &amp; Corporate</span>
                <h2 className="mt-3 font-display text-2xl md:text-3xl leading-tight">
                  Collections<br />
                  <span className="italic text-accent">International</span>
                </h2>
              </div>
              <dl className="md:col-span-3 divide-y divide-stone">
                {collectionsIntl.map((c) => (
                  <div
                    key={c.region}
                    className="grid grid-cols-[9rem_1fr] gap-6 py-4"
                  >
                    <dt className="text-xs uppercase tracking-[0.24em] text-ink pt-1">
                      {c.region}
                    </dt>
                    <dd className="text-base text-ink-soft leading-relaxed">
                      {c.cities}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-20 border-t border-stone">
        <Container size="narrow">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              <h2 className="md:col-span-1 font-display text-2xl md:text-3xl leading-tight">
                Publications
              </h2>
              <ul className="md:col-span-3 divide-y divide-stone">
                {publications.map((p) => (
                  <li key={p.title} className="py-4">
                    <p className="font-display text-xl md:text-2xl leading-tight">
                      {p.title}
                    </p>
                    <p className="mt-2 text-sm text-muted">{p.meta}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Bibliography */}
      <section className="py-16 md:py-24 border-t border-stone">
        <Container size="narrow">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-4">
              <h2 className="md:col-span-1 font-display text-2xl md:text-3xl leading-tight">
                Bibliography
              </h2>
              <ul className="md:col-span-3 divide-y divide-stone">
                {bibliography.map((b) => (
                  <li key={b.title} className="py-4">
                    {b.href ? (
                      <a
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-2 text-base md:text-lg text-ink hover:text-accent transition-colors"
                      >
                        <span>{b.title}</span>
                        <svg
                          viewBox="0 0 12 12"
                          className="mt-1.5 w-2.5 h-2.5 fill-none stroke-current stroke-[1.5] opacity-60 group-hover:opacity-100"
                        >
                          <path d="M3 3h6v6M9 3L3 9" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-base md:text-lg text-ink">
                        {b.title}
                      </span>
                    )}
                    {b.author ? (
                      <p className="mt-1 text-sm text-muted">{b.author}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
