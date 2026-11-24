import { useState, useCallback, useEffect } from 'react';
import { themeService } from '@/services';

export function useTheme() {
  const [darkMode, setDarkMode] = useState<boolean>(themeService.getInitialDark);

  useEffect(() => {
    themeService.applyToDOM(darkMode);
    themeService.persist(darkMode);
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);

  return { darkMode, toggleDarkMode } as const;
}
