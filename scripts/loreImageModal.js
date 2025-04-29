// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries (v2 MacGuffin-Proof)

export function loreImageModal(imageSrc, captionText) {
  // Create modal div
  const modal = document.createElement('div');
  modal.id = 'loreModal';
  modal.className = 'lore-modal hidden'; // Initially hide the modal

  // Create modal content wrapper
  const modalContent = document.createElement('div');
  modalContent.className = 'lore-modal-content';

  // Create image element
  const modalImg = document.createElement('img');
  modalImg.id = 'modalImage';
  modalImg.src = imageSrc;
  modalImg.alt = 'Lore image';

  // Create caption for the image
  const caption = document.createElement('p');
  caption.id = 'modalCaption';
  caption.classList.add('lore-caption');
  caption.textContent = captionText || '[No caption]';

  // Append image and caption to modal content
  modalContent.appendChild(modalImg);
  modalContent.appendChild(caption);

  // Append modal content to modal
  modal.appendChild(modalContent);

  // Append modal to body
  document.body.appendChild(modal);

  // Click event for modal (to close it)
  document.addEventListener('click', e => {
    // If you click on the background (loreModal) or the close button, close the modal
    if (e.target.id === 'loreModal') {
      document.getElementById('loreModal').classList.add('hidden'); // Hide modal
      document.body.style.overflow = ''; // Restore body scroll
    }
  });

  // Make sure the image is visible when the modal is shown
  modal.classList.remove('hidden');
  modalImg.style.display = 'block'; // Ensure the image is visible
  modalImg.style.visibility = 'visible'; // Ensure the image is visible

  // Lock the body scroll when the modal is open
  document.body.style.overflow = 'hidden';
 // Close modal when clicking the close button or outside the modal content
  document.addEventListener('click', e => {
    // Check if the clicked element is the close button or the overlay (background of the modal)
    if (e.target.id === 'closeModal' || e.target.id === 'loreModal' || e.target.id === 'modalImage') {
      document.getElementById('loreModal').classList.add('hidden'); // Hide the modal by adding 'hidden' class
      document.body.style.overflow = ''; // Restore the scroll behavior of the page
    }
  });

  // Close modal on pressing Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('loreModal').classList.add('hidden');
      document.body.style.overflow = ''; // Restore scroll behavior
    }
  });
}
