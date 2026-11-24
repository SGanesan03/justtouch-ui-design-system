import React, { useEffect } from 'react';
import {
  Search, ArrowUpRight, ArrowDownRight,
  ChevronDown, Send, UploadCloud,
  CheckCircle2, AlertCircle, Info,
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import { PreviewWrapper, OverviewThumbnail } from '@/components';
import type { OnThisPageItem } from '@/components';
import {
  Avatars, BadgeGroups, Badges, ButtonGroups, Buttons, Checkboxes,
  ContextMenus, CreditCards, Dropdowns, FeaturedIcons, Illustrations,
  Inputs, MobileAppStoreButtons, MultiSelect, QRCodes, RadioButtons,
  RadioGroups, RatingBadgeAndStars, Select, Sliders, SocialButtons,
  Tags, TextEditors, Textarea, Toggles, Tooltips, UtilityButtons,
  VerificationCodeInputs, VideoPlayers, LoadingIndicators, ProgressSteps,
} from '@/components';
import { BASE_VARIANTS_REGISTRY } from '@/components/base/variantsRegistry';
import { PAGE_CONTENT_MAP } from './PageContentMap';
import { ErrorPage, PricingPage, LoginPage, SignupPage, VerificationPage, ForgotPasswordPage, EmailTemplatePage } from './SharedPages';
import { AnalyticsDashboard, OperationsDashboard, ProfileSettings, BillingSettings, HelpCenter, Changelog } from './AppExamplePages';
import { HeroSection, FeatureSection, CTASection, TestimonialsSection, PricingSection, FAQSection, FooterSection, BannerSection, BlogSection, ContactSection, TeamSection, NewsletterCTA, SocialProofSection } from './MarketingComponentPages';
import { LandingPage as MktLandingPage, AboutPage, BlogPage, ContactPage, FAQPage, LegalPage, Error404Page } from './MarketingExamplePages';
import { OVERVIEW_CATALOG } from '@/data/catalog';
import { useComponentDemoState } from '@/hooks';
import {
  GRADIENT_PRESETS,
  FAQ_ITEMS, KPI_METRICS,
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
    activeTab, setActiveTab,
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

  // OVERVIEW — grouped by category with palette colors
  if (activePageId === 'overview') {
    const sky = '#7ABEE8';
    const navy = '#223049';
    const surface = '#E6E8EB';
    const tint = '#EDF5FF';
    const groups = [
      { label: 'Base Components',      color: sky },
      { label: 'Application UI',       color: '#3D96C8' },
      { label: 'Marketing Components', color: '#2B7DAD' },
    ];
    const filteredCards = OVERVIEW_CATALOG.filter(
      (c) => matchesSearch(c.title, searchFilter) || matchesSearch(c.category, searchFilter),
    );
    return (
      <div>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#8896AD' }} />
            <input type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter components..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg focus:outline-none"
              style={{ border: `1px solid ${darkMode ? '#2A3A54' : surface}`, background: darkMode ? '#1A2640' : '#fff', color: darkMode ? '#C7CEDB' : navy }} />
          </div>
          <span className="text-xs font-medium" style={{ color: '#8896AD' }}>{filteredCards.length} component groups</span>
        </div>
        {groups.map((group) => {
          const cards = filteredCards.filter((c) => c.category === group.label);
          if (cards.length === 0) return null;
          return (
            <div key={group.label} className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: group.color }}>{group.label}</h2>
                <span className="text-xs" style={{ color: '#8896AD' }}>({cards.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cards.map((item, idx) => (
                  <button key={`${item.id}-${idx}`} onClick={() => onSelectPage(item.id)}
                    className="group text-left rounded-xl overflow-hidden transition-all hover:shadow-md"
                    style={{ border: `1px solid ${darkMode ? '#2A3A54' : surface}`, background: darkMode ? '#1A2640' : '#fff' }}>
                    <div className="h-36 flex items-center justify-center border-b"
                      style={{ background: darkMode ? '#16203A' : tint, borderColor: darkMode ? '#2A3A54' : surface,
                               backgroundImage: 'linear-gradient(to right,rgba(122,190,232,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(122,190,232,0.06) 1px,transparent 1px)', backgroundSize: '16px 16px' }}>
                      <OverviewThumbnail type={item.previewType} />
                    </div>
                    <div className="p-3.5">
                      <h3 className="text-sm font-semibold transition-colors" style={{ color: darkMode ? '#C7CEDB' : navy }}>{item.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: '#8896AD' }}>{item.count}</p>
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
    const sky = '#7ABEE8'; const navy = '#223049';
    return (
      <div className="space-y-8">
        <PreviewWrapper title="KPI Metric Cards" description="Interactive metric cards with live delta indicators."
          code={`<div style={{background:'#EDF5FF',border:'1px solid #E6E8EB'}} className="p-5 rounded-xl">...</div>`}>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {KPI_METRICS.map((m) => (
              <div key={m.title} className="p-5 rounded-xl cursor-pointer transition-all hover:shadow-md"
                style={{ background: '#EDF5FF', border: '1px solid #C7CEDB' }}>
                <p className="text-xs font-medium" style={{ color: '#677A96' }}>{m.title}</p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl font-bold" style={{ color: navy }}>{m.val}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: m.up ? '#d1fae5' : '#fee2e2', color: m.up ? '#065f46' : '#991b1b' }}>
                    {m.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{m.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </PreviewWrapper>
        <PreviewWrapper title="Line Chart & Donut" description="SVG area chart and device breakdown donut using palette colors."
          code={`// SVG area chart with #7ABEE8 stroke`}>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-5 rounded-xl" style={{ border: '1px solid #E6E8EB', background: '#fff' }}>
              <div className="flex items-center justify-between mb-4">
                <div><h4 className="text-sm font-semibold" style={{ color: navy }}>Downloads (Last 7 Months)</h4>
                  <p className="text-xs" style={{ color: '#8896AD' }}>React + Tailwind installs</p></div>
                <span className="text-xs font-semibold" style={{ color: sky }}>+32% YoY</span>
              </div>
              <svg viewBox="0 0 400 130" className="w-full h-36">
                <defs><linearGradient id="jtG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={sky} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={sky} stopOpacity="0" />
                </linearGradient></defs>
                <path d="M0 105 L65 88 L130 92 L195 60 L260 66 L325 32 L400 18 L400 130 L0 130 Z" fill="url(#jtG)" />
                <path d="M0 105 L65 88 L130 92 L195 60 L260 66 L325 32 L400 18" fill="none" stroke={sky} strokeWidth="2.5" />
              </svg>
            </div>
            <div className="p-5 rounded-xl flex flex-col items-center justify-center text-center"
              style={{ border: '1px solid #E6E8EB', background: '#fff' }}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: navy }}>Traffic by Device</h4>
              <div className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{ border: '14px solid #7ABEE8', borderRightColor: '#C7CEDB', borderBottomColor: '#EDF5FF' }}>
                <span className="text-sm font-bold" style={{ color: navy }}>68%</span>
              </div>
              <p className="text-xs mt-4" style={{ color: '#8896AD' }}>Desktop 68% · Mobile 24% · Tablet 8%</p>
            </div>
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // DATA TABLES & PAGINATION
  if (activePageId === 'tables' || activePageId === 'paginations') {
    const sky = '#7ABEE8'; const navy = '#223049';
    const rows = TEAM_MEMBERS.filter(
      (r) => matchesSearch(r.name, tableQuery) || matchesSearch(r.role, tableQuery),
    );
    return (
      <PreviewWrapper title="Team Data Table" description="Interactive searchable table with status badges and pagination."
        code={`<table className="w-full text-left"><thead style={{background:'#EDF5FF'}}><tr><th style={{color:'#677A96'}}>Name</th></tr></thead></table>`}>
        <div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            style={{ borderBottom: '1px solid #E6E8EB' }}>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold" style={{ color: navy }}>Team members</h4>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: '#EDF5FF', color: sky }}>{rows.length} users</span>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#8896AD' }} />
              <input type="text" value={tableQuery} onChange={(e) => setTableQuery(e.target.value)}
                placeholder="Search member or role..."
                className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg focus:outline-none"
                style={{ border: '1px solid #E6E8EB', background: '#fff', color: navy }} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead style={{ background: '#EDF5FF', borderBottom: '1px solid #C7CEDB' }}>
                <tr>{['Name','Status','Role','Squad'].map(h => (
                  <th key={h} className="py-3 px-4 text-xs font-semibold" style={{ color: '#677A96' }}>{h}</th>
                ))}</tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.email} className="transition-colors hover:bg-[#EDF5FF]/60"
                    style={{ borderBottom: '1px solid #E6E8EB' }}>
                    <td className="py-3 px-4">
                      <p className="font-medium text-sm" style={{ color: navy }}>{r.name}</p>
                      <p className="text-xs" style={{ color: '#8896AD' }}>{r.email}</p>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: r.status === 'Active' ? '#d1fae5' : '#fef3c7', color: r.status === 'Active' ? '#065f46' : '#92400e' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />{r.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm" style={{ color: '#677A96' }}>{r.role}</td>
                    <td className="py-3 px-4 text-sm" style={{ color: '#8896AD' }}>{r.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 flex items-center justify-between text-xs" style={{ borderTop: '1px solid #E6E8EB' }}>
            <button onClick={() => setCurrentPageNum(Math.max(1, currentPageNum - 1))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition"
              style={{ border: '1px solid #E6E8EB', color: '#677A96' }}>
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map((p) => (
                <button key={p} onClick={() => setCurrentPageNum(p)}
                  className="w-7 h-7 rounded-lg font-semibold transition"
                  style={{ background: currentPageNum === p ? '#EDF5FF' : 'transparent', color: currentPageNum === p ? sky : '#677A96' }}>{p}</button>
              ))}
            </div>
            <button onClick={() => setCurrentPageNum(Math.min(4, currentPageNum + 1))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition"
              style={{ border: '1px solid #E6E8EB', color: '#677A96' }}>
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </PreviewWrapper>
    );
  }

  // MODALS
  if (activePageId === 'modals') {
    const sky = '#7ABEE8'; const navy = '#223049';
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Confirmation Modal" description="Interactive dialog overlay with confirm/cancel actions."
          code={`<div style={{border:'2px solid #7ABEE8'}} className="p-6 rounded-2xl bg-white max-w-md mx-auto">...</div>`}>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl"
              style={{ border: '1px solid #C7CEDB', background: '#EDF5FF' }}>
              <p className="text-sm font-semibold" style={{ color: navy }}>Test the modal dialog below</p>
              <button onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-lg text-white text-xs font-semibold transition"
                style={{ background: sky }}>Open Modal</button>
            </div>
            {modalOpen && (
              <div className="p-6 rounded-2xl shadow-xl max-w-md mx-auto text-center"
                style={{ border: `2px solid ${sky}`, background: '#fff' }}>
                <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold" style={{ color: navy }}>Published successfully</h4>
                <p className="text-xs mt-1.5" style={{ color: '#677A96' }}>Your JustTouch tokens are now live.</p>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <button onClick={() => setModalOpen(false)}
                    className="py-2 rounded-lg text-xs font-semibold transition"
                    style={{ border: '1px solid #E6E8EB', color: '#677A96' }}>Close</button>
                  <button onClick={() => setModalOpen(false)}
                    className="py-2 rounded-lg text-white text-xs font-semibold transition"
                    style={{ background: sky }}>View changelog</button>
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
    const sky = '#7ABEE8'; const navy = '#223049';
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Toast Notifications" description="Semantic alert banners for success, warning, error, and info states."
          code={`<div style={{border:'1px solid #7ABEE8',background:'#EDF5FF'}} className="p-4 rounded-xl flex items-center gap-3">...</div>`}>
          <div className="p-6 space-y-3">
            {[
              { icon: CheckCircle2, label: 'Success', msg: 'Component published successfully.', bg: '#d1fae5', border: '#6ee7b7', color: '#065f46' },
              { icon: AlertCircle,  label: 'Warning', msg: 'Bundle size exceeds recommended limit.', bg: '#fef3c7', border: '#fcd34d', color: '#92400e' },
              { icon: AlertCircle,  label: 'Error',   msg: 'Build failed. Check your TypeScript errors.', bg: '#fee2e2', border: '#fca5a5', color: '#991b1b' },
              { icon: Info,         label: 'Info',    msg: 'New version v4.1 is available.', bg: '#EDF5FF', border: sky, color: navy },
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
    const sky = '#7ABEE8'; const navy = '#223049';
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Top Navigation Bar" description="Responsive header with logo, nav links, search, and user menu."
          code={`<header style={{background:'#223049'}} className="h-14 px-6 flex items-center justify-between">...</header>`}>
          <div>
            <div className="h-14 px-6 flex items-center justify-between"
              style={{ background: navy }}>
              <div className="flex items-center gap-6">
                <JustTouchLogo size="sm" />
                <div className="hidden md:flex items-center gap-5">
                  {['Components','Templates','Pricing','Docs'].map((l) => (
                    <button key={l} className="text-xs font-medium transition"
                      style={{ color: '#C7CEDB' }}>{l}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                  style={{ border: '1px solid #384A66', color: '#C7CEDB' }}>Log in</button>
                <button className="px-3 py-1.5 rounded-lg text-white text-xs font-semibold"
                  style={{ background: sky }}>Get started</button>
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
            <div className="p-4 rounded-xl space-y-3" style={{ border: '1px solid #E6E8EB' }}>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#8896AD' }}>Gradient Picker</p>
              <div className={`h-32 rounded-xl bg-gradient-to-br ${gradientPreset} shadow-inner`} />
              <div className="flex gap-2">
                {GRADIENT_PRESETS.map((g) => (
                  <button key={g} onClick={() => setGradientPreset(g)}
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${g} transition`}
                    style={{ outline: gradientPreset === g ? '2px solid #223049' : '2px solid transparent', outlineOffset: '1px' }} />
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl" style={{ border: '1px solid #E6E8EB' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#8896AD' }}>Image Upload</p>
              <div className="h-32 rounded-xl flex flex-col items-center justify-center gap-2"
                style={{ border: '2px dashed #C7CEDB', background: '#EDF5FF' }}>
                <UploadCloud className="w-6 h-6" style={{ color: '#7ABEE8' }} />
                <p className="text-xs font-medium" style={{ color: '#677A96' }}>Click to upload or drag & drop</p>
                <p className="text-[10px]" style={{ color: '#8896AD' }}>PNG, JPG, SVG up to 10MB</p>
              </div>
            </div>
          </div>
        </PreviewWrapper>
      </div>
    );
  }

  // MESSAGING
  if (activePageId === 'messaging') {
    const sky = '#7ABEE8'; const navy = '#223049';
    return (
      <div className="space-y-8">
        <PreviewWrapper title="Team Chat" description="Real-time chat thread with message bubbles and composer."
          code={`// Interactive Chat Feed`}>
          <div className="p-4 flex flex-col justify-between h-72">
            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex flex-col ${m.me ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] mb-0.5" style={{ color: '#8896AD' }}>{m.sender} · {m.time}</span>
                  <div className="px-3 py-2 rounded-xl text-xs max-w-[80%]"
                    style={{ background: m.me ? sky : '#EDF5FF', color: m.me ? '#fff' : navy }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2 pt-3" style={{ borderTop: '1px solid #E6E8EB' }}>
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)}
                placeholder="Write a message..." className="flex-1 px-3 py-1.5 text-xs rounded-lg focus:outline-none"
                style={{ border: '1px solid #C7CEDB', background: '#fff', color: navy }} />
              <button type="submit" className="p-2 rounded-lg text-white transition"
                style={{ background: sky }}><Send className="w-3.5 h-3.5" /></button>
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

  // 13. MARKETING COMPONENTS & EXAMPLES (generic fallback with palette)
  return (
    <div className="space-y-8">
      <PreviewWrapper title="FAQ Accordion" description="Expandable support questions with animated chevron." code={`// Interactive FAQ Accordion`}>
        <div className="p-6 max-w-2xl mx-auto divide-y" style={{ borderColor: '#E6E8EB' }}>
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold"
                style={{ color: '#223049' }}>
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  style={{ color: '#8896AD' }} />
              </button>
              {openFaq === idx && (
                <p className="text-xs mt-2 leading-relaxed" style={{ color: '#677A96' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </PreviewWrapper>
      <PreviewWrapper title="Newsletter CTA" description="High-converting email capture banner." code={`// Newsletter CTA Banner`}>
        <div className="p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ background: '#223049' }}>
          <div>
            <h4 className="text-base font-bold text-white">Start building with JustTouch UI</h4>
            <p className="text-xs mt-1" style={{ color: '#C7CEDB' }}>Join 10,000+ developers shipping faster.</p>
          </div>
          <button onClick={() => onSelectPage('overview')}
            className="px-4 py-2.5 rounded-lg text-xs font-semibold shrink-0 transition"
            style={{ background: '#7ABEE8', color: '#223049' }}>Browse components</button>
        </div>
      </PreviewWrapper>
    </div>
  );
};
