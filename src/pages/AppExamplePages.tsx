import { useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import {
  Search, BookOpen, ChevronRight, Check, Save, Upload,
  Eye, EyeOff, Key, Plus, ArrowUpRight, ArrowDownRight,
  DollarSign, Users, TrendingUp, Activity,
} from 'lucide-react';

// Plum & Gold palette tokens
const olive = '#6A1B4D', forest = '#3A0D2C', cream = '#F3E6EF';
const creamMid = '#EDD6E5', creamBorder = '#D9B1C7', amber = '#D9B1C7';
const amberDark = '#C6A24B', textMuted = '#8B5A72';
// aliases for readability
const navy = forest, tint = creamMid;
const surface = creamBorder, muted = '#B8849E', text = textMuted;

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [dateRange, setDateRange] = useState('Last 30 days');
  const tabs = ['Overview', 'Revenue', 'Users', 'Retention'];
  const ranges = ['Last 7 days', 'Last 30 days', 'Last 90 days'];
  const kpis = [
    { label: 'Monthly Revenue', val: '\u20b918,42,500', delta: '+14.2%', up: true,  icon: DollarSign, sub: 'vs \u20b916.1L last mo' },
    { label: 'Active Users',    val: '2,840',           delta: '+8.4%',  up: true,  icon: Users,       sub: '312 new this week' },
    { label: 'Conversion Rate', val: '3.6%',            delta: '-0.4%',  up: false, icon: TrendingUp,  sub: 'Drop at checkout step' },
    { label: 'Avg Load Time',   val: '112 ms',          delta: '-19%',   up: true,  icon: Activity,    sub: 'P95: 340 ms' },
  ];
  const months = ['Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const pts1: [number,number][] = [[0,100],[70,82],[140,88],[210,55],[280,62],[350,28],[420,18],[500,10]];
  const pts2: [number,number][] = [[0,115],[70,100],[140,105],[210,78],[280,85],[350,52],[420,44],[500,36]];
  const rows = [
    { page: '/dashboard',  views: '12,400', bounce: '24%', time: '3m 12s', up: true },
    { page: '/components', views: '9,820',  bounce: '18%', time: '5m 44s', up: true },
    { page: '/pricing',    views: '6,310',  bounce: '41%', time: '1m 58s', up: false },
    { page: '/docs',       views: '4,190',  bounce: '29%', time: '4m 02s', up: true },
    { page: '/blog',       views: '2,870',  bounce: '35%', time: '2m 30s', up: true },
  ];
  const devices = [
    { label: 'Desktop', pct: 68, color: olive },
    { label: 'Mobile',  pct: 24, color: amber },
    { label: 'Tablet',  pct: 8,  color: creamBorder },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Analytics Dashboard" description="Advanced SaaS analytics with multi-series chart, device donut, KPI cards with sub-metrics, and sortable top-pages table." code="// Analytics Dashboard">
        <div style={{ background: cream }}>
          <div className="px-5 pt-4 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ borderBottom: `1px solid ${surface}` }}>
            <div>
              <h3 className="text-sm font-bold" style={{ color: navy }}>Analytics Overview</h3>
              <p className="text-xs" style={{ color: text }}>Updated 2 min ago</p>
            </div>
            <div className="flex items-center gap-2">
              <select value={dateRange} onChange={e => setDateRange(e.target.value)} className="text-xs px-2.5 py-1.5 rounded-lg focus:outline-none" style={{ border: `1px solid ${surface}`, background: '#fff', color: navy }}>
                {ranges.map(r => <option key={r}>{r}</option>)}
              </select>
              <div className="flex gap-0.5 p-0.5 rounded-lg" style={{ background: tint, border: `1px solid ${surface}` }}>
                {tabs.map(t => (
                  <button key={t} onClick={() => setActiveTab(t)} className="px-2.5 py-1 rounded-md text-xs font-semibold transition"
                    style={{ background: activeTab === t ? '#fff' : 'transparent', color: activeTab === t ? navy : text, boxShadow: activeTab === t ? '0 1px 3px rgba(40,54,24,0.1)' : 'none' }}>{t}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {kpis.map(k => (
                <div key={k.label} className="p-3.5 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium" style={{ color: text }}>{k.label}</p>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: tint }}>
                      <k.icon className="w-3 h-3" style={{ color: amberDark }} />
                    </div>
                  </div>
                  <p className="text-lg font-bold" style={{ color: navy }}>{k.val}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="inline-flex items-center gap-0.5 text-xs font-semibold" style={{ color: k.up ? '#065f46' : '#991b1b' }}>
                      {k.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{k.delta}
                    </span>
                    <span className="text-[10px]" style={{ color: text }}>{k.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 p-4 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-xs font-semibold" style={{ color: navy }}>Sessions & Revenue</h4>
                    <p className="text-[10px]" style={{ color: text }}>Jun – Dec 2024</p>
                  </div>
                  <div className="flex items-center gap-3 text-[10px]" style={{ color: text }}>
                    <span className="flex items-center gap-1"><span className="w-3 h-0.5 inline-block rounded" style={{ background: olive }} />Sessions</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-0.5 inline-block rounded" style={{ background: amber }} />Revenue</span>
                  </div>
                </div>
                <svg viewBox="0 0 500 120" className="w-full h-28">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={olive} stopOpacity="0.2" /><stop offset="100%" stopColor={olive} stopOpacity="0" /></linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={amber} stopOpacity="0.15" /><stop offset="100%" stopColor={amber} stopOpacity="0" /></linearGradient>
                  </defs>
                  {[30,60,90].map(y => <line key={y} x1="0" y1={y} x2="500" y2={y} stroke={surface} strokeWidth="0.5" />)}
                  {months.map((m,i) => <text key={m} x={i*70+4} y="118" fontSize="7" fill={text}>{m}</text>)}
                  <path d={`M${pts1.map(([x,y])=>`${x} ${y}`).join(' L')} L500 120 L0 120 Z`} fill="url(#g1)" />
                  <path d={`M${pts1.map(([x,y])=>`${x} ${y}`).join(' L')}`} fill="none" stroke={olive} strokeWidth="2" strokeLinecap="round" />
                  <path d={`M${pts2.map(([x,y])=>`${x} ${y}`).join(' L')} L500 120 L0 120 Z`} fill="url(#g2)" />
                  <path d={`M${pts2.map(([x,y])=>`${x} ${y}`).join(' L')}`} fill="none" stroke={amber} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
                  {pts1.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke={olive} strokeWidth="1.5" />)}
                </svg>
              </div>
              <div className="p-4 rounded-xl flex flex-col" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                <h4 className="text-xs font-semibold mb-3" style={{ color: navy }}>Traffic by Device</h4>
                <div className="flex items-center justify-center flex-1">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke={surface} strokeWidth="3.5" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke={olive} strokeWidth="3.5" strokeDasharray="68 32" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke={amber} strokeWidth="3.5" strokeDasharray="24 76" strokeDashoffset="-68" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-bold" style={{ color: navy }}>68%</span>
                      <span className="text-[9px]" style={{ color: text }}>Desktop</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  {devices.map(d => (
                    <div key={d.label} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: d.color }} /><span style={{ color: text }}>{d.label}</span></div>
                      <span className="font-semibold" style={{ color: navy }}>{d.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surface}` }}>
              <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: tint, borderBottom: `1px solid ${surface}` }}>
                <h4 className="text-xs font-semibold" style={{ color: navy }}>Top Pages</h4>
                <span className="text-[10px]" style={{ color: text }}>Sorted by views</span>
              </div>
              <table className="w-full text-xs" style={{ background: '#fff' }}>
                <thead><tr style={{ borderBottom: `1px solid ${surface}` }}>
                  {['Page','Views','Bounce','Avg Time',''].map(h => <th key={h} className="px-4 py-2 text-left font-semibold" style={{ color: text }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {rows.map((r,i) => (
                    <tr key={r.page} style={{ borderBottom: i < rows.length-1 ? `1px solid ${surface}` : 'none' }}>
                      <td className="px-4 py-2.5 font-medium" style={{ color: navy }}>{r.page}</td>
                      <td className="px-4 py-2.5 font-semibold" style={{ color: navy }}>{r.views}</td>
                      <td className="px-4 py-2.5" style={{ color: text }}>{r.bounce}</td>
                      <td className="px-4 py-2.5" style={{ color: text }}>{r.time}</td>
                      <td className="px-4 py-2.5"><span style={{ color: r.up ? '#065f46' : '#991b1b' }}>{r.up ? <ArrowUpRight className="w-3 h-3 inline" /> : <ArrowDownRight className="w-3 h-3 inline" />}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function OperationsDashboard() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const statuses = ['All', 'Active', 'Review', 'Done', 'Blocked'];
  const projects = [
    { name: 'Design System v4',    team: 'Core UI',   progress: 78, status: 'Active',  due: 'Dec 15', owner: 'SK', priority: 'High' },
    { name: 'Figma Token Sync',    team: 'Tokens',    progress: 45, status: 'Review',  due: 'Dec 20', owner: 'AM', priority: 'Med' },
    { name: 'Accessibility Audit', team: 'QA & ARIA', progress: 92, status: 'Done',    due: 'Dec 10', owner: 'DK', priority: 'High' },
    { name: 'Dark Mode Rollout',   team: 'Core UI',   progress: 60, status: 'Active',  due: 'Dec 28', owner: 'PN', priority: 'Med' },
    { name: 'API Rate Limiter',    team: 'Backend',   progress: 20, status: 'Blocked', due: 'Jan 5',  owner: 'SK', priority: 'Low' },
  ];
  const filtered = projects.filter(p =>
    (filter === 'All' || p.status === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const sColor: Record<string, { bg: string; color: string }> = {
    Active:  { bg: '#d1fae5', color: '#065f46' },
    Review:  { bg: '#fef3c7', color: '#92400e' },
    Done:    { bg: tint,      color: amberDark },
    Blocked: { bg: '#fee2e2', color: '#991b1b' },
  };
  const pColor: Record<string, string> = { High: '#991b1b', Med: amberDark, Low: olive };
  const summary = [
    { label: 'Total',   val: projects.length,                              color: navy },
    { label: 'Active',  val: projects.filter(p=>p.status==='Active').length,  color: '#065f46' },
    { label: 'Done',    val: projects.filter(p=>p.status==='Done').length,    color: amberDark },
    { label: 'Blocked', val: projects.filter(p=>p.status==='Blocked').length, color: '#991b1b' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Operations Dashboard" description="Advanced project tracker with search, priority badges, owner avatars, progress bars, and summary stats." code="// Operations Dashboard">
        <div style={{ background: cream }}>
          <div className="px-5 pt-4 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ borderBottom: `1px solid ${surface}` }}>
            <div>
              <h3 className="text-sm font-bold" style={{ color: navy }}>Project Tracker</h3>
              <p className="text-xs" style={{ color: text }}>Q4 2024 · 5 active projects</p>
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: olive }}>
              <Plus className="w-3.5 h-3.5" />New Project
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-4 gap-3">
              {summary.map(s => (
                <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                  <p className="text-xl font-bold" style={{ color: s.color }}>{s.val}</p>
                  <p className="text-[10px] font-medium mt-0.5" style={{ color: text }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: text }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects..." className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg focus:outline-none" style={{ border: `1px solid ${surface}`, background: '#fff', color: navy }} />
              </div>
              <div className="flex gap-1 flex-wrap">
                {statuses.map(s => (
                  <button key={s} onClick={() => setFilter(s)} className="px-2.5 py-1 rounded-lg text-xs font-semibold transition"
                    style={{ background: filter === s ? olive : 'transparent', color: filter === s ? '#fff' : text, border: `1px solid ${filter === s ? olive : surface}` }}>{s}</button>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surface}` }}>
              <table className="w-full text-xs" style={{ background: '#fff' }}>
                <thead><tr style={{ background: tint, borderBottom: `1px solid ${surface}` }}>
                  {['Project','Owner','Priority','Status','Progress','Due'].map(h => <th key={h} className="px-3 py-2.5 text-left font-semibold" style={{ color: text }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {filtered.map((p, i) => (
                    <tr key={p.name} style={{ borderBottom: i < filtered.length-1 ? `1px solid ${surface}` : 'none' }}>
                      <td className="px-3 py-3">
                        <p className="font-semibold" style={{ color: navy }}>{p.name}</p>
                        <p className="text-[10px]" style={{ color: text }}>{p.team}</p>
                      </td>
                      <td className="px-3 py-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: olive }}>{p.owner}</div>
                      </td>
                      <td className="px-3 py-3">
                        <span className="text-[10px] font-semibold" style={{ color: pColor[p.priority] }}>{p.priority}</span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: sColor[p.status].bg, color: sColor[p.status].color }}>{p.status}</span>
                      </td>
                      <td className="px-3 py-3 w-28">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full" style={{ background: surface }}>
                            <div className="h-1.5 rounded-full" style={{ width: `${p.progress}%`, background: p.status === 'Blocked' ? '#f87171' : olive }} />
                          </div>
                          <span className="text-[10px] font-semibold shrink-0" style={{ color: navy }}>{p.progress}%</span>
                        </div>
                      </td>
                      <td className="px-3 py-3" style={{ color: text }}>{p.due}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && <tr><td colSpan={6} className="px-3 py-6 text-center" style={{ color: text }}>No projects match your filter.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function ProfileSettings() {
  const [tab, setTab] = useState<'profile'|'password'|'notifications'>('profile');
  const [name, setName] = useState('Selvaraj K');
  const [email, setEmail] = useState('selva@justtouch.io');
  const [role, setRole] = useState('Lead Frontend Architect');
  const [bio, setBio] = useState('Building design systems for 8+ years. Open-source contributor.');
  const [saved, setSaved] = useState(false);
  const [notifs, setNotifs] = useState({ product: true, security: true, marketing: false, digest: true });
  const [curPw, setCurPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  const tabs: { key: 'profile'|'password'|'notifications'; label: string }[] = [
    { key: 'profile',       label: 'Profile' },
    { key: 'password',      label: 'Password' },
    { key: 'notifications', label: 'Notifications' },
  ];
  const notifItems = [
    { key: 'product'  as const, label: 'Product updates',  desc: 'New components, templates, and releases' },
    { key: 'security' as const, label: 'Security alerts',  desc: 'Login attempts and account changes' },
    { key: 'marketing'as const, label: 'Marketing emails', desc: 'Tips, tutorials, and promotions' },
    { key: 'digest'   as const, label: 'Weekly digest',    desc: 'Summary of activity every Monday' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Profile Settings" description="Advanced tabbed settings page with profile editor, password change, and granular notification controls." code="// Profile Settings">
        <div style={{ background: cream }}>
          <div className="px-5 pt-4 pb-0" style={{ borderBottom: `1px solid ${surface}` }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: navy }}>Account Settings</h3>
            <div className="flex gap-0">
              {tabs.map(t => (
                <button key={t.key} onClick={() => setTab(t.key)}
                  className="px-4 py-2 text-xs font-semibold border-b-2 transition"
                  style={{ borderColor: tab === t.key ? olive : 'transparent', color: tab === t.key ? olive : text, background: 'transparent' }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5">
            {tab === 'profile' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white shrink-0"
                    style={{ background: `linear-gradient(135deg,${olive},${forest})` }}>SK</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold" style={{ color: navy }}>Selvaraj K</p>
                    <p className="text-xs" style={{ color: text }}>selva@justtouch.io · Pro Team</p>
                    <button className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-lg text-xs font-semibold"
                      style={{ border: `1px solid ${surface}`, color: navy, background: tint }}>
                      <Upload className="w-3 h-3" />Change photo
                    </button>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: '#d1fae5', color: '#065f46' }}>Active</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[['Full name', name, setName],['Email address', email, setEmail],['Job title', role, setRole]].map(([label, val, setter]) => (
                    <div key={label as string}>
                      <label className="block text-xs font-medium mb-1" style={{ color: text }}>{label as string}</label>
                      <input value={val as string} onChange={e => (setter as (v:string)=>void)(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none"
                        style={{ border: `1px solid ${surface}`, color: navy, background: '#fff' }} />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium mb-1" style={{ color: text }}>Bio</label>
                    <textarea value={bio} onChange={e => setBio(e.target.value)} rows={2}
                      className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none resize-none"
                      style={{ border: `1px solid ${surface}`, color: navy, background: '#fff' }} />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2" style={{ borderTop: `1px solid ${surface}` }}>
                  <p className="text-xs" style={{ color: text }}>Last updated Dec 10, 2024</p>
                  <button onClick={save} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: olive }}>
                    {saved ? <><Check className="w-4 h-4" />Saved!</> : <><Save className="w-4 h-4" />Save changes</>}
                  </button>
                </div>
              </div>
            )}
            {tab === 'password' && (
              <div className="space-y-3 max-w-sm">
                <div className="p-3 rounded-xl text-xs" style={{ background: tint, border: `1px solid ${surface}`, color: text }}>
                  Password must be 8+ characters with at least one number and symbol.
                </div>
                {[['Current password', curPw, setCurPw],['New password', newPw, setNewPw],['Confirm new password', confirmPw, setConfirmPw]].map(([label, val, setter]) => (
                  <div key={label as string}>
                    <label className="block text-xs font-medium mb-1" style={{ color: text }}>{label as string}</label>
                    <div className="relative">
                      <input type={showPw ? 'text' : 'password'} value={val as string} onChange={e => (setter as (v:string)=>void)(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg focus:outline-none pr-9"
                        style={{ border: `1px solid ${surface}`, color: navy, background: '#fff' }} />
                      <button type="button" onClick={() => setShowPw(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: text }}>
                        {showPw ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
                {newPw && (
                  <div className="flex gap-1">
                    {['Length','Number','Symbol'].map((req, i) => (
                      <span key={req} className="flex-1 text-center text-[10px] py-1 rounded" style={{ background: newPw.length > [7,0,0][i] ? '#d1fae5' : tint, color: newPw.length > [7,0,0][i] ? '#065f46' : text }}>{req}</span>
                    ))}
                  </div>
                )}
                <button onClick={save} className="w-full py-2 rounded-lg text-sm font-semibold text-white" style={{ background: olive }}>
                  {saved ? 'Password updated!' : 'Update password'}
                </button>
              </div>
            )}
            {tab === 'notifications' && (
              <div className="space-y-2">
                {notifItems.map(n => (
                  <div key={n.key} className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: navy }}>{n.label}</p>
                      <p className="text-xs" style={{ color: text }}>{n.desc}</p>
                    </div>
                    <button onClick={() => setNotifs(prev => ({ ...prev, [n.key]: !prev[n.key] }))}
                      className="relative flex items-center px-0.5 rounded-full transition-colors shrink-0"
                      style={{ background: notifs[n.key] ? olive : surface, height: 22, width: 40 }}>
                      <span className="w-4 h-4 rounded-full bg-white shadow transition-transform"
                        style={{ transform: notifs[n.key] ? 'translateX(18px)' : 'translateX(0)' }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function BillingSettings() {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [plan, setPlan] = useState('Pro Team');
  const apiKey = import.meta.env.VITE_API_KEY ?? 'jt_live_sk_****************************';
  const copy = () => { navigator.clipboard.writeText(apiKey); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const plans = [
    { name: 'Starter',    price: '\u20b90',     seats: '1 seat',   features: ['31 base components','MIT license'] },
    { name: 'Pro Team',   price: '\u20b91,499', seats: '5 seats',  features: ['240+ blocks','Figma kit','Priority support'] },
    { name: 'Enterprise', price: '\u20b94,999', seats: 'Unlimited',features: ['Custom tokens','Dedicated SLA','White-label'] },
  ];
  const invoices = [
    { id: 'INV-2024-11', date: 'Nov 1, 2024',  amount: '\u20b91,499', status: 'Paid',    method: 'Visa \u00b7\u00b7\u00b7\u00b7 4242' },
    { id: 'INV-2024-10', date: 'Oct 1, 2024',  amount: '\u20b91,499', status: 'Paid',    method: 'Visa \u00b7\u00b7\u00b7\u00b7 4242' },
    { id: 'INV-2024-09', date: 'Sep 1, 2024',  amount: '\u20b91,499', status: 'Paid',    method: 'Visa \u00b7\u00b7\u00b7\u00b7 4242' },
    { id: 'INV-2024-08', date: 'Aug 1, 2024',  amount: '\u20b91,499', status: 'Refunded',method: 'Visa \u00b7\u00b7\u00b7\u00b7 4242' },
  ];
  const usage = [{ label: 'API calls', used: 8420, limit: 10000 }, { label: 'Seats', used: 3, limit: 5 }, { label: 'Storage', used: 2.1, limit: 5 }];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Billing & API Keys" description="Advanced billing page with plan switcher, usage meters, invoice history with status, and secure API key management." code="// Billing Settings">
        <div style={{ background: cream }}>
          <div className="px-5 pt-4 pb-3" style={{ borderBottom: `1px solid ${surface}` }}>
            <h3 className="text-sm font-bold" style={{ color: navy }}>Billing & Subscription</h3>
            <p className="text-xs" style={{ color: text }}>Manage your plan, usage, and payment details</p>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {plans.map(p => (
                <button key={p.name} onClick={() => setPlan(p.name)}
                  className="p-3.5 rounded-xl text-left transition"
                  style={{ border: `${plan === p.name ? '2px' : '1px'} solid ${plan === p.name ? olive : surface}`, background: plan === p.name ? tint : '#fff' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold" style={{ color: navy }}>{p.name}</span>
                    {plan === p.name && <Check className="w-3.5 h-3.5" style={{ color: olive }} />}
                  </div>
                  <p className="text-base font-bold" style={{ color: navy }}>{p.price}<span className="text-xs font-normal" style={{ color: text }}>/mo</span></p>
                  <p className="text-[10px] mt-1" style={{ color: text }}>{p.seats}</p>
                  <ul className="mt-2 space-y-0.5">
                    {p.features.map(f => <li key={f} className="text-[10px] flex items-center gap-1" style={{ color: text }}><Check className="w-2.5 h-2.5" style={{ color: olive }} />{f}</li>)}
                  </ul>
                </button>
              ))}
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
              <h4 className="text-xs font-semibold mb-3" style={{ color: navy }}>Usage this month</h4>
              <div className="space-y-3">
                {usage.map(u => (
                  <div key={u.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span style={{ color: text }}>{u.label}</span>
                      <span className="font-semibold" style={{ color: navy }}>{u.used} / {u.limit}</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: surface }}>
                      <div className="h-1.5 rounded-full" style={{ width: `${(u.used/u.limit)*100}%`, background: (u.used/u.limit) > 0.8 ? '#f87171' : olive }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold" style={{ color: navy }}>API Key</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#d1fae5', color: '#065f46' }}>Live</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 px-3 py-2 rounded-lg font-mono text-xs overflow-hidden" style={{ background: tint, color: navy, border: `1px solid ${surface}` }}>
                  {showKey ? apiKey : '\u2022'.repeat(32)}
                </div>
                <button onClick={() => setShowKey(s => !s)} className="p-2 rounded-lg" style={{ border: `1px solid ${surface}`, color: text }}>
                  {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
                <button onClick={copy} className="px-3 py-2 rounded-lg text-xs font-semibold transition"
                  style={{ background: copied ? '#d1fae5' : tint, color: copied ? '#065f46' : amberDark, border: `1px solid ${surface}` }}>
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Key className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-[10px] mt-1.5" style={{ color: text }}>Keep this key secret. Rotate it if compromised.</p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surface}` }}>
              <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: tint, borderBottom: `1px solid ${surface}` }}>
                <h4 className="text-xs font-semibold" style={{ color: navy }}>Invoice History</h4>
                <button className="text-xs font-medium" style={{ color: amberDark }}>Export all</button>
              </div>
              <table className="w-full text-xs" style={{ background: '#fff' }}>
                <thead><tr style={{ borderBottom: `1px solid ${surface}` }}>
                  {['Invoice','Date','Amount','Method','Status',''].map(h => <th key={h} className="px-3 py-2 text-left font-semibold" style={{ color: text }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {invoices.map((inv, i) => (
                    <tr key={inv.id} style={{ borderBottom: i < invoices.length-1 ? `1px solid ${surface}` : 'none' }}>
                      <td className="px-3 py-2.5 font-medium" style={{ color: navy }}>{inv.id}</td>
                      <td className="px-3 py-2.5" style={{ color: text }}>{inv.date}</td>
                      <td className="px-3 py-2.5 font-semibold" style={{ color: navy }}>{inv.amount}</td>
                      <td className="px-3 py-2.5" style={{ color: text }}>{inv.method}</td>
                      <td className="px-3 py-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                          style={{ background: inv.status === 'Paid' ? '#d1fae5' : '#fee2e2', color: inv.status === 'Paid' ? '#065f46' : '#991b1b' }}>{inv.status}</span>
                      </td>
                      <td className="px-3 py-2.5"><button className="text-[10px] font-medium" style={{ color: amberDark }}>PDF</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function HelpCenter() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Setup', 'Tokens', 'Theming', 'A11y'];
  const articles = [
    { title: 'Getting started with JustTouch UI',   cat: 'Setup',   views: '4.2k', read: '3 min', updated: 'Dec 8' },
    { title: 'Customising design tokens & palette', cat: 'Tokens',  views: '3.1k', read: '5 min', updated: 'Dec 5' },
    { title: 'Dark mode implementation guide',      cat: 'Theming', views: '2.8k', read: '4 min', updated: 'Nov 30' },
    { title: 'Accessibility & ARIA best practices', cat: 'A11y',    views: '1.9k', read: '6 min', updated: 'Nov 22' },
    { title: 'Integrating with Next.js App Router', cat: 'Setup',   views: '2.4k', read: '4 min', updated: 'Nov 18' },
    { title: 'Using CSS custom properties with Tailwind', cat: 'Tokens', views: '1.6k', read: '3 min', updated: 'Nov 10' },
  ];
  const popular = articles.slice(0, 3);
  const filtered = articles.filter(a =>
    (cat === 'All' || a.cat === cat) &&
    (a.title.toLowerCase().includes(query.toLowerCase()) || a.cat.toLowerCase().includes(query.toLowerCase()))
  );
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Help Center" description="Advanced help center with category filters, popular articles, search, and article metadata." code="// Help Center">
        <div style={{ background: cream }}>
          <div className="px-5 py-8 text-center" style={{ background: `linear-gradient(160deg,${tint} 0%,${cream} 100%)`, borderBottom: `1px solid ${surface}` }}>
            <h3 className="text-lg font-bold mb-1" style={{ color: navy }}>How can we help?</h3>
            <p className="text-xs mb-4" style={{ color: text }}>Search 50+ articles and guides</p>
            <div className="relative max-w-sm mx-auto">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: text }} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl focus:outline-none"
                style={{ border: `1px solid ${surface}`, background: '#fff', color: navy }} />
            </div>
          </div>
          <div className="p-4 space-y-4">
            {!query && (
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: text }}>POPULAR ARTICLES</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {popular.map(a => (
                    <div key={a.title} className="p-3 rounded-xl cursor-pointer" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2" style={{ background: tint }}>
                        <BookOpen className="w-3.5 h-3.5" style={{ color: amberDark }} />
                      </div>
                      <p className="text-xs font-medium leading-snug" style={{ color: navy }}>{a.title}</p>
                      <p className="text-[10px] mt-1" style={{ color: text }}>{a.read} read · {a.views} views</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-1.5 flex-wrap">
              {cats.map(c => (
                <button key={c} onClick={() => setCat(c)} className="px-2.5 py-1 rounded-lg text-xs font-semibold transition"
                  style={{ background: cat === c ? olive : 'transparent', color: cat === c ? '#fff' : text, border: `1px solid ${cat === c ? olive : surface}` }}>{c}</button>
              ))}
            </div>
            <div className="space-y-2">
              {filtered.map(a => (
                <div key={a.title} className="flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition" style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: tint }}>
                    <BookOpen className="w-4 h-4" style={{ color: amberDark }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: navy }}>{a.title}</p>
                    <p className="text-xs" style={{ color: text }}>{a.cat} · {a.read} read · Updated {a.updated}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px]" style={{ color: text }}>{a.views}</span>
                    <ChevronRight className="w-4 h-4" style={{ color: muted }} />
                  </div>
                </div>
              ))}
              {filtered.length === 0 && <p className="text-center text-sm py-6" style={{ color: text }}>No articles found for "{query}"</p>}
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function Changelog() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Latest', 'Major', 'Minor', 'Patch'];
  const releases = [
    { version: 'v4.1.0', date: 'Dec 10, 2024', tag: 'Latest', breaking: false,
      items: [
        { type: 'feat', text: 'Added 12 new Application UI blocks including Messaging and Gradient Pickers' },
        { type: 'feat', text: 'Dark mode support for all 31 base components' },
        { type: 'fix',  text: 'Improved TypeScript strict types across PreviewWrapper and OnThisPage' },
        { type: 'perf', text: 'Reduced bundle size by 8% via tree-shaking improvements' },
      ]
    },
    { version: 'v4.0.0', date: 'Nov 1, 2024', tag: 'Major', breaking: true,
      items: [
        { type: 'feat',     text: 'Full earthy olive & amber palette redesign with CSS custom properties' },
        { type: 'breaking', text: 'Removed legacy Documentation section — replaced by interactive PreviewWrapper' },
        { type: 'feat',     text: 'New centralized theme/palette.ts as single source of truth' },
        { type: 'feat',     text: 'Added Vite 6 upgrade with patched launch-editor security fix' },
      ]
    },
    { version: 'v3.9.2', date: 'Oct 5, 2024', tag: 'Patch', breaking: false,
      items: [
        { type: 'fix', text: 'Fixed IntersectionObserver rootMargin in OnThisPage component' },
        { type: 'fix', text: 'Resolved Vite HMR flicker on dark mode toggle' },
        { type: 'fix', text: 'Corrected ARIA labels on PreviewWrapper viewport buttons' },
      ]
    },
  ];
  const typeStyle: Record<string, { bg: string; color: string; label: string }> = {
    feat:     { bg: '#d1fae5', color: '#065f46',  label: 'feat' },
    fix:      { bg: tint,      color: amberDark,  label: 'fix' },
    perf:     { bg: '#ede9fe', color: '#5b21b6',  label: 'perf' },
    breaking: { bg: '#fee2e2', color: '#991b1b',  label: 'breaking' },
  };
  const tagStyle: Record<string, { bg: string; color: string }> = {
    Latest: { bg: '#d1fae5', color: '#065f46' },
    Major:  { bg: '#fee2e2', color: '#991b1b' },
    Patch:  { bg: tint,      color: amberDark },
  };
  const filtered = releases.filter(r => filter === 'All' || r.tag === filter);
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Changelog" description="Advanced changelog with type-tagged items (feat/fix/breaking/perf), version filters, and breaking change warnings." code="// Changelog">
        <div style={{ background: cream }}>
          <div className="px-5 pt-4 pb-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${surface}` }}>
            <div>
              <h3 className="text-sm font-bold" style={{ color: navy }}>Changelog</h3>
              <p className="text-xs" style={{ color: text }}>JustTouch UI release history</p>
            </div>
            <div className="flex gap-1">
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)} className="px-2.5 py-1 rounded-lg text-xs font-semibold transition"
                  style={{ background: filter === f ? olive : 'transparent', color: filter === f ? '#fff' : text, border: `1px solid ${filter === f ? olive : surface}` }}>{f}</button>
              ))}
            </div>
          </div>
          <div className="p-5">
            {filtered.map((r, i) => (
              <div key={r.version} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ background: r.tag === 'Major' ? '#f87171' : olive }} />
                  {i < filtered.length - 1 && <div className="w-0.5 flex-1 mt-1" style={{ background: surface }} />}
                </div>
                <div className="pb-6 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold" style={{ color: navy }}>{r.version}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: tagStyle[r.tag].bg, color: tagStyle[r.tag].color }}>{r.tag}</span>
                    {r.breaking && <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: '#fee2e2', color: '#991b1b' }}>Breaking</span>}
                    <span className="text-xs" style={{ color: text }}>{r.date}</span>
                  </div>
                  <div className="p-3 rounded-xl space-y-2" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                    {r.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold shrink-0 mt-0.5"
                          style={{ background: typeStyle[item.type].bg, color: typeStyle[item.type].color }}>
                          {typeStyle[item.type].label}
                        </span>
                        <span className="text-xs" style={{ color: text }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}
