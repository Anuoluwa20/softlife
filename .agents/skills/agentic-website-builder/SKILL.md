---
name: agentic-website-builder
description: >-
  Autonomous, research-driven website building workflow orchestrator. Use this skill when the user wants to build a new website, redesign or revamp an existing site, create a brand-led product experience, or execute the 7-stage agent-based website building workflow (Discovery & Project Brain / SKU, Competitor & Award Research, Visual Reference Library, Interaction & Motion Intelligence, Brand & Logo Exploration, Production Build Layers, and Autonomous Project Management with periodic Observer progress updates).
version: 1.0.0
---

# Agent-Based Website Building Workflow

An autonomous, research-driven website building system that transforms a high-level outcome or goal into a fully researched, meticulously designed, and production-ready website.

## Core Philosophy

The user provides **one clear outcome**. An autonomous **Project Manager (PM) Agent** acts as the persistent central brain: it conducts initial discovery, produces the foundational project specification artifact (the "SKU" or Project Brain), delegates work to specialized research and production agents, and continuously surfaces heartbeat progress updates without burdening the user with micromanagement.

```
User Goal
   │
   ▼
[Stage 01] Project Manager / Discovery Agent ──► Project Knowledge / Spec ("SKU")
   │
   ▼
[Stage 02] Competitive & Inspiration Agent   ──► Competitor Map + Award-Winning Research
   │
   ▼
[Stage 03] Website Inspiration Agent         ──► Large Visual Reference Library (Target: 500)
   │
   ▼
[Stage 04] Interaction & Motion Expert       ──► Categorized Motion & Micro-Interaction Library
   │
   ▼
[Stage 05] Brand & Logo Exploration Agent    ──► Logo Typologies + Creative Directions
   │
   ▼
[Stage 06] Production / Build Agents         ──► Website Code, Interactions, Brand Deliverables
   │
   ▼
[Stage 07] Autonomous PM & Observer Cadence  ──► Periodic Status (every ~5 min) & State Tracking
```

---

## The 7 Stages at a Glance

| Stage | Role / Agent | Primary Input | Primary Output Artifact |
| :--- | :--- | :--- | :--- |
| **01** | **Project Manager / Discovery** | User high-level goal, existing site/company info | `docs/project-knowledge-sku.md` (Project Brain) |
| **02** | **Competitive & Inspiration** | Project Brain (`SKU`) | `research/competitor-landscape.md` |
| **03** | **Website Inspiration** | Project Brain + Competitor Map | `research/visual-reference-library.md` (Target ~500 refs) |
| **04** | **Interaction & Motion Expert** | Project Brain + Visual references | `research/interaction-motion-library.md` |
| **05** | **Brand / Logo Exploration** | Brand context + Project requirements | `research/brand-logo-directions.md` |
| **06** | **Production & Build Agents** | All research artifacts & component tokens | Production website code, pages, motion & styling |
| **07** | **Autonomous PM & Observer** | Ongoing project status & agent coordination | Regular progress reports (every ~5 mins) + project state |

See [references/stages.md](./references/stages.md) for full prompt templates and operational details for each stage.

---

## Operational Guidelines for the Orchestrator

When this skill is activated, you assume the role of the **Autonomous Project Manager**. Adhere to these principles:

### 1. Maintain the Central Brain
- Never proceed into execution without Stage 01's Project Knowledge artifact (`project-knowledge-sku.md`).
- Pass the Project Brain as the immutable context anchor to every delegated subagent or phase.
- Ensure all artifacts are recorded persistently in `docs/` and `research/` directories.

### 2. Autonomous Stage Progression
- Advance stages sequentially as prerequisite artifacts are validated.
- Do not ask the user for trivial confirmations or status queries. Escalate **only** when a genuine strategic fork or approval is required (e.g., approving brand creative directions or sign-off on final design system before full production).

### 3. Observer & Heartbeat Progress Cadence
- Keep the user informed through concise updates approximately every 5 minutes (or 2-minute status checkpoints if running long background tasks).
- Format each progress update to answer the 5 core questions:
  1. **What is happening?**
  2. **What has been completed?**
  3. **What is currently running?**
  4. **What is next?**
  5. **Is anything blocked or waiting for a decision?**
- Use the standard project state tags:
  * `[Discovery complete]`
  * `[Competitor research complete]`
  * `[Research in progress]`
  * `[Interaction research in progress]`
  * `[Production started]`
  * `[Blocked]` (if input or credentials required)

See [references/observer.md](./references/observer.md) for the exact notification format and status definitions.

---

## Detailed Reference Documentation

- **[Stage-by-Stage Runbook & Agent Delegation](./references/stages.md)**: Deep dive into agent prompts, discovery checklists, research parameters, and production layers.
- **[Artifact Specs & Output Templates](./references/artifacts.md)**: Schema and Markdown templates for the SKU, competitor matrices, interaction catalogs, and brand boards.
- **[Observer & Progress Reporting System](./references/observer.md)**: Heartbeat cadences, observer rules, and sample user-facing status messages.
