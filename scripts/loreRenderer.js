// scripts/loreRenderer.js
// Handles rendering lore entries into the DOM (v2.1)
// Supports: journal, shortform, image + longform class handling

import { openImageModal } from './loreImageModal.js'; // Import the modal logic specifically for image entries

export function renderLoreEntry(entry) {
  const glitchVariants = ['glitch-1', 'glitch-2', 'glitch-3', 'glitch-4', 'glitch-5'];
  const randomGlitch = () => glitchVariants[Math.floor(Math.random() * glitchVariants.length)];

  const container = document.createElement('div');
  container.classList.add('lore-entry');

  // Add type-based class
  if (entry.type) container.classList.add(`lore-${entry.type}`);
  // Add longform modifier if applicable
  if (entry.longform) container.classList.add('lore-longform');
  // Add ID from slug for routing
  if (entry.slug) container.id = `lore-${entry.slug}`;

  // Title (all types)
  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';
  title.classList.add(randomGlitch());
  container.appendChild(title);

  // Published date
  if (entry.published) {
    const published = document.createElement('div');
    published.classList.add('lore-date');
    published.textContent = formatDate(entry.published);
    container.appendChild(published);
  }

  // Type-specific rendering
  switch (entry.type) {
    case 'shortform': {
      const body = document.createElement('p');
      body.innerHTML = (entry.full || '[No content]').replace(/\n/g, '<br>');
      container.appendChild(body);
      break;
    }

    case 'image': {
      // Thumbnail for the list view
      const thumb = document.createElement('img');
      thumb.classList.add('lore-image-thumb');
      thumb.src = entry.image || `./images/${entry.slug}.jpg`;
      thumb.alt = entry.title || 'Lore image thumb';
      container.appendChild(thumb);

      // Click event for opening the full-size image in the modal
      thumb.addEventListener('click', () => {
        // Open the modal with the full-size image
        openImageModal(entry.image || `./images/${entry.slug}.jpg`, entry.content);
      });

      // Don't add full-size image to the list view
      const img = document.createElement('img');
      img.classList.add('lore-image');
      img.src = entry.image || `./images/${entry.slug}.jpg`;
      img.alt = entry.title || 'Lore image';

      img.onload = () => {
        // The full-size image will only be added to the modal when clicked, not in the list
      };

      img.onerror = () => {
        console.warn(`[loreRenderer] Image not found for entry: ${entry.slug}`);
      };

      break;
    }

    case 'journal':
    default: {
      const content = document.createElement('p');
      content.textContent = entry.content || '[No content provided]';
      container.appendChild(content);
      break;
    }
  }

  // Tags
  if (entry.tags && Array.isArray(entry.tags)) {
    const tags = document.createElement('div');
    tags.classList.add('lore-tags');
    tags.textContent = entry.tags.map(tag => `#${tag}`).join(' ');
    container.appendChild(tags);
  }

  return container;
}

// Helper function to format published date
function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return '[invalid date]';
  }
}
