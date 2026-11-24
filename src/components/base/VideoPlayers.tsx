import { memo, useState, useCallback } from 'react';
import { Play, Pause, Volume2, Maximize2, SkipForward } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const VIDEO_PLAYERS_VARIANTS: OnThisPageItem[] = [
  { id: 'vp-default',    label: 'Default' },
  { id: 'vp-minimal',    label: 'Minimal controls' },
  { id: 'vp-thumbnail',  label: 'Thumbnail grid' },
  { id: 'vp-live',       label: 'Live badge' },
  { id: 'vp-sizes',      label: 'Sizes' },
];

export const VideoPlayers = memo(function VideoPlayers() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const toggle = useCallback(() => setPlaying((p) => !p), []);

  return (
    <>
      <PreviewWrapper id="vp-default" title="Default" description="Full video player with progress bar and controls."
        code={`<div className="rounded-xl overflow-hidden bg-slate-900">
  <div className="aspect-video bg-slate-800 flex items-center justify-center">
    <button onClick={toggle} className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
      {playing ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
    </button>
  </div>
  <div className="px-4 py-3 space-y-2">
    <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} className="w-full h-1 rounded-full accent-brand-500 cursor-pointer" />
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <button onClick={toggle}>{playing ? <Pause /> : <Play />}</button>
        <span className="text-xs text-white/60">1:24 / 4:12</span>
      </div>
      <Maximize2 className="w-4 h-4 text-white/80" />
    </div>
  </div>
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="rounded-xl overflow-hidden bg-slate-900 shadow-lg w-full max-w-md">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(127,86,217,0.15),transparent_70%)]" />
              <button onClick={toggle} className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition relative z-10" aria-label={playing ? 'Pause' : 'Play'}>
                {playing ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
              </button>
            </div>
            <div className="px-4 py-3 space-y-2">
              <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} className="w-full h-1 rounded-full accent-brand-500 cursor-pointer" />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button onClick={toggle} className="text-white/80 hover:text-white transition">{playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</button>
                  <button className="text-white/80 hover:text-white transition"><SkipForward className="w-4 h-4" /></button>
                  <button className="text-white/80 hover:text-white transition"><Volume2 className="w-4 h-4" /></button>
                  <span className="text-xs text-white/60">1:24 / 4:12</span>
                </div>
                <button className="text-white/80 hover:text-white transition"><Maximize2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="vp-minimal" title="Minimal controls" description="Video player with minimal inline controls."
        code={`<div className="relative rounded-xl overflow-hidden bg-slate-900">
  <div className="aspect-video bg-slate-800" />
  <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/60 flex items-center gap-2">
    <button><Play className="w-4 h-4 text-white" /></button>
    <div className="flex-1 h-0.5 rounded-full bg-white/30"><div className="w-1/3 h-full rounded-full bg-white" /></div>
    <span className="text-xs text-white/70">1:24</span>
  </div>
</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="relative rounded-xl overflow-hidden bg-slate-900 shadow-lg w-full max-w-sm">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <Play className="w-10 h-10 text-white/40" />
            </div>
            <div className="absolute bottom-0 inset-x-0 px-3 py-2.5 bg-gradient-to-t from-black/70 flex items-center gap-2">
              <button className="text-white hover:text-white/80 transition"><Play className="w-4 h-4" /></button>
              <div className="flex-1 h-0.5 rounded-full bg-white/30">
                <div className="w-1/3 h-full rounded-full bg-white" />
              </div>
              <span className="text-xs text-white/70">1:24 / 4:12</span>
              <button className="text-white/70 hover:text-white transition"><Maximize2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="vp-thumbnail" title="Thumbnail grid" description="Video thumbnail grid for playlists and galleries."
        code={`<div className="grid grid-cols-3 gap-3">
  {videos.map((v) => (
    <div key={v} className="aspect-video rounded-lg bg-gradient-to-br ... flex items-center justify-center cursor-pointer hover:opacity-90 transition">
      <Play className="w-5 h-5 text-white/80" />
    </div>
  ))}
</div>`}>
        <div className="p-10 grid grid-cols-3 gap-3 max-w-md mx-auto">
          {[
            'from-brand-800 to-indigo-900',
            'from-emerald-800 to-teal-900',
            'from-amber-800 to-orange-900',
            'from-rose-800 to-pink-900',
            'from-slate-700 to-slate-900',
            'from-violet-800 to-purple-900',
          ].map((g, i) => (
            <div key={i} className={`aspect-video rounded-lg bg-gradient-to-br ${g} flex items-center justify-center cursor-pointer hover:opacity-90 transition relative`}>
              <Play className="w-5 h-5 text-white/80" />
              <span className="absolute bottom-1 right-1.5 text-[10px] text-white/70">4:12</span>
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="vp-live" title="Live badge" description="Video player with a live stream indicator."
        code={`<div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-rose-600 text-white text-xs font-semibold">● LIVE</div>`}>
        <div className="p-10 flex items-center justify-center">
          <div className="rounded-xl overflow-hidden bg-slate-900 shadow-lg w-full max-w-sm">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-600 text-white text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />LIVE
              </div>
              <div className="absolute top-3 right-3 text-xs text-white/60 bg-black/40 px-2 py-0.5 rounded">1,248 watching</div>
              <button onClick={toggle} className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                {playing ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
              </button>
            </div>
            <div className="px-4 py-3 flex items-center gap-3">
              <button onClick={toggle} className="text-white/80 hover:text-white transition">{playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</button>
              <div className="flex-1 h-1 rounded-full bg-white/20"><div className="w-full h-full rounded-full bg-rose-500" /></div>
              <button className="text-white/80 hover:text-white transition"><Volume2 className="w-4 h-4" /></button>
              <button className="text-white/80 hover:text-white transition"><Maximize2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="vp-sizes" title="Sizes" description="Video player at different size scales."
        code={`// SM: max-w-xs, MD: max-w-sm, LG: max-w-md`}>
        <div className="p-10 flex flex-col items-center gap-6">
          {[
            { w: 'max-w-xs', label: 'SM' },
            { w: 'max-w-sm', label: 'MD' },
            { w: 'max-w-md', label: 'LG' },
          ].map(({ w, label }) => (
            <div key={label} className={`w-full ${w}`}>
              <p className="text-xs font-medium text-slate-500 mb-2">{label}</p>
              <div className="rounded-xl overflow-hidden bg-slate-900 shadow">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white/40" />
                </div>
                <div className="px-3 py-2 flex items-center gap-2">
                  <button className="text-white/80"><Play className="w-3.5 h-3.5" /></button>
                  <div className="flex-1 h-0.5 rounded-full bg-white/20"><div className="w-1/3 h-full rounded-full bg-white" /></div>
                  <span className="text-[10px] text-white/60">1:24</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PreviewWrapper>
    </>
  );
});
