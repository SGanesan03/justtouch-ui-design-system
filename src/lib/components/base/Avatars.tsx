import { memo } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const AVATARS_VARIANTS: OnThisPageItem[] = [
  { id: 'avatar-xs',           label: 'Extra small' },
  { id: 'avatar-sm',           label: 'Small' },
  { id: 'avatar-md',           label: 'Medium' },
  { id: 'avatar-lg',           label: 'Large' },
  { id: 'avatar-xl',           label: 'Extra large' },
  { id: 'avatar-with-text',    label: 'With text' },
  { id: 'avatar-with-status',  label: 'With status indicator' },
  { id: 'avatar-stacked',      label: 'Stacked group' },
  { id: 'avatar-placeholder',  label: 'Placeholder initials' },
];

const SIZES = [
  { id: 'avatar-xs',  cls: 'w-6 h-6 text-[9px]',  label: 'Extra small',  size: 'xs' },
  { id: 'avatar-sm',  cls: 'w-8 h-8 text-xs',      label: 'Small',        size: 'sm' },
  { id: 'avatar-md',  cls: 'w-10 h-10 text-sm',    label: 'Medium',       size: 'md' },
  { id: 'avatar-lg',  cls: 'w-12 h-12 text-base',  label: 'Large',        size: 'lg' },
  { id: 'avatar-xl',  cls: 'w-16 h-16 text-lg',    label: 'Extra large',  size: 'xl' },
];

const GRADIENTS = [
  'from-brand-400 to-indigo-600',
  'from-emerald-400 to-teal-600',
  'from-amber-400 to-orange-600',
  'from-rose-400 to-pink-600',
];
const INITIALS = ['SG', 'AK', 'MR', 'JL'];

export const Avatars = memo(function Avatars() {
  return (
    <>
      {SIZES.map(({ id, cls, label, size }) => (
        <PreviewWrapper
          key={id}
          id={id}
          title={label}
          description={`${label} avatar — ${size.toUpperCase()} size variant.`}
          code={`<div className="${cls} rounded-full bg-brand-600 flex items-center justify-center text-white font-semibold">SG</div>`}
        >
          <div className="p-10 flex items-center justify-center gap-4">
            <div className={`${cls} rounded-full bg-brand-600 flex items-center justify-center text-white font-semibold`}>SG</div>
            <div className={`${cls} rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-semibold`}>AK</div>
            <div className={`${cls} rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-semibold`}>MR</div>
            <div className={`${cls} rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-semibold`}>+4</div>
          </div>
        </PreviewWrapper>
      ))}

      <PreviewWrapper
        id="avatar-with-text"
        title="With text"
        description="Avatar paired with name and subtitle text."
        code={`<div className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white text-sm font-semibold">SG</div>
  <div>
    <p className="text-sm font-medium">Selva Ganesan</p>
    <p className="text-xs text-slate-500">selva@justtouch.io</p>
  </div>
</div>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-6">
          {[
            { initials: 'SG', name: 'Selva Ganesan',  email: 'selva@justtouch.io',  grad: 'from-brand-400 to-indigo-600' },
            { initials: 'AK', name: 'Alex Kumar',     email: 'alex@justtouch.io',   grad: 'from-emerald-400 to-teal-600' },
            { initials: 'MR', name: 'Maria Rossi',    email: 'maria@justtouch.io',  grad: 'from-amber-400 to-orange-600' },
          ].map(({ initials, name, email, grad }) => (
            <div key={initials} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-white text-sm font-semibold shrink-0`}>{initials}</div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{email}</p>
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper
        id="avatar-with-status"
        title="With status indicator"
        description="Avatar with online / away / offline status ring."
        code={`<div className="relative w-10 h-10">
  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white text-sm font-semibold">SG</div>
  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
</div>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { initials: 'SG', dot: 'bg-emerald-400', label: 'Online',  grad: 'from-brand-400 to-indigo-600' },
            { initials: 'AK', dot: 'bg-amber-400',   label: 'Away',    grad: 'from-emerald-400 to-teal-600' },
            { initials: 'MR', dot: 'bg-slate-300',   label: 'Offline', grad: 'from-amber-400 to-orange-600' },
            { initials: 'JL', dot: 'bg-rose-400',    label: 'Busy',    grad: 'from-rose-400 to-pink-600' },
          ].map(({ initials, dot, label, grad }) => (
            <div key={initials} className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-white text-sm font-semibold`}>{initials}</div>
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${dot} ring-2 ring-white dark:ring-slate-900`} />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper
        id="avatar-stacked"
        title="Stacked group"
        description="Overlapping avatar stack with overflow count badge."
        code={`<div className="flex -space-x-3">
  {members.map((m) => (
    <div key={m} className="w-9 h-9 rounded-full ring-2 ring-white bg-gradient-to-br from-brand-400 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold">{m}</div>
  ))}
  <div className="w-9 h-9 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+4</div>
</div>`}
      >
        <div className="p-10 flex flex-col items-center gap-8">
          {[3, 4, 5].map((count) => (
            <div key={count} className="flex -space-x-3">
              {GRADIENTS.slice(0, count > 4 ? 4 : count).map((g, i) => (
                <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${g} ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-white text-xs font-semibold`}>
                  {INITIALS[i]}
                </div>
              ))}
              {count > 4 && (
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-300">+{count - 4}</div>
              )}
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper
        id="avatar-placeholder"
        title="Placeholder initials"
        description="Color-coded initials avatars across all semantic palette variants."
        code={`<div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white text-sm font-semibold">SG</div>`}
      >
        <div className="p-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { cls: 'bg-brand-600',   initials: 'SG' },
            { cls: 'bg-indigo-600',  initials: 'AK' },
            { cls: 'bg-emerald-600', initials: 'MR' },
            { cls: 'bg-amber-500',   initials: 'JL' },
            { cls: 'bg-rose-600',    initials: 'PR' },
            { cls: 'bg-teal-600',    initials: 'VN' },
            { cls: 'bg-slate-600',   initials: 'KS' },
            { cls: 'bg-pink-600',    initials: 'DM' },
          ].map(({ cls, initials }) => (
            <div key={initials} className={`w-10 h-10 rounded-full ${cls} flex items-center justify-center text-white text-sm font-semibold`}>{initials}</div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
