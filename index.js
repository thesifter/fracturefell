// index.js
import { releaseZergling } from './scripts/zerglings.js'; // Import Zergling release logic (named export)
import { initScareZone } from './scripts/gifscare.js'; // Import Scare Zone initialization (named export)
import { initGlitchEffect } from './scripts/glitch.js'; // Import Glitch effect logic (named export)
import { initLoreImageModal } from './scripts/loreImageModal.js'; // Import Lore Image Modal (named export)
import { initDevMode } from './scripts/devMode.js'; // Import Dev Mode setup (named export)
import { fetchAndRenderLoreEntries } from './scripts/loreRenderer.js'; // Import lore rendering (named export)
import './scripts/verbTrigger.js'; // Import the verb trigger logic (no export, just side-effect)


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

// Fetch and Render Lore Entries (moved to loreRenderer.js)
fetchAndRenderLoreEntries(); // Now handled by loreRenderer.js
