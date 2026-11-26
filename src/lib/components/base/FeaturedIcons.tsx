import { memo } from 'react';
import { Zap, Shield, BarChart2, Globe, Lock, Bell, Star, Layers, Cpu, Database } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const FEATURED_ICONS_VARIANTS: OnThisPageItem[] = [
  { id: 'fi-brand',   label: 'Brand' },
  { id: 'fi-success', label: 'Success' },
  { id: 'fi-warning', label: 'Warning' },
  { id: 'fi-error',   label: 'Error' },
  { id: 'fi-gray',    label: 'Gray' },
  { id: 'fi-sizes',   label: 'Sizes' },
  { id: 'fi-outline', label: 'Outline style' },
];

const ICON_SET = [Zap, Shield, BarChart2, Globe, Lock, Bell, Star, Layers, Cpu, Database];

const COLORS = [
  { id: 'fi-brand',   label: 'Brand',   bg: 'bg-brand-50 dark:bg-brand-950/50',     icon: 'text-brand-600 dark:text-brand-400',   ring: 'ring-brand-100 dark:ring-brand-900' },
  { id: 'fi-success', label: 'Success', bg: 'bg-emerald-50 dark:bg-emerald-950/50', icon: 'text-emerald-600 dark:text-emerald-400',ring: 'ring-emerald-100 dark:ring-emerald-900' },
  { id: 'fi-warning', label: 'Warning', bg: 'bg-amber-50 dark:bg-amber-950/50',     icon: 'text-amber-600 dark:text-amber-400',   ring: 'ring-amber-100 dark:ring-amber-900' },
  { id: 'fi-error',   label: 'Error',   bg: 'bg-rose-50 dark:bg-rose-950/50',       icon: 'text-rose-600 dark:text-rose-400',     ring: 'ring-rose-100 dark:ring-rose-900' },
  { id: 'fi-gray',    label: 'Gray',    bg: 'bg-slate-100 dark:bg-slate-800',       icon: 'text-slate-600 dark:text-slate-300',   ring: 'ring-slate-200 dark:ring-slate-700' },
];

export const FeaturedIcons = memo(function FeaturedIcons() {
  return (
    <>
      {COLORS.map(({ id, label, bg, icon }) => (
        <PreviewWrapper key={id} id={id} title={label} description={`${label} featured icon — square and circle variants.`}
          code={`<div className="w-12 h-12 rounded-xl ${bg} flex items-center justify-center">
  <Zap className="w-6 h-6 ${icon}" />
</div>`}>
          <div className="p-10 flex flex-wrap items-center justify-center gap-4">
            {ICON_SET.slice(0, 5).map((Icon, i) => (
              <div key={i} className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${icon}`} />
              </div>
            ))}
            {ICON_SET.slice(0, 5).map((Icon, i) => (
              <div key={`c${i}`} className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${icon}`} />
              </div>
            ))}
          </div>
        </PreviewWrapper>
      ))}

      <PreviewWrapper id="fi-sizes" title="Sizes" description="Featured icon size scale from XS to XL."
        code={`<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center"><Zap className="w-4 h-4 text-brand-600" /></div>`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-4">
          {[
            { box: 'w-8 h-8',   icon: 'w-4 h-4',   r: 'rounded-lg',  label: 'XS' },
            { box: 'w-10 h-10', icon: 'w-5 h-5',   r: 'rounded-xl',  label: 'SM' },
            { box: 'w-12 h-12', icon: 'w-6 h-6',   r: 'rounded-xl',  label: 'MD' },
            { box: 'w-14 h-14', icon: 'w-7 h-7',   r: 'rounded-2xl', label: 'LG' },
            { box: 'w-16 h-16', icon: 'w-8 h-8',   r: 'rounded-2xl', label: 'XL' },
          ].map(({ box, icon, r, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`${box} ${r} bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center`}>
                <Zap className={`${icon} text-brand-600 dark:text-brand-400`} />
              </div>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="fi-outline" title="Outline style" description="Featured icon with a ring outline border."
        code={`<div className="w-12 h-12 rounded-xl bg-brand-50 ring-4 ring-brand-100 flex items-center justify-center">
  <Zap className="w-6 h-6 text-brand-600" />
</div>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {COLORS.map(({ label, bg, icon, ring }) => (
            <div key={label} className={`w-12 h-12 rounded-xl ${bg} ring-4 ${ring} flex items-center justify-center`}>
              <Zap className={`w-6 h-6 ${icon}`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
