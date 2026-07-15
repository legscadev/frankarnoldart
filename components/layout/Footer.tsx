import { Container } from "@/components/layout/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-stone bg-canvas py-8">
      <Container size="wide">
        <p className="text-center text-sm text-muted">
          Copyright © {year} Frank Arnold Art
        </p>
      </Container>
    </footer>
  );
}
