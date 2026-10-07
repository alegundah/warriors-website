import Link from "next/link";

import { Countdown } from "@/components/countdown";
import { Reveal } from "@/components/reveal";
import { nextRaid } from "@/content/raid";

const facts = [
  { label: "Departs", value: nextRaid.departureLabel },
  { label: "From", value: nextRaid.from },
  { label: "Bound for", value: nextRaid.to },
  { label: "Duration", value: nextRaid.duration },
];

export function NextRaid() {
  return (
    <section id="raid" className="bg-red py-24 text-canvas md:py-32 lg:py-40">
      <div className="container-wide">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="type-eyebrow text-canvas/75">{nextRaid.eyebrow}</p>
            <h2 className="type-display mt-5 text-[clamp(4rem,12vw,10rem)] text-canvas">
              {nextRaid.name}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end lg:text-right">
            <Countdown
              target={nextRaid.departure}
              className="font-display text-[clamp(4rem,9vw,7rem)] leading-none text-canvas"
            />
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-canvas/75">
              Days until the ice is off the Schlei
            </p>
          </div>
        </Reveal>

        <Reveal index={1} className="mt-14 grid gap-px border-y border-canvas/30 md:grid-cols-4 md:divide-x md:divide-canvas/30">
          {facts.map((fact) => (
            <div key={fact.label} className="py-6 md:px-6 md:first:pl-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-canvas/75">
                {fact.label}
              </p>
              <p className="mt-2 text-lg font-medium leading-snug">{fact.value}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal index={2} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-canvas/90 md:text-xl">{nextRaid.summary}</p>
            <p className="mt-6 border-l-2 border-canvas/60 pl-4 text-base leading-relaxed text-canvas/80">
              {nextRaid.share}
            </p>
            <Link href={nextRaid.cta.href} className="btn mt-10 bg-canvas text-ink hover:bg-canvas-soft">
              {nextRaid.cta.label}
            </Link>
          </Reveal>

          <Reveal index={3} className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-baseline justify-between border-b border-canvas/30 pb-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-canvas/75">
                Oars still open
              </h3>
              <p className="font-display text-4xl leading-none">
                {nextRaid.oarsOpen}
                <span className="ml-2 text-xl text-canvas/75">of {nextRaid.ships * 32}</span>
              </p>
            </div>
            <ul className="divide-y divide-canvas/30">
              {nextRaid.needs.map((need) => (
                <li key={need.role} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 py-5">
                  <span className="font-display text-4xl leading-none">{need.count}</span>
                  <div>
                    <p className="text-lg font-semibold leading-tight">{need.role}</p>
                    <p className="mt-1 text-sm text-canvas/80">{need.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
