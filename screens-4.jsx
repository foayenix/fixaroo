// screens-4.jsx — Artisan screens 14-19: Booking, Review, Verification, Submit quote, Earnings, Settings.

// ─────────────────────────────────────────────────────────────
// SCREEN 14 — Booking confirmed + escrow
// ─────────────────────────────────────────────────────────────
function Screen14_Booking() {
  return (
    <Phone bg={A.bg}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.chevL(A.ink, 14)}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Booking</div>
          <div style={{ fontSize: 13, color: A.terracotta, fontWeight: 700 }}>Help</div>
        </div>

        {/* Success block */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px',
            borderRadius: 999, background: A.sageSoft, color: A.sage,
            fontSize: 11.5, fontWeight: 700, letterSpacing: 0.3,
          }}>
            <span style={{ width: 14, height: 14, borderRadius: 999, background: A.sage, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.check('#fff', 8)}
            </span>
            BOOKED & CONFIRMED
          </div>
          <div style={{ fontFamily: A.serif, fontSize: 30, letterSpacing: -0.5, lineHeight: 1.05, marginTop: 12 }}>
            Bea's coming<br/>
            <span style={{ fontStyle: 'italic', color: A.terracotta }}>Wednesday, 9am.</span>
          </div>
        </div>

        {/* Job + person */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{
            background: A.surface, borderRadius: 20, padding: 16,
            border: `1px solid ${A.hairline}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, overflow: 'hidden' }}>
                <Photo tone="rust" width={44} height={44} radius={999} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 700 }}>Bea Coltrane</span>
                  <VerifiedBadge size={12} />
                </div>
                <div style={{ fontSize: 12, color: A.sub, marginTop: 2 }}>Tiling specialist · 4.98★</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: A.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {Icon.msg(A.ink, 16)}
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: A.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3l3-1 2 3-2 1c1 2 2 3 4 4l1-2 3 2-1 3a8 8 0 01-10-10z" stroke={A.ink} strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>

            <div style={{ height: 1, background: A.hairline, margin: '14px 0' }} />

            {/* Job details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Photo tone="slate" width={48} height={48} radius={10} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700 }}>Bathroom tile re-grout</div>
                <div style={{ fontSize: 11.5, color: A.sub, marginTop: 2 }}>1 day · walls + floor · anti-mould</div>
              </div>
            </div>

            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ background: A.surfaceAlt, borderRadius: 12, padding: '10px 12px', border: `1px solid ${A.hairline}` }}>
                <div style={{ fontSize: 10.5, color: A.sub, fontWeight: 700, letterSpacing: 0.3 }}>STARTS</div>
                <div style={{ fontSize: 14, fontWeight: 800, marginTop: 2 }}>Wed 17 May</div>
                <div style={{ fontSize: 11, color: A.sub, marginTop: 1 }}>9:00 — 17:00</div>
              </div>
              <div style={{ background: A.surfaceAlt, borderRadius: 12, padding: '10px 12px', border: `1px solid ${A.hairline}` }}>
                <div style={{ fontSize: 10.5, color: A.sub, fontWeight: 700, letterSpacing: 0.3 }}>ADDRESS</div>
                <div style={{ fontSize: 14, fontWeight: 800, marginTop: 2 }}>Flat 4, 17 Cazenove</div>
                <div style={{ fontSize: 11, color: A.sub, marginTop: 1 }}>N16 6BB</div>
              </div>
            </div>
          </div>
        </div>

        {/* Escrow card */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{
            background: A.ink, color: '#fff', borderRadius: 20, padding: 18, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%',
              background: 'rgba(200,85,61,0.15)',
            }} />
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.12)', padding: '4px 10px', borderRadius: 999,
              fontSize: 10.5, fontWeight: 700, letterSpacing: 0.4,
            }}>
              {Icon.shield('#fff', 11)} HELD IN ESCROW
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: A.serif, fontSize: 40, lineHeight: 1, letterSpacing: -1 }}>£380</span>
              <span style={{ fontSize: 12, opacity: 0.7 }}>·  released on completion</span>
            </div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8, lineHeight: 1.45 }}>
              You'll review the work and confirm before Bea is paid. No funds change hands until you're happy.
            </div>

            <div style={{
              marginTop: 14, padding: '10px 12px', background: 'rgba(255,255,255,0.08)',
              borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 28, height: 18, borderRadius: 3, background: 'linear-gradient(135deg, #C8553D 0%, #D9924D 100%)' }} />
              <span style={{ fontSize: 12.5, flex: 1 }}>Visa ending <strong>4280</strong></span>
              <span style={{ fontSize: 12, color: '#fff', opacity: 0.7 }}>Change</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div style={{ padding: '14px 22px 30px', position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 52, borderRadius: 14, background: A.surface,
            border: `1px solid ${A.hairline}`, color: A.ink, fontWeight: 700, fontFamily: A.font, fontSize: 14,
          }}>Cancel</button>
          <button style={{
            flex: 1.6, height: 52, borderRadius: 14, background: A.terracotta,
            border: 0, color: '#fff', fontWeight: 700, fontFamily: A.font, fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            Add to calendar
          </button>
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 15 — Leave a review (with mandatory after-photo)
// ─────────────────────────────────────────────────────────────
function Screen15_Review() {
  return (
    <Phone bg={A.bg}>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 96, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.x(A.ink, 14)}
          </div>
          <div style={{ fontSize: 13, color: A.sub, fontWeight: 600 }}>Step 1 of 2</div>
          <div style={{ width: 36 }}/>
        </div>

        <div style={{ padding: '12px 22px 0' }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: A.terracotta }}/>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: A.hairline2 }}/>
          </div>
        </div>

        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ fontFamily: A.serif, fontSize: 30, letterSpacing: -0.5, lineHeight: 1.05 }}>
            Add your <span style={{ fontStyle: 'italic', color: A.terracotta }}>after</span> photos.
          </div>
          <div style={{ fontSize: 13.5, color: A.sub, marginTop: 8, lineHeight: 1.45 }}>
            Required to confirm completion. These pair with your "before" photos on Bea's profile.
          </div>
        </div>

        {/* Before / After comparison */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: A.sub, letterSpacing: 0.4, marginBottom: 8 }}>BEFORE · YOU UPLOADED</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Photo tone="slate" width={84} height={84} radius={14} before="BEFORE"/>
            <Photo tone="cocoa" width={84} height={84} radius={14} before="BEFORE"/>
            <Photo tone="plum" width={84} height={84} radius={14} before="BEFORE"/>
          </div>
        </div>

        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: A.terracotta, letterSpacing: 0.4 }}>AFTER · MATCH EACH BEFORE</div>
            <div style={{ fontSize: 11, color: A.sub, fontWeight: 600 }}>2 / 3</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Photo tone="sand" width={84} height={84} radius={14} before="AFTER" />
            <Photo tone="cream" width={84} height={84} radius={14} before="AFTER" />
            <div style={{
              width: 84, height: 84, borderRadius: 14,
              border: `1.5px dashed ${A.terracotta}`, background: A.terraTint,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 4, color: A.terracotta,
            }}>
              {Icon.camera(A.terracotta, 18)}
              <span style={{ fontSize: 10, fontWeight: 700 }}>+ ADD</span>
            </div>
          </div>
        </div>

        {/* Mandatory note */}
        <div style={{ padding: '12px 22px 0' }}>
          <div style={{
            background: A.terraTint, border: `1px solid ${A.terracotta}`, borderRadius: 12,
            padding: '10px 12px', display: 'flex', alignItems: 'flex-start', gap: 10,
          }}>
            {Icon.shield(A.terracotta, 16)}
            <span style={{ fontSize: 11.5, color: A.terraDark, lineHeight: 1.4 }}>
              Mandatory before/after pairs build trust for every contractor on Artisan. This is our integrity pledge.
            </span>
          </div>
        </div>

        {/* Rating */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ fontSize: 13, fontWeight: 800 }}>How was the work?</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ flex: 1, height: 48, borderRadius: 12, background: i <= 5 ? A.surface : A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {Icon.star(i <= 5 ? A.terracotta : A.hairline2, 24)}
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {[['On time', true], ['Tidy', true], ['Good comms', true], ['Great value', false], ['Would rebook', false]].map(([l, on], i) => (
              <div key={i} style={{
                padding: '7px 11px', borderRadius: 10, fontSize: 12, fontWeight: 600,
                background: on ? A.ink : A.surface,
                color: on ? '#fff' : A.ink,
                border: on ? 'none' : `1px solid ${A.hairline}`,
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>{on && Icon.check('#fff', 11)} {l}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 22px 30px', background: 'linear-gradient(180deg, rgba(244,239,230,0) 0%, #F4EFE6 30%)',
      }}>
        <button style={{
          width: '100%', height: 54, borderRadius: 16, background: A.ink, color: '#fff',
          border: 0, fontFamily: A.font, fontSize: 15, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>Continue {Icon.chevR('#fff', 14)}</button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 16 — Contractor verification
// ─────────────────────────────────────────────────────────────
function VerifyRow({ icon, title, sub, state }) {
  // state: 'done' | 'pending' | 'todo'
  const config = {
    done:    { bg: A.sageSoft, fg: A.sage, label: 'VERIFIED', icon: Icon.check },
    pending: { bg: '#FBF1D7',  fg: '#9C7700', label: 'IN REVIEW', icon: null },
    todo:    { bg: A.terraTint, fg: A.terracotta, label: 'REQUIRED', icon: null },
  }[state];
  return (
    <div style={{
      background: A.surface, borderRadius: 16, padding: 14, border: `1px solid ${A.hairline}`,
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{ width: 42, height: 42, borderRadius: 12, background: A.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 11.5, color: A.sub, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{
        padding: '4px 9px', borderRadius: 999, background: config.bg, color: config.fg,
        fontSize: 10, fontWeight: 800, letterSpacing: 0.4,
        display: 'inline-flex', alignItems: 'center', gap: 3,
      }}>
        {state === 'done' && Icon.check(config.fg, 9)} {config.label}
      </div>
    </div>
  );
}

function Screen16_Verification() {
  return (
    <Phone bg={A.bg}>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 96, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.chevL(A.ink, 14)}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Get verified</div>
          <div style={{ fontSize: 13, color: A.terracotta, fontWeight: 700 }}>Help</div>
        </div>

        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ fontFamily: A.serif, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5 }}>
            Two more steps to <span style={{ fontStyle: 'italic', color: A.terracotta }}>going live.</span>
          </div>
          <div style={{ fontSize: 13, color: A.sub, marginTop: 8, lineHeight: 1.45 }}>
            Verified contractors get 3.2× more leads. Most reviews take under 24h.
          </div>
        </div>

        {/* Progress ring style */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ background: A.surface, borderRadius: 18, padding: 16, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ position: 'relative', width: 60, height: 60 }}>
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" stroke={A.hairline2} strokeWidth="6" fill="none"/>
                <circle cx="30" cy="30" r="26" stroke={A.terracotta} strokeWidth="6" fill="none"
                  strokeDasharray={`${(3/5) * 163} 163`} strokeLinecap="round"
                  transform="rotate(-90 30 30)" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>3/5</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800 }}>Verification 60%</div>
              <div style={{ fontSize: 11.5, color: A.sub, marginTop: 2 }}>You're already accepting low-priority leads.</div>
            </div>
          </div>
        </div>

        {/* Rows */}
        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <VerifyRow
            state="done"
            title="Photo ID"
            sub="Driving licence · matched on 8 May"
            icon={
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                <rect x="1" y="3" width="20" height="14" rx="2.5" stroke={A.ink} strokeWidth="1.5"/>
                <circle cx="7.5" cy="9" r="2" stroke={A.ink} strokeWidth="1.5"/>
                <path d="M12 8h6M12 11h4" stroke={A.ink} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            } />
          <VerifyRow
            state="done"
            title="Phone & email"
            sub="+44 7700 900 482 · bea@bcoltrane.co.uk"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="5" y="2" width="10" height="16" rx="2" stroke={A.ink} strokeWidth="1.5"/>
                <circle cx="10" cy="15" r="0.8" fill={A.ink}/>
              </svg>
            } />
          <VerifyRow
            state="pending"
            title="Public liability insurance"
            sub="Uploaded · expect reply by 14 May"
            icon={Icon.shield(A.ink, 20)} />
          <VerifyRow
            state="todo"
            title="Trade qualification"
            sub="NVQ / City & Guilds / proof of experience"
            icon={
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                <path d="M11 2l9 4-9 4-9-4 9-4z" stroke={A.ink} strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M5 8v5c0 2 3 3 6 3s6-1 6-3V8" stroke={A.ink} strokeWidth="1.5"/>
              </svg>
            } />
          <VerifyRow
            state="todo"
            title="3 portfolio jobs"
            sub="Add before/after photos from past work"
            icon={Icon.camera(A.ink, 20)} />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 22px 30px', background: 'linear-gradient(180deg, rgba(244,239,230,0) 0%, #F4EFE6 30%)',
      }}>
        <button style={{
          width: '100%', height: 54, borderRadius: 16, background: A.terracotta, color: '#fff',
          border: 0, fontFamily: A.font, fontSize: 15, fontWeight: 700,
        }}>
          Continue with trade qualification
        </button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 17 — Submit a quote (contractor)
// ─────────────────────────────────────────────────────────────
function Screen17_SubmitQuote() {
  return (
    <Phone bg={A.bg}>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 96, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.chevL(A.ink, 14)}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>New quote</div>
          <div style={{ fontSize: 13, color: A.sub2, fontWeight: 600 }}>Draft</div>
        </div>

        {/* Job preview */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{
            background: A.surface, borderRadius: 16, padding: 12,
            border: `1px solid ${A.hairline}`, display: 'flex', gap: 10, alignItems: 'center',
          }}>
            <Photo tone="sand" width={48} height={48} radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Repaint Victorian sash windows</div>
              <div style={{ fontSize: 11, color: A.sub, marginTop: 2 }}>Daniel R. · Crouch End · 2.1mi</div>
            </div>
            <div style={{ padding: '3px 8px', borderRadius: 999, background: A.terraTint, color: A.terracotta, fontSize: 10, fontWeight: 800, letterSpacing: 0.3 }}>NEW</div>
          </div>
        </div>

        {/* Price hero */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ fontSize: 11, color: A.sub, fontWeight: 700, letterSpacing: 0.4 }}>YOUR PRICE</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
            <span style={{ fontFamily: A.serif, fontSize: 56, lineHeight: 1, letterSpacing: -1.5 }}>£</span>
            <span style={{ fontFamily: A.serif, fontSize: 56, lineHeight: 1, letterSpacing: -1.5 }}>1,420</span>
            <span style={{ fontSize: 12, color: A.sub, marginLeft: 6 }}>fixed price</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, padding: '4px 8px', background: A.sageSoft, borderRadius: 999, alignSelf: 'flex-start', width: 'fit-content', display: 'inline-flex' }}>
            {Icon.check(A.sage, 10)}
            <span style={{ fontSize: 10.5, color: A.sage, fontWeight: 700 }}>Within client's £1.2–1.8k range</span>
          </div>
        </div>

        {/* Breakdown */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 10 }}>Breakdown</div>
          <div style={{ background: A.surface, borderRadius: 14, border: `1px solid ${A.hairline}` }}>
            {[
              ['Labour · 5 days', '£900'],
              ['Materials · paint, primer, putty', '£320'],
              ['Lead-paint safe stripping', '£200'],
            ].map(([l, v], i, arr) => (
              <div key={i} style={{
                padding: '12px 14px',
                borderBottom: i < arr.length - 1 ? `1px solid ${A.hairline}` : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: 13.5,
              }}>
                <span style={{ color: A.ink2 }}>{l}</span>
                <span style={{ fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, fontSize: 12, color: A.terracotta, fontWeight: 700 }}>
            {Icon.plus(A.terracotta, 14)} Add line item
          </div>
        </div>

        {/* Duration + start */}
        <div style={{ padding: '16px 22px 0', display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, background: A.surface, borderRadius: 14, padding: '12px 14px', border: `1px solid ${A.hairline}` }}>
            <div style={{ fontSize: 10.5, color: A.sub, fontWeight: 700, letterSpacing: 0.3 }}>DURATION</div>
            <div style={{ fontSize: 16, fontWeight: 800, marginTop: 2 }}>5 working days</div>
          </div>
          <div style={{ flex: 1, background: A.surface, borderRadius: 14, padding: '12px 14px', border: `1px solid ${A.hairline}` }}>
            <div style={{ fontSize: 10.5, color: A.sub, fontWeight: 700, letterSpacing: 0.3 }}>EARLIEST</div>
            <div style={{ fontSize: 16, fontWeight: 800, marginTop: 2 }}>Mon 22 May</div>
          </div>
        </div>

        {/* Note */}
        <div style={{ padding: '16px 22px 0' }}>
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Note to client</div>
          <div style={{
            background: A.surface, borderRadius: 14, padding: '12px 14px',
            border: `1px solid ${A.hairline}`, fontSize: 13, lineHeight: 1.45, color: A.ink2, minHeight: 56,
          }}>
            Happy to use F&B Pavilion Gray as you mentioned. I'll bring dust sheets & a HEPA vac — your floors will be cleaner than I found them.
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 22px 30px', background: 'linear-gradient(180deg, rgba(244,239,230,0) 0%, #F4EFE6 30%)',
        display: 'flex', gap: 10,
      }}>
        <button style={{
          flex: 1, height: 52, borderRadius: 14, background: A.surface, border: `1px solid ${A.hairline}`,
          color: A.ink, fontWeight: 700, fontFamily: A.font, fontSize: 14,
        }}>Save draft</button>
        <button style={{
          flex: 1.6, height: 52, borderRadius: 14, background: A.terracotta,
          border: 0, color: '#fff', fontWeight: 700, fontFamily: A.font, fontSize: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          {Icon.send('#fff', 14)} Send quote
        </button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 18 — Earnings (contractor)
// ─────────────────────────────────────────────────────────────
function Screen18_Earnings() {
  const bars = [40, 65, 55, 80, 95, 60, 50];
  const days = ['M','T','W','T','F','S','S'];
  return (
    <Phone bg={A.bg}>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 96, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.chevL(A.ink, 14)}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Earnings</div>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke={A.ink} strokeWidth="1.5"/>
              <path d="M8 4v4l2.5 1.5" stroke={A.ink} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Big balance card */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{
            background: A.ink, color: '#fff', borderRadius: 22, padding: 20, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(200,85,61,0.18)' }} />

            <div style={{ fontSize: 11.5, opacity: 0.7, fontWeight: 600, letterSpacing: 0.3 }}>AVAILABLE TO WITHDRAW</div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 4 }}>
              <span style={{ fontFamily: A.serif, fontSize: 54, lineHeight: 1, letterSpacing: -1.4 }}>£2,840</span>
              <span style={{ fontSize: 18, opacity: 0.6, marginLeft: 6 }}>.50</span>
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 12px' }}>
                <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 600, letterSpacing: 0.3 }}>PENDING</div>
                <div style={{ fontSize: 15, fontWeight: 800, marginTop: 2 }}>£1,240</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 12px' }}>
                <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 600, letterSpacing: 0.3 }}>THIS MONTH</div>
                <div style={{ fontSize: 15, fontWeight: 800, marginTop: 2 }}>£6,420</div>
              </div>
            </div>

            <button style={{
              width: '100%', marginTop: 14, height: 44, borderRadius: 12,
              background: A.terracotta, border: 0, color: '#fff', fontWeight: 700,
              fontFamily: A.font, fontSize: 14,
            }}>Withdraw to Lloyds ····0492</button>
          </div>
        </div>

        {/* Chart */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 800 }}>This week</div>
            <div style={{ fontSize: 12, color: A.sub }}>Mon 8 — Sun 14</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 100 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: '100%', height: `${h}%`,
                  background: i === 4 ? A.terracotta : A.terraSoft,
                  borderRadius: 6,
                }} />
                <span style={{ fontSize: 10.5, color: A.sub, fontWeight: 600 }}>{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 10 }}>Recent</div>
          <div style={{ background: A.surface, borderRadius: 16, border: `1px solid ${A.hairline}` }}>
            {[
              ['Kitchen splashback re-tile', 'Eleanor M.', '12 May', '+£420', 'cleared'],
              ['Bathroom regrout', 'Maya P.', '9 May', '+£380', 'cleared'],
              ['Hallway floor tiles', 'Jamie K.', '5 May', '+£640', 'pending'],
            ].map(([t, p, d, v, s], i, arr) => (
              <div key={i} style={{
                padding: '12px 14px',
                borderBottom: i < arr.length - 1 ? `1px solid ${A.hairline}` : 'none',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: A.terraTint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: A.terracotta }}>
                  {Icon.briefcase(A.terracotta, 16)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: A.sub, marginTop: 1 }}>{p} · {d}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, fontWeight: 800 }}>{v}</div>
                  <div style={{ fontSize: 10, color: s === 'pending' ? '#9C7700' : A.sage, fontWeight: 700, letterSpacing: 0.3, textTransform: 'uppercase' }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active="inbox" contractor />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 19 — Settings / profile
// ─────────────────────────────────────────────────────────────
function SettingsRow({ icon, iconBg, title, sub, value, last, danger }) {
  return (
    <div style={{
      padding: '12px 14px',
      borderBottom: last ? 'none' : `1px solid ${A.hairline}`,
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      {icon && (
        <div style={{ width: 30, height: 30, borderRadius: 8, background: iconBg || A.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: danger ? A.terracotta : A.ink }}>{title}</div>
        {sub && <div style={{ fontSize: 11.5, color: A.sub, marginTop: 1 }}>{sub}</div>}
      </div>
      {value && <span style={{ fontSize: 13, color: A.sub, fontWeight: 500 }}>{value}</span>}
      {!danger && Icon.chevR(A.sub2, 11)}
    </div>
  );
}

function Screen19_Settings() {
  return (
    <Phone bg={A.bg}>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 96, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '60px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36 }}/>
          <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.2 }}>Account</div>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="4" viewBox="0 0 14 4" fill={A.ink}>
              <circle cx="2" cy="2" r="1.5"/><circle cx="7" cy="2" r="1.5"/><circle cx="12" cy="2" r="1.5"/>
            </svg>
          </div>
        </div>

        {/* Avatar header */}
        <div style={{ padding: '12px 22px 0', textAlign: 'center' }}>
          <div style={{ width: 84, height: 84, borderRadius: 999, overflow: 'hidden', margin: '0 auto', position: 'relative' }}>
            <Photo tone="cream" width={84} height={84} radius={999} />
            <div style={{
              position: 'absolute', bottom: -2, right: -2,
              width: 30, height: 30, borderRadius: 999, background: A.ink,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '3px solid #F4EFE6',
            }}>
              {Icon.camera('#fff', 14)}
            </div>
          </div>
          <div style={{ fontFamily: A.serif, fontSize: 26, letterSpacing: -0.3, marginTop: 12, lineHeight: 1 }}>
            Eleanor Macfarlane
          </div>
          <div style={{ fontSize: 12.5, color: A.sub, marginTop: 6, display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
            {Icon.pin(A.sub, 11)} Stoke Newington · Joined Apr '25
          </div>
        </div>

        {/* Stat strip */}
        <div style={{ padding: '16px 22px 0' }}>
          <div style={{
            background: A.surface, borderRadius: 16, padding: '12px 8px',
            border: `1px solid ${A.hairline}`,
            display: 'flex', alignItems: 'center',
          }}>
            <StatBlock value="3" label="Active jobs" />
            <div style={{ width: 1, height: 24, background: A.hairline }}/>
            <StatBlock value="9" label="Total jobs" />
            <div style={{ width: 1, height: 24, background: A.hairline }}/>
            <StatBlock value="£1.4k" label="Spent" />
          </div>
        </div>

        {/* List sections */}
        <div style={{ padding: '18px 22px 0' }}>
          <div style={{ fontSize: 11, color: A.sub, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8, padding: '0 6px' }}>Account</div>
          <div style={{ background: A.surface, borderRadius: 16, border: `1px solid ${A.hairline}` }}>
            <SettingsRow icon={Icon.user(A.ink, 16)} title="Personal details" sub="Name, email, phone" />
            <SettingsRow
              icon={
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <rect x="1" y="1" width="14" height="10" rx="2" stroke={A.ink} strokeWidth="1.4"/>
                  <path d="M1 4h14" stroke={A.ink} strokeWidth="1.4"/>
                </svg>
              }
              title="Payment methods" value="Visa ····4280" />
            <SettingsRow icon={Icon.pin(A.ink, 14)} title="Saved addresses" sub="Home · Mum's house" last />
          </div>
        </div>

        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ fontSize: 11, color: A.sub, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8, padding: '0 6px' }}>App</div>
          <div style={{ background: A.surface, borderRadius: 16, border: `1px solid ${A.hairline}` }}>
            <SettingsRow
              icon={<svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M8 1c-3 0-5 2.5-5 5.5v3l-2 2.5h14l-2-2.5v-3C13 3.5 11 1 8 1zM5 14a3 3 0 006 0" stroke={A.ink} strokeWidth="1.4" strokeLinecap="round"/></svg>}
              title="Notifications" value="On" />
            <SettingsRow
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke={A.ink} strokeWidth="1.4"/>
                  <path d="M1.5 8h13M8 1.5a10 10 0 010 13M8 1.5a10 10 0 000 13" stroke={A.ink} strokeWidth="1.4"/>
                </svg>
              }
              title="Language" value="English (UK)" />
            <SettingsRow icon={Icon.shield(A.ink, 14)} title="Privacy & data" last />
          </div>
        </div>

        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ fontSize: 11, color: A.sub, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8, padding: '0 6px' }}>Support</div>
          <div style={{ background: A.surface, borderRadius: 16, border: `1px solid ${A.hairline}` }}>
            <SettingsRow icon={<span style={{ fontSize: 13, fontWeight: 800, color: A.ink }}>?</span>} title="Help centre" />
            <SettingsRow icon={<span style={{ fontSize: 13, fontWeight: 800, color: A.ink }}>@</span>} title="Contact us" sub="Replies within 4 hours" />
            <SettingsRow title="Become a contractor" sub="Earn extra by listing your trade" last />
          </div>
        </div>

        <div style={{ padding: '14px 22px 24px' }}>
          <div style={{ background: A.surface, borderRadius: 16, border: `1px solid ${A.hairline}` }}>
            <SettingsRow title="Sign out" danger last />
          </div>
          <div style={{ textAlign: 'center', marginTop: 14, fontSize: 11, color: A.sub2 }}>
            Artisan · v2.4.1 (build 1872)
          </div>
        </div>
      </div>
      <TabBar active="user" />
    </Phone>
  );
}

Object.assign(window, {
  Screen14_Booking, Screen15_Review, Screen16_Verification, Screen17_SubmitQuote, Screen18_Earnings, Screen19_Settings,
  VerifyRow, SettingsRow,
});
