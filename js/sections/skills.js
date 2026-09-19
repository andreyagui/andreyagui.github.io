import { el, clear, techIcon } from '../dom.js';
import { sectionHeader } from './section-header.js';

function skillItem(item) {
  const icon = item.icon && techIcon(item.icon);
  if (!icon) return el('li', { class: 'tag', text: item.name });
  return el('li', { class: 'tech-tile', tabindex: '0', 'aria-label': item.name, 'data-tip': item.name }, icon);
}

export function renderSkills(container, skills) {
  clear(container);
  const groups = skills.groups.map((group) => el('li', { class: 'skill-group' }, [
    el('h3', { class: 'skill-group-name', text: group.name }),
    el('ul', { class: 'tag-list', role: 'list' }, group.items.map(skillItem)),
  ]));
  container.append(el('div', { class: 'container' }, [
    sectionHeader({ id: 'skills', index: 4, title: skills.title }),
    el('ul', { class: 'skill-grid', role: 'list', 'data-reveal-group': true }, groups),
  ]));
}
