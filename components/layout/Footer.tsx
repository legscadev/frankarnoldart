import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { primaryNav, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-canvas">
      <Container size="wide" className="py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <p className="eyebrow text-accentSoft">Frank Arnold Art</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-canvas">
                Where form and emotion meet the canvas.
              </h2>
            </div>
            <p className="text-canvas/70 max-w-md leading-relaxed">
              Original paintings, sculpture, and books by internationally recognized
              abstract figurative artist Frank Arnold.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-canvas/60">Explore</p>
            <ul className="mt-5 flex flex-col gap-3 text-canvas/80">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm hover:text-accentSoft transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-canvas/60">Studio & Gallery</p>
            <address className="mt-5 not-italic text-sm text-canvas/80 leading-relaxed">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.locality}
            </address>
            <div className="mt-5 flex flex-col gap-1 text-sm text-canvas/80">
              <span>Gallery {siteConfig.phones.gallery}</span>
              <span>USA {siteConfig.phones.usa}</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 hover:text-accentSoft transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-canvas/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-canvas/50 tracking-wider">
          <p>© {year} Frank Arnold Art. All rights reserved.</p>
          <p className="uppercase">
            {siteConfig.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
