// screens-3.jsx — Artisan screens 8-13: Auth, Permissions, Job posted, Browse, Filter sheet, My jobs.

// ─────────────────────────────────────────────────────────────
// SCREEN 8 — Phone / OTP verification
// ─────────────────────────────────────────────────────────────
function Screen8_OTP() {
  const digits = ['4','7','2','9','',''];
  return (
    <Phone bg={A.bg}>
      <div style={{ padding: '62px 22px 0' }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.chevL(A.ink, 14)}
        </div>
      </div>

      <div style={{ padding: '34px 22px 0' }}>
        <div style={{ fontFamily: A.serif, fontSize: 38, lineHeight: 1.05, letterSpacing: -0.7 }}>
          Verify your<br/><span style={{ fontStyle: 'italic', color: A.terracotta }}>number.</span>
        </div>
        <div style={{ fontSize: 14, color: A.sub, marginTop: 12, lineHeight: 1.45 }}>
          We sent a 6-digit code to <span style={{ color: A.ink, fontWeight: 700 }}>+44 7700 900 482</span>.
          <span style={{ color: A.terracotta, fontWeight: 700, marginLeft: 4 }}>Change</span>
        </div>

        {/* OTP boxes */}
        <div style={{ display: 'flex', gap: 8, marginTop: 28 }}>
          {digits.map((d, i) => (
            <div key={i} style={{
              flex: 1, height: 64, borderRadius: 14,
              background: d ? A.surface : 'transparent',
              border: `1.5px solid ${i === 4 ? A.terracotta : (d ? A.hairline : A.hairline2)}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, fontWeight: 800, color: A.ink, letterSpacing: -0.5,
              position: 'relative',
            }}>
              {d}
              {i === 4 && !d && <span style={{ width: 2, height: 28, background: A.terracotta }} />}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 13, color: A.sub,
        }}>
          <span>Didn't get it?</span>
          <span style={{ color: A.sub2, fontWeight: 600 }}>Resend in 0:47</span>
        </div>

        {/* Tip card */}
        <div style={{
          marginTop: 24, background: A.surface, borderRadius: 16, padding: 14,
          border: `1px solid ${A.hairline}`,
          display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: A.terraTint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {Icon.shield(A.terracotta, 16)}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Why we verify</div>
            <div style={{ fontSize: 12, color: A.sub, marginTop: 3, lineHeight: 1.4 }}>
              Verified numbers keep the marketplace trustworthy. Your number is never shared with contractors.
            </div>
          </div>
        </div>
      </div>

      {/* Number pad mock */}
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, padding: '0 14px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map((n, i) => (
            <div key={i} style={{
              height: 46, borderRadius: 12,
              background: n === '' ? 'transparent' : A.surface,
              border: n === '' ? 'none' : `1px solid ${A.hairline}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 600, color: A.ink,
            }}>{n}</div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 9 — Permissions (location + notifications)
// ─────────────────────────────────────────────────────────────
function Screen9_Permissions() {
  return (
    <Phone bg={A.bg}>
      <div style={{ padding: '62px 22px 0' }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.chevL(A.ink, 14)}
        </div>
      </div>

      <div style={{ padding: '28px 22px 0' }}>
        <div style={{ fontFamily: A.serif, fontSize: 36, lineHeight: 1.05, letterSpacing: -0.7 }}>
          Two quick<br/><span style={{ fontStyle: 'italic', color: A.terracotta }}>permissions.</span>
        </div>
        <div style={{ fontSize: 14, color: A.sub, marginTop: 10, lineHeight: 1.45 }}>
          So we can show local contractors and keep you posted.
        </div>

        {/* Permission card 1 */}
        <div style={{
          marginTop: 22, background: A.surface, borderRadius: 20, padding: 18,
          border: `1px solid ${A.hairline}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: A.terraTint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {Icon.pin(A.terracotta, 20)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.2 }}>Location</div>
              <div style={{ fontSize: 12.5, color: A.sub, marginTop: 3, lineHeight: 1.4 }}>
                Find verified builders within a few miles of your home.
              </div>
            </div>
          </div>
          <button style={{
            marginTop: 14, width: '100%', height: 44, borderRadius: 12,
            background: A.terracotta, color: '#fff', fontWeight: 700, border: 0,
            fontFamily: A.font, fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            {Icon.check('#fff', 13)} Allow while using
          </button>
        </div>

        {/* Permission card 2 */}
        <div style={{
          marginTop: 12, background: A.surface, borderRadius: 20, padding: 18,
          border: `1px solid ${A.hairline}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: A.sageSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path d="M10 2c-4 0-7 3-7 7v4l-2 3h18l-2-3V9c0-4-3-7-7-7zM7 18a3 3 0 006 0" stroke={A.sage} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.2 }}>Notifications</div>
              <div style={{ fontSize: 12.5, color: A.sub, marginTop: 3, lineHeight: 1.4 }}>
                We'll ping you the moment a quote lands. Nothing else.
              </div>
            </div>
          </div>
          <button style={{
            marginTop: 14, width: '100%', height: 44, borderRadius: 12,
            background: A.surfaceAlt, color: A.ink, fontWeight: 700,
            border: `1px solid ${A.hairline2}`, fontFamily: A.font, fontSize: 14,
          }}>
            Allow notifications
          </button>
        </div>

        {/* Trust footer */}
        <div style={{
          marginTop: 18, padding: '14px 16px', borderRadius: 14,
          background: 'transparent', border: `1px dashed ${A.hairline2}`,
          fontSize: 12, color: A.sub, lineHeight: 1.45,
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          {Icon.shield(A.sub, 16)}
          <span>We never sell your location or contact data. <span style={{ color: A.terracotta, fontWeight: 700 }}>Privacy policy</span></span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 30, left: 0, right: 0, textAlign: 'center' }}>
        <span style={{ fontSize: 13, color: A.sub, fontWeight: 600 }}>Skip for now</span>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 10 — Job posted success
// ─────────────────────────────────────────────────────────────
function Screen10_JobPosted() {
  return (
    <Phone bg={A.bg}>
      {/* Top */}
      <div style={{ padding: '62px 22px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.x(A.ink, 16)}
        </div>
      </div>

      {/* Hero burst */}
      <div style={{ padding: '20px 22px 0', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto' }}>
          {/* concentric rings */}
          {[0,1,2].map(i => (
            <div key={i} style={{
              position: 'absolute', inset: -i*14, borderRadius: '50%',
              background: `rgba(200,85,61,${0.08 - i*0.025})`,
            }} />
          ))}
          <div style={{
            position: 'absolute', inset: 22, borderRadius: '50%',
            background: A.terracotta,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 14px 30px rgba(200,85,61,0.4)',
          }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <path d="M8 19l8 8L30 11" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div style={{ fontFamily: A.serif, fontSize: 36, marginTop: 24, lineHeight: 1.05, letterSpacing: -0.6 }}>
          You're <span style={{ fontStyle: 'italic', color: A.terracotta }}>live.</span>
        </div>
        <div style={{ fontSize: 14, color: A.sub, marginTop: 8, lineHeight: 1.5, padding: '0 20px' }}>
          We've notified <span style={{ color: A.ink, fontWeight: 700 }}>12 verified contractors</span> in N16. Expect quotes within 4–24 hours.
        </div>
      </div>

      {/* Job preview card */}
      <div style={{ padding: '22px 22px 0' }}>
        <div style={{
          background: A.surface, borderRadius: 18, padding: 14, border: `1px solid ${A.hairline}`,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ display: 'flex', gap: -8, position: 'relative', width: 64 }}>
            <Photo tone="slate" width={32} height={42} radius={8} />
            <div style={{ marginLeft: -8 }}>
              <Photo tone="sand" width={32} height={42} radius={8} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: -0.2 }}>Bathroom tile re-grout</div>
            <div style={{ fontSize: 12, color: A.sub, marginTop: 2 }}>3 photos · £300–500 · This week</div>
          </div>
          {Icon.chevR(A.sub2, 12)}
        </div>
      </div>

      {/* Anatomy tips */}
      <div style={{ padding: '20px 22px 0' }}>
        <div style={{ fontSize: 12, color: A.sub, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>
          While you wait
        </div>
        {[
          ['Quotes arrive in your inbox', 'You\'ll get a push when each new quote lands.'],
          ['Compare side by side', 'Look at portfolios, ratings, and start dates — not just price.'],
          ['Pick within 24h for best deals', 'Contractors offer keenest rates to fast-moving clients.'],
        ].map(([t, d], i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 2 ? `1px solid ${A.hairline}` : 'none' }}>
            <div style={{ width: 24, height: 24, borderRadius: 999, background: A.bg, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: A.terracotta, flexShrink: 0 }}>{i+1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t}</div>
              <div style={{ fontSize: 12, color: A.sub, marginTop: 2, lineHeight: 1.4 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 22px 30px', background: 'linear-gradient(180deg, rgba(244,239,230,0) 0%, #F4EFE6 30%)', display: 'flex', gap: 10 }}>
        <button style={{
          flex: 1, height: 52, borderRadius: 14, background: A.surface,
          border: `1px solid ${A.hairline}`, color: A.ink, fontWeight: 700, fontFamily: A.font, fontSize: 14,
        }}>Browse builders</button>
        <button style={{
          flex: 1.4, height: 52, borderRadius: 14, background: A.ink,
          border: 0, color: '#fff', fontWeight: 700, fontFamily: A.font, fontSize: 14,
        }}>Go to my jobs</button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 11 — Browse / search results
// ─────────────────────────────────────────────────────────────
function ContractorRow({ tone, name, trade, location, rating, reviews, price, day, badge }) {
  return (
    <div style={{
      background: A.surface, borderRadius: 18, padding: 12,
      border: `1px solid ${A.hairline}`,
      display: 'flex', gap: 12,
    }}>
      <div style={{ width: 86, height: 86, borderRadius: 14, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <Photo tone={tone} width={86} height={86} radius={14} />
        {badge && (
          <div style={{
            position: 'absolute', bottom: 4, left: 4,
            padding: '2px 6px', borderRadius: 6, background: A.terracotta, color: '#fff',
            fontSize: 9, fontWeight: 800, letterSpacing: 0.3,
          }}>{badge}</div>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: -0.2 }}>{name}</span>
          <VerifiedBadge size={12} />
        </div>
        <div style={{ fontSize: 12, color: A.sub, marginTop: 3 }}>{trade}</div>
        <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Stars rating={rating} count={reviews} size={11} />
          <span style={{ fontSize: 11.5, color: A.sub, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            {Icon.pin(A.sub2, 10)} {location}
          </span>
        </div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: A.sage, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            {Icon.bolt(A.sage, 10)} Free {day}
          </span>
          <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.3 }}>{price}<span style={{ fontSize: 11, color: A.sub, fontWeight: 600 }}>/day</span></span>
        </div>
      </div>
    </div>
  );
}

function Screen11_Browse() {
  return (
    <Phone>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 88, overflow: 'hidden' }}>
        {/* Search header */}
        <div style={{ padding: '54px 16px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.chevL(A.ink, 14)}
          </div>
          <div style={{
            flex: 1, height: 42, background: A.surface, borderRadius: 14,
            border: `1px solid ${A.hairline}`,
            display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8,
            fontSize: 14,
          }}>
            {Icon.search(A.sub, 16)}
            <span style={{ color: A.ink, fontWeight: 600 }}>tilers</span>
            <span style={{ flex: 1, color: A.sub }}> near N16</span>
            <span style={{ color: A.sub2 }}>{Icon.x(A.sub2, 14)}</span>
          </div>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: A.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.filter('#fff', 16)}
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ padding: '12px 16px 0', display: 'flex', gap: 6, overflow: 'hidden' }}>
          {[['Verified', true], ['4.8+ rated', true], ['Within 3mi', false], ['£', false], ['Available this wk', false]].map(([l, on], i) => (
            <div key={i} style={{
              padding: '7px 11px', borderRadius: 999, flexShrink: 0,
              background: on ? A.ink : A.surface,
              color: on ? '#fff' : A.ink,
              border: on ? 'none' : `1px solid ${A.hairline}`,
              fontSize: 12, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 4,
            }}>{on && Icon.check('#fff', 11)} {l}</div>
          ))}
        </div>

        {/* Result count + toggle */}
        <div style={{ padding: '14px 22px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>34 tilers near you</div>
            <div style={{ fontSize: 11.5, color: A.sub, marginTop: 1 }}>Sorted by best match</div>
          </div>
          <div style={{ display: 'flex', background: A.surface, borderRadius: 999, padding: 3, border: `1px solid ${A.hairline}`, gap: 2 }}>
            <div style={{ padding: '5px 10px', borderRadius: 999, background: A.ink, color: '#fff', fontSize: 11.5, fontWeight: 700 }}>List</div>
            <div style={{ padding: '5px 10px', borderRadius: 999, color: A.sub, fontSize: 11.5, fontWeight: 600 }}>Map</div>
          </div>
        </div>

        {/* List */}
        <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ContractorRow tone="rust" name="Bea Coltrane" trade="Tiling · Bathrooms · Kitchens" location="Hackney, 1.4mi" rating="4.98" reviews="64" price="£220" day="Wed" badge="TOP" />
          <ContractorRow tone="cocoa" name="Tomás Whelan" trade="Plumbing & tiling" location="Bow, 2.6mi" rating="4.91" reviews="89" price="£195" day="Mon" />
          <ContractorRow tone="moss" name="Stefan Krol" trade="Tiling · Wet rooms" location="Walthamstow, 2.9mi" rating="4.87" reviews="51" price="£210" day="Thu" />
          <ContractorRow tone="cream" name="Aisha Rahman" trade="Tiling · Mosaic specialist" location="Crouch End, 1.7mi" rating="4.95" reviews="38" price="£245" day="Fri" />
        </div>
      </div>
      <TabBar active="home" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 12 — Filter bottom sheet (modal)
// ─────────────────────────────────────────────────────────────
function Screen12_Filter() {
  return (
    <Phone bg={A.bg}>
      {/* Faded background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(28,24,19,0.55)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      }} />
      {/* Behind-the-scrim peek of list */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: A.bg, opacity: 0.18 }} />

      {/* Bottom sheet */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: A.surface, borderRadius: '28px 28px 0 0',
        padding: '12px 22px 30px', height: 640,
      }}>
        {/* grabber */}
        <div style={{ width: 40, height: 4, background: A.hairline2, borderRadius: 4, margin: '4px auto 16px' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: A.sub, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Reset</span>
          <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.2 }}>Filters</span>
          <span style={{ width: 24 }}/>
        </div>

        {/* Trade */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: A.ink }}>Trade</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
            {[['Plumbing', false], ['Tiling', true], ['Painting', false], ['Electrical', false], ['Carpentry', true], ['Roofing', false], ['Gardening', false]].map(([l, on], i) => (
              <div key={i} style={{
                padding: '8px 12px', borderRadius: 10, fontSize: 12.5, fontWeight: 600,
                background: on ? A.terraTint : A.surfaceAlt,
                color: on ? A.terracotta : A.ink,
                border: on ? `1px solid ${A.terracotta}` : `1px solid ${A.hairline}`,
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>{on && Icon.check(A.terracotta, 11)} {l}</div>
            ))}
          </div>
        </div>

        {/* Price range */}
        <div style={{ marginTop: 22 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: A.ink }}>Day rate</div>
            <div style={{ fontSize: 12.5, color: A.sub, fontWeight: 600 }}>£180 – £320</div>
          </div>
          {/* slider track */}
          <div style={{ marginTop: 14, height: 4, background: A.hairline2, borderRadius: 4, position: 'relative' }}>
            <div style={{ position: 'absolute', left: '15%', right: '35%', top: 0, bottom: 0, background: A.terracotta, borderRadius: 4 }} />
            {/* knobs */}
            {[15, 65].map((pct, i) => (
              <div key={i} style={{
                position: 'absolute', left: `${pct}%`, top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 22, height: 22, borderRadius: 999, background: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                border: `2px solid ${A.terracotta}`,
              }} />
            ))}
          </div>
          <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: A.sub2, fontWeight: 600 }}>
            <span>£0</span><span>£500+</span>
          </div>
        </div>

        {/* Rating */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: A.ink }}>Minimum rating</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            {['Any', '4.0+', '4.5+', '4.8+'].map((l, i) => (
              <div key={i} style={{
                flex: 1, padding: '10px 0', borderRadius: 10, fontSize: 12.5, fontWeight: 700,
                background: i === 2 ? A.ink : A.surfaceAlt,
                color: i === 2 ? '#fff' : A.ink,
                border: i === 2 ? 'none' : `1px solid ${A.hairline}`,
                textAlign: 'center',
              }}>{l}</div>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div style={{ marginTop: 22, background: A.surfaceAlt, borderRadius: 14, border: `1px solid ${A.hairline}` }}>
          {[
            ['Verified only', 'ID + insurance confirmed', true],
            ['Available this week', 'Can start in the next 7 days', false],
          ].map(([t, s, on], i) => (
            <div key={i} style={{
              padding: '12px 14px',
              borderBottom: i < 1 ? `1px solid ${A.hairline}` : 'none',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t}</div>
                <div style={{ fontSize: 11.5, color: A.sub, marginTop: 1 }}>{s}</div>
              </div>
              <div style={{
                width: 42, height: 26, borderRadius: 999,
                background: on ? A.terracotta : A.hairline2,
                position: 'relative', transition: 'background .15s',
              }}>
                <div style={{
                  position: 'absolute', top: 2, left: on ? 18 : 2,
                  width: 22, height: 22, borderRadius: 999, background: '#fff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Apply button */}
        <button style={{
          position: 'absolute', bottom: 30, left: 22, right: 22,
          height: 54, borderRadius: 16, background: A.ink, color: '#fff',
          border: 0, fontFamily: A.font, fontSize: 15, fontWeight: 700,
        }}>
          Show 28 results
        </button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 13 — My jobs (active / past)
// ─────────────────────────────────────────────────────────────
function JobCard({ status, statusColor, statusBg, title, tone, contractor, when, progressPct, action, price }) {
  return (
    <div style={{
      background: A.surface, borderRadius: 20, padding: 14,
      border: `1px solid ${A.hairline}`,
    }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Photo tone={tone} width={64} height={64} radius={12} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: statusBg, color: statusColor,
            padding: '3px 8px', borderRadius: 999,
            fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: statusColor }}/>
            {status}
          </div>
          <div style={{ fontSize: 14.5, fontWeight: 700, marginTop: 4, letterSpacing: -0.2 }}>{title}</div>
          <div style={{ fontSize: 12, color: A.sub, marginTop: 2 }}>{contractor} · {when}</div>
        </div>
        <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.3, marginTop: 22 }}>{price}</div>
      </div>
      {progressPct !== undefined && (
        <div style={{ marginTop: 12 }}>
          <div style={{ height: 4, background: A.hairline2, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${progressPct}%`, height: '100%', background: A.terracotta, borderRadius: 4 }} />
          </div>
        </div>
      )}
      {action && (
        <div style={{
          marginTop: 12, padding: '10px 12px',
          background: A.terraTint, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: A.terraDark }}>{action}</span>
          {Icon.chevR(A.terraDark, 11)}
        </div>
      )}
    </div>
  );
}

function Screen13_MyJobs() {
  return (
    <Phone>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 88, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: A.serif, fontSize: 38, letterSpacing: -0.6, lineHeight: 1 }}>
              My <span style={{ fontStyle: 'italic', color: A.terracotta }}>jobs</span>
            </div>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.plus(A.ink, 18)}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ padding: '20px 22px 0', display: 'flex', gap: 18, borderBottom: `1px solid ${A.hairline}` }}>
          <div style={{ paddingBottom: 10, fontSize: 13, fontWeight: 700, color: A.ink, borderBottom: `2px solid ${A.terracotta}`, marginBottom: -1 }}>Active · 2</div>
          <div style={{ paddingBottom: 10, fontSize: 13, fontWeight: 600, color: A.sub }}>Completed · 7</div>
          <div style={{ paddingBottom: 10, fontSize: 13, fontWeight: 600, color: A.sub }}>Drafts</div>
        </div>

        {/* List */}
        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <JobCard
            status="IN PROGRESS" statusColor={A.terracotta} statusBg={A.terraTint}
            title="Bathroom tile re-grout" tone="sand"
            contractor="Bea Coltrane" when="Day 1 of 1"
            progressPct={65}
            action="View today's photos →" price="£380"
          />
          <JobCard
            status="QUOTING" statusColor="#9C7700" statusBg="#FBF1D7"
            title="Repaint front door + frame" tone="rust"
            contractor="3 quotes received" when="Posted Sat"
            action="Compare quotes →" price="£90–180"
          />
          <JobCard
            status="COMPLETED" statusColor={A.sage} statusBg={A.sageSoft}
            title="Replace kitchen tap" tone="slate"
            contractor="Tomás Whelan" when="14 Apr · 4.0★ ★ ★ ★"
            action="Leave a review →" price="£140"
          />

          {/* Insight strip */}
          <div style={{
            marginTop: 4, padding: '14px 16px', borderRadius: 16,
            background: A.surfaceAlt, border: `1px dashed ${A.hairline2}`,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: A.terraTint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.bolt(A.terracotta, 16)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>You've spent <span style={{ color: A.terracotta }}>£1,420</span> this year</div>
              <div style={{ fontSize: 11.5, color: A.sub, marginTop: 1 }}>Avg. saved vs. high-street agencies: £310</div>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="inbox" />
    </Phone>
  );
}

Object.assign(window, {
  Screen8_OTP, Screen9_Permissions, Screen10_JobPosted, Screen11_Browse, Screen12_Filter, Screen13_MyJobs,
  ContractorRow, JobCard,
});
