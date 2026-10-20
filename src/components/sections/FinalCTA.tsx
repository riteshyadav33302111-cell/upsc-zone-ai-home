import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'

function ChaiCup() {
  return (
    <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Steam lines */}
      <motion.path
        d="M16 10 Q18 5 16 2"
        stroke="var(--accent-warm)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        animate={{ opacity: [0, 1, 0], y: [-2, -8, -12] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0, ease: 'easeInOut' }}
      />
      <motion.path
        d="M24 8 Q26 3 24 0"
        stroke="var(--accent-warm)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        animate={{ opacity: [0, 1, 0], y: [-2, -8, -12] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.4, ease: 'easeInOut' }}
      />
      <motion.path
        d="M32 10 Q34 5 32 2"
        stroke="var(--accent-warm)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        animate={{ opacity: [0, 1, 0], y: [-2, -8, -12] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.8, ease: 'easeInOut' }}
      />
      {/* Cup body */}
      <path
        d="M8 16 L12 44 Q12 46 14 46 L34 46 Q36 46 36 44 L40 16 Z"
        fill="var(--accent-warm)"
        opacity="0.15"
        stroke="var(--accent-warm)"
        strokeWidth="1.5"
      />
      {/* Handle */}
      <path
        d="M40 22 Q48 22 48 30 Q48 38 40 38"
        fill="none"
        stroke="var(--accent-warm)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Saucer */}
      <ellipse cx="24" cy="47" rx="18" ry="3" fill="var(--accent-warm)" opacity="0.25" />
      {/* Tea color inside */}
      <path
        d="M12 16 L14 38 Q14 42 16 42 L32 42 Q34 42 34 38 L36 16 Z"
        fill="var(--accent-warm)"
        opacity="0.3"
      />
    </svg>
  )
}

function RingTimer({ duration = 300, onComplete }: { duration?: number; onComplete: () => void }) {
  const [remaining, setRemaining] = useState(duration)
  const radius = 20
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (remaining <= 0) { onComplete(); return }
    const timer = setTimeout(() => setRemaining(r => r - 1), 1000)
    return () => clearTimeout(timer)
  }, [remaining])

  const progress = remaining / duration

  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
      <svg width="60" height="60" viewBox="0 0 60 60" aria-label={`${mins}:${secs.toString().padStart(2, '0')} remaining`}>
        <circle cx="30" cy="30" r={radius} fill="none" stroke="var(--border)" strokeWidth="3" />
        <circle
          cx="30" cy="30" r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeDasharray={`${progress * circumference} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(-90 30 30)"
          style={{ transition: 'stroke-dasharray 1s linear' }}
        />
        <text x="30" y="35" textAnchor="middle" fontSize="10" fill="var(--accent)" fontFamily="JetBrains Mono, monospace">
          {mins}:{secs.toString().padStart(2, '0')}
        </text>
      </svg>
      <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)' }}>
        Back to the zone in {mins}:{secs.toString().padStart(2, '0')}
      </p>
    </div>
  )
}

export default function FinalCTA() {
  const [chaiClicked, setChaiClicked] = useState(false)
  const [breakDone, setBreakDone] = useState(false)

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: 'var(--bg)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--accent) 6%, transparent), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-display" style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Your zone is{' '}
            <span className="highlighter revealed">waiting.</span>
          </h2>

          <p className="text-body-lg" style={{
            color: 'var(--text-muted)',
            maxWidth: '440px',
            margin: '0 auto 2.5rem',
          }}>
            One free diagnostic. A personalised plan. And the calm focus you've been looking for.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a
              href="#find-zone"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); scrollTo('#find-zone') }}
              style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
            >
              <Zap size={18} />
              Start free diagnostic
              <ArrowRight size={18} />
            </a>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
            FREE TO START · NO CARD NEEDED · CANCEL ANYTIME
          </p>
        </motion.div>

        {/* Chai cup Easter egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <button
            onClick={() => { setChaiClicked(true); setBreakDone(false) }}
            aria-label="Take a 5-minute chai break"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <ChaiCup />
          </button>
          <p style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)' }}>
            ↑ click for a break
          </p>
        </motion.div>

        {/* Break modal */}
        <AnimatePresence>
          {chaiClicked && !breakDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: '1.25rem',
                padding: '1.5rem',
                boxShadow: 'var(--shadow)',
                zIndex: 200,
                maxWidth: '240px',
                textAlign: 'center',
              }}
              role="dialog"
              aria-label="5-minute chai break"
            >
              <ChaiCup />
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1rem', marginTop: '0.75rem', color: 'var(--text)' }}>
                5-minute break.<br />Back to the zone. ☕
              </p>
              <RingTimer duration={300} onComplete={() => setBreakDone(true)} />
              <button
                onClick={() => setChaiClicked(false)}
                style={{
                  marginTop: '0.75rem',
                  background: 'none',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  padding: '0.375rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-subtle)',
                }}
              >
                I'm back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
