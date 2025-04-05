// ✨ FINALIZED TEST VERSION: gifscare.js – Scaretest-Bonewave v2

document.addEventListener('DOMContentLoaded', () => {
  //
  // 🧱 SCARE ZONE SETUP
  //
  const scareZone = document.createElement('div');
  scareZone.style.position = 'fixed';
  scareZone.style.top = '47.5%';
  scareZone.style.left = '47.5%';
  scareZone.style.width = '5%';
  scareZone.style.height = '5%';
  scareZone.style.zIndex = '9999';
  scareZone.style.pointerEvents = 'auto'; // ensure it registers hover

  document.body.appendChild(scareZone);

  //
  // 🎲 RANDOMIZED JUMPSCARE (40% chance)
  //
  scareZone.addEventListener('mouseenter', () => {
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
  });

  //
  // 🔊 SOUND BAIT ("Noise" Element) CLICK TRIGGER
  //
  const bait = document.getElementById('soundbait');
  if (bait) {
    const audio = new Audio('./sounds/static_click.mp3');

    bait.addEventListener('click', () => {
      audio.play();
    });
  }
});
