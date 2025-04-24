// index.js
// Main entrypoint for FractureFile frontend behaviors

import './scripts/loreRenderer.js'; // Self-inits on load
import { releaseZergling } from './scripts/zerglings.js'; // Active behavior, runs now
import { initScareZone } from './scripts/gifscare.js'; // Needs explicit init
import { initGlitchEffect } from './scripts/glitch.js'; // Needs DOM to be ready
import { initDevMode } from './scripts/devMode.js'; // Dev-only, post-load
import './scripts/verbTrigger.js'; // Assumed passive behavior

// Init Zergling immediately (side-effect module)
releaseZergling();

// Init Scare Zone
initScareZone();

// DOM-dependent inits
document.addEventListener('DOMContentLoaded', () => {
  initGlitchEffect();
  initDevMode();
});
