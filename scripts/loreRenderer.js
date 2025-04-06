// scripts/loreRenderer.js
// Handles rendering lore entries into the DOM
// Supports multiple lore types, including "shortform"

export function renderLoreEntry(entry) {
  // ✨ Handle SHORTFORM entries first
  if (entry.type === 'shortform') {
    console.log(`[loreRenderer] Rendering shortform entry: ${entry.id}`);

    const container = document.createElement('div');
    container.classList.add('lore-entry', 'shortform');

    // Add timestamp and title together
    const header = document.createElement('h2');
    header.textContent = `[${entry.timestamp || '???'}] ${entry.title || 'Untitled'}`;
    container.appendChild(header);

    // Add full story content with line breaks
    const body = document.createElement('p');
    body.innerHTML = (entry.full || '[No content]').replace(/\n/g, '<br>');
    container.appendChild(body);

    // Finally append to the document body
    document.body.appendChild(container);
    return;
  }

  // 🧱 Default entry rendering for other types (e.g. logs, standard lore)
  const container = document.createElement('div');
  container.classList.add('lore-entry');

  // Title
  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';
  container.appendChild(title);

  // Optional: Published date
  if (entry.published) {
    const published = document.createElement('div');
    published.classList.add('lore-date');
    published.textContent = formatDate(entry.published);
    container.appendChild(published);
  }

  // Content
  const content = document.createElement('p');
  content.textContent = entry.content || '[No content provided]';
  container.appendChild(content);

  // Optional: Tags
  if (entry.tags && Array.isArray(entry.tags)) {
    const tags = document.createElement('div');
    tags.classList.add('lore-tags');
    tags.textContent = entry.tags.map(tag => `#${tag}`).join(' ');
    container.appendChild(tags);
  }

  document.body.appendChild(container);
}

// 🔧 Helper to prettify ISO timestamps
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
