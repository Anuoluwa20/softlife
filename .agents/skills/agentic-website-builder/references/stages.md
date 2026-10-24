# Stage-by-Stage Agent Delegation Runbook

This guide details the exact responsibilities, input context, execution steps, and output validation for each of the 7 stages of the Agent-Based Website Building Workflow.

---

## Stage 01: Project Manager / Discovery Agent

### Role & Purpose
Act as the lead Discovery Agent and Project Manager. Transform the user's initial high-level intent (e.g., "build a landing page for our AI database tool", "redesign our SaaS platform", "e-commerce boutique") into an exhaustive Project Knowledge Document ("SKU" / Project Brain).

### Steps
1. **Analyze Input**: Extract goals, target audience, brand adjectives, existing domain/URLs, and competitors mentioned by the user.
2. **Deep Online Research**: If an existing brand or website exists, crawl and analyze it using web tools. Research product category, domain jargon, and market expectations.
3. **Draft the Project Brain (SKU)**:
   - File path: `docs/project-knowledge-sku.md`
   - Content must capture:
     - Project objective and desired outcome
     - Business / product context
     - Target users and their needs
     - Existing website and current experience (if applicable)
     - Core pages, features, and content requirements
     - Brand characteristics, voice, and positioning
     - Constraints, technical stack preferences, and opportunities
     - Clear definition of success
4. **Validation**: Check that all sections are populated without vague placeholders before proceeding to Stage 02.

---

## Stage 02: Competitive & Inspiration Research Agent

### Role & Purpose
Act as a Market & Competitive Intelligence Researcher. Using the Project Brain as the source of truth, map the competitive landscape and study award-winning benchmarks.

### Steps
1. **Identify Competitors**: Research direct competitors, indirect alternatives, and adjacent market leaders.
2. **Benchmark High-Quality Sites**: Scan design galleries (e.g., Awwwards, FWA, Siteinspire, Mobbin, Godly, Lapa Ninja) for best-in-class experiences in the space.
3. **Categorize and Compare**:
   - Group competitors by areas of competition or differentiation.
   - Analyze positioning, value proposition delivery, color choices, typography, layout structures, and conversion funnels.
4. **Output Generation**:
   - File path: `research/competitor-landscape.md`
   - Return structured findings (matrices, feature teardowns, layout takeaways).

---

## Stage 03: Website Inspiration Agent (Reference Library)

### Role & Purpose
Build a massive, categorized visual reference set (Target: up to 500 websites, URLs, and screenshot references) to guide layout, visual rhythm, and component patterns.

### Steps
1. **Broad Visual Sweep**:
   - Collect references across diverse design styles (minimalist, editorial, bold/brutalist, corporate clean, dark futuristic, etc.).
   - Prioritize quality, craft, and relevance over arbitrary collections.
2. **Focus Areas**:
   - Strong visual systems and distinct grid layouts.
   - Storytelling pacing and content hierarchy.
   - Conversion patterns (pricing tables, interactive calculators, demo showcases).
3. **Structured Indexing**:
   - File path: `research/visual-reference-library.md`
   - Categorize by sector, mood, typography style, and layout archetype. Include links, screenshots, and notes on what makes each reference exceptional.

---

## Stage 04: Interaction & Motion Intelligence Agent

### Role & Purpose
Act as an Interaction & Motion Design Specialist. Identify the exact motion patterns and micro-interactions that elevate the digital experience from static to world-class.

### Steps
1. **Scan & Deconstruct Patterns Across**:
   - **Navigation**: Sticky navbars, morphing headers, mega-menus, mobile hamburger animations.
   - **Hero Animations**: Text mask reveals, 3D canvas / WebGL interactions, floating elements.
   - **Buttons & Micro-interactions**: Magnetic cursor pull, shimmer states, click feedback, ripple effects.
   - **Scroll Behavior**: Smooth scroll, parallax depth, scrubbed timelines, sticky card stacks.
   - **Page & Section Transitions**: Wipe transitions, cross-fades, layout morphing.
   - **Cards & Content Reveals**: Staggered fade-ins, hover tilt, border glow effects.
   - **Cursor Interactions**: Custom follower cursors, magnetic hotspots, trailing canvas.
   - **Loading & State Transitions**: Skeleton loaders, progress lines, optimistic UI states.
2. **Output Library**:
   - File path: `research/interaction-motion-library.md`
   - Include CSS/Framer Motion/GSAP code snippets or implementation guidance for each pattern.

---

## Stage 05: Brand & Logo Exploration Agent

### Role & Purpose
Explore visual identity, logo typologies, and creative directions aligned with the brand positioning defined in the Project Brain.

### Steps
1. **Categorize Logo Directions**:
   - Typographic / Wordmark (bold sans, luxury serif, monospaced tech)
   - Symbol / Abstract Mark
   - Monogram / Lettermark
   - Geometric / Modernist
   - Minimal / Editorial
   - Expressive / Organic / Experimental
2. **Creative Direction Boards**:
   - Propose 2-3 distinct creative directions (e.g., "Direction A: High-Trust Minimal Tech", "Direction B: Editorial Tactile Rebellion", "Direction C: Vibrant High-Velocity SaaS").
   - Each direction includes color palette tokens (OKLCH/Hex), font pairings, photography/imagery guidelines, and logo marks.
3. **Output File**:
   - File path: `research/brand-logo-directions.md`

---

## Stage 06: Production & Build Agents (From Research to Production)

### Role & Purpose
Transition from intelligence gathering into rapid, high-fidelity execution. The production phase consists of 4 coordinated build layers:

### The 4 Production Layers:
1. **Website Build Layer**:
   - Inputs: Project Brain (`SKU`), Competitor research, selected layout references.
   - Outputs: Information architecture, semantic page structures, routing, accessible components.
2. **Interaction Build Layer**:
   - Inputs: Interaction & motion library.
   - Outputs: High-performance animations, hover states, scroll triggers, micro-interactions using Tailwind, Framer Motion, or CSS variables.
3. **Brand / Logo Integration Layer**:
   - Inputs: Selected brand direction and design tokens.
   - Outputs: Consistent typography scale, color tokens, SVG logos, assets, and iconography.
4. **Visual Refinement Layer**:
   - Inputs: Reference library benchmarks + quality standards.
   - Outputs: Spacing consistency, responsive testing (320px, 375px, 768px, 1440px), cross-browser polish, performance optimization.

---

## Stage 07: Autonomous Project Manager & Coordination

### Responsibilities:
- **State Preservation**: Persist all stage status and findings in project documentation.
- **Context Handoff**: Pass the Project Brain (`docs/project-knowledge-sku.md`) along with preceding stage artifacts to each specialized agent.
- **Quality Gates**: Ensure each stage meets its definition of done before launching subsequent stages.
- **Autonomous Resolution**: Resolve ambiguities using research context before interrupting the user. Only escalate genuine strategic choices.
