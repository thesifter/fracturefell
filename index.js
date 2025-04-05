import { initFlashSequence } from './scripts/flashSequence.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isRitualDev = urlParams.get('ritual') === 'dev';

  if (isRitualDev) {
    initFlashSequence();
  }
});
