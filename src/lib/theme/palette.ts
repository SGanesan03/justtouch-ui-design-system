/**
 * JustTouch UI — Professional palette with Plum & Gold accents
 *
 * Neutrals carry the UI. Color is used only for intent.
 *
 * Neutrals  : #FFFFFF white · #F8F8F9 off-white · #F1F1F3 light grey · #E4E4E7 border · #71717A muted text
 * Brand     : #6A1B4D plum  (active states, links, brand marks)
 * Accent    : #C6A24B gold  (CTAs, highlights — used sparingly)
 * Dark bg   : #1A1A1F near-black (dark mode surfaces)
 */

export const P = {
  // ── Neutrals — the dominant surfaces ─────────────────────────────────────────
  forest:      '#1A1A1F',   // near-black — dark mode page bg
  forestDeep:  '#111114',   // darkest dark mode bg
  forestMid:   '#2C2C33',   // dark mode card / border
  olive:       '#6A1B4D',   // plum — brand / active (accent only)
  oliveMid:    '#8B2E63',   // plum hover

  // ── Gold accent — CTAs only ───────────────────────────────────────────────────
  amber:       '#D9B1C7',   // dusty rose — subtle tints, tags
  amberDark:   '#C6A24B',   // gold — primary CTA color

  // ── Light surfaces — white-based, not pink ────────────────────────────────────
  cream:       '#F8F8F9',   // page background (off-white, neutral)
  creamMid:    '#F1F1F3',   // card alt / subtle bg
  creamMuted:  '#E4E4E7',   // borders, dividers
  creamDark:   '#A1A1AA',   // muted text on dark bg

  // ── Text ─────────────────────────────────────────────────────────────────────
  textDark:    '#18181B',   // primary text — near black
  textMid:     '#3F3F46',   // secondary text
  textMuted:   '#71717A',   // muted / placeholder
  textLight:   '#FAFAFA',   // primary text dark mode
  textLightMid:'#A1A1AA',   // secondary text dark mode
} as const;

export type PaletteKey = keyof typeof P;

/** Light mode semantic tokens */
export const LIGHT = {
  pageBg:       P.cream,
  cardBg:       '#FFFFFF',
  cardBgAlt:    P.creamMid,
  border:       P.creamMuted,
  borderStrong: '#D4D4D8',
  text:         P.textDark,
  textSub:      P.textMid,
  textMuted:    P.textMuted,
  accent:       P.olive,
  accentDark:   P.amberDark,
  brand:        P.olive,
  brandDark:    '#3A0D2C',
  sidebarBg:    '#FFFFFF',
  sidebarBorder:P.creamMuted,
  headerBg:     'rgba(255,255,255,0.92)',
} as const;

/** Dark mode semantic tokens */
export const DARK = {
  pageBg:       P.forestDeep,
  cardBg:       P.forest,
  cardBgAlt:    P.forestMid,
  border:       P.forestMid,
  borderStrong: '#3F3F46',
  text:         P.textLight,
  textSub:      P.creamDark,
  textMuted:    '#71717A',
  accent:       P.olive,
  accentDark:   P.amberDark,
  brand:        P.olive,
  brandDark:    P.oliveMid,
  sidebarBg:    P.forest,
  sidebarBorder:P.forestMid,
  headerBg:     'rgba(17,17,20,0.95)',
} as const;
