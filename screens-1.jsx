// screens-1.jsx — Artisan screens 1-3: Splash, Home feed, Post a job.
// Reads from window: A, Photo, Icon, VerifiedBadge, Stars

// ─────────────────────────────────────────────────────────────
// Shared phone shell — fixed 390x844, off-white bg, status bar
// ─────────────────────────────────────────────────────────────
function Phone({ children, bg = A.bg, dark = false, statusDark = false, hideHomeIndicator = false }) {
  return (
    <div style={{
      width: 390, height: 844, position: 'relative', overflow: 'hidden',
      background: bg, fontFamily: A.font, color: A.ink,
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 54, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 28px 0', pointerEvents: 'none',
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: statusDark ? '#fff' : A.ink, letterSpacing: -0.2 }}>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="17" height="11" viewBox="0 0 17 11" fill={statusDark ? '#fff' : A.ink}>
            <rect x="0" y="7" width="3" height="4" rx="0.5"/>
            <rect x="4.5" y="5" width="3" height="6" rx="0.5"/>
            <rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/>
            <rect x="13.5" y="0" width="3" height="11" rx="0.5"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M7.5 2.8c2 0 3.8.8 5.1 2.1l1-1A8.5 8.5 0 007.5 1.5 8.5 8.5 0 001.4 3.9l1 1c1.3-1.3 3.1-2.1 5.1-2.1z" fill={statusDark ? '#fff' : A.ink}/>
            <path d="M7.5 6c1.2 0 2.2.4 3 1.2l1-1a5.7 5.7 0 00-4-1.7 5.7 5.7 0 00-4 1.7l1 1c.8-.8 1.8-1.2 3-1.2z" fill={statusDark ? '#fff' : A.ink}/>
            <circle cx="7.5" cy="9.3" r="1.3" fill={statusDark ? '#fff' : A.ink}/>
          </svg>
          <svg width="25" height="11" viewBox="0 0 25 11" fill="none">
            <rect x="0.5" y="0.5" width="21" height="10" rx="2.5" stroke={statusDark ? '#fff' : A.ink} strokeOpacity="0.4"/>
            <rect x="2" y="2" width="18" height="7" rx="1.5" fill={statusDark ? '#fff' : A.ink}/>
            <path d="M23 3.5v4c.7-.2 1.2-.9 1.2-2s-.5-1.8-1.2-2z" fill={statusDark ? '#fff' : A.ink} fillOpacity="0.5"/>
          </svg>
        </div>
      </div>

      {children}

      {/* home indicator */}
      {!hideHomeIndicator && (
        <div style={{
          position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
          width: 134, height: 5, borderRadius: 999, zIndex: 60,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(28,24,19,0.35)',
        }} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 1 — Splash / role select
// ─────────────────────────────────────────────────────────────
function Screen1_Splash() {
  return (
    <Phone bg={A.bg} statusDark>
      {/* Hero photo region — full-bleed top half */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 460 }}>
        <Photo tone="rust" width="100%" height={460} radius={0}
          label="HERO — tradesperson finishing kitchen island" />
        {/* vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(28,24,19,0.35) 0%, rgba(28,24,19,0) 30%, rgba(28,24,19,0) 60%, rgba(244,239,230,0.4) 88%, #F4EFE6 100%)',
        }} />
        {/* Brand mark in top-left */}
        <div style={{
          position: 'absolute', top: 66, left: 24,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: A.serif, fontSize: 22, color: A.terracotta, fontStyle: 'italic', lineHeight: 1, marginTop: -2 }}>a</span>
          </div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 16, letterSpacing: 0.3 }}>Artisan</span>
        </div>
      </div>

      {/* Bottom sheet */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 470,
        background: A.bg, borderRadius: '32px 32px 0 0', padding: '36px 24px 32px',
      }}>
        {/* Editorial headline */}
        <div style={{ fontFamily: A.serif, fontSize: 46, lineHeight: 1.02, color: A.ink, letterSpacing: -1.2 }}>
          Fix anything<br/>in your home.<br/>
          <span style={{ color: A.terracotta, fontStyle: 'italic' }}>In 24 hours.</span>
        </div>
        <p style={{
          fontSize: 14.5, color: A.sub, marginTop: 14, lineHeight: 1.45,
          maxWidth: 320,
        }}>
          Photo your problem. Get quotes from verified local builders. No commissions, no waiting.
        </p>

        {/* Role cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 26 }}>
          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: A.ink, color: '#fff', borderRadius: 18, border: 0, padding: '16px 18px',
            fontFamily: A.font, cursor: 'pointer', textAlign: 'left',
          }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>I'm a homeowner</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Find someone to fix things</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: A.terracotta, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.chevR('#fff', 14)}
            </div>
          </button>

          <button style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: A.surface, color: A.ink, borderRadius: 18, border: `1px solid ${A.hairline}`, padding: '16px 18px',
            fontFamily: A.font, cursor: 'pointer', textAlign: 'left',
          }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>I'm a contractor</div>
              <div style={{ fontSize: 12, color: A.sub, marginTop: 2 }}>Find work in your area</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: A.terraTint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.chevR(A.terracotta, 14)}
            </div>
          </button>
        </div>

        <div style={{
          textAlign: 'center', marginTop: 24,
          fontSize: 13, color: A.sub,
        }}>
          Already with us? <span style={{ color: A.terracotta, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>Sign in</span>
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 2 — Homeowner home feed
// ─────────────────────────────────────────────────────────────
function ContractorCard({ tone, before, name, trade, location, rating, reviews, price }) {
  return (
    <div style={{
      width: 248, flexShrink: 0, background: A.surface, borderRadius: 22,
      border: `1px solid ${A.hairline}`, overflow: 'hidden',
    }}>
      <div style={{ position: 'relative' }}>
        <Photo tone={tone} width={248} height={148} radius={0} before={before} />
        <div style={{
          position: 'absolute', top: 10, right: 10,
          width: 32, height: 32, borderRadius: 999, background: 'rgba(255,255,255,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {Icon.heart(A.ink, 16)}
        </div>
      </div>
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>{name}</span>
            <VerifiedBadge size={14} />
          </div>
          <Stars rating={rating} count={reviews} size={11} />
        </div>
        <div style={{ fontSize: 12.5, color: A.sub, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          {trade} · {Icon.pin(A.sub2, 10)} {location}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 10 }}>
          <span style={{ fontSize: 13, color: A.sub }}>From</span>
          <span style={{ fontSize: 16, fontWeight: 800, color: A.ink }}>{price}<span style={{ fontSize: 12, fontWeight: 600, color: A.sub }}>/day</span></span>
        </div>
      </div>
    </div>
  );
}

function CategoryChip({ icon, label, active }) {
  return (
    <div style={{
      flexShrink: 0, padding: '9px 14px', borderRadius: 999,
      background: active ? A.ink : A.surface, color: active ? '#fff' : A.ink,
      border: active ? 'none' : `1px solid ${A.hairline}`,
      fontSize: 13, fontWeight: 600, letterSpacing: -0.1,
      display: 'flex', alignItems: 'center', gap: 6,
    }}>
      <span style={{ fontSize: 14 }}>{icon}</span> {label}
    </div>
  );
}

function TabBar({ active = 'home', contractor = false }) {
  const items = contractor
    ? [['leads','Leads',Icon.bolt],['inbox','Quotes',Icon.briefcase],['msg','Chats',Icon.msg],['user','Profile',Icon.user]]
    : [['home','Home',Icon.home],['inbox','Quotes',Icon.inbox],['msg','Chats',Icon.msg],['user','Profile',Icon.user]];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 88,
      background: 'rgba(255,255,255,0.92)', borderTop: `1px solid ${A.hairline}`,
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      display: 'flex', alignItems: 'flex-start', padding: '10px 12px 0', zIndex: 40,
    }}>
      {items.map(([key, label, icon]) => {
        const isActive = key === active;
        return (
          <div key={key} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          }}>
            {icon(isActive ? A.terracotta : A.sub2, 22)}
            <span style={{ fontSize: 10.5, fontWeight: 600, color: isActive ? A.terracotta : A.sub2 }}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

function Screen2_Home() {
  return (
    <Phone>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 88, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '64px 22px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: A.sub, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              {Icon.pin(A.sub, 10)} Stoke Newington, N16 {Icon.chevD(A.sub, 8)}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 2, letterSpacing: -0.5 }}>
              Morning, Eleanor.
            </div>
          </div>
          <div style={{ width: 42, height: 42, borderRadius: 999, overflow: 'hidden' }}>
            <Photo tone="cream" width={42} height={42} radius={999} />
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: '6px 22px 0' }}>
          <div style={{
            background: A.surface, border: `1px solid ${A.hairline}`, borderRadius: 14,
            padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            {Icon.search(A.sub, 18)}
            <span style={{ fontSize: 14.5, color: A.sub, flex: 1 }}>Plumber, painter, kitchen fitter…</span>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: A.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.filter(A.ink, 14)}
            </div>
          </div>
        </div>

        {/* Post a job CTA */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{
            background: A.terracotta, borderRadius: 22, padding: '18px 18px 16px',
            color: '#fff', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ maxWidth: 200 }}>
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>Got something broken?</div>
                <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4, lineHeight: 1.35 }}>
                  Snap a photo. Get up to 5 quotes by tomorrow.
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#fff', color: A.terracotta, borderRadius: 999,
                  padding: '8px 12px', marginTop: 14,
                  fontSize: 13, fontWeight: 700,
                }}>
                  {Icon.camera(A.terracotta, 14)} Post a job
                </div>
              </div>
              <div style={{
                width: 78, height: 78, borderRadius: 16, marginTop: -2,
                background: 'rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: 6, borderRadius: 12, border: '1.5px dashed rgba(255,255,255,0.5)' }}/>
                {Icon.plus('#fff', 28)}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div style={{ paddingTop: 18 }}>
          <div style={{ display: 'flex', gap: 8, padding: '0 22px', overflow: 'hidden' }}>
            <CategoryChip icon="🔧" label="All" active />
            <CategoryChip icon="🚿" label="Plumbing" />
            <CategoryChip icon="🎨" label="Painting" />
            <CategoryChip icon="⚡" label="Electrical" />
            <CategoryChip icon="🪵" label="Carp." />
          </div>
        </div>

        {/* Top rated row */}
        <div style={{ marginTop: 20 }}>
          <div style={{ padding: '0 22px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>Top-rated nearby</div>
            <div style={{ fontSize: 12.5, color: A.terracotta, fontWeight: 700 }}>See all</div>
          </div>
          <div style={{ display: 'flex', gap: 12, padding: '12px 22px', overflow: 'hidden' }}>
            <ContractorCard tone="moss" before="AFTER" name="Iona M." trade="Painter" location="Hackney" rating="4.96" reviews="142" price="£240" />
            <ContractorCard tone="cocoa" before="AFTER" name="Tomás W." trade="Plumber" location="Bow" rating="4.92" reviews="89" price="£195" />
          </div>
        </div>

        {/* Featured transformation */}
        <div style={{ padding: '4px 22px 16px' }}>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3, marginBottom: 10 }}>Featured transformation</div>
          <div style={{
            background: A.surface, borderRadius: 22, overflow: 'hidden',
            border: `1px solid ${A.hairline}`,
          }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Photo tone="slate" width="100%" height={150} radius={0} before="BEFORE" label="bathroom · 2023" />
              </div>
              <div style={{ width: 1, background: A.hairline }} />
              <div style={{ flex: 1, position: 'relative' }}>
                <Photo tone="sand" width="100%" height={150} radius={0} before="AFTER" label="bathroom · today" />
              </div>
            </div>
            <div style={{ padding: '12px 14px 14px' }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: -0.2 }}>Full bathroom refit, Tooting SW17</div>
              <div style={{ fontSize: 12.5, color: A.sub, marginTop: 4 }}>By <span style={{ color: A.ink, fontWeight: 600 }}>Marcus V.</span> · 9 days · £4,820</div>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="home" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 3 — Post a job
// ─────────────────────────────────────────────────────────────
function Screen3_PostJob() {
  return (
    <Phone>
      {/* Header */}
      <div style={{ padding: '62px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.chevL(A.ink, 14)}
        </div>
        <div style={{ fontSize: 13, color: A.sub, fontWeight: 600 }}>Step 2 of 4</div>
        <div style={{ fontSize: 13, color: A.sub, fontWeight: 600 }}>Save</div>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 4, padding: '14px 22px 0' }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 2 ? A.terracotta : A.hairline2 }} />
        ))}
      </div>

      <div style={{ padding: '20px 22px', height: 'calc(844px - 152px)', overflow: 'hidden' }}>
        {/* Title */}
        <div style={{ fontFamily: A.serif, fontSize: 32, lineHeight: 1.05, letterSpacing: -0.5, color: A.ink }}>
          What needs<br/>
          <span style={{ fontStyle: 'italic', color: A.terracotta }}>fixing?</span>
        </div>
        <div style={{ fontSize: 13.5, color: A.sub, marginTop: 8 }}>
          Add 2-6 photos. The clearer the brief, the better the quotes.
        </div>

        {/* Photo grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 18 }}>
          <Photo tone="slate" width="100%" height={104} label="WIDE" />
          <Photo tone="sand" width="100%" height={104} label="CLOSE-UP" />
          <Photo tone="cream" width="100%" height={104} label="DETAIL" />
          <div style={{
            height: 104, borderRadius: 16,
            border: `1.5px dashed ${A.hairline2}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 4, color: A.sub,
          }}>
            {Icon.plus(A.sub, 22)}
            <span style={{ fontSize: 11, fontWeight: 600 }}>Add photo</span>
          </div>
          <div style={{
            height: 104, borderRadius: 16,
            border: `1.5px dashed ${A.hairline2}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 4, color: A.sub,
          }}>
            {Icon.plus(A.sub, 22)}
            <span style={{ fontSize: 11, fontWeight: 600 }}>Add photo</span>
          </div>
        </div>

        {/* Description card */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: A.ink, marginBottom: 8 }}>Describe the work</div>
          <div style={{
            background: A.surface, borderRadius: 16, padding: '14px',
            border: `1px solid ${A.hairline}`,
            fontSize: 14, lineHeight: 1.45, color: A.ink, minHeight: 78,
          }}>
            Bathroom tile re-grout, c. 6m² walls + floor. Mould visible in shower corner, want anti-mould grout & a fresh silicone seal around the bath.
            <span style={{ display: 'inline-block', width: 1.5, height: 16, background: A.terracotta, marginLeft: 1, verticalAlign: -3 }}></span>
          </div>
        </div>

        {/* Category */}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: A.ink, marginBottom: 8 }}>Category</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {[['Plumbing', false], ['Tiling', true], ['Bathroom', true], ['Painting', false], ['Carpentry', false]].map(([l, on], i) => (
              <div key={i} style={{
                padding: '7px 12px', borderRadius: 999,
                background: on ? A.ink : A.surface,
                color: on ? '#fff' : A.ink,
                border: on ? 'none' : `1px solid ${A.hairline}`,
                fontSize: 12.5, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                {on && Icon.check('#fff', 11)} {l}
              </div>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, background: A.surface, borderRadius: 16, padding: '12px 14px', border: `1px solid ${A.hairline}` }}>
            <div style={{ fontSize: 11, color: A.sub, fontWeight: 600 }}>BUDGET</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginTop: 2, letterSpacing: -0.3 }}>£300–500</div>
          </div>
          <div style={{ flex: 1, background: A.surface, borderRadius: 16, padding: '12px 14px', border: `1px solid ${A.hairline}` }}>
            <div style={{ fontSize: 11, color: A.sub, fontWeight: 600 }}>TIMELINE</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginTop: 2, letterSpacing: -0.3 }}>This week</div>
          </div>
        </div>
      </div>

      {/* Continue */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 22px 32px',
        background: 'linear-gradient(180deg, rgba(244,239,230,0) 0%, #F4EFE6 30%)',
      }}>
        <button style={{
          width: '100%', height: 54, borderRadius: 16, border: 0,
          background: A.ink, color: '#fff', fontSize: 15.5, fontWeight: 700,
          fontFamily: A.font, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          Continue {Icon.chevR('#fff', 14)}
        </button>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  Phone, ContractorCard, CategoryChip, TabBar,
  Screen1_Splash, Screen2_Home, Screen3_PostJob,
});
