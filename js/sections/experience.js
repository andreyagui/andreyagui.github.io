import { el, clear } from '../dom.js';
import { sectionHeader } from './section-header.js';

function timelineItem(item) {
  return el('li', { class: 'timeline-item' }, [
    el('div', { class: 'timeline-meta' }, [
      el('p', { class: 'timeline-period', text: item.period }),
      el('p', { class: 'timeline-location', text: item.location }),
    ]),
    el('article', { class: 'timeline-card' }, [
      el('h3', { class: 'timeline-role', text: item.role }),
      el('p', { class: 'timeline-company', text: item.company }),
      el('ul', { class: 'timeline-bullets' }, item.bullets.map((text) => el('li', { text }))),
    ]),
  ]);
}

export function renderExperience(container, experience) {
  clear(container);
  container.append(el('div', { class: 'container' }, [
    sectionHeader({ id: 'experience', index: 2, title: experience.title }),
    el('ol', { class: 'timeline', role: 'list', 'data-reveal-group': true }, experience.items.map(timelineItem)),
  ]));
}
