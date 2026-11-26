import { memo } from 'react';
import { X } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const BADGES_VARIANTS: OnThisPageItem[] = [
  { id: 'badge-gray',           label: 'Gray' },
  { id: 'badge-brand',          label: 'Brand' },
  { id: 'badge-error',          label: 'Error' },
  { id: 'badge-warning',        label: 'Warning' },
  { id: 'badge-success',        label: 'Success' },
  { id: 'badge-with-dot',       label: 'With dot indicator' },
  { id: 'badge-with-icon',      label: 'With icon' },
  { id: 'badge-removable',      label: 'Removable' },
  { id: 'badge-outline',        label: 'Outline' },
  { id: 'badge-square',         label: 'Square / rounded' },
  { id: 'badge-sizes',          label: 'Sizes' },
];

const COLORS = [
  { id: 'badge-gray',    label: 'Gray',    pill: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',                dot: 'bg-slate-500',   border: 'border-slate-200 dark:border-slate-700',   items: ['Neutral', 'Default', 'Draft', 'Archived'] },
  { id: 'badge-brand',   label: 'Brand',   pill: 'bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300',             dot: 'bg-brand-500',   border: 'border-brand-200 dark:border-brand-800',   items: ['New', 'Pro', 'Beta', 'v4.0'] },
  { id: 'badge-error',   label: 'Error',   pill: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',                 dot: 'bg-rose-500',    border: 'border-rose-200 dark:border-rose-800',     items: ['Failed', 'Error', 'Rejected', 'Blocked'] },
  { id: 'badge-warning', label: 'Warning', pill: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',             dot: 'bg-amber-500',   border: 'border-amber-200 dark:border-amber-800',   items: ['Pending', 'Review', 'Warning', 'Paused'] },
  { id: 'badge-success', label: 'Success', pill: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',     dot: 'bg-emerald-500', border: 'border-emerald-200 dark:border-emerald-800', items: ['Active', 'Live', 'Published', 'Verified'] },
];

export const Badges = memo(function Badges() {
  return (
    <>
      {/* Color variants */}
      {COLORS.map(({ id, label, pill, items }) => (
        <PreviewWrapper
          key={id}
          id={id}
          title={label}
          description={`${label} color badge — pill and square variants.`}
          code={`<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${pill}">${items[0]}</span>`}
        >
          <div className="p-10 flex flex-wrap items-center justify-center gap-3">
            {items.map((item) => (
              <span key={item} className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${pill}`}>{item}</span>
            ))}
            {items.map((item) => (
              <span key={`sq-${item}`} className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${pill}`}>{item}</span>
            ))}
          </div>
        </PreviewWrapper>
      ))}

      {/* With dot */}
      <PreviewWrapper
        id="badge-with-dot"
        title="With dot indicator"
        description="Badges with a leading status dot across all color variants."
        code={`<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Active
</span>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {COLORS.map(({ label, pill, dot }) => (
            <span key={label} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${pill}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />{label}
            </span>
          ))}
        </div>
      </PreviewWrapper>

      {/* With icon */}
      <PreviewWrapper
        id="badge-with-icon"
        title="With icon"
        description="Badges with a leading SVG icon for semantic context."
        code={`<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
  <svg className="w-3 h-3" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
  Verified
</span>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {COLORS.map(({ label, pill }) => (
            <span key={label} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${pill}`}>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {label}
            </span>
          ))}
        </div>
      </PreviewWrapper>

      {/* Removable */}
      <PreviewWrapper
        id="badge-removable"
        title="Removable"
        description="Badges with a trailing dismiss button."
        code={`<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700">
  New feature <button><X className="w-3 h-3" /></button>
</span>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {COLORS.map(({ label, pill }) => (
            <span key={label} className={`inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full text-xs font-medium ${pill}`}>
              {label}
              <button className="ml-0.5 hover:opacity-70 transition"><X className="w-3 h-3" /></button>
            </span>
          ))}
        </div>
      </PreviewWrapper>

      {/* Outline */}
      <PreviewWrapper
        id="badge-outline"
        title="Outline"
        description="Badges with a visible border and transparent background."
        code={`<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-brand-300 text-brand-700">Brand</span>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {COLORS.map(({ label, pill: _pill, border, dot }) => (
            <span key={label} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-transparent ${border} ${_pill.split(' ').filter(c => c.startsWith('text-')).join(' ')}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />{label}
            </span>
          ))}
        </div>
      </PreviewWrapper>

      {/* Square */}
      <PreviewWrapper
        id="badge-square"
        title="Square / rounded"
        description="Square-cornered badge variant for tabular and list contexts."
        code={`<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand-50 text-brand-700">Brand</span>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {COLORS.map(({ label, pill }) => (
            <span key={label} className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${pill}`}>{label}</span>
          ))}
        </div>
      </PreviewWrapper>

      {/* Sizes */}
      <PreviewWrapper
        id="badge-sizes"
        title="Sizes"
        description="Badge size scale from XS to LG."
        code={`<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-50 text-brand-700">XS</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700">SM</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700">MD</span>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">XS badge</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">SM badge</span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">MD badge</span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">LG badge</span>
        </div>
      </PreviewWrapper>
    </>
  );
});
