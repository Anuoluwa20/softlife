# Soft Life Simulator — Brand Identity, Color, Font & Logo Specification

> **Workflow Reference:** Agent-Based Website Builder Workflow — Stage 05 (Brand / Logo Research & Direction)  
> **Product:** Soft Life Simulator (`softlife.ng`)  
> **Tagline:** *"Enjoy your life. Just don't finish your money."*  
> **Primary Audience:** Nigerian University Students & Young Working Adults  
> **Platform:** Mobile-First Web Application (Next.js 15, TypeScript, Tailwind CSS)

---

## 1. Brand Strategy & Core Philosophy

### 1.1 The Cultural Narrative
In modern Nigerian youth culture, **"Soft Life"** represents the aspiration for comfort, wellness, quality experiences, and freedom from unnecessary hardship. Conversely, **"Sapa"** represents extreme financial broke-ness and vulnerability. 

Most financial advice offered to young people creates a false, punishing dichotomy: either hoard every kobo and endure an ascetic, joyless lifestyle, or spend recklessly and face immediate ruin.

**Soft Life Simulator rejects this false dichotomy.** The brand positions financial management not as self-denial, but as the *art of runway preservation*—making smart, street-savvy decisions so your money lasts while your quality of life stays high.

### 1.2 Brand Personality & Voice
- **Tone of Voice:** The Savvy Nigerian Friend. Witty, culturally plugged-in, humorous, empathetic, and never preachy.
- **Brand Archetype:** **The Jester-Sage Hybrid**. Combines deep street-smart wisdom with irreverent humor and joyful relatability.
- **Key Brand Principles:**
  1. **Zero Judgment:** Making a mistake in the game is an educational experiment, never an embarrassment.
  2. **Authentic Vernacular:** Naturally integrates Nigerian terminology (*danfo, suya, urgent 2k, odogwu, sapa, aza*) without forcing caricature slang.
  3. **High-Craft Tactile Polish:** Premium digital finish that feels as polished as modern global fintechs (Cash App, Monzo, Revolut) while celebrating local culture.

---

## 2. Color Identity System

The Soft Life Simulator color palette is designed on the **Neo-Fintech Tactile Pop** model: a deep, battery-efficient obsidian canvas elevated by vibrant, consequence-driven accent colors.

### 2.1 Complete Color Palette Tokens

| Semantic Token | Hex Code | OKLCH Space | Usage & Psychological Intent |
| :--- | :--- | :--- | :--- |
| **`--bg-canvas`** | `#090D16` | `oklch(0.12 0.02 260)` | Deep slate-obsidian root background. Eliminates eye fatigue. |
| **`--bg-surface`** | `#121927` | `oklch(0.18 0.03 255)` | Primary container cards, dialogs, and navigation headers. |
| **`--bg-surface-elevated`**| `#1B2436` | `oklch(0.24 0.04 255)` | Elevated interactive elements, active buttons, popovers. |
| **`--border-subtle`** | `#26334D` | `oklch(0.29 0.03 250)` | Crisp card borders and divider lines (1px hairlines). |
| **`--emerald-cash`** | `#10B981` | `oklch(0.72 0.18 155)` | **Positive cashflow, savings, approved actions, runway gains.** |
| **`--emerald-glow`** | `#34D399` | `oklch(0.80 0.15 155)` | Interactive hover rings, dynamic delta indicators. |
| **`--amber-vibe`** | `#F59E0B` | `oklch(0.75 0.17 65)` | **Soft Life Vibe Score, luxury treats, rewards, odogwu badges.** |
| **`--amber-warm`** | `#FBBF24` | `oklch(0.82 0.15 75)` | Warm highlights, star ratings, celebratory confetti accents. |
| **`--coral-expense`** | `#EF4444` | `oklch(0.63 0.22 25)` | **Expenses, cash deductions, sapa warnings, screen repair bills.** |
| **`--coral-soft`** | `#F87171` | `oklch(0.71 0.18 25)` | Subtle negative alerts, insufficient funds tags. |
| **`--text-primary`** | `#F8FAFC` | `oklch(0.98 0.01 250)` | Primary headings, prominent balances, bold story copy. |
| **`--text-secondary`** | `#94A3B8` | `oklch(0.70 0.03 250)` | Explanatory labels, hints, timestamps, subtitles. |
| **`--text-muted`** | `#64748B` | `oklch(0.55 0.03 250)` | Disclaimers, footer notes, disabled states. |

### 2.2 Functional Role Hierarchy
- **Financial Positive (Emerald):** Always denotes money retained or earned (+₦). Never used for warning states.
- **Financial Negative (Coral):** Denotes cash outflow (-₦). Keeps the user immediately aware of deductions.
- **Lifestyle Happiness (Amber):** Tracks the user's emotional and social wellbeing (Soft Life Vibe Meter).

---

## 3. Typography System

The typography marries ultra-legible modern geometric sans with high-density tabular monospace, creating the feeling of a personal digital financial command center.

### 3.1 Font Family Stack

```css
/* 1. Brand Display & Headings */
--font-display: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* 2. Primary Body & Story Narrative */
--font-body: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;

/* 3. Currency, Financial Calculations & Thermal Receipts */
--font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
```

### 3.2 Type Scale & Hierarchy

| Hierarchy Role | Font Family | Weight | Size (Desktop) | Size (Mobile) | Tracking / Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | Display | 900 (Black) | 56px (`3.5rem`) | 36px (`2.25rem`) | `-0.035em` / `1.05` |
| **Section Title** | Display | 800 (Extra Bold)| 32px (`2.0rem`) | 24px (`1.5rem`) | `-0.025em` / `1.15` |
| **Card Heading** | Display | 700 (Bold) | 20px (`1.25rem`) | 18px (`1.125rem`)| `-0.015em` / `1.25` |
| **Body Large** | Body | 500 (Medium) | 16px (`1.0rem`) | 15px (`0.9375rem`)| `normal` / `1.6` |
| **Body Regular** | Body | 400 (Regular) | 14px (`0.875rem`)| 14px (`0.875rem`)| `normal` / `1.55` |
| **Balance Figure**| Mono | 800 (Extra Bold)| 28px (`1.75rem`) | 22px (`1.375rem`)| `-0.02em` / `1.0` (Tabular) |
| **Receipt Line** | Mono | 600 (Semi-Bold) | 13px (`0.8125rem`)| 12px (`0.75rem`) | `0.02em` / `1.4` |
| **Micro Badge** | Mono | 700 (Bold) | 11px (`0.6875rem`)| 10px (`0.625rem`) | `0.05em` (Uppercase) |

---

## 4. Logo Design & Vector Identity

### 4.1 Concept: The Shielded Soft Life Coin (₦)
The official mark features a dynamic Nigerian Naira coin nestled inside a fluid, pill-shaped aura. The coin represents financial discipline; the organic surrounding cloud represents comfort and enjoyment ("the soft life cushion").

### 4.2 Vector SVG Markup: Primary Logo Lockup

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80" fill="none">
  <!-- Soft Life Gradient Definitions -->
  <defs>
    <linearGradient id="coinGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <linearGradient id="auraGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#10B981" stop-opacity="0.05"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Group: Protective Aura & Outer Coin -->
  <g transform="translate(12, 12)">
    <!-- Soft Glow Backdrop -->
    <rect x="0" y="0" width="56" height="56" rx="20" fill="url(#auraGrad)" stroke="#10B981" stroke-width="1.5" stroke-opacity="0.3"/>
    
    <!-- Central Naira Coin -->
    <circle cx="28" cy="28" r="20" fill="url(#coinGrad)" filter="url(#glow)"/>
    
    <!-- Naira ₦ Typography Glyphs -->
    <path d="M21 18 L21 38 M35 18 L35 38 M21 21 L35 35 M18 25 L38 25 M18 31 L38 31" 
          stroke="#090D16" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          
    <!-- Small Orbiting Vibe Sparkle -->
    <circle cx="48" cy="12" r="3" fill="#F59E0B" />
  </g>

  <!-- Wordmark Group -->
  <g transform="translate(82, 33)">
    <!-- Main Headline Wordmark -->
    <text font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="22" letter-spacing="-0.04em" fill="#F8FAFC">
      SOFT LIFE
    </text>
    
    <!-- Monospace Tag / Category -->
    <text y="20" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="10" letter-spacing="0.22em" fill="#10B981">
      SIMULATOR • NAIJA
    </text>
  </g>
</svg>
```

### 4.3 App Icon & Favicon Variant (1:1 Ratio)
- Background: `#090D16` rounded squircle (`rx: 28%`).
- Center: The ₦ emerald coin with double horizontal crossbar and amber ambient orbit star.
- Clearspace requirement: Minimum padding of `16%` around the glyph.

---

## 5. Character & Avatar Identity System

Each character persona is paired with a distinct visual role, badge, and behavioral archetype:

1. **Tomi (The Lifestyle Balancer):** Avatar `👨🏾‍🎓` • Primary badge: `Emerald Balancer` • Core challenge: Stretches allowance between cafeteria food, data, and social gatherings.
2. **Chisom (The Tech Hustler):** Avatar `👩🏾‍💻` • Primary badge: `Aza Chaser` • Core challenge: Managing heavy internet costs and generator fuel while landing gigs.
3. **Femi (The Social Odogwu):** Avatar `😎` • Primary badge: `Outside Minister` • Core challenge: Saying no to spontaneous squad outings and protecting Monday transport fares.
4. **Amaka (The Cautious Planner):** Avatar `👩🏾‍💼` • Primary badge: `PiggyVest Disciple` • Core challenge: Navigating unexpected family emergencies without breaking safety locks.

---

## 6. End-of-Round Archetype Badges

| Archetype Name | Visual Badge | Criteria | Tone & Diagnosis |
| :--- | :--- | :--- | :--- |
| **Odogwu on Budget** | 👑 | Remaining balance ≥ 30% & Vibe ≥ 65% | *Elite discipline. Enjoyed life without draining runway.* |
| **The Weekend Millionaire**| 🍾 | Remaining balance < 10% & Vibe ≥ 75% | *Unstoppable vibes, but survived Day 14 on faith.* |
| **The Ascetic Monk** | 🧘🏾‍♂️ | Remaining balance ≥ 20% & Vibe < 50% | *Money safe, but experienced heavy social deprivation.* |
| **Sapa Survivor** | 🛡️ | Remaining balance ≤ 15% | *Weathered danfo surges and emergencies; finished intact.* |
| **The Pragmatic Tactician**| ⚖️ | Balanced distribution across all buckets | *Methodical, street-smart compromises.* |
