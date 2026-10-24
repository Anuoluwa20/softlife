"use client";

import React from "react";
import { 
  Trophy, 
  RotateCcw, 
  Share2, 
  PieChart, 
  CheckCircle, 
  ShieldCheck,
  Compass
} from "lucide-react";
import type { CharacterProfile, IncomeProfile, FinancialGoal, ArchetypeResult } from "@/data/soft-life/scenarios";
import { determineArchetype } from "@/data/soft-life/scenarios";
import { SoftLifeLogo } from "@/components/brand/SoftLifeLogo";

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
  onOpenInspirations?: () => void;
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
  onOpenInspirations,
}: RecapDashboardProps) {
  const archetype: ArchetypeResult = determineArchetype(
    endingBalance,
    startingBalance,
    vibeScore,
    categorySpending
  );

  const totalSpent = Object.values(categorySpending).reduce((sum, val) => sum + val, 0);

  const essentialSpend =
    (categorySpending["essentials"] || 0) +
    (categorySpending["transport"] || 0) +
    (categorySpending["emergency"] || 0);

  const discretionarySpend =
    (categorySpending["social"] || 0) + (categorySpending["data"] || 0);

  const essentialPercent = totalSpent > 0 ? Math.round((essentialSpend / totalSpent) * 100) : 0;
  const discretionaryPercent = totalSpent > 0 ? Math.round((discretionarySpend / totalSpent) * 100) : 0;

  const isGoalAchieved = endingBalance >= (startingBalance * goal.targetSavingsPercentage) / 100;

  return (
    <div className="w-full max-w-3xl mx-auto my-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans">
      <div className="bg-[#121927] border border-[#26334D] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Brand Header & Tag */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <SoftLifeLogo size="sm" />
          {onOpenInspirations && (
            <button
              type="button"
              onClick={onOpenInspirations}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>520+ Inspirations</span>
            </button>
          )}
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <Trophy className="w-3.5 h-3.5" />
            <span>14-DAY SIMULATION COMPLETE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Round Performance Recap
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Completed 14 days navigating Nigerian financial trade-offs as{" "}
            <span className="text-emerald-400 font-bold">{character.name}</span>.
          </p>
        </div>

        {/* Archetype Diagnosis Badge Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1B2436] to-[#090D16] border border-[#26334D] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-6xl p-5 bg-[#090D16] rounded-3xl border border-slate-700 shadow-inner shrink-0">
              {archetype.badge}
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-black">
                DIAGNOSED FINANCIAL ARCHETYPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {archetype.title}
              </h2>
              <p className="text-xs sm:text-sm text-amber-200/90 italic font-mono">
                &ldquo;{archetype.quote}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {archetype.description}
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono">
          <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block uppercase">
              Starting Cash
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-200 mt-1 block">
              ₦{startingBalance.toLocaleString()}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block uppercase">
              Ending Runway
            </span>
            <span className="text-base sm:text-lg font-black text-emerald-400 mt-1 block">
              ₦{endingBalance.toLocaleString()}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block uppercase">
              Soft Life Vibe
            </span>
            <span className="text-base sm:text-lg font-black text-amber-400 mt-1 block">
              {vibeScore}%
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block uppercase">
              Goal Outcome
            </span>
            <span className={`text-xs sm:text-sm font-bold flex items-center justify-center gap-1 mt-1 ${
              isGoalAchieved ? "text-emerald-400" : "text-amber-400"
            }`}>
              {isGoalAchieved ? <CheckCircle className="w-3.5 h-3.5" /> : null}
              {isGoalAchieved ? "Achieved" : "Narrow Miss"}
            </span>
          </div>
        </div>

        {/* Spending Category Breakdown */}
        <div className="p-6 rounded-3xl bg-[#090D16] border border-slate-800 space-y-4">
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
              <span className="text-emerald-400 font-bold">Essentials ({essentialPercent}%)</span>
              <span className="text-amber-400 font-bold">Lifestyle & Social ({discretionaryPercent}%)</span>
            </div>
            <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden flex border border-slate-800">
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
              <div key={cat} className="flex justify-between p-3 rounded-xl bg-[#121927] border border-[#26334D]">
                <span className="capitalize text-slate-400">{cat}:</span>
                <span className="text-white font-bold">₦{amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Learning Takeaway */}
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Practical Street-Smart Lesson</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
            {archetype.recommendation}
          </p>
        </div>

        {/* Action Buttons: Replay vs Share */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={onReplay}
            className="w-full sm:flex-1 py-4 px-4 rounded-2xl font-black text-sm bg-[#1B2436] hover:bg-slate-700 text-white border border-slate-600 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-emerald-400" />
            <span>Replay Simulation</span>
          </button>

          <button
            type="button"
            onClick={onOpenShareModal}
            className="w-full sm:flex-1 py-4 px-4 rounded-2xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xl shadow-emerald-500/25 active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Privacy-Safe Recap Card</span>
          </button>
        </div>
      </div>
    </div>
  );
}
