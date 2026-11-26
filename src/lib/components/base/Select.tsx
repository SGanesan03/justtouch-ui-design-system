import { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const SELECT_VARIANTS: OnThisPageItem[] = [
  { id: 'select-default',   label: 'Default' },
  { id: 'select-sizes',     label: 'Sizes' },
  { id: 'select-disabled',  label: 'Disabled' },
  { id: 'select-error',     label: 'Error state' },
  { id: 'select-success',   label: 'Success state' },
];

const BASE = 'w-full appearance-none px-3 py-2 pr-8 rounded-lg border bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition';

function SelectField({ label, options, cls = 'border-slate-300 dark:border-slate-600 focus:ring-brand-500', disabled = false, hint }: {
  label: string; options: string[]; cls?: string; disabled?: boolean; hint?: { text: string; color: string };
}) {
  return (
    <div>
      <label className={`block text-sm font-medium mb-1.5 ${disabled ? 'text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>{label}</label>
      <div className="relative">
        <select disabled={disabled} className={`${BASE} ${cls} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
      {hint && <p className={`mt-1 text-xs ${hint.color}`}>{hint.text}</p>}
    </div>
  );
}

export const Select = memo(function Select() {
  return (
    <>
      <PreviewWrapper id="select-default" title="Default" description="Standard native select with label and options."
        code={`<div className="relative">
  <select className="w-full appearance-none px-3 py-2 pr-8 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
    <option>United States</option>
  </select>
  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
</div>`}>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto">
          <SelectField label="Country" options={['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany']} />
          <SelectField label="Timezone" options={['UTC-8 Pacific', 'UTC-5 Eastern', 'UTC+0 London', 'UTC+1 Paris', 'UTC+5:30 Mumbai']} />
          <SelectField label="Language" options={['English', 'Spanish', 'French', 'German', 'Japanese']} />
          <SelectField label="Currency" options={['USD — US Dollar', 'EUR — Euro', 'GBP — British Pound', 'INR — Indian Rupee']} />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="select-sizes" title="Sizes" description="Select input size variants from SM to LG."
        code={`<select className="w-full appearance-none px-2.5 py-1.5 rounded-md border border-slate-300 text-xs">...</select>  // SM
<select className="w-full appearance-none px-3 py-2 rounded-lg border border-slate-300 text-sm">...</select>    // MD
<select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-300 text-base">...</select>  // LG`}>
        <div className="p-10 max-w-xs mx-auto space-y-4">
          {[
            { label: 'SM', cls: 'px-2.5 py-1.5 rounded-md text-xs' },
            { label: 'MD', cls: 'px-3 py-2 rounded-lg text-sm' },
            { label: 'LG', cls: 'px-4 py-3 rounded-xl text-base' },
          ].map(({ label, cls }) => (
            <div key={label}>
              <p className="text-xs font-medium text-slate-500 mb-1">{label}</p>
              <div className="relative">
                <select className={`w-full appearance-none pr-8 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${cls}`}>
                  <option>Select option</option>
                  <option>Option A</option>
                  <option>Option B</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="select-disabled" title="Disabled" description="Select in a non-interactive disabled state."
        code={`<select disabled className="w-full appearance-none px-3 py-2 pr-8 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed text-sm">
  <option>Not available</option>
</select>`}>
        <div className="p-10 max-w-xs mx-auto space-y-4">
          <SelectField label="Plan (locked)" options={['Enterprise']} cls="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" disabled />
          <SelectField label="Region (locked)" options={['US East']} cls="border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" disabled />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="select-error" title="Error state" description="Select with a validation error message."
        code={`<select className="w-full appearance-none px-3 py-2 pr-8 rounded-lg border border-rose-400 bg-white text-sm focus:ring-2 focus:ring-rose-500">
  <option value="">Select a role…</option>
</select>
<p className="mt-1 text-xs text-rose-600">Please select a role.</p>`}>
        <div className="p-10 max-w-xs mx-auto space-y-4">
          <SelectField label="Role" options={['Select a role…', 'Admin', 'Member', 'Viewer']} cls="border-rose-400 focus:ring-rose-500" hint={{ text: 'Please select a role.', color: 'text-rose-600' }} />
          <SelectField label="Department" options={['Select a department…', 'Engineering', 'Design', 'Marketing']} cls="border-rose-400 focus:ring-rose-500" hint={{ text: 'This field is required.', color: 'text-rose-600' }} />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="select-success" title="Success state" description="Select with a success validation message."
        code={`<select className="w-full appearance-none px-3 py-2 pr-8 rounded-lg border border-emerald-400 bg-white text-sm focus:ring-2 focus:ring-emerald-500">
  <option>Admin</option>
</select>
<p className="mt-1 text-xs text-emerald-600">✓ Role assigned successfully.</p>`}>
        <div className="p-10 max-w-xs mx-auto space-y-4">
          <SelectField label="Role" options={['Admin', 'Member', 'Viewer']} cls="border-emerald-400 focus:ring-emerald-500" hint={{ text: '✓ Role assigned successfully.', color: 'text-emerald-600' }} />
          <SelectField label="Country" options={['United States', 'United Kingdom', 'Canada']} cls="border-emerald-400 focus:ring-emerald-500" hint={{ text: '✓ Country saved.', color: 'text-emerald-600' }} />
        </div>
      </PreviewWrapper>
    </>
  );
});
