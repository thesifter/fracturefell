// scripts/loreImageModal.js
// Handles fullscreen modal for lore image entries (v2 MacGuffin-Proof)

export function initLoreImageModal() {
  // Create the modal element dynamically
  const modal = document.createElement('div');
  modal.id = 'loreModal'; // Assign an ID for the modal
  modal.className = 'lore-modal hidden'; // Initially hide the modal using the 'hidden' class

  // Add the modal content structure to the modal element
  modal.innerHTML = `
    <div class="lore-modal-content">
      <img id="modalImage" src="" alt="Lore image" style="display: none;"> <!-- Image initially hidden -->
      <p id="modalCaption" class="lore-caption"></p> <!-- Placeholder for the image caption -->
    </div>
    <div class="lore-modal-close" id="closeModal" title="Close">✕</div> <!-- Close button -->
  `;

  // Append the modal to the document body
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

        // Make the modal image visible once it is loaded successfully
        modalImg.style.display = 'block';  // Change display to 'block' to make it visible

        // Show the modal by removing the 'hidden' class
        modal.classList.remove('hidden');

        // Lock the scroll of the body so that the user cannot scroll while the modal is open
        document.body.style.overflow = 'hidden';
      };

      // Error handling in case the image fails to load
      preload.onerror = () => {
        console.warn(`[LoreModal] Failed to load image: ${e.target.src}`); // Log the error in the console
        modalImg.src = ''; // Clear the previous image source if there was an error
        caption.textContent = '⚠️ Image not available.'; // Display a fallback message in the caption
        modalImg.style.display = 'none'; // Ensure the modal image remains hidden if it failed to load
        modal.classList.remove('hidden'); // Show the modal even with an error
        document.body.style.overflow = 'hidden'; // Lock the scroll even if there's an error
      };

      // Set the source of the preload image to the source of the clicked thumbnail
      preload.src = e.target.src;  // Set the image source for the preloaded image
    }
  });

  // Close modal when clicking the close button or outside the modal content
  document.addEventListener('click', e => {
    // Check if the clicked element is the close button or the overlay (background of the modal)
    if (e.target.id === 'closeModal' || e.target.id === 'loreModal') {
      document.getElementById('loreModal').classList.add('hidden'); // Hide the modal by adding the 'hidden' class
      document.body.style.overflow = ''; // Restore the scroll behavior of the page
    }
  });
}
