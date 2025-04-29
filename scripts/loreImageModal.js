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

  // Function to close the modal
  function closeModal() {
    modal.classList.add('hidden'); // Hide the modal
    document.body.style.overflow = ''; // Restore body scroll
    // Remove event listeners to avoid duplication
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscapeKey);
  }

  // Click event to close modal when clicking outside the modal content
  function handleClickOutside(e) {
    // If you click on the background (loreModal) or the image itself
    if (e.target.id === 'loreModal' || e.target.id === 'modalImage') {
      closeModal();
    }
  }

  // Keydown event to close modal when pressing Escape key
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  // Attach event listeners
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);

  // Make sure the image is visible when the modal is shown
  modal.classList.remove('hidden');
  modalImg.style.display = 'block'; // Ensure the image is visible
  modalImg.style.visibility = 'visible'; // Ensure the image is visible

  // Lock the body scroll when the modal is open
  document.body.style.overflow = 'hidden';
}
