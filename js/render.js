import { renderHeader } from './sections/header.js';

function renderMeta(content, lang) {
  document.documentElement.lang = lang;
  document.title = content.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description);
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) skipLink.textContent = content.nav.skipLink;
}

export function renderPage(content, { lang }) {
  renderMeta(content, lang);
  renderHeader(document.getElementById('site-header'), content.nav);
}
