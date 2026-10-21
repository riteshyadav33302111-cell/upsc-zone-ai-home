import React, { useEffect, useRef, lazy, Suspense } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'

// Lazy-load all below-fold sections — deferred until after hero renders
// This dramatically reduces initial JS parse time (TBT)
const ScatterBand  = lazy(() => import('./components/sections/ScatterBand'))
const Features     = lazy(() => import('./components/sections/Features'))
const HowItWorks   = lazy(() => import('./components/sections/HowItWorks'))
const FindYourZone = lazy(() => import('./components/sections/FindYourZone'))
const SocialProof  = lazy(() => import('./components/sections/SocialProof'))
const FAQ          = lazy(() => import('./components/sections/FAQ'))
const FinalCTA     = lazy(() => import('./components/sections/FinalCTA'))
const Footer       = lazy(() => import('./components/sections/Footer'))

// Minimal section skeleton shown while lazy chunks load
function SectionSkeleton() {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: '4rem',
        background: 'var(--bg-surface2)',
        borderRadius: '1rem',
        margin: '2rem auto',
        maxWidth: '1240px',
        opacity: 0.4,
      }}
    />
  )
}

export default function App() {
  const { isDark } = useTheme()
  const lampRef = useRef<HTMLDivElement>(null)

  // Night library lamp cursor effect
  useEffect(() => {
    if (!isDark) return
    const lamp = lampRef.current
    if (!lamp) return
    const move = (e: MouseEvent) => {
      lamp.style.left = `${e.clientX}px`
      lamp.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [isDark])

  return (
    <>
      {isDark && (
        <div
          ref={lampRef}
          className="lamp-cursor"
          aria-hidden="true"
        />
      )}

      <Navbar />

      <main id="main-content">
        {/* Hero loads eagerly — above the fold */}
        <Hero />

        {/* Everything below is lazy — loaded after hero paints */}
        <Suspense fallback={<SectionSkeleton />}>
          <ScatterBand />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FindYourZone />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer isDark={isDark} />
      </Suspense>
    </>
  )
}
