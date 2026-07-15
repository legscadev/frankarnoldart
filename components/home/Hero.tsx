import Image from "next/image";
import { siteImages } from "@/lib/site-images";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[70vh] min-h-[520px] max-h-[780px]">
        <Image
          src={siteImages.featured.artwork1}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="gold-title text-4xl md:text-6xl lg:text-7xl">
            Frank Arnold
          </h1>
          <p className="mt-4 text-white text-sm md:text-lg font-light tracking-wide">
            International Abstract Figurative Painter and Sculptor
          </p>
          <p className="gold-title mt-10 text-lg md:text-2xl tracking-[0.24em]">
            A Living Master
          </p>
        </div>
      </div>
    </section>
  );
}
