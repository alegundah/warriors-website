import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** Pixel size of the square mark. */
  size?: number;
  title?: string;
}

/**
 * Warriors mark: a round red shield with a white W cut like two bearded axe blades.
 * Inline SVG so it inherits nothing and renders crisp at any size.
 */
export function LogoMark({ className, size = 40, title = "Warriors" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={cn("shrink-0", className)}
    >
      <title>{title}</title>
      {/* shield board */}
      <circle cx="50" cy="50" r="48" fill="#d30005" />
      {/* iron rim */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      {/* W from two crossed axe blades */}
      <path
        fill="#ffffff"
        d="M19 30 H31 L38.5 60 L45 36 H55 L61.5 60 L69 30 H81 L68 72 H57 L50 48 L43 72 H32 Z"
      />
      {/* blade beards on the outer legs */}
      <path fill="#ffffff" d="M19 30 Q17 22 24 20 L31 30 Z" />
      <path fill="#ffffff" d="M81 30 Q83 22 76 20 L69 30 Z" />
      {/* boss */}
      <circle cx="50" cy="78" r="4.5" fill="#111111" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  size?: number;
  /** Text color class for the wordmark, e.g. "text-ink" or "text-canvas". */
  tone?: "ink" | "canvas";
  withWordmark?: boolean;
}

export function Logo({ className, size = 36, tone = "ink", withWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark size={size} />
      {withWordmark ? (
        <span
          className={cn(
            "type-display text-2xl leading-none",
            tone === "ink" ? "text-ink" : "text-canvas",
          )}
        >
          Warriors
        </span>
      ) : null}
    </span>
  );
}
