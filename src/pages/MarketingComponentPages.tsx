import React, { useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import {
  Check, ChevronDown, Star, ArrowRight, Mail,
  Zap, Shield, BarChart2, Globe, Users, Layers,
} from 'lucide-react';

const sky = '#DDA15E', navy = '#283618', tint = '#F5F0CC';
const surface = '#E8E0A8', muted = '#C8B87A', text = '#7A6C2C';

export function HeroSection() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (email) setJoined(true); };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Hero Section" description="Full-width hero with headline, sub-copy, email CTA, and social proof strip." code="// Hero Section">
        <div className="px-6 py-12 text-center space-y-6" style={{ background: `linear-gradient(160deg,${tint} 0%,#fff 60%)` }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: tint, color: sky, border: `1px solid ${muted}` }}>
            <Zap className="w-3 h-3" />New — v4.1 is live
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-xl mx-auto" style={{ color: navy }}>
            Build stunning React UIs <span style={{ color: sky }}>10× faster</span>
          </h1>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: text }}>
            240+ production-ready components, Figma tokens, and a full design system — all in one copy-paste library.
          </p>
          {!joined ? (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-2.5 text-sm rounded-xl focus:outline-none"
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
          <div className="flex items-center justify-center gap-6 pt-2">
            {['10k+ devs', '240+ blocks', 'MIT license'].map(s => (
              <span key={s} className="text-xs font-medium" style={{ color: muted }}>✓ {s}</span>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function FeatureSection() {
  const features = [
    { icon: Zap,      title: 'Lightning fast',    desc: 'Vite-powered dev server with instant HMR and sub-second builds.' },
    { icon: Shield,   title: 'Fully accessible',  desc: 'WCAG 2.1 AA compliant with ARIA labels and keyboard navigation.' },
    { icon: BarChart2,title: 'Analytics ready',   desc: 'Built-in chart components for line, bar, donut, and radar data.' },
    { icon: Globe,    title: 'i18n support',       desc: 'RTL-ready layouts and locale-aware number/date formatting.' },
    { icon: Users,    title: 'Team collaboration', desc: 'Figma UI kit synced with design tokens for seamless handoff.' },
    { icon: Layers,   title: 'Composable',         desc: 'Atomic design — atoms, molecules, and organisms all exported.' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Feature Section" description="6-up icon feature grid with title, description, and palette accent icons." code="// Feature Section">
        <div className="px-6 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Everything you need to ship faster</h2>
            <p className="text-sm mt-1 max-w-md mx-auto" style={{ color: text }}>
              JustTouch UI is built for modern React teams who care about quality and speed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title} className="p-5 rounded-2xl" style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: tint }}>
                  <f.icon className="w-5 h-5" style={{ color: sky }} />
                </div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: navy }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: text }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function CTASection() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="space-y-6">
      <PreviewWrapper title="CTA Section" description="Full-width conversion banner with gradient background and dual action buttons." code="// CTA Section">
        <div className="px-6 py-12 rounded-2xl text-center space-y-5 mx-4 my-4"
          style={{ background: `linear-gradient(135deg,${navy} 0%,#3D5429 100%)` }}>
          <h2 className="text-2xl font-bold text-white">Start building with JustTouch UI today</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: muted }}>
            Join 10,000+ developers shipping production-ready React interfaces faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setClicked(true)}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition"
              style={{ background: clicked ? '#10b981' : sky, color: clicked ? '#fff' : navy }}>
              {clicked ? '✓ Let\'s go!' : 'Get started free'}
            </button>
            <button className="px-6 py-3 rounded-xl text-sm font-semibold"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
              View components <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </div>
          <p className="text-xs" style={{ color: muted }}>No credit card required · MIT license · Free forever</p>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonials = [
    { name: 'Priya Nair',     role: 'Senior UI Engineer',      company: 'Razorpay',    rating: 5, quote: 'JustTouch UI cut our design-to-code time in half. The Figma token sync is a game changer.' },
    { name: 'Arjun Menon',    role: 'Product Designer',         company: 'Freshworks',  rating: 5, quote: 'The dark mode support is flawless. Every component just works out of the box.' },
    { name: 'Divya Krishnan', role: 'Frontend Lead',            company: 'Zoho',        rating: 5, quote: 'Best React component library for Indian SaaS teams. The palette is perfect.' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Testimonials" description="Rotating testimonial cards with star ratings and author attribution." code="// Testimonials">
        <div className="px-6 py-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Loved by developers</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="p-6 rounded-2xl" style={{ border: `1px solid ${surface}`, background: '#fff' }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#f59e0b' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: text }}>"{testimonials[active].quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg,${sky},${navy})` }}>
                  {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: navy }}>{testimonials[active].name}</p>
                  <p className="text-xs" style={{ color: text }}>{testimonials[active].role} · {testimonials[active].company}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: active === i ? sky : muted, width: active === i ? 20 : 8 }} />
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function PricingSection() {
  const [annual, setAnnual] = useState(true);
  const tiers = [
    { name: 'Starter',    mo: '₹0',     yr: '₹0',     features: ['31 base components','Tailwind CSS','MIT license'],                        featured: false },
    { name: 'Pro Team',   mo: '₹1,999', yr: '₹1,499', features: ['240+ blocks','Figma UI kit','Priority support','Dark mode'],              featured: true  },
    { name: 'Enterprise', mo: '₹6,499', yr: '₹4,999', features: ['Unlimited seats','Custom tokens','Dedicated SLA','White-label rights'],   featured: false },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Pricing Section" description="Tiered pricing cards with billing toggle and feature comparison." code="// Pricing Section">
        <div className="px-6 py-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Choose your plan</h2>
            <div className="mt-3 inline-flex items-center gap-1 p-1 rounded-xl" style={{ background: surface }}>
              <button onClick={() => setAnnual(false)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold transition"
                style={{ background: !annual ? '#fff' : 'transparent', color: !annual ? navy : text }}>Monthly</button>
              <button onClick={() => setAnnual(true)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold transition"
                style={{ background: annual ? '#fff' : 'transparent', color: annual ? sky : text }}>
                Annual <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold" style={{ background: '#d1fae5', color: '#065f46' }}>-25%</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map(t => (
              <div key={t.name} className="p-5 rounded-2xl flex flex-col"
                style={{ border: t.featured ? `2px solid ${sky}` : `1px solid ${surface}`, background: t.featured ? tint : '#fff' }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold" style={{ color: navy }}>{t.name}</h3>
                  {t.featured && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: sky }}>Popular</span>}
                </div>
                <p className="text-3xl font-bold mb-4" style={{ color: navy }}>
                  {annual ? t.yr : t.mo}<span className="text-xs font-normal" style={{ color: text }}>/mo</span>
                </p>
                <ul className="space-y-2 flex-1 mb-4">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: text }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: sky }} />{f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 rounded-lg text-xs font-semibold"
                  style={{ background: t.featured ? sky : 'transparent', color: t.featured ? '#fff' : navy, border: t.featured ? 'none' : `1px solid ${muted}` }}>
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: 'Is JustTouch UI free for commercial use?',       a: 'Yes — all base components are MIT licensed. Pro blocks require a Pro Team subscription.' },
    { q: 'Does it work with Next.js and Remix?',           a: 'Absolutely. All components are pure React TSX files compatible with any React meta-framework.' },
    { q: 'Is Tailwind CSS required?',                      a: 'Yes, Tailwind CSS v3+ is required. We also export CSS custom properties for non-Tailwind setups.' },
    { q: 'Can I use the Figma UI kit without a Pro plan?', a: 'The Figma kit is included with Pro Team and Enterprise plans only.' },
    { q: 'How do I get support?',                          a: 'Free users get community support via GitHub Discussions. Pro users get priority email support.' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="FAQ Section" description="Interactive accordion FAQ with animated chevron and smooth expand." code="// FAQ Section">
        <div className="px-6 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Frequently asked questions</h2>
          </div>
          <div className="max-w-2xl mx-auto divide-y" style={{ borderColor: surface }}>
            {faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4">
                  <span className="text-sm font-semibold" style={{ color: navy }}>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                    style={{ color: muted }} />
                </button>
                {open === i && (
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: text }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function FooterSection() {
  const [emailVal, setEmailVal] = useState('');
  const [subbed, setSubbed] = useState(false);
  const cols = [
    { title: 'Product',   links: ['Components', 'Templates', 'Figma Kit', 'Changelog'] },
    { title: 'Resources', links: ['Documentation', 'GitHub', 'Discord', 'Blog'] },
    { title: 'Company',   links: ['About', 'Careers', 'Privacy', 'Terms'] },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Footer" description="Multi-column sitemap footer with newsletter input and legal links." code="// Footer">
        <div className="px-6 py-10" style={{ background: navy }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: sky }}>JT</div>
                <span className="text-sm font-bold text-white">JustTouch UI</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: muted }}>
                Production-ready React components for modern SaaS teams.
              </p>
            </div>
            {cols.map(col => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: muted }}>{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l}><button className="text-xs transition hover:text-white" style={{ color: muted }}>{l}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p className="text-xs" style={{ color: muted }}>© 2024 JustTouch UI. All rights reserved.</p>
            {!subbed ? (
              <form onSubmit={e => { e.preventDefault(); if (emailVal) setSubbed(true); }} className="flex gap-2">
                <input type="email" value={emailVal} onChange={e => setEmailVal(e.target.value)}
                  placeholder="Subscribe to updates"
                  className="px-3 py-1.5 text-xs rounded-lg focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} />
                <button type="submit" className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{ background: sky, color: navy }}>Subscribe</button>
              </form>
            ) : (
              <span className="text-xs font-semibold" style={{ color: '#10b981' }}>✓ Subscribed!</span>
            )}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function BannerSection() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const banners = [
    { id: 0, type: 'announcement', msg: '🎉 JustTouch UI v4.1 is live — 12 new blocks added!', bg: tint,       color: navy,       border: muted },
    { id: 1, type: 'warning',      msg: '⚠️  Your Pro plan renews in 3 days. Update billing.',  bg: '#fef3c7',   color: '#92400e',  border: '#fcd34d' },
    { id: 2, type: 'cookie',       msg: '🍪 We use cookies to improve your experience.',         bg: navy,        color: '#FEFAE0',  border: 'transparent' },
  ];
  const visible = banners.filter(b => !dismissed.includes(b.id));
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Banners" description="Announcement, warning, and cookie consent banners with dismiss action." code="// Banners">
        <div className="p-5 space-y-3">
          {visible.map(b => (
            <div key={b.id} className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{ background: b.bg, border: `1px solid ${b.border}` }}>
              <p className="text-xs font-medium" style={{ color: b.color }}>{b.msg}</p>
              <button onClick={() => setDismissed(d => [...d, b.id])}
                className="text-xs font-semibold ml-4 shrink-0" style={{ color: b.color }}>Dismiss</button>
            </div>
          ))}
          {visible.length === 0 && (
            <div className="text-center py-6">
              <p className="text-sm" style={{ color: text }}>All banners dismissed.</p>
              <button onClick={() => setDismissed([])} className="text-xs font-semibold mt-2" style={{ color: sky }}>Reset</button>
            </div>
          )}
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function BlogSection() {
  const [cat, setCat] = useState('All');
  const cats = ['All', 'Design', 'Engineering', 'Product'];
  const posts = [
    { title: 'Building a design token pipeline with Style Dictionary', cat: 'Engineering', date: 'Dec 5',  read: '6 min' },
    { title: 'How we redesigned our color palette for accessibility',  cat: 'Design',      date: 'Nov 28', read: '4 min' },
    { title: 'Shipping JustTouch UI v4 — what changed and why',       cat: 'Product',     date: 'Nov 15', read: '8 min' },
    { title: 'Dark mode done right: lessons from 6 months of testing', cat: 'Engineering', date: 'Nov 2',  read: '5 min' },
  ];
  const filtered = cat === 'All' ? posts : posts.filter(p => p.cat === cat);
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Blog Section" description="Article card grid with category filter tabs." code="// Blog Section">
        <div className="px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ color: navy }}>From the blog</h2>
            <div className="flex gap-1.5">
              {cats.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  className="px-3 py-1 rounded-lg text-xs font-semibold transition"
                  style={{ background: cat === c ? tint : 'transparent', color: cat === c ? sky : text, border: `1px solid ${cat === c ? muted : 'transparent'}` }}>{c}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map(p => (
              <div key={p.title} className="p-5 rounded-2xl cursor-pointer hover:shadow-md transition"
                style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                <div className="h-28 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: tint, backgroundImage: 'linear-gradient(135deg,rgba(221,161,94,0.12) 0%,rgba(40,54,24,0.04) 100%)' }}>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: '#fff', color: sky }}>{p.cat}</span>
                </div>
                <h3 className="text-sm font-semibold leading-snug mb-2" style={{ color: navy }}>{p.title}</h3>
                <p className="text-xs" style={{ color: text }}>{p.date} · {p.read} read</p>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Contact Section" description="Inquiry form with name, email, message fields and success state." code="// Contact Section">
        <div className="px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: navy }}>Get in touch</h2>
              <p className="text-sm mb-6" style={{ color: text }}>Have a question or want to work together? We'd love to hear from you.</p>
              {[['📧', 'Email', 'hello@justtouch.io'], ['💬', 'Discord', 'discord.gg/justtouch'], ['🐙', 'GitHub', 'github.com/justtouch-ui']].map(([icon, label, val]) => (
                <div key={label} className="flex items-center gap-3 mb-3">
                  <span className="text-lg">{icon}</span>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: navy }}>{label}</p>
                    <p className="text-xs" style={{ color: text }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={submit} className="space-y-3">
              {!sent ? (
                <>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name" className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="Email address" className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                  <textarea required value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                    placeholder="Your message" rows={4} className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none resize-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                  <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>
                    Send message
                  </button>
                </>
              ) : (
                <div className="text-center py-8 space-y-2">
                  <Check className="w-10 h-10 mx-auto" style={{ color: '#10b981' }} />
                  <p className="text-sm font-semibold" style={{ color: navy }}>Message sent!</p>
                  <p className="text-xs" style={{ color: text }}>We'll get back to you within 24 hours.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function TeamSection() {
  const members = [
    { name: 'Selvaraj K',     role: 'Founder & Lead Architect', initials: 'SK', bio: 'Building design systems for 8+ years.' },
    { name: 'Priya Nair',     role: 'Senior UI Engineer',        initials: 'PN', bio: 'Accessibility advocate and Tailwind expert.' },
    { name: 'Arjun Menon',    role: 'Product Designer',          initials: 'AM', bio: 'Figma power user and token system designer.' },
    { name: 'Divya Krishnan', role: 'QA & Accessibility Lead',   initials: 'DK', bio: 'WCAG 2.1 specialist and ARIA champion.' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Team Section" description="Leadership grid with avatar initials, role, and bio." code="// Team Section">
        <div className="px-6 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Meet the team</h2>
            <p className="text-sm mt-1" style={{ color: text }}>The people behind JustTouch UI.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {members.map(m => (
              <div key={m.name} className="p-5 rounded-2xl text-center" style={{ border: `1px solid ${surface}`, background: '#fff' }}>
                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-lg font-bold text-white mb-3"
                  style={{ background: `linear-gradient(135deg,${sky},${navy})` }}>{m.initials}</div>
                <p className="text-sm font-semibold" style={{ color: navy }}>{m.name}</p>
                <p className="text-xs mt-0.5 mb-2" style={{ color: sky }}>{m.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: text }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (email) setDone(true); };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Newsletter CTA" description="Full-width email capture section with incentive copy and success state." code="// Newsletter CTA">
        <div className="px-6 py-12 text-center space-y-5 rounded-2xl mx-4 my-4"
          style={{ background: tint, border: `1px solid ${muted}` }}>
          <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center" style={{ background: sky }}>
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold" style={{ color: navy }}>Stay in the loop</h2>
          <p className="text-sm max-w-sm mx-auto" style={{ color: text }}>
            Get notified when we ship new components, templates, and design system updates.
          </p>
          {!done ? (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" className="flex-1 px-4 py-2.5 text-sm rounded-xl focus:outline-none"
                style={{ border: `1px solid ${muted}`, background: '#fff', color: navy }} />
              <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0"
                style={{ background: sky }}>Subscribe</button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background: '#d1fae5', color: '#065f46' }}>
              <Check className="w-4 h-4" />You're subscribed!
            </div>
          )}
          <p className="text-xs" style={{ color: muted }}>No spam. Unsubscribe anytime.</p>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function SocialProofSection() {
  const logos = ['Razorpay', 'Freshworks', 'Zoho', 'Chargebee', 'Postman', 'BrowserStack'];
  const stats = [
    { val: '10k+',  label: 'Developers' },
    { val: '240+',  label: 'Components' },
    { val: '4.9★',  label: 'Avg rating' },
    { val: '99%',   label: 'Uptime' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Social Proof" description="Logo wall with trusted company names and aggregate stats strip." code="// Social Proof">
        <div className="px-6 py-10 space-y-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: muted }}>Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {logos.map(l => (
                <span key={l} className="text-sm font-bold" style={{ color: muted }}>{l}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.label} className="text-center p-4 rounded-2xl" style={{ background: tint, border: `1px solid ${muted}` }}>
                <p className="text-2xl font-extrabold" style={{ color: navy }}>{s.val}</p>
                <p className="text-xs mt-1" style={{ color: text }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}
