import React, { useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import { JustTouchLogo } from '@/components';
import { Eye, EyeOff, Check, ArrowLeft, Mail, Lock, User, ChevronDown } from 'lucide-react';

const sky = '#DDA15E', navy = '#283618', tint = '#F5F0CC';
const surface = '#E8E0A8', muted = '#C8B87A', text = '#7A6C2C';

export function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('selva@justtouch.io');
  const [pw, setPw] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); setTimeout(() => setDone(false), 2000); }, 1200);
  };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Log In" description="Centered login form with email/password, show-password toggle, and loading state." code="// Login Page">
        <div className="p-8 max-w-sm mx-auto space-y-5">
          <div className="text-center">
            <JustTouchLogo size="md" />
            <h2 className="text-xl font-bold mt-3" style={{ color: navy }}>Welcome back</h2>
            <p className="text-xs mt-1" style={{ color: text }}>Sign in to your JustTouch workspace</p>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: text }}>Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: muted }} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg focus:outline-none"
                  style={{ border: `1px solid ${muted}`, color: navy }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium" style={{ color: text }}>Password</label>
                <button type="button" className="text-xs font-medium" style={{ color: sky }}>Forgot password?</button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: muted }} />
                <input type={showPw ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 text-sm rounded-lg focus:outline-none"
                  style={{ border: `1px solid ${muted}`, color: navy }} />
                <button type="button" onClick={() => setShowPw(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: muted }}>
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition flex items-center justify-center gap-2"
              style={{ background: done ? '#10b981' : sky, opacity: loading ? 0.8 : 1 }}>
              {done ? <><Check className="w-4 h-4" />Signed in!</> : loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: surface }} />
            <span className="text-xs" style={{ color: muted }}>or continue with</span>
            <div className="flex-1 h-px" style={{ background: surface }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Google', 'GitHub'].map(p => (
              <button key={p} className="py-2 rounded-lg text-xs font-semibold transition"
                style={{ border: `1px solid ${muted}`, color: navy }}>{p}</button>
            ))}
          </div>
          <p className="text-center text-xs" style={{ color: text }}>
            Don't have an account? <button className="font-semibold" style={{ color: sky }}>Sign up free</button>
          </p>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function SignupPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [plan, setPlan] = useState('Pro Team');
  const plans = ['Starter', 'Pro Team', 'Enterprise'];
  const next = (e: React.FormEvent) => { e.preventDefault(); setStep(s => Math.min(s + 1, 3)); };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Sign Up" description="Multi-step registration flow with plan selection and account creation." code="// Sign Up Page">
        <div className="p-8 max-w-sm mx-auto space-y-5">
          <div className="text-center">
            <JustTouchLogo size="md" />
            <h2 className="text-xl font-bold mt-3" style={{ color: navy }}>Create your account</h2>
          </div>
          {/* Step indicator */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map(s => (
              <React.Fragment key={s}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition"
                  style={{ background: step >= s ? sky : surface, color: step >= s ? '#fff' : text }}>{s}</div>
                {s < 3 && <div className="flex-1 h-0.5 transition" style={{ background: step > s ? sky : surface }} />}
              </React.Fragment>
            ))}
          </div>
          {step === 1 && (
            <form onSubmit={next} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: text }}>Full name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: muted }} />
                  <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg focus:outline-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: text }}>Work email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: muted }} />
                  <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg focus:outline-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                </div>
              </div>
              <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Continue</button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={next} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: text }}>Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: muted }} />
                  <input required type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="Min 8 characters"
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg focus:outline-none"
                    style={{ border: `1px solid ${muted}`, color: navy }} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: text }}>Choose plan</label>
                <div className="space-y-2">
                  {plans.map(p => (
                    <button key={p} type="button" onClick={() => setPlan(p)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition"
                      style={{ border: `1.5px solid ${plan === p ? sky : muted}`, background: plan === p ? tint : '#fff', color: navy }}>
                      <span className="font-medium">{p}</span>
                      {plan === p && <Check className="w-4 h-4" style={{ color: sky }} />}
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Continue</button>
            </form>
          )}
          {step === 3 && (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold" style={{ color: navy }}>Account created!</h3>
              <p className="text-xs" style={{ color: text }}>Welcome, {name || 'there'}! Check your email to verify your account.</p>
              <button onClick={() => setStep(1)} className="text-xs font-medium" style={{ color: sky }}>Start over</button>
            </div>
          )}
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function VerificationPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [verified, setVerified] = useState(false);
  const refs = Array.from({ length: 6 }, () => React.createRef<HTMLInputElement>());
  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code]; next[i] = val; setCode(next);
    if (val && i < 5) refs[i + 1].current?.focus();
    if (next.every(c => c !== '') && next.join('').length === 6) {
      setTimeout(() => setVerified(true), 300);
    }
  };
  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[i] && i > 0) refs[i - 1].current?.focus();
  };
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Email Verification" description="6-digit OTP input with auto-advance, backspace navigation, and success state." code="// Verification Page">
        <div className="p-8 max-w-sm mx-auto text-center space-y-5">
          {!verified ? (
            <>
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center" style={{ background: tint }}>
                <Mail className="w-7 h-7" style={{ color: sky }} />
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: navy }}>Check your email</h2>
                <p className="text-xs mt-1" style={{ color: text }}>We sent a 6-digit code to selva@justtouch.io</p>
              </div>
              <div className="flex gap-2 justify-center">
                {code.map((c, i) => (
                  <input key={i} ref={refs[i]} value={c} onChange={e => handleChange(i, e.target.value)}
                    onKeyDown={e => handleKey(i, e)} maxLength={1} inputMode="numeric"
                    className="w-11 h-12 text-center text-lg font-bold rounded-xl focus:outline-none transition"
                    style={{ border: `2px solid ${c ? sky : muted}`, color: navy, background: c ? tint : '#fff' }} />
                ))}
              </div>
              <p className="text-xs" style={{ color: text }}>
                Didn't receive it? <button className="font-semibold" style={{ color: sky }}>Resend code</button>
              </p>
            </>
          ) : (
            <div className="space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold" style={{ color: navy }}>Email verified!</h3>
              <p className="text-xs" style={{ color: text }}>Your account is now active.</p>
              <button onClick={() => { setCode(['','','','','','']); setVerified(false); }}
                className="text-xs font-medium" style={{ color: sky }}>Reset demo</button>
            </div>
          )}
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function ForgotPasswordPage() {
  const [step, setStep] = useState<'request' | 'sent' | 'reset' | 'done'>('request');
  const [email, setEmail] = useState('');
  const [newPw, setNewPw] = useState('');
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Forgot Password" description="Password reset flow: email request → confirmation → new password → success." code="// Forgot Password">
        <div className="p-8 max-w-sm mx-auto space-y-5">
          {step === 'request' && (
            <>
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center mb-3" style={{ background: tint }}>
                  <Lock className="w-6 h-6" style={{ color: sky }} />
                </div>
                <h2 className="text-xl font-bold" style={{ color: navy }}>Forgot password?</h2>
                <p className="text-xs mt-1" style={{ color: text }}>Enter your email and we'll send a reset link.</p>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: text }}>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
                  className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none"
                  style={{ border: `1px solid ${muted}`, color: navy }} />
              </div>
              <button onClick={() => setStep('sent')} className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Send reset link</button>
              <button onClick={() => {}} className="w-full flex items-center justify-center gap-1.5 text-xs font-medium" style={{ color: text }}>
                <ArrowLeft className="w-3.5 h-3.5" />Back to login
              </button>
            </>
          )}
          {step === 'sent' && (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
                <Mail className="w-7 h-7" style={{ color: sky }} />
              </div>
              <h3 className="text-base font-bold" style={{ color: navy }}>Check your inbox</h3>
              <p className="text-xs" style={{ color: text }}>We sent a reset link to {email || 'your email'}.</p>
              <button onClick={() => setStep('reset')} className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Open reset form →</button>
            </div>
          )}
          {step === 'reset' && (
            <>
              <div className="text-center">
                <h2 className="text-xl font-bold" style={{ color: navy }}>Set new password</h2>
                <p className="text-xs mt-1" style={{ color: text }}>Must be at least 8 characters.</p>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: text }}>New password</label>
                <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="Min 8 characters"
                  className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none"
                  style={{ border: `1px solid ${muted}`, color: navy }} />
              </div>
              <button onClick={() => setStep('done')} className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Reset password</button>
            </>
          )}
          {step === 'done' && (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold" style={{ color: navy }}>Password reset!</h3>
              <p className="text-xs" style={{ color: text }}>You can now sign in with your new password.</p>
              <button onClick={() => setStep('request')} className="text-xs font-medium" style={{ color: sky }}>Reset demo</button>
            </div>
          )}
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const tiers = [
    { name: 'Starter',    monthly: '₹0',     yearly: '₹0',     desc: 'Open-source base components & icons',  features: ['31 base components','Tailwind CSS','MIT license'], featured: false },
    { name: 'Pro Team',   monthly: '₹1,999', yearly: '₹1,499', desc: 'All 240+ React blocks & Figma UI kit', features: ['Everything in Starter','240+ blocks','Figma UI kit','Priority support'], featured: true },
    { name: 'Enterprise', monthly: '₹6,499', yearly: '₹4,999', desc: 'Unlimited seats, custom tokens & SLA',  features: ['Everything in Pro','Unlimited seats','Custom tokens','Dedicated SLA'], featured: false },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Pricing Page" description="Interactive billing toggle with monthly/annual pricing and feature lists." code="// Pricing Page">
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Simple, transparent pricing</h2>
            <p className="text-sm mt-1" style={{ color: text }}>Start free. Scale as you grow.</p>
            <div className="mt-4 inline-flex items-center gap-1 p-1 rounded-xl" style={{ background: surface }}>
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
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold" style={{ color: navy }}>{t.name}</h3>
                  {t.featured && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: sky }}>Popular</span>}
                </div>
                <p className="text-3xl font-bold mt-2" style={{ color: navy }}>
                  {annual ? t.yearly : t.monthly}
                  <span className="text-xs font-normal" style={{ color: text }}>/mo</span>
                </p>
                <p className="text-xs mt-1 mb-4" style={{ color: text }}>{t.desc}</p>
                <ul className="space-y-2 flex-1 mb-4">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: text }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: sky }} />{f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 rounded-lg text-xs font-semibold transition"
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

export function ErrorPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-6">
      <PreviewWrapper title="404 Error Page" description="Branded 404 page with illustration and recovery navigation." code="// 404 Page">
        <div className="p-12 text-center space-y-5">
          <div className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center" style={{ background: tint }}>
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              <text x="4" y="58" fontSize="52" fontWeight="bold" fill={sky} opacity="0.3">404</text>
              <text x="8" y="54" fontSize="48" fontWeight="bold" fill={navy}>404</text>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: sky }}>Page not found</p>
            <h2 className="text-2xl font-bold" style={{ color: navy }}>Oops! Lost in the design system</h2>
            <p className="text-sm mt-2 max-w-xs mx-auto" style={{ color: text }}>
              The page you're looking for doesn't exist or has been moved to a new location.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button onClick={onBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold"
              style={{ background: sky }}>
              <ArrowLeft className="w-4 h-4" />Back to components
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ border: `1px solid ${muted}`, color: navy }}>Contact support</button>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}

export function EmailTemplatePage() {
  const [tab, setTab] = useState<'welcome' | 'reset' | 'invoice'>('welcome');
  const tabs = [
    { key: 'welcome' as const, label: 'Welcome' },
    { key: 'reset'   as const, label: 'Password Reset' },
    { key: 'invoice' as const, label: 'Invoice' },
  ];
  return (
    <div className="space-y-6">
      <PreviewWrapper title="Email Templates" description="Transactional email layouts: welcome, password reset, and invoice." code="// Email Templates">
        <div className="p-5">
          <div className="flex gap-1.5 mb-5">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                style={{ background: tab === t.key ? tint : 'transparent', color: tab === t.key ? sky : text, border: `1px solid ${tab === t.key ? muted : 'transparent'}` }}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden" style={{ border: `1px solid ${surface}` }}>
            <div className="h-2" style={{ background: `linear-gradient(90deg,${sky},${navy})` }} />
            <div className="p-6 space-y-4" style={{ background: '#fff' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ background: navy }}>JT</div>
                <span className="text-sm font-bold" style={{ color: navy }}>JustTouch UI</span>
              </div>
              {tab === 'welcome' && (
                <>
                  <h3 className="text-lg font-bold" style={{ color: navy }}>Welcome to JustTouch UI 🎉</h3>
                  <p className="text-sm" style={{ color: text }}>Hi Selvaraj, your account is ready. Start building beautiful React interfaces today.</p>
                  <button className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Get started →</button>
                </>
              )}
              {tab === 'reset' && (
                <>
                  <h3 className="text-lg font-bold" style={{ color: navy }}>Reset your password</h3>
                  <p className="text-sm" style={{ color: text }}>We received a request to reset your password. Click below to set a new one.</p>
                  <button className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Reset password</button>
                  <p className="text-xs text-center" style={{ color: muted }}>This link expires in 24 hours.</p>
                </>
              )}
              {tab === 'invoice' && (
                <>
                  <h3 className="text-lg font-bold" style={{ color: navy }}>Invoice #INV-2024-11</h3>
                  <div className="space-y-2 text-sm">
                    {[['Pro Team Plan', '₹1,499'], ['Annual discount', '-₹500'], ['Total', '₹999']].map(([l, v]) => (
                      <div key={l} className="flex justify-between" style={{ color: l === 'Total' ? navy : text, fontWeight: l === 'Total' ? 700 : 400 }}>
                        <span>{l}</span><span>{v}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: sky }}>Download PDF</button>
                </>
              )}
            </div>
            <div className="px-6 py-4 text-center text-xs" style={{ background: surface, color: muted }}>
              © 2024 JustTouch UI · Unsubscribe
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </div>
  );
}
