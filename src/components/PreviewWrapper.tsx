import { memo, useState, useCallback } from 'react';
import { Monitor, Tablet, Smartphone, Sun, Moon, Code2, Eye, Check, Copy } from 'lucide-react';
import type { ViewMode, Viewport } from '@/types';
import { VIEWPORT_WIDTH, VIEWPORT_BUTTONS, VIEW_MODES } from '@/constants';
import { useClipboard } from '@/hooks';

interface PreviewWrapperProps {
  id?: string;
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  defaultDark?: boolean;
}

const VIEWPORT_ICONS: Record<Viewport, React.ElementType> = {
  desktop: Monitor,
  tablet:  Tablet,
  mobile:  Smartphone,
};

export const PreviewWrapper = memo<PreviewWrapperProps>(function PreviewWrapper({
  id,
  title,
  description,
  code,
  children,
  defaultDark = false,
}) {
  const [viewMode,   setViewMode]   = useState<ViewMode>('preview');
  const [viewport,   setViewport]   = useState<Viewport>('desktop');
  const [localDark,  setLocalDark]  = useState(defaultDark);
  const { copied, copy } = useClipboard();

  const handleCopy      = useCallback(() => copy(code), [copy, code]);
  const toggleLocalDark = useCallback(() => setLocalDark((d) => !d), []);

  return (
    <div id={id} className="mb-10 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div>
          <h3 className="text-sm font-semibold text-[#223049] dark:text-[#E6E8EB]">{title}</h3>
          {description && (
            <p className="text-xs text-[#677A96] dark:text-[#8896AD] mt-0.5">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto" role="toolbar" aria-label="Preview controls">
          {/* Preview / Code Switcher */}
          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-0.5" role="group">
            {VIEW_MODES.map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                aria-pressed={viewMode === mode}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition ${
                  viewMode === mode
                    ? 'bg-white dark:bg-[#2A3A54] text-[#223049] dark:text-[#E6E8EB] shadow-sm'
                    : 'text-[#677A96] hover:text-[#223049] dark:hover:text-[#C7CEDB]'
                }`}
              >
                {mode === 'preview'
                  ? <Eye className="w-3.5 h-3.5" aria-hidden />
                  : <Code2 className="w-3.5 h-3.5" aria-hidden />}
                {mode === 'preview' ? 'Preview' : 'Code'}
              </button>
            ))}
          </div>

          {/* Viewport Switchers */}
          {viewMode === 'preview' && (
            <div className="hidden md:inline-flex rounded-lg border border-[#E6E8EB] dark:border-[#2A3A54] bg-white dark:bg-[#1A2640] p-0.5" role="group" aria-label="Viewport size">
              {VIEWPORT_BUTTONS.map(({ key, label }) => {
                const Icon = VIEWPORT_ICONS[key];
                return (
                  <button
                    key={key}
                    onClick={() => setViewport(key)}
                    title={label}
                    aria-label={label}
                    aria-pressed={viewport === key}
                    className={`p-1.5 rounded-md transition ${
                      viewport === key
                        ? 'bg-[#EDF5FF] dark:bg-[#2A3A54] text-[#3D96C8] dark:text-[#7ABEE8]'
                        : 'text-[#8896AD] hover:text-[#223049] dark:hover:text-[#C7CEDB]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden />
                  </button>
                );
              })}
            </div>
          )}

          {/* Local Theme Toggle */}
          {viewMode === 'preview' && (
            <button
              onClick={toggleLocalDark}
              aria-label={localDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              {localDark
                ? <Sun className="w-3.5 h-3.5 text-amber-400" />
                : <Moon className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* Copy Code */}
          <button
            onClick={handleCopy}
            aria-label={copied ? 'Code copied' : 'Copy code'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E8EB] dark:border-[#2A3A54] bg-white dark:bg-[#1A2640] text-xs font-semibold text-[#3D96C8] dark:text-[#7ABEE8] hover:bg-[#EDF5FF] dark:hover:bg-[#2A3A54] transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden />
                <span>Get the code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="rounded-2xl border border-[#E6E8EB] dark:border-[#2A3A54] bg-[#F4F7FB] dark:bg-[#1A2640] overflow-hidden shadow-sm">
        {viewMode === 'preview' ? (
          <div className={`${localDark ? 'dark' : ''} p-4 sm:p-6 transition-colors`}>
            <div className={`${VIEWPORT_WIDTH[viewport]} rounded-xl border border-[#E6E8EB] dark:border-[#2A3A54] bg-white dark:bg-[#1A2640] text-[#223049] dark:text-[#E6E8EB] shadow-sm overflow-hidden transition-all duration-200`}>
              {children}
            </div>
          </div>
        ) : (
          <div className="relative bg-[#16203A] text-[#E6E8EB] p-4 sm:p-6 overflow-x-auto">
            <pre className="text-xs sm:text-sm font-mono leading-relaxed text-[#C7CEDB]">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
});
