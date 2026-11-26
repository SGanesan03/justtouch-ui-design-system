export const clipboardService = {
  async write(text: string): Promise<void> {
    await navigator.clipboard.writeText(text);
  },
} as const;
