import { memo, useState } from 'react';
import { Plus, Download, Trash2, ArrowRight, Loader2, Mail, ChevronRight } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const BUTTONS_VARIANTS: OnThisPageItem[] = [
  { id: 'btn-primary',       label: 'Primary' },
  { id: 'btn-secondary-gray',label: 'Secondary gray' },
  { id: 'btn-secondary-color',label:'Secondary color' },
  { id: 'btn-tertiary',      label: 'Tertiary' },
  { id: 'btn-destructive',   label: 'Destructive' },
  { id: 'btn-link',          label: 'Link' },
  { id: 'btn-with-icon',     label: 'With leading icon' },
  { id: 'btn-trailing-icon', label: 'With trailing icon' },
  { id: 'btn-icon-only',     label: 'Icon only' },
  { id: 'btn-loading',       label: 'Loading state' },
  { id: 'btn-disabled',      label: 'Disabled' },
  { id: 'btn-sizes',         label: 'Sizes' },
  { id: 'btn-full-width',    label: 'Full width' },
];

const SIZES = [
  { label: 'XS', px: 'px-2.5 py-1',   text: 'text-xs',  rounded: 'rounded-md' },
  { label: 'SM', px: 'px-3 py-1.5',   text: 'text-sm',  rounded: 'rounded-md' },
  { label: 'MD', px: 'px-4 py-2',     text: 'text-sm',  rounded: 'rounded-lg' },
  { label: 'LG', px: 'px-5 py-2.5',   text: 'text-base',rounded: 'rounded-lg' },
  { label: 'XL', px: 'px-6 py-3',     text: 'text-base',rounded: 'rounded-xl' },
  { label: '2XL',px: 'px-8 py-4',     text: 'text-lg',  rounded: 'rounded-xl' },
];

export const Buttons = memo(function Buttons() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <PreviewWrapper id="btn-primary" title="Primary" description="High-emphasis action button for the most important CTA on a page."
        code={`<button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">Get started</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs">Get started</button>
          <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs">Save changes</button>
          <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs">Publish</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-secondary-gray" title="Secondary gray" description="Medium-emphasis button with a neutral border for secondary actions."
        code={`<button className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition">Cancel</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">Cancel</button>
          <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">Learn more</button>
          <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">View details</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-secondary-color" title="Secondary color" description="Brand-tinted secondary button for paired CTAs."
        code={`<button className="px-4 py-2 rounded-lg bg-brand-50 text-brand-700 text-sm font-semibold hover:bg-brand-100 transition">Learn more</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-sm font-semibold hover:bg-brand-100 dark:hover:bg-brand-950 transition">Learn more</button>
          <button className="px-4 py-2 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-sm font-semibold hover:bg-brand-100 dark:hover:bg-brand-950 transition">View docs</button>
          <button className="px-4 py-2 rounded-lg bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-sm font-semibold hover:bg-brand-100 dark:hover:bg-brand-950 transition">Explore</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-tertiary" title="Tertiary" description="Low-emphasis ghost button for supplementary actions."
        code={`<button className="px-4 py-2 rounded-lg text-slate-600 text-sm font-semibold hover:bg-slate-100 transition">Skip</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Skip</button>
          <button className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Maybe later</button>
          <button className="px-4 py-2 rounded-lg text-brand-600 dark:text-brand-400 text-sm font-semibold hover:bg-brand-50 dark:hover:bg-brand-950/30 transition">View all</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-destructive" title="Destructive" description="High-emphasis danger button for irreversible actions."
        code={`<button className="px-4 py-2 rounded-lg bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition">Delete account</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition shadow-xs">Delete account</button>
          <button className="px-4 py-2 rounded-lg border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 text-sm font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/30 transition shadow-xs">Remove member</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition shadow-xs">
            <Trash2 className="w-4 h-4" />Delete
          </button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-link" title="Link" description="Inline text link button styled as an anchor."
        code={`<button className="text-sm font-semibold text-brand-600 hover:underline">Learn more →</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-6">
          <button className="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline">Learn more</button>
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline">View all <ArrowRight className="w-3.5 h-3.5" /></button>
          <button className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:underline">Documentation</button>
          <button className="text-sm font-semibold text-rose-600 hover:underline">Delete</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-with-icon" title="With leading icon" description="Button with a leading icon for contextual clarity."
        code={`<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">
  <Plus className="w-4 h-4" />Create project
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs"><Plus className="w-4 h-4" />Create project</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs"><Download className="w-4 h-4" />Export CSV</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs"><Mail className="w-4 h-4" />Send invite</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-trailing-icon" title="With trailing icon" description="Button with a trailing icon for navigation or expansion."
        code={`<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">
  Get started <ArrowRight className="w-4 h-4" />
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs">Get started <ArrowRight className="w-4 h-4" /></button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">View docs <ChevronRight className="w-4 h-4" /></button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-icon-only" title="Icon only" description="Square icon-only button for compact toolbars."
        code={`<button className="p-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition"><Plus className="w-4 h-4" /></button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button className="p-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition shadow-xs"><Plus className="w-4 h-4" /></button>
          <button className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs"><Download className="w-4 h-4" /></button>
          <button className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition shadow-xs"><Trash2 className="w-4 h-4" /></button>
          <button className="p-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition shadow-xs"><Plus className="w-4 h-4" /></button>
          <button className="p-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs"><Mail className="w-4 h-4" /></button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-loading" title="Loading state" description="Button with spinner for async operations."
        code={`<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold">
  <Loader2 className="w-4 h-4 animate-spin" />Saving…
</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Saving…</> : 'Click to test'}
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold opacity-80 cursor-not-allowed shadow-xs">
            <Loader2 className="w-4 h-4 animate-spin" />Deploying…
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold opacity-80 cursor-not-allowed shadow-xs">
            <Loader2 className="w-4 h-4 animate-spin" />Loading…
          </button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-disabled" title="Disabled" description="Disabled state for all button variants."
        code={`<button disabled className="px-4 py-2 rounded-lg bg-slate-100 text-slate-400 text-sm font-semibold cursor-not-allowed">Disabled</button>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          <button disabled className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-sm font-semibold cursor-not-allowed">Primary</button>
          <button disabled className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-300 dark:text-slate-600 text-sm font-semibold cursor-not-allowed">Secondary</button>
          <button disabled className="px-4 py-2 rounded-lg bg-rose-100 dark:bg-rose-950/30 text-rose-300 dark:text-rose-800 text-sm font-semibold cursor-not-allowed">Destructive</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-sizes" title="Sizes" description="Button size scale from XS to 2XL."
        code={`<button className="px-2.5 py-1 rounded-md bg-brand-600 text-white text-xs font-semibold">XS</button>`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-3">
          {SIZES.map(({ label, px, text, rounded }) => (
            <button key={label} className={`${px} ${text} ${rounded} bg-brand-600 text-white font-semibold hover:bg-brand-700 transition shadow-xs`}>{label}</button>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-full-width" title="Full width" description="Full-width block button for forms and mobile layouts."
        code={`<button className="w-full px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">Continue</button>`}>
        <div className="p-10 max-w-sm mx-auto space-y-3">
          <button className="w-full px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition shadow-xs">Continue</button>
          <button className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">Cancel</button>
          <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition shadow-xs"><Trash2 className="w-4 h-4" />Delete account</button>
        </div>
      </PreviewWrapper>
    </>
  );
});
