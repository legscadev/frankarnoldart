import { siteConfig } from "@/lib/site";

/**
 * Embeds Frank's Artgalleria folio — the public catalog and inquiry flow
 * are handled inside the iframe (styled by Artgalleria, not this app).
 */
export function ArtgalleriaFrame() {
  const src = `https://www.artgalleria.com/folio?p=${siteConfig.artgalleriaFolioId}`;
  return (
    <div className="w-full">
      <iframe
        src={src}
        title="Frank Arnold — Paintings & Sculptures portfolio"
        loading="lazy"
        allow="fullscreen"
        className="block w-full border-0 h-[800px] md:h-[900px] lg:h-[1000px]"
      />
    </div>
  );
}
