import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow" className="text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[1]">
          Page not <span className="italic text-accent">found</span>.
        </h1>
        <p className="mt-6 text-lg text-ink-soft max-w-md mx-auto">
          The page you&apos;re looking for has drifted off the canvas.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-ink hover:text-accent"
        >
          Return home
          <svg
            viewBox="0 0 24 12"
            className="w-6 h-3 stroke-current stroke-[1.4] fill-none"
          >
            <path d="M0 6h22M17 1l5 5-5 5" />
          </svg>
        </Link>
      </Container>
    </section>
  );
}
