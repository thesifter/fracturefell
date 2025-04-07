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
import './scripts/verbTrigger.js';
import { initDevMode } from './scripts/devMode.js';
import { initLoreImageModal } from './scripts/loreImageModal.js';
initLoreImageModal();
// Initialize dev mode, if applicable
document.addEventListener('DOMContentLoaded', () => {
  initDevMode();
});

