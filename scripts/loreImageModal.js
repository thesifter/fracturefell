// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries (v2 MacGuffin-Proof)

export function initLoreImageModal() {
  const modal = document.createElement('div');
  modal.id = 'loreModal';
  modal.className = 'lore-modal hidden';

  modal.innerHTML = `
    <div class="lore-modal-content">
      <img id="modalImage" src="" alt="Lore image"> <!-- Placeholder for the full-size image -->
      <p id="modalCaption" class="lore-caption"></p> <!-- Placeholder for the image caption -->
    </div>
    <div class="lore-modal-close" id="closeModal" title="Close">✕</div>
  `;

  document.body.appendChild(modal);

  // Image click handler for thumbnails
  document.addEventListener('click', e => {
    // Check if the clicked element is a thumbnail (lore-image-thumb)
    if (e.target.classList.contains('lore-image-thumb')) {
      const modalImg = document.getElementById('modalImage'); // Get the modal image element
      const caption = document.getElementById('modalCaption'); // Get the caption element in the modal

      // Preload the full-size image to avoid flash of unstyled or broken images
      const preload = new Image();  // Create a new Image object for preloading
      preload.onload = () => {
        // Once the image is successfully loaded, set the source of the modal image
        modalImg.src = preload.src;

        // Set the caption to the one associated with the lore entry, if available
        caption.textContent =
          e.target.closest('.lore-entry')?.querySelector('.lore-caption')?.textContent || ''; // Default to empty if no caption

        // Reset the display property to make sure the image shows correctly
        modal.classList.remove('hidden'); // Show the modal by removing the 'hidden' class
        modalImg.style.display = 'block';  // Make sure the image is visible
        document.body.style.overflow = 'hidden'; // Lock the scroll of the body while the modal is open
      };

      preload.onerror = () => {
        console.warn(`[LoreModal] Failed to load image: ${e.target.src}`); // Log the error in the console
        modalImg.src = ''; // Clear the previous image source if there was an error
        caption.textContent = '⚠️ Image not available.'; // Display a fallback message in the caption
        modal.classList.remove('hidden'); // Show the modal even with an error
        document.body.style.overflow = 'hidden'; // Lock the scroll even if there's an error
      };

      preload.src = e.target.src;  // Set the image source for the preloaded image
    }
  });

  // Close modal when clicking the close button or outside the modal content
  document.addEventListener('click', e => {
    if (e.target.id === 'closeModal' || e.target.id === 'loreModal') {
      document.getElementById('loreModal').classList.add('hidden'); // Hide the modal by adding the 'hidden' class
      document.body.style.overflow = ''; // Restore the scroll behavior of the page
    }
  });
}
