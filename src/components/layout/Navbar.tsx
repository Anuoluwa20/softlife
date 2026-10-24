"use client";

import React, { useState, useEffect } from "react";
import { AudioController } from "@/components/ui/AudioController";
import { Menu, X, Landmark, Search, Palette } from "lucide-react";

interface NavbarProps {
  onOpenSubmission: () => void;
  onFocusSearch: () => void;
  onOpenPalette: () => void;
}

export function Navbar({ onOpenSubmission, onFocusSearch, onOpenPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Manifesto", href: "#manifesto", index: "02" },
    { label: "Disciplines", href: "#disciplines", index: "03" },
    { label: "Featured", href: "#featured-story", index: "04" },
    { label: "Timeline", href: "#timeline", index: "05" },
    { label: "Collection", href: "#collection", index: "06" },
    { label: "Lineage", href: "#continuity", index: "07" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-archival-950/85 backdrop-blur-xl border-b border-white/[0.08] py-2.5 shadow-2xl"
          : "bg-transparent py-4 border-b border-white/[0.04]"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Mark & Institutional Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="ARCHIVE Nigeria Home"
        >
          <div className="w-8 h-8 rounded-xs bg-terracotta border border-bronze/40 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:bg-terracotta-light group-hover:border-bronze transition-all">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-wider text-white leading-none group-hover:text-bronze-light transition-colors">
              ARCHIVE
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-archival-400 leading-tight">
              Nigeria • Est. 1960
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 py-1 text-xs font-mono uppercase tracking-widest text-archival-300 hover:text-white transition-colors"
            >
              <span className="text-[10px] text-bronze/80 font-bold group-hover:text-bronze">
                {link.index}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action Rail: Color Swatches, Audio, Quick Search & Contribution */}
        <div className="flex items-center gap-2.5">
          {/* Color Palette Inspector Button */}
          <button
            onClick={onOpenPalette}
            type="button"
            aria-label="Inspect cultural color pigments and design palette"
            className="flex items-center gap-1.5 h-9 px-3 rounded-full border border-bronze/30 bg-bronze/10 text-bronze-light hover:bg-bronze hover:text-archival-950 transition-all text-xs font-mono font-bold"
            title="Inspect cultural color swatches & indigenous pigments"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Colors</span>
          </button>

          {/* Soft Life Simulator Link */}
          <a
            href="/soft-life"
            aria-label="Play Soft Life Simulator"
            className="flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all text-xs font-mono font-bold shadow-[0_0_12px_rgba(16,185,129,0.2)]"
            title="Interactive Financial Simulator"
          >
            <span>🎮 Soft Life</span>
          </a>

          {/* Quick Search Shortcut */}
          <button
            onClick={onFocusSearch}
            type="button"
            aria-label="Jump to collection search"
            className="flex items-center gap-2 h-9 px-3 rounded-full border border-white/15 bg-white/[0.04] text-archival-300 hover:text-white hover:border-white/30 transition-all text-xs font-mono"
            title="Search the 510+ item collection"
          >
            <Search className="w-3.5 h-3.5 text-terracotta" />
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Search Vault</span>
          </button>

          {/* Web Audio API Synthesized Soundscape Controller */}
          <AudioController />

          {/* Archival Submission CTA */}
          <button
            onClick={onOpenSubmission}
            type="button"
            className="hidden sm:flex items-center gap-1.5 h-9 px-4 bg-terracotta hover:bg-terracotta-light text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors shadow-glowTerracotta"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Contribute</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-full border border-white/15 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-archival-950/98 backdrop-blur-2xl z-30 p-6 flex flex-col justify-between border-t border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/10 text-archival-100 hover:text-bronze font-display text-xl font-bold tracking-wide"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-terracotta">{link.index}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPalette();
              }}
              type="button"
              className="w-full py-2.5 bg-bronze/15 border border-bronze/40 text-bronze-light font-mono text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2"
            >
              <Palette className="w-4 h-4" />
              <span>Inspect Cultural Color System</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmission();
              }}
              type="button"
              className="w-full py-3 bg-terracotta text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 shadow-glowTerracotta"
            >
              <Landmark className="w-4 h-4" />
              <span>Submit Archival Artifact</span>
            </button>

            <p className="font-mono text-[10px] text-center text-archival-500 uppercase tracking-widest pt-2">
              Lagos Time: WAT (UTC+1) • 510+ Verified Items
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
