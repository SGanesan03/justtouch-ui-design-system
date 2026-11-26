import { memo, useState, useRef, useEffect } from 'react';
import { Edit2, Copy, Trash2, Share2, MoreHorizontal, ExternalLink, Download } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const CONTEXT_MENUS_VARIANTS: OnThisPageItem[] = [
  { id: 'ctx-default',      label: 'Default' },
  { id: 'ctx-with-icons',   label: 'With icons' },
  { id: 'ctx-with-shortcuts',label:'With shortcuts' },
  { id: 'ctx-with-divider', label: 'With divider' },
  { id: 'ctx-destructive',  label: 'With destructive item' },
];

const BASE_ITEMS = [
  { icon: Edit2,        label: 'Edit',       shortcut: '⌘E', danger: false },
  { icon: Copy,         label: 'Duplicate',  shortcut: '⌘D', danger: false },
  { icon: ExternalLink, label: 'Open',       shortcut: '⌘O', danger: false },
  { icon: Download,     label: 'Download',   shortcut: '⌘S', danger: false },
  { icon: Share2,       label: 'Share',      shortcut: '⌘⇧S',danger: false },
  { icon: Trash2,       label: 'Delete',     shortcut: '⌘⌫', danger: true  },
];

function Menu({ items }: { items: typeof BASE_ITEMS }) {
  return (
    <div className="w-52 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1">
      {items.map(({ icon: Icon, label, shortcut, danger }) => (
        <button key={label} className={`flex w-full items-center justify-between px-3 py-2 text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800 ${danger ? 'text-rose-600' : 'text-slate-700 dark:text-slate-200'}`}>
          <span className="flex items-center gap-2.5"><Icon className="w-4 h-4" />{label}</span>
          <span className="text-xs text-slate-400">{shortcut}</span>
        </button>
      ))}
    </div>
  );
}

function InteractiveMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((o) => !o)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
        <MoreHorizontal className="w-4 h-4" />Options
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1.5 z-10">
          <Menu items={BASE_ITEMS} />
        </div>
      )}
    </div>
  );
}

export const ContextMenus = memo(function ContextMenus() {
  return (
    <>
      <PreviewWrapper id="ctx-default" title="Default" description="Basic context menu with text-only items."
        code={`<div className="w-52 rounded-xl border border-slate-200 bg-white shadow-lg py-1">
  {items.map((item) => (
    <button className="flex w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">{item}</button>
  ))}
</div>`}>
        <div className="p-10 flex items-start justify-center gap-8">
          <div className="w-52 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1">
            {['Edit', 'Duplicate', 'Archive', 'Delete'].map((l) => (
              <button key={l} className="flex w-full px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">{l}</button>
            ))}
          </div>
          <InteractiveMenu />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ctx-with-icons" title="With icons" description="Context menu items with leading icons."
        code={`<button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
  <Edit2 className="w-4 h-4" />Edit
</button>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-52 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1">
            {BASE_ITEMS.slice(0, 4).map(({ icon: Icon, label }) => (
              <button key={label} className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                <Icon className="w-4 h-4 text-slate-400" />{label}
              </button>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ctx-with-shortcuts" title="With shortcuts" description="Context menu with keyboard shortcut hints."
        code={`<button className="flex w-full items-center justify-between px-3 py-2 text-sm">
  <span className="flex items-center gap-2.5"><Edit2 className="w-4 h-4" />Edit</span>
  <span className="text-xs text-slate-400">⌘E</span>
</button>`}>
        <div className="p-10 flex items-start justify-center">
          <Menu items={BASE_ITEMS.slice(0, 5)} />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ctx-with-divider" title="With divider" description="Context menu with a section divider."
        code={`<div className="py-1">
  <button className="...">Edit</button>
  <button className="...">Duplicate</button>
  <div className="my-1 border-t border-slate-100" />
  <button className="...">Archive</button>
</div>`}>
        <div className="p-10 flex items-start justify-center">
          <div className="w-52 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1">
            {[Edit2, Copy].map((Icon, i) => (
              <button key={i} className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                <Icon className="w-4 h-4 text-slate-400" />{['Edit', 'Duplicate'][i]}
              </button>
            ))}
            <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
            {[Share2, Download].map((Icon, i) => (
              <button key={i} className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                <Icon className="w-4 h-4 text-slate-400" />{['Share', 'Download'][i]}
              </button>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="ctx-destructive" title="With destructive item" description="Context menu with a danger-colored destructive action."
        code={`<button className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50">
  <Trash2 className="w-4 h-4" />Delete
</button>`}>
        <div className="p-10 flex items-start justify-center">
          <Menu items={BASE_ITEMS} />
        </div>
      </PreviewWrapper>
    </>
  );
});
