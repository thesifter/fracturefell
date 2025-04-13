// index.js
import './scripts/verbTrigger.js'; // Import the verb trigger logic
import { fetchAndRenderLoreEntries } from './scripts/loreRenderer.js'; // Import the function that fetches and renders lore entries
import { releaseZergling } from './scripts/zerglings.js'; // Import Zergling release logic
import { initScareZone } from './scripts/gifscare.js'; // Import Scare Zone initialization
import { initGlitchEffect } from './scripts/glitch.js'; // Import Glitch effect logic
import { initLoreImageModal } from './scripts/loreImageModal.js'; // Import Lore Image Modal
import { initDevMode } from './scripts/devMode.js'; // Import Dev Mode setup

// Initialize Zergling
releaseZergling(); // Fires once when dev loads

// Initialize Scare Zone
initScareZone(); // Initialize the scare zone

// Initialize Glitch Effect
document.addEventListener('DOMContentLoaded', () => {
  initGlitchEffect(); // Initializes glitch effect after DOM content is loaded
});

// Initialize Lore Image Modal
initLoreImageModal(); // Initialize the image modal

// Initialize Dev Mode
document.addEventListener('DOMContentLoaded', () => {
  initDevMode(); // This was previously in devMode.js, now moved here
});
