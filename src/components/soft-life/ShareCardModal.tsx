"use client";

import React, { useState } from "react";
import { X, Copy, Check, Shield, Sparkles, Share2 } from "lucide-react";
import type { CharacterProfile, IncomeProfile, ArchetypeResult } from "@/data/soft-life/scenarios";

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

  const shareText = `🇳🇬 I just completed the Soft Life Simulator 14-day challenge as ${character.name}!
🏆 My Financial Archetype: ${archetype.badge} ${archetype.title}
✨ Soft Life Vibe Score: ${vibeScore}%
📈 Runway Preserved: ${percentLeft}% of starting budget
${includeBalance ? `💰 Final Balance: ₦${endingBalance.toLocaleString()}\n` : ""}
"Enjoy your life. Just don't finish your money." 
Try it here: https://softlife.ng`;

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
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 border border-slate-700 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-white">Share Your Soft Life Card</h3>
            <p className="text-xs text-slate-400">
              Show off your financial style without exposing sensitive figures.
            </p>
          </div>

          {/* Card Preview */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/90 shadow-xl space-y-4 text-center relative overflow-hidden">
            <div className="text-5xl">{archetype.badge}</div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                SOFT LIFE SIMULATOR
              </span>
              <h4 className="text-2xl font-black text-white">{archetype.title}</h4>
              <p className="text-xs text-slate-300 italic mt-1">&ldquo;{archetype.quote}&rdquo;</p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-around text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">VIBE SCORE</span>
                <span className="text-amber-400 font-bold">{vibeScore}%</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">RUNWAY LEFT</span>
                <span className="text-emerald-400 font-bold">{percentLeft}%</span>
              </div>
              {includeBalance && (
                <div>
                  <span className="text-slate-400 block text-[10px]">FINAL CASH</span>
                  <span className="text-white font-bold">₦{endingBalance.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="text-[10px] text-slate-400 font-mono tracking-tight pt-2 border-t border-slate-800/60">
              🇳🇬 Naija Money Simulator • Enjoy your life. Don&apos;t finish your money.
            </div>
          </div>

          {/* Privacy Toggle */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <div className="text-xs">
                <span className="text-slate-200 font-bold block">Privacy by default</span>
                <span className="text-slate-400">Include exact balance figure?</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeBalance}
                onChange={(e) => setIncludeBalance(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500" />
            </label>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer transition-all"
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
