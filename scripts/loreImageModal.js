// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries

export function loreImageModal(imageSrc, captionText) {
  const modal = document.getElementById('loreModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('modalCaption');

  // Set the modal image source
  modalImg.src = imageSrc;
  // Set the caption text
  caption.textContent = captionText || '[No caption]';

  // Ensure modal is visible
  modal.classList.remove('hidden');
  modal.style.visibility = 'visible';  // Make sure the modal is visible

  // Lock the page scrolling when modal is open
  document.body.style.overflow = 'hidden';

  // Close the modal when clicking the modal background
  modal.addEventListener('click', (e) => {
    // If the click is on the modal background (not the image), close the modal
    if (e.target === modal) {
      modal.classList.add('hidden'); // Hide modal when clicking the background
      document.body.style.overflow = ''; // Restore page scroll
    }
  });

  // Optional: Close the modal when clicking on the image itself as a button (additional usability)
  modalImg.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore page scroll
  });
}
