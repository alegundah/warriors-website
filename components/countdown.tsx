"use client";

import { useEffect, useState } from "react";

import { NumberTicker } from "@/components/ui/number-ticker";

const DAY = 24 * 60 * 60 * 1000;

/**
 * Whole days until an ISO date. Computed on the client after mount so the
 * server never renders a number that depends on the visitor's clock.
 */
export function Countdown({ target, className }: { target: string; className?: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const end = new Date(`${target}T06:00:00`);
      setDays(Math.max(0, Math.ceil((end.getTime() - now.getTime()) / DAY)));
    };
    compute();
    const id = window.setInterval(compute, 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <span className={className} aria-live="polite">
      {days === null ? (
        <span className="opacity-0" aria-hidden="true">
          000
        </span>
      ) : (
        <NumberTicker value={days} className="tracking-normal text-canvas" />
      )}
    </span>
  );
}
