"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      children,
      shimmerColor = "#ffffff",
      shimmerSize = "0.08em",
      shimmerDuration = "3s",
      borderRadius = "6px",
      background = "rgba(255, 255, 255, 0.95)",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-2.5 font-semibold text-black transition-all duration-300 ease-out active:scale-95 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02]",
          className
        )}
        style={{
          borderRadius,
        }}
        {...props}
      >
        {/* Shimmer border beam animation */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ borderRadius }}
        >
          <div
            className="absolute inset-[-100%] aspect-square animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `conic-gradient(from 0deg, transparent 0 340deg, ${shimmerColor} 360deg)`,
            }}
          />
        </div>

        {/* Backdrop background */}
        <div
          className="absolute inset-[1px] rounded-[inherit] transition-colors"
          style={{ background }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
