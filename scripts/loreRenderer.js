// scripts/loreRenderer.js
// Handles rendering lore entries into the DOM
// Supports multiple lore types, including "shortform"

export function renderLoreEntry(entry) {
  // 🎲 Random glitch class selector
  const glitchVariants = ['glitch-1', 'glitch-2', 'glitch-3', 'glitch-4', 'glitch-5'];
  const randomGlitch = () => glitchVariants[Math.floor(Math.random() * glitchVariants.length)];

  // ✨ Handle SHORTFORM entries
  if (entry.type === 'shortform') {
    console.log(`[loreRenderer] Rendering shortform entry: ${entry.id}`);

    const container = document.createElement('div');
    container.classList.add('lore-entry', 'shortform');

    const header = document.createElement('h2');
    header.textContent = `[${entry.timestamp || '???'}] ${entry.title || 'Untitled'}`;
    header.classList.add(randomGlitch());
    container.appendChild(header);

    const body = document.createElement('p');
    body.innerHTML = (entry.full || '[No content]').replace(/\n/g, '<br>');
    container.appendChild(body);

    return container;
  }

  // 🧱 Default entry rendering
  const container = document.createElement('div');
  container.classList.add('lore-entry');

  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';
  title.classList.add(randomGlitch()); // 💫 Apply glitch class
  container.appendChild(title);

  if (entry.published) {
    const published = document.createElement('div');
    published.classList.add('lore-date');
    published.textContent = formatDate(entry.published);
    container.appendChild(published);
  }

  const content = document.createElement('p');
  content.textContent = entry.content || '[No content provided]';
  container.appendChild(content);

  if (entry.tags && Array.isArray(entry.tags)) {
    const tags = document.createElement('div');
    tags.classList.add('lore-tags');
    tags.textContent = entry.tags.map(tag => `#${tag}`).join(' ');
    container.appendChild(tags);
  }

  return container;
}

// 🔧 Helper: formats ISO date strings
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
