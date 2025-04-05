export function initFlashSequence() {
  fetch(`./data/flash_data.json?v=${Date.now()}`)
  .then(response => response.json())
  .then(sequence => {
    setTimeout(() => playFlashSequence(sequence), 500);
  });

}

function playFlashSequence(sequence) {
  const flashOverlay = document.createElement('div');
  
  Object.assign(flashOverlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 99999,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'opacity 0.4s ease',
    opacity: 0,
    pointerEvents: 'none'
  });

  document.body.appendChild(flashOverlay);

  let i = 0;

  function showFrame(item) {
    flashOverlay.innerHTML = '';
    flashOverlay.style.opacity = 1;

    if (item.type === 'image') {
      const img = document.createElement('img');
      Object.assign(img.style, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        objectFit: 'contain',
        marginBottom: '1rem'
      });
      img.src = item.source;
      flashOverlay.appendChild(img);

      if (item.caption) {
        const caption = document.createElement('div');
        caption.textContent = item.caption;
        Object.assign(caption.style, {
          color: 'white',
          fontFamily: 'monospace',
          fontSize: '1.25rem',
          textAlign: 'center'
        });
        flashOverlay.appendChild(caption);
      }
    }

    setTimeout(() => {
      flashOverlay.style.opacity = 0;
      setTimeout(nextFrame, 300); // Fade-out delay between frames
    }, item.duration || 300);
  }

  function nextFrame() {
    if (i < sequence.length) {
      showFrame(sequence[i++]);
    } else {
      flashOverlay.remove();
    }
  }

  nextFrame();
}
