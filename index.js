import { initFlashSequence } from './scripts/flashSequence.js';
import { initVerbTrigger } from './scripts/verbTrigger.js';


document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isRitualDev = urlParams.get('ritual') === 'dev';

  if (!isRitualDev) return;

  fetch('./data/flash_data.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {
      initVerbTrigger(data.verbs || []);
      initFlashSequence();
    });
});

