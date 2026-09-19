import { el, clear } from '../dom.js';
import { sectionHeader } from './section-header.js';

export function renderSkills(container, skills) {
  clear(container);
  const groups = skills.groups.map((group) => el('li', { class: 'skill-group' }, [
    el('h3', { class: 'skill-group-name', text: group.name }),
    el('ul', { class: 'tag-list', role: 'list' }, group.items.map((item) => el('li', { class: 'tag', text: item }))),
  ]));
  container.append(el('div', { class: 'container' }, [
    sectionHeader({ id: 'skills', index: 4, title: skills.title }),
    el('ul', { class: 'skill-grid', role: 'list' }, groups),
  ]));
}
