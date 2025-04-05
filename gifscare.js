// ✨ TEST VERSION: gifscare.js – Scaretest-Bonewave
document.addEventListener('DOMContentLoaded', () => {
  const scareZone = document.createElement('div');
  scareZone.style.position = 'fixed';
  scareZone.style.top = '47.5%';
  scareZone.style.left = '47.5%';
  scareZone.style.width = '5%';
  scareZone.style.height = '5%';
  scareZone.style.zIndex = '9999';

  document.body.appendChild(scareZone);

  scareZone.addEventListener('mouseenter', () => {
    const img = document.createElement('img');
    img.src = './images/fracturefell_flash.gif';
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.zIndex = '10000';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 1500);
  });
});
