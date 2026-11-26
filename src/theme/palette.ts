/**
 * JustTouch UI — Earthy Olive & Amber Design Palette
 * Single source of truth for all color tokens used across the app.
 *
 * #506C38  olive green   — primary brand
 * #283618  forest green  — dark surfaces / sidebar
 * #FEFAE0  warm cream    — light background / page bg
 * #DDA15E  warm amber    — accent / interactive
 * #BC6C25  burnt orange  — accent dark / CTA
 */

export const P = {
  // ── Greens (sidebar, dark surfaces, primary brand) ──────────────────────────
  forest:      '#283618',   // darkest — sidebar bg, dark page bg
  forestDeep:  '#1C2710',   // deeper dark mode bg
  forestMid:   '#3D5429',   // sidebar borders, mid surfaces
  olive:       '#506C38',   // primary brand, active states
  oliveMid:    '#7DA355',   // lighter olive for hover states

  // ── Amber / Orange (accent, CTA, interactive) ────────────────────────────────
  amber:       '#DDA15E',   // primary accent — links, active borders, icons
  amberDark:   '#BC6C25',   // darker accent — CTA buttons, hover

  // ── Cream (light mode surfaces) ──────────────────────────────────────────────
  cream:       '#FEFAE0',   // page background, light surface
  creamMid:    '#F5F0CC',   // card backgrounds, subtle surfaces
  creamMuted:  '#E8E0A8',   // borders, dividers in light mode
  creamDark:   '#C8B87A',   // muted text on dark backgrounds

  // ── Text ─────────────────────────────────────────────────────────────────────
  textDark:    '#283618',   // primary text (light mode)
  textMid:     '#506C38',   // secondary text (light mode)
  textMuted:   '#7A6C2C',   // muted text
  textLight:   '#FEFAE0',   // primary text (dark mode)
  textLightMid:'#C8B87A',   // secondary text (dark mode)
} as const;

export type PaletteKey = keyof typeof P;

/** Light mode semantic tokens */
export const LIGHT = {
  pageBg:       P.cream,
  cardBg:       '#FFFFFF',
  cardBgAlt:    P.creamMid,
  border:       P.creamMuted,
  borderStrong: '#C8B87A',
  text:         P.textDark,
  textSub:      P.textMid,
  textMuted:    P.textMuted,
  accent:       P.amber,
  accentDark:   P.amberDark,
  brand:        P.olive,
  brandDark:    P.forest,
  sidebarBg:    P.forest,
  sidebarBorder:P.forestMid,
  headerBg:     `rgba(254,250,224,0.95)`,
} as const;

/** Dark mode semantic tokens */
export const DARK = {
  pageBg:       P.forestDeep,
  cardBg:       P.forest,
  cardBgAlt:    P.forestMid,
  border:       P.forestMid,
  borderStrong: P.olive,
  text:         P.textLight,
  textSub:      P.creamDark,
  textMuted:    '#A09040',
  accent:       P.amber,
  accentDark:   P.amberDark,
  brand:        P.olive,
  brandDark:    P.oliveMid,
  sidebarBg:    P.forest,
  sidebarBorder:P.forestMid,
  headerBg:     `rgba(28,39,16,0.97)`,
} as const;
