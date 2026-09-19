import { detectLang, storeLang, nextLang, getContent } from './i18n.js';
import { readTheme, applyTheme, saveTheme, nextTheme } from './theme.js';
import { renderPage } from './render.js';

const state = { lang: detectLang(), theme: readTheme() };

function syncThemeButton() {
  document.getElementById('theme-toggle')?.setAttribute('aria-pressed', String(state.theme === 'light'));
}

function bindToggles() {
  document.getElementById('lang-toggle').addEventListener('click', () => {
    state.lang = nextLang(state.lang);
    storeLang(state.lang);
    mount();
    document.getElementById('lang-toggle').focus();
  });
  document.getElementById('theme-toggle').addEventListener('click', () => {
    state.theme = nextTheme(state.theme);
    applyTheme(state.theme);
    saveTheme(state.theme);
    syncThemeButton();
  });
}

function mount() {
  renderPage(getContent(state.lang), { lang: state.lang });
  bindToggles();
  syncThemeButton();
}

applyTheme(state.theme);
mount();
