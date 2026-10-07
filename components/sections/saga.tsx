import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/ui/timeline";
import { saga } from "@/content/timeline";

export function Saga() {
  const entries = saga.map((entry) => ({
    title: entry.year,
    label: entry.label,
    content: (
      <article key={entry.year} className="max-w-2xl">
        <h4 className="text-2xl font-semibold leading-tight text-ink md:text-3xl">
          {entry.heading}
        </h4>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{entry.body}</p>
        <p className="mt-6 border-l-2 border-red pl-4 text-sm leading-relaxed text-ink-muted">
          {entry.anchor}
        </p>
      </article>
    ),
  }));

  return (
    <section id="saga" className="bg-canvas py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <Reveal className="max-w-4xl">
          <p className="type-eyebrow mb-5">The saga</p>
          <h2 className="type-display text-[clamp(3.5rem,8vw,6rem)] text-ink">
            Written in silver and salt
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            How a borrowed boat and a shared purse became seven ships. Each chapter of our saga
            sits against a date you can look up.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24">
          <Timeline data={entries} />
        </div>
      </div>
    </section>
  );
}
