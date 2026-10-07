"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Stagger index; 70ms per step. */
  index?: number;
  /** Pixels of upward travel. */
  distance?: number;
};

/**
 * Fade-and-rise on first entry. Purpose: bridge content that would otherwise pop in while scrolling.
 * Respects reduced motion through MotionConfig at the root.
 */
export function Reveal({ index = 0, distance = 24, className, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ClipRevealProps = HTMLMotionProps<"div"> & { index?: number };

/**
 * Image reveal: the frame unmasks from the bottom edge like a sail dropping.
 */
export function ClipReveal({ index = 0, className, children, ...props }: ClipRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: EASE }}
      className={cn("will-change-[clip-path]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
