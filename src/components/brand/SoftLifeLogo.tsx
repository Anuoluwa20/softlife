"use client";

import React from "react";

interface SoftLifeLogoProps {
  variant?: "full" | "mark" | "compact";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SoftLifeLogo({ variant = "full", size = "md", className = "" }: SoftLifeLogoProps) {
  const heightClasses = {
    sm: "h-7",
    md: "h-10",
    lg: "h-14",
  };

  if (variant === "mark") {
    return (
      <div className={`flex items-center justify-center shrink-0 ${className}`}>
        <svg
          viewBox="0 0 56 56"
          className={`${heightClasses[size]} w-auto aspect-square`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="markCoinGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#34D399" />
              <stop offset="100%" stop-color="#10B981" />
            </linearGradient>
            <linearGradient id="markAuraGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.3" />
              <stop offset="100%" stop-color="#10B981" stop-opacity="0.08" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="56"
            height="56"
            rx="18"
            fill="url(#markAuraGrad)"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle cx="28" cy="28" r="18" fill="url(#markCoinGrad)" />
          <path
            d="M22 19 L22 37 M34 19 L34 37 M22 22 L34 34 M19 25 L37 25 M19 31 L37 31"
            stroke="#090D16"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="48" cy="12" r="3" fill="#F59E0B" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Coin Mark */}
      <svg
        viewBox="0 0 56 56"
        className={`${heightClasses[size]} w-auto aspect-square shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoCoinGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#34D399" />
            <stop offset="100%" stop-color="#10B981" />
          </linearGradient>
          <linearGradient id="logoAuraGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#10B981" stop-opacity="0.08" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="56"
          height="56"
          rx="18"
          fill="url(#logoAuraGrad)"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <circle cx="28" cy="28" r="18" fill="url(#logoCoinGrad)" />
        <path
          d="M22 19 L22 37 M34 19 L34 37 M22 22 L34 34 M19 25 L37 25 M19 31 L37 31"
          stroke="#090D16"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="48" cy="12" r="3" fill="#F59E0B" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className="font-extrabold tracking-tight text-white leading-none font-sans text-base sm:text-lg">
          SOFT LIFE
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-emerald-400 leading-tight">
          SIMULATOR • NAIJA
        </span>
      </div>
    </div>
  );
}
