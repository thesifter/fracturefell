// scripts/loreModal.js
// Handles general modal functionality (open/close behavior, scroll locking)

export function loreModal(content) {
    // Create modal div
    const modal = document.createElement('div');
    modal.id = 'loreModal';
    modal.className = 'lore-modal hidden'; // Initially hide the modal
  
    // Create modal content wrapper
    const modalContent = document.createElement('div');
    modalContent.className = 'lore-modal-content';
    modalContent.appendChild(content); // Inject the passed content (could be image, text, etc.)
  
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
      if (e.target.id === 'loreModal') {
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
  
    // Show the modal and lock body scroll
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  