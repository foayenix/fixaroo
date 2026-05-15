// Artisan design tokens — shared across all screens.

const A = {
  // Color
  bg:        '#F4EFE6',  // app warm off-white
  surface:   '#FFFFFF',
  surfaceAlt:'#FBF8F2',
  ink:       '#1C1813',
  ink2:      '#3C342B',
  sub:       '#7A6F62',
  sub2:      '#A89E8E',
  hairline:  'rgba(28,24,19,0.08)',
  hairline2: 'rgba(28,24,19,0.14)',

  // Accents
  terracotta:'#C8553D',
  terraDark: '#A8412C',
  terraSoft: '#F4DBD0',
  terraTint: '#FBEDE6',

  sage:      '#5C7A5C',
  sageSoft:  '#E0EAE0',
  amber:     '#D9924D',

  // Type
  font:      '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  serif:     '"Instrument Serif", "Times New Roman", Georgia, serif',
  mono:      '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
};

// ─────────────────────────────────────────────────────────────
// Photo placeholder — warm gradient block with a tiny monospace caption.
// Used everywhere we'd otherwise need a real photo.
// ─────────────────────────────────────────────────────────────
function Photo({ tone = 'warm', label, before, height, width, radius = 16, style = {} }) {
  const tones = {
    warm:   ['#E8C9A8', '#C68B5E'],
    rust:   ['#D9A48C', '#9C5237'],
    sand:   ['#E6D5B7', '#B89A6E'],
    moss:   ['#B8C4A6', '#6F8062'],
    slate:  ['#BFC4C8', '#6E767C'],
    cream:  ['#F2E5CD', '#D3B884'],
    sky:    ['#C4D2DA', '#7A98A6'],
    plum:   ['#C7AEB0', '#8E5F66'],
    cocoa:  ['#C9B19A', '#7F5A3C'],
    sage:   ['#C2CCB4', '#7C8C6C'],
  };
  const [a, b] = tones[tone] || tones.warm;
  return (
    <div style={{
      width, height, borderRadius: radius, position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
      flexShrink: 0, ...style,
    }}>
      {/* faint diagonal stripes for texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 14px)',
      }} />
      {before && (
        <div style={{
          position: 'absolute', top: 8, left: 8,
          padding: '3px 7px', borderRadius: 999,
          background: 'rgba(28,24,19,0.55)', color: '#fff',
          fontSize: 9, fontWeight: 600, letterSpacing: 0.6,
          fontFamily: A.mono, textTransform: 'uppercase',
          backdropFilter: 'blur(6px)',
        }}>{before}</div>
      )}
      {label && (
        <div style={{
          position: 'absolute', bottom: 8, left: 8, right: 8,
          color: 'rgba(255,255,255,0.85)', fontFamily: A.mono,
          fontSize: 9, letterSpacing: 0.4, textTransform: 'uppercase',
          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}>{label}</div>
      )}
    </div>
  );
}

// Tiny inline icon set — stroke-based, 1.6px, consistent.
const Icon = {
  search:   (c='currentColor', s=18) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke={c} strokeWidth="1.6"/><path d="M13.5 13.5L17 17" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  plus:     (c='currentColor', s=18) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
  check:    (c='currentColor', s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill="none"><path d="M2 7.5l3 3 7-7" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  shield:   (c='currentColor', s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill="none"><path d="M7 1l5 2v4c0 3-2 5.5-5 6-3-.5-5-3-5-6V3l5-2z" fill={c}/><path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  star:     (c='currentColor', s=12) => <svg width={s} height={s} viewBox="0 0 12 12" fill={c}><path d="M6 .5l1.7 3.5 3.8.5-2.8 2.7.7 3.8L6 9.2 2.6 11l.7-3.8L.5 4.5l3.8-.5L6 .5z"/></svg>,
  pin:      (c='currentColor', s=12) => <svg width={s} height={s} viewBox="0 0 12 14" fill="none"><path d="M6 .8c2.5 0 4.5 2 4.5 4.4 0 3.2-4.5 7.8-4.5 7.8S1.5 8.4 1.5 5.2C1.5 2.8 3.5.8 6 .8z" stroke={c} strokeWidth="1.4"/><circle cx="6" cy="5.2" r="1.6" fill={c}/></svg>,
  chevR:    (c='currentColor', s=12) => <svg width={s} height={s} viewBox="0 0 8 12" fill="none"><path d="M1 1l5 5-5 5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chevL:    (c='currentColor', s=14) => <svg width={s} height={s} viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chevD:    (c='currentColor', s=10) => <svg width={s} height={s} viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  heart:    (c='currentColor', s=16, fill='none') => <svg width={s} height={s} viewBox="0 0 18 16" fill={fill}><path d="M9 14.5S1.5 10.5 1.5 5.5C1.5 3 3.5 1 6 1c1.5 0 2.5.8 3 1.8C9.5 1.8 10.5 1 12 1c2.5 0 4.5 2 4.5 4.5 0 5-7.5 9-7.5 9z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  camera:   (c='currentColor', s=18) => <svg width={s} height={s} viewBox="0 0 20 18" fill="none"><path d="M2 5h3l1.5-2h7L15 5h3v11H2V5z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><circle cx="10" cy="10.5" r="3.2" stroke={c} strokeWidth="1.5"/></svg>,
  msg:      (c='currentColor', s=18) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><path d="M3 4h14v10H7l-4 3V4z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  home:     (c='currentColor', s=20) => <svg width={s} height={s} viewBox="0 0 22 20" fill="none"><path d="M2 9.5L11 2l9 7.5V19h-6v-6H8v6H2V9.5z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  briefcase:(c='currentColor', s=20) => <svg width={s} height={s} viewBox="0 0 22 20" fill="none"><rect x="2" y="6" width="18" height="12" rx="2" stroke={c} strokeWidth="1.6"/><path d="M8 6V4a2 2 0 012-2h2a2 2 0 012 2v2" stroke={c} strokeWidth="1.6"/></svg>,
  inbox:    (c='currentColor', s=20) => <svg width={s} height={s} viewBox="0 0 22 20" fill="none"><path d="M2 12l3-9h12l3 9v6H2v-6zM2 12h6l1 2h4l1-2h6" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  user:     (c='currentColor', s=20) => <svg width={s} height={s} viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke={c} strokeWidth="1.6"/><path d="M3 20c0-4 4-6 8-6s8 2 8 6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  send:     (c='currentColor', s=18) => <svg width={s} height={s} viewBox="0 0 20 20" fill={c}><path d="M2 10L18 2l-4 16-4-7-8-1z"/></svg>,
  clip:     (c='currentColor', s=18) => <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><path d="M14 6l-7 7a3 3 0 104 4l8-8a5 5 0 10-7-7l-8 8" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  x:        (c='currentColor', s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke={c} strokeWidth="2.4" strokeLinecap="round"/></svg>,
  heartBig: (c='currentColor', s=28) => <svg width={s} height={s} viewBox="0 0 28 26" fill={c}><path d="M14 24S2 16 2 9C2 5 5 2 9 2c2 0 4 1 5 3 1-2 3-3 5-3 4 0 7 3 7 7 0 7-12 15-12 15z"/></svg>,
  bolt:     (c='currentColor', s=14) => <svg width={s} height={s} viewBox="0 0 14 14" fill={c}><path d="M8 1L2 8h4l-1 5 6-7H7l1-5z"/></svg>,
  filter:   (c='currentColor', s=16) => <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><path d="M2 4h12M4 8h8M6 12h4" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>,
};

// VerifiedBadge — sage check pill, signals trust without being garish.
function VerifiedBadge({ size = 16, label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: A.sage, color: '#fff', borderRadius: 999,
      padding: label ? '3px 8px 3px 6px' : 0,
      width: label ? undefined : size, height: label ? undefined : size,
      justifyContent: 'center', fontSize: 11, fontWeight: 600, letterSpacing: 0.1,
    }}>
      <svg width={size === 16 ? 9 : 10} height={size === 16 ? 9 : 10} viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </span>
  );
}

// Star rating row
function Stars({ rating = 5, count, size = 12, color }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: A.ink, fontSize: 13, fontWeight: 600 }}>
      <span style={{ color: color || A.terracotta, display: 'inline-flex' }}>{Icon.star(color || A.terracotta, size)}</span>
      <span>{rating}</span>
      {count !== undefined && <span style={{ color: A.sub, fontWeight: 500 }}>({count})</span>}
    </span>
  );
}

Object.assign(window, { A, Photo, Icon, VerifiedBadge, Stars });
