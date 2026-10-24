"use client";

import React, { useState } from "react";
import { ArrowRight, AlertCircle, Sparkles, TrendingUp, TrendingDown, Info } from "lucide-react";
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
    <div className="w-full max-w-2xl mx-auto my-6 px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{scenario.imageIcon}</span>
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-bold">
                DAY {scenario.day} OF {totalDays}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {scenario.title}
              </h2>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-xs font-mono px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-full">
              Decision Point
            </span>
          </div>
        </div>

        {/* Narrative Context */}
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-4">
          {scenario.context}
        </p>

        {/* The Dilemma Callout */}
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 mb-6 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-200 font-medium italic">
            &ldquo;{scenario.dilemma}&rdquo;
          </p>
        </div>

        {/* Decision Options */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Choose your move:
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
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 relative group ${
                  !isAffordable
                    ? "bg-slate-950/60 border-slate-800/50 opacity-60 cursor-not-allowed"
                    : isSelected
                    ? "bg-slate-800/90 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-1 ring-emerald-500"
                    : "bg-slate-800/40 border-slate-700 hover:bg-slate-800 hover:border-slate-600"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-emerald-400 bg-emerald-400" : "border-slate-500"
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-white">
                        {choice.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal pl-5">
                      {choice.description}
                    </p>
                  </div>

                  {/* Financial & Vibe Badges */}
                  <div className="flex flex-col items-end shrink-0 gap-1.5">
                    {/* Cost Badge */}
                    {choice.cost > 0 ? (
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" />
                        -₦{choice.cost.toLocaleString()}
                      </span>
                    ) : choice.cost < 0 ? (
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +₦{Math.abs(choice.cost).toLocaleString()}
                      </span>
                    ) : (
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                        ₦0 Free
                      </span>
                    )}

                    {/* Vibe shift preview */}
                    <span className="text-[11px] font-mono flex items-center gap-1 text-slate-400">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {choice.vibeChange > 0 ? `+${choice.vibeChange}` : choice.vibeChange} Vibe
                    </span>
                  </div>
                </div>

                {/* Insufficient Funds Warning Pill */}
                {!isAffordable && (
                  <div className="mt-2 text-xs text-rose-400 flex items-center gap-1.5 font-medium pl-5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Insufficient balance (Need ₦{(choice.cost - currentBalance).toLocaleString()} more)</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 italic">
            {scenario.consequenceTip}
          </div>
          <button
            type="button"
            disabled={!selectedChoiceId}
            onClick={handleConfirm}
            className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
              selectedChoiceId
                ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-500/25 cursor-pointer"
                : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
            }`}
          >
            <span>Confirm Move</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
