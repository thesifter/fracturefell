// scripts/devMode.js
import { getFeatureFlags } from './featureFlag.js';
import { renderLoreEntry } from './loreRenderer.js';

export function initDevMode() {
  // Removed feature flag check so this code runs regardless of the flag

  // Logging for debugging purposes
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

  // Render lore entries
  fetch('./data/lore.json?v=' + Date.now())
    .then(res => res.json())
    .then(lore => {
      const container = document.createElement('div');
      container.id = 'lore-container';
      document.body.appendChild(container);

      lore.forEach(entry => {
        const el = renderLoreEntry(entry);
        if (el) container.appendChild(el);
      });
    })
    .catch(err => {
      console.error('[lore] Failed to load lore.json for render:', err);
    });
}
