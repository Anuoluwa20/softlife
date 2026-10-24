"use client";

import React, { useState } from "react";
import { ArrowRight, AlertCircle, Sparkles, TrendingUp, TrendingDown, Info, ShieldAlert } from "lucide-react";
import type { Scenario, Choice } from "@/data/soft-life/scenarios";

interface ScenarioCardProps {
  scenario: Scenario;
  currentBalance: number;
  onSelectChoice: (choice: Choice) => void;
  dayIndex: number;
  totalDays: number;
}

export function ScenarioCard({
  scenario,
  currentBalance,
  onSelectChoice,
  dayIndex,
  totalDays,
}: ScenarioCardProps) {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const handleConfirm = () => {
    if (!selectedChoiceId) return;
    const choice = scenario.choices.find((c) => c.id === selectedChoiceId);
    if (choice) {
      onSelectChoice(choice);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6 px-4 animate-in fade-in duration-300 font-sans">
      <div className="bg-[#121927] border border-[#26334D] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow from brand colors */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badge & Title */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl p-2 bg-[#1B2436] rounded-2xl border border-slate-700/80 shadow-inner">
              {scenario.imageIcon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase font-mono tracking-wider text-emerald-400 font-black">
                  DAY {scenario.day} OF {totalDays}
                </span>
                <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  DILEMMA
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mt-0.5">
                {scenario.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Narrative Context */}
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-4">
          {scenario.context}
        </p>

        {/* The Dilemma Callout Box */}
        <div className="p-4 rounded-2xl bg-[#1B2436]/90 border border-slate-700/80 mb-6 flex items-start gap-3 shadow-inner">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-200 font-medium italic leading-snug">
            &ldquo;{scenario.dilemma}&rdquo;
          </p>
        </div>

        {/* Decision Options */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Choose your move:
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Select one to preview trade-off
            </span>
          </div>

          {scenario.choices.map((choice) => {
            const isAffordable = choice.cost <= 0 || currentBalance >= choice.cost;
            const isSelected = selectedChoiceId === choice.id;

            return (
              <button
                key={choice.id}
                type="button"
                disabled={!isAffordable}
                onClick={() => setSelectedChoiceId(choice.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative group cursor-pointer ${
                  !isAffordable
                    ? "bg-slate-950/70 border-slate-800/60 opacity-60 cursor-not-allowed"
                    : isSelected
                    ? "bg-[#1B2436] border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500 scale-[1.01]"
                    : "bg-[#1B2436]/50 border-[#26334D] hover:bg-[#1B2436] hover:border-slate-600 active:scale-[0.99]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 pr-2 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? "border-emerald-400 bg-emerald-400"
                            : "border-slate-500 group-hover:border-slate-400"
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 bg-slate-950 rounded-full" />}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-white leading-snug">
                        {choice.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-normal pl-6">
                      {choice.description}
                    </p>
                  </div>

                  {/* Financial & Vibe Badges */}
                  <div className="flex flex-col items-end shrink-0 gap-1.5">
                    {/* Cost Badge */}
                    {choice.cost > 0 ? (
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1 shadow-sm">
                        <TrendingDown className="w-3.5 h-3.5" />
                        -₦{choice.cost.toLocaleString()}
                      </span>
                    ) : choice.cost < 0 ? (
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1 shadow-sm shadow-emerald-500/20">
                        <TrendingUp className="w-3.5 h-3.5" />
                        +₦{Math.abs(choice.cost).toLocaleString()}
                      </span>
                    ) : (
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                        ₦0 Free
                      </span>
                    )}

                    {/* Vibe Shift Badge */}
                    <span className="text-[11px] font-mono flex items-center gap-1 text-slate-300 bg-slate-900/60 px-2 py-0.5 rounded-md border border-slate-800">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span className={choice.vibeChange > 0 ? "text-amber-300 font-bold" : "text-slate-400"}>
                        {choice.vibeChange > 0 ? `+${choice.vibeChange}` : choice.vibeChange} Vibe
                      </span>
                    </span>
                  </div>
                </div>

                {/* Insufficient Funds Warning Pill */}
                {!isAffordable && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-xs text-rose-400 flex items-center gap-1.5 font-medium pl-6">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>
                      Card Declined: Account short by ₦{(choice.cost - currentBalance).toLocaleString()}. Pick an alternative!
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button & Tip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 italic max-w-sm">
            💡 {scenario.consequenceTip}
          </div>
          <button
            type="button"
            disabled={!selectedChoiceId}
            onClick={handleConfirm}
            className={`w-full sm:w-auto px-7 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedChoiceId
                ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95"
                : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
            }`}
          >
            <span>Confirm Decision</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
