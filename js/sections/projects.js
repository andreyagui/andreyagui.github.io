import { el, clear, svgIcon } from '../dom.js';
import { sectionHeader } from './section-header.js';

function tagList(tags) {
  return el('ul', { class: 'tag-list', role: 'list' }, tags.map((tag) => el('li', { class: 'tag', text: tag })));
}

function projectMedia(project) {
  if (project.image) {
    return el('div', { class: 'project-media' },
      el('img', { src: project.image, alt: '', loading: 'lazy', width: 1440, height: 900 }));
  }
  const mark = project.logo
    ? el('img', { src: project.logo, alt: '', loading: 'lazy', width: 96, height: 96 })
    : el('span', { class: 'logo-monogram', text: project.name.charAt(0), 'aria-hidden': 'true' });
  return el('div', { class: 'project-media project-media--brand' }, el('span', { class: 'logo-plate' }, mark));
}

function projectTitle(project) {
  const showInlineLogo = Boolean(project.image && project.logo);
  return el('h3', { class: 'project-name' }, [
    showInlineLogo ? el('img', { class: 'project-logo', src: project.logo, alt: '', width: 28, height: 28, loading: 'lazy' }) : null,
    project.name,
  ]);
}

function featuredCard(project, labels) {
  const visitLink = project.url
    ? el('a', { class: 'project-link', href: project.url, target: '_blank', rel: 'noopener noreferrer' },
      [labels.visitLabel, svgIcon('external', { size: 16 })])
    : null;
  return el('li', { class: 'project-card', 'data-project': project.id }, [
    projectMedia(project),
    el('div', { class: 'project-body' }, [
      el('div', { class: 'project-heading' }, [
        projectTitle(project),
        project.url ? el('span', { class: 'live-badge', text: labels.liveBadge }) : null,
      ]),
      el('p', { class: 'project-tagline', text: project.tagline }),
      el('p', { class: 'project-description', text: project.description }),
      tagList(project.tags),
      visitLink,
    ]),
  ]);
}

function otherCard(project) {
  return el('li', { class: 'other-card', 'data-project': project.id }, [
    el('span', { class: 'monogram', text: project.name.charAt(0), 'aria-hidden': 'true' }),
    el('div', {}, [
      el('h4', { class: 'other-name', text: project.name }),
      el('p', { class: 'other-description', text: project.description }),
      tagList(project.tags),
    ]),
  ]);
}

export function renderProjects(container, projects) {
  clear(container);
  container.append(el('div', { class: 'container' }, [
    sectionHeader({ id: 'projects', index: 3, title: projects.title, subtitle: projects.subtitle }),
    el('ul', { class: 'project-grid', role: 'list', 'data-reveal-group': true }, projects.featured.map((project) => featuredCard(project, projects))),
    el('h3', { class: 'other-title', text: projects.otherTitle }),
    el('ul', { class: 'other-grid', role: 'list', 'data-reveal-group': true }, projects.other.map(otherCard)),
  ]));
}
