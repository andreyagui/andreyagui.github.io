import { el, clear } from '../dom.js';

export function renderFooter(container, { name, footer }) {
  clear(container);
  container.append(el('div', { class: 'container footer-inner' }, [
    el('p', { text: `© ${new Date().getFullYear()} ${name}` }),
    el('p', { class: 'footer-note', text: footer.text }),
  ]));
}
