import { memo } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const MOBILE_APP_STORE_VARIANTS: OnThisPageItem[] = [
  { id: 'mas-dark',    label: 'Dark background' },
  { id: 'mas-light',   label: 'Light / outline' },
  { id: 'mas-stacked', label: 'Stacked layout' },
  { id: 'mas-sizes',   label: 'Sizes' },
];

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current flex-shrink-0">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current flex-shrink-0">
    <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zm-1.5-20.3C1.25 3.9 1 4.5 1 5.23v13.54c0 .73.25 1.33.68 1.77l.09.08 7.59-7.59v-.18L1.68 3.46zm16.5 9.04l-2.14-1.23-2.42 2.42 2.42 2.42 2.16-1.25c.62-.36.62-.94 0-1.36zm-14.36 8.5l10.87-9.79-2.72-2.72-8.15 11.51z" />
  </svg>
);

const STORES = [
  { Icon: AppleIcon, top: 'Download on the', bottom: 'App Store' },
  { Icon: PlayIcon,  top: 'Get it on',        bottom: 'Google Play' },
];

export const MobileAppStoreButtons = memo(function MobileAppStoreButtons() {
  return (
    <>
      <PreviewWrapper id="mas-dark" title="Dark background" description="App Store and Google Play buttons on a dark background."
        code={`<a href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white hover:bg-slate-800 transition shadow-sm">
  <AppleIcon />
  <div>
    <div className="text-[10px] opacity-70 leading-none">Download on the</div>
    <div className="text-sm font-semibold leading-tight mt-0.5">App Store</div>
  </div>
</a>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {STORES.map(({ Icon, top, bottom }) => (
            <a key={bottom} href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white hover:bg-slate-800 transition shadow-sm">
              <Icon />
              <div>
                <div className="text-[10px] opacity-70 leading-none">{top}</div>
                <div className="text-sm font-semibold leading-tight mt-0.5">{bottom}</div>
              </div>
            </a>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="mas-light" title="Light / outline" description="App store buttons with a light border style."
        code={`<a href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 transition shadow-sm">...</a>`}>
        <div className="p-10 flex flex-wrap items-center justify-center gap-4">
          {STORES.map(({ Icon, top, bottom }) => (
            <a key={bottom} href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-sm">
              <Icon />
              <div>
                <div className="text-[10px] text-slate-500 leading-none">{top}</div>
                <div className="text-sm font-semibold leading-tight mt-0.5">{bottom}</div>
              </div>
            </a>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="mas-stacked" title="Stacked layout" description="Vertically stacked app store buttons."
        code={`<div className="flex flex-col gap-3">
  <a href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white">...</a>
  <a href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white">...</a>
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="flex flex-col gap-3">
            {STORES.map(({ Icon, top, bottom }) => (
              <a key={bottom} href="#" className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white hover:bg-slate-800 transition shadow-sm">
                <Icon />
                <div>
                  <div className="text-[10px] opacity-70 leading-none">{top}</div>
                  <div className="text-sm font-semibold leading-tight mt-0.5">{bottom}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="mas-sizes" title="Sizes" description="App store button size variants."
        code={`<a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white text-xs">...</a>`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-4">
          {[
            { px: 'px-3 py-2',   gap: 'gap-2',   icon: 'w-4 h-4', top: 'text-[9px]',  bot: 'text-xs',  r: 'rounded-lg',  label: 'SM' },
            { px: 'px-5 py-3',   gap: 'gap-3',   icon: 'w-6 h-6', top: 'text-[10px]', bot: 'text-sm',  r: 'rounded-xl',  label: 'MD' },
            { px: 'px-6 py-4',   gap: 'gap-4',   icon: 'w-7 h-7', top: 'text-xs',     bot: 'text-base',r: 'rounded-xl',  label: 'LG' },
          ].map(({ px, gap, top, bot, r, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <a href="#" className={`inline-flex items-center ${gap} ${px} ${r} bg-black text-white hover:bg-slate-800 transition shadow-sm`}>
                <AppleIcon />
                <div>
                  <div className={`${top} opacity-70 leading-none`}>Download on the</div>
                  <div className={`${bot} font-semibold leading-tight mt-0.5`}>App Store</div>
                </div>
              </a>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
