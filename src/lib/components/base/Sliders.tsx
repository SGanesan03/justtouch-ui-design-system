import { memo, useState } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const SLIDERS_VARIANTS: OnThisPageItem[] = [
  { id: 'slider-default',  label: 'Default' },
  { id: 'slider-steps',    label: 'With steps' },
  { id: 'slider-labeled',  label: 'With value label' },
  { id: 'slider-disabled', label: 'Disabled' },
  { id: 'slider-colors',   label: 'Color variants' },
];

export const Sliders = memo(function Sliders() {
  const [v1, setV1] = useState(40);
  const [v2, setV2] = useState(65);
  const [v3, setV3] = useState(30);

  return (
    <>
      <PreviewWrapper id="slider-default" title="Default" description="Basic range slider with min/max labels."
        code={`<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-6">
          {['Volume', 'Brightness', 'Opacity'].map((label, i) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{label}</label>
              <input type="range" min={0} max={100} defaultValue={[40, 70, 55][i]} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />
              <div className="flex justify-between mt-1 text-xs text-slate-400"><span>0</span><span>100</span></div>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="slider-steps" title="With steps" description="Slider with discrete step increments."
        code={`<input type="range" min={0} max={200} step={25} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Budget (step: $25k)</label>
            <input type="range" min={0} max={200} step={25} value={v2} onChange={(e) => setV2(Number(e.target.value))} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />
            <div className="flex justify-between mt-1 text-xs text-slate-400">
              {[0, 50, 100, 150, 200].map((v) => <span key={v}>${v}k</span>)}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Team size (step: 5)</label>
            <input type="range" min={1} max={50} step={5} defaultValue={15} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />
            <div className="flex justify-between mt-1 text-xs text-slate-400"><span>1</span><span>50</span></div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="slider-labeled" title="With value label" description="Slider with a live value readout."
        code={`<div className="flex justify-between mb-2">
  <label className="text-sm font-medium">Volume</label>
  <span className="text-sm font-semibold text-brand-600">{value}%</span>
</div>
<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Volume</label>
              <span className="text-sm font-semibold text-brand-600">{v1}%</span>
            </div>
            <input type="range" min={0} max={100} value={v1} onChange={(e) => setV1(Number(e.target.value))} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Budget</label>
              <span className="text-sm font-semibold text-brand-600">${v3}k</span>
            </div>
            <input type="range" min={0} max={100} value={v3} onChange={(e) => setV3(Number(e.target.value))} className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="slider-disabled" title="Disabled" description="Slider in a non-interactive disabled state."
        code={`<input type="range" disabled defaultValue={50} className="w-full h-1.5 rounded-full cursor-not-allowed opacity-50" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-400">Volume (disabled)</label>
              <span className="text-sm font-semibold text-slate-400">50%</span>
            </div>
            <input type="range" disabled defaultValue={50} className="w-full h-1.5 rounded-full cursor-not-allowed opacity-50" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-400">Budget (disabled)</label>
              <span className="text-sm font-semibold text-slate-400">$75k</span>
            </div>
            <input type="range" disabled defaultValue={75} className="w-full h-1.5 rounded-full cursor-not-allowed opacity-50" />
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="slider-colors" title="Color variants" description="Slider with semantic color accent variants."
        code={`<input type="range" className="w-full h-1.5 rounded-full accent-brand-600 cursor-pointer" />
<input type="range" className="w-full h-1.5 rounded-full accent-emerald-600 cursor-pointer" />
<input type="range" className="w-full h-1.5 rounded-full accent-rose-600 cursor-pointer" />`}>
        <div className="p-10 max-w-sm mx-auto space-y-5">
          {[
            { label: 'Brand',   cls: 'accent-brand-600',   val: 60 },
            { label: 'Success', cls: 'accent-emerald-600', val: 75 },
            { label: 'Warning', cls: 'accent-amber-500',   val: 45 },
            { label: 'Error',   cls: 'accent-rose-600',    val: 30 },
          ].map(({ label, cls, val }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{label}</label>
              <input type="range" min={0} max={100} defaultValue={val} className={`w-full h-1.5 rounded-full ${cls} cursor-pointer`} />
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
