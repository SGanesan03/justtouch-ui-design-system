import { useState, useCallback, useMemo } from 'react';
import { SIDEBAR_CATEGORIES } from '@data/catalog';
import { DEFAULT_PAGE_ID, DEFAULT_OPEN_CATEGORIES } from '@constants';
import type { AppView, FlatNavItem } from '@justtouch/ui';

export function useNavigation() {
  const [view, setView] = useState<AppView>('landing');
  const [activePageId, setActivePageId] = useState<string>(DEFAULT_PAGE_ID);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(DEFAULT_OPEN_CATEGORIES);

  const allItems = useMemo<FlatNavItem[]>(
    () =>
      SIDEBAR_CATEGORIES.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title })),
      ),
    [],
  );

  const currentIndex = allItems.findIndex((i) => i.id === activePageId);
  const currentItem  = allItems[currentIndex] ?? allItems[0];
  const prevItem     = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem     = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  const navigateDocs = useCallback((pageId: string = DEFAULT_PAGE_ID) => {
    setActivePageId(pageId);
    setView('docs');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goLanding       = useCallback(() => setView('landing'), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const openMobileMenu  = useCallback(() => setMobileMenuOpen(true), []);

  const toggleCategory = useCallback((catId: string) => {
    setOpenCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }, []);

  return {
    view,
    activePageId,
    mobileMenuOpen,
    sidebarSearch,
    setSidebarSearch,
    openCategories,
    allItems,
    currentItem,
    prevItem,
    nextItem,
    navigateDocs,
    goLanding,
    toggleCategory,
    closeMobileMenu,
    openMobileMenu,
  } as const;
}
