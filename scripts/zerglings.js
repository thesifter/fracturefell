 // scripts/zerglings.js

window.FractureFell = window.FractureFell || {};

export function releaseZergling() {
  const id = `zerg-${Date.now()}`;
  window.FractureFell.lastZerg = {
    id,
    timestamp: Date.now()
  };
  console.log(`[zerglings] Releasing ${id}`);

  const zerg = document.createElement('img');
  zerg.src = './images/zerglings/zerg1.gif'; // Make sure the gif exists
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
