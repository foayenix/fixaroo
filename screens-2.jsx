// screens-2.jsx — Artisan screens 4-7: Quote inbox, Contractor profile, Chat, Contractor swipe.

// ─────────────────────────────────────────────────────────────
// SCREEN 4 — Quote inbox
// ─────────────────────────────────────────────────────────────
function QuoteCard({ name, initial, tone, verified, rating, reviews, price, eta, beforeTone, afterTone, note, accent }) {
  return (
    <div style={{
      background: A.surface, borderRadius: 22, padding: 14,
      border: accent ? `1.5px solid ${A.terracotta}` : `1px solid ${A.hairline}`,
      position: 'relative',
    }}>
      {accent && (
        <div style={{
          position: 'absolute', top: -9, left: 14,
          background: A.terracotta, color: '#fff', padding: '2px 8px',
          borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: 0.4,
        }}>BEST MATCH</div>
      )}

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 42, height: 42, borderRadius: 999, overflow: 'hidden', position: 'relative' }}>
          <Photo tone={tone} width={42} height={42} radius={999} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: A.serif, fontSize: 18, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}>{initial}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: -0.2 }}>{name}</span>
            {verified && <VerifiedBadge size={13} />}
          </div>
          <div style={{ fontSize: 12, color: A.sub, marginTop: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
            <Stars rating={rating} count={reviews} size={10} />
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: A.ink, letterSpacing: -0.5 }}>{price}</div>
          <div style={{ fontSize: 11, color: A.sub, marginTop: -2 }}>incl. materials</div>
        </div>
      </div>

      {/* Portfolio strip */}
      <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
        <Photo tone={beforeTone} width={'33.33%'} height={62} radius={10} before="BEFORE" />
        <Photo tone={afterTone} width={'33.33%'} height={62} radius={10} before="AFTER" />
        <div style={{
          flex: 1, height: 62, borderRadius: 10, background: A.surfaceAlt,
          border: `1px solid ${A.hairline}`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: A.sub,
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: A.ink }}>+12</div>
          <div style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: 0.3 }}>SIMILAR JOBS</div>
        </div>
      </div>

      {/* Note */}
      <div style={{ fontSize: 13, color: A.ink2, marginTop: 12, lineHeight: 1.4 }}>
        "{note}"
      </div>

      {/* Meta + actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 11.5, fontWeight: 600, color: A.sage,
          background: A.sageSoft, padding: '4px 8px', borderRadius: 999,
        }}>
          {Icon.bolt(A.sage, 11)} Can start {eta}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            background: A.surfaceAlt, border: `1px solid ${A.hairline}`, color: A.ink,
            borderRadius: 12, padding: '8px 14px', fontSize: 13, fontWeight: 700,
            fontFamily: A.font, display: 'flex', alignItems: 'center', gap: 4,
          }}>
            {Icon.msg(A.ink, 14)}
          </button>
          <button style={{
            background: A.terracotta, border: 0, color: '#fff',
            borderRadius: 12, padding: '8px 16px', fontSize: 13, fontWeight: 700,
            fontFamily: A.font,
          }}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

function Screen4_QuoteInbox() {
  return (
    <Phone>
      <div style={{ position: 'absolute', inset: 0, paddingBottom: 88, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '62px 22px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.chevL(A.ink, 14)}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Quotes</div>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: A.surface, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.filter(A.ink, 14)}
          </div>
        </div>

        {/* Job preview */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{
            background: A.surface, borderRadius: 16, padding: 12,
            border: `1px solid ${A.hairline}`,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <Photo tone="slate" width={54} height={54} radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: -0.2 }}>Bathroom tile re-grout</div>
              <div style={{ fontSize: 12, color: A.sub, marginTop: 2 }}>Posted Mon · Stoke Newington · £300–500</div>
            </div>
            <div style={{
              padding: '4px 10px', borderRadius: 999, background: A.ink, color: '#fff',
              fontSize: 11, fontWeight: 700, letterSpacing: 0.3,
            }}>3 NEW</div>
          </div>
        </div>

        {/* Section header */}
        <div style={{ padding: '20px 22px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: A.serif, fontSize: 28, lineHeight: 1, letterSpacing: -0.4 }}>
              3 <span style={{ fontStyle: 'italic', color: A.terracotta }}>quotes</span>
            </div>
            <div style={{ fontSize: 12.5, color: A.sub, marginTop: 4 }}>Sorted by best match · all verified</div>
          </div>
          <div style={{ display: 'flex', gap: 4, background: A.surface, borderRadius: 999, padding: 3, border: `1px solid ${A.hairline}` }}>
            <div style={{ padding: '5px 10px', borderRadius: 999, background: A.ink, color: '#fff', fontSize: 11.5, fontWeight: 700 }}>Match</div>
            <div style={{ padding: '5px 10px', borderRadius: 999, color: A.sub, fontSize: 11.5, fontWeight: 600 }}>Price</div>
          </div>
        </div>

        {/* Quote cards */}
        <div style={{ padding: '6px 22px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <QuoteCard accent
            name="Bea Coltrane" initial="B" tone="rust" verified
            rating="4.98" reviews="64" price="£380" eta="Wed"
            beforeTone="slate" afterTone="sand"
            note="Anti-mould epoxy grout, new silicone seal, full day on site. 12-month workmanship warranty." />
          <QuoteCard
            name="Tomás Whelan" initial="T" tone="cocoa" verified
            rating="4.91" reviews="89" price="£420" eta="next Mon"
            beforeTone="plum" afterTone="cream"
            note="Re-grout + remove & replace cracked tile near tap. Materials supplied." />
        </div>
      </div>
      <TabBar active="inbox" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 5 — Contractor profile
// ─────────────────────────────────────────────────────────────
function StatBlock({ label, value }) {
  return (
    <div style={{ flex: 1, textAlign: 'center' }}>
      <div style={{ fontFamily: A.serif, fontSize: 22, color: A.ink, letterSpacing: -0.3, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 10.5, color: A.sub, marginTop: 4, fontWeight: 600, letterSpacing: 0.3, textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function PortfolioPair({ beforeTone, afterTone, title, days }) {
  return (
    <div style={{ background: A.surface, borderRadius: 16, overflow: 'hidden', border: `1px solid ${A.hairline}` }}>
      <div style={{ display: 'flex' }}>
        <Photo tone={beforeTone} width="50%" height={86} radius={0} before="BEF" />
        <Photo tone={afterTone} width="50%" height={86} radius={0} before="AFT" />
      </div>
      <div style={{ padding: '8px 10px 10px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: -0.1, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontSize: 10, color: A.sub, marginTop: 2 }}>{days} days</div>
      </div>
    </div>
  );
}

function Screen5_Profile() {
  return (
    <Phone statusDark>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', paddingBottom: 96 }}>
        {/* Hero photo */}
        <div style={{ position: 'relative', height: 270 }}>
          <Photo tone="cocoa" width="100%" height={270} radius={0} label="HERO — workshop / portrait" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(28,24,19,0.5) 0%, rgba(28,24,19,0) 35%, rgba(28,24,19,0) 60%, rgba(28,24,19,0.7) 100%)' }} />
          {/* top buttons */}
          <div style={{ position: 'absolute', top: 56, left: 22, right: 22, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.chevL(A.ink, 14)}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {Icon.heart('#fff', 16)}
              </div>
            </div>
          </div>
          {/* Name overlay */}
          <div style={{ position: 'absolute', left: 22, bottom: 22, right: 22 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.92)', padding: '4px 10px 4px 6px', borderRadius: 999, fontSize: 11, fontWeight: 700, color: A.sage }}>
              <span style={{ width: 16, height: 16, borderRadius: 999, background: A.sage, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                {Icon.check('#fff', 9)}
              </span>
              Verified · ID + insurance
            </div>
            <div style={{ color: '#fff', fontFamily: A.serif, fontSize: 38, lineHeight: 1, letterSpacing: -0.6, marginTop: 8 }}>
              Marcus <span style={{ fontStyle: 'italic' }}>Vellacott</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              General builder · {Icon.pin('#fff', 11)} Tooting, SW17 · 4.3 mi
            </div>
          </div>
        </div>

        {/* Card pulled up over hero */}
        <div style={{ background: A.bg, borderRadius: '24px 24px 0 0', marginTop: -22, position: 'relative', padding: '22px 22px 14px' }}>
          {/* Stats row */}
          <div style={{
            background: A.surface, borderRadius: 18, padding: '16px 8px',
            border: `1px solid ${A.hairline}`,
            display: 'flex', alignItems: 'center',
          }}>
            <StatBlock value="4.96" label="Rating" />
            <div style={{ width: 1, height: 28, background: A.hairline }} />
            <StatBlock value="184" label="Jobs done" />
            <div style={{ width: 1, height: 28, background: A.hairline }} />
            <StatBlock value="< 1h" label="Responds" />
            <div style={{ width: 1, height: 28, background: A.hairline }} />
            <StatBlock value="12y" label="Trade" />
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 18, marginTop: 18, borderBottom: `1px solid ${A.hairline}` }}>
            <div style={{ paddingBottom: 10, fontSize: 13, fontWeight: 700, color: A.ink, borderBottom: `2px solid ${A.terracotta}`, marginBottom: -1 }}>Portfolio · 24</div>
            <div style={{ paddingBottom: 10, fontSize: 13, fontWeight: 600, color: A.sub }}>Reviews · 142</div>
            <div style={{ paddingBottom: 10, fontSize: 13, fontWeight: 600, color: A.sub }}>About</div>
          </div>

          {/* Portfolio grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
            <PortfolioPair beforeTone="slate" afterTone="sand" title="Kitchen extension, Brockley" days="14" />
            <PortfolioPair beforeTone="plum" afterTone="cream" title="Loft conversion, Peckham" days="22" />
            <PortfolioPair beforeTone="moss" afterTone="rust" title="Patio + decking, Tooting" days="6" />
            <PortfolioPair beforeTone="cocoa" afterTone="sky" title="Window replace, Brixton" days="3" />
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(244,239,230,0.94)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderTop: `1px solid ${A.hairline}`,
        padding: '12px 22px 30px', display: 'flex', gap: 10, alignItems: 'center', zIndex: 40,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: A.sub, fontWeight: 600 }}>FROM</div>
          <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.4, marginTop: -2 }}>£280<span style={{ fontSize: 12, color: A.sub, fontWeight: 600 }}>/day</span></div>
        </div>
        <button style={{
          background: A.surface, border: `1px solid ${A.hairline}`, color: A.ink,
          borderRadius: 14, height: 50, padding: '0 16px', fontSize: 14, fontWeight: 700,
          fontFamily: A.font, display: 'flex', alignItems: 'center', gap: 6,
        }}>
          {Icon.msg(A.ink, 16)} Chat
        </button>
        <button style={{
          background: A.terracotta, border: 0, color: '#fff',
          borderRadius: 14, height: 50, padding: '0 20px', fontSize: 14, fontWeight: 700,
          fontFamily: A.font, flex: 1,
        }}>
          Request quote
        </button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 6 — In-app chat
// ─────────────────────────────────────────────────────────────
function Bubble({ from, children, time, photo, attach, photoTone }) {
  const me = from === 'me';
  return (
    <div style={{
      display: 'flex', justifyContent: me ? 'flex-end' : 'flex-start',
      marginBottom: 8,
    }}>
      <div style={{ maxWidth: 280 }}>
        {photo && (
          <div style={{ marginBottom: 4, borderRadius: 18, overflow: 'hidden' }}>
            <Photo tone={photoTone || 'sand'} width={220} height={150} radius={18} before="UPDATE" label="re-grout day 1" />
          </div>
        )}
        {attach && (
          <div style={{
            background: me ? A.terracotta : A.surface,
            color: me ? '#fff' : A.ink,
            border: me ? 'none' : `1px solid ${A.hairline}`,
            borderRadius: 18, padding: '12px 14px', marginBottom: 4,
            minWidth: 220,
          }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.4, opacity: 0.7 }}>QUOTE</div>
            <div style={{ fontSize: 15, fontWeight: 800, marginTop: 2 }}>{attach.title}</div>
            <div style={{ fontSize: 11.5, opacity: 0.75, marginTop: 2 }}>{attach.detail}</div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginTop: 10, paddingTop: 10,
              borderTop: `1px solid ${me ? 'rgba(255,255,255,0.2)' : A.hairline}`,
            }}>
              <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4 }}>{attach.price}</span>
              <span style={{
                background: me ? '#fff' : A.terracotta, color: me ? A.terracotta : '#fff',
                borderRadius: 999, padding: '6px 12px', fontSize: 12, fontWeight: 700,
              }}>View →</span>
            </div>
          </div>
        )}
        {children && (
          <div style={{
            background: me ? A.ink : A.surface,
            color: me ? '#fff' : A.ink,
            border: me ? 'none' : `1px solid ${A.hairline}`,
            borderRadius: me ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
            padding: '10px 14px',
            fontSize: 14.5, lineHeight: 1.35,
          }}>
            {children}
          </div>
        )}
        {time && (
          <div style={{
            fontSize: 10.5, color: A.sub, marginTop: 4,
            textAlign: me ? 'right' : 'left',
            padding: me ? '0 6px 0 0' : '0 0 0 6px',
          }}>{time}</div>
        )}
      </div>
    </div>
  );
}

function Screen6_Chat() {
  return (
    <Phone bg={A.surfaceAlt}>
      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
        background: 'rgba(251,248,242,0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${A.hairline}`,
        padding: '54px 16px 12px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.chevL(A.ink, 14)}
        </div>
        <div style={{ width: 38, height: 38, borderRadius: 999, overflow: 'hidden', position: 'relative' }}>
          <Photo tone="rust" width={38} height={38} radius={999} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 12, height: 12, borderRadius: 999, background: A.sage, border: '2px solid #FBF8F2' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>Bea Coltrane</span>
            <VerifiedBadge size={12} />
          </div>
          <div style={{ fontSize: 11.5, color: A.sage, fontWeight: 600 }}>Active · usually replies in 30m</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: A.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.camera(A.ink, 16)}
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '128px 18px 110px', height: '100%', overflow: 'hidden' }}>
        {/* Job pinned card */}
        <div style={{
          background: A.surface, border: `1px solid ${A.hairline}`,
          borderRadius: 14, padding: '10px 12px', marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Photo tone="slate" width={32} height={32} radius={8} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700 }}>Bathroom re-grout</div>
            <div style={{ fontSize: 10.5, color: A.sub }}>Quote pending · £380 expected</div>
          </div>
          {Icon.chevR(A.sub, 10)}
        </div>

        {/* Date divider */}
        <div style={{ textAlign: 'center', fontSize: 11, color: A.sub, fontWeight: 600, marginBottom: 12 }}>
          Today · 14:08
        </div>

        <Bubble from="them" time="14:08">
          Hi Eleanor — got your job through, nice spot you have there. Can pop round Wednesday morning to take a look in person?
        </Bubble>
        <Bubble from="me" time="14:11">
          That works. The shower corner is the worst bit — I'll send a closer photo.
        </Bubble>
        <Bubble from="me" photo photoTone="slate" time="14:11" />
        <Bubble from="them" time="14:14">
          Mm, that's mould behind the silicone. Easy fix — strip, treat, re-bead. I'll do the floor while I'm at it.
        </Bubble>
        <Bubble from="them" attach={{ title: 'Bathroom re-grout', detail: 'Walls + floor · anti-mould · 1 day', price: '£380' }} time="14:14" />
      </div>

      {/* Input bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(251,248,242,0.96)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderTop: `1px solid ${A.hairline}`,
        padding: '10px 14px 26px', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: A.bg, border: `1px solid ${A.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.plus(A.ink, 18)}
        </div>
        <div style={{
          flex: 1, height: 40, background: '#fff', borderRadius: 999, border: `1px solid ${A.hairline}`,
          display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: 14, color: A.sub,
          gap: 8,
        }}>
          <span style={{ flex: 1 }}>Message Bea…</span>
          {Icon.camera(A.sub, 16)}
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: A.terracotta, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {Icon.send('#fff', 16)}
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 7 — Contractor swipe dashboard
// ─────────────────────────────────────────────────────────────
function Screen7_ContractorSwipe() {
  return (
    <Phone bg={A.surfaceAlt}>
      {/* Header */}
      <div style={{ padding: '62px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: A.sub, fontWeight: 600 }}>Good morning, Bea</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 1, letterSpacing: -0.4 }}>New leads <span style={{ color: A.terracotta }}>· 14</span></div>
          </div>
          <div style={{ width: 42, height: 42, borderRadius: 999, overflow: 'hidden', position: 'relative' }}>
            <Photo tone="rust" width={42} height={42} radius={999} />
            <div style={{ position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderRadius: 999, background: A.terracotta, border: '2px solid #FBF8F2' }} />
          </div>
        </div>

        {/* Mini stats */}
        <div style={{
          display: 'flex', gap: 8, marginTop: 14,
        }}>
          {[['Quotes sent', '4', 'today'], ['Win rate', '38%', '30d'], ['£ pipeline', '£2.4k', 'open']].map(([l, v, sub], i) => (
            <div key={i} style={{ flex: 1, background: A.surface, borderRadius: 14, padding: '10px 12px', border: `1px solid ${A.hairline}` }}>
              <div style={{ fontSize: 10, color: A.sub, fontWeight: 700, letterSpacing: 0.3, textTransform: 'uppercase' }}>{l}</div>
              <div style={{ fontSize: 16, fontWeight: 800, marginTop: 4, letterSpacing: -0.3 }}>{v}</div>
              <div style={{ fontSize: 10, color: A.sub2, marginTop: 1 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card stack */}
      <div style={{ position: 'relative', margin: '20px 22px 0', height: 460 }}>
        {/* Back card */}
        <div style={{
          position: 'absolute', inset: '12px 14px 0 14px',
          background: A.surface, borderRadius: 24,
          border: `1px solid ${A.hairline}`,
          transform: 'rotate(-3deg) translateY(8px)',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute', inset: '6px 8px 0 8px',
          background: A.surface, borderRadius: 24,
          border: `1px solid ${A.hairline}`,
          transform: 'rotate(2deg) translateY(4px)',
        }} />

        {/* Top card */}
        <div style={{
          position: 'absolute', inset: 0,
          background: A.surface, borderRadius: 24, overflow: 'hidden',
          boxShadow: '0 18px 40px rgba(28,24,19,0.12)',
          border: `1px solid ${A.hairline}`,
          transform: 'rotate(-1deg)',
        }}>
          {/* Photo */}
          <div style={{ position: 'relative', height: 240 }}>
            <Photo tone="sand" width="100%" height={240} radius={0} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)' }} />
            {/* photo count */}
            <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 999, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
              {Icon.camera('#fff', 11)} 3
            </div>
            {/* fresh tag */}
            <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 10px', borderRadius: 999, background: A.terracotta, color: '#fff', fontSize: 10.5, fontWeight: 700, letterSpacing: 0.4, display: 'flex', alignItems: 'center', gap: 4 }}>
              {Icon.bolt('#fff', 10)} 38 MIN AGO
            </div>
            <div style={{ position: 'absolute', left: 16, bottom: 14, right: 16 }}>
              <div style={{ color: '#fff', fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Repaint Victorian sash windows</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12.5, marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                {Icon.pin('#fff', 11)} Crouch End, N8 · 2.1 mi away
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '14px 16px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 999, overflow: 'hidden' }}>
                <Photo tone="cream" width={28} height={28} radius={999} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700 }}>Daniel R.</span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10.5, fontWeight: 600,
                color: A.sage, background: A.sageSoft, padding: '2px 7px', borderRadius: 999,
              }}>{Icon.check(A.sage, 9)} ID checked</span>
            </div>

            <p style={{ fontSize: 13, color: A.ink2, lineHeight: 1.45, marginTop: 10 }}>
              Six sash windows on a terraced Victorian, ground + first floor. Looking for lead-safe stripping, oil-based primer + 2 coats Farrow & Ball. Some putty work needed on 2 frames.
            </p>

            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              {[['£', '£1.2-1.8k'], ['⏱', '2 wks'], ['🪟', '6 windows'], ['🏠', 'Exterior']].map(([i, l], idx) => (
                <div key={idx} style={{
                  padding: '6px 10px', borderRadius: 10, background: A.bg, fontSize: 12, fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <span style={{ fontSize: 11 }}>{i}</span> {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action row */}
      <div style={{
        position: 'absolute', bottom: 110, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22,
        zIndex: 30,
      }}>
        <button style={{
          width: 60, height: 60, borderRadius: 999, background: A.surface,
          border: `1px solid ${A.hairline}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {Icon.x(A.sub, 26)}
        </button>
        <button style={{
          width: 50, height: 50, borderRadius: 999, background: A.surface,
          border: `1px solid ${A.hairline}`, boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 3h10v14l-5-3-5 3V3z" stroke={A.ink} strokeWidth="1.7" strokeLinejoin="round"/>
          </svg>
        </button>
        <button style={{
          width: 70, height: 70, borderRadius: 999, background: A.terracotta,
          boxShadow: '0 8px 24px rgba(200,85,61,0.45)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: '#fff', border: 0,
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M2 12l4 4 14-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 0.5, marginTop: 2 }}>QUOTE</span>
        </button>
      </div>

      <TabBar active="leads" contractor />
    </Phone>
  );
}

Object.assign(window, {
  QuoteCard, StatBlock, PortfolioPair, Bubble,
  Screen4_QuoteInbox, Screen5_Profile, Screen6_Chat, Screen7_ContractorSwipe,
});
