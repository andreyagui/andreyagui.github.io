import { el, clear, svgIcon } from '../dom.js';

const PHOTO_SIZE_PX = 320;

export function renderHero(container, hero) {
  clear(container);
  const text = el('div', { class: 'hero-text' }, [
    el('p', { class: 'hero-greeting', text: hero.greeting }),
    el('h1', { class: 'hero-name', id: 'hero-title', text: hero.name }),
    el('p', { class: 'hero-role', text: hero.role }),
    el('p', { class: 'hero-stack', text: hero.stack }),
    el('p', { class: 'hero-tagline', text: hero.tagline }),
    el('p', { class: 'hero-location', text: hero.location }),
    el('div', { class: 'hero-actions' }, [
      el('a', { class: 'button button--primary', href: '#projects', text: hero.ctaProjects }),
      el('a', { class: 'button button--ghost', href: hero.cvFile, download: true, 'data-cv-link': true },
        [svgIcon('download', { size: 18 }), hero.ctaCv]),
    ]),
  ]);
  const photo = el('figure', { class: 'hero-photo' }, el('img', {
    src: hero.photo, alt: hero.photoAlt, width: PHOTO_SIZE_PX, height: PHOTO_SIZE_PX, fetchpriority: 'high',
  }));
  container.append(el('div', { class: 'container hero-inner' }, [text, photo]));
}
