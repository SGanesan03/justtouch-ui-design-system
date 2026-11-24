// ─── Navigation / Catalog ────────────────────────────────────────────────────

export interface ComponentVariant {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly code: string;
}

export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly count?: number;
  readonly badge?: string;
  readonly description: string;
}

export interface NavCategory {
  readonly id: string;
  readonly title: string;
  readonly items: readonly NavItem[];
}

/** Flat nav item enriched with parent category metadata */
export type FlatNavItem = NavItem & {
  readonly categoryId: string;
  readonly categoryTitle: string;
};

export interface OverviewCardItem {
  readonly id: string;
  readonly category: string;
  readonly title: string;
  readonly count: string;
  readonly previewType: PreviewType;
}

// ─── Preview ─────────────────────────────────────────────────────────────────

export const PREVIEW_TYPES = [
  'gradient', 'header', 'image-picker', 'inline-cta', 'line-chart',
  'loading', 'messaging', 'metrics', 'modals', 'notifications',
  'page-headers', 'paginations', 'pie-charts', 'progress-steps',
  'radar-charts', 'buttons', 'tables', 'inputs', 'badges', 'hero',
] as const;

export type PreviewType = (typeof PREVIEW_TYPES)[number];

export type ViewMode = 'preview' | 'code';
export type Viewport  = 'desktop' | 'tablet' | 'mobile';
export type AppView   = 'landing' | 'docs';
export type LogoSize  = 'sm' | 'md' | 'lg';

// ─── Chat ────────────────────────────────────────────────────────────────────

export interface ChatMessage {
  readonly sender: string;
  readonly text: string;
  readonly time: string;
  readonly me: boolean;
}
