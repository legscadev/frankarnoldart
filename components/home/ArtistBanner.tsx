import Image from "next/image";
import { siteImages } from "@/lib/site-images";

export function ArtistBanner() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[640px]">
        <Image
          src={siteImages.hero.artistInCabo}
          alt="Frank Arnold in the studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
