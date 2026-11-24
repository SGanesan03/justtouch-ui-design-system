import { memo } from 'react';
import type { PreviewType } from '@/types';

export const OverviewThumbnail = memo<{ type: PreviewType }>(function OverviewThumbnail({ type }) {
  switch (type) {
    case 'gradient':
      return (
        <div className="w-36 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-xs">
          <div className="flex gap-1.5 text-[7px] text-slate-400 mb-1.5">
            <span>Solid</span>
            <span className="font-semibold text-slate-800 dark:text-white">Gradient</span>
            <span>Image</span>
          </div>
          <div className="h-14 rounded-md bg-gradient-to-br from-brand-500 via-purple-600 to-indigo-800 relative">
            <span className="w-2 h-2 rounded-full border border-white bg-brand-400 absolute top-1.5 left-1.5" />
          </div>
        </div>
      );
    case 'header':
    case 'page-headers':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
              <span className="w-8 h-1.5 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
            <span className="w-5 h-2 rounded bg-brand-600" />
          </div>
          <div className="space-y-1.5">
            <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Welcome back</div>
            <div className="w-24 h-1.5 rounded bg-slate-100 dark:bg-slate-800" />
          </div>
          <div className="h-3 rounded bg-slate-50 dark:bg-slate-800/60" />
        </div>
      );
    case 'image-picker':
      return (
        <div className="w-36 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-xs">
          <div className="flex gap-1.5 text-[7px] text-slate-400 mb-1.5">
            <span>Solid</span>
            <span>Gradient</span>
            <span className="font-semibold text-slate-800 dark:text-white">Image</span>
          </div>
          <div className="h-14 rounded-md border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center">
            <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-[7px] font-medium shadow-xs">
              Click to upload
            </span>
          </div>
        </div>
      );
    case 'inline-cta':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col justify-between">
          <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Welcome back</div>
          <div className="p-2 rounded-md border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 flex items-center justify-between gap-2">
            <div className="w-7 h-7 rounded bg-brand-100 dark:bg-brand-900/50 shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="w-full h-1.5 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="w-8 h-2 rounded bg-brand-600" />
            </div>
          </div>
        </div>
      );
    case 'line-chart':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col justify-between">
          <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Dashboard</div>
          <svg viewBox="0 0 120 42" className="w-full h-12 overflow-visible">
            <path d="M0 36 L20 28 L40 31 L60 18 L80 21 L100 10 L120 6" fill="none" stroke="#7f56d9" strokeWidth="2" />
            <path d="M0 40 L20 35 L40 37 L60 28 L80 30 L100 22 L120 18" fill="none" stroke="#c4b5fd" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'loading':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col">
          <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Dashboard</div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-slate-200 border-t-brand-600 animate-spin" />
          </div>
        </div>
      );
    case 'messaging':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-xs flex justify-between gap-2">
          <div className="flex-1 space-y-1.5 pt-1">
            <div className="w-12 h-1.5 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="w-16 h-1.5 rounded bg-slate-100 dark:bg-slate-800" />
          </div>
          <div className="w-16 border-l border-slate-100 dark:border-slate-800 pl-1.5 flex flex-col justify-center gap-1.5">
            <div className="self-end w-10 h-2.5 rounded bg-brand-600" />
            <div className="self-start w-10 h-2.5 rounded bg-slate-100 dark:bg-slate-800" />
            <div className="self-end w-11 h-2.5 rounded bg-brand-600" />
          </div>
        </div>
      );
    case 'metrics':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col justify-between">
          <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Your stats</div>
          <div className="grid grid-cols-3 gap-1.5">
            {['2,212', '1,948', '2,864'].map((n, i) => (
              <div key={n} className="p-1 rounded border border-slate-100 dark:border-slate-800">
                <div className="text-[7px] font-bold text-slate-800 dark:text-white">{n}</div>
                <div className={`h-1 mt-1 rounded ${i === 1 ? 'bg-rose-400' : 'bg-emerald-400'}`} />
              </div>
            ))}
          </div>
        </div>
      );
    case 'modals':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-800/80 p-2.5 shadow-xs flex items-center justify-center">
          <div className="w-28 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-2 shadow-sm text-center">
            <div className="w-3 h-3 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-1 flex items-center justify-center text-[7px]">✓</div>
            <div className="text-[7px] font-semibold text-slate-800 dark:text-white">Blog post published</div>
            <div className="mt-1.5 flex gap-1 justify-center">
              <span className="w-8 h-2 rounded bg-slate-100 dark:bg-slate-800" />
              <span className="w-8 h-2 rounded bg-brand-600" />
            </div>
          </div>
        </div>
      );
    case 'notifications':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs relative">
          <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Welcome back</div>
          <div className="mt-2 ml-auto w-24 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-1.5 shadow-sm">
            <div className="w-14 h-1.5 rounded bg-slate-200 dark:bg-slate-600 mb-1" />
            <div className="flex justify-end">
              <span className="w-6 h-2 rounded bg-brand-600" />
            </div>
          </div>
        </div>
      );
    case 'paginations':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex items-center justify-center">
          <div className="inline-flex items-center gap-1 border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-1 text-[7px] text-slate-600 dark:text-slate-300">
            <span>← Prev</span>
            <span className="px-1 rounded bg-brand-50 text-brand-600 font-bold">1</span>
            <span>2</span>
            <span>3</span>
            <span>Next →</span>
          </div>
        </div>
      );
    case 'pie-charts':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex items-center justify-between">
          <div>
            <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200">Sales report</div>
            <div className="w-10 h-1.5 rounded bg-slate-100 dark:bg-slate-800 mt-1" />
          </div>
          <div className="w-11 h-11 rounded-full border-[5px] border-brand-600 border-r-brand-200 border-b-indigo-400" />
        </div>
      );
    case 'progress-steps':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex items-center gap-2.5">
          <div className="flex flex-col items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
            <span className="w-0.5 h-3 bg-brand-600" />
            <span className="w-2.5 h-2.5 rounded-full border-2 border-brand-600" />
            <span className="w-0.5 h-3 bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="text-[7px] font-semibold">Company details</div>
            <div className="h-2.5 rounded bg-slate-100 dark:bg-slate-800" />
            <div className="h-2.5 rounded bg-slate-100 dark:bg-slate-800" />
          </div>
        </div>
      );
    case 'radar-charts':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex items-center justify-between">
          <div className="text-[8px] font-semibold text-slate-700 dark:text-slate-200 self-start">Analytics</div>
          <svg viewBox="0 0 60 60" className="w-14 h-14">
            <polygon points="30,6 52,22 44,48 16,48 8,22" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            <polygon points="30,12 46,24 39,43 20,41 14,24" fill="rgba(127,86,217,0.25)" stroke="#7f56d9" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'buttons':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col items-center justify-center gap-2">
          <div className="flex gap-1.5">
            <span className="px-2.5 py-1 rounded bg-brand-600 text-white text-[8px] font-medium">Primary</span>
            <span className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 text-[8px] font-medium">Secondary</span>
          </div>
          <div className="flex gap-1.5">
            <span className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 text-[7px] font-medium">Tertiary</span>
            <span className="px-2 py-0.5 rounded bg-rose-600 text-white text-[7px] font-medium">Destructive</span>
          </div>
        </div>
      );
    case 'badges':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-wrap items-center justify-center gap-1.5 content-center">
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[7px] font-medium">● Active</span>
          <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 text-[7px] font-medium">New v4.0</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[7px] font-medium">Pending</span>
          <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[7px] font-medium">Archived</span>
        </div>
      );
    case 'inputs':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col justify-center gap-1.5">
          <div className="text-[7px] font-medium text-slate-600 dark:text-slate-300">Work email</div>
          <div className="px-2 py-1 rounded border border-brand-400 bg-white dark:bg-slate-800 text-[7px] text-slate-500">selva@justtouch.io</div>
          <div className="text-[6px] text-emerald-600">✓ Available workspace domain</div>
        </div>
      );
    case 'tables':
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-xs flex flex-col justify-between">
          <div className="h-2.5 rounded bg-slate-100 dark:bg-slate-800" />
          <div className="space-y-1.5">
            {[['w-14', 'bg-emerald-100'], ['w-16', 'bg-brand-100'], ['w-12', 'bg-amber-100']].map(([w, bg], i) => (
              <div key={i} className="flex justify-between items-center">
                <span className={`${w} h-1.5 rounded bg-slate-200 dark:bg-slate-700`} />
                <span className={`w-6 h-2 rounded-full ${bg}`} />
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return (
        <div className="w-40 h-24 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-xs flex flex-col items-center justify-center text-center">
          <span className="text-[6px] font-semibold text-brand-600">About us</span>
          <div className="text-[9px] font-bold text-slate-900 dark:text-white mt-0.5">About the company</div>
          <div className="w-20 h-1 rounded bg-slate-200 dark:bg-slate-700 mt-1.5" />
        </div>
      );
  }
});
