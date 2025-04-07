// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries

export function initLoreImageModal() {
  const modal = document.createElement('div');
  modal.id = 'loreModal';
  modal.className = 'lore-modal hidden';

  modal.innerHTML = `
    <div class="lore-modal-content">
      <img id="modalImage" src="" alt="Lore image">
      <p id="modalCaption" class="lore-caption"></p>
    </div>
    <div class="lore-modal-close" id="closeModal">✕</div>
  `;

  document.body.appendChild(modal);

  document.addEventListener('click', e => {
    if (e.target.classList.contains('lore-image')) {
      const modalImg = document.getElementById('modalImage');
      const caption = document.getElementById('modalCaption');

      modalImg.src = e.target.src;
      caption.textContent = e.target.closest('.lore-entry')?.querySelector('.lore-caption')?.textContent || '';
      modal.classList.remove('hidden');
    }
  });

  document.addEventListener('click', e => {
    if (e.target.id === 'closeModal' || e.target.id === 'loreModal') {
      modal.classList.add('hidden');
    }
  });
}
