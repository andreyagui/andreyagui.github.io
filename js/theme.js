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
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f7f9' : '#0a0c10');
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
