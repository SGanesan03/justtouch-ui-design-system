import { memo } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const RADIO_BUTTONS_VARIANTS: OnThisPageItem[] = [
  { id: 'radio-default',      label: 'Default' },
  { id: 'radio-checked',      label: 'Checked' },
  { id: 'radio-with-desc',    label: 'With description' },
  { id: 'radio-disabled',     label: 'Disabled' },
  { id: 'radio-error',        label: 'Error state' },
  { id: 'radio-sizes',        label: 'Sizes' },
];

const PLANS = [
  { value: 'starter',      label: 'Starter',      desc: 'Up to 5 users' },
  { value: 'professional', label: 'Professional',  desc: 'Up to 25 users' },
  { value: 'enterprise',   label: 'Enterprise',    desc: 'Unlimited users' },
];

export const RadioButtons = memo(function RadioButtons() {
  return (
    <>
      <PreviewWrapper id="radio-default" title="Default" description="Unchecked radio button in its resting state."
        code={`<label className="flex items-center gap-3 cursor-pointer">
  <input type="radio" name="plan" className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500" />
  <span className="text-sm font-medium text-slate-700">Starter</span>
</label>`}>
        <div className="p-10 max-w-xs mx-auto space-y-3">
          {PLANS.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="radio-default" className="w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
            </label>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="radio-checked" title="Checked" description="Radio button in the selected state."
        code={`<input type="radio" defaultChecked className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500" />`}>
        <div className="p-10 max-w-xs mx-auto space-y-3">
          {PLANS.map(({ value, label }, i) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="radio-checked" defaultChecked={i === 1} className="w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
            </label>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="radio-with-desc" title="With description" description="Radio button with a supporting description line."
        code={`<label className="flex items-start gap-3 cursor-pointer">
  <input type="radio" name="plan" className="mt-0.5 w-4 h-4 text-brand-600 border-slate-300" />
  <div>
    <p className="text-sm font-medium">Starter</p>
    <p className="text-xs text-slate-500">Up to 5 users</p>
  </div>
</label>`}>
        <div className="p-10 max-w-xs mx-auto space-y-4">
          {PLANS.map(({ value, label, desc }, i) => (
            <label key={value} className="flex items-start gap-3 cursor-pointer">
              <input type="radio" name="radio-desc" defaultChecked={i === 0} className="mt-0.5 w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            </label>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="radio-disabled" title="Disabled" description="Radio button in disabled unchecked and checked states."
        code={`<input type="radio" disabled className="w-4 h-4 border-slate-200 cursor-not-allowed opacity-50" />`}>
        <div className="p-10 max-w-xs mx-auto space-y-3">
          <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
            <input type="radio" disabled className="w-4 h-4 border-slate-200 dark:border-slate-700" />
            <span className="text-sm text-slate-400">Disabled unchecked</span>
          </label>
          <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
            <input type="radio" disabled defaultChecked className="w-4 h-4 text-slate-400 border-slate-200 dark:border-slate-700" />
            <span className="text-sm text-slate-400">Disabled checked</span>
          </label>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="radio-error" title="Error state" description="Radio button with a validation error message."
        code={`<label className="flex items-center gap-3">
  <input type="radio" className="w-4 h-4 text-rose-600 border-rose-400 focus:ring-rose-500" />
  <span className="text-sm">Required selection</span>
</label>
<p className="mt-1 ml-7 text-xs text-rose-600">Please select an option.</p>`}>
        <div className="p-10 max-w-xs mx-auto space-y-3">
          {PLANS.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="radio-error" className="w-4 h-4 text-rose-600 border-rose-400 focus:ring-rose-500 bg-white dark:bg-slate-800" />
              <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>
            </label>
          ))}
          <p className="text-xs text-rose-600">Please select a plan to continue.</p>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="radio-sizes" title="Sizes" description="Radio button size variants."
        code={`<input type="radio" className="w-3 h-3 text-brand-600" />  // SM
<input type="radio" className="w-4 h-4 text-brand-600" />  // MD
<input type="radio" className="w-5 h-5 text-brand-600" />  // LG`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { cls: 'w-3 h-3', label: 'SM' },
            { cls: 'w-4 h-4', label: 'MD' },
            { cls: 'w-5 h-5', label: 'LG' },
            { cls: 'w-6 h-6', label: 'XL' },
          ].map(({ cls, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <input type="radio" defaultChecked className={`${cls} text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800`} />
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
