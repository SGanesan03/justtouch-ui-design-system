import { memo } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const RADIO_GROUPS_VARIANTS: OnThisPageItem[] = [
  { id: 'rg-simple',    label: 'Simple list' },
  { id: 'rg-card',      label: 'Card layout' },
  { id: 'rg-bordered',  label: 'Bordered list' },
  { id: 'rg-with-desc', label: 'With description' },
  { id: 'rg-horizontal',label: 'Horizontal' },
];

const PLANS = [
  { value: 'starter',      label: 'Starter',      desc: '$9/mo · Up to 5 users',    price: '$9' },
  { value: 'professional', label: 'Professional',  desc: '$29/mo · Up to 25 users',  price: '$29' },
  { value: 'enterprise',   label: 'Enterprise',    desc: '$99/mo · Unlimited users', price: '$99' },
];

export const RadioGroups = memo(function RadioGroups() {
  return (
    <>
      <PreviewWrapper id="rg-simple" title="Simple list" description="Vertical list of radio options with labels."
        code={`<fieldset className="space-y-2.5">
  {options.map(({ value, label }, i) => (
    <label key={value} className="flex items-center gap-3 cursor-pointer">
      <input type="radio" name="plan" defaultChecked={i === 0} className="w-4 h-4 text-brand-600" />
      <span className="text-sm font-medium">{label}</span>
    </label>
  ))}
</fieldset>`}>
        <div className="p-10 max-w-xs mx-auto">
          <fieldset>
            <legend className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Select a plan</legend>
            <div className="space-y-2.5">
              {PLANS.map(({ value, label }, i) => (
                <label key={value} className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="rg-simple" defaultChecked={i === 0} className="w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rg-card" title="Card layout" description="Radio options displayed as selectable cards."
        code={`<label className="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition">
  <input type="radio" name="plan" className="mt-0.5 w-4 h-4 text-brand-600" />
  <div className="flex-1">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm font-semibold text-brand-600">{price}</span>
    </div>
    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
  </div>
</label>`}>
        <div className="p-10 max-w-xs mx-auto">
          <fieldset>
            <legend className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Select a plan</legend>
            <div className="space-y-2.5">
              {PLANS.map(({ value, label, desc, price }, i) => (
                <label key={value} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${i === 1 ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30' : 'border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-700'}`}>
                  <input type="radio" name="rg-card" defaultChecked={i === 1} className="mt-0.5 w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{label}</span>
                      <span className="text-sm font-semibold text-brand-600">{price}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rg-bordered" title="Bordered list" description="Radio options in a bordered divided list."
        code={`<div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
  {options.map(({ value, label }) => (
    <label key={value} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50">
      <input type="radio" name="plan" className="w-4 h-4 text-brand-600" />
      <span className="text-sm font-medium">{label}</span>
    </label>
  ))}
</div>`}>
        <div className="p-10 max-w-xs mx-auto">
          <div className="divide-y divide-slate-100 dark:divide-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            {PLANS.map(({ value, label, desc }, i) => (
              <label key={value} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                <input type="radio" name="rg-bordered" defaultChecked={i === 0} className="w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rg-with-desc" title="With description" description="Radio group with title, description, and helper text."
        code={`<fieldset>
  <legend className="text-base font-semibold">Notifications</legend>
  <p className="text-sm text-slate-500">How should we notify you?</p>
  {options.map(({ value, label, desc }) => (
    <label key={value} className="flex items-start gap-3 mt-4 cursor-pointer">
      <input type="radio" name="notify" className="mt-0.5 w-4 h-4 text-brand-600" />
      <div><p className="text-sm font-medium">{label}</p><p className="text-xs text-slate-500">{desc}</p></div>
    </label>
  ))}
</fieldset>`}>
        <div className="p-10 max-w-xs mx-auto">
          <fieldset>
            <legend className="text-base font-semibold text-slate-900 dark:text-white">Notifications</legend>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">How should we notify you?</p>
            <div className="mt-4 space-y-4">
              {[
                { value: 'email', label: 'Email',        desc: 'Get notified via email for all activity.' },
                { value: 'push',  label: 'Push',         desc: 'Receive push notifications on your device.' },
                { value: 'none',  label: 'No notifications', desc: 'Opt out of all notifications.' },
              ].map(({ value, label, desc }, i) => (
                <label key={value} className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="rg-desc" defaultChecked={i === 0} className="mt-0.5 w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="rg-horizontal" title="Horizontal" description="Radio group laid out horizontally."
        code={`<div className="flex gap-6">
  {options.map(({ value, label }, i) => (
    <label key={value} className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name="plan" defaultChecked={i === 0} className="w-4 h-4 text-brand-600" />
      <span className="text-sm font-medium">{label}</span>
    </label>
  ))}
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="flex flex-wrap gap-6">
            {PLANS.map(({ value, label }, i) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="rg-horizontal" defaultChecked={i === 0} className="w-4 h-4 text-brand-600 border-slate-300 dark:border-slate-600 focus:ring-brand-500 bg-white dark:bg-slate-800" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
