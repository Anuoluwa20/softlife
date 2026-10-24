# Interaction & Motion Reference Library (Stage 04)

Specifications and code patterns for interactions and micro-animations in Soft Life Simulator.

---

## 1. Core Motion Choreography & Transitions

### A. Dynamic Balance Odometer / Counter
- **Trigger**: When a player selects an option resulting in an expense or income change.
- **Motion Principle**: Numbers roll smoothly from previous balance to new balance over 600ms with ease-out cubic bezier (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Delta Badge**: A floating `+₦5,000` (emerald) or `-₦2,500` (crimson/amber) badge emerges from the balance bar, translates upward by 16px, and fades out over 800ms.

### B. Scenario Card Presentation
- **Entry**: Next scenario card enters from the right with a slight 3-degree rotational tilt, sliding into center position with soft spring physics (`mass: 0.8, damping: 15`).
- **Exit**: Upon confirming a decision, the selected choice card highlights with a pulse border, while the card container slides left or unfolds downward into the transaction receipt slip.

### C. Digital Receipt "Tear & Slide" Effect
- The consequence feedback modal renders with an accordion slide-down, resembling a printed thermal register receipt.
- A subtle typewriter stagger renders the line-item expenses.

### D. Soft Life / Vibe Meter Pulse
- Whenever lifestyle choices increase or decrease the Vibe metric, the progress bar pulses with an accent glow:
  - Positive vibe: Golden yellow glow (`box-shadow: 0 0 15px rgba(245, 158, 11, 0.5)`).
  - Negative vibe / stress: Cool slate compression.

---

## 2. Micro-Interactions & Tactile Feedback

### 1. Choice Option Cards
- **Hover/Touch**: Scale up by 1.015, border shifts from `border-slate-800` to `border-emerald-500/50`.
- **Active / Press**: Scale down slightly (0.985) simulating physical tactile click.
- **Cost Tag**: Color-coded pill with clear negative or positive indicator.

### 2. Avatar Selection Carousel
- Active avatar highlighted with dynamic glow ring and bouncy scale effect.
- Subtitle shifts dynamically with character archetype description.

### 3. Insufficient Funds Guardrail
- If an option exceeds current balance, the button renders with a locked / disabled state and a shake animation (`translateX: [-4px, 4px, -4px, 4px, 0]` over 300ms) with a friendly warning: *"Card Declined: Your account cannot carry this soft life today!"*.

---

## 3. Accessibility & Reduced Motion
- When `prefers-reduced-motion: reduce` is detected:
  - Turn off positional translation and card rotation.
  - Replace spring transitions with instantaneous opacity cross-fades (`duration: 150ms`).
  - Numbers update immediately without rolling.
