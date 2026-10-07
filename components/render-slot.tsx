import Image from "next/image";

import type { RenderSlot as RenderSlotConfig } from "@/content/renders";
import { cn } from "@/lib/utils";

interface RenderSlotProps {
  slot: RenderSlotConfig;
  className?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  priority?: boolean;
  /** Hide the small slot badge even while the image is a placeholder. */
  hideBadge?: boolean;
}

/**
 * Frame for a 3D visualisation. Edge-to-edge image, radius 0, no shadow.
 * While a slot still holds a placeholder it shows a small badge so it is obvious what to replace.
 */
export function RenderSlot({ slot, className, sizes, priority, hideBadge }: RenderSlotProps) {
  return (
    <div className={cn("relative overflow-hidden bg-ink", className)}>
      <Image
        src={slot.src}
        alt={slot.alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className="object-cover"
        unoptimized={slot.src.endsWith(".svg")}
      />
      {slot.placeholder && !hideBadge ? (
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 border border-canvas/40 bg-ink/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-canvas backdrop-blur-sm">
          Render slot {slot.id}
        </span>
      ) : null}
    </div>
  );
}
