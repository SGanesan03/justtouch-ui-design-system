import { memo, useState } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const TOOLTIPS_VARIANTS: OnThisPageItem[] = [
  { id: 'tooltip-top',     label: 'Top' },
  { id: 'tooltip-bottom',  label: 'Bottom' },
  { id: 'tooltip-left',    label: 'Left' },
  { id: 'tooltip-right',   label: 'Right' },
  { id: 'tooltip-dark',    label: 'Dark' },
  { id: 'tooltip-light',   label: 'Light' },
  { id: 'tooltip-with-icon',label:'With icon' },
];

const PLACEMENTS = [
  { id: 'tooltip-top',    label: 'Top',    pos: 'bottom-full left-1/2 -translate-x-1/2 mb-2',  arrow: 'top-full left-1/2 -translate-x-1/2 border-t-slate-900' },
  { id: 'tooltip-bottom', label: 'Bottom', pos: 'top-full left-1/2 -translate-x-1/2 mt-2',     arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-900' },
  { id: 'tooltip-left',   label: 'Left',   pos: 'right-full top-1/2 -translate-y-1/2 mr-2',    arrow: 'left-full top-1/2 -translate-y-1/2 border-l-slate-900' },
  { id: 'tooltip-right',  label: 'Right',  pos: 'left-full top-1/2 -translate-y-1/2 ml-2',     arrow: 'right-full top-1/2 -translate-y-1/2 border-r-slate-900' },
];

export const Tooltips = memo(function Tooltips() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {PLACEMENTS.map(({ id, label, pos, arrow }) => (
        <PreviewWrapper key={id} id={id} title={label} description={`Tooltip positioned on the ${label.toLowerCase()} of the trigger element.`}
          code={`<div className="relative group inline-block">
  <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm">${label}</button>
  <div className="absolute ${pos} px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
    Tooltip on ${label.toLowerCase()}
    <span className="absolute border-4 border-transparent ${arrow}" />
  </div>
</div>`}>
          <div className="p-16 flex items-center justify-center">
            <div className="relative inline-block">
              <button onMouseEnter={() => setActive(id)} onMouseLeave={() => setActive(null)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                Hover me ({label})
              </button>
              {active === id && (
                <div className={`absolute z-10 ${pos} px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap pointer-events-none`}>
                  Tooltip on {label.toLowerCase()}
                  <span className={`absolute border-4 border-transparent ${arrow}`} />
                </div>
              )}
            </div>
          </div>
        </PreviewWrapper>
      ))}

      <PreviewWrapper id="tooltip-dark" title="Dark" description="Dark background tooltip (default style)."
        code={`<div className="px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs">Tooltip text</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {['Short tip', 'Longer tooltip text here', 'Save changes (⌘S)'].map((text) => (
            <div key={text} className="px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap">{text}</div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="tooltip-light" title="Light" description="Light background tooltip with border."
        code={`<div className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-md text-slate-700 text-xs">Tooltip text</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {['Short tip', 'Longer tooltip text here', 'Save changes (⌘S)'].map((text) => (
            <div key={text} className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-slate-700 dark:text-slate-200 text-xs whitespace-nowrap">{text}</div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="tooltip-with-icon" title="With icon" description="Tooltip triggered by an info icon."
        code={`<div className="relative group inline-flex items-center gap-1">
  <span className="text-sm">Label</span>
  <button className="text-slate-400 hover:text-slate-600">
    <Info className="w-4 h-4" />
  </button>
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
    Helpful information
  </div>
</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {['API key', 'Workspace slug', 'Billing cycle'].map((label) => (
            <div key={label} className="relative group inline-flex items-center gap-1.5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a1 1 0 110 2 1 1 0 010-2zm0 3a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1z" /></svg>
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                More info about {label.toLowerCase()}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
