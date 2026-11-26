import { memo } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const LOADING_INDICATORS_VARIANTS: OnThisPageItem[] = [
  { id: 'loading-spinner',    label: 'Spinner' },
  { id: 'loading-dots',       label: 'Dots' },
  { id: 'loading-bar',        label: 'Progress bar' },
  { id: 'loading-skeleton',   label: 'Skeleton' },
  { id: 'loading-overlay',    label: 'Full-page overlay' },
  { id: 'loading-sizes',      label: 'Sizes' },
];

export const LoadingIndicators = memo(function LoadingIndicators() {
  return (
    <>
      <PreviewWrapper id="loading-spinner" title="Spinner" description="Circular spinner for async loading states."
        code={`<div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-brand-600 animate-spin" />`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {['border-t-brand-600','border-t-emerald-600','border-t-amber-500','border-t-rose-600'].map((c) => (
            <div key={c} className={`w-8 h-8 rounded-full border-4 border-slate-200 dark:border-slate-700 ${c} animate-spin`} />
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="loading-dots" title="Dots" description="Animated bouncing dots for inline loading."
        code={`<div className="flex gap-1">{[0,1,2].map(i => <span key={i} className="w-2 h-2 rounded-full bg-brand-600 animate-bounce" style={{animationDelay: \`\${i*0.15}s\`}} />)}</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-10">
          {['bg-brand-600','bg-emerald-600','bg-slate-500'].map((c) => (
            <div key={c} className="flex gap-1.5">
              {[0,1,2].map((i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${c} animate-bounce`} style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="loading-bar" title="Progress bar" description="Horizontal progress bar with percentage label."
        code={`<div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full w-[68%] bg-brand-600 rounded-full" /></div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-5">
          {[
            { label: 'Uploading assets…',   pct: 78, color: 'bg-brand-600' },
            { label: 'Compiling bundle…',   pct: 45, color: 'bg-emerald-600' },
            { label: 'Running tests…',      pct: 92, color: 'bg-amber-500' },
          ].map(({ label, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-slate-700 dark:text-slate-300">{label}</span>
                <span className="text-slate-500">{pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="loading-skeleton" title="Skeleton" description="Placeholder skeleton for content loading states."
        code={`<div className="animate-pulse space-y-3"><div className="h-4 bg-slate-200 rounded w-3/4" /><div className="h-4 bg-slate-200 rounded w-1/2" /></div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-4">
          <div className="animate-pulse flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
            </div>
          </div>
          <div className="animate-pulse space-y-2.5">
            <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
            <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-4/6" />
          </div>
          <div className="animate-pulse h-32 bg-slate-200 dark:bg-slate-700 rounded-xl" />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="loading-overlay" title="Full-page overlay" description="Semi-transparent overlay with centered spinner for page-level loading."
        code={`<div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"><div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-brand-600 animate-spin" /></div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="relative w-full h-40 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-brand-600 animate-spin" />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Loading workspace…</p>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="loading-sizes" title="Sizes" description="Spinner size scale from XS to XL."
        code={`<div className="w-4 h-4 rounded-full border-2 border-slate-200 border-t-brand-600 animate-spin" />`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { cls: 'w-4 h-4 border-2',  label: 'XS' },
            { cls: 'w-6 h-6 border-2',  label: 'SM' },
            { cls: 'w-8 h-8 border-4',  label: 'MD' },
            { cls: 'w-12 h-12 border-4', label: 'LG' },
            { cls: 'w-16 h-16 border-4', label: 'XL' },
          ].map(({ cls, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`${cls} rounded-full border-slate-200 dark:border-slate-700 border-t-brand-600 animate-spin`} />
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
