import { memo, useState, useCallback } from 'react';
import {
  BookOpen, Sparkles, Layers, ShieldCheck, Zap,
  Moon, Sun, ArrowRight, Terminal, Palette, LayoutGrid, X, ArrowUpRight,
} from 'lucide-react';
import { JustTouchLogo } from '@components';
import { useClipboard } from '@hooks';
import { INSTALL_CMD, LANDING_STATS, LANDING_NAV_LINKS } from '@constants';
import { P } from '@justtouch/ui';

interface LandingPageProps {
  onNavigateDocs: (pageId?: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const FEATURES = [
  { icon: LayoutGrid, title: '8 Categories',         desc: 'Base, App UI, Marketing, Auth, Dashboards, Settings, Shared, and Marketing pages.',  action: 'overview'     },
  { icon: Palette,    title: 'Dark Mode Ready',       desc: 'Every component ships with light and dark variants via Tailwind class strategy.',      action: 'colors'       },
  { icon: ShieldCheck,title: 'ARIA Accessible',       desc: 'Focus rings, semantic HTML, keyboard navigation built into every block.',              action: 'buttons'      },
  { icon: Layers,     title: 'TSX Ownership',         desc: 'Copy clean TypeScript source. No runtime, no lock-in, no subscriptions.',             action: 'tables'       },
  { icon: Zap,        title: 'Zero Bloat',            desc: 'React + Tailwind + Lucide only. Ships as tree-shaken static assets.',                 action: 'installation' },
  { icon: Sparkles,   title: 'Full Templates',        desc: 'Landing pages, Pricing, Blog, Legal, About — assembled and ready to ship.',           action: 'about-pages'  },
] as const;

export const LandingPage = memo<LandingPageProps>(function LandingPage({
  onNavigateDocs, darkMode, onToggleDarkMode,
}) {
  const { copied, copy } = useClipboard();
  const [showBanner, setShowBanner] = useState(true);

  const copyInstall   = useCallback(() => copy(INSTALL_CMD), [copy]);
  const dismissBanner = useCallback(() => setShowBanner(false), []);

  const pageBg  = darkMode ? P.forestDeep : P.cream;
  const cardBg  = darkMode ? P.forest     : '#FFFFFF';
  const textPri = darkMode ? P.textLight  : P.textDark;
  const textSub = darkMode ? P.creamDark  : P.textMuted;
  const border  = darkMode ? P.forestMid  : P.creamMuted;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: pageBg, color: textPri }}>

      {/* ── Slim top announcement bar ─────────────────────────────────────── */}
      {showBanner && (
        <div className="flex items-center justify-center gap-3 px-4 py-2 text-xs"
          style={{ background: P.olive, color: '#fff' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
          <span>JustTouch UI v4.0 is live — 240+ components, fully open source</span>
          <button onClick={dismissBanner} className="ml-2 opacity-70 hover:opacity-100 shrink-0"
            aria-label="Dismiss">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40"
        style={{
          background: darkMode ? `${P.forestDeep}f8` : 'rgba(255,255,255,0.94)',
          borderBottom: `1px solid ${border}`,
          backdropFilter: 'blur(12px)',
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Home">
              <JustTouchLogo size="sm" />
            </button>
            <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: textSub }}>
              {LANDING_NAV_LINKS.map(({ label, page }) => (
                <button key={page} onClick={() => onNavigateDocs(page)}
                  className="transition hover:opacity-60 font-medium">{label}</button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onToggleDarkMode} className="p-1.5 rounded-md transition"
              style={{ color: textSub }} aria-label="Toggle theme">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => onNavigateDocs('overview')}
              className="px-4 py-1.5 rounded-md text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: P.amberDark }}>
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero — asymmetric split layout ───────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">

        {/* Background logo watermark */}
        <div className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-[680px] h-[680px] opacity-50" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="bg-a" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7B5CF5" />
                <stop offset="100%" stopColor="#C84B8F" />
              </linearGradient>
              <linearGradient id="bg-b" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9B6FF5" />
                <stop offset="100%" stopColor="#5B3FD4" />
              </linearGradient>
              <linearGradient id="bg-c" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#C84B8F" />
                <stop offset="100%" stopColor="#7B5CF5" />
              </linearGradient>
            </defs>
            {/* back-left large rect */}
            <rect x="8" y="14" width="38" height="46" rx="8" fill="url(#bg-b)" opacity="0.6" />
            {/* top-right pill */}
            <rect x="42" y="12" width="46" height="20" rx="10" fill="url(#bg-a)" opacity="0.9" />
            {/* center overlap rect */}
            <rect x="22" y="26" width="38" height="38" rx="8" fill="url(#bg-a)" opacity="0.75" />
            {/* right-side pill accent */}
            <rect x="62" y="36" width="14" height="28" rx="7" fill="url(#bg-c)" opacity="0.8" />
            {/* bottom-right large rect */}
            <rect x="46" y="50" width="40" height="36" rx="8" fill="url(#bg-c)" opacity="0.85" />
            {/* bottom-left circle */}
            <circle cx="18" cy="80" r="9" fill="url(#bg-b)" opacity="0.8" />
            {/* bottom-center small circle */}
            <circle cx="40" cy="86" r="5" fill="url(#bg-a)" opacity="0.6" />
            {/* concentric ring hints */}
            <circle cx="46" cy="50" r="14" stroke="#9B6FF5" strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="46" cy="50" r="20" stroke="#9B6FF5" strokeWidth="0.6" fill="none" opacity="0.3" />
            <circle cx="46" cy="50" r="26" stroke="#9B6FF5" strokeWidth="0.4" fill="none" opacity="0.2" />
            <circle cx="46" cy="50" r="2" fill="#9B6FF5" opacity="0.7" />
          </svg>
        </div>
        <div className="relative z-10 grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

          {/* Left: text block */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-medium mb-5 px-3 py-1 rounded-full"
              style={{ background: cardBg, border: `1px solid ${border}`, color: textSub }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: P.amberDark }} />
              React · TypeScript · Tailwind CSS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
              style={{ color: textPri }}>
              Build UIs that<br />
              <span style={{ color: P.olive }}>ship on time.</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: textSub }}>
              240+ accessible React components. Copy the TSX, own the code,
              ship production interfaces in minutes — not weeks.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button onClick={() => onNavigateDocs('overview')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: P.olive }}>
                <Sparkles className="w-4 h-4" />
                Browse components
              </button>
              <button onClick={() => onNavigateDocs('introduction')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition hover:opacity-70"
                style={{ background: cardBg, color: textPri, border: `1px solid ${border}` }}>
                <BookOpen className="w-4 h-4" style={{ color: textSub }} />
                Read the docs
              </button>
            </div>

            {/* CLI */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-xs font-mono"
              style={{ background: cardBg, border: `1px solid ${border}`, color: textSub }}>
              <Terminal className="w-3.5 h-3.5 shrink-0" style={{ color: P.amberDark }} />
              <code style={{ color: textPri }}>{INSTALL_CMD}</code>
              <button onClick={copyInstall}
                className="px-2 py-0.5 rounded text-[10px] font-semibold transition"
                style={{
                  background: copied ? '#d1fae5' : pageBg,
                  color: copied ? '#065f46' : textSub,
                  border: `1px solid ${border}`,
                }}>
                {copied ? '✓' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Right: stats card stack */}
          <div className="flex flex-col gap-3">
            {LANDING_STATS.map((stat, i) => (
              <button key={stat.page} onClick={() => onNavigateDocs(stat.page)}
                className="flex items-center justify-between px-5 py-4 rounded-xl text-left transition hover:shadow-md group"
                style={{
                  background: cardBg,
                  border: `1px solid ${border}`,
                  transform: `translateX(${i % 2 === 0 ? '0' : '12px'})`,
                }}>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: textSub }}>{stat.label}</p>
                  <p className="text-xl font-bold" style={{ color: textPri }}>{stat.value}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium" style={{ color: P.amberDark }}>{stat.delta}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition"
                    style={{ color: P.amberDark }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal feature strip — scrollable on mobile ──────────────── */}
      <section className="border-y py-12" style={{ borderColor: border }}
        aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-8">
            <h2 id="features-heading" className="text-xl font-bold" style={{ color: textPri }}>
              What's included
            </h2>
            <button onClick={() => onNavigateDocs('overview')}
              className="text-sm font-medium inline-flex items-center gap-1 transition hover:opacity-70"
              style={{ color: P.amberDark }}>
              View all <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6-column grid on desktop, 2-col on tablet, horizontal scroll on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {FEATURES.map(({ icon: Icon, title, desc, action }) => (
              <article key={action}
                onClick={() => onNavigateDocs(action)}
                role="button" tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigateDocs(action)}
                className="cursor-pointer p-4 rounded-xl border transition hover:shadow-sm focus:outline-none group"
                style={{ background: cardBg, borderColor: border }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: pageBg }}>
                  <Icon className="w-4 h-4" style={{ color: P.textMuted }} />
                </div>
                <h3 className="text-xs font-semibold mb-1" style={{ color: textPri }}>{title}</h3>
                <p className="text-[11px] leading-relaxed" style={{ color: textSub }}>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Component category showcase — 3-col asymmetric ───────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Large left card */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{ background: cardBg, border: `1px solid ${border}` }}>
            <div className="px-6 py-5 flex items-center justify-between"
              style={{ borderBottom: `1px solid ${border}` }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                  style={{ color: P.amberDark }}>Application UI</p>
                <h3 className="text-base font-bold" style={{ color: textPri }}>
                  Dashboards, Tables & Charts
                </h3>
              </div>
              <button onClick={() => onNavigateDocs('tables')}
                className="inline-flex items-center gap-1 text-xs font-medium transition hover:opacity-70"
                style={{ color: P.amberDark }}>
                Explore <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-3 gap-3">
              {['Metrics & KPIs', 'Data Tables', 'Charts', 'Modals', 'Notifications', 'Messaging'].map((name) => (
                <div key={name} className="px-3 py-2.5 rounded-lg text-xs font-medium text-center"
                  style={{ background: pageBg, color: textSub, border: `1px solid ${border}` }}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Right stack */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-5 flex-1"
              style={{ background: P.forest, border: `1px solid ${P.forestMid}` }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: P.creamDark }}>Marketing</p>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#fff' }}>
                Hero, Pricing & Landing pages
              </h3>
              <button onClick={() => onNavigateDocs('hero-sections')}
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition hover:opacity-90"
                style={{ background: P.amberDark, color: '#fff' }}>
                View templates <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="rounded-2xl p-5"
              style={{ background: cardBg, border: `1px solid ${border}` }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: P.amberDark }}>Base Components</p>
              <h3 className="text-sm font-bold mb-1" style={{ color: textPri }}>
                31 atomic building blocks
              </h3>
              <p className="text-xs" style={{ color: textSub }}>
                Buttons, Inputs, Badges, Toggles, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ─────────────────────────────────────────────────── */}
      <footer className="mt-auto border-t" style={{ borderColor: border, background: cardBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <JustTouchLogo size="sm" />
          <p className="text-xs" style={{ color: textSub }}>
            Open source · MIT License · Built with React + Tailwind CSS
          </p>
          <button onClick={() => onNavigateDocs('overview')}
            className="text-xs font-medium inline-flex items-center gap-1 transition hover:opacity-70"
            style={{ color: P.amberDark }}>
            Browse components <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </footer>
    </div>
  );
});
