"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { primaryNav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-stone">
      <Container size="wide" className="flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-display text-2xl md:text-[1.6rem] text-accent tracking-wide"
          aria-label="Frank Arnold Art — Home"
        >
          Frank Arnold Art
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {primaryNav.map((item) => {
            const hasChildren = "children" in item && item.children;
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            if (hasChildren) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                      active ? "text-accent" : "text-ink hover:text-accent"
                    )}
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 fill-current" aria-hidden>
                      <path d="M0 0h10L5 6z" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.href ? (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2 min-w-[13rem]"
                      >
                        <div className="bg-canvas border border-stone shadow-frame py-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMenus}
                              className={cn(
                                "block px-5 py-2 text-sm text-ink hover:text-accent transition-colors",
                                pathname === child.href && "text-accent"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className={cn(
                  "py-2 text-sm font-medium transition-colors",
                  active ? "text-accent" : "text-ink hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-ink"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-ink"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-ink"
          />
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-canvas z-40 overflow-y-auto border-t border-stone"
          >
            <Container className="py-8 flex flex-col">
              {primaryNav.map((item) => {
                const hasChildren = "children" in item && item.children;
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="block py-4 text-lg font-medium text-ink border-b border-stone hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <div className="pl-4 pb-2 flex flex-col">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className="py-2 text-sm text-muted hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
