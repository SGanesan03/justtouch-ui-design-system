import { memo } from 'react';
import { Check } from 'lucide-react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const PROGRESS_STEPS_VARIANTS: OnThisPageItem[] = [
  { id: 'steps-horizontal',  label: 'Horizontal' },
  { id: 'steps-vertical',    label: 'Vertical' },
  { id: 'steps-numbered',    label: 'Numbered' },
  { id: 'steps-with-desc',   label: 'With description' },
  { id: 'steps-compact',     label: 'Compact dots' },
  { id: 'steps-panel',       label: 'Panel stepper' },
];

const ONBOARDING = [
  { step: '01', title: 'Create account',    status: 'complete' as const },
  { step: '02', title: 'Company profile',   status: 'current'  as const },
  { step: '03', title: 'Invite your team',  status: 'upcoming' as const },
  { step: '04', title: 'Choose a plan',     status: 'upcoming' as const },
];

export const ProgressSteps = memo(function ProgressSteps() {
  return (
    <>
      <PreviewWrapper id="steps-horizontal" title="Horizontal" description="Horizontal step indicator with connector lines."
        code={`<ol className="flex items-center w-full">{steps.map((s, i) => (<li key={s.title} className="flex items-center flex-1 last:flex-none">...</li>))}</ol>`}>
        <div className="p-10">
          <ol className="flex items-center w-full">
            {ONBOARDING.map((s, i) => (
              <li key={s.title} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition ${
                    s.status === 'complete' ? 'bg-brand-600 border-brand-600 text-white' :
                    s.status === 'current'  ? 'border-brand-600 text-brand-600 bg-white dark:bg-slate-900' :
                    'border-slate-300 dark:border-slate-600 text-slate-400 bg-white dark:bg-slate-900'
                  }`}>
                    {s.status === 'complete' ? <Check className="w-4 h-4" /> : s.step}
                  </div>
                  <span className={`mt-2 text-xs font-medium whitespace-nowrap ${s.status === 'current' ? 'text-brand-600' : s.status === 'complete' ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}`}>{s.title}</span>
                </div>
                {i < ONBOARDING.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-5 ${s.status === 'complete' ? 'bg-brand-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
                )}
              </li>
            ))}
          </ol>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="steps-vertical" title="Vertical" description="Vertical step list with connector lines."
        code={`<ol className="space-y-0">{steps.map((s, i) => (<li key={s.title} className="flex gap-4">...</li>))}</ol>`}>
        <div className="p-10 max-w-xs mx-auto">
          <ol>
            {ONBOARDING.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 shrink-0 ${
                    s.status === 'complete' ? 'bg-brand-600 border-brand-600 text-white' :
                    s.status === 'current'  ? 'border-brand-600 text-brand-600 bg-white dark:bg-slate-900' :
                    'border-slate-300 dark:border-slate-600 text-slate-400 bg-white dark:bg-slate-900'
                  }`}>
                    {s.status === 'complete' ? <Check className="w-4 h-4" /> : s.step}
                  </div>
                  {i < ONBOARDING.length - 1 && <div className={`w-0.5 flex-1 my-1 ${s.status === 'complete' ? 'bg-brand-600' : 'bg-slate-200 dark:bg-slate-700'}`} />}
                </div>
                <div className="pb-6">
                  <p className={`text-sm font-semibold ${s.status === 'current' ? 'text-brand-600' : s.status === 'complete' ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}`}>{s.title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="steps-numbered" title="Numbered" description="Simple numbered step indicator with top border accent."
        code={`<div className="grid grid-cols-4 gap-4">{steps.map(s => (<div key={s.title} className="pt-3 border-t-2 border-brand-600">...</div>))}</div>`}>
        <div className="p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ONBOARDING.map((s) => (
              <div key={s.title} className={`pt-3 border-t-2 ${
                s.status === 'complete' ? 'border-brand-600' :
                s.status === 'current'  ? 'border-brand-400' :
                'border-slate-200 dark:border-slate-700'
              }`}>
                <p className={`text-xs font-semibold ${s.status !== 'upcoming' ? 'text-brand-600' : 'text-slate-400'}`}>{s.step}</p>
                <p className={`text-sm font-medium mt-0.5 ${s.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="steps-with-desc" title="With description" description="Step indicator with supporting description text."
        code={`<div className="pt-3 border-t-2 border-brand-600"><p className="text-xs font-semibold text-brand-600">Step 1</p><p className="text-sm font-medium">Create account</p><p className="text-xs text-slate-500 mt-0.5">Set up your workspace</p></div>`}>
        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '01', title: 'Create account',   desc: 'Set up your workspace credentials',  status: 'complete' },
              { step: '02', title: 'Company profile',  desc: 'Add your team and organization info', status: 'current'  },
              { step: '03', title: 'Choose a plan',    desc: 'Select the right tier for your team', status: 'upcoming' },
            ].map((s) => (
              <div key={s.title} className={`p-4 rounded-xl border ${s.status === 'current' ? 'border-brand-400 bg-brand-50/30 dark:bg-brand-950/20' : 'border-slate-200 dark:border-slate-800'}`}>
                <p className={`text-xs font-semibold ${s.status !== 'upcoming' ? 'text-brand-600' : 'text-slate-400'}`}>Step {s.step}</p>
                <p className={`text-sm font-semibold mt-0.5 ${s.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="steps-compact" title="Compact dots" description="Minimal dot-based step indicator for tight layouts."
        code={`<div className="flex items-center gap-2">{steps.map((s, i) => (<span key={i} className={s.active ? 'w-6 h-2 rounded-full bg-brand-600' : 'w-2 h-2 rounded-full bg-slate-300'} />))}</div>`}>
        <div className="p-10 flex flex-col items-center gap-8">
          {[2, 3, 4].map((active) => (
            <div key={active} className="flex items-center gap-2">
              {[1,2,3,4,5].map((i) => (
                <span key={i} className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-brand-600' : i < active ? 'w-2 bg-brand-300' : 'w-2 bg-slate-200 dark:bg-slate-700'}`} />
              ))}
            </div>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="steps-panel" title="Panel stepper" description="Card-based step panel with action buttons."
        code={`<div className="p-6 rounded-xl border border-slate-200"><p className="text-xs font-semibold text-brand-600">Step 2 of 4</p><h3 className="text-base font-bold mt-1">Company profile</h3></div>`}>
        <div className="p-10 max-w-md mx-auto">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5">
            <div>
              <p className="text-xs font-semibold text-brand-600">Step 2 of 4</p>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">Company profile</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Tell us about your organization so we can personalize your experience.</p>
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Company name" className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
              <input type="text" placeholder="Team size" className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition">Back</button>
              <button className="flex-1 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">Continue</button>
            </div>
          </div>
        </div>
      </PreviewWrapper>
    </>
  );
});
