// scripts/verbTrigger.js

const DEV_MODE = window.location.search.includes('ritual=dev');
const verbTrigger = document.getElementById('verbTrigger');

let verbs = [];
let currentIndex = 0;

if (verbTrigger) {
  fetch('./data/verbs.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {
      verbs = shuffleArray(data);
      rotateVerb();
      setInterval(rotateVerb, 4000); // Rotate every 4 seconds
    })
    .catch(err => {
      console.error('[verbTrigger] Failed to load verbs.json', err);
    });

  verbTrigger.addEventListener('click', () => {
    if (DEV_MODE) console.log('[verbTrigger] Clicked!');
    import('./flashSequence.js')
      .then(mod => {
        if (DEV_MODE) console.log('[verbTrigger] Launching flash sequence.');
        mod.initFlashSequence();
      });
  });
}

function rotateVerb() {
  if (!verbs.length) return;

  const { text, charged, type } = verbs[currentIndex];
  verbTrigger.textContent = text;
  verbTrigger.dataset.type = type;
  verbTrigger.dataset.charged = charged;

  // Apply visual flair to charged verbs
  if (charged) {
    verbTrigger.classList.add('charged');
  } else {
    verbTrigger.classList.remove('charged');
  }

  currentIndex = (currentIndex + 1) % verbs.length;
}

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
