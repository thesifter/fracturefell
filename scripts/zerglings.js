 // scripts/zerglings.js

window.FractureFell = window.FractureFell || {};

export function releaseZergling() {
  const id = `zerg-${Date.now()}`;
  window.FractureFell = window.FractureFell || {};
  window.FractureFell.lastZerg = {
    id,
    timestamp: Date.now()
  };
  console.log(`[zerglings] Releasing ${id}`);

  const zerg = document.createElement('img');

  // Use the properly formatted base64 string here
 const spriteSrc = 'data:image/png;base64,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';
  
  zerg.src = spriteSrc;


  zerg.src = spriteSrc;
  zerg.classList.add('zergling');

  Object.assign(zerg.style, {
    position: 'fixed',
    bottom: '0',
    left: '-32px',
    width: '24px',
    height: '24px',
    zIndex: 10000,
    pointerEvents: 'none',
    imageRendering: 'pixelated',
    transition: 'left 3.5s linear'
  });

  document.body.appendChild(zerg);

  requestAnimationFrame(() => {
    zerg.style.left = '100vw';
  });

  setTimeout(() => zerg.remove(), 4000);
}

