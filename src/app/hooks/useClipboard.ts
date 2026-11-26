import { useState, useCallback, useRef, useEffect } from 'react';
import { clipboardService } from '@services';
import { CLIPBOARD_RESET_MS } from '@constants';

export function useClipboard(resetMs = CLIPBOARD_RESET_MS) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const copy = useCallback(
    (text: string) => {
      clipboardService.write(text).then(() => {
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), resetMs);
      });
    },
    [resetMs],
  );

  return { copied, copy } as const;
}
