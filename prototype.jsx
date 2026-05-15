// prototype.jsx — Artisan clickable prototype runtime.
//
// Reads screen components off `window` (set by screens-1..4.jsx + tokens.jsx).
// Renders one phone at a time, overlays transparent hotspots that route via
// URL hash, exposes a keyboard-triggered screen index for any-to-any jumps.
//
// Keyboard:
//   H — flash all hotspots on the current screen
//   M / ? — open the screen index
//   Esc — close the index
//   ← / → — prev / next screen in canonical order
//   Backspace — back through navigation history

const SCREENS = [
  { id: 'splash',      comp: 'Screen1_Splash',          label: 'Splash',         group: 'Onboarding' },
  { id: 'otp',         comp: 'Screen8_OTP',             label: 'OTP',            group: 'Onboarding' },
  { id: 'permissions', comp: 'Screen9_Permissions',     label: 'Permissions',    group: 'Onboarding' },
  { id: 'home',        comp: 'Screen2_Home',            label: 'Home',           group: 'Homeowner' },
  { id: 'post',        comp: 'Screen3_PostJob',         label: 'Post a job',     group: 'Homeowner' },
  { id: 'posted',      comp: 'Screen10_JobPosted',      label: 'Job posted',     group: 'Homeowner' },
  { id: 'quotes',      comp: 'Screen4_QuoteInbox',      label: 'Quote inbox',    group: 'Homeowner' },
  { id: 'browse',      comp: 'Screen11_Browse',         label: 'Browse',         group: 'Homeowner' },
  { id: 'filter',      comp: 'Screen12_Filter',         label: 'Filter sheet',   group: 'Homeowner' },
  { id: 'profile',     comp: 'Screen5_Profile',         label: 'Contractor',     group: 'Homeowner' },
  { id: 'chat',        comp: 'Screen6_Chat',            label: 'Chat',           group: 'Homeowner' },
  { id: 'booking',     comp: 'Screen14_Booking',        label: 'Booking',        group: 'Homeowner' },
  { id: 'myjobs',      comp: 'Screen13_MyJobs',         label: 'My jobs',        group: 'Homeowner' },
  { id: 'review',      comp: 'Screen15_Review',         label: 'Review',         group: 'Homeowner' },
  { id: 'settings',    comp: 'Screen19_Settings',       label: 'Account',        group: 'Homeowner' },
  { id: 'verify',      comp: 'Screen16_Verification',   label: 'Get verified',   group: 'Contractor' },
  { id: 'leads',       comp: 'Screen7_ContractorSwipe', label: 'Lead swipe',     group: 'Contractor' },
  { id: 'quote',       comp: 'Screen17_SubmitQuote',    label: 'Submit quote',   group: 'Contractor' },
  { id: 'earnings',    comp: 'Screen18_Earnings',       label: 'Earnings',       group: 'Contractor' },
];
const SCREEN_BY_ID = Object.fromEntries(SCREENS.map((s, i) => [s.id, { ...s, index: i }]));

// Hotspots — coordinates in the 390×844 phone frame.
// Each hotspot: { x, y, w, h, to }. Tab-bar hotspots reuse a helper.
const TAB_HOME      = { x:  0, y: 756, w:  98, h: 88 };
const TAB_QUOTES    = { x: 98, y: 756, w:  98, h: 88 };
const TAB_CHATS     = { x:196, y: 756, w:  98, h: 88 };
const TAB_PROFILE   = { x:294, y: 756, w:  96, h: 88 };
const TABS_HOMEOWNER = [
  { ...TAB_HOME,    to: 'home' },
  { ...TAB_QUOTES,  to: 'quotes' },
  { ...TAB_CHATS,   to: 'chat' },
  { ...TAB_PROFILE, to: 'settings' },
];
const TABS_CONTRACTOR = [
  { ...TAB_HOME,    to: 'leads' },
  { ...TAB_QUOTES,  to: 'earnings' },
  { ...TAB_CHATS,   to: 'chat' },
  { ...TAB_PROFILE, to: 'settings' },
];

const HOTSPOTS = {
  splash: [
    // Homeowner role card
    { x: 24, y: 600, w: 342, h: 68, to: 'otp' },
    // Contractor role card
    { x: 24, y: 678, w: 342, h: 68, to: 'verify' },
    // Sign in pill (bottom)
    { x: 100, y: 762, w: 190, h: 28, to: 'home' },
  ],
  otp: [
    // Back
    { x: 14, y: 56, w: 60, h: 60, to: 'splash' },
    // Number pad (tap anywhere on keypad to "submit")
    { x: 14, y: 640, w: 362, h: 180, to: 'permissions' },
    // "Change" link next to phone number
    { x: 220, y: 178, w: 90, h: 30, to: 'splash' },
  ],
  permissions: [
    { x: 14, y: 56, w: 60, h: 60, to: 'otp' },
    // Allow location (terracotta button on first card)
    { x: 36, y: 318, w: 320, h: 50, to: 'home' },
    // Allow notifications (button on second card)
    { x: 36, y: 470, w: 320, h: 50, to: 'home' },
    // Skip for now
    { x: 130, y: 790, w: 140, h: 40, to: 'home' },
  ],
  home: [
    // Search bar → browse
    { x: 22, y: 138, w: 346, h: 50, to: 'browse' },
    // Post a job CTA card
    { x: 22, y: 198, w: 346, h: 130, to: 'post' },
    // Top-rated cards (scroll row) → profile
    { x: 22, y: 432, w: 346, h: 180, to: 'profile' },
    // Featured transformation → profile
    { x: 22, y: 640, w: 346, h: 110, to: 'profile' },
    // Avatar → settings
    { x: 330, y: 64, w: 50, h: 50, to: 'settings' },
    ...TABS_HOMEOWNER,
  ],
  post: [
    // Back
    { x: 14, y: 56, w: 60, h: 60, to: 'home' },
    // Save
    { x: 326, y: 56, w: 58, h: 32, to: 'posted' },
    // Continue (sticky bottom)
    { x: 22, y: 760, w: 346, h: 70, to: 'posted' },
  ],
  posted: [
    // Close
    { x: 326, y: 56, w: 58, h: 58, to: 'home' },
    // Job preview row → quote inbox
    { x: 22, y: 312, w: 346, h: 80, to: 'quotes' },
    // Browse builders
    { x: 22, y: 770, w: 168, h: 54, to: 'browse' },
    // Go to my jobs
    { x: 200, y: 770, w: 168, h: 54, to: 'myjobs' },
  ],
  quotes: [
    // Back
    { x: 14, y: 56, w: 60, h: 60, to: 'home' },
    // Filter
    { x: 326, y: 56, w: 58, h: 58, to: 'filter' },
    // Job preview row → posted
    { x: 22, y: 104, w: 346, h: 78, to: 'posted' },
    // Quote card 1 (accent / best match)
    { x: 22, y: 280, w: 346, h: 246, to: 'profile' },
    // Quote card 2
    { x: 22, y: 540, w: 346, h: 220, to: 'chat' },
    ...TABS_HOMEOWNER,
  ],
  browse: [
    // Back
    { x: 16, y: 50, w: 50, h: 42, to: 'home' },
    // Filter button (terracotta-on-ink at right)
    { x: 334, y: 50, w: 48, h: 42, to: 'filter' },
    // Search field
    { x: 70, y: 50, w: 254, h: 42, to: 'home' },
    // Result rows (each ~110h, ~16y stride starting around 280)
    { x: 16, y: 264, w: 358, h: 110, to: 'profile' },
    { x: 16, y: 384, w: 358, h: 110, to: 'profile' },
    { x: 16, y: 504, w: 358, h: 110, to: 'profile' },
    { x: 16, y: 624, w: 358, h: 110, to: 'profile' },
    ...TABS_HOMEOWNER,
  ],
  filter: [
    // Tap scrim (above sheet) to dismiss
    { x: 0, y: 0, w: 390, h: 200, to: 'browse' },
    // Reset (top-left of sheet)
    { x: 22, y: 218, w: 70, h: 32, to: 'browse' },
    // Show 28 results
    { x: 22, y: 780, w: 346, h: 54, to: 'browse' },
  ],
  profile: [
    // Back
    { x: 16, y: 50, w: 48, h: 48, to: 'browse' },
    // Heart (top-right)
    { x: 326, y: 50, w: 48, h: 48, to: 'profile' },
    // Chat button (bottom bar)
    { x: 158, y: 768, w: 86, h: 50, to: 'chat' },
    // Request quote
    { x: 252, y: 768, w: 120, h: 50, to: 'booking' },
  ],
  chat: [
    // Back
    { x: 6, y: 52, w: 44, h: 44, to: 'profile' },
    // Pinned job card → quote inbox
    { x: 18, y: 126, w: 354, h: 60, to: 'quotes' },
    // Quote attachment bubble → booking
    { x: 100, y: 588, w: 270, h: 130, to: 'booking' },
    // Camera in header → review (snap an after photo)
    { x: 338, y: 56, w: 44, h: 44, to: 'review' },
  ],
  booking: [
    // Back
    { x: 14, y: 54, w: 60, h: 60, to: 'profile' },
    // Help
    { x: 332, y: 54, w: 50, h: 32, to: 'home' },
    // Cancel
    { x: 22, y: 770, w: 134, h: 54, to: 'myjobs' },
    // Add to calendar
    { x: 162, y: 770, w: 206, h: 54, to: 'myjobs' },
    // Person row → chat
    { x: 38, y: 220, w: 250, h: 60, to: 'chat' },
  ],
  myjobs: [
    // + button (top right)
    { x: 332, y: 58, w: 46, h: 46, to: 'post' },
    // Active job
    { x: 22, y: 192, w: 346, h: 130, to: 'review' },
    // Quoting job
    { x: 22, y: 336, w: 346, h: 120, to: 'quotes' },
    // Completed job
    { x: 22, y: 470, w: 346, h: 120, to: 'review' },
    // Insight strip → settings
    { x: 22, y: 598, w: 346, h: 70, to: 'settings' },
    ...TABS_HOMEOWNER,
  ],
  review: [
    // Close
    { x: 14, y: 54, w: 56, h: 56, to: 'myjobs' },
    // + Add after photo (the dashed tile, 3rd)
    { x: 196, y: 360, w: 86, h: 86, to: 'chat' },
    // Continue
    { x: 22, y: 770, w: 346, h: 54, to: 'myjobs' },
  ],
  settings: [
    // Personal details row → splash (sign out style flow)
    { x: 22, y: 480, w: 346, h: 50, to: 'verify' },
    // Become a contractor row (Support section, 3rd row)
    { x: 22, y: 740, w: 346, h: 50, to: 'verify' },
    // Sign out (danger row)
    { x: 22, y: 700, w: 346, h: 50, to: 'splash' },
    ...TABS_HOMEOWNER,
  ],
  verify: [
    // Back
    { x: 14, y: 54, w: 60, h: 60, to: 'splash' },
    // Help
    { x: 332, y: 54, w: 50, h: 32, to: 'settings' },
    // Each verify row → continue flow
    { x: 22, y: 348, w: 346, h: 70, to: 'leads' },
    { x: 22, y: 426, w: 346, h: 70, to: 'leads' },
    { x: 22, y: 504, w: 346, h: 70, to: 'leads' },
    { x: 22, y: 582, w: 346, h: 70, to: 'leads' },
    { x: 22, y: 660, w: 346, h: 70, to: 'leads' },
    // Continue button (sticky bottom)
    { x: 22, y: 770, w: 346, h: 54, to: 'leads' },
  ],
  leads: [
    // Pass (X)
    { x: 102, y: 670, w: 60, h: 60, to: 'leads' },
    // Save (bookmark)
    { x: 170, y: 675, w: 50, h: 50, to: 'leads' },
    // Quote (big terracotta)
    { x: 228, y: 665, w: 70, h: 70, to: 'quote' },
    // Avatar (top right) → settings
    { x: 326, y: 60, w: 50, h: 50, to: 'settings' },
    // Stats strip → earnings
    { x: 22, y: 144, w: 346, h: 70, to: 'earnings' },
    ...TABS_CONTRACTOR,
  ],
  quote: [
    // Back → leads
    { x: 14, y: 54, w: 60, h: 60, to: 'leads' },
    // Job preview row at top → leads
    { x: 22, y: 124, w: 346, h: 70, to: 'leads' },
    // Save draft
    { x: 22, y: 770, w: 134, h: 54, to: 'leads' },
    // Send quote
    { x: 162, y: 770, w: 206, h: 54, to: 'earnings' },
  ],
  earnings: [
    // Back
    { x: 14, y: 54, w: 60, h: 60, to: 'leads' },
    // Refresh icon
    { x: 332, y: 54, w: 44, h: 44, to: 'earnings' },
    // Withdraw button (inside ink card)
    { x: 38, y: 320, w: 318, h: 44, to: 'chat' },
    ...TABS_CONTRACTOR,
  ],
};

// ─────────────────────────────────────────────────────────────
// Hotspot — transparent click target with reveal/flash state
// ─────────────────────────────────────────────────────────────
function Hotspot({ x, y, w, h, to, reveal, onClick }) {
  const [hover, setHover] = React.useState(false);
  const show = reveal || hover;
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(to); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={`→ ${to}`}
      style={{
        position: 'absolute', left: x, top: y, width: w, height: h,
        zIndex: 200, padding: 0, margin: 0, border: 0, cursor: 'pointer',
        background: show ? 'rgba(200,85,61,0.22)' : 'transparent',
        outline: show ? '1.5px solid #C8553D' : 'none',
        outlineOffset: -1,
        borderRadius: 10,
        transition: 'background .15s ease, outline-color .15s ease',
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// PhoneBezel — pure rounded chrome that wraps the 390x844 screen
// ─────────────────────────────────────────────────────────────
function PhoneBezel({ children }) {
  return (
    <div style={{
      width: 390, height: 844, borderRadius: 48, position: 'relative',
      background: '#F4EFE6', overflow: 'hidden',
      boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 0 0 9px #0E0B07, 0 0 0 10px rgba(255,255,255,0.06)',
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// ScreenMenu — index overlay (M)
// ─────────────────────────────────────────────────────────────
function ScreenMenu({ current, onPick, onClose }) {
  const groups = SCREENS.reduce((acc, s) => {
    (acc[s.group] = acc[s.group] || []).push(s);
    return acc;
  }, {});
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 40, fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(960px, 92vw)', maxHeight: '90vh', overflow: 'auto',
          background: '#1A1612', borderRadius: 18, padding: '28px 32px 32px',
          color: '#F4EFE6', boxShadow: '0 40px 90px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28, gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: '#C8553D', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              Artisan · 19 screens
            </div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 32, lineHeight: 1, marginTop: 4, whiteSpace: 'nowrap' }}>
              Jump to any screen
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#F4EFE6',
            padding: '6px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 600,
            fontFamily: 'inherit',
          }}>Esc</button>
        </div>

        {Object.entries(groups).map(([group, items]) => (
          <div key={group} style={{ marginBottom: 22 }}>
            <div style={{
              fontSize: 10.5, color: 'rgba(244,239,230,0.5)', fontWeight: 700,
              letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10,
            }}>{group}</div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10,
            }}>
              {items.map((s) => {
                const active = s.id === current;
                return (
                  <button
                    key={s.id}
                    onClick={() => onPick(s.id)}
                    style={{
                      textAlign: 'left', padding: '12px 14px', borderRadius: 10, cursor: 'pointer',
                      background: active ? '#C8553D' : 'rgba(255,255,255,0.04)',
                      border: '1px solid ' + (active ? '#C8553D' : 'rgba(255,255,255,0.08)'),
                      color: active ? '#fff' : '#F4EFE6',
                      fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
                      display: 'flex', flexDirection: 'column', gap: 2,
                      transition: 'background .12s, border-color .12s',
                    }}
                    onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  >
                    <span style={{ fontSize: 10.5, fontWeight: 700, opacity: 0.6, letterSpacing: 0.4 }}>
                      {String(SCREEN_BY_ID[s.id].index + 1).padStart(2, '0')}
                    </span>
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{
          marginTop: 22, paddingTop: 18,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          fontSize: 11.5, color: 'rgba(244,239,230,0.55)',
          display: 'flex', gap: 18, flexWrap: 'wrap',
        }}>
          <span><kbd style={kbdStyle}>H</kbd> reveal hotspots</span>
          <span><kbd style={kbdStyle}>M</kbd> menu</span>
          <span><kbd style={kbdStyle}>←</kbd>/<kbd style={kbdStyle}>→</kbd> prev / next</span>
          <span><kbd style={kbdStyle}>⌫</kbd> back</span>
        </div>
      </div>
    </div>
  );
}

const kbdStyle = {
  display: 'inline-block', padding: '1px 6px',
  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 4, fontFamily: 'JetBrains Mono, ui-monospace, monospace',
  fontSize: 10.5, color: '#F4EFE6', margin: '0 2px',
};

// ─────────────────────────────────────────────────────────────
// ProtoApp — root
// ─────────────────────────────────────────────────────────────
function ProtoApp() {
  const initial = (window.location.hash.slice(1) || 'splash');
  const [current, setCurrent] = React.useState(SCREEN_BY_ID[initial] ? initial : 'splash');
  const [reveal, setReveal] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const histRef = React.useRef([current]);
  const [scale, setScale] = React.useState(1);

  const nav = React.useCallback((id) => {
    if (!SCREEN_BY_ID[id]) return;
    histRef.current.push(id);
    setCurrent(id);
    window.location.hash = id;
  }, []);

  const goBack = React.useCallback(() => {
    if (histRef.current.length > 1) {
      histRef.current.pop();
      const prev = histRef.current[histRef.current.length - 1];
      setCurrent(prev);
      window.location.hash = prev;
    }
  }, []);

  // Hashchange (browser back/forward, link sharing)
  React.useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (SCREEN_BY_ID[h] && h !== current) {
        histRef.current.push(h);
        setCurrent(h);
      }
    };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [current]);

  // Scale-to-fit (phone is 390x844; we letterbox into the viewport with padding)
  React.useEffect(() => {
    const calc = () => {
      const padding = 60;
      const sw = (window.innerWidth - padding * 2) / 390;
      const sh = (window.innerHeight - padding * 2) / 844;
      setScale(Math.min(1.15, Math.max(0.4, Math.min(sw, sh))));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  // Keyboard
  React.useEffect(() => {
    const onKey = (e) => {
      // Ignore when the menu is consuming focus from inputs etc.
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;
      const k = e.key.toLowerCase();
      if (k === 'h') {
        setReveal(true);
        clearTimeout(window.__protoFlash);
        window.__protoFlash = setTimeout(() => setReveal(false), 1600);
      } else if (k === 'm' || k === '?' || k === '/') {
        e.preventDefault();
        setMenuOpen((v) => !v);
      } else if (k === 'escape') {
        setMenuOpen(false);
      } else if (k === 'backspace') {
        e.preventDefault();
        goBack();
      } else if (k === 'arrowleft') {
        const idx = SCREEN_BY_ID[current].index;
        nav(SCREENS[(idx - 1 + SCREENS.length) % SCREENS.length].id);
      } else if (k === 'arrowright') {
        const idx = SCREEN_BY_ID[current].index;
        nav(SCREENS[(idx + 1) % SCREENS.length].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, nav, goBack]);

  // Auto-hide hint chrome after idle
  const [chromeVisible, setChromeVisible] = React.useState(true);
  React.useEffect(() => {
    let t;
    const wake = () => {
      setChromeVisible(true);
      clearTimeout(t);
      t = setTimeout(() => setChromeVisible(false), 2500);
    };
    wake();
    window.addEventListener('mousemove', wake);
    window.addEventListener('keydown', wake);
    return () => {
      window.removeEventListener('mousemove', wake);
      window.removeEventListener('keydown', wake);
      clearTimeout(t);
    };
  }, []);

  const Comp = window[SCREEN_BY_ID[current].comp];
  const spots = HOTSPOTS[current] || [];
  const meta = SCREEN_BY_ID[current];

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'radial-gradient(120% 80% at 50% 0%, #1A1612 0%, #0A0805 70%, #000 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
    }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}>
        <PhoneBezel>
          {/* Screen content (no entry animation so clones for screenshots/exports render fully) */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {Comp ? <Comp /> : <div style={{padding:40,color:'#900'}}>Missing component: {meta.comp}</div>}
          </div>
          {/* Hotspot overlay */}
          {spots.map((s, i) => (
            <Hotspot key={`${current}-${i}`} {...s} reveal={reveal} onClick={nav} />
          ))}
        </PhoneBezel>
      </div>

      {/* Bottom hint bar — auto-hides on idle */}
      <div style={{
        position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: 12,
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderRadius: 999, padding: '8px 14px',
        color: 'rgba(244,239,230,0.7)', fontSize: 11, fontWeight: 600, letterSpacing: 0.3,
        opacity: chromeVisible ? 1 : 0,
        transition: 'opacity .35s ease',
        pointerEvents: chromeVisible ? 'auto' : 'none',
      }}>
        <span style={{ color: 'rgba(244,239,230,0.45)', fontWeight: 700, letterSpacing: 1 }}>
          {String(meta.index + 1).padStart(2, '0')}/{SCREENS.length}
        </span>
        <span style={{ color: '#F4EFE6' }}>{meta.label}</span>
        <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)' }} />
        <button onClick={() => setMenuOpen(true)} style={hintBtn}>Menu (M)</button>
        <button onClick={() => { setReveal(true); clearTimeout(window.__protoFlash); window.__protoFlash = setTimeout(()=>setReveal(false), 1600); }} style={hintBtn}>Hotspots (H)</button>
      </div>

      {menuOpen && (
        <ScreenMenu
          current={current}
          onPick={(id) => { setMenuOpen(false); nav(id); }}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

const hintBtn = {
  background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
  color: 'rgba(244,239,230,0.85)', borderRadius: 999,
  padding: '4px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer',
  fontFamily: 'inherit', letterSpacing: 0.2,
};

Object.assign(window, { ProtoApp, SCREENS, HOTSPOTS, SCREEN_BY_ID });
