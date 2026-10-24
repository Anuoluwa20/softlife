# Artifact Specifications & Templates

This reference defines the structured templates for each artifact produced throughout the Agent-Based Website Building Workflow.

---

## 1. Project Knowledge Document / SKU (`docs/project-knowledge-sku.md`)

```markdown
# Project Knowledge & Specification (SKU / Project Brain)

## 1. Executive Summary & Goals
- **Project Name**: [Name]
- **Primary Goal**: [e.g., Greenfield build / Revamp / High-conversion landing page]
- **Target Launch Date / Milestones**: [Timeline]

## 2. Business & Product Context
- **Industry / Sector**: [Sector]
- **Company Background**: [Summary of offering, history, mission]
- **Core Value Proposition**: [The main differentiator]

## 3. Target Audience & Personas
- **Primary Persona**: [Demographics, role, pain points, core jobs to be done]
- **Secondary Persona**: [Influencers, secondary buyers, partners]
- **Key User Triggers**: [What prompts a user to visit and convert]

## 4. Existing Experience & Audit (If applicable)
- **Current URL**: [URL]
- **Strengths**: [What works today]
- **Friction Points & Gaps**: [What fails or looks dated]

## 5. Scope & Information Architecture
- **Core Pages**:
  - `Home / Landing`: Hero, social proof, feature breakdown, interactive demo, pricing, FAQ, footer
  - `Product / Features`: Deep-dive into capabilities
  - `About / Story`: Team, mission, philosophy
  - `Contact / Conversion`: Lead capture, calendar booking, checkout
- **Key Functional Features**: [Calculators, filters, search, animations, etc.]

## 6. Brand Characteristics & Voice
- **Tone & Adjectives**: [e.g., Architectural, precise, humane, effortless]
- **Positioning**: [e.g., Premium B2B vs playful developer-first]
- **Visual References**: [Preliminary aesthetics]

## 7. Technical Requirements & Constraints
- **Framework**: [Next.js / Vite / Astro / React]
- **Styling**: [Tailwind CSS / OKLCH tokens / CSS Modules]
- **Animation**: [Framer Motion / GSAP / Pure CSS]
- **Compliance & Accessibility**: [WCAG 2.1 AA, responsive floor 320px]

## 8. Success Criteria & Definition of Done
- Metrics: [Conversion rate targets, Lighthouse performance score > 95, etc.]
- Subjective Bar: [Craft level, distinctive visual voice, zero AI slop]
```

---

## 2. Competitor Landscape Map (`research/competitor-landscape.md`)

```markdown
# Competitor Landscape & Benchmark Research

## 1. Competitor Matrix
| Competitor | URL | Positioning | Strengths | Weaknesses | Visual Style / Tone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Direct A** | `https://...` | Enterprise leader | High credibility, case studies | Dense, slow, sterile | Corporate Navy / Clean |
| **Direct B** | `https://...` | Modern Challenger | Slick motion, dark mode | Unclear pricing | Tech Noir / Monospace |
| **Adjacent C**| `https://...` | Consumer crossover | Superb onboarding | Lacks enterprise depth | Playful Neo-Brutalist |

## 2. Award-Winning Industry Benchmarks
- **Benchmark 1 (Awwwards/Siteinspire)**: [URL] - *Key takeaway on layout and pacing*
- **Benchmark 2**: [URL] - *Key takeaway on interactive demo mechanics*

## 3. Differentiation Opportunities
- **Visual White Space**: What competitors are ignoring (e.g., everyone uses dark purple SaaS templates; opportunity for warm editorial parchment).
- **Messaging Differentiator**: Clarity vs corporate buzzwords.
```

---

## 3. Visual Reference Library (`research/visual-reference-library.md`)

```markdown
# Visual Inspiration & Reference Library

*Target: Comprehensive reference catalog categorized by visual archetype and layout pattern.*

## 1. Archetype Categorization
### Category A: Warm Editorial & High-Craft
- **Reference 1**: `https://...` (Screenshot: `assets/refs/ref-01.png`)
  - *Traits*: Serif headlines, high whitespace, rich photography, asymmetric editorial grids.
- **Reference 2**: `https://...`
  - *Traits*: Columnar layouts, pull quotes, muted earth-tone palette.

### Category B: High-Density Developer / Technical
- **Reference 3**: `https://...`
  - *Traits*: Monospace labels, live code tabs, terminal chrome, border gridlines.

### Category C: Kinetic & Modernist
- **Reference 4**: `https://...`
  - *Traits*: Huge typography, scroll scrubbing, full-bleed media cards.

## 2. Component Reference Indexes
- **Hero Sections**: [Links & screenshots]
- **Feature Grids**: [Bento boxes, alternating split rows, sticky tabbed displays]
- **Social Proof & Testimonials**: [Quote carousels, logo ticker ribbons, metric blocks]
- **Pricing & Checkout**: [Interactive toggles, highlighted tier cards]
```

---

## 4. Interaction & Motion Library (`research/interaction-motion-library.md`)

```markdown
# Interaction & Motion Reference Library

## 1. Micro-Interactions & Buttons
- **Magnetic Button Pull**: Button follows cursor proximity with soft dampening.
  - *Tech*: Framer Motion `useMotionValue`, `useSpring`.
- **Shimmer Border**: Continuous subtle rotating gradient border on primary CTA.

## 2. Navigation & Header
- **Scroll-Aware Header**: Disappears on scroll down, reappears with compact frosted glass on scroll up.
- **Underline Slide**: Active nav indicator glides across menu items on hover.

## 3. Hero & Content Reveals
- **Staggered Line Mask**: Headlines reveal upward from behind an `overflow: hidden` bounding box.
- **Card Tilt & Glare**: 3D perspective tilt reacting to cursor coordinates.

## 4. Scroll Transitions
- **Sticky Section Stacking**: Subsequent sections slide over preceding ones like stacked index cards.
- **Progress Scrubbing**: Feature illustrations animate in sync with viewport scroll percentage.
```

---

## 5. Brand & Logo Directions (`research/brand-logo-directions.md`)

```markdown
# Brand & Logo Exploration Deck

## Direction 1: [Direction Name, e.g., "The Precise Architect"]
- **Concept**: Emphasizes reliability, technical depth, and mathematical precision.
- **Logo Typology**: Monogram mark combined with a geometric sans wordmark.
- **Color Palette**:
  - `Primary`: `oklch(0.20 0.04 260)` (Deep Obsidian Ink)
  - `Accent`: `oklch(0.68 0.18 145)` (Electric Spring Jade)
  - `Surface`: `oklch(0.98 0.01 260)` (Pale Off-White)
- **Typography**:
  - Display: `Geist Sans` or `Space Grotesk`
  - Body: `Inter`
  - Code: `JetBrains Mono`

## Direction 2: [Direction Name, e.g., "The Editorial Standard"]
- **Concept**: Emphasizes craft, intellectual authority, and high-touch finish.
- **Logo Typology**: Typographic serif wordmark with high-contrast glyph details.
- **Color Palette**:
  - `Primary`: `oklch(0.18 0.02 50)` (Warm Espresso)
  - `Accent`: `oklch(0.65 0.15 40)` (Burnt Terracotta)
  - `Surface`: `oklch(0.97 0.02 85)` (Warm Alabaster)
- **Typography**:
  - Display: `Newsreader` or `Fraunces`
  - Body: `Plus Jakarta Sans`
```
