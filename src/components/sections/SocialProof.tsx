import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import testimonials from '../../data/testimonials.json'
import statsData from '../../data/stats.json'
import { useCountUp } from '../../hooks/useScrollReveal'

export default function SocialProof() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  // Keyboard navigation
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-surface2)' }}>
      <div className="container">
        {/* Placeholder notice */}
        <div style={{
          textAlign: 'center',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          background: 'var(--highlight)',
          borderRadius: '0.5rem',
          display: 'block',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--ink)',
          opacity: 0.8,
        }}>
          Sample stories and figures — placeholder content for this design concept
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '1.5rem' }}
        >
          <p className="text-label" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Stories</p>
          <h2 className="text-display-sm">Aspirants in the zone.</h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div
          role="region"
          aria-label="Testimonials carousel"
          aria-live="polite"
          onKeyDown={handleKey}
          tabIndex={0}
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            outline: 'none',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--bg-surface)',
                borderRadius: '1.25rem',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative margin line */}
              <div style={{
                position: 'absolute',
                left: '3.5rem',
                top: 0,
                bottom: 0,
                width: '1px',
                background: `${testimonials[current].color}25`,
              }} />

              {/* Quote */}
              <blockquote style={{
                marginLeft: '2rem',
                fontFamily: 'var(--font-hand)',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'var(--text)',
                fontStyle: 'normal',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '-2rem',
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: testimonials[current].color,
                  opacity: 0.3,
                  fontFamily: 'var(--font-display)',
                }}>
                  "
                </span>
                {testimonials[current].quote}
              </blockquote>

              {/* Attribution */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                marginTop: '1.5rem',
                marginLeft: '2rem',
              }}>
                {/* Monogram avatar */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `${testimonials[current].color}20`,
                  border: `2px solid ${testimonials[current].color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: testimonials[current].color,
                  flexShrink: 0,
                }}>
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    {testimonials[current].name}, {testimonials[current].attempt}
                  </p>
                  <p style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: testimonials[current].color,
                    letterSpacing: '0.08em',
                  }}>
                    {testimonials[current].feature}
                  </p>
                </div>

                {/* AI margin note decoration */}
                <div style={{
                  marginLeft: 'auto',
                  fontFamily: 'var(--font-hand)',
                  fontSize: '0.8rem',
                  color: testimonials[current].color,
                  opacity: 0.6,
                  transform: 'rotate(-2deg)',
                  maxWidth: '120px',
                  textAlign: 'right',
                }}>
                  ✦ in the zone
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
          }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }} role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'var(--accent)' : 'var(--border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="stats-grid"
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '2.5rem',
          }}
        >
          {statsData.stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

    </section>
  )
}

interface StatDef {
  value: number
  suffix: string
  label: string
  note: string
  decimals?: number
}

function StatItem({ stat }: { stat: StatDef }) {
  const { ref, count } = useCountUp(stat.value, 1800, stat.decimals ?? 0)

  return (
    <div style={{ textAlign: 'center' }}>
      <span ref={ref} className="stat-number">
        {stat.decimals ? count.toFixed(stat.decimals) : Math.round(count).toLocaleString()}
        {stat.suffix}
      </span>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>{stat.label}</p>
      <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>
        {stat.note}
      </p>
    </div>
  )
}
