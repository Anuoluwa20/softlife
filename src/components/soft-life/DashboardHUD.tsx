"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Calendar, Wallet, Compass, Palette } from "lucide-react";
import type { CharacterProfile, IncomeProfile } from "@/data/soft-life/scenarios";
import { SoftLifeLogo } from "@/components/brand/SoftLifeLogo";

interface DashboardHUDProps {
  currentBalance: number;
  startingBalance: number;
  currentDay: number;
  totalDays: number;
  vibeScore: number; // 0 - 100
  character: CharacterProfile;
  profile: IncomeProfile;
  recentDelta: number | null;
  onOpenInspirations?: () => void;
}

export function DashboardHUD({
  currentBalance,
  startingBalance,
  currentDay,
  totalDays,
  vibeScore,
  character,
  profile,
  recentDelta,
  onOpenInspirations,
}: DashboardHUDProps) {
  const [displayBalance, setDisplayBalance] = useState(currentBalance);

  // Smooth number roll animation effect
  useEffect(() => {
    let start = displayBalance;
    const end = currentBalance;
    if (start === end) return;

    const duration = 500;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      start += increment;
      if (stepCount >= steps) {
        setDisplayBalance(end);
        clearInterval(timer);
      } else {
        setDisplayBalance(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [currentBalance]);

  const percentFundsLeft = Math.max(0, Math.min(100, Math.round((currentBalance / startingBalance) * 100)));

  return (
    <header className="w-full bg-[#090D16]/95 backdrop-blur-xl border-b border-[#26334D] text-slate-100 px-4 py-3 sticky top-0 z-30 shadow-2xl transition-all font-sans">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Brand & User Identity */}
        <div className="flex items-center gap-4">
          {/* Official Brand Logo */}
          <SoftLifeLogo variant="compact" size="sm" />

          <div className="h-6 w-[1px] bg-slate-800 hidden sm:block" />

          {/* User Persona */}
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <span className="text-2xl p-1 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center shadow-inner">
                {character.avatarUrl}
              </span>
              <span className="absolute -bottom-1 -right-1 text-[9px] px-1 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/40">
                D{currentDay}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs tracking-tight text-white">{character.name}</span>
                <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {profile.difficulty}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <span>
                  Day {currentDay}/{totalDays}
                </span>
                <span className="text-slate-600">•</span>
                <span className="truncate max-w-[120px]">{profile.title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics: Balance & Soft Life Vibe Score + Inspirations Drawer Button */}
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
          {/* Inspirations & Brand Token Inspector Button */}
          {onOpenInspirations && (
            <button
              type="button"
              onClick={onOpenInspirations}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold transition-all shadow-sm"
              title="Inspect 520 UI inspirations and brand color tokens"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden md:inline">520+ Inspirations</span>
            </button>
          )}

          {/* Vibe Meter */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400">
              <Sparkles className="w-3.5 h-3.5 fill-amber-400/20 text-amber-400 animate-pulse" />
              <span className="font-bold">Soft Life Vibe</span>
              <span className="font-mono font-bold text-white text-xs">{vibeScore}%</span>
            </div>
            <div className="w-24 sm:w-28 h-2 bg-slate-900 rounded-full overflow-hidden mt-1 border border-slate-800">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  vibeScore >= 60 ? "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" : vibeScore >= 35 ? "bg-emerald-400" : "bg-rose-500"
                }`}
                style={{ width: `${Math.max(5, Math.min(100, vibeScore))}%` }}
              />
            </div>
          </div>

          {/* Fictional Naira Balance */}
          <div className="flex flex-col items-end relative">
            <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1 tracking-wider uppercase font-semibold">
              <Wallet className="w-3 h-3 text-emerald-400" />
              <span>SIMULATED NAIRA</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-emerald-400 font-mono text-sm font-black">₦</span>
              <span
                className={`font-mono text-xl sm:text-2xl font-black tracking-tight ${
                  currentBalance <= 3000 ? "text-rose-400 animate-pulse" : "text-white"
                }`}
              >
                {displayBalance.toLocaleString()}
              </span>
            </div>

            {/* Floating Delta Badge */}
            {recentDelta !== null && recentDelta !== 0 && (
              <span
                key={recentDelta}
                className={`absolute -bottom-4 right-0 text-[11px] font-mono font-bold px-2 py-0.5 rounded shadow-lg animate-bounce ${
                  recentDelta > 0
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                }`}
              >
                {recentDelta > 0 ? `+₦${recentDelta.toLocaleString()}` : `-₦${Math.abs(recentDelta).toLocaleString()}`}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Runway Bar & Quick Status */}
      <div className="max-w-5xl mx-auto mt-2 pt-1 border-t border-[#26334D]/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span>Runway:</span>
          <div className="w-24 sm:w-36 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className={`h-full transition-all duration-300 ${
                percentFundsLeft > 40 ? "bg-emerald-500" : percentFundsLeft > 15 ? "bg-amber-500" : "bg-rose-500"
              }`}
              style={{ width: `${percentFundsLeft}%` }}
            />
          </div>
          <span className="font-semibold text-slate-300">{percentFundsLeft}% buffer</span>
        </div>
        <div className="text-[10px] text-slate-500 hidden sm:inline">
          Fictional Money Sandbox • Authentic Nigerian Life Dilemmas
        </div>
      </div>
    </header>
  );
}
