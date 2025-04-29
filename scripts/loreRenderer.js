// Handles fetching and rendering lore entries into the DOM (v2.2)
// Refactored to accommodate new schema (removes `longform` and `full`, uses `content` and `type`)

import { loreImageModal } from './loreImageModal.js';

function fetchAndRenderLoreEntries() {
  fetch('./data/lore.json?v=' + Date.now())  // Fetching the lore data (adding cache-busting)
    .then(res => res.json())
    .then(lore => {
      if (!Array.isArray(lore)) {
        console.error('Invalid lore data: Expected an array', lore);
        return;
      }

      const container = document.createElement('div');
      container.id = 'lore-container';  // Create a container for the lore entries
      document.body.appendChild(container);

      lore.forEach(entry => {
        if (!entry) {
          console.warn('Skipping invalid lore entry:', entry);
          return;
        }
        const loreElement = renderLoreEntry(entry);  // Render each lore entry
        if (loreElement) container.appendChild(loreElement);  // Append to container
      });
    })
    .catch(err => {
      console.error('[lore] Failed to load lore.json for render:', err);
    });
}

function renderLoreEntry(entry) {
  if (!entry) return null;  // Return null if entry is invalid

  const glitchVariants = ['glitch-1', 'glitch-2', 'glitch-3', 'glitch-4', 'glitch-5'];
  const randomGlitch = () => glitchVariants[Math.floor(Math.random() * glitchVariants.length)];

  const container = document.createElement('div');
  container.classList.add('lore-entry');
  if (entry.type) container.classList.add(`lore-${entry.type}`);  // Add class based on type
  if (entry.slug) container.id = `lore-${entry.slug}`;  // Set ID based on slug

  // Title for the lore entry
  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';  // Default title if missing
  title.classList.add(randomGlitch());  // Add random glitch effect to the title
  container.appendChild(title);

  // Published date (if available)
  if (entry.published) {
    const published = document.createElement('div');
    published.classList.add('lore-date');
    published.textContent = formatDate(entry.published);  // Format date for display
    container.appendChild(published);
  }

  // Handle different content types (shortform, image, journal)
  switch (entry.type) {
    case 'shortform': {
      const shortBody = document.createElement('p');
      shortBody.innerHTML = (entry.content || '[No content]').replace(/\n/g, '<br>');  // Display content for shortform
      container.appendChild(shortBody);
      break;
    }

    case 'image': {
      const thumb = document.createElement('img');
      thumb.classList.add('lore-image-thumb');
      thumb.src = entry.image || `./images/${entry.slug}.jpg`;  // Use image path or default to slug-based image
      thumb.alt = entry.title || 'Lore image thumb';  // Alt text for image
      thumb.addEventListener('click', () => {
        loreImageModal(entry.image || `./images/${entry.slug}.jpg`, entry.content);  // Open modal on click
      });
      container.appendChild(thumb);
      break;
    }

    case 'journal': {
      const content = document.createElement('p');
      content.textContent = entry.content || '[No content provided]';  // Render journal content
      container.appendChild(content);
      break;
    }

    default: {
      const content = document.createElement('p');
      content.textContent = entry.content || '[No content provided]';  // Default content handling
      container.appendChild(content);
      break;
    }
  }

  // Render tags if available
  if (entry.tags && Array.isArray(entry.tags)) {
    const tags = document.createElement('div');
    tags.classList.add('lore-tags');
    tags.textContent = entry.tags.map(tag => `#${tag}`).join(' ');  // Display tags as hashtags
    container.appendChild(tags);
  }

  return container;  // Return the fully rendered entry
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {  // Format date to a more readable format
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '[invalid date]';  // Handle invalid dates gracefully
  }
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderLoreEntries();  // Start rendering lore entries once the DOM is ready
});
