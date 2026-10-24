# Project Knowledge & Specification (SKU / Project Brain)

## 1. Executive Summary & Goals
- **Project Name**: Soft Life Simulator
- **Tagline**: *"Enjoy your life. Just don't finish your money."*
- **Primary Goal**: Interactive, scenario-based money simulation helping young Nigerians (university students and young working adults) navigate competing financial priorities and learn everyday financial trade-offs in a risk-free environment.
- **Challenge / Context**: UX Design Arena Challenge MVP.
- **Platform**: Mobile-first web application built with Next.js, TypeScript, and Tailwind CSS.
- **Currency**: Nigerian Naira (₦).
- **Core Loop**: `Set up → Receive fictional money → Make decisions → Experience consequences → Review results → Replay & improve`.

---

## 2. Business & Product Context
- **Market & Geography**: Nigeria (urban centres: Lagos, Ibadan, Abuja, Nsukka, etc.).
- **Product Category**: Financial literacy, gamification, life simulation.
- **Problem Statement**:
  - Many young Nigerians face volatile transport fares, unexpected family/peer demands, data bundle renewals, and fluctuating side-hustle or allowance income without foundational budgeting training.
  - Traditional financial education relies on boring spreadsheets or lectures disconnected from daily Nigerian realities.
- **Core Value Proposition**:
  - Practise managing money in a world where the stakes are fictional, but the lessons are useful.
  - Zero financial risk, high cultural resonance, zero preachy judgement.

---

## 3. Target Audience & Personas
- **Primary Persona**: Nigerian University Students (e.g., Tomi, 21 — The Lifestyle Balancer).
  - Receives periodic monthly/weekly allowance, small freelance or side-hustle income.
  - Must stretch limited naira across 14-30 days while managing transport, cafeteria/food, data subscriptions, and peer invitations.
- **Secondary Persona**: Early-Career Young Working Adults.
  - Starting salaries, irregular freelance payments, commuting costs, utility contributions.
- **Key User Jobs-To-Be-Done (JTBD)**:
  - *When I receive a limited amount of money, I want to practise choosing between competing needs and wants so that I can master budget longevity.*
  - *When an unexpected expense hits (e.g., phone screen cracked, impromptu family request, fuel hike), I want to see how keeping a buffer prevents financial collapse.*
  - *When I complete a run, I want honest, witty, non-judgmental analysis of my financial habits.*

---

## 4. Brand Characteristics, Voice & Visual Direction
- **Brand Personality**: Witty, relatable, culturally authentic ("street smart"), encouraging, modern Gen Z.
- **Tone of Voice**:
  - Sounds like a savvy, funny Nigerian friend.
  - *Example*: "You can go out tonight, but what does that leave for transport tomorrow?"
  - Avoid preachy moralizing or corporate jargon.
- **Visual Aesthetic**:
  - High-craft Neo-Fintech meets vibrant Nigerian editorial pop.
  - Dynamic currency badges, receipt-style transaction slips, expressive character reaction portraits, card swipes/micro-interactions.
  - Clean accessibility standards, crisp typography, and mobile-optimized ergonomics.

---

## 5. Scope & Core Architecture
### Logical Screens & Flows:
1. **Welcome Screen**: Hook, value proposition, "Start Simulation" CTA, fictional-money disclaimer.
2. **Character Setup**: Select avatar (e.g., Tomi the Balancer, Chisom the Hustler, Femi the Creative), enter nickname.
3. **Simulation Setup**:
   - Choose profile: *Student Allowance (₦35,000)*, *Freelance Hustler (₦65,000)*, or *Entry-Level Pro (₦120,000)*.
   - Choose difficulty: *Gentle, Realistic, Hardcore (Naija Mode)*.
   - Select goal: *Make Money Last (14 Days)*, *Save 25% for rainy day*, or *Balance Enjoyment & Essentials*.
4. **Game Dashboard / HUD**:
   - Real-time Naira balance counter (₦).
   - Day progress tracker (Day 1 of 14).
   - Category spend breakdown bars (Food, Transport, Data, Social, Emergency).
   - Health/Vibe meter ("Soft Life Index").
5. **Scenario Screen**:
   - 12+ interconnected, authored Nigerian narrative dilemmas.
   - Choice cards with explicit cost and consequence previews.
6. **Consequence / Receipt Modal**:
   - Instant visual receipt breakdown showing balance impact, vibe score shift, and witty feedback.
7. **End-of-Round Recap**:
   - Final balance & total expenditure breakdown.
   - Financial Archetype diagnosis (e.g., *"The Weekend Millionaire"*, *"Odogwu on Budget"*, *"Survival Specialist"*).
   - Key learning takeaway.
8. **Replay & Compare**:
   - Instant replay to test alternate decision branches and compare outcome metrics.
   - Privacy-safe shareable recap card.

---

## 6. Technical Stack & Engineering Requirements
- **Framework**: Next.js 15 (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS with custom theme variables, Lucide React icons.
- **State Management**: Robust deterministic client-side simulation engine (preventing calculation bugs, duplicate transactions, or phantom balances).
- **Responsiveness**: Flawless layout on 320px, 375px, 414px, 768px, and desktop screens.
- **Accessibility**: High contrast ratios, keyboard navigability, clear ARIA labels, reduced motion support.

---

## 7. Success Criteria & Definition of Done
- 100% calculation accuracy across all decision trees.
- 12+ culturally resonant scenarios with branching outcomes.
- Complete responsive loop from onboarding through recap and replay.
- Fully operational simulation demo meeting all UX Design Arena challenge evaluation criteria.
