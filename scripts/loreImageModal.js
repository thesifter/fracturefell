// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries

export function initLoreImageModal() {
  // Build modal DOM
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

  // Handle image click
  document.addEventListener('click', e => {
    if (e.target.classList.contains('lore-image')) {
      const modalImg = document.getElementById('modalImage');
      const caption = document.getElementById('modalCaption');

      // Set modal image and caption
      modalImg.src = e.target.src;
      caption.textContent = e.target.closest('.lore-entry')?.querySelector('.lore-caption')?.textContent || '';

      // Show modal
      modal.classList.toggle('hidden', false);
      document.body.style.overflow = 'hidden'; // lock scroll
    }
  });

  // Close modal on ✕ or background click
  document.addEventListener('click', e => {
    if (e.target.id === 'closeModal' || e.target.id === 'loreModal') {
      modal.classList.toggle('hidden', true);
      document.body.style.overflow = ''; // unlock scroll
    }
  });
}
