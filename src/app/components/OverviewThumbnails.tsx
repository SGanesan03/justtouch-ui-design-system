import { memo } from 'react';
import type { PreviewType } from '@justtouch/ui';
import { P } from '@justtouch/ui';

const T = {
  card:    { border: `1px solid ${P.creamMuted}`, background: P.cream },
  cardDk:  { border: `1px solid ${P.forestMid}`,  background: P.forest },
  brand:   P.olive,
  accent:  P.amber,
  accentD: P.amberDark,
  muted:   P.creamMuted,
  mutedDk: P.forestMid,
  text:    P.forest,
  textSub: P.textMuted,
};

export const OverviewThumbnail = memo<{ type: PreviewType }>(function OverviewThumbnail({ type }) {
  switch (type) {
    case 'gradient':
      return (
        <div className="w-36 h-24 rounded-lg p-2 shadow-xs" style={T.card}>
          <div className="flex gap-1.5 text-[7px] mb-1.5" style={{ color: T.textSub }}>
            <span>Solid</span>
            <span className="font-semibold" style={{ color: T.text }}>Gradient</span>
            <span>Image</span>
          </div>
          <div className="h-14 rounded-md relative"
            style={{ background: `linear-gradient(135deg, ${P.olive}, ${P.amber}, ${P.amberDark})` }}>
            <span className="w-2 h-2 rounded-full border border-white absolute top-1.5 left-1.5"
              style={{ background: P.amber }} />
          </div>
        </div>
      );

    case 'header':
    case 'page-headers':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col justify-between" style={T.card}>
          <div className="flex items-center justify-between border-b pb-1.5" style={{ borderColor: P.creamMuted }}>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: P.olive }} />
              <span className="w-8 h-1.5 rounded" style={{ background: P.creamMuted }} />
            </div>
            <span className="w-5 h-2 rounded" style={{ background: P.olive }} />
          </div>
          <div className="space-y-1.5">
            <div className="text-[8px] font-semibold" style={{ color: T.text }}>Welcome back</div>
            <div className="w-24 h-1.5 rounded" style={{ background: P.creamMuted }} />
          </div>
          <div className="h-3 rounded" style={{ background: P.creamMid }} />
        </div>
      );

    case 'image-picker':
      return (
        <div className="w-36 h-24 rounded-lg p-2 shadow-xs" style={T.card}>
          <div className="flex gap-1.5 text-[7px] mb-1.5" style={{ color: T.textSub }}>
            <span>Solid</span><span>Gradient</span>
            <span className="font-semibold" style={{ color: T.text }}>Image</span>
          </div>
          <div className="h-14 rounded-md border-dashed border-2 flex flex-col items-center justify-center"
            style={{ borderColor: P.creamMuted, background: P.creamMid }}>
            <span className="px-1.5 py-0.5 rounded text-[7px] font-medium shadow-xs"
              style={{ background: P.cream }}>Click to upload</span>
          </div>
        </div>
      );

    case 'inline-cta':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col justify-between" style={T.card}>
          <div className="text-[8px] font-semibold" style={{ color: T.text }}>Welcome back</div>
          <div className="p-2 rounded-md border flex items-center justify-between gap-2"
            style={{ borderColor: P.creamMuted, background: P.creamMid }}>
            <div className="w-7 h-7 rounded shrink-0" style={{ background: P.creamMuted }} />
            <div className="flex-1 space-y-1">
              <div className="w-full h-1.5 rounded" style={{ background: P.creamMuted }} />
              <div className="w-8 h-2 rounded" style={{ background: P.olive }} />
            </div>
          </div>
        </div>
      );

    case 'line-chart':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col justify-between" style={T.card}>
          <div className="text-[8px] font-semibold" style={{ color: T.text }}>Dashboard</div>
          <svg viewBox="0 0 120 42" className="w-full h-12 overflow-visible">
            <path d="M0 36 L20 28 L40 31 L60 18 L80 21 L100 10 L120 6"
              fill="none" stroke={P.olive} strokeWidth="2" />
            <path d="M0 40 L20 35 L40 37 L60 28 L80 30 L100 22 L120 18"
              fill="none" stroke={P.amber} strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'loading':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col" style={T.card}>
          <div className="text-[8px] font-semibold" style={{ color: T.text }}>Dashboard</div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 animate-spin"
              style={{ borderColor: P.creamMuted, borderTopColor: P.olive }} />
          </div>
        </div>
      );

    case 'messaging':
      return (
        <div className="w-40 h-24 rounded-lg p-2 shadow-xs flex justify-between gap-2" style={T.card}>
          <div className="flex-1 space-y-1.5 pt-1">
            <div className="w-12 h-1.5 rounded" style={{ background: P.creamMuted }} />
            <div className="w-16 h-1.5 rounded" style={{ background: P.creamMid }} />
          </div>
          <div className="w-16 border-l pl-1.5 flex flex-col justify-center gap-1.5"
            style={{ borderColor: P.creamMuted }}>
            <div className="self-end w-10 h-2.5 rounded" style={{ background: P.olive }} />
            <div className="self-start w-10 h-2.5 rounded" style={{ background: P.creamMid }} />
            <div className="self-end w-11 h-2.5 rounded" style={{ background: P.amber }} />
          </div>
        </div>
      );

    case 'metrics':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col justify-between" style={T.card}>
          <div className="text-[8px] font-semibold" style={{ color: T.text }}>Your stats</div>
          <div className="grid grid-cols-3 gap-1.5">
            {['2,212', '1,948', '2,864'].map((n, i) => (
              <div key={n} className="p-1 rounded border" style={{ borderColor: P.creamMuted }}>
                <div className="text-[7px] font-bold" style={{ color: T.text }}>{n}</div>
                <div className="h-1 mt-1 rounded"
                  style={{ background: i === 1 ? P.amberDark : P.olive }} />
              </div>
            ))}
          </div>
        </div>
      );

    case 'modals':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex items-center justify-center"
          style={{ ...T.card, background: P.creamMid }}>
          <div className="w-28 rounded-md border p-2 shadow-sm text-center"
            style={{ background: P.cream, borderColor: P.creamMuted }}>
            <div className="w-3 h-3 rounded-full mx-auto mb-1 flex items-center justify-center text-[7px]"
              style={{ background: '#d1fae5', color: '#065f46' }}>✓</div>
            <div className="text-[7px] font-semibold" style={{ color: T.text }}>Published!</div>
            <div className="mt-1.5 flex gap-1 justify-center">
              <span className="w-8 h-2 rounded" style={{ background: P.creamMuted }} />
              <span className="w-8 h-2 rounded" style={{ background: P.olive }} />
            </div>
          </div>
        </div>
      );

    case 'notifications':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs relative" style={T.card}>
          <div className="text-[8px] font-semibold" style={{ color: T.text }}>Welcome back</div>
          <div className="mt-2 ml-auto w-24 rounded-md border p-1.5 shadow-sm"
            style={{ borderColor: P.creamMuted, background: P.cream }}>
            <div className="w-14 h-1.5 rounded mb-1" style={{ background: P.creamMuted }} />
            <div className="flex justify-end">
              <span className="w-6 h-2 rounded" style={{ background: P.olive }} />
            </div>
          </div>
        </div>
      );

    case 'paginations':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex items-center justify-center" style={T.card}>
          <div className="inline-flex items-center gap-1 border rounded-md px-1.5 py-1 text-[7px]"
            style={{ borderColor: P.creamMuted, color: P.textMuted }}>
            <span>← Prev</span>
            <span className="px-1 rounded font-bold"
              style={{ background: P.creamMid, color: P.amberDark }}>1</span>
            <span>2</span><span>3</span>
            <span>Next →</span>
          </div>
        </div>
      );

    case 'pie-charts':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex items-center justify-between" style={T.card}>
          <div>
            <div className="text-[8px] font-semibold" style={{ color: T.text }}>Sales report</div>
            <div className="w-10 h-1.5 rounded mt-1" style={{ background: P.creamMid }} />
          </div>
          <div className="w-11 h-11 rounded-full border-[5px]"
            style={{ borderColor: P.olive, borderRightColor: P.creamMuted, borderBottomColor: P.amber }} />
        </div>
      );

    case 'progress-steps':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex items-center gap-2.5" style={T.card}>
          <div className="flex flex-col items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: P.olive }} />
            <span className="w-0.5 h-3" style={{ background: P.olive }} />
            <span className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: P.amber }} />
            <span className="w-0.5 h-3" style={{ background: P.creamMuted }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: P.creamMuted }} />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="text-[7px] font-semibold" style={{ color: T.text }}>Company details</div>
            <div className="h-2.5 rounded" style={{ background: P.creamMid }} />
            <div className="h-2.5 rounded" style={{ background: P.creamMid }} />
          </div>
        </div>
      );

    case 'radar-charts':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex items-center justify-between" style={T.card}>
          <div className="text-[8px] font-semibold self-start" style={{ color: T.text }}>Analytics</div>
          <svg viewBox="0 0 60 60" className="w-14 h-14">
            <polygon points="30,6 52,22 44,48 16,48 8,22" fill="none" stroke={P.creamMuted} strokeWidth="1" />
            <polygon points="30,12 46,24 39,43 20,41 14,24"
              fill={`${P.olive}30`} stroke={P.olive} strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'buttons':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col items-center justify-center gap-2" style={T.card}>
          <div className="flex gap-1.5">
            <span className="px-2.5 py-1 rounded text-white text-[8px] font-medium"
              style={{ background: P.olive }}>Primary</span>
            <span className="px-2.5 py-1 rounded border text-[8px] font-medium"
              style={{ borderColor: P.creamMuted, color: P.forest }}>Secondary</span>
          </div>
          <div className="flex gap-1.5">
            <span className="px-2 py-0.5 rounded text-[7px] font-medium"
              style={{ background: P.creamMid, color: P.amberDark }}>Tertiary</span>
            <span className="px-2 py-0.5 rounded text-white text-[7px] font-medium"
              style={{ background: P.amberDark }}>Action</span>
          </div>
        </div>
      );

    case 'badges':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-wrap items-center justify-center gap-1.5 content-center" style={T.card}>
          <span className="px-2 py-0.5 rounded-full text-[7px] font-medium"
            style={{ background: '#d1fae5', color: '#065f46' }}>● Active</span>
          <span className="px-2 py-0.5 rounded-full text-[7px] font-medium"
            style={{ background: P.creamMid, color: P.amberDark }}>New v4.0</span>
          <span className="px-2 py-0.5 rounded-full text-[7px] font-medium"
            style={{ background: `${P.amber}25`, color: P.amberDark }}>Pending</span>
          <span className="px-2 py-0.5 rounded-full text-[7px] font-medium"
            style={{ background: '#fee2e2', color: '#991b1b' }}>Archived</span>
        </div>
      );

    case 'inputs':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col justify-center gap-1.5" style={T.card}>
          <div className="text-[7px] font-medium" style={{ color: P.textMid }}>Work email</div>
          <div className="px-2 py-1 rounded border text-[7px]"
            style={{ borderColor: P.amber, background: P.cream, color: P.textMuted }}>
            selva@justtouch.io
          </div>
          <div className="text-[6px]" style={{ color: '#065f46' }}>✓ Available workspace domain</div>
        </div>
      );

    case 'tables':
      return (
        <div className="w-40 h-24 rounded-lg p-2 shadow-xs flex flex-col justify-between" style={T.card}>
          <div className="h-2.5 rounded" style={{ background: P.creamMid }} />
          <div className="space-y-1.5">
            {[[P.creamMuted, '#d1fae5'], [P.creamMuted, P.creamMid], [P.creamMuted, `${P.amber}30`]].map(([bg, badge], i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="w-14 h-1.5 rounded" style={{ background: bg }} />
                <span className="w-6 h-2 rounded-full" style={{ background: badge }} />
              </div>
            ))}
          </div>
        </div>
      );

    case 'hero':
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col justify-center gap-1.5" style={T.card}>
          <div className="text-[9px] font-bold" style={{ color: T.text }}>Build faster UI</div>
          <div className="w-20 h-1.5 rounded" style={{ background: P.creamMuted }} />
          <div className="flex gap-1.5 mt-1">
            <span className="px-2 py-0.5 rounded text-white text-[7px]" style={{ background: P.olive }}>Get started</span>
            <span className="px-2 py-0.5 rounded border text-[7px]" style={{ borderColor: P.creamMuted, color: P.textMuted }}>Docs</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-40 h-24 rounded-lg p-2.5 shadow-xs flex flex-col items-center justify-center text-center" style={T.card}>
          <span className="text-[6px] font-semibold" style={{ color: P.amberDark }}>About us</span>
          <div className="text-[9px] font-bold mt-0.5" style={{ color: T.text }}>About the company</div>
          <div className="w-20 h-1 rounded mt-1.5" style={{ background: P.creamMuted }} />
        </div>
      );
  }
});
