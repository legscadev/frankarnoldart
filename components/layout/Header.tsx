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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-canvas/85 backdrop-blur-md border-b border-stone/60"
          : "bg-canvas/0 border-b border-transparent"
      )}
    >
      <Container size="wide" className="flex items-center justify-between h-20 lg:h-24">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label="Frank Arnold Art — Home"
        >
          <span className="font-display text-2xl md:text-3xl tracking-[0.02em] text-ink group-hover:text-accent transition-colors duration-300">
            Frank Arnold
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.34em] text-muted">
            Paintings · Sculpture
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
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
                      "flex items-center gap-1 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors",
                      active ? "text-accent" : "text-ink hover:text-accent"
                    )}
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 10 6"
                      className="h-1.5 w-2.5 fill-current"
                      aria-hidden
                    >
                      <path d="M0 0h10L5 6z" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.href ? (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3 min-w-[15rem]"
                      >
                        <div className="bg-canvas border border-stone shadow-frame py-3">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMenus}
                              className={cn(
                                "block px-5 py-2 text-sm text-ink-soft hover:bg-canvas-soft hover:text-accent transition-colors",
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
                  "relative px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors",
                  active ? "text-accent" : "text-ink hover:text-accent"
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent"
                  />
                ) : null}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-canvas z-40 overflow-y-auto"
          >
            <Container className="py-10 flex flex-col gap-2">
              {primaryNav.map((item, i) => {
                const hasChildren = "children" in item && item.children;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="block py-3 font-display text-3xl text-ink border-b border-stone hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <div className="pl-4 py-2 flex flex-col gap-1">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className="py-1 text-sm text-muted uppercase tracking-[0.2em] hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </motion.div>
                );
              })}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
