import React, { useEffect } from 'react';
import {
  Search, ArrowUpRight, ArrowDownRight,
  ChevronDown, Send, UploadCloud,
  CheckCircle2, AlertCircle, Info,
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import { PreviewWrapper, OverviewThumbnail, JustTouchLogo } from '@/components';
import type { OnThisPageItem } from '@/components';
import { P } from '@/theme';
import {
  Avatars, BadgeGroups, Badges, ButtonGroups, Buttons, Checkboxes,
  ContextMenus, CreditCards, Dropdowns, FeaturedIcons, Illustrations,
  Inputs, MobileAppStoreButtons, MultiSelect, QRCodes, RadioButtons,
  RadioGroups, RatingBadgeAndStars, Select, Sliders, SocialButtons,
  Tags, TextEditors, Textarea, Toggles, Tooltips, UtilityButtons,
  VerificationCodeInputs, VideoPlayers, LoadingIndicators, ProgressSteps,
} from '@/components';
import { BASE_VARIANTS_REGISTRY } from '@/components/base/variantsRegistry';
import { ErrorPage, PricingPage, LoginPage, SignupPage, VerificationPage, ForgotPasswordPage, EmailTemplatePage } from './SharedPages';
import { AnalyticsDashboard, OperationsDashboard, ProfileSettings, BillingSettings, HelpCenter, Changelog } from './AppExamplePages';
import { HeroSection, FeatureSection, CTASection, TestimonialsSection, PricingSection, FAQSection, FooterSection, BannerSection, BlogSection, ContactSection, TeamSection, NewsletterCTA, SocialProofSection } from './MarketingComponentPages';
import { LandingPage as MktLandingPage, AboutPage, BlogPage, ContactPage, FAQPage, LegalPage, Error404Page } from './MarketingExamplePages';
import { OVERVIEW_CATALOG } from '@/data/catalog';
import { useComponentDemoState } from '@/hooks';
import {
  GRADIENT_PRESETS,
  FAQ_ITEMS, KPI_METRICS, TEAM_MEMBERS,
} from '@/constants';
import { matchesSearch } from '@/utils';

interface ComponentContentProps {
  activePageId: string;
  onSelectPage: (pageId: string) => void;
  onVariantsChange: (items: OnThisPageItem[]) => void;
  darkMode?: boolean;
}

export const ComponentContent: React.FC<ComponentContentProps> = ({ activePageId, onSelectPage, onVariantsChange, darkMode = false }) => {
  const {
    searchFilter, setSearchFilter,
    modalOpen, setModalOpen,
    openFaq, toggleFaq,
    gradientPreset, setGradientPreset,
    chatMessages, chatInput, setChatInput, sendMessage,
    tableQuery, setTableQuery,
    currentPageNum, setCurrentPageNum,
  } = useComponentDemoState();

  useEffect(() => {
    onVariantsChange(BASE_VARIANTS_REGISTRY[activePageId] ?? []);
  }, [activePageId, onVariantsChange]);

  // SECONDARY OVERVIEWS
  if (activePageId === 'app-ui-overview' || activePageId === 'marketing-overview') {
    const categoryLabel = activePageId === 'app-ui-overview' ? 'Application UI' : 'Marketing Components';
    const color = activePageId === 'app-ui-overview' ? P.amber : P.amberDark;
    const cards = OVERVIEW_CATALOG.filter((c) => c.category === categoryLabel);
    return (
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full" style={{ background: color }} />
          <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{categoryLabel}</h2>
          <span className="text-xs" style={{ color: P.textMuted }}>({cards.length})</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((item) => (
            <button key={item.id} onClick={() => onSelectPage(item.id)}
              className="group text-left rounded-xl overflow-hidden transition-all hover:shadow-md"
              style={{ border: `1px solid ${darkMode ? P.forestMid : P.creamMuted}`, background: darkMode ? P.forest : '#fff' }}>
              <div className="h-36 flex items-center justify-center border-b"
                style={{ background: darkMode ? P.forestDeep : P.creamMid, borderColor: darkMode ? P.forestMid : P.creamMuted,
                         backgroundImage: `linear-gradient(to right,${P.amber}08 1px,transparent 1px),linear-gradient(to bottom,${P.amber}08 1px,transparent 1px)`, backgroundSize: '16px 16px' }}>
                <OverviewThumbnail type={item.previewType} />
              </div>
              <div className="p-3.5">
                <h3 className="text-sm font-semibold" style={{ color: darkMode ? P.cream : P.forest }}>{item.title}</h3>
                <p className="text-xs mt-0.5" style={{ color: P.textMuted }}>{item.count}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // OVERVIEW
  if (activePageId === 'overview') {
    const groups = [
      { label: 'Base Components',      color: P.olive },
      { label: 'Application UI',       color: P.amber },
      { label: 'Marketing Components', color: P.amberDark },
    ];
    const filteredCards = OVERVIEW_CATALOG.filter(
      (c) => matchesSearch(c.title, searchFilter) || matchesSearch(c.category, searchFilter),
    );
    return (
      <div>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: P.textMuted }} />
            <input type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter components..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg focus:outline-none"
              style={{ border: `1px solid ${darkMode ? P.forestMid : P.creamMuted}`, background: darkMode ? P.forest : '#fff', color: darkMode ? P.cream : P.forest }} />
          </div>
          <span className="text-xs font-medium" style={{ color: P.textMuted }}>{filteredCards.length} component groups</span>
        </div>
        {groups.map((group) => {
          const cards = filteredCards.filter((c) => c.category === group.label);
          if (cards.length === 0) return null;
          return (
            <div key={group.label} className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: group.color }}>{group.label}</h2>
                <span className="text-xs" style={{ color: P.textMuted }}>({cards.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cards.map((item, idx) => (
                  <button key={`${item.id}-${idx}`} onClick={() => onSelectPage(item.id)}
                    className="group text-left rounded-xl overflow-hidden transition-all hover:shadow-md"
                    style={{ border: `1px solid ${darkMode ? P.forestMid : P.creamMuted}`, background: darkMode ? P.forest : '#fff' }}>
                    <div className="h-36 flex items-center justify-center border-b"
                      style={{ background: darkMode ? P.forestDeep : P.creamMid, borderColor: darkMode ? P.forestMid : P.creamMuted,
                               backgroundImage: `linear-gradient(to right,${P.amber}08 1px,transparent 1px),linear-gradient(to bottom,${P.amber}08 1px,transparent 1px)`, backgroundSize: '16px 16px' }}>
                      <OverviewThumbnail type={item.previewType} />
                    </div>
                    <div className="p-3.5">
                      <h3 className="text-sm font-semibold" style={{ color: darkMode ? P.cream : P.forest }}>{item.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: P.textMuted }}>{item.count}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // METRICS & CHARTS
  if (activePageId === 'metrics' || activePageId === 'charts') {
    return (
      <div className="space-y-8">
        <PreviewWrapper title="KPI Metric Cards" description="Interactive metric cards with live delta indicators."
          code={`<div style={{background:'${P.creamMid}',border:'1px solid ${P.creamMuted}'}} className="p-5 rounded-xl">...</div>`}>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {KPI_METRICS.map((m) => (
              <div key={m.title} className="p-5 rounded-xl cursor-pointer transition-all hover:shadow-md"
                style={{ background: P.creamMid, border: `1px solid ${P.creamMuted}` }}>
                <p className="text-xs font-medium" style={{ color: P.textMuted }}>{m.title}</p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl font-bold" style={{ color: P.forest }}>{m.val}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: m.up ? '#d1fae5' : '#fee2e2', color: m.up ? '#065f46' : '#991b1b' }}>
                    {m.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{m.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </PreviewWrapper>
        <PreviewWrapper title="Line Chart & Donut" description="SVG area chart and device breakdown donut."
          code={`// SVG area chart with olive + amber strokes`}>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-5 rounded-xl" style={{ border: `1px solid ${P.creamMuted}`, background: '#fff' }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold" style={{ color: P.forest }}>Downloads (Last 7 Months)</h4>
                  <p className="text-xs" style={{ color: P.textMuted }}>React + Tailwind installs</p>
                </div>
                <span className="text-xs font-semibold" style={{ color: P.amberDark }}>+32% YoY</span>
              </div>
              <svg viewBox="0 0 400 130" className="w-full h-36">
                <defs><linearGradient id="jtG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={P.olive} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={P.olive} stopOpacity="0" />
                </linearGradient></defs>
                <path d="M0 105 L65 88 L130 92 L195 60 L260 66 L325 32 L400 18 L400 130 L0 130 Z" fill="url(#jtG)" />
                <path d="M0 105 L65 88 L130 92 L195 60 L260 66 L325 32 L400 18" fill="none" stroke={P.olive} strokeWidth="2.5" />
                <path d="M0 115 L65 100 L130 105 L195 80 L260 85 L325 55 L400 40" fill="none" stroke={P.amber} strokeWidth="1.5" strokeDasharray="4 2" />
              </svg>
            </div>
            <div className="p-5 rounded-xl flex flex-col items-center justify-center text-center"
              style={{ border: `1px solid ${P.creamMuted}`, background: '#fff' }}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: P.forest }}>Traffic by Device</h4>
              <div className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{ border: `14px solid ${P.olive}`, borderRightColor: P.creamMuted, borderBottomColor: P.amber }}>
                <span className="text-sm font-bold" style={{ color: P.forest }}>68%</span>
              </div>
              <p className="text-xs mt-4" style={{ color: P.textMuted }}>Desktop 68% · Mobile 24% · Tablet 8%</p>
            </div>
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // DATA TABLES & PAGINATION
  if (activePageId === 'tables' || activePageId === 'paginations') {
    const rows = TEAM_MEMBERS.filter(
      (r) => matchesSearch(r.name, tableQuery) || matchesSearch(r.role, tableQuery),
    );
    return (
      <PreviewWrapper title="Team Data Table" description="Interactive searchable table with status badges and pagination."
        code={`<table className="w-full text-left">...</table>`}>
        <div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            style={{ borderBottom: `1px solid ${P.creamMuted}` }}>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold" style={{ color: P.forest }}>Team members</h4>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: P.creamMid, color: P.amberDark }}>{rows.length} users</span>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: P.textMuted }} />
              <input type="text" value={tableQuery} onChange={(e) => setTableQuery(e.target.value)}
                placeholder="Search member or role..."
                className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg focus:outline-none"
                style={{ border: `1px solid ${P.creamMuted}`, background: '#fff', color: P.forest }} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead style={{ background: P.creamMid, borderBottom: `1px solid ${P.creamMuted}` }}>
                <tr>{['Name','Status','Role','Squad'].map(h => (
                  <th key={h} className="py-3 px-4 text-xs font-semibold" style={{ color: P.textMuted }}>{h}</th>
                ))}</tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.email} style={{ borderBottom: `1px solid ${P.creamMuted}` }}>
                    <td className="py-3 px-4">
                      <p className="font-medium text-sm" style={{ color: P.forest }}>{r.name}</p>
                      <p className="text-xs" style={{ color: P.textMuted }}>{r.email}</p>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: r.status === 'Active' ? '#d1fae5' : '#fef3c7', color: r.status === 'Active' ? '#065f46' : '#92400e' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />{r.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm" style={{ color: P.textMid }}>{r.role}</td>
                    <td className="py-3 px-4 text-sm" style={{ color: P.textMuted }}>{r.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 flex items-center justify-between text-xs" style={{ borderTop: `1px solid ${P.creamMuted}` }}>
            <button onClick={() => setCurrentPageNum(Math.max(1, currentPageNum - 1))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition"
              style={{ border: `1px solid ${P.creamMuted}`, color: P.textMuted }}>
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map((p) => (
                <button key={p} onClick={() => setCurrentPageNum(p)}
                  className="w-7 h-7 rounded-lg font-semibold transition"
                  style={{ background: currentPageNum === p ? P.creamMid : 'transparent', color: currentPageNum === p ? P.amberDark : P.textMuted }}>{p}</button>
              ))}
            </div>
            <button onClick={() => setCurrentPageNum(Math.min(4, currentPageNum + 1))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition"
              style={{ border: `1px solid ${P.creamMuted}`, color: P.textMuted }}>
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </PreviewWrapper>
    );
  }

  // MODALS
  if (activePageId === 'modals') {
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Confirmation Modal" description="Interactive dialog overlay with confirm/cancel actions."
          code={`<div style={{border:'2px solid ${P.amber}'}} className="p-6 rounded-2xl bg-white max-w-md mx-auto">...</div>`}>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl"
              style={{ border: `1px solid ${P.creamMuted}`, background: P.creamMid }}>
              <p className="text-sm font-semibold" style={{ color: P.forest }}>Test the modal dialog below</p>
              <button onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-lg text-white text-xs font-semibold transition"
                style={{ background: P.olive }}>Open Modal</button>
            </div>
            {modalOpen && (
              <div className="p-6 rounded-2xl shadow-xl max-w-md mx-auto text-center"
                style={{ border: `2px solid ${P.amber}`, background: '#fff' }}>
                <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold" style={{ color: P.forest }}>Published successfully</h4>
                <p className="text-xs mt-1.5" style={{ color: P.textMuted }}>Your JustTouch tokens are now live.</p>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <button onClick={() => setModalOpen(false)}
                    className="py-2 rounded-lg text-xs font-semibold transition"
                    style={{ border: `1px solid ${P.creamMuted}`, color: P.textMuted }}>Close</button>
                  <button onClick={() => setModalOpen(false)}
                    className="py-2 rounded-lg text-white text-xs font-semibold transition"
                    style={{ background: P.olive }}>View changelog</button>
                </div>
              </div>
            )}
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // NOTIFICATIONS
  if (activePageId === 'notifications') {
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Toast Notifications" description="Semantic alert banners for success, warning, error, and info states."
          code={`<div style={{border:'1px solid ${P.amber}',background:'${P.creamMid}'}} className="p-4 rounded-xl flex items-center gap-3">...</div>`}>
          <div className="p-6 space-y-3">
            {[
              { icon: CheckCircle2, label: 'Success', msg: 'Component published successfully.',        bg: '#d1fae5', border: '#6ee7b7', color: '#065f46' },
              { icon: AlertCircle,  label: 'Warning', msg: 'Bundle size exceeds recommended limit.',  bg: '#fef3c7', border: '#fcd34d', color: '#92400e' },
              { icon: AlertCircle,  label: 'Error',   msg: 'Build failed. Check your TypeScript errors.', bg: '#fee2e2', border: '#fca5a5', color: '#991b1b' },
              { icon: Info,         label: 'Info',    msg: 'New version v4.1 is available.',           bg: P.creamMid, border: P.amber, color: P.forest },
            ].map(({ icon: Icon, label, msg, bg, border, color }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: bg, border: `1px solid ${border}` }}>
                <Icon className="w-5 h-5 shrink-0" style={{ color }} />
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color }}>{label}</p>
                  <p className="text-xs" style={{ color }}>{msg}</p>
                </div>
                <button className="text-xs font-medium" style={{ color }}>Dismiss</button>
              </div>
            ))}
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // HEADER NAVIGATIONS
  if (activePageId === 'header-navigations') {
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Top Navigation Bar" description="Responsive header with logo, nav links, search, and user menu."
          code={`<header style={{background:'${P.forest}'}} className="h-14 px-6 flex items-center justify-between">...</header>`}>
          <div>
            <div className="h-14 px-6 flex items-center justify-between" style={{ background: P.forest }}>
              <div className="flex items-center gap-6">
                <JustTouchLogo size="sm" />
                <div className="hidden md:flex items-center gap-5">
                  {['Components','Templates','Pricing','Docs'].map((l) => (
                    <button key={l} className="text-xs font-medium transition" style={{ color: P.creamDark }}>{l}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                  style={{ border: `1px solid ${P.forestMid}`, color: P.creamDark }}>Log in</button>
                <button className="px-3 py-1.5 rounded-lg text-white text-xs font-semibold"
                  style={{ background: P.amber, color: P.forest }}>Get started</button>
              </div>
            </div>
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // GRADIENT & IMAGE PICKERS
  if (activePageId === 'gradient-image-pickers') {
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Gradient Picker" description="Interactive surface gradient selector with live preview."
          code={`// Interactive Gradient Selector`}>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl space-y-3" style={{ border: `1px solid ${P.creamMuted}` }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: P.textMuted }}>Gradient Picker</p>
              <div className={`h-32 rounded-xl bg-gradient-to-br ${gradientPreset} shadow-inner`} />
              <div className="flex gap-2">
                {GRADIENT_PRESETS.map((g) => (
                  <button key={g} onClick={() => setGradientPreset(g)}
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${g} transition`}
                    style={{ outline: gradientPreset === g ? `2px solid ${P.forest}` : '2px solid transparent', outlineOffset: '1px' }} />
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl" style={{ border: `1px solid ${P.creamMuted}` }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: P.textMuted }}>Image Upload</p>
              <div className="h-32 rounded-xl flex flex-col items-center justify-center gap-2"
                style={{ border: `2px dashed ${P.creamMuted}`, background: P.creamMid }}>
                <UploadCloud className="w-6 h-6" style={{ color: P.amber }} />
                <p className="text-xs font-medium" style={{ color: P.textMid }}>Click to upload or drag & drop</p>
                <p className="text-[10px]" style={{ color: P.textMuted }}>PNG, JPG, SVG up to 10MB</p>
              </div>
            </div>
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // MESSAGING
  if (activePageId === 'messaging') {
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Team Chat" description="Real-time chat thread with message bubbles and composer."
          code={`// Interactive Chat Feed`}>
          <div className="p-4 flex flex-col justify-between h-72">
            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex flex-col ${m.me ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] mb-0.5" style={{ color: P.textMuted }}>{m.sender} · {m.time}</span>
                  <div className="px-3 py-2 rounded-xl text-xs max-w-[80%]"
                    style={{ background: m.me ? P.olive : P.creamMid, color: m.me ? '#fff' : P.forest }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2 pt-3" style={{ borderTop: `1px solid ${P.creamMuted}` }}>
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)}
                placeholder="Write a message..." className="flex-1 px-3 py-1.5 text-xs rounded-lg focus:outline-none"
                style={{ border: `1px solid ${P.creamMuted}`, background: '#fff', color: P.forest }} />
              <button type="submit" className="p-2 rounded-lg text-white transition"
                style={{ background: P.olive }}><Send className="w-3.5 h-3.5" /></button>
            </form>
          </div>
        </PreviewWrapper>
      </div>
    );
  }



  // BASE COMPONENTS — individual pages
  const BASE_COMPONENT_MAP: Record<string, React.ReactNode> = {
    'avatars':                  <Avatars />,
    'badge-groups':             <BadgeGroups />,
    'badges':                   <Badges />,
    'button-groups':            <ButtonGroups />,
    'buttons':                  <Buttons />,
    'checkboxes':               <Checkboxes />,
    'context-menus':            <ContextMenus />,
    'credit-cards':             <CreditCards />,
    'dropdowns':                <Dropdowns />,
    'featured-icons':           <FeaturedIcons />,
    'illustrations':            <Illustrations />,
    'inputs':                   <Inputs />,
    'mobile-app-store-buttons': <MobileAppStoreButtons />,
    'multi-select':             <MultiSelect />,
    'qr-codes':                 <QRCodes />,
    'radio-buttons':            <RadioButtons />,
    'radio-groups':             <RadioGroups />,
    'rating-badge-and-stars':   <RatingBadgeAndStars />,
    'select':                   <Select />,
    'sliders':                  <Sliders />,
    'social-buttons':           <SocialButtons />,
    'tags':                     <Tags />,
    'text-editors':             <TextEditors />,
    'textarea':                 <Textarea />,
    'toggles':                  <Toggles />,
    'tooltips':                 <Tooltips />,
    'utility-buttons':          <UtilityButtons />,
    'verification-code-inputs': <VerificationCodeInputs />,
    'video-players':            <VideoPlayers />,
    'loading-indicators':       <LoadingIndicators />,
    'progress-steps':           <ProgressSteps />,
  };

  if (activePageId in BASE_COMPONENT_MAP) {
    return <div>{BASE_COMPONENT_MAP[activePageId]}</div>;
  }

  // SHARED PAGES — handled by dedicated components
  const SHARED_MAP: Record<string, React.ReactNode> = {
    'login-pages':           <LoginPage />,
    'signup-pages':          <SignupPage />,
    'verification-pages':    <VerificationPage />,
    'forgot-password-pages': <ForgotPasswordPage />,
    'pricing-pages':         <PricingPage />,
    'error-pages':           <ErrorPage onBack={() => onSelectPage('overview')} />,
    'email-templates':       <EmailTemplatePage />,
  };
  if (activePageId in SHARED_MAP) return <div>{SHARED_MAP[activePageId]}</div>;

  // APPLICATION EXAMPLES
  const APP_EXAMPLE_MAP: Record<string, React.ReactNode> = {
    'dashboards-01':          <AnalyticsDashboard />,
    'dashboards-02':          <OperationsDashboard />,
    'settings-pages-01':      <ProfileSettings />,
    'settings-pages-02':      <BillingSettings />,
    'informational-pages-01': <HelpCenter />,
    'informational-pages-02': <Changelog />,
  };
  if (activePageId in APP_EXAMPLE_MAP) return <div>{APP_EXAMPLE_MAP[activePageId]}</div>;

  // MARKETING COMPONENTS
  const MARKETING_COMP_MAP: Record<string, React.ReactNode> = {
    'hero-sections':         <HeroSection />,
    'feature-sections':      <FeatureSection />,
    'cta-sections':          <CTASection />,
    'testimonials':          <TestimonialsSection />,
    'pricing-sections':      <PricingSection />,
    'faq-sections':          <FAQSection />,
    'footers':               <FooterSection />,
    'banners':               <BannerSection />,
    'blog-sections':         <BlogSection />,
    'contact-sections':      <ContactSection />,
    'team-sections':         <TeamSection />,
    'newsletter-cta':        <NewsletterCTA />,
    'social-proof-sections': <SocialProofSection />,
  };
  if (activePageId in MARKETING_COMP_MAP) return <div>{MARKETING_COMP_MAP[activePageId]}</div>;

  // MARKETING PAGES
  const MARKETING_PAGE_MAP: Record<string, React.ReactNode> = {
    'landing-pages':   <MktLandingPage />,
    'about-pages':     <AboutPage />,
    'blog-pages':      <BlogPage />,
    'contact-pages':   <ContactPage />,
    'faq-pages':       <FAQPage />,
    'legal-pages':     <LegalPage />,
    'error-404-pages': <Error404Page onBack={() => onSelectPage('overview')} />,
  };
  if (activePageId in MARKETING_PAGE_MAP) return <div>{MARKETING_PAGE_MAP[activePageId]}</div>;

  // Fallback — FAQ + Newsletter CTA
  return (
    <div className="space-y-8">
      <PreviewWrapper title="FAQ Accordion" description="Expandable support questions with animated chevron." code={`// Interactive FAQ Accordion`}>
        <div className="p-6 max-w-2xl mx-auto divide-y" style={{ borderColor: P.creamMuted }}>
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold"
                style={{ color: P.forest }}>
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  style={{ color: P.textMuted }} />
              </button>
              {openFaq === idx && (
                <p className="text-xs mt-2 leading-relaxed" style={{ color: P.textMid }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </PreviewWrapper>
      <PreviewWrapper title="Newsletter CTA" description="High-converting email capture banner." code={`// Newsletter CTA Banner`}>
        <div className="p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ background: P.forest }}>
          <div>
            <h4 className="text-base font-bold" style={{ color: P.cream }}>Start building with JustTouch UI</h4>
            <p className="text-xs mt-1" style={{ color: P.creamDark }}>Join 10,000+ developers shipping faster.</p>
          </div>
          <button onClick={() => onSelectPage('overview')}
            className="px-4 py-2.5 rounded-lg text-xs font-semibold shrink-0 transition"
            style={{ background: P.amber, color: P.forest }}>Browse components</button>
        </div>
      </PreviewWrapper>
    </div>
  );
};
