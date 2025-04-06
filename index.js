
import { initVerbTrigger } from './scripts/verbTrigger.js';


document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isRitualDev = urlParams.get('ritual') === 'dev';

  if (!isRitualDev) return;

  fetch('./data/flash_data.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {
      initVerbTrigger(data.verbs || []);
    });
});
const DEV_MODE = window.location.search.includes('ritual=dev');

if (DEV_MODE) {
  fetch('./data/lore.json?v=' + Date.now())
    .then(res => res.json())
    .then(lore => {
      console.log(`[lore] Loaded ${lore.length} entries`);
      lore.forEach(entry => {
        console.log(`[lore] ID: ${entry.id}`);
        console.log(`[lore] Title: ${entry.title}`);
        console.log(`[lore] Type: ${entry.type}`);
        console.log(`[lore] Tags: ${entry.tags.join(', ')}`);
        console.log('–––––');
      });
    })
    .catch(err => {
      console.error('[lore] Failed to load or parse lore.json:', err);
    });
}

