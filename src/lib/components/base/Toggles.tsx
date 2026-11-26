import { memo, useState } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const TOGGLES_VARIANTS: OnThisPageItem[] = [
  { id: 'toggle-default',   label: 'Default' },
  { id: 'toggle-checked',   label: 'Checked' },
  { id: 'toggle-with-label',label: 'With label' },
  { id: 'toggle-with-desc', label: 'With description' },
  { id: 'toggle-disabled',  label: 'Disabled' },
  { id: 'toggle-sizes',     label: 'Sizes' },
  { id: 'toggle-colors',    label: 'Color variants' },
];

function Toggle({ on, onToggle, disabled = false }: { on: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <button role="switch" aria-checked={on} onClick={disabled ? undefined : onToggle} disabled={disabled}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${on ? 'bg-brand-600' : 'bg-slate-200 dark:bg-slate-700'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${on ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

const SETTINGS = [
  { label: 'Email notifications',  desc: 'Receive updates via email',       defaultOn: true  },
  { label: 'Push notifications',   desc: 'Alerts on your mobile device',    defaultOn: false },
  { label: 'Weekly digest',        desc: 'Summary of activity each week',   defaultOn: true  },
  { label: 'Marketing emails',     desc: 'Product news and announcements',  defaultOn: false },
];

function SettingToggle({ label, desc, defaultOn }: { label: string; desc: string; defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-4">
      <div><p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p><p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p></div>
      <Toggle on={on} onToggle={() => setOn((v) => !v)} />
    </div>
  );
}

export const Toggles = memo(function Toggles() {
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(true);

  return (
    <>
      <PreviewWrapper id="toggle-default" title="Default" description="Toggle in the off/unchecked state."
        code={`<button role="switch" aria-checked={false} className="relative inline-flex h-6 w-11 rounded-full bg-slate-200 transition-colors">
  <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform" />
</button>`}>
        <div className="p-10 flex items-center justify-center gap-6">
          <Toggle on={false} onToggle={() => {}} />
          <Toggle on={false} onToggle={() => {}} />
          <Toggle on={false} onToggle={() => {}} />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="toggle-checked" title="Checked" description="Toggle in the on/checked state."
        code={`<button role="switch" aria-checked={true} className="relative inline-flex h-6 w-11 rounded-full bg-brand-600 transition-colors">
  <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow translate-x-5 transition-transform" />
</button>`}>
        <div className="p-10 flex items-center justify-center gap-6">
          <Toggle on={true} onToggle={() => {}} />
          <Toggle on={true} onToggle={() => {}} />
          <Toggle on={true} onToggle={() => {}} />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="toggle-with-label" title="With label" description="Toggle with an inline label."
        code={`<label className="flex items-center gap-3 cursor-pointer">
  <Toggle on={on} onToggle={() => setOn(v => !v)} />
  <span className="text-sm font-medium">{on ? 'Enabled' : 'Disabled'}</span>
</label>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {[true, false].map((_init, i) => {
            const [on, setOn] = [i === 0 ? on1 : on2, i === 0 ? setOn1 : setOn2];
            return (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <Toggle on={on} onToggle={() => setOn((v) => !v)} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{on ? 'Enabled' : 'Disabled'}</span>
              </label>
            );
          })}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="toggle-with-desc" title="With description" description="Toggle with label and supporting description text."
        code={`<div className="flex items-center justify-between gap-4">
  <div>
    <p className="text-sm font-medium">Email notifications</p>
    <p className="text-xs text-slate-500">Receive updates via email</p>
  </div>
  <Toggle on={on} onToggle={() => setOn(v => !v)} />
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-5">
          {SETTINGS.map((s) => <SettingToggle key={s.label} {...s} />)}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="toggle-disabled" title="Disabled" description="Toggle in disabled on and off states."
        code={`<button role="switch" disabled className="relative inline-flex h-6 w-11 rounded-full bg-brand-600 opacity-50 cursor-not-allowed">...</button>`}>
        <div className="p-10 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Toggle on={false} onToggle={() => {}} disabled />
            <span className="text-xs text-slate-400">Off / disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle on={true} onToggle={() => {}} disabled />
            <span className="text-xs text-slate-400">On / disabled</span>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="toggle-sizes" title="Sizes" description="Toggle size scale from SM to LG."
        code={`// SM: h-4 w-8, thumb: w-3 h-3
// MD: h-6 w-11, thumb: w-5 h-5
// LG: h-8 w-14, thumb: w-6 h-6`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { h: 'h-4', w: 'w-8',  th: 'w-3 h-3', tx: 'translate-x-4', label: 'SM' },
            { h: 'h-6', w: 'w-11', th: 'w-5 h-5', tx: 'translate-x-5', label: 'MD' },
            { h: 'h-8', w: 'w-14', th: 'w-6 h-6', tx: 'translate-x-6', label: 'LG' },
          ].map(({ h, w, th, tx, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`relative inline-flex ${h} ${w} rounded-full bg-brand-600`}>
                <span className={`absolute top-0.5 left-0.5 ${th} rounded-full bg-white shadow ${tx}`} />
              </div>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="toggle-colors" title="Color variants" description="Toggle with semantic color variants."
        code={`<div className="relative inline-flex h-6 w-11 rounded-full bg-emerald-600">...</div>  // Success
<div className="relative inline-flex h-6 w-11 rounded-full bg-amber-500">...</div>   // Warning
<div className="relative inline-flex h-6 w-11 rounded-full bg-rose-600">...</div>    // Error`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { bg: 'bg-brand-600',   label: 'Brand' },
            { bg: 'bg-emerald-600', label: 'Success' },
            { bg: 'bg-amber-500',   label: 'Warning' },
            { bg: 'bg-rose-600',    label: 'Error' },
            { bg: 'bg-slate-600',   label: 'Gray' },
          ].map(({ bg, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`relative inline-flex h-6 w-11 rounded-full ${bg}`}>
                <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow translate-x-5" />
              </div>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
