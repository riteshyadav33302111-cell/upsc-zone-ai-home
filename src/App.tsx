import React, { useEffect, useRef } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import ScatterBand from './components/sections/ScatterBand'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import FindYourZone from './components/sections/FindYourZone'
import SocialProof from './components/sections/SocialProof'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function App() {
  const { theme, isDark } = useTheme()
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
        <Hero />
        <ScatterBand />
        <Features />
        <HowItWorks />
        <FindYourZone />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer isDark={isDark} />
    </>
  )
}
