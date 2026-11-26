import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { PreviewWrapper } from '@components/PreviewWrapper';

// ─── Shared data ─────────────────────────────────────────────────────────────

const COLORS = [
  { key: 'gray',    badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',   dot: 'bg-slate-500',   border: 'border-slate-200 dark:border-slate-700' },
  { key: 'brand',   badge: 'bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300', dot: 'bg-brand-500',   border: 'border-brand-200 dark:border-brand-800' },
  { key: 'error',   badge: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',     dot: 'bg-rose-500',    border: 'border-rose-200 dark:border-rose-800' },
  { key: 'warning', badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300', dot: 'bg-amber-500',   border: 'border-amber-200 dark:border-amber-800' },
  { key: 'success', badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300', dot: 'bg-emerald-500', border: 'border-emerald-200 dark:border-emerald-800' },
] as const;

type ColorKey = (typeof COLORS)[number]['key'];

function getColor(key: ColorKey) {
  return COLORS.find((c) => c.key === key)!;
}

// ─── Pill variants ────────────────────────────────────────────────────────────

function PillLeading({ colorKey }: { colorKey: ColorKey }) {
  const c = getColor(colorKey);
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${c.badge} ${c.border}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
        New feature
        <span className="text-slate-400 dark:text-slate-500 mx-1">·</span>
        We've just released a new feature
        <ArrowRight className="w-3 h-3 ml-0.5" />
      </span>
    </div>
  );
}

function PillTrailing({ colorKey }: { colorKey: ColorKey }) {
  const c = getColor(colorKey);
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${c.badge} ${c.border}`}>
        We've just released a new feature
        <ArrowRight className="w-3 h-3 ml-0.5" />
        <span className="text-slate-400 dark:text-slate-500 mx-1">·</span>
        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
        New feature
      </span>
    </div>
  );
}

// ─── Modern (pill-in-pill) variants ──────────────────────────────────────────

function ModernLeading({ colorKey }: { colorKey: ColorKey }) {
  const c = getColor(colorKey);
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xs w-fit">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${c.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
          New feature
        </span>
        <span className="text-xs text-slate-600 dark:text-slate-300">We've just released a new feature</span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
      </div>
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs w-fit">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${c.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
          New feature
        </span>
        <span className="text-xs text-slate-600 dark:text-slate-300">We've just released a new feature</span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
      </div>
    </div>
  );
}

function ModernTrailing({ colorKey }: { colorKey: ColorKey }) {
  const c = getColor(colorKey);
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xs w-fit">
        <span className="text-xs text-slate-600 dark:text-slate-300">We've just released a new feature</span>
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${c.badge}`}>
          New feature
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
      </div>
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs w-fit">
        <span className="text-xs text-slate-600 dark:text-slate-300">We've just released a new feature</span>
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${c.badge}`}>
          New feature
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
      </div>
    </div>
  );
}

// ─── Variant registry ─────────────────────────────────────────────────────────

export const BADGE_GROUP_VARIANTS: { id: string; label: string }[] = [
  { id: 'pill-leading-gray',      label: 'Pill color leading gray' },
  { id: 'pill-leading-brand',     label: 'Pill color leading brand' },
  { id: 'pill-leading-error',     label: 'Pill color leading error' },
  { id: 'pill-leading-warning',   label: 'Pill color leading warning' },
  { id: 'pill-leading-success',   label: 'Pill color leading success' },
  { id: 'pill-trailing-gray',     label: 'Pill color trailing gray' },
  { id: 'pill-trailing-brand',    label: 'Pill color trailing brand' },
  { id: 'pill-trailing-error',    label: 'Pill color trailing error' },
  { id: 'pill-trailing-warning',  label: 'Pill color trailing warning' },
  { id: 'pill-trailing-success',  label: 'Pill color trailing success' },
  { id: 'modern-leading-gray',    label: 'Modern leading gray' },
  { id: 'modern-leading-brand',   label: 'Modern leading brand' },
  { id: 'modern-leading-error',   label: 'Modern leading error' },
  { id: 'modern-leading-warning', label: 'Modern leading warning' },
  { id: 'modern-leading-success', label: 'Modern leading success' },
  { id: 'modern-trailing-gray',   label: 'Modern trailing gray' },
  { id: 'modern-trailing-brand',  label: 'Modern trailing brand' },
  { id: 'modern-trailing-error',  label: 'Modern trailing error' },
  { id: 'modern-trailing-warning','label': 'Modern trailing warning' },
  { id: 'modern-trailing-success','label': 'Modern trailing success' },
];

const PILL_LEADING_CODE = (color: string) =>
  `<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-${color}-50 text-${color}-700 border-${color}-200">
  <span className="w-1.5 h-1.5 rounded-full bg-${color}-500" />
  New feature · We've just released a new feature <ArrowRight className="w-3 h-3" />
</span>`;

const MODERN_LEADING_CODE = (color: string) =>
  `<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white border border-slate-200 shadow-xs">
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-${color}-50 text-${color}-700">
    <span className="w-1.5 h-1.5 rounded-full bg-${color}-500" />New feature
  </span>
  <span className="text-xs text-slate-600">We've just released a new feature</span>
  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
</div>`;

// ─── Main export ──────────────────────────────────────────────────────────────

export const BadgeGroups = memo(function BadgeGroups() {
  return (
    <>
      {/* ── Pill leading ── */}
      {(['gray', 'brand', 'error', 'warning', 'success'] as ColorKey[]).map((key) => (
        <PreviewWrapper
          key={`pill-leading-${key}`}
          id={`pill-leading-${key}`}
          title={`Pill color leading ${key}`}
          description={`Badge group with a leading ${key} dot indicator and arrow CTA.`}
          code={PILL_LEADING_CODE(key === 'gray' ? 'slate' : key === 'error' ? 'rose' : key === 'warning' ? 'amber' : key === 'success' ? 'emerald' : key)}
        >
          <div className="p-8 flex items-center justify-center">
            <PillLeading colorKey={key} />
          </div>
        </PreviewWrapper>
      ))}

      {/* ── Pill trailing ── */}
      {(['gray', 'brand', 'error', 'warning', 'success'] as ColorKey[]).map((key) => (
        <PreviewWrapper
          key={`pill-trailing-${key}`}
          id={`pill-trailing-${key}`}
          title={`Pill color trailing ${key}`}
          description={`Badge group with a trailing ${key} dot indicator and arrow CTA.`}
          code={PILL_LEADING_CODE(key === 'gray' ? 'slate' : key === 'error' ? 'rose' : key === 'warning' ? 'amber' : key === 'success' ? 'emerald' : key)}
        >
          <div className="p-8 flex items-center justify-center">
            <PillTrailing colorKey={key} />
          </div>
        </PreviewWrapper>
      ))}

      {/* ── Modern leading ── */}
      {(['gray', 'brand', 'error', 'warning', 'success'] as ColorKey[]).map((key) => (
        <PreviewWrapper
          key={`modern-leading-${key}`}
          id={`modern-leading-${key}`}
          title={`Modern leading ${key}`}
          description={`Pill-in-pill badge group with a leading ${key} inner badge.`}
          code={MODERN_LEADING_CODE(key === 'gray' ? 'slate' : key === 'error' ? 'rose' : key === 'warning' ? 'amber' : key === 'success' ? 'emerald' : key)}
        >
          <div className="p-8 flex items-center justify-center">
            <ModernLeading colorKey={key} />
          </div>
        </PreviewWrapper>
      ))}

      {/* ── Modern trailing ── */}
      {(['gray', 'brand', 'error', 'warning', 'success'] as ColorKey[]).map((key) => (
        <PreviewWrapper
          key={`modern-trailing-${key}`}
          id={`modern-trailing-${key}`}
          title={`Modern trailing ${key}`}
          description={`Pill-in-pill badge group with a trailing ${key} inner badge.`}
          code={MODERN_LEADING_CODE(key === 'gray' ? 'slate' : key === 'error' ? 'rose' : key === 'warning' ? 'amber' : key === 'success' ? 'emerald' : key)}
        >
          <div className="p-8 flex items-center justify-center">
            <ModernTrailing colorKey={key} />
          </div>
        </PreviewWrapper>
      ))}
    </>
  );
});
