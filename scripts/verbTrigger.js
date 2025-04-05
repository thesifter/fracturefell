export function initVerbTrigger(verbs) {
  if (!verbs.length) return;

  let currentVerb = 0;

  const verbTrigger = document.createElement('div');
  verbTrigger.id = 'verbTrigger';
  verbTrigger.classList.add('verb-sigil');
  verbTrigger.textContent = verbs[currentVerb];

  document.body.appendChild(verbTrigger);
console.log('[verbTrigger] Element added to DOM:', verbTrigger);
  // Cycle verbs
  setInterval(() => {
    currentVerb = (currentVerb + 1) % verbs.length;
    verbTrigger.textContent = verbs[currentVerb];
  }, 2000);

  // Ritual trigger
  verbTrigger.addEventListener('click', () => {
    console.log('[verbTrigger] Clicked!');
    import('./flashSequence.js').then(mod => {
      console.log('import(./flashSequence.js!');
      mod.initFlashSequence();
    });
  });
}
