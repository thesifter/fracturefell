// scripts/loreRenderer.js
// Handles fetching and rendering lore entries into the DOM (v2.1)
// Fully encapsulated, no exports

import { loreImageModal } from './loreImageModal.js';

function fetchAndRenderLoreEntries() {
  fetch('./data/lore.json?v=' + Date.now())
    .then(res => res.json())
    .then(lore => {
      if (!Array.isArray(lore)) {
        console.error('Invalid lore data: Expected an array', lore);
        return;
      }

      const container = document.createElement('div');
      container.id = 'lore-container';
      document.body.appendChild(container);

      lore.forEach(entry => {
        if (!entry) {
          console.warn('Skipping invalid lore entry:', entry);
          return;
        }
        const loreElement = renderLoreEntry(entry);
        if (loreElement) container.appendChild(loreElement);
      });
    })
    .catch(err => {
      console.error('[lore] Failed to load lore.json for render:', err);
    });
}

function renderLoreEntry(entry) {
  if (!entry) return null;

  const glitchVariants = ['glitch-1', 'glitch-2', 'glitch-3', 'glitch-4', 'glitch-5'];
  const randomGlitch = () => glitchVariants[Math.floor(Math.random() * glitchVariants.length)];

  const container = document.createElement('div');
  container.classList.add('lore-entry');
  if (entry.type) container.classList.add(`lore-${entry.type}`);
  if (entry.longform) container.classList.add('lore-longform');
  if (entry.slug) container.id = `lore-${entry.slug}`;

  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';
  title.classList.add(randomGlitch());
  container.appendChild(title);

  if (entry.published) {
    const published = document.createElement('div');
    published.classList.add('lore-date');
    published.textContent = formatDate(entry.published);
    container.appendChild(published);
  }

  switch (entry.type) {
    case 'shortform':{
      const shortBody = document.createElement('p');
      shortBody.innerHTML = (entry.full || '[No content]').replace(/\n/g, '<br>');
      container.appendChild(shortBody);
      break;
    }

    case 'image':{
      const thumb = document.createElement('img');
      thumb.classList.add('lore-image-thumb');
      thumb.src = entry.image || `./images/${entry.slug}.jpg`;
      thumb.alt = entry.title || 'Lore image thumb';
      thumb.addEventListener('click', () => {
        loreImageModal(entry.image || `./images/${entry.slug}.jpg`, entry.content);
      });
      container.appendChild(thumb);
      break;
    }

    //case 'journal':{}
    default: {
      const content = document.createElement('p');
      content.textContent = entry.content || '[No content provided]';
      container.appendChild(content);
      break;
    }
      
  }

  if (entry.tags && Array.isArray(entry.tags)) {
    const tags = document.createElement('div');
    tags.classList.add('lore-tags');
    tags.textContent = entry.tags.map(tag => `#${tag}`).join(' ');
    container.appendChild(tags);
  }

  return container;
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '[invalid date]';
  }
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderLoreEntries();
});
