// scripts/loreRenderer.js
// Handles rendering lore entries into the DOM (v2)
// Supports: journal, shortform, image

export function renderLoreEntry(entry) {
  const glitchVariants = ['glitch-1', 'glitch-2', 'glitch-3', 'glitch-4', 'glitch-5'];
  const randomGlitch = () => glitchVariants[Math.floor(Math.random() * glitchVariants.length)];

  const container = document.createElement('div');
  container.classList.add('lore-entry');
  if (entry.type) container.classList.add(`lore-${entry.type}`);
  if (entry.slug) container.id = `lore-${entry.slug}`;

  // Title (all types)
  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';
  title.classList.add(randomGlitch());
  container.appendChild(title);

  // Date
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
    // Optional: show a placeholder or glitch block instead?
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
