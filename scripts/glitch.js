// scripts/glitch.js
// Expose glitch as a module

export function initGlitchEffect() {
  // Assuming glitch functionality is related to some DOM manipulation or animations

  console.log('[glitch] Glitch effect initialized.');

  // Add your glitch effect logic here, like adding event listeners, manipulating the DOM, etc.
  // Example: A basic hover effect that adds a glitch class to a DOM element
  const elements = document.querySelectorAll('.glitch-element');
  
  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('glitch');
    });

    element.addEventListener('mouseleave', () => {
      element.classList.remove('glitch');
    });
  });
}
