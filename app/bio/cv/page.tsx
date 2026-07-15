import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

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
  { region: "California", cities: "Agoura Hills · Beverly Hills · Carmel · Del Mar · El Cajon · Fresno · Hollywood · Irvine · La Jolla · Laguna Beach · Long Beach · Los Angeles · Palm Desert · Palm Springs · Sacramento · San Diego · San Francisco · San Juan Capistrano · San Luis Obispo · Santa Monica · San Rafael · Thousand Oaks · Valencia · Mountain View · Oakland" },
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
  { region: "Texas", cities: "Austin · Dallas · Galveston · Houston · Laredo · Midland · Court Springs · Wimberley" },
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
  { region: "Canada", cities: "Banff · Calgary · Edmonton · Hamilton · Horseshoe Bay · Kelowna · Kingston · Montreal · Ottawa · Prince George · Prince Rupert · Quebec City · Regina · Saguenay · Saskatoon · Surrey · Thunder Bay · Toronto · Vancouver · Victoria · Whistler · Thornbury" },
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
  { region: "Mexico", cities: "Acapulco · Cabo San Lucas · Chetumal · Durango · Hermosillo · Heroica · Vera Cruz · La Paz · Leon · Manzanillo · Mazatlan · Mexico City · Monterrey · Morelos · Playa del Carmen · Puebla · Puerto Vallarta · San Jose del Cabo · San Miguel de Allende · Tijuana · Toluca · Torreon" },
  { region: "New Zealand", cities: "Auckland" },
  { region: "Panama", cities: "Panama City" },
  { region: "Russia", cities: "Moscow · St. Petersburg" },
  { region: "Saudi Arabia", cities: "Jeddah" },
  { region: "South Africa", cities: "Cape Town" },
  { region: "Spain", cities: "Barcelona · Madrid" },
  { region: "Switzerland", cities: "Zurich" },
];

export default function CvPage() {
  return (
    <>
      <PageHeader title="Frank Arnold" />
      <section className="pt-6 pb-20 bg-canvas">
        <Container size="narrow">
          <div className="text-sm md:text-[0.95rem] leading-[1.9] text-ink-soft space-y-4">
            <p>
              Frank Arnold was born in Long Beach, California and raised in
              the San Joaquin Valley. He is considered by many to be one of
              the foremost abstract figurative painters and sculptors of our
              time, with work in private and corporate collections worldwide.
            </p>
            <p>
              In addition to oil paintings and bronze sculpture, Arnold has
              authored two books — a bilingual biography, and a collaboration
              with depth psychologist Dr. Jim Manganiello on the creative
              process.
            </p>
          </div>

          <SectionHeading>Exhibits | Galleries</SectionHeading>
          <ul className="text-center space-y-2 text-sm md:text-[0.95rem] text-ink-soft">
            {exhibits.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <SectionHeading>Private & Corporate Collections</SectionHeading>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6">
            United States
          </p>
          <dl className="text-sm md:text-[0.95rem] text-ink-soft space-y-3">
            {collectionsUS.map((c) => (
              <div key={c.region} className="grid grid-cols-[10rem_1fr] gap-4">
                <dt className="uppercase text-xs tracking-[0.14em] text-ink pt-1">
                  {c.region}
                </dt>
                <dd>{c.cities || "—"}</dd>
              </div>
            ))}
          </dl>

          <SectionHeading>Private & Corporate Collections</SectionHeading>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6">
            International
          </p>
          <dl className="text-sm md:text-[0.95rem] text-ink-soft space-y-3">
            {collectionsIntl.map((c) => (
              <div key={c.region} className="grid grid-cols-[10rem_1fr] gap-4">
                <dt className="uppercase text-xs tracking-[0.14em] text-ink pt-1">
                  {c.region}
                </dt>
                <dd>{c.cities}</dd>
              </div>
            ))}
          </dl>

          <SectionHeading>Publications</SectionHeading>
          <ul className="text-center space-y-4 text-sm md:text-[0.95rem] text-ink-soft">
            <li>
              <span className="text-ink">
                Frank Arnold Speaks · Painting & Sculpture
              </span>
              <br />
              <span className="text-xs text-muted">
                ©2014, 2018 Hardcover — Frank Arnold and William Choate, Jr.
              </span>
            </li>
            <li>
              <span className="text-ink">
                Your Creative Imagination UNLOCKED: Become Who You Truly Are
              </span>
              <br />
              <span className="text-xs text-muted">
                ©2016 Hardcover — Dr. Jim Manganiello & Frank Arnold
              </span>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 mb-8 text-center text-xs uppercase tracking-[0.2em] font-semibold text-ink">
      {children}
    </h2>
  );
}
