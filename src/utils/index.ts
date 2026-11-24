/**
 * Merges class strings, filtering out falsy values.
 * Lightweight alternative to clsx/classnames with no dependency.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Returns a pluralised label for a component count.
 * e.g. formatCount(1) → "1 component", formatCount(14) → "14 components"
 */
export function formatCount(n: number): string {
  return `${n} ${n === 1 ? 'component' : 'components'}`;
}

/**
 * Clamps a number between min and max (inclusive).
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Truncates a string to maxLength and appends an ellipsis if needed.
 */
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;
}

/**
 * Returns true if the string matches the query (case-insensitive).
 */
export function matchesSearch(value: string, query: string): boolean {
  return value.toLowerCase().includes(query.toLowerCase());
}
