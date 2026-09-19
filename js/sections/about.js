import { el, clear } from '../dom.js';
import { sectionHeader } from './section-header.js';

export function renderAbout(container, about) {
  clear(container);
  const highlights = about.highlights.map((item) => el('div', { class: 'highlight' }, [
    el('dt', { class: 'highlight-label', text: item.label }),
    el('dd', { class: 'highlight-value', text: item.value }),
  ]));
  container.append(el('div', { class: 'container' }, [
    sectionHeader({ id: 'about', index: 1, title: about.title }),
    el('div', { class: 'about-grid' }, [
      el('div', { class: 'about-text' }, about.paragraphs.map((text) => el('p', { text }))),
      el('dl', { class: 'about-highlights', 'data-reveal-group': true }, highlights),
    ]),
  ]));
}
