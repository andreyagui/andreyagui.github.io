import { CONTENT } from '../data/content.js';

const STORAGE_KEY = 'lang';
export const LANGS = ['es', 'en'];

export function detectLang(navigatorLanguage = navigator.language) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (error) {
    console.warn('Language preference unavailable:', error);
  }
  return String(navigatorLanguage || '').toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Could not save language preference:', error);
  }
}

export function nextLang(lang) {
  return lang === 'es' ? 'en' : 'es';
}

export function getContent(lang) {
  return CONTENT[lang] ?? CONTENT.es;
}
