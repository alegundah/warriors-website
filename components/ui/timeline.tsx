"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  label?: string;
  content: React.ReactNode;
}

/**
 * Scroll-driven timeline (adapted from Aceternity UI).
 * The vertical rail fills with brand red as the reader scrolls through the saga.
 */
export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => setHeight(node.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn("w-full", className)} ref={containerRef}>
      <div ref={ref} className="relative pb-10">
        {data.map((item, index) => (
          <div
            key={item.title}
            className="flex justify-start pt-16 first:pt-0 md:gap-10 md:pt-28"
          >
            <div className="sticky top-32 z-30 flex max-w-xs flex-col items-start self-start md:w-full md:max-w-sm md:flex-row md:items-center">
              <div
                className="absolute left-3 flex size-10 items-center justify-center bg-canvas"
                aria-hidden="true"
              >
                <div
                  className={cn(
                    "size-3 border-2 border-ink bg-canvas",
                    index === data.length - 1 && "bg-red border-red",
                  )}
                />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="font-display text-6xl leading-[0.9] text-ink lg:text-7xl">
                  {item.title}
                </h3>
                {item.label ? (
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-ink-muted">
                    {item.label}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="relative w-full pl-20 pr-0 md:pl-4">
              <div className="mb-4 md:hidden">
                <h3 className="font-display text-5xl leading-[0.9] text-ink">
                  {item.title}
                </h3>
                {item.label ? (
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                    {item.label}
                  </p>
                ) : null}
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[1.4375rem] top-0 w-0.5 overflow-hidden bg-hairline [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]"
          aria-hidden="true"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-0.5 bg-red"
          />
        </div>
      </div>
    </div>
  );
};
