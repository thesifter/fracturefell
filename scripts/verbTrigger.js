export function initVerbTrigger(verbs) {
  if (!verbs.length) return;

  let currentVerb = 0;

  const verbTrigger = document.createElement('div');
  verbTrigger.id = 'verbTrigger';
  verbTrigger.textContent = verbs[currentVerb];
  Object.assign(verbTrigger.style, {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: '1rem',
    zIndex: 9999,
    cursor: 'pointer',
    background: 'rgba(0,0,0,0.2)',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    transition: 'opacity 0.3s ease'
  });

  document.body.appendChild(verbTrigger);

  // Cycle verbs
  setInterval(() => {
    currentVerb = (currentVerb + 1) % verbs.length;
    verbTrigger.textContent = verbs[currentVerb];
  }, 2000);

  // Ritual activation
  verbTrigger.addEventListener('click', () => {
    import('./flashSequence.js').then(mod => {
      mod.initFlashSequence();
    });
  });
}
