import { memo, useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const DROPDOWNS_VARIANTS: OnThisPageItem[] = [
  { id: 'dropdown-default',    label: 'Default' },
  { id: 'dropdown-with-search',label: 'With search' },
  { id: 'dropdown-grouped',    label: 'Grouped options' },
  { id: 'dropdown-disabled',   label: 'Disabled' },
  { id: 'dropdown-error',      label: 'Error state' },
];

const OPTIONS = ['Product Designer', 'Frontend Engineer', 'Backend Engineer', 'DevOps Engineer', 'Product Manager', 'Data Analyst'];
const GROUPED = {
  Engineering: ['Frontend Engineer', 'Backend Engineer', 'DevOps Engineer'],
  Design: ['Product Designer', 'UX Researcher'],
  Product: ['Product Manager', 'Data Analyst'],
};

function DropdownBase({ label, options, placeholder = 'Select option' }: { label: string; options: string[]; placeholder?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} className="relative w-64">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white hover:border-slate-400 transition">
        <span>{selected || placeholder}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1 max-h-52 overflow-auto">
          {options.map((opt) => (
            <li key={opt}>
              <button onClick={() => { setSelected(opt); setOpen(false); }} className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                {opt}{selected === opt && <Check className="w-4 h-4 text-brand-600" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const Dropdowns = memo(function Dropdowns() {
  const [search, setSearch] = useState('');
  const filtered = OPTIONS.filter((o) => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PreviewWrapper id="dropdown-default" title="Default" description="Single-select dropdown with a chevron trigger."
        code={`<div className="relative w-64">
  <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-slate-300 bg-white text-sm">
    <span>{selected}</span><ChevronDown className="w-4 h-4 text-slate-400" />
  </button>
</div>`}>
        <div className="p-10 flex flex-wrap items-start justify-center gap-6">
          <DropdownBase label="Role" options={OPTIONS} />
          <DropdownBase label="Department" options={['Design', 'Engineering', 'Marketing', 'Sales']} />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="dropdown-with-search" title="With search" description="Dropdown with an inline search filter."
        code={`<div className="p-2 border-b border-slate-100">
  <input type="text" placeholder="Search..." className="w-full px-2 py-1 text-sm rounded border border-slate-200" />
</div>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-64">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Role</label>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
              <div className="p-2 border-b border-slate-100 dark:border-slate-800">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search roles…" className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-1 focus:ring-brand-500" />
                </div>
              </div>
              <ul className="py-1 max-h-44 overflow-auto">
                {filtered.map((opt) => (
                  <li key={opt}>
                    <button className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                      {opt}{opt === filtered[0] && <Check className="w-4 h-4 text-brand-600" />}
                    </button>
                  </li>
                ))}
                {filtered.length === 0 && <li className="px-3 py-2 text-xs text-slate-400">No results</li>}
              </ul>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="dropdown-grouped" title="Grouped options" description="Dropdown with labelled option groups."
        code={`{Object.entries(groups).map(([group, opts]) => (
  <div key={group}>
    <p className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase">{group}</p>
    {opts.map((opt) => <button key={opt} className="...">{opt}</button>)}
  </div>
))}`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-64">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Role</label>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1">
              {Object.entries(GROUPED).map(([group, opts]) => (
                <div key={group}>
                  <p className="px-3 pt-2 pb-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{group}</p>
                  {opts.map((opt) => (
                    <button key={opt} className="flex w-full px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">{opt}</button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="dropdown-disabled" title="Disabled" description="Dropdown in a non-interactive disabled state."
        code={`<button disabled className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed">
  <span>Not available</span><ChevronDown className="w-4 h-4" />
</button>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-64">
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Role (disabled)</label>
            <button disabled className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400 cursor-not-allowed">
              <span className="text-sm">Not available</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="dropdown-error" title="Error state" description="Dropdown with a validation error message."
        code={`<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-rose-400 bg-white text-sm">
  <span className="text-slate-400">Select a role…</span><ChevronDown className="w-4 h-4" />
</button>
<p className="mt-1 text-xs text-rose-600">Please select a role.</p>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-64">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Role</label>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-rose-400 bg-white dark:bg-slate-900 text-sm">
              <span className="text-slate-400">Select a role…</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <p className="mt-1 text-xs text-rose-600">Please select a role to continue.</p>
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
