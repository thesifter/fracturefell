// scripts/loreShortformModal.js
// Handles modal for shortform entries (using loreModal as base)

import { loreModal } from './loreModal.js';

export function loreShortformModal(title, content, thumbnail) {
  // Create shortform content wrapper (text and possibly thumbnail)
  const contentElement = document.createElement('div');
  
  // Title
  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('lore-modal-title');
  modalTitle.textContent = title;
  
  // Shortform content (text)
  const modalContent = document.createElement('p');
  modalContent.classList.add('lore-modal-content');
  modalContent.textContent = content;
  
  // Optionally, add thumbnail if provided
  if (thumbnail) {
    const modalThumbnail = document.createElement('img');
    modalThumbnail.classList.add('lore-thumbnail');
    modalThumbnail.src = thumbnail;
    modalThumbnail.alt = 'Thumbnail';
    
    // Append thumbnail and content to the modal content wrapper
    contentElement.appendChild(modalThumbnail);
  }
  
  // Append title and content to contentElement
  contentElement.appendChild(modalTitle);
  contentElement.appendChild(modalContent);
  
  // Use the base loreModal to create the modal with the content
  const modal = loreModal(contentElement);

  return modal;
}
    