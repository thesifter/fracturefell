// scripts/loreRenderer.js
// Handles rendering lore entries into the DOM (v2.1)
// Supports: journal, shortform, image + longform class handling

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
      const img = document.createElement('img');
      img.src = entry.image || `./images/${entry.slug}.jpg`;
      img.alt = entry.title || 'Lore image';
      img.classList.add('lore-image');
      img.style.cursor = 'zoom-in';

      const thumb = document.createElement('img');
      thumb.classList.add('lore-image-thumb');
      thumb.src = entry.image || `./images/${entry.slug}.jpg`;
      thumb.alt = entry.title || 'Lore image thumb';
      container.appendChild(thumb);

      img.onload = () => {
        container.appendChild(img);

        if (entry.content) {
          const caption = document.createElement('p');
          caption.classList.add('lore-caption');
          caption.textContent = entry.content;
          container.appendChild(caption);
        }
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

// Helper: format published date
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
