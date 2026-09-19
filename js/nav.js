const ACTIVE_LINE_RATIO = 0.4;

function setMenuOpen(toggle, menu, open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose : toggle.dataset.labelOpen);
  menu.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
}

function initMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => {
    setMenuOpen(toggle, menu, toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('.nav-link')) setMenuOpen(toggle, menu, false);
  });
  const onKeydown = (event) => {
    if (event.key !== 'Escape' || !menu.classList.contains('is-open')) return;
    setMenuOpen(toggle, menu, false);
    toggle.focus();
  };
  document.addEventListener('keydown', onKeydown);
  return () => {
    document.removeEventListener('keydown', onKeydown);
    document.body.classList.remove('menu-open');
  };
}

function currentSectionId(sections) {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) return sections.at(-1)?.id ?? null;
  const line = window.innerHeight * ACTIVE_LINE_RATIO;
  let current = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= line) current = section.id;
  }
  return current;
}

function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav-link[data-section]')];
  const sections = links.map((link) => document.getElementById(link.dataset.section)).filter(Boolean);
  let frame = 0;
  const update = () => {
    frame = 0;
    const id = currentSectionId(sections);
    for (const link of links) {
      if (link.dataset.section === id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (frame) cancelAnimationFrame(frame);
  };
}

export function initNav() {
  const teardownMenu = initMenu();
  const teardownSpy = initScrollSpy();
  return () => {
    teardownMenu();
    teardownSpy();
  };
}
