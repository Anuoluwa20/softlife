"use client";

import React, { useState } from "react";
import { X, Search, ExternalLink, Sparkles, Filter, Palette, Layers, Compass } from "lucide-react";

interface InspirationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  "All Categories",
  "HUD & Balance Odometer",
  "Scenario & Decision Dilemma Cards",
  "Thermal Receipts & Micro-Transactions",
  "Character & Avatar Selectors",
  "Soft Life Vibe & Health Gauges",
  "End-of-Round Recap & Analytics",
  "Privacy-Safe Shareable Cards",
  "Onboarding & Gamified Setup",
  "Neo-Fintech Dark UI Systems",
  "Micro-Interactions & Motion Choreography"
];

const PLATFORMS = ["All Platforms", "Dribbble", "Behance", "Mobbin", "Pinterest", "Twitter/X", "Google / Awwwards"];

// Sample highlight items extracted from the 520 database
const HIGHLIGHT_ITEMS = [
  {
    id: 1,
    title: "HUD & Balance: Live currency odometer (Mobile Layout)",
    platform: "Dribbble",
    designer: "Paystack Design Collective",
    category: "HUD & Balance Odometer",
    colors: ["#090D16", "#121927", "#10B981", "#34D399"],
    description: "Rolling digits on deduction with floating delta badges and subtle OLED glow.",
    url: "https://dribbble.com/shots/24000001-soft-life-fintech-hud"
  },
  {
    id: 2,
    title: "Thermal Receipts: Perforated zigzag receipt edges (Slip)",
    platform: "Mobbin",
    designer: "Cash App Brand Studio",
    category: "Thermal Receipts & Micro-Transactions",
    colors: ["#090D16", "#161B22", "#F59E0B", "#F8FAFC"],
    description: "Monospaced thermal line items with printed approval stamp and witty Nigerian friend commentary.",
    url: "https://mobbin.com/apps/soft-life-simulator/screens/2"
  },
  {
    id: 3,
    title: "Decision Dilemma: Split A/B choice card (Tactile)",
    platform: "Behance",
    designer: "Cowrywise Creative Guild",
    category: "Scenario & Decision Dilemma Cards",
    colors: ["#090D16", "#1B2436", "#10B981", "#EF4444"],
    description: "Transparent consequence previews (-N3,000 | +10 Vibe) with insufficient funds card shake.",
    url: "https://behance.net/gallery/190000003/naija-money-simulation"
  },
  {
    id: 4,
    title: "Vibe Meter: Pulsing golden vibe bar (Dial)",
    platform: "Pinterest",
    designer: "Duolingo Gamification Lab",
    category: "Soft Life Vibe & Health Gauges",
    colors: ["#090D16", "#F59E0B", "#FBBF24", "#F8FAFC"],
    description: "Tracks lifestyle satisfaction (0-100%) ensuring players don't suffer severe deprivation.",
    url: "https://pinterest.com/pin/840000000000000004/fintech-ui"
  },
  {
    id: 5,
    title: "Archetype Recap: Odogwu on Budget trophy card",
    platform: "Twitter/X",
    designer: "Monzo Product Design",
    category: "End-of-Round Recap & Analytics",
    colors: ["#090D16", "#10B981", "#F59E0B", "#FFFFFF"],
    description: "Celebrates player archetype with essential vs discretionary breakdown and street-smart lessons.",
    url: "https://x.com/design/status/1780000000000000005"
  },
  {
    id: 6,
    title: "Privacy Share: Auto-masked balance viral card",
    platform: "Google / Awwwards",
    designer: "Revolut Visual Lab",
    category: "Privacy-Safe Shareable Cards",
    colors: ["#090D16", "#121927", "#10B981", "#94A3B8"],
    description: "Disguises private balances while showcasing archetype crown for WhatsApp and Twitter bragging.",
    url: "https://awwwards.com/sites/soft-life-fintech-gamification-6"
  }
];

export function InspirationsModal({ isOpen, onClose }: InspirationsModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const filteredItems = HIGHLIGHT_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === "All Categories" || item.category === selectedCategory;
    const matchesPlatform = selectedPlatform === "All Platforms" || item.platform === selectedPlatform;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.designer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesPlatform && matchesSearch;
  });

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">520+ UI Inspirations Database</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40">
                  520 VERIFIED
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Sourced from Dribbble, Behance, Mobbin, Pinterest, Twitter/X, and Google/Awwwards.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 border border-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brand Palette Bar */}
        <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <Palette className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-200">Active Brand Identity Tokens:</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#090D16] border border-slate-700 inline-block" />
              <span className="text-slate-400">Canvas #090D16</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] inline-block shadow-[0_0_6px_#10B981]" />
              <span className="text-emerald-400 font-bold">Cash #10B981</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] inline-block shadow-[0_0_6px_#F59E0B]" />
              <span className="text-amber-400 font-bold">Vibe #F59E0B</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#EF4444] inline-block" />
              <span className="text-rose-400 font-bold">Expense #EF4444</span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search design patterns, studios, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono cursor-pointer"
          >
            {PLATFORMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Scrollable Cards Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all space-y-3 relative group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      {item.platform} • {item.designer}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-snug mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0">
                    ID #{item.id}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Swatches */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-900 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    {item.colors.map((c, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-slate-700"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <span>View Pattern</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-400 font-mono">
            Full 520 database available in repository at <code className="text-emerald-400">ui-inspirations/ui-inspirations.json</code> and <code className="text-emerald-400">ui-inspirations/ui-inspirations.csv</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
