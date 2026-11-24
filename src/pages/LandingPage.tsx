import { memo, useState, useCallback } from 'react';
import {
  Box,
  BookOpen,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Moon,
  Sun,
  ArrowRight,
  Terminal,
  Palette,
  LayoutGrid,
  X,
} from 'lucide-react';
import { JustTouchLogo } from '@/components';
import { useClipboard } from '@/hooks';

interface LandingPageProps {
  onNavigateDocs: (pageId?: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

import { INSTALL_CMD, LANDING_STATS, LANDING_NAV_LINKS } from '@/constants';

const FEATURES = [
  { icon: LayoutGrid, title: '8 Complete Component Categories', desc: 'From primitive Buttons and Inputs to full SaaS Dashboards, Settings, Auth flows, and Marketing pages.', action: 'overview' },
  { icon: Palette, title: 'Semantic Tokens & Dark Mode', desc: 'Every component supports instant light/dark mode switching and customizable Tailwind CSS brand variables.', action: 'colors' },
  { icon: ShieldCheck, title: 'Accessible & Keyboard Ready', desc: 'Focus rings, ARIA roles, semantic HTML, and responsive mobile-first layouts built into every block.', action: 'buttons' },
  { icon: Layers, title: 'Copy-Paste TSX Ownership', desc: 'Inspect live previews across Desktop, Tablet, and Mobile viewports, then copy clean TypeScript source.', action: 'tables' },
  { icon: Zap, title: 'Zero Runtime Bloat', desc: 'Pure React + Tailwind CSS utilities with Lucide icons. No heavy CSS-in-JS runtime overhead.', action: 'installation' },
  { icon: Sparkles, title: 'Full Page Templates', desc: 'Ready-to-ship About pages, Landing pages, Pricing matrices, Blog layouts, and Legal documentation.', action: 'about-pages' },
] as const;

export const LandingPage = memo<LandingPageProps>(function LandingPage({
  onNavigateDocs,
  darkMode,
  onToggleDarkMode,
}) {
  const { copied, copy } = useClipboard();
  const [showBanner, setShowBanner] = useState(true);

  const copyInstall = useCallback(() => copy(INSTALL_CMD), [copy]);
  const dismissBanner = useCallback(() => setShowBanner(false), []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
              <JustTouchLogo size="md" />
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300" aria-label="Main navigation">
              {LANDING_NAV_LINKS.map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => onNavigateDocs(page)}
                  className="hover:text-slate-900 dark:hover:text-white transition"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onNavigateDocs('auth-pages')}
              className="hidden sm:inline-flex px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
            >
              Sign in
            </button>
            <button
              onClick={() => onNavigateDocs('overview')}
              className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-sm font-semibold text-white shadow-xs transition"
            >
              Explore Library
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-200/70 dark:border-slate-800"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-slate-950 dark:bg-slate-900 border border-slate-800 shadow-lg flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 text-sky-400">
              <circle cx="12" cy="12" r="2.2" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.4" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.4" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>

          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">JustTouch UI React</p>

          <h1 id="hero-heading" className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
            The ultimate open-source
            <br />
            React UI component library
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-9">
            JustTouch UI React is a comprehensive collection of accessible React components built
            with Tailwind CSS and TypeScript. Just copy, paste, and ship production interfaces faster.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <button
              onClick={() => onNavigateDocs('overview')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition"
            >
              <Box className="w-4 h-4 text-slate-500" aria-hidden />
              Components
            </button>
            <button
              onClick={() => onNavigateDocs('introduction')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition"
            >
              <BookOpen className="w-4 h-4 text-slate-500" aria-hidden />
              Documentation
            </button>
            <button
              onClick={() => onNavigateDocs('dashboards')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-sm font-semibold text-white shadow-sm transition"
            >
              <Sparkles className="w-4 h-4" aria-hidden />
              Live Examples
            </button>
          </div>

          {/* CLI Copy Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-brand-600" aria-hidden />
            <code>{INSTALL_CMD}</code>
            <button
              onClick={copyInstall}
              className="p-1 rounded-md hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-500 transition"
              aria-label={copied ? 'Copied!' : 'Copy install command'}
            >
              {copied
                ? <span className="text-emerald-600 text-[10px] font-semibold">✓</span>
                : <span className="text-[10px]">⎘</span>}
            </button>
          </div>

          {/* Interactive Stats Dashboard */}
          <div className="mt-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden text-left">
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-amber-400" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden />
                <span className="ml-3 text-xs font-medium text-slate-500">justtouch.design/react/overview</span>
              </div>
              <button
                onClick={() => onNavigateDocs('overview')}
                className="text-xs font-semibold text-brand-600 dark:text-brand-400 inline-flex items-center gap-1 hover:underline"
              >
                Open full workspace <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              {LANDING_STATS.map((stat) => (
                <button
                  key={stat.page}
                  onClick={() => onNavigateDocs(stat.page)}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600 bg-slate-50/40 dark:bg-slate-950/40 text-left transition group"
                >
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-brand-600 transition">
                    {stat.value}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1.5 font-medium">{stat.delta}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Engineered for Scale
          </span>
          <h2 id="features-heading" className="text-3xl font-bold mt-2">Everything you need to ship faster</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Built from the ground up for frontend teams who value clean code ownership, zero lock-in,
            and pixel-consistent visual hierarchy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, action }) => (
            <article
              key={action}
              onClick={() => onNavigateDocs(action)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigateDocs(action)}
              className="cursor-pointer p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/70 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4" aria-hidden="true">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Promo Banner */}
      {showBanner && (
        <div
          role="banner"
          className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 px-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <p className="flex-1 text-center">
              Built for modern frontend teams —{' '}
              <strong>JustTouch UI v4.0</strong> is completely open and ready for your React + Vite apps.
            </p>
            <button
              onClick={dismissBanner}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
});
