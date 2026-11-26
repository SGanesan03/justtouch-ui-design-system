import { memo } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const TEXTAREA_VARIANTS: OnThisPageItem[] = [
  { id: 'ta-default',    label: 'Default' },
  { id: 'ta-char-count', label: 'With character count' },
  { id: 'ta-success',    label: 'Success state' },
  { id: 'ta-error',      label: 'Error state' },
  { id: 'ta-disabled',   label: 'Disabled' },
  { id: 'ta-sizes',      label: 'Sizes' },
];

const BASE = 'w-full px-3 py-2 rounded-lg border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:border-transparent transition';

export const Textarea = memo(function Textarea() {
  return (
    <>
      <PreviewWrapper id="ta-default" title="Default" description="Standard multi-line text input."
        code={`<textarea rows={4} placeholder="Write a message…" className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-500" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {['Message', 'Description', 'Notes'].map((label) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
              <textarea rows={3} placeholder={`Write your ${label.toLowerCase()}…`} className={`${BASE} border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ta-char-count" title="With character count" description="Textarea with a live character count indicator."
        code={`<div className="flex justify-between mb-1.5">
  <label className="text-sm font-medium">Bio</label>
  <span className="text-xs text-slate-400">0 / 160</span>
</div>
<textarea rows={4} maxLength={160} className="..." />`}>
        <div className="p-10 max-w-sm mx-auto">
          <div className="flex justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Bio</label>
            <span className="text-xs text-slate-400">0 / 160</span>
          </div>
          <textarea rows={4} maxLength={160} placeholder="Tell us about yourself…" className={`${BASE} border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
          <p className="mt-1 text-xs text-slate-400">Max 160 characters</p>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ta-success" title="Success state" description="Textarea with a success validation message."
        code={`<textarea className="w-full px-3 py-2 rounded-lg border border-emerald-400 text-sm resize-none focus:ring-2 focus:ring-emerald-500" />
<p className="mt-1 text-xs text-emerald-600">✓ Looks good!</p>`}>
        <div className="p-10 max-w-sm mx-auto">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Feedback</label>
          <textarea rows={4} defaultValue="This is a great product!" className={`${BASE} border-emerald-400 focus:ring-emerald-500`} />
          <p className="mt-1 text-xs text-emerald-600">✓ Looks good!</p>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ta-error" title="Error state" description="Textarea with a validation error message."
        code={`<textarea className="w-full px-3 py-2 rounded-lg border border-rose-400 text-sm resize-none focus:ring-2 focus:ring-rose-500" />
<p className="mt-1 text-xs text-rose-600">This field is required.</p>`}>
        <div className="p-10 max-w-sm mx-auto">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Feedback</label>
          <textarea rows={4} className={`${BASE} border-rose-400 focus:ring-rose-500`} />
          <p className="mt-1 text-xs text-rose-600">This field is required.</p>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ta-disabled" title="Disabled" description="Textarea in a non-interactive disabled state."
        code={`<textarea disabled defaultValue="Read-only content." className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 resize-none cursor-not-allowed text-sm" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Notes (read-only)</label>
            <textarea rows={3} disabled defaultValue="This field is disabled and cannot be edited." className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-400 resize-none cursor-not-allowed" />
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ta-sizes" title="Sizes" description="Textarea row size variants."
        code={`<textarea rows={2} className="..." />  // SM (2 rows)
<textarea rows={4} className="..." />  // MD (4 rows)
<textarea rows={8} className="..." />  // LG (8 rows)`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          {[
            { rows: 2, label: 'SM (2 rows)' },
            { rows: 4, label: 'MD (4 rows)' },
            { rows: 6, label: 'LG (6 rows)' },
          ].map(({ rows, label }) => (
            <div key={label}>
              <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
              <textarea rows={rows} placeholder="Write something…" className={`${BASE} border-slate-300 dark:border-slate-600 focus:ring-brand-500`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
