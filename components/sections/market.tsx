import { Scales } from "@phosphor-icons/react/dist/ssr";

import { Reveal } from "@/components/reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { goods, marketIntro } from "@/content/goods";

export function Market() {
  return (
    <section id="market" className="bg-canvas-soft py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="type-eyebrow mb-5">{marketIntro.eyebrow}</p>
            <h2 className="type-display text-[clamp(3.5rem,8vw,6rem)] text-ink">
              {marketIntro.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink-soft">{marketIntro.body}</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
              <Scales size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
              {marketIntro.note}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {goods.map((good, i) => (
            <Reveal key={good.id} index={i % 4} className="h-full">
              <div className="h-full">
                <MagicCard
                  className="h-full border-hairline"
                  gradientSize={220}
                  gradientFrom="#d30005"
                  gradientTo="#111111"
                  gradientColor="#d30005"
                  gradientOpacity={0.08}
                >
                  <article className="flex h-full flex-col p-6">
                    <p className="type-display text-5xl text-red">{good.norse}</p>
                    <h3 className="mt-5 text-xl font-semibold leading-tight text-ink">{good.name}</h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
                      {good.description}
                    </p>
                    <div className="mt-6 border-t border-hairline pt-4">
                      <p className="flex items-baseline gap-2">
                        <span className="font-display text-4xl leading-none text-ink">
                          {good.silverGrams}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                          g hacksilver
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">{good.barter}</p>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        {good.origin}
                      </p>
                    </div>
                  </article>
                </MagicCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
