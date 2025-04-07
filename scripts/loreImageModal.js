// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries (v2 MacGuffin-Proof)

export function initLoreImageModal() {
  const modal = document.createElement('div');
  modal.id = 'loreModal';
  modal.className = 'lore-modal hidden';

  modal.innerHTML = `
    <div class="lore-modal-content">
      <img id="modalImage" src="" alt="Lore image">
      <p id="modalCaption" class="lore-caption"></p>
    </div>
    <div class="lore-modal-close" id="closeModal" title="Close">✕</div>
  `;

  document.body.appendChild(modal);

  // Image click handler
  document.addEventListener('click', e => {
    if (e.target.classList.contains('lore-image')) {
      const modalImg = document.getElementById('modalImage');
      const caption = document.getElementById('modalCaption');

      // Preload image to avoid flash of broken img
      const preload = new Image();
      preload.onload = () => {
        modalImg.src = preload.src;
        caption.textContent =
          e.target.closest('.lore-entry')?.querySelector('.lore-caption')?.textContent || '';
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // lock scroll
      };

      preload.onerror = () => {
        console.warn(`[LoreModal] Failed to load image: ${e.target.src}`);
        modalImg.src = ''; // clear previous src
        caption.textContent = '⚠️ Image not available.';
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      };

      preload.src = e.target.src;
    }
  });

  // Close modal
  document.addEventListener('click', e => {
    if (e.target.id === 'closeModal' || e.target.id === 'loreModal') {
      document.getElementById('loreModal').classList.add('hidden');
      document.body.style.overflow = ''; // restore scroll
    }
  });
}
