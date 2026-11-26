import React, { useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import { Check, ChevronDown, Star, ArrowLeft, ArrowRight, Mail, Zap, Shield, BarChart2 } from 'lucide-react';

const sky = '#DDA15E', navy = '#283618', tint = '#F5F0CC';
const surface = '#E8E0A8', muted = '#C8B87A', text = '#7A6C2C';

export function LandingPage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const features = [
    { icon: Zap,       title: '240+ components',   desc: 'Buttons to dashboards — every block you need.' },
    { icon: Shield,    title: 'Fully accessible',   desc: 'WCAG 2.1 AA with ARIA and keyboard support.' },
    { icon: BarChart2, title: 'Analytics ready',    desc: 'Charts, KPIs, and data tables built in.' },
  ];
  const testimonials = [
    { name: 'Priya N.', company: 'Razorpay',   quote: 'Cut our design-to-code time in half.' },
    { name: 'Arjun M.', company: 'Freshworks', quote: 'Dark mode support is absolutely flawless.' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="SaaS Landing Page" description="Full marketing landing page: hero, features, testimonials, pricing CTA." code="// Landing Page">
        <div className="space-y-0">
          {/* Hero */}
          <div className="px-6 py-12 text-center space-y-5" style={{ background: `linear-gradient(160deg,${tint} 0%,#fff 70%)` }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: tint, color: sky, border: `1px solid ${muted}` }}>
              <Zap className="w-3 h-3" />v4.1 — 12 new blocks
            </span>
            <h1 className="text-3xl font-extrabold leading-tight max-w-lg mx-auto" style={{ color: navy }}>
              The React UI library built for <span style={{ color: sky }}>Indian SaaS teams</span>
            </h1>
            <p className="text-sm max-w-md mx-auto" style={{ color: text }}>
              240+ production-ready components, Figma tokens, and a complete design system — all copy-paste ready.
            </p>
            {!joined ? (
              <form onSubmit={e => { e.preventDefault(); if (email) setJoined(true); }}
                className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" className="flex-1 px-4 py-2.5 text-sm rounded-xl focus:outline-none"
                  style={{ border: `1px solid ${muted}`, color: navy }} />
                <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0"
                  style={{ background: sky }}>Get started free</button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: '#d1fae5', color: '#065f46' }}>
                <Check className="w-4 h-4" />You're on the list!
              </div>
            )}
          </div>
          {/* Features */}
          <div className="px-6 py-10" style={{ background: '#fff', borderTop: `1px solid ${surface}` }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {features.map(f => (
                <div key={f.title} className="p-5 rounded-2xl" style={{ border: `1px solid ${surface}` }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: tint }}>
                    <f.icon className="w-4 h-4" style={{ color: sky }} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: navy }}>{f.title}</h3>
                  <p className="text-xs" style={{ color: text }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Testimonials */}
          <div className="px-6 py-8" style={{ background: tint, borderTop: `1px solid ${muted}` }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {testimonials.map(t => (
                <div key={t.name} className="p-4 rounded-xl" style={{ background: '#fff', border: `1px solid ${surface}` }}>
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#f59e0b' }} />)}
                  </div>
                  <p className="text-xs italic mb-3" style={{ color: text }}>"{t.quote}"</p>
                  <p className="text-xs font-semibold" style={{ color: navy }}>{t.name} · {t.company}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA */}
          <div className="px-6 py-10 text-center space-y-4" style={{ background: navy }}>
            <h2 className="text-xl font-bold text-white">Ready to ship faster?</h2>
            <button className="px-6 py-3 rounded-xl text-sm font-semibold"
              style={{ background: sky, color: navy }}>Browse all 240+ components</button>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function AboutPage() {
  const values = [
    { title: 'Developer first',  desc: 'Every API decision is made with DX in mind — copy-paste, not configure.' },
    { title: 'Accessible by default', desc: 'WCAG 2.1 AA compliance is non-negotiable, not an afterthought.' },
    { title: 'Indian SaaS focus', desc: 'Built for the unique needs of Indian product teams and startups.' },
    { title: 'Open & transparent', desc: 'MIT licensed base, public roadmap, and community-driven development.' },
  ];
  const team = [
    { initials: 'SK', name: 'Selvaraj K',     role: 'Founder' },
    { initials: 'PN', name: 'Priya Nair',     role: 'Engineering' },
    { initials: 'AM', name: 'Arjun Menon',    role: 'Design' },
    { initials: 'DK', name: 'Divya Krishnan', role: 'QA & A11y' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="About Page" description="Company story, core values, and team grid." code="// About Page">
        <div className="space-y-0">
          <div className="px-6 py-10 text-center" style={{ background: tint }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: sky }}>Our story</p>
            <h1 className="text-2xl font-bold mb-3" style={{ color: navy }}>Built by developers, for developers</h1>
            <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: text }}>
              JustTouch UI started as an internal design system at a Chennai-based SaaS startup. After open-sourcing it, 10,000+ developers adopted it within 6 months. Today it's the go-to React component library for Indian product teams.
            </p>
          </div>
          <div className="px-6 py-10" style={{ background: '#fff', borderTop: `1px solid ${surface}` }}>
            <h2 className="text-lg font-bold text-center mb-6" style={{ color: navy }}>Our values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {values.map(v => (
                <div key={v.title} className="p-4 rounded-xl" style={{ border: `1px solid ${surface}` }}>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: navy }}>{v.title}</h3>
                  <p className="text-xs" style={{ color: text }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-10" style={{ background: tint, borderTop: `1px solid ${muted}` }}>
            <h2 className="text-lg font-bold text-center mb-6" style={{ color: navy }}>The team</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto">
              {team.map(m => (
                <div key={m.name} className="text-center">
                  <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-sm font-bold text-white mb-2"
                    style={{ background: `linear-gradient(135deg,${sky},${navy})` }}>{m.initials}</div>
                  <p className="text-xs font-semibold" style={{ color: navy }}>{m.name}</p>
                  <p className="text-xs" style={{ color: text }}>{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function BlogPage() {
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Design', 'Engineering', 'Product'];
  const posts = [
    { title: 'Building a design token pipeline with Style Dictionary', cat: 'Engineering', date: 'Dec 5',  read: '6 min', excerpt: 'How we automated our token export from Figma to Tailwind CSS.' },
    { title: 'How we redesigned our color palette for accessibility',  cat: 'Design',      date: 'Nov 28', read: '4 min', excerpt: 'The journey from arbitrary hex values to a systematic palette.' },
    { title: 'Shipping JustTouch UI v4 — what changed and why',       cat: 'Product',     date: 'Nov 15', read: '8 min', excerpt: 'A deep dive into the decisions behind our biggest release yet.' },
    { title: 'Dark mode done right: lessons from 6 months of testing', cat: 'Engineering', date: 'Nov 2',  read: '5 min', excerpt: 'Everything we learned implementing dark mode across 240+ components.' },
  ];
  const filtered = cat === 'All' ? posts : posts.filter(p => p.cat === cat);
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Blog Page" description="Article index with category filters, post cards, and excerpts." code="// Blog Page">
        <div className="px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold" style={{ color: navy }}>Blog</h1>
            <div className="flex gap-1.5">
              {cats.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  className="px-3 py-1 rounded-lg text-xs font-semibold transition"
                  style={{ background: cat === c ? tint : 'transparent', color: cat === c ? sky : text, border: `1px solid ${cat === c ? muted : 'transparent'}` }}>{c}</button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {filtered.map(p => (
              <div key={p.title} className="p-5 rounded-2xl flex gap-4 cursor-pointer hover:shadow-sm transition"
                style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                <div className="w-20 h-20 rounded-xl shrink-0 flex items-center justify-center"
                  style={{ background: tint }}>
                  <span className="text-xs font-semibold" style={{ color: sky }}>{p.cat}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold mb-1" style={{ color: navy }}>{p.title}</h3>
                  <p className="text-xs mb-2 line-clamp-2" style={{ color: text }}>{p.excerpt}</p>
                  <p className="text-xs" style={{ color: muted }}>{p.date} · {p.read} read</p>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0 self-center" style={{ color: muted }} />
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', msg: '' });
  const [sent, setSent] = useState(false);
  const subjects = ['General', 'Sales', 'Support', 'Partnership'];
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Contact Page" description="Full contact page with subject selector, form, and office info." code="// Contact Page">
        <div className="px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
            <div className="md:col-span-2 space-y-5">
              <div>
                <h1 className="text-2xl font-bold" style={{ color: navy }}>Contact us</h1>
                <p className="text-sm mt-1" style={{ color: text }}>We typically respond within 24 hours.</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Email',    val: 'hello@justtouch.io' },
                  { label: 'Discord',  val: 'discord.gg/justtouch' },
                  { label: 'Location', val: 'Chennai, Tamil Nadu' },
                ].map(c => (
                  <div key={c.label}>
                    <p className="text-xs font-semibold" style={{ color: navy }}>{c.label}</p>
                    <p className="text-xs" style={{ color: text }}>{c.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-3">
              {!sent ? (
                <form onSubmit={submit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name" className="px-3 py-2.5 text-sm rounded-lg focus:outline-none"
                      style={{ border: `1px solid ${muted}`, color: navy }} />
                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="Email" className="px-3 py-2.5 text-sm rounded-lg focus:outline-none"
                      style={{ border: `1px solid ${muted}`, color: navy }} />
                  </div>
                  <div className="relative">
                    <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none appearance-none"
                      style={{ border: `1px solid ${muted}`, color: navy }}>
                      {subjects.map(s => <option key={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: muted }} />
                  </div>
                  <textarea required value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                    placeholder="Your message" rows={4} className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none resize-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                  <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>
                    Send message
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-3">
                  <Check className="w-10 h-10 mx-auto" style={{ color: '#10b981' }} />
                  <p className="text-sm font-semibold" style={{ color: navy }}>Message sent!</p>
                  <p className="text-xs" style={{ color: text }}>We'll reply to {form.email || 'you'} within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function FAQPage() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Pricing', 'Technical', 'Licensing'];
  const faqs = [
    { q: 'Is JustTouch UI free for commercial use?',        a: 'Yes — base components are MIT licensed. Pro blocks need a subscription.',  cat: 'Licensing' },
    { q: 'What React version is required?',                  a: 'React 18+ is required. We use hooks and concurrent features throughout.',   cat: 'Technical' },
    { q: 'Does it work with Next.js App Router?',            a: 'Yes, all components are pure TSX compatible with any React meta-framework.', cat: 'Technical' },
    { q: 'How much does the Pro plan cost?',                 a: '₹1,999/mo monthly or ₹1,499/mo billed annually (save 25%).',               cat: 'Pricing' },
    { q: 'Can I use the Figma kit without a Pro plan?',      a: 'The Figma UI kit is included with Pro Team and Enterprise plans only.',     cat: 'Licensing' },
    { q: 'Is Tailwind CSS v4 supported?',                    a: 'Tailwind v3 is fully supported. v4 support is on our Q1 2025 roadmap.',     cat: 'Technical' },
  ];
  const filtered = faqs.filter(f =>
    (cat === 'All' || f.cat === cat) &&
    (f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()))
  );
  return (
    <div className="space-y-6">
      <PreviewWrapper title="FAQ Page" description="Searchable FAQ page with category tabs and accordion answers." code="// FAQ Page">
        <div className="px-6 py-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold" style={{ color: navy }}>Frequently asked questions</h1>
            <div className="relative max-w-sm mx-auto mt-4">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: muted }} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl focus:outline-none"
                style={{ border: `1px solid ${muted}`, background: '#fff', color: navy }} />
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mb-6">
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className="px-3 py-1 rounded-lg text-xs font-semibold transition"
                style={{ background: cat === c ? tint : 'transparent', color: cat === c ? sky : text, border: `1px solid ${cat === c ? muted : 'transparent'}` }}>{c}</button>
            ))}
          </div>
          <div className="max-w-2xl mx-auto divide-y" style={{ borderColor: surface }}>
            {filtered.map((faq, i) => (
              <div key={i} className="py-4">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4">
                  <span className="text-sm font-semibold" style={{ color: navy }}>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} style={{ color: muted }} />
                </button>
                {open === i && <p className="text-xs mt-2 leading-relaxed" style={{ color: text }}>{faq.a}</p>}
              </div>
            ))}
            {filtered.length === 0 && <p className="text-center text-sm py-6" style={{ color: text }}>No results for "{query}"</p>}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function LegalPage() {
  const [section, setSection] = useState('privacy');
  const sections = [
    { key: 'privacy', label: 'Privacy Policy' },
    { key: 'terms',   label: 'Terms of Service' },
  ];
  const privacy = [
    { title: '1. Information we collect',    body: 'We collect your email address when you sign up, usage analytics (anonymised), and payment information processed securely via Razorpay.' },
    { title: '2. How we use your data',      body: 'Your data is used to provide the service, send product updates (with consent), and improve JustTouch UI. We never sell your data.' },
    { title: '3. Data retention',            body: 'Account data is retained for the duration of your subscription plus 90 days. You may request deletion at any time.' },
    { title: '4. Third-party services',      body: 'We use Razorpay for payments, Vercel for hosting, and Plausible for privacy-first analytics. No Google Analytics.' },
  ];
  const terms = [
    { title: '1. Acceptance of terms',       body: 'By using JustTouch UI you agree to these terms. If you do not agree, please discontinue use immediately.' },
    { title: '2. License grant',             body: 'Base components are MIT licensed. Pro blocks are licensed per-seat for the duration of your active subscription.' },
    { title: '3. Prohibited use',            body: 'You may not resell, sublicense, or redistribute Pro blocks as a standalone product or competing component library.' },
    { title: '4. Limitation of liability',   body: 'JustTouch UI is provided "as is". We are not liable for any indirect, incidental, or consequential damages.' },
  ];
  const content = section === 'privacy' ? privacy : terms;
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Legal Pages" description="Privacy Policy and Terms of Service with sticky section navigation." code="// Legal Page">
        <div className="px-6 py-10">
          <div className="flex gap-2 mb-6">
            {sections.map(s => (
              <button key={s.key} onClick={() => setSection(s.key)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition"
                style={{ background: section === s.key ? tint : 'transparent', color: section === s.key ? sky : text, border: `1px solid ${section === s.key ? muted : 'transparent'}` }}>
                {s.label}
              </button>
            ))}
          </div>
          <div className="max-w-2xl">
            <p className="text-xs mb-6" style={{ color: muted }}>Last updated: December 10, 2024</p>
            <div className="space-y-6">
              {content.map(c => (
                <div key={c.title}>
                  <h3 className="text-sm font-bold mb-2" style={{ color: navy }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: text }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function Error404Page({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-6">
      <PreviewWrapper title="404 Page" description="Branded 404 error page with illustration and recovery actions." code="// 404 Page">
        <div className="px-6 py-16 text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-3xl" style={{ background: tint }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-extrabold" style={{ color: sky, opacity: 0.3 }}>404</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-extrabold" style={{ color: navy }}>404</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: sky }}>Page not found</p>
            <h1 className="text-2xl font-bold" style={{ color: navy }}>Lost in the design system</h1>
            <p className="text-sm mt-2 max-w-xs mx-auto" style={{ color: text }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button onClick={onBack}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: sky }}>
              <ArrowLeft className="w-4 h-4" />Back to components
            </button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{ border: `1px solid ${muted}`, color: navy }}>Contact support</button>
          </div>
          <div className="flex items-center justify-center gap-6 pt-2">
            {['Overview', 'Components', 'Pricing'].map(l => (
              <button key={l} className="text-xs font-medium" style={{ color: sky }}>{l}</button>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}
