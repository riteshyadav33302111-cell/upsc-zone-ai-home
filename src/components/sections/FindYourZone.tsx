import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'

const STAGE_OPTIONS = [
  { value: 'starting', label: 'Just starting' },
  { value: 'first', label: 'First attempt' },
  { value: 'repeat', label: 'Repeater' },
]

const STRUGGLE_OPTIONS = [
  { value: 'consistency', label: 'Consistency' },
  { value: 'current-affairs', label: 'Current affairs' },
  { value: 'answer-writing', label: 'Answer writing' },
  { value: 'mocks', label: 'Mock tests' },
]

const HOURS_OPTIONS = [
  { value: '2-4', label: '2–4 hrs/day' },
  { value: '4-6', label: '4–6 hrs/day' },
  { value: '6+', label: '6+ hrs/day' },
]

function generatePlan(stage: string, struggle: string, hours: string): string {
  const stageMap: Record<string, string> = {
    starting: 'Since you\'re just starting, we\'ll build strong fundamentals first.',
    first: 'For a first attempt, we balance breadth with depth.',
    repeat: 'As a repeater, you know the terrain — we\'ll target your specific gaps.',
  }
  const struggleMap: Record<string, string> = {
    consistency: '40% of your plan is structured daily habits — short focused sessions beat long erratic ones.',
    'current-affairs': '30% goes to daily current affairs with syllabus mapping, starting at 15 minutes and building up.',
    'answer-writing': '35% is Mains practice — one answer daily, AI-coached, with feedback before sleep.',
    mocks: '40% is mock tests — start sectional, move to full-length as confidence builds.',
  }
  const hoursMap: Record<string, string> = {
    '2-4': 'With 2–4 hours daily, we keep it tight: one core session + one review.',
    '4-6': 'With 4–6 hours, you can run two deep-work blocks plus a current affairs slot.',
    '6+': 'With 6+ hours, full-length mocks and deep revision are both possible each week.',
  }

  return `${stageMap[stage] ?? ''} ${struggleMap[struggle] ?? ''} ${hoursMap[hours] ?? ''} Your first week: diagnostic → personalised plan → first mock → review cycle.`
}

export default function FindYourZone() {
  const [stage, setStage] = useState('')
  const [struggle, setStruggle] = useState('')
  const [hours, setHours] = useState('')
  const [plan, setPlan] = useState('')
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    // Restore from localStorage
    const saved = localStorage.getItem('upsc-zone-answers')
    if (saved) {
      try {
        const { stage: s, struggle: st, hours: h } = JSON.parse(saved)
        setStage(s ?? '')
        setStruggle(st ?? '')
        setHours(h ?? '')
      } catch {}
    }
  }, [])

  useEffect(() => {
    if (stage && struggle && hours) {
      localStorage.setItem('upsc-zone-answers', JSON.stringify({ stage, struggle, hours }))
      const fullPlan = generatePlan(stage, struggle, hours)
      setTyping(true)
      setPlan('')
      let i = 0
      const timer = setInterval(() => {
        setPlan(fullPlan.slice(0, i + 1))
        i++
        if (i >= fullPlan.length) {
          clearInterval(timer)
          setTyping(false)
        }
      }, 18)
      return () => clearInterval(timer)
    }
  }, [stage, struggle, hours])

  const ChipGroup = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string
    options: { value: string; label: string }[]
    value: string
    onChange: (v: string) => void
  }) => (
    <div>
      <p style={{
        fontSize: '0.78rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-subtle)',
        letterSpacing: '0.08em',
        marginBottom: '0.625rem',
      }}>
        {label}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} role="group" aria-label={label}>
        {options.map(opt => (
          <button
            key={opt.value}
            role="radio"
            aria-checked={value === opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1.5px solid',
              borderColor: value === opt.value ? 'var(--accent)' : 'var(--border)',
              background: value === opt.value ? 'color-mix(in srgb, var(--accent) 12%, transparent)' : 'var(--bg-surface)',
              color: value === opt.value ? 'var(--accent)' : 'var(--text-muted)',
              fontSize: '0.875rem',
              fontWeight: value === opt.value ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
              minHeight: '44px',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="find-zone" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="text-label" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Preview</p>
          <h2 className="text-display-sm">Find your zone.</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '1rem' }}>
            Three quick questions. One personalised plan.
          </p>
        </motion.div>

        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '1.5rem',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <ChipGroup
              label="WHERE ARE YOU IN YOUR JOURNEY?"
              options={STAGE_OPTIONS}
              value={stage}
              onChange={setStage}
            />
            <ChipGroup
              label="BIGGEST CHALLENGE RIGHT NOW?"
              options={STRUGGLE_OPTIONS}
              value={struggle}
              onChange={setStruggle}
            />
            <ChipGroup
              label="DAILY STUDY HOURS?"
              options={HOURS_OPTIONS}
              value={hours}
              onChange={setHours}
            />
          </div>

          {/* Plan output */}
          {(plan || typing) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '2rem',
                padding: '1.25rem',
                background: 'var(--bg-surface2)',
                borderRadius: '1rem',
                borderLeft: '3px solid var(--accent)',
                position: 'relative',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
              }}>
                <div style={{
                  width: '24px', height: '24px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Zap size={12} color="white" />
                </div>
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                }}>
                  ZONE AI — YOUR PLAN
                </span>
              </div>

              <p style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text)',
              }}>
                {plan}
                {typing && (
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    background: 'var(--accent)',
                    marginLeft: '2px',
                    verticalAlign: 'middle',
                    animation: 'blink 0.7s infinite',
                  }} />
                )}
              </p>

              {!typing && plan && (
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  href="#"
                  className="btn btn-primary"
                  onClick={e => { e.preventDefault(); scrollTo('#footer') }}
                  style={{ marginTop: '1.25rem', display: 'inline-flex', gap: '0.5rem' }}
                >
                  Save my plan — start free
                  <ArrowRight size={16} />
                </motion.a>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
      `}</style>
    </section>
  )
}
