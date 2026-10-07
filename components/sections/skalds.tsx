import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/ui/marquee";
import { skaldLines, skaldsIntro } from "@/content/skalds";

export function Skalds() {
  return (
    <section id="skalds" className="overflow-hidden border-y border-hairline bg-canvas py-20 md:py-24">
      <Reveal className="container-wide flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <p className="type-eyebrow">{skaldsIntro.eyebrow}</p>
        <h2 className="type-display text-4xl text-ink md:text-5xl">{skaldsIntro.title}</h2>
      </Reveal>

      {/* Screen readers get the list once; the moving copy is decorative. */}
      <ul className="sr-only">
        {skaldLines.map((line) => (
          <li key={line.by}>
            {line.quote} ({line.by})
          </li>
        ))}
      </ul>

      <Marquee
        pauseOnHover
        aria-hidden="true"
        className="mt-10 p-0 [--duration:70s] [--gap:1.25rem] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        {skaldLines.map((line) => (
          <figure
            key={line.by}
            className="w-[min(80vw,26rem)] shrink-0 border border-hairline bg-canvas p-6"
          >
            <blockquote className="text-lg font-medium leading-snug text-ink">
              {line.quote}
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {line.by}
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
