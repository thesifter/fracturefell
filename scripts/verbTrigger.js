// scripts/verbTrigger.js
// Handles dynamic verb rotation + dev-triggered flash sequences

document.addEventListener('DOMContentLoaded', () => {
  const DEV_MODE = window.location.search.includes('ritual=dev');
  const verbTrigger = document.getElementById('verb-trigger');

  if (!verbTrigger) {
    if (DEV_MODE) console.warn('[verbTrigger] #verbTrigger not found in DOM.');
    return;
  }

  let verbs = [];
  let currentIndex = 0;

  // Fetch verbs and start rotation
  fetch('./data/verbs.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {
      verbs = shuffleArray(data);
      rotateVerb(); // Initial render
      setInterval(rotateVerb, 4000); // Update every 4 seconds
    })
    .catch(err => {
      console.error('[verbTrigger] Failed to load verbs.json', err);
    });

  // Click behavior
  verbTrigger.addEventListener('click', () => {
    if (DEV_MODE) console.log('[verbTrigger] Clicked!');
    import('./flashSequence.js')
      .then(mod => {
        if (DEV_MODE) console.log('[verbTrigger] Launching flash sequence.');
        mod.initFlashSequence();
      })
      .catch(err => {
        console.error('[verbTrigger] Failed to load flashSequence.js', err);
      });
  });

  // Swap the verb content
  function rotateVerb() {
    if (!verbs.length) return;

    const { text, charged, type } = verbs[currentIndex];
    verbTrigger.textContent = text;
    verbTrigger.dataset.type = type;
    verbTrigger.dataset.charged = charged;

    // Visual styling
    verbTrigger.classList.toggle('charged', charged);

    currentIndex = (currentIndex + 1) % verbs.length;
  }

  // Utility: Fisher-Yates shuffle
  function shuffleArray(array) {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
});
