import { el, clear } from '../dom.js';
import { sectionHeader } from './section-header.js';

function educationItem(item) {
  return el('li', { class: 'edu-item' }, [
    el('h3', { class: 'edu-title', text: item.title }),
    el('p', { class: 'edu-institution', text: item.institution }),
    el('p', { class: 'edu-status', text: item.status }),
  ]);
}

function languageItem(language) {
  return el('li', { class: 'lang-item' }, [
    el('span', { class: 'lang-name', text: language.name }),
    el('span', { class: 'lang-level', text: language.level }),
  ]);
}

export function renderEducation(container, education) {
  clear(container);
  container.append(el('div', { class: 'container' }, [
    sectionHeader({ id: 'education', index: 5, title: education.title }),
    el('div', { class: 'edu-grid' }, [
      el('ul', { class: 'edu-list', role: 'list' }, education.items.map(educationItem)),
      el('div', { class: 'lang-box' }, [
        el('h3', { class: 'lang-title', text: education.languagesTitle }),
        el('ul', { class: 'lang-list', role: 'list' }, education.languages.map(languageItem)),
      ]),
    ]),
  ]));
}
