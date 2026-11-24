import type { Viewport, ViewMode, LogoSize } from '@/types';

// ─── Theme ───────────────────────────────────────────────────────────────────

export const THEME_STORAGE_KEY = 'jt-theme' as const;

// ─── CLI ─────────────────────────────────────────────────────────────────────

export const INSTALL_CMD = 'npx justtouch-ui@latest init' as const;

// ─── Clipboard ───────────────────────────────────────────────────────────────

export const CLIPBOARD_RESET_MS = 2000 as const;

// ─── Navigation defaults ─────────────────────────────────────────────────────

export const DEFAULT_PAGE_ID = 'overview' as const;

export const DEFAULT_OPEN_CATEGORIES: Record<string, boolean> = {
  'base-components':            true,
  'application-ui-components':  true,
  'application-ui-examples':    false,
  'shared-page-examples':       false,
  'marketing-components':       false,
  'marketing-examples':         false,
};

// ─── Preview Wrapper ─────────────────────────────────────────────────────────

export const VIEWPORT_WIDTH: Record<Viewport, string> = {
  mobile:  'max-w-[390px] mx-auto',
  tablet:  'max-w-[768px] mx-auto',
  desktop: 'w-full',
};

export const VIEWPORT_BUTTONS: {
  key: Viewport;
  label: string;
}[] = [
  { key: 'desktop', label: 'Desktop view' },
  { key: 'tablet',  label: 'Tablet view'  },
  { key: 'mobile',  label: 'Mobile view'  },
];

export const VIEW_MODES: ViewMode[] = ['preview', 'code'];

// ─── Logo ────────────────────────────────────────────────────────────────────

export const LOGO_BOX_SIZES: Record<LogoSize, string> = {
  sm: 'w-7 h-7 rounded-lg',
  md: 'w-8 h-8 rounded-lg',
  lg: 'w-12 h-12 rounded-2xl',
};

export const LOGO_TEXT_SIZES: Record<LogoSize, string> = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-2xl',
};

export const LOGO_ICON_SIZES: Record<LogoSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-4 h-4',
  lg: 'w-7 h-7',
};

// ─── Landing Page ─────────────────────────────────────────────────────────────

export const LANDING_STATS = [
  { label: 'Total Components',    value: '240+',       delta: '+18 this release',          page: 'overview'    },
  { label: 'Application UI',      value: '86 blocks',  delta: 'Charts, Tables, Modals',    page: 'tables'      },
  { label: 'Marketing Sections',  value: '64 blocks',  delta: 'Heroes, Pricing, About',    page: 'about-pages' },
  { label: 'Design Tokens',       value: '100% Typed', delta: 'Tailwind + CSS Vars',       page: 'colors'      },
] as const;

export const LANDING_NAV_LINKS = [
  { label: 'Components', page: 'overview'      },
  { label: 'Docs',       page: 'introduction'  },
  { label: 'Templates',  page: 'dashboards'    },
  { label: 'Pricing',    page: 'pricing-pages' },
  { label: 'Icons',      page: 'icons'         },
] as const;

// ─── Component Demo ───────────────────────────────────────────────────────────

export const GRADIENT_PRESETS = [
  'from-[#7ABEE8] via-[#3D96C8] to-[#223049]',
  'from-emerald-400 via-teal-500 to-cyan-700',
  'from-rose-400 via-pink-500 to-purple-700',
  'from-amber-400 via-orange-500 to-rose-600',
] as const;

export const DEFAULT_GRADIENT = GRADIENT_PRESETS[0];

export const SETTINGS_TABS = ['Profile', 'Team', 'Billing', 'API Keys'] as const;

export const PROGRESS_STEPS = [
  { step: 'Step 1', title: 'Your details',    status: 'complete' },
  { step: 'Step 2', title: 'Company profile', status: 'current'  },
  { step: 'Step 3', title: 'Invite your team',status: 'upcoming' },
] as const;

export const FAQ_ITEMS = [
  {
    q: 'Is JustTouch UI free to use in commercial React projects?',
    a: 'Yes! You can copy, customize, and deploy JustTouch UI components across unlimited client and commercial applications.',
  },
  {
    q: 'Does it support Tailwind CSS dark mode out of the box?',
    a: 'Every component includes dark: utility variants and works seamlessly with class-based dark mode.',
  },
  {
    q: 'Can I use JustTouch UI with Vite and Next.js?',
    a: 'Yes, all components are pure React + TypeScript TSX files compatible with Vite, Next.js, and Remix.',
  },
] as const;

export const PRICING_TIERS = [
  { name: 'Starter',    monthlyPrice: '₹0',     annualPrice: '₹0',     desc: 'Open-source base components & icons',       featured: false },
  { name: 'Pro Team',   monthlyPrice: '₹1,999', annualPrice: '₹1,499', desc: 'All 240+ React blocks & Figma UI kit',      featured: true  },
  { name: 'Enterprise', monthlyPrice: '₹6,499', annualPrice: '₹4,999', desc: 'Unlimited seats, custom tokens & SLA',      featured: false },
] as const;

export const TEAM_MEMBERS = [
  { name: 'Selvaraj K',     role: 'Lead Frontend Architect',   status: 'Active',    team: 'Design Systems', email: 'selva@justtouch.io'  },
  { name: 'Priya Nair',     role: 'Senior UI Engineer',        status: 'Active',    team: 'Core Components',email: 'priya@justtouch.io'  },
  { name: 'Arjun Menon',    role: 'Product Designer',          status: 'In Review', team: 'Figma Tokens',   email: 'arjun@justtouch.io'  },
  { name: 'Divya Krishnan', role: 'Accessibility Specialist',  status: 'Active',    team: 'QA & ARIA',      email: 'divya@justtouch.io'  },
] as const;

export const KPI_METRICS = [
  { title: 'Monthly Recurring Revenue', val: '₹18,42,500', delta: '+14.2%', up: true },
  { title: 'Active Workspace Teams',    val: '2,840',       delta: '+8.4%',  up: true },
  { title: 'Avg. Bundle Load Time',     val: '112 ms',      delta: '-19.0%', up: true },
] as const;

export const COMPANY_STATS = [
  { num: '400+',  label: 'Projects shipped'           },
  { num: '600%',  label: 'Return on design velocity'  },
  { num: '10k+',  label: 'Global developers'          },
  { num: '200+',  label: '5-star reviews'             },
] as const;

export const INITIAL_CHAT_MESSAGES = [
  { sender: 'Ananya', text: 'Hey team! JustTouch UI v4 tokens are live in staging.', time: '10:14 AM', me: false },
  { sender: 'You',    text: 'Awesome, testing the dark mode contrast on Data Tables now.', time: '10:16 AM', me: true  },
] as const;
