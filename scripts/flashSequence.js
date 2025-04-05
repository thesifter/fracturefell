export function initFlashSequence() {
  fetch('./data/flash_data.json')
    .then(response => response.json())
    .then(sequence => playFlashSequence(sequence));
}

function playFlashSequence(sequence) {
  const flashOverlay = document.createElement('div');
  flashOverlay.style.position = 'fixed';
  flashOverlay.style.top = 0;
  flashOverlay.style.left = 0;
  flashOverlay.style.width = '100vw';
  flashOverlay.style.height = '100vh';
  flashOverlay.style.zIndex = '99999';
  flashOverlay.style.backgroundColor = '#000';
  flashOverlay.style.display = 'flex';
  flashOverlay.style.justifyContent = 'center';
  flashOverlay.style.alignItems = 'center';
  flashOverlay.style.color = '#fff';
  flashOverlay.style.fontFamily = 'monospace';
  flashOverlay.style.fontSize = '1.5rem';
  flashOverlay.style.textAlign = 'center';
  flashOverlay.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(flashOverlay);

  let i = 0;

  function next() {
    if (i >= sequence.length) {
      flashOverlay.remove();
      return;
    }

    const item = sequence[i];
    flashOverlay.innerHTML = '';

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.source;
      img.style.maxWidth = '100vw';
      img.style.maxHeight = '100vh';
      img.style.objectFit = 'contain';
      flashOverlay.appendChild(img);

      if (item.caption) {
        const caption = document.createElement('div');
        caption.textContent = item.caption;
        caption.style.position = 'absolute';
        caption.style.bottom = '2rem';
        caption.style.width = '100%';
        caption.style.textAlign = 'center';
        caption.style.color = 'white';
        flashOverlay.appendChild(caption);
      }
    }

    i++;
    setTimeout(next, item.duration || 200);
  }

  next();
}
