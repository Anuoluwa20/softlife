# Observer & Progress Notification System

The Progress / Observer Agent serves as the visibility and heartbeat layer of the Agent-Based Website Building Workflow. It ensures the user stays continuously informed of project progress without needing to manually query individual agents.

---

## 1. Notification Cadence

- **Primary User Update Cadence**: Approximately every **5 minutes** during active execution.
- **Heartbeat Check**: If long-running subagent tasks or builds are active, internal health checks can occur every **2 minutes**, but user-facing messages should consolidate meaningful progress rather than generate noise.
- **Immediate Event-Driven Triggers**:
  - Completion of any major stage (Stage 01 through Stage 06).
  - Escalation when user input or approval is genuinely required.
  - Unexpected blockers or build errors.

---

## 2. Core Update Structure

Every observer progress report must clearly and concisely address the following 5 questions:

1. **What is happening?**
   - High-level summary of current operations.
2. **What has been completed?**
   - Specific milestones or artifacts finalized.
3. **What is currently running?**
   - Active subagents, background jobs, or build steps.
4. **What is next?**
   - The immediate next task or stage in the pipeline.
5. **Is anything blocked or waiting for a decision?**
   - Explicit confirmation if all systems are running smoothly or if user action is needed.

---

## 3. Standardized Status Vocabulary

| Status Tag | Operational Meaning |
| :--- | :--- |
| `[Discovery complete]` | Stage 01 finished; `docs/project-knowledge-sku.md` created and validated. |
| `[Competitor research complete]` | Stage 02 finished; `research/competitor-landscape.md` created. |
| `[Research in progress]` | Stages 03/04/05 active; reference websites, motion, or logos are being gathered. |
| `[Interaction research in progress]` | Stage 04 active; micro-interactions and motion libraries being compiled. |
| `[Production started]` | Stage 06 active; all research prerequisites satisfied, code implementation begun. |
| `[Blocked]` | Work paused; awaiting strategic user decision, missing credentials, or API keys. |

---

## 4. Sample Progress Update Formats

### Standard Milestone Report

```markdown
### ⏱️ Website Build Progress Update [Research in progress]

**1. What is happening:**
The Website Inspiration Agent has crawled 35 design benchmarks across Awwwards and Godly, indexing them by layout archetype.

**2. What has been completed:**
- ✅ Project Discovery & Brain (`docs/project-knowledge-sku.md`) finalized.
- ✅ Competitor Landscape Matrix (`research/competitor-landscape.md`) generated with 5 core competitors analyzed.

**3. What is currently running:**
- 🔄 Interaction & Motion Agent scanning micro-interaction patterns for hero section and card reveals.
- 🔄 Visual Reference Library cataloging typography pairings.

**4. What is next:**
- Consolidating Brand & Logo creative directions (Stage 05) and selecting the design token palette.
- Transitioning to Stage 06 (Production Website Build).

**5. Blockers or Decisions Needed:**
- None. System is executing autonomously.
```

### Escalation Report (Strategic Approval Needed)

```markdown
### ⚠️ Website Build Progress Update [Action Required]

**1. What is happening:**
Stage 05 (Brand & Logo Exploration) has completed 3 distinct creative directions. We require your directional sign-off before beginning the Stage 06 Production Build.

**2. What has been completed:**
- ✅ Stages 01 through 05 research artifacts generated.
- ✅ 3 brand palettes and typography tokens mapped in `research/brand-logo-directions.md`.

**3. Decision Needed:**
Which creative direction would you like us to implement?
- **Option A**: *The Precise Architect* (Dark obsidian, electric jade accents, monospaced tech precision)
- **Option B**: *The Editorial Standard* (Warm espresso, tactile alabaster, luxury serif editorial)
- **Option C**: *Vibrant Neo-SaaS* (High-contrast blue/violet, rounded geometry, energetic micro-motion)

Please reply with your choice (or suggest adjustments), and the Autonomous PM will immediately launch Stage 06 production!
```
