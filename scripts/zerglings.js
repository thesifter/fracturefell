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
 const spriteSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8k/JiAAAAWlBMVEX///8AAAB9fnB2Wm7+yv1IUD0kQSZ3z6o0yUeot/lfKD1lP0m2fJSVgSo9O0d3Zk0gXP0L3n0XbQu1r1ShcHkm3rnxhK8QDJwOBhZnI2Fd+dRVwBCfNHTUdxubmMT+aH6urB2HqXvgp1r64D64Y0A5nrfZm5u+zwVJcC8cZmDEIoH1ppGv4bZV5nbPTq6FL1ZGmiLDX0d1FbWvG44mNC7g8V1tZk43fN5g7zYLB2E5ZqNKb2T7wy0xGQ2bFj9FVbwZjrCZyrlm6W5pK4w7BchIt6WqRINP6SdxOmyqv7V0gBHzUbqAAAAAElFTkSuQmCC';

  
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

