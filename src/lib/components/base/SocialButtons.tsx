import { memo } from 'react';
import { PreviewWrapper } from '@components/PreviewWrapper';
import type { OnThisPageItem } from '@justtouch/ui';

export const SOCIAL_BUTTONS_VARIANTS: OnThisPageItem[] = [
  { id: 'social-default',   label: 'Default' },
  { id: 'social-icon-only', label: 'Icon only' },
  { id: 'social-dark',      label: 'Dark background' },
  { id: 'social-full',      label: 'Full sign-in flow' },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const SOCIALS = [
  { name: 'Google', Icon: GoogleIcon },
  { name: 'GitHub', Icon: GitHubIcon },
  { name: 'Apple',  Icon: AppleIcon },
];

export const SocialButtons = memo(function SocialButtons() {
  return (
    <>
      <PreviewWrapper id="social-default" title="Default" description="OAuth sign-in buttons with icon and label."
        code={`<button className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition shadow-xs">
  <GoogleIcon />Continue with Google
</button>`}>
        <div className="p-10 max-w-xs mx-auto space-y-3">
          {SOCIALS.map(({ name, Icon }) => (
            <button key={name} className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">
              <Icon />Continue with {name}
            </button>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="social-icon-only" title="Icon only" description="Compact icon-only OAuth buttons."
        code={`<button className="p-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition shadow-xs">
  <GoogleIcon />
</button>`}>
        <div className="p-10 flex items-center justify-center gap-3">
          {SOCIALS.map(({ name, Icon }) => (
            <button key={name} aria-label={`Sign in with ${name}`} className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">
              <Icon />
            </button>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="social-dark" title="Dark background" description="OAuth buttons on a dark surface."
        code={`<button className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition">
  <GoogleIcon />Continue with Google
</button>`}>
        <div className="p-10 max-w-xs mx-auto space-y-3 bg-slate-900 rounded-2xl">
          {SOCIALS.map(({ name, Icon }) => (
            <button key={name} className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition">
              <Icon />Continue with {name}
            </button>
          ))}
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="social-full" title="Full sign-in flow" description="Complete sign-in layout with social buttons and email option."
        code={`<div className="space-y-3">
  {socials.map(({ name, Icon }) => (
    <button key={name} className="w-full ...">Continue with {name}</button>
  ))}
  <div className="relative flex items-center gap-3 py-1">
    <div className="flex-1 h-px bg-slate-200" /><span className="text-xs text-slate-400">or</span><div className="flex-1 h-px bg-slate-200" />
  </div>
  <button className="w-full px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold">Continue with email</button>
</div>`}>
        <div className="p-10 max-w-xs mx-auto space-y-3">
          {SOCIALS.map(({ name, Icon }) => (
            <button key={name} className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-xs">
              <Icon />Continue with {name}
            </button>
          ))}
          <div className="relative flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs text-slate-400">or</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
          </div>
          <button className="w-full px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">Continue with email</button>
        </div>
      </PreviewWrapper>
    </>
  );
});
