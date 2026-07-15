"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

const links = [
  { label: "About Frank Arnold", href: "/bio" },
  { label: "Reviews", href: "/bio/reviews" },
  { label: "CV", href: "/bio/cv" },
];

export function BioNav() {
  const pathname = usePathname();
  return (
    <div className="border-b border-stone bg-canvas sticky top-20 lg:top-24 z-30">
      <Container>
        <div className="flex gap-6 overflow-x-auto">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "py-4 text-[0.7rem] uppercase tracking-[0.28em] whitespace-nowrap border-b-2 transition-colors -mb-px",
                  active
                    ? "text-accent border-accent"
                    : "text-muted border-transparent hover:text-ink"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
