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

  // Create the zergling image
  const zerg = document.createElement('img');

  zerg.src = './images/zergling.gif';  // Make sure this is the correct file name and path

  // Add zergling class
  zerg.classList.add('zergling');

  // Style it to position it and animate it across the screen
  Object.assign(zerg.style, {
    position: 'fixed',
    bottom: '0',
    left: '-32px',
    zIndex: 10000,
    pointerEvents: 'none',
    imageRendering: 'pixelated',
    transition: 'left 3.5s linear'
  });

  // Append it to the body
  document.body.appendChild(zerg);

  // Trigger animation: move it across the screen
  requestAnimationFrame(() => {
    zerg.style.left = '100vw';  // Move to the right side of the screen
  });

  // Remove the zerg after animation ends
  setTimeout(() => zerg.remove(), 4000);
}


