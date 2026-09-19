import { detectLang, storeLang, nextLang, getContent } from './i18n.js';
import { readTheme, applyTheme, saveTheme, nextTheme } from './theme.js';
import { renderPage } from './render.js';
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';

let state = { lang: detectLang(), theme: readTheme() };
let teardownNav = () => {};
let teardownReveal = () => {};

function syncThemeButton() {
  document.getElementById('theme-toggle')?.setAttribute('aria-pressed', String(state.theme === 'light'));
}

function bindToggles() {
  document.getElementById('lang-toggle').addEventListener('click', () => {
    state = { ...state, lang: nextLang(state.lang) };
    storeLang(state.lang);
    mount();
    document.getElementById('lang-toggle').focus();
  });
  document.getElementById('theme-toggle').addEventListener('click', () => {
    state = { ...state, theme: nextTheme(state.theme) };
    applyTheme(state.theme);
    saveTheme(state.theme);
    syncThemeButton();
  });
}

function mount() {
  teardownNav();
  teardownReveal();
  renderPage(getContent(state.lang), { lang: state.lang });
  bindToggles();
  syncThemeButton();
  teardownNav = initNav();
  teardownReveal = initReveal();
}

applyTheme(state.theme);
mount();
