import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, RotateCcw, Target, Brain, BookOpen, TrendingUp, Flame, MessageSquare } from 'lucide-react'

const CHAOS_CARDS = [
  { id: 'tabs', label: '12 tabs open', x: -200, y: -100, rotate: -12, blur: 3 },
  { id: 'notes', label: 'notes_final_v7(2).pdf', x: 160, y: -140, rotate: 8, blur: 2 },
  { id: 'pyq', label: 'PYQ 2019 — unsolved', x: -180, y: 70, rotate: -6, blur: 2.5 },
  { id: 'art21', label: 'Revise Art. 21', x: 200, y: 50, rotate: 12, blur: 2 },
  { id: 'mock', label: 'Mock 14: 62/200 — why?', x: -40, y: 140, rotate: -8, blur: 3 },
  { id: 'editorial', label: 'Editorial backlog: 9 days', x: 120, y: 120, rotate: 5, blur: 2 },
]

const ZONE_MODULES = [
  { id: 'plan', label: "Today's Plan", icon: Target, color: '#5B5BF0' },
  { id: 'score', label: 'Mock Score: 72', icon: Brain, color: '#C8553D' },
  { id: 'ca', label: 'Current Affairs', icon: BookOpen, color: '#1FAF7A' },
  { id: 'radar', label: 'Weak Zones', icon: TrendingUp, color: '#FFC933' },
  { id: 'streak', label: 'Streak: 14d', icon: Flame, color: '#C8553D' },
  { id: 'ask', label: 'Ask Zone AI', icon: MessageSquare, color: '#5B5BF0' },
]

const EXAMS = ['UPSC CSE', 'IFoS', 'CAPF', 'State PSCs', 'SSC CGL', 'Banking', 'CDS', 'NDA']

export default function Hero() {
  const [snapped, setSnapped] = useState(false)
  const [replayKey, setReplayKey] = useState(0)
  const reducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion) { setSnapped(true); return }
    const timer = setTimeout(() => setSnapped(true), 1400)
    return () => clearTimeout(timer)
  }, [replayKey, reducedMotion])

  const replay = () => { setSnapped(false); setReplayKey(k => k + 1) }

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px', paddingBottom: '4rem', overflow: 'hidden', position: 'relative' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="heroGrad" cx="70%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrad)" />
        {[80, 160, 240, 320, 400].map((r, i) => (
          <ellipse key={i} cx="75%" cy="35%" rx={r} ry={r * 0.5} fill="none" stroke="var(--text-subtle)" strokeWidth="0.75" opacity={Math.max(0, 0.08 - i * 0.012)} />
        ))}
      </svg>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="chip" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <Zap size={12} style={{ color: 'var(--accent)' }} />
              AI-powered prep for UPSC &amp; competitive exams
            </div>
            <h1 className="text-display" style={{ marginBottom: '1.25rem' }}>
              Stay in the{' '}
              <span className="highlighter revealed">zone.</span>
              <br />Until the rank is yours.
            </h1>
            <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--accent-warm)', marginBottom: '1.25rem', opacity: 0.9 }} lang="hi">
              लक्ष्य तय है, फ़ोकस बनाए रखिए।
            </p>
            <p className="text-body-lg" style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px' }}>
              AI mock tests, daily current affairs, smart notes and every PYQ — organised into one calm, focused workspace that adapts to you.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
              <a href="#find-zone" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('#find-zone') }}>
                <Zap size={16} /> Start free diagnostic <ArrowRight size={16} />
              </a>
              <a href="#how-it-works" className="btn btn-ghost" onClick={e => { e.preventDefault(); scrollTo('#how-it-works') }}>
                See how it works
              </a>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>FREE TO START · NO CARD NEEDED</p>
          </motion.div>

          <div style={{ position: 'relative', height: '420px' }}>
            <AnimatePresence mode="wait" key={replayKey}>
              {!snapped ? (
                <div key="chaos" aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {CHAOS_CARDS.map((card, i) => (
                    <motion.div key={card.id}
                      initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                      animate={{ opacity: 1, x: card.x, y: card.y, rotate: card.rotate }}
                      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 180, damping: 18 }}
                      style={{ position: 'absolute', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.5rem 0.875rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', whiteSpace: 'nowrap', filter: `blur(${card.blur}px)`, boxShadow: 'var(--shadow)' }}
                    >{card.label}</motion.div>
                  ))}
                </div>
              ) : (
                <motion.div key="snap"
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto repeat(3, 1fr)', gap: '0.625rem', padding: '1rem', background: 'var(--bg-surface)', borderRadius: '1.25rem', border: '1px solid var(--border)', boxShadow: '0 8px 40px -8px rgba(91,91,240,0.18)' }}
                  aria-label="Your Zone dashboard"
                >
                  <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.625rem', borderBottom: '1px solid var(--border)', marginBottom: '0' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.12em' }}>YOUR ZONE</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-subtle)' }}>Today</span>
                  </div>
                  {ZONE_MODULES.map((mod, i) => (
                    <motion.div key={mod.id}
                      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, type: 'spring', stiffness: 300, damping: 26 }}
                      style={{ background: 'var(--bg-surface2)', borderRadius: '0.625rem', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', border: '1px solid var(--border)' }}
                    >
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `${mod.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <mod.icon size={12} style={{ color: mod.color }} />
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text)' }}>{mod.label}</span>
                      <div style={{ height: '3px', background: 'var(--border)', borderRadius: '2px' }}>
                        <div style={{ width: `${40 + i * 10}%`, height: '100%', background: mod.color, borderRadius: '2px' }} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {snapped && (
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                onClick={replay} aria-label="Replay scatter to zone animation"
                style={{ position: 'absolute', bottom: '-2rem', right: 0, display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-subtle)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '0.5rem' }}
              >
                <RotateCcw size={11} /> replay
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="marquee-wrap" style={{ marginTop: '4rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0.875rem 0', overflow: 'hidden' }} aria-label="Exams covered">
        <div className="marquee-track" style={{ display: 'flex', gap: '3rem', width: 'max-content' }}>
          {[...EXAMS, ...EXAMS, ...EXAMS, ...EXAMS].map((exam, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '1rem', whiteSpace: 'nowrap' }}>
              {exam}<span style={{ opacity: 0.3, fontSize: '0.5rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { height: 280px !important; }
        }
      `}</style>
    </section>
  )
}
