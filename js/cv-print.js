import { el } from './dom.js';
import { CONTENT } from '../data/content.js';

function langFromUrl() {
  return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'es';
}

function section(title, children) {
  return el('section', { class: 'cv-section' }, [el('h2', { class: 'cv-heading', text: title }), ...children]);
}

function header({ hero, contact }) {
  return el('header', { class: 'cv-header' }, [
    el('img', { class: 'cv-photo', src: hero.photo, alt: hero.photoAlt, width: 96, height: 96 }),
    el('div', {}, [
      el('h1', { class: 'cv-name', text: hero.name }),
      el('p', { class: 'cv-role', text: `${hero.role} · ${hero.stack}` }),
      el('p', { class: 'cv-contact', text: [contact.email, contact.linkedinText, contact.githubText, contact.website].join('  ·  ') }),
      el('p', { class: 'cv-contact', text: hero.location }),
    ]),
  ]);
}

function jobs(items) {
  return items.map((item) => el('article', { class: 'cv-job' }, [
    el('div', { class: 'cv-job-head' }, [
      el('h3', { text: `${item.role} — ${item.company}` }),
      el('span', { class: 'cv-period', text: item.period }),
    ]),
    el('ul', {}, item.bullets.map((text) => el('li', { text }))),
  ]));
}

function projectList({ featured, other }) {
  return [el('ul', { class: 'cv-projects' }, [...featured, ...other].map((project) => el('li', {}, [
    el('strong', { text: project.name }),
    ` — ${project.description}`,
    project.url ? ` (${project.url.replace('https://www.', '')})` : null,
  ])))];
}

function skillList(groups) {
  return [el('dl', { class: 'cv-skills' }, groups.flatMap((group) => [
    el('dt', { text: group.name }),
    el('dd', { text: group.items.join(' · ') }),
  ]))];
}

function educationList(education) {
  const languages = education.languages.map((language) => `${language.name} (${language.level})`).join(' · ');
  return [
    el('ul', { class: 'cv-edu' }, education.items.map((item) => el('li', {}, [
      el('strong', { text: item.title }), ` — ${item.institution} (${item.status})`,
    ]))),
    el('p', { class: 'cv-languages' }, [el('strong', { text: `${education.languagesTitle}: ` }), languages]),
  ];
}

function render() {
  const lang = langFromUrl();
  const content = CONTENT[lang];
  document.documentElement.lang = lang;
  document.title = `CV — ${content.hero.name}`;
  document.getElementById('cv').replaceChildren(
    header(content),
    section(content.about.title, content.about.paragraphs.map((text) => el('p', { text }))),
    section(content.experience.title, jobs(content.experience.items)),
    section(content.projects.title, projectList(content.projects)),
    section(content.skills.title, skillList(content.skills.groups)),
    section(content.education.title, educationList(content.education)),
  );
  document.body.dataset.ready = 'true';
}

render();
