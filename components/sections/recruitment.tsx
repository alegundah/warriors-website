import { OathForm } from "@/components/oath-form";
import { Reveal } from "@/components/reveal";
import { recruitment } from "@/content/recruitment";

function List({
  title,
  items,
  numbered,
}: {
  title: string;
  items: ReadonlyArray<{ title: string; body: string }>;
  numbered?: boolean;
}) {
  return (
    <div>
      <h3 className="border-b border-ink pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
        {title}
      </h3>
      <ol className="divide-y divide-hairline">
        {items.map((item, i) => (
          <li key={item.title} className="grid gap-4 py-6 md:grid-cols-[2.5rem_1fr]">
            <span className="font-display text-3xl leading-none text-red" aria-hidden="true">
              {numbered ? String(i + 1).padStart(2, "0") : "+"}
            </span>
            <div>
              <p className="text-xl font-semibold leading-tight text-ink">{item.title}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Recruitment() {
  return (
    <section id="oath" className="bg-canvas py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <Reveal className="max-w-4xl">
          <p className="type-eyebrow mb-5">{recruitment.eyebrow}</p>
          <h2 className="type-display text-[clamp(3.5rem,8vw,6rem)] text-ink">
            {recruitment.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {recruitment.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal index={1}>
            <List title={recruitment.gives.title} items={recruitment.gives.items} />
          </Reveal>
          <Reveal index={2}>
            <List title={recruitment.asks.title} items={recruitment.asks.items} numbered />
          </Reveal>
        </div>

        <Reveal index={1} className="mt-20 border-t border-ink pt-12 md:mt-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-semibold leading-tight text-ink">
                {recruitment.form.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {recruitment.form.note}
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <OathForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
