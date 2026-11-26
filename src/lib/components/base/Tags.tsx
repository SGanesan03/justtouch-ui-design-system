import { memo, useState } from 'react';
import { X } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const TAGS_VARIANTS: OnThisPageItem[] = [
  { id: 'tags-default',    label: 'Default' },
  { id: 'tags-colors',     label: 'Color variants' },
  { id: 'tags-removable',  label: 'Removable' },
  { id: 'tags-sizes',      label: 'Sizes' },
  { id: 'tags-input',      label: 'Tag input' },
];

const INITIAL = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'];
const COLOR_TAGS = [
  { label: 'Design',      cls: 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300' },
  { label: 'Engineering', cls: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300' },
  { label: 'Marketing',   cls: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300' },
  { label: 'Sales',       cls: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300' },
  { label: 'Support',     cls: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300' },
  { label: 'Finance',     cls: 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300' },
];

export const Tags = memo(function Tags() {
  const [tags, setTags] = useState(INITIAL);
  const [input, setInput] = useState('');
  const remove = (t: string) => setTags((p) => p.filter((x) => x !== t));
  const add = () => { const v = input.trim(); if (v && !tags.includes(v)) setTags((p) => [...p, v]); setInput(''); };

  return (
    <>
      <PreviewWrapper id="tags-default" title="Default" description="Gray tag chips in default style."
        code={`<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">React</span>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-2">
          {INITIAL.map((t) => <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium">{t}</span>)}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="tags-colors" title="Color variants" description="Tags across all semantic color variants."
        code={`<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium">Design</span>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-2">
          {COLOR_TAGS.map(({ label, cls }) => <span key={label} className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${cls}`}>{label}</span>)}
          {COLOR_TAGS.map(({ label, cls }) => <span key={`sq-${label}`} className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${cls}`}>{label}</span>)}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="tags-removable" title="Removable" description="Tags with a dismiss button."
        code={`<span className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
  React <button onClick={() => remove('React')}><X className="w-3.5 h-3.5" /></button>
</span>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-2">
          {INITIAL.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium">
              {t}<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"><X className="w-3.5 h-3.5" /></button>
            </span>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="tags-sizes" title="Sizes" description="Tag size scale from XS to LG."
        code={`<span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-medium">XS</span>
<span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">SM</span>
<span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">MD</span>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {[
            { cls: 'px-2 py-0.5 text-[10px]', label: 'XS tag' },
            { cls: 'px-2.5 py-1 text-xs',     label: 'SM tag' },
            { cls: 'px-3 py-1.5 text-sm',      label: 'MD tag' },
            { cls: 'px-4 py-2 text-base',      label: 'LG tag' },
          ].map(({ cls, label }) => (
            <span key={label} className={`inline-flex items-center rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 font-medium ${cls}`}>{label}</span>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="tags-input" title="Tag input" description="Interactive tag input with add and remove."
        code={`const [tags, setTags] = useState(['React', 'TypeScript']);
const add = () => { if (input.trim()) setTags(p => [...p, input.trim()]); setInput(''); };

<div className="flex flex-wrap gap-2 mb-2">
  {tags.map((t) => <span key={t} className="...removable tag...">{t}</span>)}
</div>
<div className="flex gap-2">
  <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && add()} placeholder="Add a tag…" className="..." />
  <button onClick={add}>Add</button>
</div>`}>
        <div className="p-10 max-w-sm mx-auto space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium">
                {t}<button onClick={() => remove(t)} className="text-slate-400 hover:text-slate-600 transition"><X className="w-3.5 h-3.5" /></button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && add()} placeholder="Add a tag…"
              className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition" />
            <button onClick={add} className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">Add</button>
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
