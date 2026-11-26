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
  id, title, description, code, children, defaultDark = false,
}) {
  const [viewMode,  setViewMode]  = useState<ViewMode>('preview');
  const [viewport,  setViewport]  = useState<Viewport>('desktop');
  const [localDark, setLocalDark] = useState(defaultDark);
  const { copied, copy } = useClipboard();

  const handleCopy      = useCallback(() => copy(code), [copy, code]);
  const toggleLocalDark = useCallback(() => setLocalDark((d) => !d), []);

  return (
    <div id={id} className="mb-12 scroll-mt-20">

      {/* Title + description */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold" style={{ color: localDark ? P.textLight : P.textDark }}>
          {title}
        </h3>
        {description && (
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: P.textMuted }}>{description}</p>
        )}
      </div>

      {/* Canvas with integrated toolbar as top bar */}
      <div className="rounded-xl overflow-hidden"
        style={{ border: `1px solid ${P.creamMuted}`, background: '#FFFFFF' }}>

        {/* Toolbar — tab-style, flush to canvas top */}
        <div className="flex items-center justify-between px-3 py-0"
          style={{
            borderBottom: `1px solid ${P.creamMuted}`,
            background: P.cream,
            height: 38,
          }}>

          {/* Left: Preview / Code tabs */}
          <div className="flex items-stretch h-full" role="group" aria-label="View mode">
            {VIEW_MODES.map((mode) => (
              <button key={mode}
                onClick={() => setViewMode(mode)}
                aria-pressed={viewMode === mode}
                className="inline-flex items-center gap-1.5 px-3 text-xs font-medium transition border-b-2"
                style={{
                  borderColor: viewMode === mode ? P.olive : 'transparent',
                  color: viewMode === mode ? P.olive : P.textMuted,
                  background: 'transparent',
                }}>
                {mode === 'preview'
                  ? <Eye className="w-3.5 h-3.5" aria-hidden />
                  : <Code2 className="w-3.5 h-3.5" aria-hidden />}
                {mode === 'preview' ? 'Preview' : 'Code'}
              </button>
            ))}
          </div>

          {/* Right: viewport + theme + copy */}
          <div className="flex items-center gap-1">
            {viewMode === 'preview' && (
              <>
                {/* Viewport icons */}
                <div className="hidden md:flex items-center gap-0.5 mr-1">
                  {VIEWPORT_BUTTONS.map(({ key, label }) => {
                    const Icon = VIEWPORT_ICONS[key];
                    return (
                      <button key={key} onClick={() => setViewport(key)}
                        title={label} aria-label={label} aria-pressed={viewport === key}
                        className="p-1.5 rounded transition"
                        style={{ color: viewport === key ? P.olive : P.textMuted }}>
                        <Icon className="w-3.5 h-3.5" aria-hidden />
                      </button>
                    );
                  })}
                </div>

                {/* Theme toggle */}
                <button onClick={toggleLocalDark}
                  aria-label={localDark ? 'Light mode' : 'Dark mode'}
                  className="p-1.5 rounded transition"
                  style={{ color: localDark ? P.amberDark : P.textMuted }}>
                  {localDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </button>

                <div className="w-px h-4 mx-1" style={{ background: P.creamMuted }} />
              </>
            )}

            {/* Copy button */}
            <button onClick={handleCopy}
              aria-label={copied ? 'Copied' : 'Copy code'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition"
              style={{
                background: copied ? '#d1fae5' : `${P.amberDark}12`,
                color: copied ? '#065f46' : P.amberDark,
              }}>
              {copied
                ? <><Check className="w-3 h-3" aria-hidden /> Copied</>
                : <><Copy className="w-3 h-3" aria-hidden /> Copy</>}
            </button>
          </div>
        </div>

        {/* Canvas body */}
        {viewMode === 'preview' ? (
          <div className={`${localDark ? 'dark' : ''} p-5 sm:p-7`}
            style={{ background: localDark ? P.forest : '#FAFAFA' }}>
            <div className={`${VIEWPORT_WIDTH[viewport]} rounded-lg overflow-hidden transition-all duration-200`}
              style={{
                border: `1px solid ${localDark ? P.forestMid : P.creamMuted}`,
                background: localDark ? P.forestMid : '#FFFFFF',
                color: localDark ? P.textLight : P.textDark,
              }}>
              {children}
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto" style={{ background: '#18181B' }}>
            <pre className="text-xs sm:text-sm font-mono leading-relaxed p-5 sm:p-7"
              style={{ color: '#E4E4E7' }}>
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
});
