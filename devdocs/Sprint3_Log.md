# 📓 FractureFell – Sprint 3 Log

## 🧟 Theme
> From Blob to Bug: Shipping the First Real Zergling

---

## ✅ COMPLETED

- 🔥 Final Zergling walk cycle created (6 frames)
  - Transparent PNGs, centered in 128×128 canvas
  - Assembled into GIF using browser-based workflow
  - Frame cleanup and transparency verification done manually
- 🔥 Replaced `ff1.png` placeholder with actual animated bug
- 🧪 Verified scurry behavior with CSS transition
  - Scurries left → right
  - Positioned with `bottom: 32px`
  - No longer hugging the bottom edge awkwardly
- 🎨 `.zergling` class added with:
  - `image-rendering: pixelated`
  - `width: 128px`, `height: 128px`
  - `position: fixed`, `z-index: 10000`
- 👁️ Zergling scaled to be large and terrifying on screen
  - Confirmed visible & cursed in deployed build
- 🎉 Patch release: `v0.1.1` ("Zergling Rises – Walk Cycle Deployed")

---

## 💡 LEARNINGS

- GIF transparency is a spiritual journey
- Sprite sheets are dark magic; transparency is even darker
- Pixel-perfect alignment matters for loop flow
- GitHub UI-only workflows are viable — but make you suffer first

---

## 📦 BACKLOG

| Priority | Task |
|----------|------|
| 🧠 P2 | Add behavior variants (random spawn, orbit, buzz) |
| 🧠 P2 | Implement transform scaling for perspective creep |
| ✨ P3 | Tint overlays for Zergling states (e.g. `zergling--cursed`) |
| ✨ P3 | Ritual-triggered bug types |
| 🧼 P3 | Refactor Zergling logic into configurable object system |

---

## 🧭 NEXT STEPS

- Continue building behavior layer for Zerglings
- Hook into lore state or user interaction
- Consider adding test scaffold for GIF presence / rendering

---

## 🐛 Demo Reactions

> “Big, giant, tall, scary boy walking across the bottom.”
>
> “I just got scared by my own dev asset. Working as intended.”

