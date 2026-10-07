import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { clan, navLinks } from "@/content/clan";
import { glossary, myths, sources } from "@/content/glossary";

export function Footer() {
  return (
    <footer id="about" className="bg-ink text-canvas">
      <div className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size={44} tone="canvas" />
            <p className="type-display mt-8 max-w-md text-4xl text-canvas md:text-5xl">
              {clan.motto}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-canvas/70">
              Havamal, verse 76. The only recruitment slogan a Viking crew ever needed. Warriors is
              a fictional clan built for Projekt Vikingetogt; the history it leans on is real and
              listed below.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-[0.14em] text-canvas/80 transition-colors duration-150 hover:text-canvas"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="border-b border-hairline-dark pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-canvas/70">
              Words we use
            </h3>
            <dl className="divide-y divide-hairline-dark">
              {glossary.map((entry) => (
                <div key={entry.term} className="py-3">
                  <dt className="font-semibold text-canvas">{entry.term}</dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-canvas/70">{entry.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-3">
            <h3 className="border-b border-hairline-dark pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-canvas/70">
              Sources
            </h3>
            <ul className="divide-y divide-hairline-dark">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3 py-3 text-sm leading-relaxed text-canvas/80 transition-colors duration-150 hover:text-canvas"
                  >
                    <span>{source.label}</span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-canvas/50 transition-colors duration-150 group-hover:text-red"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 border-b border-hairline-dark pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-canvas/70">
              Myths we left out
            </h3>
            <ul className="divide-y divide-hairline-dark">
              {myths.map((myth) => (
                <li key={myth} className="py-3 text-sm leading-relaxed text-canvas/70">
                  {myth}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline-dark">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs font-medium uppercase tracking-[0.14em] text-canvas/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Warriors, a Viking clan of the North Sea. Projekt Vikingetogt, 2026.</p>
          <p>Built with Next.js, Tailwind, Motion, Magic UI and Aceternity UI.</p>
        </div>
      </div>
    </footer>
  );
}
