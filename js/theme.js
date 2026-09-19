const STORAGE_KEY = 'theme';
const THEMES = ['dark', 'light'];

export function readTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (THEMES.includes(saved)) return saved;
  } catch (error) {
    console.warn('Theme preference unavailable:', error);
  }
  return 'dark';
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Could not save theme preference:', error);
  }
}

export function nextTheme(theme) {
  return theme === 'dark' ? 'light' : 'dark';
}
