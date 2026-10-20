import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Newspaper, FileText, BarChart3, PenTool, Calendar } from 'lucide-react'

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const tileProps = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  })

  return (
    <section id="features" className="section">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="text-label" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Features</p>
          <h2 className="text-display-sm">Everything you need.<br />Nothing you don't.</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="bento-grid">
          <motion.div {...tileProps(0.1)} style={{ gridColumn: '1/3' }}><MockTestTile /></motion.div>
          <motion.div {...tileProps(0.2)}><CurrentAffairsTile /></motion.div>
          <motion.div {...tileProps(0.3)}><SmartNotesTile /></motion.div>
          <motion.div {...tileProps(0.35)}><PYQTile /></motion.div>
          <motion.div {...tileProps(0.4)}><MainsCoachTile /></motion.div>
          <motion.div {...tileProps(0.45)} style={{ gridColumn: '3', gridRow: '2' }}><PlannerTile /></motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .bento-grid { grid-template-columns: 1fr 1fr !important; } .bento-grid > div { grid-column: auto !important; grid-row: auto !important; } }
        @media (max-width: 580px) { .bento-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function MockTestTile() {
  const [selected, setSelected] = useState<number | null>(null)
  const [showExp, setShowExp] = useState(false)
  const opts = ['Article 19', 'Article 21', 'Article 32', 'Article 226']
  const correct = 2
  const pick = (i: number) => { if (selected === null) { setSelected(i); setTimeout(() => setShowExp(true), 400) } }
  return (
    <div className="bento-tile" style={{ minHeight: '340px' }} tabIndex={0}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#5B5BF015', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Brain size={16} style={{ color: '#5B5BF0' }} /></div>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>AI Mock Tests</span>
        <span className="chip" style={{ marginLeft: 'auto', fontSize: '0.65rem', color: '#5B5BF0', borderColor: '#5B5BF030' }}>Live demo</span>
      </div>
      <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.55 }}>Adaptive tests that learn your weak zones and explain every wrong option.</p>
      <div style={{ background: 'var(--bg-surface2)', borderRadius: '0.75rem', padding: '0.875rem', marginBottom: '0.75rem' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.5 }}>Which Article of the Constitution guarantees the right to move the Supreme Court to enforce Fundamental Rights?</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          {opts.map((opt, i) => (
            <button key={i} onClick={() => pick(i)} disabled={selected !== null}
              style={{ padding: '0.5rem 0.75rem', borderRadius: '0.5rem', border: '1.5px solid', borderColor: selected !== null ? (i === correct ? '#1FAF7A' : i === selected ? '#C8553D' : 'var(--border)') : 'var(--border)', background: selected !== null ? (i === correct ? '#1FAF7A15' : i === selected ? '#C8553D15' : 'var(--bg-surface)') : 'var(--bg-surface)', color: selected !== null ? (i === correct ? '#1FAF7A' : i === selected ? '#C8553D' : 'var(--text-subtle)') : 'var(--text)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', cursor: selected !== null ? 'default' : 'pointer', transition: 'all 0.2s', textAlign: 'left', minHeight: '44px' }}
              aria-label={opt}
            >{opt}</button>
          ))}
        </div>
      </div>
      {showExp && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'var(--bg-surface2)', borderRadius: '0.625rem', padding: '0.75rem', borderLeft: '3px solid #5B5BF0' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55 }}><strong style={{ color: '#1FAF7A' }}>Article 32</strong> — the "Heart and Soul of the Constitution" — directly empowers you to approach the Supreme Court for Fundamental Rights enforcement.</p>
          <p style={{ fontSize: '0.75rem', color: '#C8553D', marginTop: '0.375rem', fontFamily: 'var(--font-hand)' }}>⚡ Classic trap: Art. 226 gives similar power to High Courts, not the Supreme Court.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)' }}>DIFFICULTY</span>
            <div style={{ flex: 1, height: '4px', background: 'var(--border)', borderRadius: '2px' }}><div style={{ width: '55%', height: '100%', background: '#FFC933', borderRadius: '2px' }} /></div>
            <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#FFC933' }}>MED</span>
          </div>
        </motion.div>
      )}
      {!showExp && selected === null && <p style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', textAlign: 'center', marginTop: '0.5rem' }}>↑ Tap an answer to try</p>}
    </div>
  )
}

function CurrentAffairsTile() {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="bento-tile" style={{ minHeight: '340px', cursor: 'pointer' }} onClick={() => setFlipped(f => !f)} tabIndex={0} onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)} role="button" aria-label="Flip current affairs card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1FAF7A15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Newspaper size={16} style={{ color: '#1FAF7A' }} /></div>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Current Affairs</span>
        <span className="chip" style={{ marginLeft: 'auto', fontSize: '0.65rem', color: '#1FAF7A', borderColor: '#1FAF7A30' }}>Flip →</span>
      </div>
      <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>5-minute daily brief, mapped to the syllabus.</p>
      <div style={{ perspective: '800px' }}>
        <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ type: 'spring', stiffness: 200, damping: 22 }} style={{ position: 'relative', transformStyle: 'preserve-3d', height: '200px' }}>
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', background: 'var(--bg-surface2)', borderRadius: '0.75rem', padding: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#1FAF7A', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>TODAY'S TOPIC</p>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>India's Deep Ocean Mission</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>India's Samudrayaan project aims to send a manned submersible to 6,000m depth to study polymetallic nodules.</p>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-subtle)', marginTop: '0.75rem', fontFamily: 'var(--font-mono)' }}>Tap to flip →</p>
          </div>
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'var(--bg-surface2)', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#1FAF7A', letterSpacing: '0.1em' }}>WHY IT MATTERS</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>India's blue economy strategy + scientific ambition. Links to GS3: Science &amp; Tech and Environment.</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-subtle)' }}>Probable Q: Discuss India's blue economy potential.</p>
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginTop: 'auto' }}>
              {['GS3', 'Prelims', 'Mains'].map(tag => (<span key={tag} style={{ padding: '0.2rem 0.5rem', background: '#1FAF7A15', color: '#1FAF7A', borderRadius: '4px', fontSize: '0.62rem', fontFamily: 'var(--font-mono)' }}>{tag}</span>))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function SmartNotesTile() {
  const [collapsed, setCollapsed] = useState(false)
  const dense = `The Indian Ocean is the third-largest ocean at 70.56 mn km². Bounded by Africa (west), Australia (east) and Antarctica (south). Critical chokepoints: Strait of Hormuz, Strait of Malacca and Suez Canal. India's SAGAR doctrine emphasises its strategic importance.`
  const bullets = ['3rd largest: 70.56 mn km²', 'Bounded: Africa (W), Australia (E)', 'Key straits: Hormuz, Malacca, Suez', 'India: SAGAR doctrine', 'Mnemonic: FAAS \u2014 Focus, Africa, Australia, Straits']
  return (
    <div className="bento-tile" tabIndex={0}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FFC93318', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FileText size={16} style={{ color: '#B8860B' }} /></div>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Smart Notes</span>
        <button onClick={() => setCollapsed(c => !c)} style={{ marginLeft: 'auto', padding: '0.2rem 0.625rem', borderRadius: '4px', background: '#FFC93318', border: 'none', cursor: 'pointer', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#B8860B', minHeight: '28px' }}>{collapsed ? 'Dense' : 'Summarise'}</button>
      </div>
      <motion.div key={String(collapsed)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {collapsed ? (<ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>{bullets.map((b, i) => (<li key={i} style={{ fontSize: '0.8rem', color: i === 4 ? 'var(--accent-warm)' : 'var(--text-muted)', fontFamily: i === 4 ? 'var(--font-hand)' : 'inherit', lineHeight: 1.5 }}>{b}</li>))}</ul>) : (<p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{dense}</p>)}
      </motion.div>
    </div>
  )
}

function PYQTile() {
  const topics = ['Polity', 'Economy', 'Env', 'History', 'Geo']
  const years = [2019, 2020, 2021, 2022, 2023]
  const data = [[4,2,3,5,4],[3,4,2,3,5],[2,3,4,2,3],[5,3,2,4,3],[3,4,3,2,4]]
  const getColor = (v: number) => `rgba(200,85,61,${0.12 + v / 5 * 0.7})`
  return (
    <div className="bento-tile" tabIndex={0}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C8553D15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BarChart3 size={16} style={{ color: '#C8553D' }} /></div>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>PYQ Intelligence</span>
      </div>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.625rem' }}>Topic × Year heatmap (sample data)</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.68rem' }} aria-label="PYQ frequency heatmap">
          <thead><tr><th style={{ padding: '0.2rem', textAlign: 'left', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontWeight: 400 }}></th>{years.map(y => (<th key={y} style={{ padding: '0.2rem 0.3rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontWeight: 400 }}>{y}</th>))}</tr></thead>
          <tbody>{topics.map((t, ti) => (<tr key={t}><td style={{ padding: '0.2rem 0.3rem 0.2rem 0', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{t}</td>{data[ti].map((v, yi) => (<td key={yi} style={{ padding: '0.2rem 0.25rem' }}><div title={`${t} ${years[yi]}: ${v}q`} onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')} onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} style={{ width: '22px', height: '18px', borderRadius: '3px', background: getColor(v), display: 'flex', alignItems: 'center', justifyContent: 'center', color: v > 3 ? '#C8553D' : 'var(--text-subtle)', fontWeight: v > 3 ? 700 : 400, transition: 'transform 0.15s', cursor: 'default' }}>{v}</div></td>))}</tr>))}</tbody>
        </table>
      </div>
    </div>
  )
}

function MainsCoachTile() {
  return (
    <div className="bento-tile" tabIndex={0}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#5B5BF015', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PenTool size={16} style={{ color: '#5B5BF0' }} /></div>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Mains Answer Coach</span>
      </div>
      <div style={{ background: 'var(--bg-surface2)', borderRadius: '0.625rem', padding: '0.875rem', fontFamily: 'var(--font-hand)', fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--text)', position: 'relative', marginBottom: '0.875rem' }}>
        <p>The Right to Education Act (2009) mandates free and compulsory education for children aged 6–14. It prohibits screening procedures and mandates neighbourhood schools.</p>
        <div style={{ position: 'absolute', top: '8px', right: '-4px', background: '#5B5BF010', border: '1px solid #5B5BF035', borderRadius: '0.5rem', padding: '0.3rem 0.5rem', fontFamily: 'var(--font-hand)', fontSize: '0.75rem', color: '#5B5BF0', transform: 'rotate(1.5deg)' }}>✓ Good structure</div>
      </div>
      <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center' }}>
        {[{ label: 'Structure', v: 0.8, c: '#5B5BF0' }, { label: 'Keywords', v: 0.65, c: '#1FAF7A' }, { label: 'Clarity', v: 0.75, c: '#FFC933' }].map(({ label, v, c }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" aria-label={`${label}: ${Math.round(v * 10)}/10`}>
              <circle cx="22" cy="22" r="18" fill="none" stroke="var(--border)" strokeWidth="3" />
              <circle cx="22" cy="22" r="18" fill="none" stroke={c} strokeWidth="3" strokeDasharray={`${v * 113.1} 113.1`} strokeLinecap="round" transform="rotate(-90 22 22)" />
              <text x="22" y="26" textAnchor="middle" fontSize="8.5" fill={c} fontFamily="JetBrains Mono, monospace">{Math.round(v * 10)}/10</text>
            </svg>
            <p style={{ fontSize: '0.62rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlannerTile() {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Mock Test: Polity', done: true, time: '9–11 AM' },
    { id: 2, label: 'Current Affairs', done: true, time: '11–11:30 AM' },
    { id: 3, label: 'Geography: Monsoon', done: false, time: '12–1 PM' },
    { id: 4, label: 'PYQ: Economy', done: false, time: '3–4 PM' },
    { id: 5, label: 'Revision: Notes', done: false, time: '7–8 PM' },
  ])
  const miss = (id: number) => setTasks(prev => prev.filter(t => t.id !== id).map((t, i) => ({ ...t, time: ['9–11 AM', '11–11:30 AM', '12–2 PM', '3–5 PM', '7–8 PM'][Math.min(i, 4)] })))
  return (
    <div className="bento-tile" style={{ height: '100%' }} tabIndex={0}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1FAF7A15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Calendar size={16} style={{ color: '#1FAF7A' }} /></div>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Study Planner</span>
        <span className="chip" style={{ marginLeft: 'auto', fontSize: '0.6rem', color: '#1FAF7A', borderColor: '#1FAF7A30' }}>Adaptive</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        {tasks.map(task => (
          <motion.div key={task.id} layout initial={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.625rem', background: task.done ? 'var(--bg-surface2)' : 'var(--bg-surface)', borderRadius: '0.5rem', border: '1px solid', borderColor: task.done ? 'var(--border)' : '#1FAF7A25' }}
          >
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid', borderColor: task.done ? '#1FAF7A' : 'var(--border)', background: task.done ? '#1FAF7A' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {task.done && <svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>}
            </div>
            <span style={{ flex: 1, fontSize: '0.78rem', color: task.done ? 'var(--text-subtle)' : 'var(--text)', textDecoration: task.done ? 'line-through' : 'none' }}>{task.label}</span>
            <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)', whiteSpace: 'nowrap' }}>{task.time}</span>
            {!task.done && <button onClick={() => miss(task.id)} style={{ padding: '0.15rem 0.375rem', background: 'none', border: '1px solid var(--border)', borderRadius: '4px', cursor: 'pointer', fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)', minHeight: '24px' }} aria-label={`Miss ${task.label}`}>miss</button>}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
