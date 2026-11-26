import { memo, useState, useCallback } from 'react';
import {
  Box, BookOpen, Sparkles, Layers, ShieldCheck, Zap,
  Moon, Sun, ArrowRight, Terminal, Palette, LayoutGrid, X,
} from 'lucide-react';
import { JustTouchLogo } from '@/components';
import { useClipboard } from '@/hooks';
import { INSTALL_CMD, LANDING_STATS, LANDING_NAV_LINKS } from '@/constants';
import { P } from '@/theme';

interface LandingPageProps {
  onNavigateDocs: (pageId?: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const FEATURES = [
  { icon: LayoutGrid, title: '8 Complete Component Categories',  desc: 'From primitive Buttons and Inputs to full SaaS Dashboards, Settings, Auth flows, and Marketing pages.',          action: 'overview'    },
  { icon: Palette,    title: 'Semantic Tokens & Dark Mode',       desc: 'Every component supports instant light/dark mode switching and customizable Tailwind CSS brand variables.',         action: 'colors'      },
  { icon: ShieldCheck,title: 'Accessible & Keyboard Ready',       desc: 'Focus rings, ARIA roles, semantic HTML, and responsive mobile-first layouts built into every block.',               action: 'buttons'     },
  { icon: Layers,     title: 'Copy-Paste TSX Ownership',          desc: 'Inspect live previews across Desktop, Tablet, and Mobile viewports, then copy clean TypeScript source.',            action: 'tables'      },
  { icon: Zap,        title: 'Zero Runtime Bloat',                desc: 'Pure React + Tailwind CSS utilities with Lucide icons. No heavy CSS-in-JS runtime overhead.',                      action: 'installation'},
  { icon: Sparkles,   title: 'Full Page Templates',               desc: 'Ready-to-ship About pages, Landing pages, Pricing matrices, Blog layouts, and Legal documentation.',               action: 'about-pages' },
] as const;

export const LandingPage = memo<LandingPageProps>(function LandingPage({
  onNavigateDocs, darkMode, onToggleDarkMode,
}) {
  const { copied, copy } = useClipboard();
  const [showBanner, setShowBanner] = useState(true);

  const copyInstall   = useCallback(() => copy(INSTALL_CMD), [copy]);
  const dismissBanner = useCallback(() => setShowBanner(false), []);

  const bg      = darkMode ? P.forestDeep : P.cream;
  const cardBg  = darkMode ? P.forest     : '#FFFFFF';
  const border  = darkMode ? P.forestMid  : P.creamMuted;
  const text    = darkMode ? P.cream      : P.forest;
  const textSub = darkMode ? P.creamDark  : P.textMid;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: bg, color: text }}>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b" style={{ borderColor: border, background: darkMode ? `${P.forestDeep}f5` : 'rgba(254,250,224,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
              <JustTouchLogo size="md" />
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: textSub }} aria-label="Main navigation">
              {LANDING_NAV_LINKS.map(({ label, page }) => (
                <button key={page} onClick={() => onNavigateDocs(page)}
                  className="transition hover:opacity-80">{label}</button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={onToggleDarkMode}
              className="p-2 rounded-lg border transition"
              style={{ borderColor: border, color: darkMode ? P.amber : P.textMuted, background: 'transparent' }}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => onNavigateDocs('auth-pages')}
              className="hidden sm:inline-flex px-3.5 py-2 rounded-lg border text-sm font-semibold transition"
              style={{ borderColor: border, color: text, background: 'transparent' }}>
              Sign in
            </button>
            <button onClick={() => onNavigateDocs('overview')}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-sm transition"
              style={{ background: P.olive }}>
              Explore Library
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b"
        style={{ borderColor: border }} aria-labelledby="hero-heading">
        {/* Dot grid */}
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true"
          style={{ backgroundImage: `radial-gradient(${P.amber} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl border shadow-lg flex items-center justify-center"
            style={{ background: P.forest, borderColor: P.forestMid }} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9" style={{ color: P.amber }}>
              <circle cx="12" cy="12" r="2.2" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.4" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.4" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>

          <p className="text-sm font-semibold mb-3" style={{ color: P.amberDark }}>JustTouch UI React</p>

          <h1 id="hero-heading" className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.12] mb-6"
            style={{ color: text }}>
            The ultimate open-source<br />React UI component library
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-9" style={{ color: textSub }}>
            JustTouch UI React is a comprehensive collection of accessible React components built
            with Tailwind CSS and TypeScript. Just copy, paste, and ship production interfaces faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
            <button onClick={() => onNavigateDocs('overview')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold shadow-xs transition"
              style={{ borderColor: border, background: cardBg, color: text }}>
              <Box className="w-4 h-4" style={{ color: P.textMuted }} aria-hidden />
              Components
            </button>
            <button onClick={() => onNavigateDocs('introduction')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold shadow-xs transition"
              style={{ borderColor: border, background: cardBg, color: text }}>
              <BookOpen className="w-4 h-4" style={{ color: P.textMuted }} aria-hidden />
              Documentation
            </button>
            <button onClick={() => onNavigateDocs('dashboards')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white shadow-sm transition"
              style={{ background: P.olive }}>
              <Sparkles className="w-4 h-4" aria-hidden />
              Live Examples
            </button>
          </div>

          {/* CLI Copy Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border text-xs font-mono"
            style={{ borderColor: border, background: darkMode ? P.forestMid : P.creamMid, color: textSub }}>
            <Terminal className="w-3.5 h-3.5" style={{ color: P.amberDark }} aria-hidden />
            <code>{INSTALL_CMD}</code>
            <button onClick={copyInstall}
              className="p-1 rounded-md transition"
              style={{ color: P.textMuted }}
              aria-label={copied ? 'Copied!' : 'Copy install command'}>
              {copied
                ? <span className="text-[10px] font-semibold" style={{ color: '#065f46' }}>✓</span>
                : <span className="text-[10px]">⎘</span>}
            </button>
          </div>

          {/* Stats Dashboard Preview */}
          <div className="mt-14 rounded-2xl border shadow-xl overflow-hidden text-left"
            style={{ borderColor: border, background: cardBg }}>
            <div className="px-4 py-3 border-b flex items-center justify-between"
              style={{ borderColor: border, background: darkMode ? P.forestMid : P.creamMid }}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-amber-400" aria-hidden />
                <span className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden />
                <span className="ml-3 text-xs font-medium" style={{ color: textSub }}>
                  justtouch.design/react/overview
                </span>
              </div>
              <button onClick={() => onNavigateDocs('overview')}
                className="text-xs font-semibold inline-flex items-center gap-1 hover:underline"
                style={{ color: P.amberDark }}>
                Open full workspace <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              {LANDING_STATS.map((stat) => (
                <button key={stat.page} onClick={() => onNavigateDocs(stat.page)}
                  className="p-4 rounded-xl border text-left transition group"
                  style={{ borderColor: border, background: darkMode ? P.forestMid : P.creamMid }}>
                  <p className="text-xs font-medium" style={{ color: textSub }}>{stat.label}</p>
                  <p className="text-2xl font-bold mt-1" style={{ color: text }}>{stat.value}</p>
                  <p className="text-xs mt-1.5 font-medium" style={{ color: P.amberDark }}>{stat.delta}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: P.amberDark }}>
            Engineered for Scale
          </span>
          <h2 id="features-heading" className="text-3xl font-bold mt-2" style={{ color: text }}>
            Everything you need to ship faster
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: textSub }}>
            Built from the ground up for frontend teams who value clean code ownership, zero lock-in,
            and pixel-consistent visual hierarchy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, action }) => (
            <article key={action}
              onClick={() => onNavigateDocs(action)}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigateDocs(action)}
              className="cursor-pointer p-6 rounded-2xl border transition hover:shadow-md focus:outline-none"
              style={{ borderColor: border, background: cardBg }}>
              <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-4"
                style={{ background: P.creamMid, borderColor: P.creamMuted, color: P.amberDark }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: text }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textSub }}>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Banner ─────────────────────────────────────────────────────────── */}
      {showBanner && (
        <div role="banner" className="mt-auto border-t py-3 px-4"
          style={{ borderColor: border, background: darkMode ? P.forestMid : P.creamMid }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm"
            style={{ color: textSub }}>
            <p className="flex-1 text-center">
              Built for modern frontend teams —{' '}
              <strong style={{ color: text }}>JustTouch UI v4.0</strong> is completely open and ready for your React + Vite apps.
            </p>
            <button onClick={dismissBanner}
              className="p-1 rounded-md transition"
              style={{ color: P.textMuted }}
              aria-label="Dismiss banner">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
});
