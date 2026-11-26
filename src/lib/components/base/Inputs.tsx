import { memo, useState } from 'react';
import { Mail, Eye, EyeOff, Search, Phone, User, Lock } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const INPUTS_VARIANTS: OnThisPageItem[] = [
  { id: 'input-default',       label: 'Default' },
  { id: 'input-with-icon',     label: 'With leading icon' },
  { id: 'input-password',      label: 'Password' },
  { id: 'input-search',        label: 'Search' },
  { id: 'input-with-addon',    label: 'With addon' },
  { id: 'input-success',       label: 'Success state' },
  { id: 'input-error',         label: 'Error state' },
  { id: 'input-disabled',      label: 'Disabled' },
  { id: 'input-sizes',         label: 'Sizes' },
];

const BASE = 'w-full px-3 py-2 rounded-lg border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition';

export const Inputs = memo(function Inputs() {
  const [showPw, setShowPw] = useState(false);

  return (
    <>
      <PreviewWrapper id="input-default" title="Default" description="Standard text input with label and placeholder."
        code={`<input type="text" placeholder="Enter value" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {[
            { label: 'Full name', placeholder: 'Selva Ganesan', type: 'text' },
            { label: 'Work email', placeholder: 'you@company.com', type: 'email' },
            { label: 'Website', placeholder: 'https://justtouch.io', type: 'url' },
          ].map(({ label, placeholder, type }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
              <input type={type} placeholder={placeholder} className={`${BASE} border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-with-icon" title="With leading icon" description="Input with a leading icon for contextual clarity."
        code={`<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
  <input type="email" placeholder="you@company.com" className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500" />
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {[
            { Icon: Mail,  label: 'Email',    placeholder: 'you@company.com', type: 'email' },
            { Icon: Phone, label: 'Phone',    placeholder: '+1 (555) 000-0000', type: 'tel' },
            { Icon: User,  label: 'Username', placeholder: 'selva_ganesan', type: 'text' },
            { Icon: Lock,  label: 'Password', placeholder: '••••••••', type: 'password' },
          ].map(({ Icon, label, placeholder, type }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
              <div className="relative">
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type={type} placeholder={placeholder} className={`${BASE} pl-9 border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-password" title="Password" description="Password input with show/hide toggle."
        code={`<div className="relative">
  <input type={show ? 'text' : 'password'} className="w-full px-3 pr-9 py-2 rounded-lg border border-slate-300 text-sm" />
  <button onClick={() => setShow(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
    {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
  </button>
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} defaultValue="mysecretpassword" className={`${BASE} pr-9 border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
              <button onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="mt-1 text-xs text-slate-500">Must be at least 8 characters.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Confirm password</label>
            <div className="relative">
              <input type="password" placeholder="••••••••" className={`${BASE} pr-9 border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-search" title="Search" description="Search input with leading icon and clear affordance."
        code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
  <input type="search" placeholder="Search…" className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-sm" />
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {['Search components…', 'Search team members…', 'Search documentation…'].map((ph) => (
            <div key={ph} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="search" placeholder={ph} className={`${BASE} pl-9 border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-with-addon" title="With addon" description="Input with a leading or trailing text addon."
        code={`<div className="flex rounded-lg border border-slate-300 overflow-hidden">
  <span className="px-3 py-2 bg-slate-50 text-slate-500 text-sm border-r border-slate-300">https://</span>
  <input type="text" placeholder="yoursite.com" className="flex-1 px-3 py-2 text-sm bg-white focus:outline-none" />
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Website</label>
            <div className="flex rounded-lg border border-slate-300 dark:border-slate-600 overflow-hidden">
              <span className="px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-500 text-sm border-r border-slate-300 dark:border-slate-600 whitespace-nowrap">https://</span>
              <input type="text" placeholder="yoursite.com" className="flex-1 px-3 py-2 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Workspace slug</label>
            <div className="flex rounded-lg border border-slate-300 dark:border-slate-600 overflow-hidden">
              <input type="text" placeholder="my-workspace" className="flex-1 px-3 py-2 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none" />
              <span className="px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-500 text-sm border-l border-slate-300 dark:border-slate-600 whitespace-nowrap">.justtouch.io</span>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-success" title="Success state" description="Input with a success validation message."
        code={`<input className="w-full px-3 py-2 rounded-lg border border-emerald-400 text-sm focus:ring-2 focus:ring-emerald-500" />
<p className="mt-1 text-xs text-emerald-600">✓ Available workspace domain</p>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Workspace domain</label>
            <input type="text" defaultValue="justtouch" className={`${BASE} border-emerald-400 focus:ring-emerald-500`} />
            <p className="mt-1 text-xs text-emerald-600">✓ Available workspace domain</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Username</label>
            <input type="text" defaultValue="selva_ganesan" className={`${BASE} border-emerald-400 focus:ring-emerald-500`} />
            <p className="mt-1 text-xs text-emerald-600">✓ Username is available</p>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-error" title="Error state" description="Input with a validation error message."
        code={`<input className="w-full px-3 py-2 rounded-lg border border-rose-400 text-sm focus:ring-2 focus:ring-rose-500" />
<p className="mt-1 text-xs text-rose-600">This username is already taken.</p>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Username</label>
            <input type="text" defaultValue="taken_user" className={`${BASE} border-rose-400 focus:ring-rose-500`} />
            <p className="mt-1 text-xs text-rose-600">This username is already taken.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
            <input type="email" defaultValue="invalid-email" className={`${BASE} border-rose-400 focus:ring-rose-500`} />
            <p className="mt-1 text-xs text-rose-600">Please enter a valid email address.</p>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-disabled" title="Disabled" description="Input in a non-interactive disabled state."
        code={`<input disabled value="Read only value" className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed text-sm" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Account ID (read-only)</label>
            <input disabled value="acc_1234567890" className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400 cursor-not-allowed text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Plan (locked)</label>
            <input disabled value="Enterprise" className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400 cursor-not-allowed text-sm" />
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="input-sizes" title="Sizes" description="Input size scale from SM to LG."
        code={`<input className="w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs" placeholder="Small" />
<input className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm" placeholder="Medium" />
<input className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base" placeholder="Large" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {[
            { ph: 'Small input',  cls: 'px-2.5 py-1.5 rounded-md text-xs',  label: 'SM' },
            { ph: 'Medium input', cls: 'px-3 py-2 rounded-lg text-sm',      label: 'MD' },
            { ph: 'Large input',  cls: 'px-4 py-3 rounded-xl text-base',    label: 'LG' },
          ].map(({ ph, cls, label }) => (
            <div key={label}>
              <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
              <input type="text" placeholder={ph} className={`w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${cls}`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
