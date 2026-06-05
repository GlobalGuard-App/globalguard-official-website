/**
 * HeroBackground — premium GPU-friendly CSS-only animated background.
 * All animations use transform/opacity only (compositor-layer friendly).
 * No canvas, no JS loops, no layout thrash.
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* ── 1. Base dark gradient ── */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 0%, #0a1628 0%, #060810 55%, #030508 100%)',
      }} />

      {/* ── 2. Deep ambient cyan pool — top centre ── */}
      <div
        className="absolute hero-bg-pulse"
        style={{
          width: '900px', height: '600px',
          top: '-200px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.065) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── 3. Emerald accent pool — bottom right ── */}
      <div
        className="absolute hero-bg-pulse-slow"
        style={{
          width: '700px', height: '500px',
          bottom: '-100px', right: '-100px',
          background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.045) 0%, transparent 65%)',
          filter: 'blur(50px)',
          animationDelay: '3s',
        }}
      />

      {/* ── 4. Cyan accent pool — left mid ── */}
      <div
        className="absolute hero-bg-drift"
        style={{
          width: '500px', height: '400px',
          top: '30%', left: '-100px',
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── 5. Holographic grid ── */}
      <div
        className="absolute inset-0 hero-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.008) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.008) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
        }}
      />

      {/* ── 6. Slow diagonal energy beam — cyan ── */}
      <div
        className="absolute hero-beam-1"
        style={{
          width: '1px', height: '70%',
          top: '5%', left: '30%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.18) 40%, rgba(0,212,255,0.06) 70%, transparent 100%)',
          filter: 'blur(1px)',
          transform: 'rotate(-12deg)',
          transformOrigin: 'top center',
        }}
      />
      {/* Beam glow halo */}
      <div
        className="absolute hero-beam-1"
        style={{
          width: '40px', height: '70%',
          top: '5%', left: 'calc(30% - 20px)',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.04) 40%, rgba(0,212,255,0.01) 70%, transparent 100%)',
          filter: 'blur(12px)',
          transform: 'rotate(-12deg)',
          transformOrigin: 'top center',
        }}
      />

      {/* ── 7. Slow diagonal energy beam — emerald ── */}
      <div
        className="absolute hero-beam-2"
        style={{
          width: '1px', height: '60%',
          top: '15%', right: '25%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.14) 45%, rgba(0,255,136,0.04) 72%, transparent 100%)',
          filter: 'blur(1px)',
          transform: 'rotate(8deg)',
          transformOrigin: 'top center',
        }}
      />
      <div
        className="absolute hero-beam-2"
        style={{
          width: '36px', height: '60%',
          top: '15%', right: 'calc(25% - 18px)',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.035) 45%, rgba(0,255,136,0.01) 72%, transparent 100%)',
          filter: 'blur(12px)',
          transform: 'rotate(8deg)',
          transformOrigin: 'top center',
        }}
      />

      {/* ── 8. Radar pulse rings — centred ── */}
      <div className="absolute" style={{ top: '45%', left: '62%', transform: 'translate(-50%, -50%)' }}>
        <div className="hero-radar-ring" style={{ width: '220px', height: '220px', animationDelay: '0s' }} />
        <div className="hero-radar-ring" style={{ width: '220px', height: '220px', animationDelay: '1.4s' }} />
        <div className="hero-radar-ring" style={{ width: '220px', height: '220px', animationDelay: '2.8s' }} />
      </div>

      {/* Secondary radar pulse — left ── */}
      <div className="absolute" style={{ top: '70%', left: '18%', transform: 'translate(-50%, -50%)' }}>
        <div className="hero-radar-ring hero-radar-ring--green" style={{ width: '140px', height: '140px', animationDelay: '0.7s' }} />
        <div className="hero-radar-ring hero-radar-ring--green" style={{ width: '140px', height: '140px', animationDelay: '2.1s' }} />
      </div>

      {/* ── 9. Floating data particles ── */}
      {[
        { size: 2,  top: '18%', left: '12%',  delay: '0s',    dur: '14s', color: 'rgba(0,212,255,0.5)' },
        { size: 1.5,top: '34%', left: '7%',   delay: '2s',    dur: '18s', color: 'rgba(0,212,255,0.35)' },
        { size: 2,  top: '62%', left: '20%',  delay: '4s',    dur: '16s', color: 'rgba(0,255,136,0.45)' },
        { size: 1.5,top: '80%', left: '33%',  delay: '1s',    dur: '20s', color: 'rgba(0,212,255,0.3)' },
        { size: 2,  top: '25%', left: '55%',  delay: '3s',    dur: '15s', color: 'rgba(0,255,136,0.4)' },
        { size: 1,  top: '50%', left: '72%',  delay: '5s',    dur: '22s', color: 'rgba(0,212,255,0.25)' },
        { size: 2,  top: '72%', left: '80%',  delay: '0.5s',  dur: '17s', color: 'rgba(0,255,136,0.35)' },
        { size: 1.5,top: '14%', left: '88%',  delay: '2.5s',  dur: '19s', color: 'rgba(0,212,255,0.4)' },
        { size: 1,  top: '44%', left: '42%',  delay: '6s',    dur: '13s', color: 'rgba(0,212,255,0.3)' },
        { size: 2,  top: '88%', left: '58%',  delay: '3.5s',  dur: '21s', color: 'rgba(0,255,136,0.3)' },
        { size: 1,  top: '8%',  left: '65%',  delay: '1.5s',  dur: '24s', color: 'rgba(0,212,255,0.2)' },
        { size: 1.5,top: '56%', left: '95%',  delay: '4.5s',  dur: '16s', color: 'rgba(0,255,136,0.25)' },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full hero-particle"
          style={{
            width: `${p.size}px`, height: `${p.size}px`,
            top: p.top, left: p.left,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* ── 10. Light fog / noise vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,0,0,0.55) 0%, transparent 70%)',
        }}
      />
      {/* Top vignette so navbar area stays dark */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: 'linear-gradient(180deg, rgba(6,8,16,0.7) 0%, transparent 100%)',
        }}
      />

    </div>
  );
}
