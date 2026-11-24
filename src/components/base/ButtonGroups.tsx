import { memo } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const BUTTON_GROUPS_VARIANTS: OnThisPageItem[] = [
  { id: 'btn-group-default',    label: 'Default' },
  { id: 'btn-group-selected',   label: 'With selected state' },
  { id: 'btn-group-icon',       label: 'Icon only' },
  { id: 'btn-group-icon-text',  label: 'Icon with text' },
  { id: 'btn-group-vertical',   label: 'Vertical' },
  { id: 'btn-group-sizes',      label: 'Sizes' },
];

export const ButtonGroups = memo(function ButtonGroups() {
  return (
    <>
      <PreviewWrapper id="btn-group-default" title="Default" description="Basic joined button group with equal-weight actions."
        code={`<div className="inline-flex rounded-lg border border-slate-200 overflow-hidden divide-x divide-slate-200">
  {['Left', 'Center', 'Right'].map((l) => (
    <button key={l} className="px-4 py-2 text-sm font-medium bg-white hover:bg-slate-50 text-slate-700">{l}</button>
  ))}
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-x divide-slate-200 dark:divide-slate-700 shadow-xs">
            {['Left', 'Center', 'Right'].map((l) => (
              <button key={l} className="px-4 py-2 text-sm font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">{l}</button>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-group-selected" title="With selected state" description="Segmented control with an active highlighted segment."
        code={`<div className="inline-flex rounded-lg border border-slate-200 overflow-hidden divide-x divide-slate-200">
  <button className="px-4 py-2 text-sm font-medium bg-brand-600 text-white">Monthly</button>
  <button className="px-4 py-2 text-sm font-medium bg-white text-slate-700 hover:bg-slate-50">Quarterly</button>
  <button className="px-4 py-2 text-sm font-medium bg-white text-slate-700 hover:bg-slate-50">Annually</button>
</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-6">
          {[0, 1, 2].map((active) => (
            <div key={active} className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-x divide-slate-200 dark:divide-slate-700 shadow-xs">
              {['Monthly', 'Quarterly', 'Annually'].map((l, i) => (
                <button key={l} className={`px-4 py-2 text-sm font-medium transition ${i === active ? 'bg-brand-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{l}</button>
              ))}
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-group-icon" title="Icon only" description="Compact icon-only button group for toolbar actions."
        code={`<div className="inline-flex rounded-lg border border-slate-200 overflow-hidden divide-x divide-slate-200">
  <button className="p-2 bg-white hover:bg-slate-50"><AlignLeft className="w-4 h-4" /></button>
  <button className="p-2 bg-white hover:bg-slate-50"><AlignCenter className="w-4 h-4" /></button>
  <button className="p-2 bg-white hover:bg-slate-50"><AlignRight className="w-4 h-4" /></button>
</div>`}>
        <div className="p-10 flex items-center justify-center gap-4">
          {[
            ['←', '↔', '→'],
            ['B', 'I', 'U'],
            ['⊞', '☰', '⊟'],
          ].map((icons, gi) => (
            <div key={gi} className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-x divide-slate-200 dark:divide-slate-700 shadow-xs">
              {icons.map((icon, i) => (
                <button key={i} className="p-2.5 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium transition">{icon}</button>
              ))}
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-group-icon-text" title="Icon with text" description="Button group combining icons and labels."
        code={`<div className="inline-flex rounded-lg border border-slate-200 overflow-hidden divide-x divide-slate-200">
  <button className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-white hover:bg-slate-50">
    ✏️ Edit
  </button>
</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-x divide-slate-200 dark:divide-slate-700 shadow-xs">
            {[['✏️', 'Edit'], ['⧉', 'Duplicate'], ['🗑', 'Delete']].map(([icon, label], i) => (
              <button key={label} className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition ${i === 2 ? 'text-rose-600' : 'text-slate-700 dark:text-slate-200'}`}>
                <span>{icon}</span>{label}
              </button>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-group-vertical" title="Vertical" description="Vertically stacked button group."
        code={`<div className="inline-flex flex-col rounded-lg border border-slate-200 overflow-hidden divide-y divide-slate-200">
  {['Top', 'Middle', 'Bottom'].map((l) => (
    <button key={l} className="px-4 py-2 text-sm font-medium bg-white hover:bg-slate-50 text-slate-700">{l}</button>
  ))}
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="inline-flex flex-col rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-y divide-slate-200 dark:divide-slate-700 shadow-xs">
            {['Top', 'Middle', 'Bottom'].map((l) => (
              <button key={l} className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">{l}</button>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="btn-group-sizes" title="Sizes" description="Button group size scale from SM to LG."
        code={`<div className="inline-flex rounded-md border border-slate-200 overflow-hidden divide-x divide-slate-200">
  {['A', 'B', 'C'].map((l) => <button key={l} className="px-2.5 py-1 text-xs font-medium bg-white">{l}</button>)}
</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-6">
          {[
            { size: 'SM', px: 'px-2.5 py-1', text: 'text-xs' },
            { size: 'MD', px: 'px-4 py-2',   text: 'text-sm' },
            { size: 'LG', px: 'px-5 py-2.5', text: 'text-base' },
          ].map(({ size, px, text }) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden divide-x divide-slate-200 dark:divide-slate-700 shadow-xs">
                {['Left', 'Center', 'Right'].map((l) => (
                  <button key={l} className={`${px} ${text} font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition`}>{l}</button>
                ))}
              </div>
              <span className="text-xs text-slate-400">{size}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
