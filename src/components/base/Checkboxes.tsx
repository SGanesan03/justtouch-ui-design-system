import { memo, useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const CHECKBOXES_VARIANTS: OnThisPageItem[] = [
  { id: 'checkbox-default',     label: 'Default' },
  { id: 'checkbox-checked',     label: 'Checked' },
  { id: 'checkbox-indeterminate',label:'Indeterminate' },
  { id: 'checkbox-disabled',    label: 'Disabled' },
  { id: 'checkbox-with-desc',   label: 'With description' },
  { id: 'checkbox-group',       label: 'Checkbox group' },
  { id: 'checkbox-error',       label: 'Error state' },
];

const ITEMS = ['Comments', 'Candidates', 'Offers', 'New features', 'Security updates'];

export const Checkboxes = memo(function Checkboxes() {
  const [checked, setChecked] = useState<Record<string, boolean>>({ Comments: true, 'New features': true });
  const toggle = (k: string) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <>
      <PreviewWrapper id="checkbox-default" title="Default" description="Unchecked checkbox in its resting state."
        code={`<input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />`}>
        <div className="p-10 flex items-center justify-center gap-6">
          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
          <input type="checkbox" className="w-5 h-5 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
          <input type="checkbox" className="w-6 h-6 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="checkbox-checked" title="Checked" description="Checkbox in the checked/selected state."
        code={`<input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />`}>
        <div className="p-10 flex items-center justify-center gap-6">
          <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
          <input type="checkbox" defaultChecked className="w-6 h-6 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="checkbox-indeterminate" title="Indeterminate" description="Partial selection state for parent checkboxes."
        code={`// Set via ref: checkboxRef.current.indeterminate = true`}>
        <div className="p-10 flex items-center justify-center gap-4">
          <div className="w-4 h-4 rounded border-2 border-brand-600 bg-brand-600 flex items-center justify-center">
            <span className="w-2 h-0.5 bg-white rounded-full" />
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-300">3 of 5 selected</span>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="checkbox-disabled" title="Disabled" description="Checkbox in disabled unchecked and checked states."
        code={`<input type="checkbox" disabled className="w-4 h-4 rounded border-slate-200 text-slate-300 cursor-not-allowed" />`}>
        <div className="p-10 flex items-center justify-center gap-6">
          <input type="checkbox" disabled className="w-4 h-4 rounded border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-50" />
          <input type="checkbox" disabled defaultChecked className="w-4 h-4 rounded border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed opacity-50" />
          <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
            <input type="checkbox" disabled className="w-4 h-4 rounded border-slate-200 dark:border-slate-700" />
            <span className="text-sm text-slate-400">Disabled option</span>
          </label>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="checkbox-with-desc" title="With description" description="Checkbox with a supporting description line."
        code={`<label className="flex items-start gap-3 cursor-pointer">
  <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-600" />
  <div>
    <p className="text-sm font-medium">Enable strict TypeScript</p>
    <p className="text-xs text-slate-500">Validate component prop contracts on build</p>
  </div>
</label>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {[
            { label: 'Enable strict TypeScript', desc: 'Validate component prop contracts on build', checked: true },
            { label: 'Automatic dark mode sync', desc: 'Match system OS appearance preference', checked: false },
            { label: 'Weekly digest emails', desc: 'Summary of activity sent every Monday', checked: true },
          ].map(({ label, desc, checked: c }) => (
            <label key={label} className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" defaultChecked={c} className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            </label>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="checkbox-group" title="Checkbox group" description="Multiple checkboxes grouped under a shared label."
        code={`<fieldset>
  <legend className="text-sm font-semibold mb-3">Notifications</legend>
  {items.map((item) => (
    <label key={item} className="flex items-center gap-3 py-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-600" />
      <span className="text-sm">{item}</span>
    </label>
  ))}
</fieldset>`}>
        <div className="p-10 max-w-sm mx-auto">
          <fieldset>
            <legend className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Notification preferences</legend>
            <div className="space-y-2.5">
              {ITEMS.map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" checked={!!checked[item]} onChange={() => toggle(item)}
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition">{item}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="checkbox-error" title="Error state" description="Checkbox with validation error message."
        code={`<label className="flex items-center gap-3">
  <input type="checkbox" className="w-4 h-4 rounded border-rose-400 text-rose-600 focus:ring-rose-500" />
  <span className="text-sm">I agree to the terms</span>
</label>
<p className="mt-1 ml-7 text-xs text-rose-600">You must accept the terms to continue.</p>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-rose-400 text-rose-600 focus:ring-rose-500 bg-white dark:bg-slate-800" />
              <span className="text-sm text-slate-700 dark:text-slate-300">I agree to the terms and conditions</span>
            </label>
            <p className="mt-1.5 ml-7 text-xs text-rose-600">You must accept the terms to continue.</p>
          </div>
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-rose-400 text-rose-600 focus:ring-rose-500 bg-white dark:bg-slate-800" />
              <span className="text-sm text-slate-700 dark:text-slate-300">Subscribe to marketing emails</span>
            </label>
            <p className="mt-1.5 ml-7 text-xs text-rose-600">This field is required.</p>
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
