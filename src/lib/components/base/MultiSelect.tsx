import { memo, useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const MULTI_SELECT_VARIANTS: OnThisPageItem[] = [
  { id: 'ms-default',   label: 'Default' },
  { id: 'ms-open',      label: 'Open state' },
  { id: 'ms-with-tags', label: 'With selected tags' },
  { id: 'ms-disabled',  label: 'Disabled' },
  { id: 'ms-error',     label: 'Error state' },
];

const ALL_OPTIONS = ['Design', 'Engineering', 'Marketing', 'Sales', 'Support', 'Finance', 'Legal', 'HR'];

function MultiSelectInput({ label, defaultSelected = [] }: { label: string; defaultSelected?: string[] }) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);
  const [open, setOpen] = useState(false);
  const toggle = (opt: string) => setSelected((p) => p.includes(opt) ? p.filter((o) => o !== opt) : [...p, opt]);
  return (
    <div className="w-72">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
      <div className="relative">
        <div onClick={() => setOpen((o) => !o)} className="flex flex-wrap gap-1.5 p-2 pr-8 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 min-h-[42px] cursor-pointer hover:border-slate-400 transition">
          {selected.length === 0 && <span className="text-sm text-slate-400 self-center px-1">Select teams…</span>}
          {selected.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-xs font-medium">
              {tag}<button onClick={(e) => { e.stopPropagation(); toggle(tag); }}><X className="w-3 h-3" /></button>
            </span>
          ))}
        </div>
        <ChevronDown className={`absolute right-2.5 top-3 w-4 h-4 text-slate-400 pointer-events-none transition-transform ${open ? 'rotate-180' : ''}`} />
        {open && (
          <ul className="absolute z-10 mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1 max-h-48 overflow-auto">
            {ALL_OPTIONS.map((opt) => (
              <li key={opt}>
                <button onClick={() => toggle(opt)} className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                  {opt}
                  {selected.includes(opt) && <span className="w-4 h-4 rounded bg-brand-600 flex items-center justify-center"><svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white fill-none stroke-current stroke-2"><path d="M2 6l3 3 5-5" /></svg></span>}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selected.length > 0 && <button onClick={() => setSelected([])} className="mt-1.5 text-xs text-slate-400 hover:text-slate-600 transition">Clear all</button>}
    </div>
  );
}

export const MultiSelect = memo(function MultiSelect() {
  return (
    <>
      <PreviewWrapper id="ms-default" title="Default" description="Multi-select with no pre-selected values."
        code={`<div className="relative w-72">
  <div className="flex flex-wrap gap-1.5 p-2 pr-8 rounded-lg border border-slate-300 min-h-[42px] cursor-pointer">
    <span className="text-sm text-slate-400 self-center px-1">Select teams…</span>
  </div>
</div>`}>
        <div className="p-10 flex items-start justify-center"><MultiSelectInput label="Teams" /></div>
      </PreviewWrapper>

      <PreviewWrapper id="ms-open" title="Open state" description="Multi-select with the dropdown list open."
        code={`// Dropdown list visible with checkmark on selected items`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-72">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Teams (open)</label>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1">
              {ALL_OPTIONS.slice(0, 5).map((opt, i) => (
                <div key={opt} className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                  {opt}
                  {i < 2 && <span className="w-4 h-4 rounded bg-brand-600 flex items-center justify-center"><svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white fill-none stroke-current stroke-2"><path d="M2 6l3 3 5-5" /></svg></span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ms-with-tags" title="With selected tags" description="Multi-select with pre-selected tag chips."
        code={`<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs font-medium">
  Design <button><X className="w-3 h-3" /></button>
</span>`}>
        <div className="p-10 flex items-start justify-center"><MultiSelectInput label="Teams" defaultSelected={['Design', 'Engineering', 'Marketing']} /></div>
      </PreviewWrapper>

      <PreviewWrapper id="ms-disabled" title="Disabled" description="Multi-select in a non-interactive disabled state."
        code={`<div className="flex flex-wrap gap-1.5 p-2 rounded-lg border border-slate-200 bg-slate-50 min-h-[42px] cursor-not-allowed opacity-60">
  <span className="text-sm text-slate-400 self-center px-1">Not available</span>
</div>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-72">
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Teams (disabled)</label>
            <div className="flex flex-wrap gap-1.5 p-2 pr-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 min-h-[42px] cursor-not-allowed opacity-60">
              <span className="text-sm text-slate-400 self-center px-1">Not available</span>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ms-error" title="Error state" description="Multi-select with a validation error message."
        code={`<div className="flex flex-wrap gap-1.5 p-2 rounded-lg border border-rose-400 min-h-[42px] cursor-pointer">...</div>
<p className="mt-1 text-xs text-rose-600">Please select at least one team.</p>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-72">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Teams</label>
            <div className="flex flex-wrap gap-1.5 p-2 pr-8 rounded-lg border border-rose-400 bg-white dark:bg-slate-900 min-h-[42px] cursor-pointer">
              <span className="text-sm text-slate-400 self-center px-1">Select teams…</span>
            </div>
            <p className="mt-1 text-xs text-rose-600">Please select at least one team.</p>
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
