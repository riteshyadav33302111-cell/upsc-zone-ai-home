import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Dumbbell, Trophy } from 'lucide-react'

const STEPS = [
  {
    id: 'map',
    icon: MapPin,
    label: 'Map',
    title: 'Find your terrain.',
    desc: 'A 20-minute diagnostic finds your weak zones across GS Paper 1, 2, 3, 4 and CSAT. No guessing — you start exactly where you need to.',
    color: '#5B5BF0',
  },
  {
    id: 'train',
    icon: Dumbbell,
    label: 'Train',
    title: 'Build day by day.',
    desc: 'A daily plan of mocks, current affairs and notes aimed precisely at your gaps. The system rebalances when life happens — missed a day? It adapts.',
    color: '#C8553D',
  },
  {
    id: 'peak',
    icon: Trophy,
    label: 'Peak',
    title: 'Arrive sharp.',
    desc: 'Full-length mocks, Mains answer evaluation and interview prep as exam day nears. From scattered to summit-ready.',
    color: '#1FAF7A',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  })

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [drawLength, setDrawLength] = useState(0)

  useEffect(() => {
    const unsubscribe = pathProgress.on('change', (v) => setDrawLength(v))
    return unsubscribe
  }, [pathProgress])

  return (
    <section id="how-it-works" className="section" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="text-label" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>How it works</p>
          <h2 className="text-display-sm">Map. Train. Peak.</h2>
          <p className="text-body-lg" style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '520px', margin: '1rem auto 0' }}>
            Three phases, one through-line — from scattered aspirant to exam-ready.
          </p>
        </motion.div>

        {/* Topographic path with checkpoints */}
        <div style={{ position: 'relative' }}>
          {/* SVG path */}
          <svg
            viewBox="0 0 900 200"
            style={{
              width: '100%',
              height: '160px',
              display: 'block',
              marginBottom: '2rem',
              overflow: 'visible',
            }}
            aria-hidden="true"
          >
            {/* Background contour lines */}
            <path d="M 0 160 Q 150 120 300 140 Q 450 160 600 120 Q 750 80 900 100" fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.4" />
            <path d="M 0 180 Q 150 140 300 160 Q 450 180 600 140 Q 750 100 900 120" fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.25" />

            {/* Main topographic path */}
            <path
              id="topo-path"
              d="M 60 150 C 150 130 200 100 300 110 C 400 120 420 80 500 70 C 580 60 700 50 840 40"
              fill="none"
              stroke="var(--border)"
              strokeWidth="2.5"
              strokeDasharray="4 3"
            />

            {/* Animated progress stroke */}
            <path
              d="M 60 150 C 150 130 200 100 300 110 C 400 120 420 80 500 70 C 580 60 700 50 840 40"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: `${1000 - drawLength * 1000}`,
                transition: 'stroke-dashoffset 0.05s linear',
              }}
            />

            {/* Checkpoint dots */}
            {[
              { cx: 60, cy: 150, color: '#5B5BF0' },
              { cx: 500, cy: 70, color: '#C8553D' },
              { cx: 840, cy: 40, color: '#1FAF7A' },
            ].map((dot, i) => (
              <g key={i}>
                <circle cx={dot.cx} cy={dot.cy} r="10" fill={dot.color} opacity="0.15" />
                <circle cx={dot.cx} cy={dot.cy} r="6" fill={dot.color} />
                <circle cx={dot.cx} cy={dot.cy} r="3" fill="var(--bg)" />
              </g>
            ))}
          </svg>

          {/* Step cards */}
          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bento-tile"
                style={{ position: 'relative' }}
              >
                {/* Step number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '1.25rem',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    background: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 12px ${step.color}40`,
                  }}
                >
                  <step.icon size={14} color="white" />
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <span
                    className="text-label"
                    style={{ color: step.color, display: 'block', marginBottom: '0.5rem' }}
                  >
                    {step.label}
                  </span>
                  <h3 className="text-display-xs" style={{ marginBottom: '0.625rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
