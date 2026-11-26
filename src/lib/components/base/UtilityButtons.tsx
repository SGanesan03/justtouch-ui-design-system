import { memo } from 'react';
import { Copy, Trash2, ExternalLink, Download, MoreHorizontal, X, Plus, Edit2, Share2 } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const UTILITY_BUTTONS_VARIANTS: OnThisPageItem[] = [
  { id: 'ub-icon-only',  label: 'Icon only' },
  { id: 'ub-close',      label: 'Close buttons' },
  { id: 'ub-copy',       label: 'Copy button' },
  { id: 'ub-add',        label: 'Add / create' },
  { id: 'ub-more',       label: 'More actions' },
  { id: 'ub-sizes',      label: 'Sizes' },
];

export const UtilityButtons = memo(function UtilityButtons() {
  return (
    <>
      <PreviewWrapper id="ub-icon-only" title="Icon only" description="Square icon-only utility buttons for toolbars."
        code={`<button aria-label="Copy" className="p-2 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition">
  <Copy className="w-4 h-4" />
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { Icon: Copy,         label: 'Copy',     cls: 'hover:text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800' },
            { Icon: Download,     label: 'Download', cls: 'hover:text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800' },
            { Icon: ExternalLink, label: 'Open',     cls: 'hover:text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800' },
            { Icon: Edit2,        label: 'Edit',     cls: 'hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/30' },
            { Icon: Share2,       label: 'Share',    cls: 'hover:text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800' },
            { Icon: Trash2,       label: 'Delete',   cls: 'hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30' },
          ].map(({ Icon, label, cls }) => (
            <button key={label} aria-label={label} title={label} className={`p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 transition ${cls}`}>
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ub-close" title="Close buttons" description="Close / dismiss button variants."
        code={`<button aria-label="Close" className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition">
  <X className="w-4 h-4" />
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-6">
          <button aria-label="Close" className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"><X className="w-4 h-4" /></button>
          <button aria-label="Close" className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition"><X className="w-4 h-4" /></button>
          <button aria-label="Close" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition"><X className="w-4 h-4" /></button>
          <button aria-label="Close" className="p-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition"><X className="w-4 h-4" /></button>
          <button aria-label="Close" className="p-1.5 rounded-full bg-rose-100 dark:bg-rose-950/50 text-rose-600 hover:bg-rose-200 dark:hover:bg-rose-950 transition"><X className="w-4 h-4" /></button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ub-copy" title="Copy button" description="Copy-to-clipboard button with feedback state."
        code={`<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50 transition">
  <Copy className="w-3.5 h-3.5" />Copy
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
            <Copy className="w-3.5 h-3.5" />Copy
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition">
            <Copy className="w-3.5 h-3.5" />Copy code
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-none stroke-current stroke-2"><path d="M2 6l3 3 5-5" /></svg>Copied!
          </button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ub-add" title="Add / create" description="Add and create action buttons."
        code={`<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-slate-300 text-sm text-slate-500 hover:border-brand-400 hover:text-brand-600 transition">
  <Plus className="w-4 h-4" />Add item
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-600 text-sm text-slate-500 dark:text-slate-400 hover:border-brand-400 hover:text-brand-600 transition"><Plus className="w-4 h-4" />Add item</button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-sm font-medium hover:bg-brand-100 transition"><Plus className="w-4 h-4" />New</button>
          <button className="p-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition shadow-sm"><Plus className="w-4 h-4" /></button>
          <button className="p-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition shadow-sm"><Plus className="w-4 h-4" /></button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ub-more" title="More actions" description="Overflow / more actions trigger button."
        code={`<button aria-label="More options" className="p-2 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition">
  <MoreHorizontal className="w-4 h-4" />
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          <button aria-label="More options" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"><MoreHorizontal className="w-4 h-4" /></button>
          <button aria-label="More options" className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"><MoreHorizontal className="w-4 h-4" /></button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"><MoreHorizontal className="w-4 h-4" />More</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ub-sizes" title="Sizes" description="Utility button size scale."
        code={`<button className="p-1.5 rounded-md border border-slate-200 text-slate-500"><Copy className="w-3 h-3" /></button>  // SM
<button className="p-2 rounded-lg border border-slate-200 text-slate-500"><Copy className="w-4 h-4" /></button>    // MD
<button className="p-2.5 rounded-lg border border-slate-200 text-slate-500"><Copy className="w-5 h-5" /></button>  // LG`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-4">
          {[
            { p: 'p-1.5', r: 'rounded-md', icon: 'w-3 h-3', label: 'SM' },
            { p: 'p-2',   r: 'rounded-lg', icon: 'w-4 h-4', label: 'MD' },
            { p: 'p-2.5', r: 'rounded-lg', icon: 'w-5 h-5', label: 'LG' },
            { p: 'p-3',   r: 'rounded-xl', icon: 'w-6 h-6', label: 'XL' },
          ].map(({ p, r, icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <button className={`${p} ${r} border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition`}>
                <Copy className={icon} />
              </button>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
