"use client";

import React, { useState } from "react";
import { X, Copy, Check, Shield, Sparkles } from "lucide-react";
import type { CharacterProfile, IncomeProfile, ArchetypeResult } from "@/data/soft-life/scenarios";
import { SoftLifeLogo } from "@/components/brand/SoftLifeLogo";

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  archetype: ArchetypeResult;
  character: CharacterProfile;
  profile: IncomeProfile;
  vibeScore: number;
  endingBalance: number;
  startingBalance: number;
}

export function ShareCardModal({
  isOpen,
  onClose,
  archetype,
  character,
  profile,
  vibeScore,
  endingBalance,
  startingBalance,
}: ShareCardModalProps) {
  const [includeBalance, setIncludeBalance] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const percentLeft = Math.round((endingBalance / startingBalance) * 100);

  const shareText = `🇳🇬 I just conquered the Soft Life Simulator 14-day challenge as ${character.name}!
🏆 My Financial Archetype: ${archetype.badge} ${archetype.title}
✨ Soft Life Vibe Score: ${vibeScore}%
📈 Runway Preserved: ${percentLeft}% of budget
${includeBalance ? `💰 Final Balance: ₦${endingBalance.toLocaleString()}\n` : ""}
"Enjoy your life. Just don't finish your money." 
Play it here: https://github.com/Anuoluwa20/softlife`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 font-sans">
      <div className="w-full max-w-md bg-[#121927] border border-[#26334D] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 border border-slate-700 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-black text-white">Share Your Soft Life Card</h3>
            <p className="text-xs text-slate-400">
              Show off your money style without exposing sensitive balance figures.
            </p>
          </div>

          {/* Card Preview */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1B2436] to-[#090D16] border border-[#26334D] shadow-2xl space-y-4 text-center relative overflow-hidden">
            {/* Ambient Brand Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-center">
              <SoftLifeLogo variant="compact" size="sm" />
            </div>

            <div className="text-5xl py-1">{archetype.badge}</div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                FINANCIAL ARCHETYPE
              </span>
              <h4 className="text-2xl font-black text-white mt-0.5">{archetype.title}</h4>
              <p className="text-xs text-slate-300 italic mt-1 font-mono">&ldquo;{archetype.quote}&rdquo;</p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-around text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">VIBE SCORE</span>
                <span className="text-amber-400 font-black text-sm">{vibeScore}%</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">RUNWAY LEFT</span>
                <span className="text-emerald-400 font-black text-sm">{percentLeft}%</span>
              </div>
              {includeBalance && (
                <div>
                  <span className="text-slate-400 block text-[10px]">FINAL CASH</span>
                  <span className="text-white font-black text-sm">₦{endingBalance.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="text-[10px] text-slate-500 font-mono tracking-tight pt-2 border-t border-slate-800/80">
              🇳🇬 Naija Money Simulator • Enjoy your life. Don&apos;t finish your money.
            </div>
          </div>

          {/* Privacy Toggle */}
          <div className="p-4 rounded-2xl bg-[#090D16] border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-200 font-bold block">Privacy by Default</span>
                <span className="text-slate-400">Include exact balance amount?</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeBalance}
                onChange={(e) => setIncludeBalance(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-10 h-5.5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-emerald-500" />
            </label>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-4 px-4 rounded-2xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Shareable Card Text</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
