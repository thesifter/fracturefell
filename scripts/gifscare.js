// gifscare.js – Scaretest-Bonewave v3

export function initScareZone() {
  // 🧱 SCARE ZONE SETUP
  const scareZone = document.createElement('div');
  scareZone.style.position = 'fixed';
  scareZone.style.top = '47.5%';
  scareZone.style.left = '47.5%';
  scareZone.style.width = '5%';
  scareZone.style.height = '5%';
  scareZone.style.zIndex = '9999';
  scareZone.style.pointerEvents = 'auto'; // ensure it registers hover

  // Temporary invisible trigger area
  // TODO: This is a placeholder for now until we implement the Zerg trigger.
  // The Zerg trigger (interactive, fun experience) will replace this invisible trigger in a future release.
  const invisibleTrigger = document.createElement('div');
  invisibleTrigger.style.position = 'fixed';
  invisibleTrigger.style.bottom = '0';
  invisibleTrigger.style.left = '0';
  invisibleTrigger.style.width = '50px';
  invisibleTrigger.style.height = '50px';
  invisibleTrigger.style.zIndex = '10000'; // Ensure it’s above content
  invisibleTrigger.style.pointerEvents = 'auto'; // Register interaction

  document.body.appendChild(invisibleTrigger);

  // 🎲 RANDOMIZED JUMPSCARE (40% chance)
  function triggerGIF() {
    if (Math.random() < 0.4) {
      const img = document.createElement('img');
      img.src = './images/fracturefell_flash.gif';
      img.style.position = 'fixed';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100vw';
      img.style.height = '100vh';
      img.style.zIndex = '10000';
      img.style.pointerEvents = 'none'; // prevent blocking interaction

      document.body.appendChild(img);

      // Remove after 1.5s
      setTimeout(() => img.remove(), 1500);
    }
  }

  // Listen for mouse hover (desktop) on the invisible trigger area
  invisibleTrigger.addEventListener('mouseenter', triggerGIF);

  // Listen for touch on mobile (add touch event for mobile)
  invisibleTrigger.addEventListener('touchstart', triggerGIF);

  // 🔊 SOUND BAIT ("Noise" Element) CLICK TRIGGER
  const bait = document.getElementById('soundbait');
  if (bait) {
    const audio = new Audio('./sounds/static_click.mp3');
    bait.addEventListener('click', () => {
      audio.play();
    });
  }
}

// Initialize Scare Zone after DOM content is loaded
document.addEventListener('DOMContentLoaded', initScareZone);
