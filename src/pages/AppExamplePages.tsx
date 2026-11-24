import React, { useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import {
  Search, BookOpen, ChevronRight, Check, Save, Upload,
  Eye, EyeOff, Key, Plus, ArrowUpRight, ArrowDownRight,
  DollarSign, Users, TrendingUp, Activity,
} from 'lucide-react';

const sky = '#7ABEE8', navy = '#223049', tint = '#EDF5FF';
const surface = '#E6E8EB', muted = '#C7CEDB', text = '#677A96';

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Revenue', 'Users'];
  const kpis = [
    { label: 'Total Revenue', val: '₹18,42,500', delta: '+14.2%', up: true,  icon: DollarSign },
    { label: 'Active Users',  val: '2,840',       delta: '+8.4%',  up: true,  icon: Users },
    { label: 'Conversion',    val: '3.6%',         delta: '-0.4%',  up: false, icon: TrendingUp },
    { label: 'Avg Load Time', val: '112 ms',       delta: '-19%',   up: true,  icon: Activity },
  ];
  const rows = [
    { page: '/dashboard',  views: '12,400', bounce: '24%', time: '3m 12s' },
    { page: '/components', views: '9,820',  bounce: '18%', time: '5m 44s' },
    { page: '/pricing',    views: '6,310',  bounce: '41%', time: '1m 58s' },
    { page: '/docs',       views: '4,190',  bounce: '29%', time: '4m 02s' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Analytics Dashboard" description="Full SaaS analytics dashboard with KPI cards, area chart, and top pages table." code="// Analytics Dashboard">
        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold" style={{ color: navy }}>Analytics Overview</h3>
              <p className="text-xs" style={{ color: text }}>Last 30 days</p>
            </div>
            <div className="flex gap-1">
              {tabs.map(t => (
                <button key={t} onClick={() => setActiveTab(t)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                  style={{ background: activeTab === t ? tint : 'transparent', color: activeTab === t ? sky : text, border: `1px solid ${activeTab === t ? muted : 'transparent'}` }}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {kpis.map(k => (
              <div key={k.label} className="p-4 rounded-xl" style={{ background: tint, border: `1px solid ${muted}` }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs" style={{ color: text }}>{k.label}</p>
                  <k.icon className="w-4 h-4" style={{ color: sky }} />
                </div>
                <p className="text-xl font-bold" style={{ color: navy }}>{k.val}</p>
                <span className="inline-flex items-center gap-0.5 text-xs font-semibold mt-1"
                  style={{ color: k.up ? '#065f46' : '#991b1b' }}>
                  {k.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{k.delta}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl" style={{ border: `1px solid ${surface}`, background: '#fff' }}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold" style={{ color: navy }}>Sessions (Last 7 months)</h4>
              <span className="text-xs font-semibold" style={{ color: sky }}>+32% YoY</span>
            </div>
            <svg viewBox="0 0 500 120" className="w-full h-28">
              <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={sky} stopOpacity="0.25" />
                <stop offset="100%" stopColor={sky} stopOpacity="0" />
              </linearGradient></defs>
              <path d="M0 100 L70 82 L140 88 L210 55 L280 62 L350 28 L420 18 L500 10 L500 120 L0 120 Z" fill="url(#ag)" />
              <path d="M0 100 L70 82 L140 88 L210 55 L280 62 L350 28 L420 18 L500 10" fill="none" stroke={sky} strokeWidth="2.5" strokeLinecap="round" />
              {([[0,100],[70,82],[140,88],[210,55],[280,62],[350,28],[420,18],[500,10]] as [number,number][]).map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke={sky} strokeWidth="2" />
              ))}
            </svg>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surface}` }}>
            <div className="px-4 py-3" style={{ background: tint, borderBottom: `1px solid ${muted}` }}>
              <h4 className="text-xs font-semibold" style={{ color: navy }}>Top Pages</h4>
            </div>
            <table className="w-full text-xs">
              <thead><tr style={{ borderBottom: `1px solid ${surface}` }}>
                {['Page','Views','Bounce Rate','Avg Time'].map(h => <th key={h} className="px-4 py-2.5 text-left font-semibold" style={{ color: text }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.page} className="hover:bg-[#EDF5FF]/50 transition" style={{ borderBottom: `1px solid ${surface}` }}>
                    <td className="px-4 py-2.5 font-medium" style={{ color: navy }}>{r.page}</td>
                    <td className="px-4 py-2.5" style={{ color: text }}>{r.views}</td>
                    <td className="px-4 py-2.5" style={{ color: text }}>{r.bounce}</td>
                    <td className="px-4 py-2.5" style={{ color: text }}>{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function OperationsDashboard() {
  const [filter, setFilter] = useState('All');
  const statuses = ['All', 'Active', 'Review', 'Done'];
  const projects = [
    { name: 'Design System v4',    team: 'Core UI',   progress: 78, status: 'Active',  due: 'Dec 15' },
    { name: 'Figma Token Sync',    team: 'Tokens',    progress: 45, status: 'Review',  due: 'Dec 20' },
    { name: 'Accessibility Audit', team: 'QA & ARIA', progress: 92, status: 'Done',    due: 'Dec 10' },
    { name: 'Dark Mode Rollout',   team: 'Core UI',   progress: 60, status: 'Active',  due: 'Dec 28' },
  ];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.status === filter);
  const sColor: Record<string, { bg: string; color: string }> = {
    Active: { bg: '#d1fae5', color: '#065f46' },
    Review: { bg: '#fef3c7', color: '#92400e' },
    Done:   { bg: tint,      color: sky },
  };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Operations Dashboard" description="Project tracker with progress bars, status filters, and team assignments." code="// Operations Dashboard">
        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold" style={{ color: navy }}>Project Tracker</h3>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: sky }}>
              <Plus className="w-3.5 h-3.5" />New Project
            </button>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {statuses.map(s => (
              <button key={s} onClick={() => setFilter(s)}
                className="px-3 py-1 rounded-lg text-xs font-semibold transition"
                style={{ background: filter === s ? tint : 'transparent', color: filter === s ? sky : text, border: `1px solid ${filter === s ? muted : 'transparent'}` }}>{s}</button>
            ))}
          </div>
          <div className="space-y-3">
            {filtered.map(p => (
              <div key={p.name} className="p-4 rounded-xl" style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: navy }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: text }}>{p.team} · Due {p.due}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: sColor[p.status].bg, color: sColor[p.status].color }}>{p.status}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: surface }}>
                    <div className="h-1.5 rounded-full transition-all" style={{ width: `${p.progress}%`, background: sky }} />
                  </div>
                  <span className="text-xs font-semibold shrink-0" style={{ color: navy }}>{p.progress}%</span>
                </div>
              </div>
            ))}
            {filtered.length === 0 && <p className="text-center text-sm py-6" style={{ color: text }}>No projects with status "{filter}"</p>}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function ProfileSettings() {
  const [name, setName] = useState('Selvaraj K');
  const [email, setEmail] = useState('selva@justtouch.io');
  const [bio, setBio] = useState('Lead Frontend Architect at JustTouch UI.');
  const [saved, setSaved] = useState(false);
  const [notifs, setNotifs] = useState({ product: true, security: true, marketing: false });
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Profile Settings" description="Account profile editor with avatar upload, bio, and notification preferences." code="// Profile Settings">
        <div className="p-5 space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white"
              style={{ background: `linear-gradient(135deg,${sky},${navy})` }}>SK</div>
            <div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{ border: `1px solid ${muted}`, color: navy }}>
                <Upload className="w-3.5 h-3.5" />Change avatar
              </button>
              <p className="text-xs mt-1" style={{ color: text }}>PNG, JPG up to 2MB</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: text }}>Full name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none" style={{ border: `1px solid ${muted}`, color: navy }} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: text }}>Email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none" style={{ border: `1px solid ${muted}`, color: navy }} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" style={{ color: text }}>Bio</label>
            <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none resize-none" style={{ border: `1px solid ${muted}`, color: navy }} />
          </div>
          <div className="pt-3" style={{ borderTop: `1px solid ${surface}` }}>
            <p className="text-xs font-semibold mb-3" style={{ color: navy }}>Notification preferences</p>
            {(['product', 'security', 'marketing'] as const).map(k => (
              <div key={k} className="flex items-center justify-between py-2">
                <span className="text-sm capitalize" style={{ color: navy }}>{k === 'product' ? 'Product updates' : k === 'security' ? 'Security alerts' : 'Marketing emails'}</span>
                <button onClick={() => setNotifs(n => ({ ...n, [k]: !n[k] }))}
                  className="relative flex items-center px-0.5 rounded-full transition-colors"
                  style={{ background: notifs[k] ? sky : muted, height: 22, width: 40 }}>
                  <span className="w-4 h-4 rounded-full bg-white shadow transition-transform"
                    style={{ transform: notifs[k] ? 'translateX(18px)' : 'translateX(0)' }} />
                </button>
              </div>
            ))}
          </div>
          <button onClick={save} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition" style={{ background: sky }}>
            {saved ? <><Check className="w-4 h-4" />Saved!</> : <><Save className="w-4 h-4" />Save changes</>}
          </button>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function BillingSettings() {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const apiKey = 'jt_live_sk_4xK9mP2nQrT8vW1yZ3bC6dF0hJ5lN7';
  const copy = () => { navigator.clipboard.writeText(apiKey); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const invoices = [
    { date: 'Nov 2024', amount: '₹1,499', status: 'Paid' },
    { date: 'Oct 2024', amount: '₹1,499', status: 'Paid' },
    { date: 'Sep 2024', amount: '₹1,499', status: 'Paid' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Billing & API Keys" description="Subscription plan management, invoice history, and API key controls." code="// Billing Settings">
        <div className="p-5 space-y-5">
          <div className="p-4 rounded-xl flex items-center justify-between" style={{ background: tint, border: `2px solid ${sky}` }}>
            <div>
              <p className="text-xs font-semibold" style={{ color: sky }}>Current Plan</p>
              <p className="text-base font-bold mt-0.5" style={{ color: navy }}>Pro Team · ₹1,499/mo</p>
              <p className="text-xs mt-0.5" style={{ color: text }}>Renews Dec 15, 2024 · 3 seats used</p>
            </div>
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ border: `1px solid ${sky}`, color: sky }}>Upgrade</button>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: navy }}>API Key</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 px-3 py-2 rounded-lg font-mono text-xs overflow-hidden" style={{ background: surface, color: navy, border: `1px solid ${muted}` }}>
                {showKey ? apiKey : '•'.repeat(32)}
              </div>
              <button onClick={() => setShowKey(s => !s)} className="p-2 rounded-lg" style={{ border: `1px solid ${muted}`, color: text }}>
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <button onClick={copy} className="px-3 py-2 rounded-lg text-xs font-semibold transition"
                style={{ background: copied ? '#d1fae5' : tint, color: copied ? '#065f46' : sky, border: `1px solid ${copied ? '#6ee7b7' : muted}` }}>
                {copied ? <Check className="w-4 h-4" /> : <Key className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: navy }}>Invoice History</p>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surface}` }}>
              {invoices.map((inv, i) => (
                <div key={inv.date} className="flex items-center justify-between px-4 py-3"
                  style={{ borderBottom: i < invoices.length - 1 ? `1px solid ${surface}` : 'none' }}>
                  <span className="text-sm" style={{ color: navy }}>{inv.date}</span>
                  <span className="text-sm font-semibold" style={{ color: navy }}>{inv.amount}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: '#d1fae5', color: '#065f46' }}>{inv.status}</span>
                  <button className="text-xs font-medium" style={{ color: sky }}>Download</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function HelpCenter() {
  const [query, setQuery] = useState('');
  const articles = [
    { title: 'Getting started with JustTouch UI', cat: 'Setup',    views: '4.2k' },
    { title: 'Customising design tokens & palette', cat: 'Tokens',  views: '3.1k' },
    { title: 'Dark mode implementation guide',      cat: 'Theming', views: '2.8k' },
    { title: 'Accessibility & ARIA best practices', cat: 'A11y',    views: '1.9k' },
    { title: 'Integrating with Next.js App Router', cat: 'Setup',   views: '2.4k' },
  ];
  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) || a.cat.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Help Center" description="Searchable knowledge base with article cards and category filters." code="// Help Center">
        <div className="p-5 space-y-5">
          <div className="text-center py-2">
            <h3 className="text-lg font-bold" style={{ color: navy }}>How can we help?</h3>
            <div className="relative max-w-sm mx-auto mt-3">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: text }} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl focus:outline-none"
                style={{ border: `1px solid ${muted}`, background: '#fff', color: navy }} />
            </div>
          </div>
          <div className="space-y-2">
            {filtered.map(a => (
              <div key={a.title} className="flex items-center gap-3 p-3.5 rounded-xl cursor-pointer hover:shadow-sm transition"
                style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: tint }}>
                  <BookOpen className="w-4 h-4" style={{ color: sky }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: navy }}>{a.title}</p>
                  <p className="text-xs" style={{ color: text }}>{a.cat} · {a.views} views</p>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0" style={{ color: muted }} />
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-sm py-6" style={{ color: text }}>No articles found for "{query}"</p>
            )}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function Changelog() {
  const releases = [
    { version: 'v4.1.0', date: 'Dec 10, 2024', tag: 'Latest', items: ['Added 12 new Application UI blocks', 'Dark mode for all base components', 'Improved TypeScript strict types'] },
    { version: 'v4.0.0', date: 'Nov 1, 2024',  tag: 'Major',  items: ['Full palette redesign with #7ABEE8 sky blue', 'Removed legacy Documentation section', 'New interactive PreviewWrapper'] },
    { version: 'v3.9.2', date: 'Oct 5, 2024',  tag: 'Patch',  items: ['Fixed IntersectionObserver rootMargin', 'Resolved Vite HMR flicker on dark toggle'] },
  ];
  const tagStyle: Record<string, { bg: string; color: string }> = {
    Latest: { bg: '#d1fae5', color: '#065f46' },
    Major:  { bg: tint,      color: sky },
    Patch:  { bg: surface,   color: text },
  };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Changelog" description="Release history with version tags, dates, and change summaries." code="// Changelog">
        <div className="p-5">
          {releases.map((r, i) => (
            <div key={r.version} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ background: sky }} />
                {i < releases.length - 1 && <div className="w-0.5 flex-1 mt-1" style={{ background: muted }} />}
              </div>
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold" style={{ color: navy }}>{r.version}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: tagStyle[r.tag].bg, color: tagStyle[r.tag].color }}>{r.tag}</span>
                  <span className="text-xs" style={{ color: text }}>{r.date}</span>
                </div>
                <ul className="space-y-1">
                  {r.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: text }}>
                      <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: sky }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </div>
  );
}
