import { memo } from 'react';
import type { LogoSize } from '@/types';
import { LOGO_BOX_SIZES, LOGO_TEXT_SIZES, LOGO_ICON_SIZES } from '@/constants';

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
        className={`${LOGO_BOX_SIZES[size]} relative flex items-center justify-center shadow-sm ring-1 ring-inset ring-white/20 overflow-hidden`}
        style={{ background: 'linear-gradient(135deg, #506C38 0%, #3D5429 50%, #283618 100%)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 25%, rgba(254,250,224,0.35), transparent 60%)' }} />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`${LOGO_ICON_SIZES[size]} relative z-10`}
          style={{ color: '#DDA15E' }}
          aria-hidden="true"
        >
          <path
            d="M7 14.5C7 16.9853 9.01472 19 11.5 19C13.9853 19 16 16.9853 16 14.5V6.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="16" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>

      {showText && (
        <span className={`${LOGO_TEXT_SIZES[size]} font-semibold tracking-tight`}
          style={{ color: '#283618' }}>
          JustTouch UI
        </span>
      )}

      {badge && (
        <span className="px-2 py-0.5 text-xs font-medium rounded-full"
          style={{ background: '#F5F0CC', color: '#BC6C25', border: '1px solid #E8E0A8' }}>
          {badge}
        </span>
      )}
    </div>
  );
});
