import { THEME_STORAGE_KEY } from '@/constants';

export const themeService = {
  getInitialDark(): boolean {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored !== null) return stored === 'dark';
    } catch {
      // localStorage unavailable (SSR / private browsing)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  persist(dark: boolean): void {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light');
    } catch {
      // ignore write failures
    }
  },

  applyToDOM(dark: boolean): void {
    document.documentElement.classList.toggle('dark', dark);
  },
} as const;
