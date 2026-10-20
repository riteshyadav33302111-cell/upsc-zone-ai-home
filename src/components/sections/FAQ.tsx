import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import faqData from '../../data/faq.json'

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => setOpen(prev => prev === id ? null : id)

  return (
    <section id="faq" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="text-label" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>FAQ</p>
          <h2 className="text-display-sm">Questions answered.</h2>
        </motion.div>

        <div
          style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}
          role="list"
        >
          {faqData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid',
                borderColor: open === item.id ? 'var(--accent)' : 'var(--border)',
                borderRadius: '0.875rem',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
              role="listitem"
            >
              <button
                aria-expanded={open === item.id}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
                onClick={() => toggle(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '1.125rem 1.25rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  minHeight: '44px',
                }}
              >
                <span>{item.question}</span>
                <motion.div
                  animate={{ rotate: open === item.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ flexShrink: 0 }}
                >
                  <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      padding: '0 1.25rem 1.25rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                    }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
