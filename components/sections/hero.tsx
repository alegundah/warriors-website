"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";

import { ShieldModel } from "@/components/shield-model";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { clan } from "@/content/clan";

// Canvas effect: client only, never server rendered.
const Particles = dynamic(
  () => import("@/components/ui/particles").then((m) => m.Particles),
  { ssr: false },
);

const enter = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-ink text-canvas"
    >
      {!reduce ? (
        <Particles
          className="absolute inset-0 -z-10"
          quantity={70}
          color="#d30005"
          size={0.8}
          staticity={40}
          ease={60}
          vy={-0.15}
          aria-hidden="true"
        />
      ) : null}

      <motion.div style={{ opacity: fade }} className="container-wide relative pb-14 pt-24 md:pb-20">
        <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-3xl">
            <motion.p
              custom={0}
              variants={enter}
              initial="hidden"
              animate="show"
              className="type-eyebrow mb-5 text-canvas/70"
            >
              {clan.hero.eyebrow}
            </motion.p>

            <TextAnimate
              as="h1"
              by="character"
              animation="blurInUp"
              startOnView={false}
              once
              duration={0.9}
              delay={0.1}
              className="type-display text-[clamp(5rem,18vw,11rem)] text-canvas"
            >
              {clan.hero.headline}
            </TextAnimate>

            <motion.p
              custom={1}
              variants={enter}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-lg leading-relaxed text-canvas/85 md:text-xl"
            >
              {clan.hero.subline}
            </motion.p>

            <motion.div
              custom={2}
              variants={enter}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ShimmerButton
                type="button"
                background="#d30005"
                shimmerColor="#ffffff"
                shimmerDuration="4s"
                borderRadius="0px"
                className="h-12 px-7 text-sm font-semibold uppercase tracking-[0.12em] active:scale-[0.97]"
                onClick={() => {
                  window.location.hash = clan.hero.primaryCta.href;
                }}
              >
                {clan.hero.primaryCta.label}
              </ShimmerButton>
              <Link href={clan.hero.secondaryCta.href} className="btn btn-outline-light">
                {clan.hero.secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          <motion.div
            custom={3}
            variants={enter}
            initial="hidden"
            animate="show"
            className="hidden justify-self-end md:block"
          >
            <ShieldModel className="w-[280px] lg:w-[360px]" />
          </motion.div>
        </div>

        <motion.p
          custom={4}
          variants={enter}
          initial="hidden"
          animate="show"
          className="mt-12 flex items-center gap-3 border-t border-canvas/20 pt-4 text-xs font-medium uppercase tracking-[0.14em] text-canvas/60"
        >
          <span>{clan.homePort}, 54° north</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
