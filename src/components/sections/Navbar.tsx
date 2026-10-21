import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Zap } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useScrollSpy } from '../../hooks/useScrollReveal'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'PYQs', href: '#features' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const NAV_IDS = ['features', 'how-it-works', 'testimonials', 'faq', 'find-zone']

export default function Navbar() {
  const { theme, toggle, isDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const activeId = useScrollSpy(NAV_IDS)
  const drawerRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
      firstFocusRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  // Focus trap in drawer
  useEffect(() => {
    if (!drawerOpen) return
    const drawer = drawerRef.current
    if (!drawer) return
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const trap = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        }
      }
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [drawerOpen])

  const scrollTo = (href: string) => {
    setDrawerOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? isDark ? 'rgba(13,15,20,0.88)' : 'rgba(251,247,239,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <nav className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '72px' }}>
          {/* Wordmark */}
          <a
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}
            aria-label="UPSC Zone AI — home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <WordmarkSVG isDark={isDark} />
          </a>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1, justifyContent: 'center' }} className="nav-links-desktop">
            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  style={{
                    padding: '0.5rem 0.875rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    background: isActive ? 'color-mix(in srgb, var(--accent) 10%, transparent)' : 'transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = 'var(--text)'
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = 'var(--text-muted)'
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to Paper theme' : 'Switch to Night Library theme'}
              style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-surface2)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Log in */}
            <a
              href="#"
              className="btn btn-ghost"
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
              onClick={(e) => e.preventDefault()}
            >
              Log in
            </a>

            {/* Start free */}
            <a
              href="#find-zone"
              className="btn btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}
              onClick={(e) => { e.preventDefault(); scrollTo('#find-zone') }}
            >
              Start free
            </a>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                background: 'var(--bg-surface2)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--text)',
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(11,18,32,0.6)',
                backdropFilter: 'blur(4px)',
                zIndex: 100,
              }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(85vw, 360px)',
                background: 'var(--bg)',
                borderLeft: '1px solid var(--border)',
                zIndex: 101,
                display: 'flex', flexDirection: 'column',
                padding: '1.5rem',
              }}
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <WordmarkSVG isDark={isDark} small />
                <button
                  ref={firstFocusRef}
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: '44px', height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-surface2)',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text)',
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                {NAV_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '0.75rem',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-display)',
                      transition: 'background 0.2s',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <button
                  onClick={toggle}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.875rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-surface2)',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                  }}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isDark ? 'Switch to Paper theme' : 'Switch to Night Library'}
                </button>
                <a
                  href="#find-zone"
                  className="btn btn-primary"
                  style={{ justifyContent: 'center' }}
                  onClick={(e) => { e.preventDefault(); scrollTo('#find-zone') }}
                >
                  <Zap size={16} />
                  Start free
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  )
}

function WordmarkSVG({ isDark, small }: { isDark: boolean; small?: boolean }) {
  const scale = small ? 0.8 : 1
  return (
    <svg
      width={`${180 * scale}`}
      height={`${36 * scale}`}
      viewBox="0 0 180 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="UPSC Zone AI"
    >
      {/* The O as a focus ring target */}
      <circle cx="18" cy="18" r="14" stroke={isDark ? '#7B7BFF' : '#5B5BF0'} strokeWidth="2" fill="none" />
      <circle cx="18" cy="18" r="8" fill={isDark ? '#7B7BFF' : '#5B5BF0'} opacity="0.15" />
      <circle cx="18" cy="18" r="3" fill={isDark ? '#7B7BFF' : '#5B5BF0'} />
      {/* ZONE wordmark */}
      <text
        x="38"
        y="24"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="20"
        fontWeight="700"
        fill={isDark ? '#E8DFC8' : '#0B1220'}
        letterSpacing="-0.5"
      >
        ZONE
      </text>
      {/* AI label */}
      <rect x="108" y="8" width="28" height="18" rx="4" fill={isDark ? '#7B7BFF' : '#5B5BF0'} />
      <text
        x="122"
        y="21"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="10"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        AI
      </text>
      {/* UPSC subtitle */}
      <text
        x="38"
        y="33"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="7"
        fill={isDark ? '#9A9080' : '#908B82'}
        letterSpacing="2"
      >
        UPSC
      </text>
    </svg>
  )
}
