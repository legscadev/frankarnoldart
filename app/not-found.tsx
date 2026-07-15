import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-32 bg-canvas">
      <Container size="narrow" className="text-center">
        <h1 className="gold-title text-4xl md:text-6xl">404</h1>
        <p className="mt-6 text-base text-ink-soft">
          The page you&apos;re looking for could not be found.
        </p>
        <Link href="/" className="btn-gold mt-10">
          Return home
        </Link>
      </Container>
    </section>
  );
}
