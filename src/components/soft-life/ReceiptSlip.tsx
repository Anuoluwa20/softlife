"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Sparkles, TrendingDown, TrendingUp, Receipt } from "lucide-react";
import type { Choice, Scenario } from "@/data/soft-life/scenarios";

interface ReceiptSlipProps {
  scenario: Scenario;
  choice: Choice;
  previousBalance: number;
  newBalance: number;
  vibeScore: number;
  onNext: () => void;
  isLastDay: boolean;
}

export function ReceiptSlip({
  scenario,
  choice,
  previousBalance,
  newBalance,
  vibeScore,
  onNext,
  isLastDay,
}: ReceiptSlipProps) {
  const isIncome = choice.cost < 0;
  const isFree = choice.cost === 0;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Jagged / Perforated Receipt Top Bar */}
        <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
              TRANSACTION RECEIPT #D{scenario.day}-SLS
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            PROCESSED
          </span>
        </div>

        {/* Receipt Content Body */}
        <div className="p-6 space-y-5">
          {/* Outcome Narrative */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>OUTCOME REGISTERED</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">
              {choice.label}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {choice.outcomeStory}
            </p>
          </div>

          {/* Thermal Breakdown Table */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
            <div className="flex justify-between text-slate-400 pb-1 border-b border-slate-800">
              <span>CATEGORY</span>
              <span className="uppercase text-slate-300">{choice.category}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>PREVIOUS BALANCE</span>
              <span>₦{previousBalance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold pt-1 border-t border-dashed border-slate-800">
              <span className="text-slate-300">
                {isIncome ? "CASH INFLOW" : "AMOUNT DEDUCTED"}
              </span>
              <span
                className={`flex items-center gap-1 ${
                  isIncome ? "text-emerald-400" : isFree ? "text-slate-400" : "text-rose-400"
                }`}
              >
                {isIncome ? (
                  <>
                    <TrendingUp className="w-3.5 h-3.5" />
                    +₦{Math.abs(choice.cost).toLocaleString()}
                  </>
                ) : isFree ? (
                  "₦0.00"
                ) : (
                  <>
                    <TrendingDown className="w-3.5 h-3.5" />
                    -₦{choice.cost.toLocaleString()}
                  </>
                )}
              </span>
            </div>
            <div className="flex justify-between text-white font-black text-sm pt-2 border-t border-slate-700">
              <span>NEW BALANCE</span>
              <span className="text-emerald-400">₦{newBalance.toLocaleString()}</span>
            </div>
          </div>

          {/* Witty Nigerian Friend Commentary */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-300 mb-0.5">
                Financial Friend Reaction:
              </span>
              <p className="italic leading-normal">
                &ldquo;{choice.wittyTakeaway}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800">
          <button
            type="button"
            onClick={onNext}
            className="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer transition-all"
          >
            <span>{isLastDay ? "View Final Round Recap" : `Proceed to Day ${scenario.day + 1}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
