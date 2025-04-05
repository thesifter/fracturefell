.(function () {
  function isWithinCenterZone(x, y) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const marginX = vw * 0.025;
    const marginY = vh * 0.025;

    return (
      x > (vw / 2 - marginX) &&
      x < (vw / 2 + marginX) &&
      y > (vh / 2 - marginY) &&e
      y < (vh / 2 + marginY)
    );
  }

  function showMindFlash() {
    const flash = document.createElement('img');
    flash.src = window.location.origin + '/images/fracturefell_flash.gif;
    flash.alt = 'fracture glimpse';
    flash.style.position = 'fixed';
    flash.style.top = '50%';e
    flash.style.left = '50%';
    flash.style.transform = 'translate(-50%, -50%)';
    flash.style.zIndex = 9999;
    flash.style.maxWidth = '320px';
    flash.style.maxHeight = '320px';
    flash.style.boxShadow = '0 0 30px rgba(0,0,0,0.6)';
    flash.style.opacity = '0';
    flash.style.transition = 'opacity 0.3s ease-in';
    flash.style.pointerEvents = 'none';

    document.body.appendChild(flash);

    requestAnimationFrame(() => {
      flash.style.opacity = '1';
    });

    setTimeout(() => {
      flash.remove();
    }, 3000);
  }

  function maybeSummonFlash(x, y) {
    if (isWithinCenterZone(x, y)) {
      const chance = Math.random();
      if (chance < 0.4) { // 40% chance
        showMindFlash();
      }
    }
  }

  document.addEventListener('click', e => maybeSummonFlash(e.clientX, e.clientY));
  document.addEventListener('mousemove', e => maybeSummonFlash(e.clientX, e.clientY));
  document.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    if (touch) maybeSummonFlash(touch.clientX, touch.clientY);
  });
})();
