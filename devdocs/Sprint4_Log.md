## 📜 Sprint Log 004 – *"The Glyph Opens"*
**Date:** 7 Apr 2025  
**Codename:** *MacGuffin Protocol*  
**Phase:** Lore Expansion & Renderer Clarity

---

### ✅ Completed

- **Lore Rendering Engine v2**
  - Entries now render by declared `type`: `journal`, `shortform`, `image`
  - Clean field mapping from `lore.json` to visual block
  - Added `slug`, `longform`, and `trigger` support

- **Glitch Enhancements**
  - Five unique glitch styles, randomly applied per entry title
  - Hover-only activation (retains readability)

- **Image Entry Rework**
  - Loads from explicit `image:` path or falls back to `slug.jpg`
  - Fallback-aware rendering: caption hidden if image fails

- **CSS Reconciled**
  - `.lore-entry` and `h2` deduplicated and centralized
  - Paragraph consistency enforced
  - Styling prep for future `.lore-longform` expansion

- **Release `v1.1.0` Shipped**
  - Snapshot of renderer maturity
  - Milestone: FractureFell's lore system becomes structured, extensible, alive

---

### 🌱 In Progress

- Spec for dual-state rendering (`preview` vs `expanded`)
- Draft interaction model for `?entry=slug` routing
- Trigger hooks (`spawn.zerg`, `flash.ritual`, etc) queued for activation logic

---

### 🧠 Learnings

- Data model is clean — what matters now is **how we wield it**
- Transparency edge cases (broken image = broken layout)
- Entry UX must reflect *ritual status* ("this isn't just a blog post")
- Glitch must never be default — it must be **invoked**

---

### 🎯 Next Sprint Focus

1. **Expand Entry Model**  
   - Separate `preview` from `expanded` states
   - Linkable anchors, modals, deep reveals

2. **Trigger Bindings**  
   - Make lore spawn things. Let entries affect the world.

3. **Zerg QA**  
   - Now that MVP works, tune pacing, scale, and lore integration

---

_"The glyph was never meant to be read. It was meant to be rendered."_

