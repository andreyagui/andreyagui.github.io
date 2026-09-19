const ROOT_MARGIN = '0px 0px -10% 0px';
const STAGGER_CAP = 8;

function collectTargets() {
  const targets = [];
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    [...group.children].forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-i', String(Math.min(i, STAGGER_CAP)));
      targets.push(el);
    });
  });
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.classList.add('reveal');
    targets.push(el);
  });
  return targets;
}

export function initReveal() {
  const targets = collectTargets();
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.15, rootMargin: ROOT_MARGIN });

  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
