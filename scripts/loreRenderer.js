// scripts/loreRenderer.js

export function renderLoreEntry(entry) {
  const container = document.createElement('div');
  container.classList.add('lore-entry');

  // Title
  const title = document.createElement('h2');
  title.textContent = entry.title || 'Untitled Entry';
  container.appendChild(title);

  // Published date
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
