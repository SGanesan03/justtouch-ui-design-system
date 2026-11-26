import { memo } from 'react';
import type { LogoSize } from '@justtouch/ui';
import { LOGO_BOX_SIZES, LOGO_TEXT_SIZES, LOGO_ICON_SIZES } from '@constants';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: LogoSize;
  showText?: boolean;
  badge?: string;
}

export const JustTouchLogo = memo<LogoProps>(function JustTouchLogo({
  size = 'md',
  showText = true,
  badge,
  className = '',
  ...rest
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`} {...rest}>
      <div
        className={`${LOGO_BOX_SIZES[size]} relative flex items-center justify-center shadow-sm ring-1 ring-inset ring-white/10 overflow-hidden`}
        style={{ background: '#0E0E14' }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className={`${LOGO_ICON_SIZES[size]} relative z-10`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="jt-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7B5CF5" />
              <stop offset="100%" stopColor="#C84B8F" />
            </linearGradient>
            <linearGradient id="jt-b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9B6FF5" />
              <stop offset="100%" stopColor="#5B3FD4" />
            </linearGradient>
            <linearGradient id="jt-c" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#C84B8F" />
              <stop offset="100%" stopColor="#7B5CF5" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* back-left rect */}
          <rect x="3" y="5" width="14" height="16" rx="3" fill="url(#jt-b)" opacity="0.55" />
          {/* top-right pill */}
          <rect x="14" y="4" width="15" height="7" rx="3.5" fill="url(#jt-a)" opacity="0.9" />
          {/* center rect */}
          <rect x="8" y="9" width="13" height="13" rx="3" fill="url(#jt-a)" opacity="0.75" />
          {/* bottom-right rect */}
          <rect x="15" y="16" width="13" height="12" rx="3" fill="url(#jt-c)" opacity="0.85" />
          {/* small bottom-left circle accent */}
          <circle cx="7" cy="26" r="3" fill="url(#jt-b)" opacity="0.8" />
        </svg>
      </div>

      {showText && (
        <span className={`${LOGO_TEXT_SIZES[size]} font-semibold tracking-tight`}
          style={{ color: 'inherit' }}>
          JustTouch UI
        </span>
      )}

      {badge && (
        <span className="px-2 py-0.5 text-xs font-medium rounded-full"
          style={{ background: '#FBF6E9', color: '#C6A24B', border: '1px solid #E4E4E7' }}>
          {badge}
        </span>
      )}
    </div>
  );
});
