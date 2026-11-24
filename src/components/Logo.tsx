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
        className={`${LOGO_BOX_SIZES[size]} relative flex items-center justify-center bg-gradient-to-br from-[#7ABEE8] via-[#3D96C8] to-[#223049] shadow-sm ring-1 ring-inset ring-white/20 overflow-hidden`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.45),transparent_60%)]" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`${LOGO_ICON_SIZES[size]} text-white relative z-10`}
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
        <span className={`${LOGO_TEXT_SIZES[size]} font-semibold tracking-tight text-[#223049] dark:text-[#E6E8EB]`}>
          JustTouch UI
        </span>
      )}

      {badge && (
        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#EDF5FF] text-[#3D96C8] border border-[#B3D8F5] dark:bg-[#2A3A54] dark:text-[#7ABEE8] dark:border-[#384A66]">
          {badge}
        </span>
      )}
    </div>
  );
});
