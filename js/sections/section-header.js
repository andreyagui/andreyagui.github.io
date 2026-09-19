import { el } from '../dom.js';

export function sectionHeader({ id, index, title, subtitle }) {
  return el('div', { class: 'section-header', 'data-reveal': true }, [
    el('p', { class: 'section-kicker', text: `${String(index).padStart(2, '0')}.`, 'aria-hidden': 'true' }),
    el('h2', { class: 'section-title', id: `${id}-title`, text: title }),
    subtitle ? el('p', { class: 'section-subtitle', text: subtitle }) : null,
  ]);
}
