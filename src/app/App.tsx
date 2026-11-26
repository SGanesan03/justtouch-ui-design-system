import { memo, useState } from 'react';
import { Search, ChevronRight, ChevronLeft, Moon, Sun, Menu, X } from 'lucide-react';
import { SIDEBAR_CATEGORIES } from '@data/catalog';
import { JustTouchLogo, OnThisPage } from '@components';
import type { OnThisPageItem } from '@components';
import { LandingPage } from '@pages/LandingPage';
import { ComponentContent } from '@pages/ComponentContent';
import { useTheme, useNavigation } from '@hooks';
import { P } from '@justtouch/ui';

export const App = memo(function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const {
    view, activePageId, mobileMenuOpen, sidebarSearch, setSidebarSearch,
    currentItem, prevItem, nextItem,
    navigateDocs, goLanding, closeMobileMenu, openMobileMenu,
  } = useNavigation();

  const [onThisPageItems, setOnThisPageItems] = useState<OnThisPageItem[]>([]);

  if (view === 'landing') {
    return <LandingPage onNavigateDocs={navigateDocs} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />;
  }

  const WatermarkSVG = (
    <div className="pointer-events-none select-none fixed top-0 right-0 w-[600px] h-[600px] opacity-15 z-0" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="wm-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7B5CF5" />
            <stop offset="100%" stopColor="#C84B8F" />
          </linearGradient>
          <linearGradient id="wm-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9B6FF5" />
            <stop offset="100%" stopColor="#5B3FD4" />
          </linearGradient>
          <linearGradient id="wm-c" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#C84B8F" />
            <stop offset="100%" stopColor="#7B5CF5" />
          </linearGradient>
        </defs>
        <rect x="8"  y="14" width="38" height="46" rx="8"  fill="url(#wm-b)" opacity="0.6" />
        <rect x="42" y="12" width="46" height="20" rx="10" fill="url(#wm-a)" opacity="0.9" />
        <rect x="22" y="26" width="38" height="38" rx="8"  fill="url(#wm-a)" opacity="0.75" />
        <rect x="62" y="36" width="14" height="28" rx="7"  fill="url(#wm-c)" opacity="0.8" />
        <rect x="46" y="50" width="40" height="36" rx="8"  fill="url(#wm-c)" opacity="0.85" />
        <circle cx="18" cy="80" r="9" fill="url(#wm-b)" opacity="0.8" />
        <circle cx="40" cy="86" r="5" fill="url(#wm-a)" opacity="0.6" />
        <circle cx="46" cy="50" r="14" stroke="#9B6FF5" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="46" cy="50" r="20" stroke="#9B6FF5" strokeWidth="0.6" fill="none" opacity="0.3" />
        <circle cx="46" cy="50" r="26" stroke="#9B6FF5" strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="46" cy="50" r="2"  fill="#9B6FF5" opacity="0.7" />
      </svg>
    </div>
  );

  const pageBg  = darkMode ? P.forestDeep : P.cream;
  const cardBg  = darkMode ? P.forest     : '#FFFFFF';
  const textPri = darkMode ? P.textLight  : P.textDark;
  const textSub = darkMode ? P.creamDark  : P.textMuted;
  const border  = darkMode ? P.forestMid  : P.creamMuted;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: pageBg, color: textPri }}>
      {WatermarkSVG}

      {/* ── Top bar — logo left, category tabs center, controls right ──────── */}
      <header style={{
        background: cardBg,
        borderBottom: `1px solid ${border}`,
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        {/* Row 1: logo + controls */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-14"
          style={{ borderBottom: `1px solid ${border}` }}>
          <div className="flex items-center gap-4">
            <button onClick={openMobileMenu} className="lg:hidden p-1.5 rounded-md"
              style={{ color: textSub }} aria-label="Open menu">
              <Menu className="w-4 h-4" />
            </button>
            <button onClick={goLanding} className="flex items-center gap-2.5">
              <JustTouchLogo size="sm" />
            </button>
            {/* Breadcrumb — only on desktop */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs" style={{ color: textSub }}>
              <span className="text-[11px]">{currentItem.categoryTitle}</span>
              <ChevronRight className="w-3 h-3" style={{ color: border }} />
              <span className="font-medium" style={{ color: textPri }}>{currentItem.label}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Prev / Next with label */}
            <button disabled={!prevItem} onClick={() => prevItem && navigateDocs(prevItem.id)}
              aria-label={prevItem ? `Previous: ${prevItem.label}` : undefined}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs transition disabled:opacity-30"
              style={{ color: textSub, border: `1px solid ${border}` }}>
              <ChevronLeft className="w-3 h-3" />
              {prevItem ? <span className="max-w-[80px] truncate">{prevItem.label}</span> : 'Prev'}
            </button>
            <button disabled={!nextItem} onClick={() => nextItem && navigateDocs(nextItem.id)}
              aria-label={nextItem ? `Next: ${nextItem.label}` : undefined}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs transition disabled:opacity-30"
              style={{ color: textSub, border: `1px solid ${border}` }}>
              {nextItem ? <span className="max-w-[80px] truncate">{nextItem.label}</span> : 'Next'}
              <ChevronRight className="w-3 h-3" />
            </button>
            <div className="w-px h-4 mx-2" style={{ background: border }} />
            <button onClick={toggleDarkMode}
              className="p-1.5 rounded-md transition"
              style={{ color: textSub }}
              aria-label={darkMode ? 'Light mode' : 'Dark mode'}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Row 2: category tabs — horizontal scroll */}
        <div className="hidden lg:flex items-center gap-0 px-6 overflow-x-auto"
          style={{ height: 40 }}>
          {SIDEBAR_CATEGORIES.map((cat) => {
            const isActive = cat.items.some((i) => i.id === activePageId);
            return (
              <button key={cat.id}
                onClick={() => navigateDocs(cat.items[0].id)}
                className="shrink-0 px-4 h-full text-xs font-medium transition border-b-2 whitespace-nowrap"
                style={{
                  borderColor: isActive ? P.olive : 'transparent',
                  color: isActive ? P.olive : textSub,
                  fontWeight: isActive ? 600 : 400,
                }}>
                {cat.title}
              </button>
            );
          })}
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <>
          <div role="presentation" onClick={closeMobileMenu}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} />
          <aside className="fixed top-0 left-0 z-50 h-screen w-64 flex flex-col lg:hidden"
            style={{ background: cardBg, borderRight: `1px solid ${border}` }}>
            <div className="h-14 px-4 flex items-center justify-between"
              style={{ borderBottom: `1px solid ${border}` }}>
              <JustTouchLogo size="sm" />
              <button onClick={closeMobileMenu} style={{ color: textSub }} aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="px-3 py-2" style={{ borderBottom: `1px solid ${border}` }}>
              <input type="search" value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                placeholder="Search…"
                className="w-full px-3 py-1.5 text-xs rounded-md focus:outline-none"
                style={{ background: pageBg, border: `1px solid ${border}`, color: textPri }} />
            </div>
            <nav className="flex-1 overflow-y-auto py-3 px-3">
              {SIDEBAR_CATEGORIES.map((cat) => (
                <div key={cat.id} className="mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1 px-1"
                    style={{ color: textSub }}>{cat.title}</p>
                  {cat.items.filter(i => i.label.toLowerCase().includes(sidebarSearch.toLowerCase())).map((item) => {
                    const active = item.id === activePageId;
                    return (
                      <button key={item.id} onClick={() => navigateDocs(item.id)}
                        className="w-full text-left px-2 py-1.5 rounded-md text-xs transition mb-px"
                        style={{
                          background: active ? `${P.olive}10` : 'transparent',
                          color: active ? P.olive : textSub,
                          fontWeight: active ? 600 : 400,
                        }}>
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              ))}
            </nav>
          </aside>
        </>
      )}

      {/* ── Body: sidebar items + content ─────────────────────────────────── */}
      <div className="flex flex-1 min-h-0 relative z-10 lg:pl-56">

        {/* Slim item sidebar — only shows items for active category */}
        <aside className="hidden lg:flex flex-col w-56 shrink-0 fixed top-[94px] left-0 h-[calc(100vh-94px)] overflow-y-auto z-20"
          style={{ borderRight: `1px solid ${border}`, background: pageBg }}>

          {/* Search */}
          <div className="px-3 pt-4 pb-3" style={{ borderBottom: `1px solid ${border}` }}>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: P.textMuted }} />
              <input type="search" value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                placeholder="Filter…" aria-label="Filter components"
                className="w-full pl-8 pr-2 py-2 text-sm rounded-md focus:outline-none"
                style={{ background: cardBg, border: `1px solid ${border}`, color: textPri }} />
            </div>
          </div>

          <nav className="flex-1 py-3 px-2" aria-label="Component list">
            {(() => {
              const activeCat = SIDEBAR_CATEGORIES.find(cat =>
                cat.items.some(i => i.id === activePageId)
              ) ?? SIDEBAR_CATEGORIES[0];
              const items = activeCat.items.filter(i =>
                i.label.toLowerCase().includes(sidebarSearch.toLowerCase())
              );
              return (
                <>
                  <p className="text-[11px] font-bold uppercase tracking-widest px-2 mb-3"
                    style={{ color: P.amberDark }}>{activeCat.title}</p>
                  <div className="space-y-0.5">
                    {items.map((item) => {
                      const active = item.id === activePageId;
                      return (
                        <button key={item.id} onClick={() => navigateDocs(item.id)}
                          aria-current={active ? 'page' : undefined}
                          className="w-full text-left px-3 py-2 rounded-md text-sm transition flex items-center justify-between"
                          style={{
                            background: active ? `${P.olive}12` : 'transparent',
                            color: active ? P.olive : textSub,
                            fontWeight: active ? 600 : 400,
                            borderLeft: `2px solid ${active ? P.olive : 'transparent'}`,
                          }}>
                          <span className="truncate">{item.label}</span>
                          {item.count !== undefined && (
                            <span className="text-[10px] tabular-nums shrink-0 ml-1"
                              style={{ color: active ? P.olive : border }}>{item.count}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              );
            })()}
          </nav>

          {/* Footer identity */}
          <div className="px-3 py-3 mt-auto" style={{ borderTop: `1px solid ${border}` }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                style={{ background: P.olive }}>JT</div>
              <div className="min-w-0">
                <p className="text-xs font-semibold truncate" style={{ color: textPri }}>JustTouch UI</p>
                <p className="text-[10px]" style={{ color: textSub }}>v4.0</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ──────────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0 flex">
          <div className="flex-1 min-w-0 px-6 sm:px-10 lg:px-12 py-10">

            {/* Page header — left-aligned, typographic, no box */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ background: `${P.amberDark}12`, color: P.amberDark }}>
                  {currentItem.categoryTitle}
                </span>
                {currentItem.count !== undefined && (
                  <span className="text-[10px]" style={{ color: textSub }}>
                    {currentItem.count} variants
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
                style={{ color: textPri }}>
                {currentItem.label}
              </h1>
              {currentItem.description && (
                <p className="text-sm mt-3 max-w-2xl leading-relaxed" style={{ color: textSub }}>
                  {currentItem.description}
                </p>
              )}
              {/* Thin gold rule under title */}
              <div className="mt-6 h-px w-16" style={{ background: P.amberDark }} />
            </div>

            <ComponentContent
              activePageId={activePageId}
              onSelectPage={navigateDocs}
              onVariantsChange={setOnThisPageItems}
              darkMode={darkMode}
            />

            {/* Bottom prev/next navigation */}
            <div className="mt-16 pt-6 flex items-center justify-between"
              style={{ borderTop: `1px solid ${border}` }}>
              {prevItem ? (
                <button onClick={() => navigateDocs(prevItem.id)}
                  className="flex items-center gap-2 text-sm transition hover:opacity-70"
                  style={{ color: textSub }}>
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: P.textMuted }}>Previous</p>
                    <p className="font-medium" style={{ color: textPri }}>{prevItem.label}</p>
                  </div>
                </button>
              ) : <div />}
              {nextItem && (
                <button onClick={() => navigateDocs(nextItem.id)}
                  className="flex items-center gap-2 text-sm transition hover:opacity-70"
                  style={{ color: textSub }}>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: P.textMuted }}>Next</p>
                    <p className="font-medium" style={{ color: textPri }}>{nextItem.label}</p>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* On this page — right rail */}
          {onThisPageItems.length > 0 && (
            <div className="hidden xl:block w-48 shrink-0 py-10 pr-6">
              <OnThisPage items={onThisPageItems} darkMode={darkMode} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
});

export default App;
