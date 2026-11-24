import { memo, useState } from 'react';
import { Search, ChevronDown, ChevronRight, ChevronLeft, Moon, Sun, Menu, X } from 'lucide-react';
import { SIDEBAR_CATEGORIES } from '@/data/catalog';
import { JustTouchLogo, OnThisPage } from '@/components';
import type { OnThisPageItem } from '@/components';
import { LandingPage } from '@/pages/LandingPage';
import { ComponentContent } from '@/pages/ComponentContent';
import { useTheme, useNavigation } from '@/hooks';

// ─── Palette ─────────────────────────────────────────────────────────────────
const C = {
  navy:       '#223049',
  navyDeep:   '#16203A',
  navyMid:    '#2A3A54',
  navyLight:  '#384A66',
  sky:        '#7ABEE8',
  skyDark:    '#3D96C8',
  tint:       '#EDF5FF',
  surface:    '#E6E8EB',
  muted:      '#C7CEDB',
  mutedDark:  '#8896AD',
  text:       '#223049',
  textMuted:  '#677A96',
  pageBg:     '#F0F4F8',
} as const;

export const App = memo(function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const {
    view, activePageId, mobileMenuOpen, sidebarSearch, setSidebarSearch,
    openCategories, currentItem, prevItem, nextItem,
    navigateDocs, goLanding, toggleCategory, closeMobileMenu, openMobileMenu,
  } = useNavigation();

  const [onThisPageItems, setOnThisPageItems] = useState<OnThisPageItem[]>([]);

  if (view === 'landing') {
    return <LandingPage onNavigateDocs={navigateDocs} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />;
  }

  return (
    <div className="min-h-screen flex" style={{ background: darkMode ? C.navyDeep : C.pageBg, color: darkMode ? C.muted : C.navy }}>

      {/* Mobile backdrop */}
      {mobileMenuOpen && (
        <div role="presentation" onClick={closeMobileMenu}
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(34,48,73,0.55)', backdropFilter: 'blur(4px)' }} />
      )}

      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <aside
        style={{ background: C.navy, borderRight: `1px solid ${C.navyMid}` }}
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-60 shrink-0 flex flex-col transition-transform duration-200
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        aria-label="Sidebar navigation"
      >
        {/* Logo row */}
        <div className="h-14 px-4 flex items-center justify-between shrink-0"
          style={{ borderBottom: `1px solid ${C.navyMid}` }}>
          <button onClick={goLanding} className="text-left">
            <JustTouchLogo size="sm" />
          </button>
          <button onClick={closeMobileMenu} className="lg:hidden p-1.5 rounded-lg transition"
            style={{ color: C.mutedDark }} aria-label="Close menu">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-2 shrink-0" style={{ borderBottom: `1px solid ${C.navyMid}` }}>
          <div className="relative">
            <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: C.mutedDark }} />
            <input type="search" value={sidebarSearch} onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Search..." aria-label="Search navigation"
              className="w-full pl-7 pr-3 py-1.5 text-xs rounded-md focus:outline-none"
              style={{ background: C.navyMid, border: `1px solid ${C.navyLight}`, color: C.muted,
                       caretColor: C.sky }} />
          </div>
        </div>

        {/* Nav categories */}
        <nav className="flex-1 overflow-y-auto py-2 px-2" aria-label="Component categories">
          {SIDEBAR_CATEGORIES.map((category) => {
            const matchingItems = category.items.filter((it) =>
              it.label.toLowerCase().includes(sidebarSearch.toLowerCase()),
            );
            if (sidebarSearch && matchingItems.length === 0) return null;
            const isCategoryActive = category.items.some((i) => i.id === activePageId);
            const isOpen = sidebarSearch ? true : openCategories[category.id];

            return (
              <div key={category.id} className="mb-1">
                <button onClick={() => toggleCategory(category.id)} aria-expanded={isOpen}
                  className="w-full px-2 py-1.5 flex items-center justify-between rounded-md transition text-left"
                  style={{ color: isCategoryActive ? C.sky : C.mutedDark }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{category.title}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="space-y-0.5 mb-1">
                    {matchingItems.map((item) => {
                      const active = item.id === activePageId;
                      return (
                        <button key={item.id} onClick={() => navigateDocs(item.id)}
                          aria-current={active ? 'page' : undefined}
                          className="w-full px-2.5 py-1.5 rounded-md text-left text-xs flex items-center justify-between transition"
                          style={{
                            background: active ? `${C.sky}18` : 'transparent',
                            color: active ? C.sky : C.mutedDark,
                            fontWeight: active ? 600 : 400,
                            borderLeft: active ? `2px solid ${C.sky}` : '2px solid transparent',
                            paddingLeft: active ? '9px' : '10px',
                          }}>
                          <span className="truncate">{item.label}</span>
                          {item.count !== undefined && (
                            <span className="text-[9px] shrink-0 ml-1" style={{ color: C.navyLight }}>{item.count}</span>
                          )}
                          {item.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold shrink-0 ml-1"
                              style={{ background: `${C.sky}25`, color: C.sky }}>{item.badge}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="px-3 py-2.5 shrink-0" style={{ borderTop: `1px solid ${C.navyMid}` }}>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style={{ background: C.navyMid }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold"
              style={{ background: `${C.sky}30`, color: C.sky }}>JT</div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold truncate" style={{ color: C.muted }}>JustTouch UI</p>
              <p className="text-[9px]" style={{ color: C.mutedDark }}>v4.0 · Design System</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <header className="sticky top-0 z-30 h-13 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0"
          style={{ height: 52, borderBottom: `1px solid ${darkMode ? C.navyMid : C.surface}`,
                   background: darkMode ? `${C.navyDeep}f5` : 'rgba(240,244,248,0.95)',
                   backdropFilter: 'blur(12px)' }}>

          <div className="flex items-center gap-3 min-w-0">
            <button onClick={openMobileMenu} className="lg:hidden p-1.5 rounded-lg"
              style={{ border: `1px solid ${darkMode ? C.navyMid : C.surface}`, color: C.textMuted }}
              aria-label="Open menu">
              <Menu className="w-4 h-4" />
            </button>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs truncate">
              <span className="truncate hidden sm:block" style={{ color: C.textMuted }}>{currentItem.categoryTitle}</span>
              <ChevronRight className="w-3 h-3 shrink-0 hidden sm:block" style={{ color: C.muted }} />
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold truncate"
                style={{ background: darkMode ? C.navyMid : C.tint, color: darkMode ? C.muted : C.navy }}>
                {currentItem.label}
              </span>
            </nav>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Prev / Next */}
            <div className="flex items-center gap-1">
              <button disabled={!prevItem} onClick={() => prevItem && navigateDocs(prevItem.id)}
                aria-label={prevItem ? `Go to ${prevItem.label}` : 'No previous page'}
                className="p-1.5 rounded-lg transition disabled:opacity-30"
                style={{ border: `1px solid ${darkMode ? C.navyMid : C.surface}`, color: C.textMuted }}>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button disabled={!nextItem} onClick={() => nextItem && navigateDocs(nextItem.id)}
                aria-label={nextItem ? `Go to ${nextItem.label}` : 'No next page'}
                className="p-1.5 rounded-lg transition disabled:opacity-30"
                style={{ border: `1px solid ${darkMode ? C.navyMid : C.surface}`, color: C.textMuted }}>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button onClick={toggleDarkMode}
              className="p-1.5 rounded-lg transition"
              style={{ border: `1px solid ${darkMode ? C.navyMid : C.surface}`, color: darkMode ? C.sky : C.textMuted }}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Content + OnThisPage */}
        <div className="flex-1 flex min-w-0 items-start">
          <main className="flex-1 min-w-0 px-5 sm:px-8 py-7">

            {/* Page title */}
            <div className="pb-6 mb-6" style={{ borderBottom: `1px solid ${darkMode ? C.navyMid : C.surface}` }}>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: C.sky }}>
                {currentItem.categoryTitle}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ color: darkMode ? C.muted : C.navy }}>
                {currentItem.label}
              </h1>
              {currentItem.description && (
                <p className="text-sm mt-1.5 max-w-2xl leading-relaxed" style={{ color: C.textMuted }}>
                  {currentItem.description}
                </p>
              )}
            </div>

            <ComponentContent
              activePageId={activePageId}
              onSelectPage={navigateDocs}
              onVariantsChange={setOnThisPageItems}
              darkMode={darkMode}
            />
          </main>

          {/* On This Page — only render column when there are items */}
          {onThisPageItems.length > 0 && (
            <div className="hidden xl:block w-52 shrink-0 px-4 py-7">
              <OnThisPage items={onThisPageItems} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default App;
