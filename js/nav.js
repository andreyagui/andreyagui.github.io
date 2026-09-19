const ACTIVE_LINE_RATIO = 0.4;
// `scroll-behavior: smooth` animates scrollTo() over time; if a late web-font swap
// (font-display: swap) reflows the page mid-animation, Chromium's smooth-scroll can
// settle a bit short of the true new bottom. A few hundred px of slack keeps "at the
// bottom" detection correct without any perceptible effect on real users.
const BOTTOM_TOLERANCE_PX = 300;

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
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_TOLERANCE_PX;
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
  const scheduleUpdate = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  // Late-loading web fonts (font-display: swap) can reflow the page after first paint,
  // changing scrollHeight with no scroll/resize event; a resize observer catches that too.
  const bodyResize = new ResizeObserver(scheduleUpdate);
  bodyResize.observe(document.body);
  update();
  return () => {
    window.removeEventListener('scroll', scheduleUpdate);
    window.removeEventListener('resize', scheduleUpdate);
    bodyResize.disconnect();
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
