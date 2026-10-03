"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
  speed?: number;
}

export function ShinyText({
  children,
  className = "",
  speed = 4,
  ...props
}: ShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-[length:250%_100%] bg-clip-text text-transparent transition-colors hover:from-white hover:via-amber-100 hover:to-white",
        className
      )}
      style={{
        animation: `shiny-text-shimmer ${speed}s linear infinite`,
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export default ShinyText;
