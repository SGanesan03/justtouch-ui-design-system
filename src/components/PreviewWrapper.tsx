import { memo, useState, useCallback } from 'react';
import { Monitor, Tablet, Smartphone, Sun, Moon, Code2, Eye, Check, Copy } from 'lucide-react';
import type { ViewMode, Viewport } from '@/types';
import { VIEWPORT_WIDTH, VIEWPORT_BUTTONS, VIEW_MODES } from '@/constants';
import { useClipboard } from '@/hooks';
import { P } from '@/theme';

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
  const [viewMode,  setViewMode]  = useState<ViewMode>('preview');
  const [viewport,  setViewport]  = useState<Viewport>('desktop');
  const [localDark, setLocalDark] = useState(defaultDark);
  const { copied, copy } = useClipboard();

  const handleCopy      = useCallback(() => copy(code), [copy, code]);
  const toggleLocalDark = useCallback(() => setLocalDark((d) => !d), []);

  return (
    <div id={id} className="mb-10 scroll-mt-20">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div>
          <h3 className="text-sm font-semibold" style={{ color: localDark ? P.cream : P.forest }}>{title}</h3>
          {description && (
            <p className="text-xs mt-0.5" style={{ color: P.textMuted }}>{description}</p>
          )}
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto" role="toolbar" aria-label="Preview controls">
          {/* Preview / Code Switcher */}
          <div className="inline-flex rounded-lg p-0.5" role="group"
            style={{ border: `1px solid ${P.creamMuted}`, background: P.creamMid }}>
            {VIEW_MODES.map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                aria-pressed={viewMode === mode}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition"
                style={{
                  background: viewMode === mode ? P.cream : 'transparent',
                  color: viewMode === mode ? P.forest : P.textMuted,
                  boxShadow: viewMode === mode ? '0 1px 2px rgba(40,54,24,0.08)' : 'none',
                }}
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
            <div className="hidden md:inline-flex rounded-lg p-0.5" role="group" aria-label="Viewport size"
              style={{ border: `1px solid ${P.creamMuted}`, background: P.cream }}>
              {VIEWPORT_BUTTONS.map(({ key, label }) => {
                const Icon = VIEWPORT_ICONS[key];
                return (
                  <button
                    key={key}
                    onClick={() => setViewport(key)}
                    title={label}
                    aria-label={label}
                    aria-pressed={viewport === key}
                    className="p-1.5 rounded-md transition"
                    style={{
                      background: viewport === key ? P.creamMid : 'transparent',
                      color: viewport === key ? P.amberDark : P.textMuted,
                    }}
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
              className="p-2 rounded-lg transition"
              style={{ border: `1px solid ${P.creamMuted}`, background: P.cream, color: localDark ? P.amber : P.textMuted }}
            >
              {localDark
                ? <Sun className="w-3.5 h-3.5" style={{ color: P.amber }} />
                : <Moon className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* Copy Code */}
          <button
            onClick={handleCopy}
            aria-label={copied ? 'Code copied' : 'Copy code'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
            style={{
              border: `1px solid ${P.creamMuted}`,
              background: copied ? P.creamMid : P.cream,
              color: copied ? '#065f46' : P.amberDark,
            }}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" style={{ color: '#065f46' }} aria-hidden />
                <span>Copied!</span>
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
      <div className="rounded-2xl overflow-hidden shadow-sm"
        style={{ border: `1px solid ${P.creamMuted}`, background: P.creamMid }}>
        {viewMode === 'preview' ? (
          <div className={`${localDark ? 'dark' : ''} p-4 sm:p-6 transition-colors`}>
            <div className={`${VIEWPORT_WIDTH[viewport]} rounded-xl overflow-hidden transition-all duration-200`}
              style={{
                border: `1px solid ${localDark ? P.forestMid : P.creamMuted}`,
                background: localDark ? P.forest : '#FFFFFF',
                color: localDark ? P.cream : P.forest,
                boxShadow: '0 1px 4px rgba(40,54,24,0.06)',
              }}>
              {children}
            </div>
          </div>
        ) : (
          <div className="relative overflow-x-auto"
            style={{ background: P.forest }}>
            <pre className="text-xs sm:text-sm font-mono leading-relaxed p-4 sm:p-6"
              style={{ color: P.creamMid }}>
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
});
