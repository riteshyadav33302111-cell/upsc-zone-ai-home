import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Globe, Share2, Code2, Play } from 'lucide-react'

const FOOTER_LINKS = {
  Product: [
    { label: 'AI Mock Tests', href: '#features' },
    { label: 'Current Affairs', href: '#features' },
    { label: 'Smart Notes', href: '#features' },
    { label: 'PYQ Intelligence', href: '#features' },
    { label: 'Mains Coach', href: '#features' },
    { label: 'Study Planner', href: '#features' },
  ],
  Exams: [
    { label: 'UPSC CSE', href: '#' },
    { label: 'IFoS', href: '#' },
    { label: 'CAPF', href: '#' },
    { label: 'State PSCs', href: '#' },
    { label: 'SSC CGL', href: '#' },
    { label: 'Banking & CDS', href: '#' },
  ],
  Resources: [
    { label: 'Free Diagnostic', href: '#find-zone' },
    { label: 'PYQ Explorer', href: '#features' },
    { label: 'Blog', href: '#' },
    { label: 'Syllabus Map', href: '#' },
    { label: 'Study Calendar', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Contact', href: '#' },
  ],
}

function WordmarkLarge({ isDark }: { isDark: boolean }) {
  return (
    <svg
      width="100%"
      viewBox="0 0 480 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <text
        x="0" y="100"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="120"
        fontWeight="700"
        fill={isDark ? '#E8DFC8' : '#0B1220'}
        letterSpacing="-4"
      >
        ZONE
      </text>
    </svg>
  )
}

export default function Footer({ isDark }: { isDark: boolean }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <footer
      id="footer"
      style={{
        background: isDark ? 'var(--bg)' : 'var(--ink)',
        color: isDark ? 'var(--text)' : '#E8DFC8',
        borderTop: '1px solid',
        borderColor: isDark ? 'var(--border)' : '#1E2A3A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant cropped wordmark */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        height: '120px',
      }}>
        <WordmarkLarge isDark={isDark} />
      </div>

      <div className="container" style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '2rem' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          marginBottom: '3rem',
          alignItems: 'start',
        }} className="footer-top">
          {/* Brand + email signup */}
          <div style={{ maxWidth: '420px' }}>
            {/* Wordmark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke={isDark ? '#7B7BFF' : '#7B7BFF'} strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="4" fill={isDark ? '#7B7BFF' : '#7B7BFF'} />
              </svg>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: isDark ? 'var(--text)' : '#E8DFC8',
              }}>
                ZONE AI
              </span>
            </div>

            <p style={{
              fontSize: '0.875rem',
              color: isDark ? 'var(--text-muted)' : '#9A9080',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
            }}>
              One calm, focused workspace for every UPSC and competitive exam aspirant.
            </p>

            {/* Email signup */}
            <div>
              <p style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: isDark ? 'var(--text-subtle)' : '#9A9080',
                letterSpacing: '0.08em',
                marginBottom: '0.625rem',
              }}>
                DAILY 5-MINUTE BRIEF
              </p>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
                >
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setError('') }}
                      placeholder="you@example.com"
                      aria-label="Email for daily brief"
                      aria-invalid={!!error}
                      aria-describedby={error ? 'email-error' : undefined}
                      style={{
                        width: '100%',
                        padding: '0.625rem 1rem',
                        borderRadius: '9999px',
                        border: '1px solid',
                        borderColor: error ? '#C8553D' : isDark ? 'var(--border)' : '#2A3A4E',
                        background: isDark ? 'var(--bg-surface)' : '#161A24',
                        color: isDark ? 'var(--text)' : '#E8DFC8',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        outline: 'none',
                        minHeight: '44px',
                      }}
                    />
                    {error && (
                      <p id="email-error" role="alert" style={{ color: '#C8553D', fontSize: '0.75rem', marginTop: '0.25rem', paddingLeft: '0.5rem' }}>
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    color: '#1FAF7A',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-hand)',
                    padding: '0.625rem 0',
                  }}
                >
                  ✓ You're in. First brief arrives tomorrow morning.
                </motion.p>
              )}
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.625rem' }}>
            {[
              { Icon: Globe, label: 'Twitter/X' },
              { Icon: Share2, label: 'LinkedIn' },
              { Icon: Play, label: 'YouTube' },
              { Icon: Code2, label: 'GitHub' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                onClick={e => e.preventDefault()}
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: isDark ? 'var(--border)' : '#2A3A4E',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isDark ? 'var(--text-muted)' : '#9A9080',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(91,91,240,0.15)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#5B5BF0'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.borderColor = isDark ? 'var(--border)' : '#2A3A4E'
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          borderTop: '1px solid',
          borderColor: isDark ? 'var(--border)' : '#1E2A3A',
          paddingTop: '2rem',
          marginBottom: '2.5rem',
        }} className="footer-cols">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.1em',
                color: isDark ? 'var(--text-subtle)' : '#6B6560',
                marginBottom: '0.875rem',
              }}>
                {section.toUpperCase()}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={e => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollTo(link.href)
                        }
                      }}
                      style={{
                        fontSize: '0.875rem',
                        color: isDark ? 'var(--text-muted)' : '#9A9080',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = isDark ? 'var(--text)' : '#E8DFC8')}
                      onMouseLeave={e => (e.currentTarget.style.color = isDark ? 'var(--text-muted)' : '#9A9080')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          borderTop: '1px solid',
          borderColor: isDark ? 'var(--border)' : '#1E2A3A',
          paddingTop: '1.5rem',
        }}>
          <div>
            <p style={{ fontSize: '0.78rem', color: isDark ? 'var(--text-subtle)' : '#6B6560', lineHeight: 1.6 }}>
              UPSC ZONE AI is an independent platform and is not affiliated with the Union Public Service Commission or the Government of India.
            </p>
            <p style={{ fontSize: '0.75rem', color: isDark ? 'var(--text-subtle)' : '#6B6560', marginTop: '0.25rem' }}>
              © {new Date().getFullYear()} UPSC ZONE AI · MIT License ·{' '}
              <span style={{ color: isDark ? '#7B7BFF' : '#7B7BFF' }}>Designed by Ritesh Yadav</span>
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '44px', height: '44px',
              borderRadius: '50%',
              border: '1px solid',
              borderColor: isDark ? 'var(--border)' : '#2A3A4E',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: isDark ? 'var(--text-muted)' : '#9A9080',
              transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(91,91,240,0.15)'
              ;(e.currentTarget as HTMLElement).style.borderColor = '#5B5BF0'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.borderColor = isDark ? 'var(--border)' : '#2A3A4E'
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-cols { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-cols { grid-template-columns: 1fr 1fr !important; } .footer-top { grid-template-columns: 1fr !important; } }
        @media (max-width: 400px) { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
