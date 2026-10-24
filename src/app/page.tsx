"use client";

import React, { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { DisciplinesSection } from "@/components/sections/DisciplinesSection";
import { FeaturedStorySection } from "@/components/sections/FeaturedStorySection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { ContinuitySection } from "@/components/sections/ContinuitySection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { ColorPaletteInspector } from "@/components/ui/ColorPaletteInspector";
import { ArtifactModal } from "@/components/ui/ArtifactModal";
import { SubmissionModal } from "@/components/ui/SubmissionModal";
import type { Artifact } from "@/data/artifacts";

export default function HomePage() {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isArtifactModalOpen, setIsArtifactModalOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  // Shared Filter States for Collection Section
  const [activeDisciplineFilter, setActiveDisciplineFilter] = useState("all");
  const [activeEraFilter, setActiveEraFilter] = useState("all");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSelectArtifact = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setIsArtifactModalOpen(true);
  };

  const handleFocusSearch = () => {
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 450);
  };

  const handleOpenPalette = () => {
    const el = document.getElementById("color-palette");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectDisciplineFilter = (disciplineSlug: string) => {
    setActiveDisciplineFilter(disciplineSlug);
  };

  const handleSelectEraFilter = (eraSlug: string) => {
    setActiveEraFilter(eraSlug);
  };

  return (
    <div className="relative min-h-screen bg-archival-950 text-archival-100 flex flex-col selection:bg-terracotta selection:text-white">
      {/* Background Archival Paper Grain */}
      <div className="fixed inset-0 archival-grain pointer-events-none opacity-40 z-0" aria-hidden="true" />

      {/* Persistent Global Header & Controls */}
      <Navbar
        onOpenSubmission={() => setIsSubmissionModalOpen(true)}
        onFocusSearch={handleFocusSearch}
        onOpenPalette={handleOpenPalette}
      />

      {/* Main Exhibition Narrative Flow */}
      <main id="main-content" className="relative z-10 flex-grow" role="main">
        {/* Soft Life Simulator Banner */}
        <aside aria-label="Featured Simulation Challenge" className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 border-b border-emerald-500/30 pt-20 pb-3 px-4 text-center">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/40 uppercase">
                New Experience
              </span>
              <span className="font-semibold text-white">SOFT LIFE SIMULATOR:</span>
              <span className="text-slate-300 italic hidden md:inline">
                &ldquo;Enjoy your life. Just don&apos;t finish your money.&rdquo;
              </span>
            </div>
            <a
              href="/soft-life"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black font-mono tracking-tight transition-all shadow-md shadow-emerald-500/20 hover:scale-105"
            >
              <span>Play 14-Day Simulation</span>
              <span>→</span>
            </a>
          </div>
        </aside>

        {/* Section 01: Monumental Opening Statement */}
        <HeroSection />

        {/* Section 02: Editorial Manifesto */}
        <ManifestoSection />

        {/* Interactive Color Architecture & Indigenous Pigments Inspector */}
        <section id="color-palette" className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full" aria-label="Color Palette Specimen">
          <ColorPaletteInspector />
        </section>

        {/* Section 03: Four Disciplines Interactive Matrix */}
        <DisciplinesSection
          onSelectDisciplineFilter={handleSelectDisciplineFilter}
        />

        {/* Section 04: Featured Deep Cultural Story (J.D. Ojeikere) */}
        <FeaturedStorySection />

        {/* Section 05: Through the Years (Chronological Timeline) */}
        <TimelineSection
          onSelectEraFilter={handleSelectEraFilter}
        />

        {/* Section 06: The Living Collection (Faceted Archival Grid) */}
        <CollectionSection
          onSelectArtifact={handleSelectArtifact}
          activeDisciplineFilter={activeDisciplineFilter}
          setActiveDisciplineFilter={setActiveDisciplineFilter}
          activeEraFilter={activeEraFilter}
          setActiveEraFilter={setActiveEraFilter}
          searchInputRef={searchInputRef}
        />

        {/* Section 07: The Continuing Story (Heritage to Modernity) */}
        <ContinuitySection />

        {/* Section 08: Closing Invitation & Archival Submissions */}
        <ClosingSection
          onOpenSubmission={() => setIsSubmissionModalOpen(true)}
        />
      </main>

      {/* Section 09: Institutional Footer & Governance */}
      <Footer />

      {/* Global Lightbox / Curatorial Inspection Drawer */}
      <ArtifactModal
        artifact={selectedArtifact}
        isOpen={isArtifactModalOpen}
        onClose={() => setIsArtifactModalOpen(false)}
      />

      {/* Community Archival Submission Modal Dialog */}
      <SubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
      />
    </div>
  );
}
