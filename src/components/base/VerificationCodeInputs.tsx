import { memo, useState, useRef } from 'react';
import { PreviewWrapper } from '@/components/PreviewWrapper';
import type { OnThisPageItem } from '@/components/OnThisPage';

export const VERIFICATION_VARIANTS: OnThisPageItem[] = [
  { id: 'otp-6digit',  label: '6-digit OTP' },
  { id: 'otp-4digit',  label: '4-digit PIN' },
  { id: 'otp-filled',  label: 'Filled state' },
  { id: 'otp-error',   label: 'Error state' },
  { id: 'otp-success', label: 'Success state' },
];

function OTPInput({ length = 6, type = 'text', state = 'default' }: { length?: number; type?: string; state?: 'default' | 'error' | 'success' }) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    const next = [...otp]; next[i] = digit; setOtp(next);
    if (digit && i < length - 1) refs.current[i + 1]?.focus();
  };
  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) refs.current[i - 1]?.focus();
  };
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length).split('');
    const next = [...otp]; digits.forEach((d, i) => { next[i] = d; }); setOtp(next);
    refs.current[Math.min(digits.length, length - 1)]?.focus();
  };

  const borderCls = state === 'error' ? 'border-rose-400 focus:ring-rose-500' : state === 'success' ? 'border-emerald-400 focus:ring-emerald-500' : 'border-slate-300 dark:border-slate-600 focus:ring-brand-500';

  return (
    <div className="flex gap-2" onPaste={handlePaste}>
      {otp.map((digit, i) => (
        <input key={i} ref={(el) => { refs.current[i] = el; }} type={type} inputMode="numeric" maxLength={1} value={digit}
          onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)}
          className={`w-11 h-12 text-center text-lg font-semibold rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition ${borderCls} ${digit ? 'border-brand-400' : ''}`} />
      ))}
    </div>
  );
}

export const VerificationCodeInputs = memo(function VerificationCodeInputs() {
  return (
    <>
      <PreviewWrapper id="otp-6digit" title="6-digit OTP" description="6-digit one-time password input with auto-advance and paste support."
        code={`const [otp, setOtp] = useState(Array(6).fill(''));
// Auto-advance on input, backspace to go back, paste support

<div className="flex gap-2">
  {otp.map((digit, i) => (
    <input key={i} type="text" inputMode="numeric" maxLength={1} value={digit}
      className="w-11 h-12 text-center text-lg font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500" />
  ))}
</div>`}>
        <div className="p-10 flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enter the 6-digit code sent to your email</p>
          <OTPInput length={6} />
          <button className="text-xs text-brand-600 hover:underline">Resend code</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="otp-4digit" title="4-digit PIN" description="4-digit PIN entry with masked input."
        code={`<div className="flex gap-2">
  {Array(4).fill('').map((_, i) => (
    <input key={i} type="password" inputMode="numeric" maxLength={1}
      className="w-11 h-12 text-center text-lg font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500" />
  ))}
</div>`}>
        <div className="p-10 flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enter your 4-digit PIN</p>
          <OTPInput length={4} type="password" />
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="otp-filled" title="Filled state" description="OTP input with all digits entered."
        code={`// All inputs filled — show verify button`}>
        <div className="p-10 flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Code entered</p>
          <div className="flex gap-2">
            {['4', '2', '8', '1', '9', '3'].map((d, i) => (
              <div key={i} className="w-11 h-12 flex items-center justify-center text-lg font-semibold rounded-xl border border-brand-400 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{d}</div>
            ))}
          </div>
          <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">Verify code</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="otp-error" title="Error state" description="OTP input with an invalid code error."
        code={`// Show error border and message when code is invalid`}>
        <div className="p-10 flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Enter the 6-digit code</p>
          <div className="flex gap-2">
            {['1', '2', '3', '4', '5', '6'].map((d, i) => (
              <div key={i} className="w-11 h-12 flex items-center justify-center text-lg font-semibold rounded-xl border border-rose-400 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300">{d}</div>
            ))}
          </div>
          <p className="text-xs text-rose-600">Invalid code. Please try again.</p>
          <button className="text-xs text-brand-600 hover:underline">Resend code</button>
        </div>
      </PreviewWrapper>

      <PreviewWrapper id="otp-success" title="Success state" description="OTP input after successful verification."
        code={`// Show success state after code is verified`}>
        <div className="p-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600 fill-none stroke-current stroke-2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Verification successful</p>
          <div className="flex gap-2">
            {['4', '2', '8', '1', '9', '3'].map((d, i) => (
              <div key={i} className="w-11 h-12 flex items-center justify-center text-lg font-semibold rounded-xl border border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300">{d}</div>
            ))}
          </div>
          <p className="text-xs text-emerald-600">✓ Your identity has been verified.</p>
        </div>
      </PreviewWrapper>
    </>
  );
});
