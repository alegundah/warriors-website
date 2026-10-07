import { RenderSlot } from "@/components/render-slot";
import { ClipReveal, Reveal } from "@/components/reveal";
import { renders } from "@/content/renders";

const tiles = [
  { slot: renders.shieldWall, sizes: "(min-width: 768px) 60vw, 100vw" },
  { slot: renders.camp, sizes: "(min-width: 768px) 30vw, 100vw" },
  { slot: renders.forge, sizes: "(min-width: 768px) 30vw, 100vw" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-canvas-soft py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-8">
          <h2 className="type-display text-[clamp(3rem,6vw,5rem)] text-ink">
            From the yard
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            Three views of the clan, rendered in 3D. Ships, shield wall and the winter hall at
            Hedeby.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {tiles.map((tile, i) => (
            <figure
              key={tile.slot.id}
              className={
                i === 0
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-start-3"
              }
            >
              <ClipReveal index={i} className={i === 0 ? "h-full" : undefined}>
                <RenderSlot
                  slot={tile.slot}
                  sizes={tile.sizes}
                  className={
                    i === 0
                      ? "aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[560px]"
                      : "aspect-[4/5] w-full md:aspect-auto md:h-[270px]"
                  }
                />
              </ClipReveal>
              <figcaption className="mt-3 flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <span className="text-red">{tile.slot.id}</span>
                <span>{tile.slot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
