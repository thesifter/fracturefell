// index.js
import './scripts/verbTrigger.js';
import { renderLoreEntry } from './scripts/loreRenderer.js';
  // Zergs
import { releaseZergling } from './scripts/zerglings.js';
releaseZergling(); // fires once when dev loads
import { initScareZone } from './scripts/gifscare.js';
initScareZone(); // Initialize the scare zone
import { initGlitchEffect } from './scripts/glitch.js';
// Call the function to initialize the glitch effect
document.addEventListener('DOMContentLoaded', () => {
  initGlitchEffect();
});

const DEV_MODE = window.location.search.includes('ritual=dev');

if (DEV_MODE) {
  // 🧾 Log-only fetch for debugging + lore summary
  fetch('./data/lore.json?v=' + Date.now())
    .then(res => res.json())
    .then(lore => {
      console.log(`[lore] Loaded ${lore.length} entries`);
      lore.forEach(entry => {
        console.log(`[lore] ID: ${entry.id}`);
        console.log(`[lore] Title: ${entry.title}`);
        console.log(`[lore] Type: ${entry.type}`);
        if (entry.tags) {
          console.log(`[lore] Tags: ${entry.tags.join(', ')}`);
        }
        console.log('–––––');
      });
    })
    .catch(err => {
      console.error('[lore] Failed to load or parse lore.json:', err);
    });

  // 🧱 Render entries into #lore-container
  fetch('./data/lore.json?v=' + Date.now())
    .then(res => res.json())
    .then(lore => {
      const container = document.createElement('div');
      container.id = 'lore-container';
      document.body.appendChild(container);

      lore.forEach(entry => {
        const el = renderLoreEntry(entry);
        if (el) container.appendChild(el); // ✅ Avoids error if undefined
      });
    })
    .catch(err => {
      console.error('[lore] Failed to load lore.json for render:', err);
    });
  
}
