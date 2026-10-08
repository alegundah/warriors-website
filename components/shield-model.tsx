"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type DetailedHTMLProps, type HTMLAttributes } from "react";

import { LogoMark } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        autoplay?: boolean;
        loading?: "auto" | "lazy" | "eager";
        [attribute: `${string}-${string}`]: string | undefined;
      };
    }
  }
}

const models = {
  spinning: "/models/roskilde-vikingskjold-spinning.glb",
  still: "/models/roskilde-vikingskjold-stillestaende.glb",
};

interface ShieldModelProps {
  className?: string;
}

/**
 * The clan shield in 3D. Spins on its own; reduced motion gets the still model.
 * The flat logo mark holds the space until the model has loaded, and stays if WebGL fails.
 */
export function ShieldModel({ className }: ShieldModelProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [defined, setDefined] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // model-viewer touches window on import, so it is loaded on the client only.
  useEffect(() => {
    let active = true;
    import("@google/model-viewer").then(() => {
      if (active) setDefined(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onLoad = () => setLoaded(true);
    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, [defined, reduce]);

  return (
    <div className={cn("relative aspect-square", className)}>
      <LogoMark
        size={176}
        title="Warriors clan shield"
        className={cn(
          "absolute inset-0 m-auto transition-opacity duration-500",
          loaded && "opacity-0",
        )}
      />
      {defined ? (
        <model-viewer
          ref={ref}
          key={reduce ? "still" : "spinning"}
          src={reduce ? models.still : models.spinning}
          alt="3D model of the Warriors round shield, after the Viking shields at Roskilde"
          loading="lazy"
          autoplay={!reduce}
          camera-controls=""
          disable-zoom=""
          disable-pan=""
          interaction-prompt="none"
          touch-action="pan-y"
          camera-target="-0.012m 0.547m 0m"
          camera-orbit="0deg 90deg 1.9m"
          min-camera-orbit="auto auto 1.9m"
          max-camera-orbit="auto auto 1.9m"
          field-of-view="30deg"
          environment-image="neutral"
          shadow-intensity="0"
          className={cn(
            "absolute inset-0 block size-full bg-transparent opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            loaded && "opacity-100",
          )}
        />
      ) : null}
    </div>
  );
}
