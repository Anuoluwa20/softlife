"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Sparkles, TrendingDown, TrendingUp, Receipt, ShieldCheck } from "lucide-react";
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
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 font-sans">
      <div className="w-full max-w-md bg-[#121927] border border-[#26334D] rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Top Perforated Receipt Header */}
        <div className="bg-[#1B2436] px-6 py-4 border-b border-[#26334D] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-white font-bold block">
                DIGITAL RECEIPT
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                #SLS-DAY{scenario.day}-{Math.floor(1000 + Math.random() * 9000)}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase tracking-wider">
            {isIncome ? "CREDIT INFLOW" : "DEBIT PROCESSED"}
          </span>
        </div>

        {/* Perforated Top Jagged Edge Visual */}
        <div className="w-full h-2 bg-[#1B2436] border-b border-dashed border-slate-700/80" />

        {/* Receipt Content Body */}
        <div className="p-6 space-y-5">
          {/* Outcome Narrative */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>TRANSACTION CONFIRMED</span>
            </div>
            <h3 className="text-xl font-black text-white leading-tight">
              {choice.label}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {choice.outcomeStory}
            </p>
          </div>

          {/* Thermal Breakdown Slip */}
          <div className="bg-[#090D16] p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-2 shadow-inner">
            <div className="flex justify-between text-slate-400 pb-1.5 border-b border-slate-800">
              <span>CATEGORY</span>
              <span className="uppercase text-emerald-400 font-bold">{choice.category}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>PREVIOUS BALANCE</span>
              <span className="text-slate-300">₦{previousBalance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold pt-1.5 border-t border-dashed border-slate-800">
              <span className="text-slate-300">
                {isIncome ? "NET INFLOW" : "AMOUNT CHARGED"}
              </span>
              <span
                className={`flex items-center gap-1 ${
                  isIncome ? "text-emerald-400" : isFree ? "text-slate-400" : "text-rose-400"
                }`}
              >
                {isIncome ? (
                  <>
                    <TrendingUp className="w-4 h-4" />
                    +₦{Math.abs(choice.cost).toLocaleString()}
                  </>
                ) : isFree ? (
                  "₦0.00 (Zero Cost)"
                ) : (
                  <>
                    <TrendingDown className="w-4 h-4" />
                    -₦{choice.cost.toLocaleString()}
                  </>
                )}
              </span>
            </div>
            <div className="flex justify-between text-white font-black text-sm pt-2.5 border-t border-slate-700">
              <span>NEW AVAILABLE BALANCE</span>
              <span className="text-emerald-400 font-mono text-base">₦{newBalance.toLocaleString()}</span>
            </div>
          </div>

          {/* Witty Nigerian Friend Commentary */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-100 flex items-start gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-400 mb-0.5 tracking-wide uppercase text-[10px] font-mono">
                Savvy Friend Commentary:
              </span>
              <p className="italic leading-relaxed text-slate-200">
                &ldquo;{choice.wittyTakeaway}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-5 bg-[#090D16]/90 border-t border-[#26334D]">
          <button
            type="button"
            onClick={onNext}
            className="w-full py-4 px-4 rounded-2xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{isLastDay ? "View Round Performance Recap" : `Proceed to Day ${scenario.day + 1}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
