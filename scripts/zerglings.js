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
  const spriteSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAASCAYAAABuQKz0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABt0lEQVRoge2WQU7DQAyGG3//p5iLGDjaXTqKbVdD1WmDLp8g6fsCa5X6CHbhvNSzOSBIx4CyIjUMqAwQZAxQSAZYZ+qFt4XO/cFvbg54mlyPVrS9aNzBi15VaEZF0QvQFZKV+nT5GRm54RBg1HdFhZWlxogmExLZqd2HVbPzH3KUSmYOskKJt9SMIRFeRgG8jvPXiVz7KM4cySD2BoDukHzc6NpaEv7YymmgZCRBvYv5MLZG5NRuhMhsZ5pnp1v50NUCYaPlc1w+GyZ7JcSwWrUopVdEaHkHUpZT1RaxEa07MkZ4XLKo3/5jR8/3g03hZmRXABDWjIatG8W8+RJAKfYmp8JFxrwqRAPfJSzJrIqjWNHtS3D+yptAY+5d34S6PNHeuuhgfNj6ntEvVSTZ2XFLZxyKM+SyZFMKvY7w99GLx4JACiUbqAAAAAElFTkSuQmCC';

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

