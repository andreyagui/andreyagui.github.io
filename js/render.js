import { renderHeader } from './sections/header.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderExperience } from './sections/experience.js';

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
  renderHero(document.getElementById('hero'), content.hero);
  renderAbout(document.getElementById('about'), content.about);
  renderExperience(document.getElementById('experience'), content.experience);
}
