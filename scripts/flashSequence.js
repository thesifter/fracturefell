console.log('[flashSequence] Module loaded.');

export function initFlashSequence() {
  console.log('[flashSequence] Flash ritual begins.');

  fetch(`./data/flash_data.json?v=${Date.now()}`)
    .then(response => {
      console.log('[flashSequence] JSON fetch successful');
      return response.json();
    })
    .then(data => {
      if (!data || !data.sequence || !Array.isArray(data.sequence)) {
        console.warn('[flashSequence] Invalid or missing sequence data');
        return;
      }

      console.log(`[flashSequence] Loaded sequence with ${data.sequence.length} frames`);
      setTimeout(() => {
        console.log('[flashSequence] Initiating playFlashSequence...');
        playFlashSequence(data.sequence);
      }, 500);
    })
    .catch(err => {
      console.error('[flashSequence] Failed to fetch or parse JSON:', err);
    });
}

function playFlashSequence(sequence) {
  console.log('[playFlashSequence] Started.');

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
    if (!item) {
      console.warn(`[flashSequence] No item at index ${i - 1}`);
      return;
    }

    console.log(`[frame] Showing frame ${i} — source: ${item.source}`);
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

      img.onload = () => {
        console.log(`[frame] Image loaded: ${item.source}`);
      };

      img.onerror = () => {
        console.warn(`[frame] Failed to load image: ${item.source}`);
      };

      flashOverlay.appendChild(img);

      if (item.caption) {
        console.log(`[frame] Caption: ${item.caption}`);
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
    } else {
      console.warn(`[frame] Unsupported item type: ${item.type}`);
    }

    setTimeout(() => {
      flashOverlay.style.opacity = 0;
      setTimeout(nextFrame, 300); // Fade-out delay
    }, item.duration || 300);
  }

  function nextFrame() {
    if (i < sequence.length) {
      showFrame(sequence[i++]);
    } else {
      console.log('[flashSequence] Sequence complete. Removing overlay.');
      flashOverlay.remove();
    }
  }

  nextFrame();
}
