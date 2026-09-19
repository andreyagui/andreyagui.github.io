import { el, clear, svgIcon } from '../dom.js';
import { sectionHeader } from './section-header.js';

function contactLink({ href, icon, label, external = false }) {
  const attrs = { class: 'contact-link', href };
  if (external) Object.assign(attrs, { target: '_blank', rel: 'noopener noreferrer' });
  return el('li', {}, el('a', attrs, [svgIcon(icon), el('span', { text: label })]));
}

export function renderContact(container, contact) {
  clear(container);
  container.append(el('div', { class: 'container contact-inner' }, [
    sectionHeader({ id: 'contact', index: 6, title: contact.title, subtitle: contact.text }),
    el('ul', { class: 'contact-links', role: 'list' }, [
      contactLink({ href: `mailto:${contact.email}`, icon: 'mail', label: contact.email }),
      contactLink({ href: contact.linkedin, icon: 'linkedin', label: contact.linkedinText, external: true }),
      contactLink({ href: contact.github, icon: 'github', label: contact.githubText, external: true }),
    ]),
    el('a', { class: 'button button--primary contact-cv', href: contact.cvFile, download: true, 'data-cv-link': true },
      [svgIcon('download', { size: 18 }), contact.cvLabel]),
  ]));
}
