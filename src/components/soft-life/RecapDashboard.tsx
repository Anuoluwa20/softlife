"use client";

import React, { useState } from "react";
import { 
  Trophy, 
  RotateCcw, 
  Share2, 
  TrendingUp, 
  PieChart, 
  CheckCircle, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  Award
} from "lucide-react";
import type { CharacterProfile, IncomeProfile, FinancialGoal, ArchetypeResult } from "@/data/soft-life/scenarios";
import { determineArchetype } from "@/data/soft-life/scenarios";

interface RecapDashboardProps {
  startingBalance: number;
  endingBalance: number;
  vibeScore: number;
  categorySpending: Record<string, number>;
  character: CharacterProfile;
  profile: IncomeProfile;
  goal: FinancialGoal;
  onReplay: () => void;
  onOpenShareModal: () => void;
}

export function RecapDashboard({
  startingBalance,
  endingBalance,
  vibeScore,
  categorySpending,
  character,
  profile,
  goal,
  onReplay,
  onOpenShareModal,
}: RecapDashboardProps) {
  const archetype: ArchetypeResult = determineArchetype(
    endingBalance,
    startingBalance,
    vibeScore,
    categorySpending
  );

  const totalSpent = Object.values(categorySpending).reduce((sum, val) => sum + val, 0);

  // Essential categories: essentials, transport, emergency
  const essentialSpend =
    (categorySpending["essentials"] || 0) +
    (categorySpending["transport"] || 0) +
    (categorySpending["emergency"] || 0);

  // Discretionary: social, data excess
  const discretionarySpend =
    (categorySpending["social"] || 0) + (categorySpending["data"] || 0);

  const savingsTotal = categorySpending["savings"] || 0;

  const essentialPercent = totalSpent > 0 ? Math.round((essentialSpend / totalSpent) * 100) : 0;
  const discretionaryPercent = totalSpent > 0 ? Math.round((discretionarySpend / totalSpent) * 100) : 0;

  const isGoalAchieved = endingBalance >= (startingBalance * goal.targetSavingsPercentage) / 100;

  return (
    <div className="w-full max-w-3xl mx-auto my-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Tag & Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <Trophy className="w-3.5 h-3.5" />
            <span>14-DAY SIMULATION COMPLETE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Round Performance Recap
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            You completed 14 days navigating the Nigerian financial landscape as{" "}
            <span className="text-slate-200 font-semibold">{character.name}</span>.
          </p>
        </div>

        {/* Archetype Diagnosis Badge Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 shadow-xl relative">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="text-5xl sm:text-6xl p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-inner">
              {archetype.badge}
            </div>
            <div className="space-y-1.5 flex-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                YOUR FINANCIAL ARCHETYPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {archetype.title}
              </h2>
              <p className="text-sm text-slate-300 italic">
                {archetype.quote}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                {archetype.description}
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">
              Starting Cash
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-slate-200">
              ₦{startingBalance.toLocaleString()}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">
              Ending Balance
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-emerald-400">
              ₦{endingBalance.toLocaleString()}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">
              Soft Life Vibe
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-amber-400">
              {vibeScore}%
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">
              Goal Outcome
            </span>
            <span className={`text-xs sm:text-sm font-bold flex items-center justify-center gap-1 mt-0.5 ${
              isGoalAchieved ? "text-emerald-400" : "text-amber-400"
            }`}>
              {isGoalAchieved ? <CheckCircle className="w-3.5 h-3.5" /> : null}
              {isGoalAchieved ? "Achieved" : "Narrow Miss"}
            </span>
          </div>
        </div>

        {/* Spending Category Breakdown */}
        <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <PieChart className="w-4 h-4 text-emerald-400" />
              <span>Where Did the Money Go?</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Total Outflow: ₦{totalSpent.toLocaleString()}
            </span>
          </div>

          {/* Essential vs Discretionary Split Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>Essentials ({essentialPercent}%)</span>
              <span>Lifestyle & Social ({discretionaryPercent}%)</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all"
                style={{ width: `${essentialPercent}%` }}
                title={`Essentials: ₦${essentialSpend.toLocaleString()}`}
              />
              <div
                className="bg-amber-500 h-full transition-all"
                style={{ width: `${discretionaryPercent}%` }}
                title={`Discretionary: ₦${discretionarySpend.toLocaleString()}`}
              />
            </div>
          </div>

          {/* Granular Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
            {Object.entries(categorySpending).map(([cat, amount]) => (
              <div key={cat} className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="capitalize text-slate-400">{cat}:</span>
                <span className="text-white font-semibold">₦{amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Learning Takeaway */}
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-200 space-y-1.5">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Practical Life Takeaway</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            {archetype.recommendation}
          </p>
        </div>

        {/* Action Buttons: Replay vs Share */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={onReplay}
            className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-black text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
          >
            <RotateCcw className="w-4 h-4 text-emerald-400" />
            <span>Replay with Different Choices</span>
          </button>

          <button
            type="button"
            onClick={onOpenShareModal}
            className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-emerald-500/20"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Privacy-Safe Recap Card</span>
          </button>
        </div>
      </div>
    </div>
  );
}
