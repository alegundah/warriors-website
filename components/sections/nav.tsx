"use client";

import { List, X } from "@phosphor-icons/react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { clan, navLinks } from "@/content/clan";
import { cn } from "@/lib/utils";

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  // Flip to a solid bar once the hero image has scrolled past the nav.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 48;
    if (next !== solid) setSolid(next);
  });

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  const onDark = !solid && !open;

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-200 ease-out",
          solid || open ? "bg-canvas text-ink" : "bg-transparent text-canvas",
          solid && !open && "border-b border-hairline",
        )}
      >
        <nav
          className="container-wide flex h-16 items-center justify-between md:h-20"
          aria-label="Primary"
        >
          <Link href="#top" className="flex items-center" aria-label="Warriors, back to top">
            <Logo size={32} tone={onDark ? "canvas" : "ink"} />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-[0.14em] transition-opacity duration-150 hover:opacity-70",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href={clan.hero.primaryCta.href}
              className={cn(
                "btn hidden h-11 px-5 md:inline-flex",
                onDark ? "btn-outline-light" : "btn-ink",
              )}
            >
              {clan.hero.primaryCta.label}
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div
            id="mobile-menu"
            className="border-t border-hairline bg-canvas text-ink md:hidden"
          >
            <ul className="container-wide flex flex-col divide-y divide-hairline">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex h-14 items-center text-base font-semibold uppercase tracking-[0.14em]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href={clan.hero.primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="btn btn-red w-full"
                >
                  {clan.hero.primaryCta.label}
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </header>
    </>
  );
}
