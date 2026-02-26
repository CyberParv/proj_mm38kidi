"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  auroraColors?: string[];
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  auroraColors,
  ...props
}: AuroraBackgroundProps) {
  var colorVars = {
    '--aurora-1': auroraColors && auroraColors[0] ? auroraColors[0] : '#3b82f6',
    '--aurora-2': auroraColors && auroraColors[1] ? auroraColors[1] : '#6366f1',
    '--aurora-3': auroraColors && auroraColors[2] ? auroraColors[2] : '#93c5fd',
    '--aurora-4': auroraColors && auroraColors[3] ? auroraColors[3] : '#ddd6fe',
    '--aurora-5': auroraColors && auroraColors[4] ? auroraColors[4] : '#60a5fa',
  } as React.CSSProperties;

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        style={colorVars}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "pointer-events-none absolute -inset-[10px] opacity-50",
              "[--aurora:repeating-linear-gradient(100deg,var(--aurora-1)_10%,var(--aurora-2)_15%,var(--aurora-3)_20%,var(--aurora-4)_25%,var(--aurora-5)_30%)]",
              "[--dark-aurora:repeating-linear-gradient(100deg,var(--aurora-1)_10%,var(--aurora-2)_15%,var(--aurora-3)_20%,var(--aurora-4)_25%,var(--aurora-5)_30%)]",
              "[background-image:var(--aurora)]",
              "dark:[background-image:var(--dark-aurora)]",
              "[background-size:300%,_200%]",
              "[background-position:50%_50%,50%_50%]",
              "filter blur-[10px] invert dark:invert-0",
              "after:content-[''] after:absolute after:inset-0",
              "after:[background-image:var(--aurora)]",
              "dark:after:[background-image:var(--dark-aurora)]",
              "after:[background-size:200%,_100%]",
              "after:animate-aurora after:[background-attachment:fixed]",
              "after:mix-blend-difference",
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
}
