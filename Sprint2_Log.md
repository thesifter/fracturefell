# 📓 FractureFell – Sprint 2 Log

## 🚨 Spike Summary: Zergling Sprite Incident

### ❌ The Spike:
- Attempted CSS sprite sheet animation for Zergling
- Ran into alignment bugs, vertical clipping, frame overshoot
- Many commits, much confusion, zero working scurry

### 🔄 The Response:
- Rolled back `main` to pre-spike commit using GitHub UI
- Re-established trunk-based development
- Published official release `v0.1.0` – “The Zerg Reckoning”
- Included cursed sprite binary as a warning to all

---

## ✅ Sprint Completed
- Rollback of broken Zergling animation spike
- Confirmed dev mode and loreRenderer stability
- Repaired GitHub Pages delivery
- Set new default branch and branch protections
- Release created with stable codebase + assets snapshot

## 📦 Release:
- `v0.1.0` — "Zerg Spike Rolled Back – Clean Trunk Restored"
- GitHub Pages now serves clean `main`
- All systems verified operational post-reset

## 🔍 Lessons Learned:
- Test sprites in visual debug mode before animating
- Branch early for spikes, even in solo dev flow
- Rollback via GitHub UI is survivable with care

## 🧭 Next Steps:
- Drop in a simple GIF Zergling for now
- Begin lore linking logic (modal or routed)
- Create lightweight testing harness (smoke tests, flag checks)
- Define preflight checklist before major branches land in `main`
