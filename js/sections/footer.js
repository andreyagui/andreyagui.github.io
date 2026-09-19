import { el, clear } from '../dom.js';

export function renderFooter(container, { name }) {
  clear(container);
  container.append(el('div', { class: 'container footer-inner' }, [
    el('p', { text: `© ${new Date().getFullYear()} ${name}` }),
  ]));
}
