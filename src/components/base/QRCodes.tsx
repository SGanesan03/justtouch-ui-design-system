import { memo } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const QR_CODES_VARIANTS: OnThisPageItem[] = [
  { id: 'qr-default',    label: 'Default' },
  { id: 'qr-with-card',  label: 'With card' },
  { id: 'qr-with-logo',  label: 'With logo' },
  { id: 'qr-sizes',      label: 'Sizes' },
];

function QRPattern({ size = 100 }: { size?: number }) {
  const cells: { x: number; y: number }[] = [];
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0],
    [0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1],
    [1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1],
    [0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0],
    [1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1],
  ];
  const cols = pattern[0].length;
  const cell = size / cols;
  pattern.forEach((row, r) => row.forEach((v, c) => { if (v) cells.push({ x: c * cell, y: r * cell }); }));
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      {cells.map(({ x, y }, i) => <rect key={i} x={x} y={y} width={cell} height={cell} fill="currentColor" />)}
    </svg>
  );
}

export const QRCodes = memo(function QRCodes() {
  return (
    <>
      <PreviewWrapper id="qr-default" title="Default" description="Standalone QR code with a URL label."
        code={`<div className="w-32 h-32 bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-slate-900">
  <QRPattern />
</div>
<span className="text-xs text-slate-500">justtouch.io</span>`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-8">
          {['justtouch.io', 'justtouch.io/docs', 'justtouch.io/app'].map((url) => (
            <div key={url} className="flex flex-col items-center gap-2">
              <div className="w-32 h-32 bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-slate-900"><QRPattern size={100} /></div>
              <span className="text-xs text-slate-500">{url}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="qr-with-card" title="With card" description="QR code inside a card with title and download action."
        code={`<div className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="w-28 h-28 bg-white p-1.5 rounded-lg border border-slate-100 text-slate-900"><QRPattern /></div>
  <p className="text-sm font-semibold">Scan to download</p>
  <button className="w-full px-3 py-1.5 rounded-lg border text-xs font-medium">Download PNG</button>
</div>`}>
        <div className="p-10 flex flex-wrap items-start justify-center gap-6">
          {[
            { title: 'Scan to download', url: 'justtouch.io/app' },
            { title: 'Scan to visit',    url: 'justtouch.io' },
          ].map(({ title, url }) => (
            <div key={url} className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
              <div className="w-28 h-28 bg-white p-1.5 rounded-lg border border-slate-100 text-slate-900"><QRPattern size={100} /></div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{url}</p>
              </div>
              <button className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition">Download PNG</button>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="qr-with-logo" title="With logo" description="QR code with a centered brand logo overlay."
        code={`<div className="relative w-32 h-32 bg-white p-2 rounded-xl border border-slate-200 text-slate-900">
  <QRPattern />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
      <span className="text-white text-xs font-bold">JT</span>
    </div>
  </div>
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="relative w-36 h-36 bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-slate-900">
            <QRPattern size={100} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">JT</span>
              </div>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="qr-sizes" title="Sizes" description="QR code size variants from SM to LG."
        code={`<div className="w-24 h-24 bg-white p-1.5 rounded-lg border border-slate-200 text-slate-900"><QRPattern /></div>`}>
        <div className="p-10 flex flex-wrap items-end justify-center gap-6">
          {[
            { w: 'w-20 h-20', label: 'SM' },
            { w: 'w-28 h-28', label: 'MD' },
            { w: 'w-36 h-36', label: 'LG' },
            { w: 'w-44 h-44', label: 'XL' },
          ].map(({ w, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`${w} bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-slate-900`}><QRPattern size={100} /></div>
              <span className="text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
