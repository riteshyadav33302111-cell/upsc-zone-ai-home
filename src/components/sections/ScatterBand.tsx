import React from 'react'
import { motion } from 'framer-motion'

const PAINS = [
  {
    icon: '⊗',
    title: 'Too many sources.',
    desc: 'Standard books, coaching notes, YouTube, Telegram — and nothing feels complete.',
  },
  {
    icon: '⊗',
    title: 'No feedback loop.',
    desc: 'You write answers. You solve mocks. You never find out precisely where you went wrong.',
  },
  {
    icon: '⊗',
    title: 'No coherent plan.',
    desc: 'Every week starts with good intentions. Every Friday feels like a wasted one.',
  },
]

export default function ScatterBand() {
  return (
    <section
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        background: 'var(--bg-surface2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <motion.p
          className="text-display-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto 3rem',
          }}
        >
          Aspirants don't lack effort.{' '}
          <span style={{ color: 'var(--accent-warm)' }}>They lack a system.</span>
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="pains-grid"
        >
          {PAINS.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.25rem',
                borderLeft: '2px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '1.25rem', color: 'var(--accent-warm)', opacity: 0.7 }}>
                {pain.icon}
              </span>
              <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{pain.title}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) { .pains-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
