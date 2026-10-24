"use client";

import React from "react";
import { ArrowDownRight, Compass, Film } from "lucide-react";

const MARQUEE_ITEMS = [
  "PHOTOGRAPHY", "MUSIC", "FASHION", "DESIGN",
  "J.D. OJEIKERE", "FELA KUTI", "SHADE THOMAS-FAHM", "FESTAC '77",
  "LAGOS • IBADAN • ZARIA", "EST. 1960", "RECLAIMED 2026",
  "510+ VERIFIED RECORDS", "THE PAST IS NOT PAST",
  "PHOTOGRAPHY", "MUSIC", "FASHION", "DESIGN",
  "J.D. OJEIKERE", "FELA KUTI", "SHADE THOMAS-FAHM", "FESTAC '77",
  "LAGOS • IBADAN • ZARIA", "EST. 1960", "RECLAIMED 2026",
  "510+ VERIFIED RECORDS", "THE PAST IS NOT PAST",
];

const previewStrip = [
  {
    frame: "FR-01",
    title: "Ojeikere Hairstyles",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    discipline: "Photography",
    color: "text-terracotta",
  },
  {
    frame: "FR-02",
    title: "Kalakuta LP Master",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    discipline: "Music",
    color: "text-ochre",
  },
  {
    frame: "FR-03",
    title: "Thomas-Fahm Tailoring",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80",
    discipline: "Fashion",
    color: "text-blue-400",
  },
  {
    frame: "FR-04",
    title: "FESTAC '77 Identity",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80",
    discipline: "Design",
    color: "text-emerald-400",
  },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-between pt-28 pb-0 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Deep background radial atmosphere ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Central warmth bloom */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-terracotta/12 via-bronze/8 to-transparent blur-[140px] rounded-full" />
        {/* Bottom edge vignette */}
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-archival-950 to-transparent" />
        {/* Top corner accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/5 blur-[100px] rounded-full" />
      </div>

      {/* ── Top status rail ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75 neon-dot" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terracotta" />
            </span>
            <span className="text-white font-semibold uppercase tracking-widest text-[11px]">
              Permanent Exhibition Vault
            </span>
            <span className="hidden sm:inline text-archival-600">•</span>
            <span className="hidden sm:inline text-archival-300">
              510+ Verified Historical References
            </span>
          </div>
          <div className="flex items-center gap-3 text-archival-400 text-[11px] tracking-wider uppercase">
            <span>Lagos / Ibadan / Zaria / Diaspora</span>
            <span className="text-terracotta">•</span>
            <span className="text-gradient-bronze font-bold">EST. 1960 — RECLAIMED 2026</span>
          </div>
        </div>
      </div>

      {/* ── Center monumental content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 my-auto py-10 md:py-16 space-y-10">
        {/* Section badge */}
        <div className="flex items-center gap-3">
          <span className="inline-block px-3 py-1 bg-terracotta/15 border border-terracotta/35 font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta font-bold rounded-xs">
            01 // Opening Statement
          </span>
          <span className="font-mono text-[11px] text-bronze/80 uppercase tracking-widest hidden sm:inline">
            [ Curatorial Directive — Lagos, Nigeria ]
          </span>
        </div>

        {/* Monumental headline */}
        <div className="space-y-2">
          <h1
            id="hero-heading"
            className="font-display font-extrabold leading-[0.86] uppercase select-none"
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[108px] text-white tracking-monumental drop-shadow-2xl">
              THE PAST
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[108px] text-gradient-fire tracking-monumental drop-shadow-2xl">
              IS NOT PAST.
            </span>
          </h1>
        </div>

        {/* Sub-copy + CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 font-editorial text-xl sm:text-2xl md:text-3xl text-archival-200 leading-snug">
            An evolving digital museum of Nigerian{" "}
            <span className="text-white font-medium italic underline decoration-terracotta underline-offset-4">photography</span>,{" "}
            <span className="text-white font-medium italic underline decoration-ochre underline-offset-4">music</span>,{" "}
            <span className="text-white font-medium italic underline decoration-blue-400 underline-offset-4">fashion</span>, and{" "}
            <span className="text-white font-medium italic underline decoration-emerald-400 underline-offset-4">design</span>.
            The stories that shaped us.
          </p>

          <div className="md:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
            <button
              onClick={() => scrollTo("disciplines")}
              type="button"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xs shadow-glowTerracotta transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enter the Archive</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("collection")}
              type="button"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-archival-100 border border-white/20 hover:border-bronze font-mono text-xs uppercase tracking-widest font-bold rounded-xs transition-all"
            >
              <Compass className="w-4 h-4 text-bronze group-hover:rotate-12 transition-transform" />
              <span>Explore Vault</span>
            </button>
          </div>
        </div>

        {/* Contact sheet strip */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-archival-400 mb-3 px-0.5">
            <span className="flex items-center gap-1.5 text-gradient-bronze font-bold">
              <Film className="w-3.5 h-3.5 text-bronze" />
              Curatorial Contact Sheet Stream
            </span>
            <span className="hidden sm:inline text-archival-500">120mm Medium Format Negative Strips</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {previewStrip.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo("collection")}
                type="button"
                className="card-lift group relative bg-archival-850/80 p-3 rounded-xs border border-white/10 hover:border-bronze overflow-hidden flex items-center gap-3 text-left w-full"
              >
                <div className="relative w-14 h-14 rounded-xs overflow-hidden flex-shrink-0 bg-archival-950 border border-white/10 scanlines">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className={`font-mono text-[9px] ${item.color} uppercase tracking-wider block font-bold`}>
                    {item.frame} • {item.discipline}
                  </span>
                  <span className="font-display text-xs font-bold text-white block truncate group-hover:text-gradient-bronze transition-colors">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom metrics rail ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/[0.07] py-6 font-mono text-xs text-archival-400">
          {[
            { label: "Visual Identity", value: "The Living Archive", valueClass: "text-white" },
            { label: "Research Library", value: "510+ Verified Records", valueClass: "text-gradient-bronze font-bold" },
            { label: "Acoustic Engine", value: "Synthesized Web Audio", valueClass: "text-white" },
            { label: "Disciplines Covered", value: "4 × Nigerian Movements", valueClass: "text-terracotta font-bold" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="block text-[10px] uppercase text-archival-500 font-bold mb-0.5">{stat.label}</span>
              <span className={`font-medium ${stat.valueClass}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-archival-950/80 py-3">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-5 font-mono text-[11px] uppercase tracking-widest text-archival-400 whitespace-nowrap">
              <span className="text-bronze/60">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
