document.querySelectorAll('p').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('glitched');
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('glitched');
  });
});
