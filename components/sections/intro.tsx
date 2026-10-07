import { Reveal } from "@/components/reveal";
import { NumberTicker } from "@/components/ui/number-ticker";
import { clan } from "@/content/clan";

export function Intro() {
  return (
    <section id="clan" className="bg-canvas py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <Reveal>
          <h2 className="type-display max-w-5xl text-[clamp(3.5rem,8vw,6rem)] text-ink">
            {clan.intro.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            {clan.intro.body.map((paragraph, i) => (
              <Reveal key={i} index={i + 1}>
                <p className="text-lg leading-relaxed text-ink-soft [&+p]:mt-6 md:text-xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 md:mt-28">
          <dl className="grid grid-cols-2 border-y border-hairline md:grid-cols-4 md:divide-x md:divide-hairline">
            {clan.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col gap-3 py-8 pr-6 odd:border-r odd:border-hairline md:px-6 md:py-10 md:odd:border-r-0 [&:nth-child(-n+2)]:border-b [&:nth-child(-n+2)]:border-hairline md:[&:nth-child(-n+2)]:border-b-0"
              >
                <dd className="order-1 font-display text-6xl leading-none text-ink md:text-7xl lg:text-8xl">
                  <NumberTicker
                    value={stat.value}
                    delay={0.15 * i}
                    className="tracking-normal text-ink"
                  />
                </dd>
                <dt className="order-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
