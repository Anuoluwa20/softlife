"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle, 
  ChevronRight, 
  RotateCcw, 
  HelpCircle,
  Coins,
  Smile,
  Zap,
  Info
} from "lucide-react";
import {
  CHARACTERS,
  INCOME_PROFILES,
  FINANCIAL_GOALS,
  AUTHORED_SCENARIOS,
  determineArchetype,
  type CharacterProfile,
  type IncomeProfile,
  type FinancialGoal,
  type Scenario,
  type Choice,
} from "@/data/soft-life/scenarios";
import { DashboardHUD } from "./DashboardHUD";
import { ScenarioCard } from "./ScenarioCard";
import { ReceiptSlip } from "./ReceiptSlip";
import { RecapDashboard } from "./RecapDashboard";
import { ShareCardModal } from "./ShareCardModal";

type GameStage = "welcome" | "character-setup" | "simulation-setup" | "playing" | "receipt" | "recap";

interface RoundResult {
  endingBalance: number;
  startingBalance: number;
  vibeScore: number;
  archetypeTitle: string;
}

export function SoftLifeSimulator() {
  const [stage, setStage] = useState<GameStage>("welcome");

  // Selection configurations
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterProfile>(CHARACTERS[0]);
  const [selectedProfile, setSelectedProfile] = useState<IncomeProfile>(INCOME_PROFILES[0]);
  const [selectedGoal, setSelectedGoal] = useState<FinancialGoal>(FINANCIAL_GOALS[0]);

  // Simulation runtime state
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentBalance, setCurrentBalance] = useState<number>(INCOME_PROFILES[0].startingBalance);
  const [vibeScore, setVibeScore] = useState<number>(75);
  const [recentDelta, setRecentDelta] = useState<number | null>(null);
  const [previousBalance, setPreviousBalance] = useState<number>(INCOME_PROFILES[0].startingBalance);
  const [lastSelectedChoice, setLastSelectedChoice] = useState<Choice | null>(null);

  // Category tracking
  const [categorySpending, setCategorySpending] = useState<Record<string, number>>({
    essentials: 0,
    transport: 0,
    data: 0,
    social: 0,
    emergency: 0,
    savings: 0,
  });

  // Replay & History Comparison
  const [previousRound, setPreviousRound] = useState<RoundResult | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Starting a fresh run
  const handleStartSetup = () => {
    setStage("character-setup");
  };

  const handleConfirmCharacter = (char: CharacterProfile) => {
    setSelectedCharacter(char);
    setStage("simulation-setup");
  };

  const handleLaunchSimulation = () => {
    setCurrentBalance(selectedProfile.startingBalance);
    setPreviousBalance(selectedProfile.startingBalance);
    setCurrentScenarioIndex(0);
    setVibeScore(75);
    setRecentDelta(null);
    setLastSelectedChoice(null);
    setCategorySpending({
      essentials: 0,
      transport: 0,
      data: 0,
      social: 0,
      emergency: 0,
      savings: 0,
    });
    setStage("playing");
  };

  // Handling player decision
  const handleSelectChoice = (choice: Choice) => {
    const prev = currentBalance;
    const isIncome = choice.cost < 0;
    const amount = choice.cost;
    const updatedBalance = prev - amount;

    setPreviousBalance(prev);
    setCurrentBalance(updatedBalance);
    setRecentDelta(isIncome ? Math.abs(amount) : -amount);
    setLastSelectedChoice(choice);

    // Update Vibe
    setVibeScore((prevVibe) => {
      const nextVibe = prevVibe + choice.vibeChange;
      return Math.max(10, Math.min(100, nextVibe));
    });

    // Update Category Tracking
    if (choice.cost > 0 && choice.category in categorySpending) {
      setCategorySpending((prevCat) => ({
        ...prevCat,
        [choice.category]: (prevCat[choice.category] || 0) + choice.cost,
      }));
    }

    setStage("receipt");
  };

  const handleNextDayFromReceipt = () => {
    if (currentScenarioIndex < AUTHORED_SCENARIOS.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
      setStage("playing");
    } else {
      // Completed round!
      const arch = determineArchetype(
        currentBalance,
        selectedProfile.startingBalance,
        vibeScore,
        categorySpending
      );
      setPreviousRound({
        endingBalance: currentBalance,
        startingBalance: selectedProfile.startingBalance,
        vibeScore,
        archetypeTitle: arch.title,
      });
      setStage("recap");
    }
  };

  const handleReplay = () => {
    handleLaunchSimulation();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* 1. HUD (Visible during gameplay and receipt) */}
      {(stage === "playing" || stage === "receipt") && (
        <DashboardHUD
          currentBalance={currentBalance}
          startingBalance={selectedProfile.startingBalance}
          currentDay={AUTHORED_SCENARIOS[currentScenarioIndex].day}
          totalDays={selectedProfile.durationDays}
          vibeScore={vibeScore}
          character={selectedCharacter}
          profile={selectedProfile}
          recentDelta={recentDelta}
        />
      )}

      {/* Main Content Areas */}
      <main className="flex-1 flex flex-col justify-center py-6">
        {/* ==================================================== */}
        {/* SCREEN 1: WELCOME SCREEN                             */}
        {/* ==================================================== */}
        {stage === "welcome" && (
          <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-8 animate-in fade-in duration-300">
            {/* Currency Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <Coins className="w-4 h-4" />
              <span>NIGERIA&apos;S FIRST CULTURAL MONEY SIMULATOR</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                SOFT LIFE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
                  SIMULATOR
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-300/90 italic font-mono">
                &ldquo;Enjoy your life. Just don&apos;t finish your money.&rdquo;
              </p>
            </div>

            {/* Product Promise */}
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Navigate 14 days of realistic Nigerian financial dilemmas—from morning danfo price surges and MTN data renewals to Friday suya hangouts and &ldquo;urgent 2k&rdquo; family requests.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-2xl mb-1 block">🛡️</span>
                <h4 className="font-bold text-white text-sm">Zero Real Risk</h4>
                <p className="text-xs text-slate-400 mt-1">All money is fictional. Make mistakes and learn freely.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-2xl mb-1 block">🇳🇬</span>
                <h4 className="font-bold text-white text-sm">100% Naija Reality</h4>
                <p className="text-xs text-slate-400 mt-1">Authentic street costs, food vendor choices, and cultural pressures.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-2xl mb-1 block">⚖️</span>
                <h4 className="font-bold text-white text-sm">Balance Vibe & Cash</h4>
                <p className="text-xs text-slate-400 mt-1">Soft life isn&apos;t just hoarding naira; it&apos;s managing life with peace of mind.</p>
              </div>
            </div>

            {/* Fictional Money Disclaimer */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto flex items-center gap-2.5 text-left">
              <Info className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>Notice:</strong> No real bank accounts or funds are connected. Soft Life Simulator is a safe educational sandbox.
              </span>
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="button"
                onClick={handleStartSetup}
                className="px-8 py-4 rounded-2xl font-black text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 inline-flex items-center gap-3 shadow-xl shadow-emerald-500/25 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <span>Enter Simulation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* SCREEN 2: CHARACTER SELECTION                        */}
        {/* ==================================================== */}
        {stage === "character-setup" && (
          <div className="max-w-2xl mx-auto px-4 py-8 space-y-6 animate-in fade-in duration-300">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                STEP 1 OF 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Select Your Avatar
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Choose the student or young adult persona you want to simulate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHARACTERS.map((char) => {
                const isSelected = selectedCharacter.id === char.id;
                return (
                  <button
                    key={char.id}
                    type="button"
                    onClick={() => setSelectedCharacter(char)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative ${
                      isSelected
                        ? "bg-slate-800/90 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] ring-1 ring-emerald-500"
                        : "bg-slate-900 border-slate-800 hover:bg-slate-850 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl p-2 bg-slate-800 rounded-xl border border-slate-700">
                        {char.avatarUrl}
                      </span>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-base text-white">{char.name}</h3>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          )}
                        </div>
                        <p className="text-xs text-emerald-400 font-mono font-medium">
                          {char.role}
                        </p>
                        <p className="text-xs text-slate-400 italic">
                          &ldquo;{char.tagline}&rdquo;
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setStage("welcome")}
                className="text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => handleConfirmCharacter(selectedCharacter)}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>Continue to Income Setup</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* SCREEN 3: SIMULATION & GOAL SETUP                    */}
        {/* ==================================================== */}
        {stage === "simulation-setup" && (
          <div className="max-w-2xl mx-auto px-4 py-8 space-y-6 animate-in fade-in duration-300">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                STEP 2 OF 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Configure Your Challenge
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Set starting fictional allowance, difficulty, and your primary target.
              </p>
            </div>

            {/* Income Profile Options */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Choose Starting Financial Profile:
              </span>
              <div className="space-y-2.5">
                {INCOME_PROFILES.map((prof) => {
                  const isSelected = selectedProfile.id === prof.id;
                  return (
                    <button
                      key={prof.id}
                      type="button"
                      onClick={() => setSelectedProfile(prof)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-800/90 border-emerald-500 shadow-md ring-1 ring-emerald-500"
                          : "bg-slate-900 border-slate-800 hover:bg-slate-850"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">{prof.title}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {prof.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{prof.description}</p>
                      </div>
                      <span className="font-mono text-sm font-bold text-emerald-400 shrink-0 pl-3">
                        {prof.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Financial Goal Options */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Choose Your 14-Day Objective:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {FINANCIAL_GOALS.map((g) => {
                  const isSelected = selectedGoal.id === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGoal(g)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-800 border-emerald-500 shadow-sm ring-1 ring-emerald-500"
                          : "bg-slate-900 border-slate-800 hover:bg-slate-850"
                      }`}
                    >
                      <span className="font-bold text-xs text-white block mb-1">{g.title}</span>
                      <p className="text-[11px] text-slate-400 leading-snug">{g.targetDescription}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Previous Round Comparison Alert (if replaying) */}
            {previousRound && (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Previous Round Result:</span>
                <span className="text-emerald-400 font-bold">
                  {previousRound.archetypeTitle} (₦{previousRound.endingBalance.toLocaleString()} remaining)
                </span>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setStage("character-setup")}
                className="text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleLaunchSimulation}
                className="px-8 py-3.5 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/25"
              >
                <span>Start Day 1</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* SCREEN 4: SCENARIO GAMEPLAY                          */}
        {/* ==================================================== */}
        {stage === "playing" && (
          <ScenarioCard
            scenario={AUTHORED_SCENARIOS[currentScenarioIndex]}
            currentBalance={currentBalance}
            onSelectChoice={handleSelectChoice}
            dayIndex={currentScenarioIndex + 1}
            totalDays={selectedProfile.durationDays}
          />
        )}

        {/* ==================================================== */}
        {/* SCREEN 5: TRANSACTION RECEIPT MODAL                  */}
        {/* ==================================================== */}
        {stage === "receipt" && lastSelectedChoice && (
          <ReceiptSlip
            scenario={AUTHORED_SCENARIOS[currentScenarioIndex]}
            choice={lastSelectedChoice}
            previousBalance={previousBalance}
            newBalance={currentBalance}
            vibeScore={vibeScore}
            onNext={handleNextDayFromReceipt}
            isLastDay={currentScenarioIndex === AUTHORED_SCENARIOS.length - 1}
          />
        )}

        {/* ==================================================== */}
        {/* SCREEN 6: RECAP DASHBOARD                            */}
        {/* ==================================================== */}
        {stage === "recap" && (
          <RecapDashboard
            startingBalance={selectedProfile.startingBalance}
            endingBalance={currentBalance}
            vibeScore={vibeScore}
            categorySpending={categorySpending}
            character={selectedCharacter}
            profile={selectedProfile}
            goal={selectedGoal}
            onReplay={handleReplay}
            onOpenShareModal={() => setIsShareModalOpen(true)}
          />
        )}
      </main>

      {/* Share Modal */}
      {stage === "recap" && (
        <ShareCardModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          archetype={determineArchetype(
            currentBalance,
            selectedProfile.startingBalance,
            vibeScore,
            categorySpending
          )}
          character={selectedCharacter}
          profile={selectedProfile}
          vibeScore={vibeScore}
          endingBalance={currentBalance}
          startingBalance={selectedProfile.startingBalance}
        />
      )}

      {/* Persistent Clean Footer */}
      <footer className="w-full py-4 text-center text-xs font-mono text-slate-500 border-t border-slate-900 bg-slate-950">
        Soft Life Simulator v1.0 • Built with the Agent-Based Website Builder Workflow • Fictional Currency Only
      </footer>
    </div>
  );
}
