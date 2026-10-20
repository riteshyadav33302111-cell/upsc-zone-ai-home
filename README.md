# UPSC ZONE AI — Web Home UI Designer Challenge

> **Live demo:** [https://riteshyadav33302111-cell.github.io/upsc-zone-ai-home/](https://riteshyadav33302111-cell.github.io/upsc-zone-ai-home/)

A standout home page design for **UPSC ZONE AI** — an AI-powered prep platform for UPSC and other competitive exam aspirants.

---

## ✦ The Concept: THE ZONE

Most edtech pages shout — blue-orange gradients, stock photos, generic card grids. This page is the opposite: **calm intensity**. An editorial, focused study space with AI woven in.

**Scatter → Snap:** The hero animation narrates the journey from scattered chaos (12 open tabs, forgotten PDFs, unreviewed mocks) to one organised "Zone" workspace.

---

## 🎨 Design Decisions → Judging Criteria

| Criterion | Decision |
|-----------|----------|
| **Creativity & Originality** | Original wordmark SVG, custom topographic motifs, handwriting annotations, highlighter swipe — no templates or stock assets |
| **UI/UX & Navigation** | Glass-blur sticky nav with scroll-spy, full keyboard support, mobile drawer with focus trap, smooth anchor scrolling |
| **Visual Appeal** | Two-theme system (Paper + Night Library), editorial Fraunces serif + Manrope grotesk, WCAG AA contrast, paper grain overlay |
| **UPSC Relevance** | Live MCQ with Constitution content, PYQ heatmap, Mains answer coach, Hindi whisper line, syllabus-tagged current affairs |
| **Responsiveness** | 12-col grid, fluid type scale with clamp(), tap targets ≥ 44px, tested 360px–1920px |

### Signature Motifs
1. **Highlighter swipe** — key words get a drawn-on marker underline on reveal
2. **Contour lines** — topographic SVG texture (the syllabus as terrain you climb)
3. **Margin notes** — AI feedback as handwritten Caveat annotations
4. **Focus ring** — the "O" of ZONE reused for progress, loaders, buttons, favicon
5. **Paper grain** — 3% noise overlay for tactile feel

---

## ⚡ Tech Stack

- **Vite 8** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS v4** with CSS custom property tokens
- **Framer Motion** — spring physics, staggered reveals, 60fps
- **lucide-react** — all icons
- **@fontsource** — self-hosted Fraunces, Manrope, JetBrains Mono, Caveat, Noto Sans

---

## 🚀 Run Locally

```bash
git clone https://github.com/<your-username>/upsc-zone-ai-home.git
cd upsc-zone-ai-home
npm install
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/sections/   # All page sections
├── data/                  # Testimonials, FAQ, stats (placeholder — swap with real data)
├── hooks/                 # useTheme, useScrollReveal, useCountUp, useScrollSpy
└── styles/globals.css     # Design tokens, typography, utilities
```

---

## 📝 Content Notice

All testimonials and statistics are **placeholder content, clearly labelled**. Uses fictional first names and attempt numbers only — no real names, no claimed ranks.

---

## ⚖ Legal

**UPSC ZONE AI is an independent platform and is not affiliated with the Union Public Service Commission or the Government of India.**

All content is 100% original. No copyrighted assets. No stock photos.

---

**Designed by Ritesh Yadav** · MIT License
