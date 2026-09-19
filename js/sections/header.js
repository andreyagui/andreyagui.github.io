import { el, clear, svgIcon } from '../dom.js';

function navList(links) {
  return el('ul', { class: 'nav-menu', id: 'nav-menu', role: 'list' }, links.map((link) =>
    el('li', {}, el('a', { class: 'nav-link', href: `#${link.id}`, 'data-section': link.id, text: link.label }))));
}

export function renderHeader(container, nav) {
  clear(container);
  const brand = el('a', { class: 'brand', href: '#hero', 'aria-label': nav.homeAria }, [
    el('span', { class: 'brand-mark', text: 'AA', 'aria-hidden': 'true' }),
    el('span', { class: 'brand-name', text: 'andrey.aguirre', 'aria-hidden': 'true' }),
  ]);
  const menuToggle = el('button', {
    class: 'icon-button menu-toggle', id: 'menu-toggle', type: 'button',
    'aria-expanded': 'false', 'aria-controls': 'nav-menu', 'aria-label': nav.menuOpen,
    'data-label-open': nav.menuOpen, 'data-label-close': nav.menuClose,
  }, [svgIcon('menu', { className: 'icon-menu' }), svgIcon('close', { className: 'icon-close' })]);
  const langToggle = el('button', {
    class: 'icon-button lang-toggle', id: 'lang-toggle', type: 'button',
    'aria-label': nav.langToggleAria, text: nav.langToggle,
  });
  const themeToggle = el('button', {
    class: 'icon-button theme-toggle', id: 'theme-toggle', type: 'button',
    'aria-label': nav.themeToggleAria, 'aria-pressed': 'false',
  }, [svgIcon('sun', { className: 'icon-sun' }), svgIcon('moon', { className: 'icon-moon' })]);

  container.append(el('div', { class: 'container header-inner' }, [
    brand,
    el('nav', { class: 'site-nav', 'aria-label': nav.navAria }, navList(nav.links)),
    el('div', { class: 'header-actions' }, [langToggle, themeToggle, menuToggle]),
  ]));
}
