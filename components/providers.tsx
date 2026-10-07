"use client";

import { MotionConfig } from "motion/react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: false,
          classNames: {
            toast:
              "!rounded-none !border !border-ink !bg-ink !text-canvas !shadow-none font-body",
            title: "!font-semibold",
            description: "!text-canvas/80",
          },
        }}
      />
    </MotionConfig>
  );
}
