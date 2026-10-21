# UPSC ZONE AI ΓÇö Home Page

> **Web Home UI Designer Challenge entry**
> Designed & built by **Ritesh Yadav**

<br />

<div align="center">

**[≡ƒîÉ Live Demo](https://riteshyadav33302111-cell.github.io/upsc-zone-ai-home/)** &nbsp;┬╖&nbsp;
**[≡ƒôª Repository](https://github.com/riteshyadav33302111-cell/upsc-zone-ai-home)** &nbsp;┬╖&nbsp;
**[ΓÜÖ∩╕Å Actions](https://github.com/riteshyadav33302111-cell/upsc-zone-ai-home/actions)**

</div>

<br />

---

## What is this?

A fully responsive, production-quality home page for **UPSC ZONE AI** ΓÇö an AI-powered preparation platform for UPSC Civil Services and other competitive exam aspirants. Built from scratch as a challenge submission, with no templates, no stock photos, and no UI kits.

The design concept: **THE ZONE** ΓÇö the feeling of deep focus. The page narrates the journey from *scatter* (12 open tabs, forgotten PDFs, mocks nobody reviews) to *clarity* (one organised workspace).

---

## Live Preview

| Desktop ΓÇö Paper (light) | Desktop ΓÇö Night Library (dark) |
|:-:|:-:|
| *(open the live URL)* | *(toggle the moon icon in the nav)* |

≡ƒöù **[https://riteshyadav33302111-cell.github.io/upsc-zone-ai-home/](https://riteshyadav33302111-cell.github.io/upsc-zone-ai-home/)**

---

## Design System

### Colour Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-paper` | `#FBF7EF` | Page background (light) |
| `--color-ink` | `#0B1220` | Primary text, dark surfaces |
| `--color-highlighter` | `#FFC933` | Signature accent ΓÇö used sparingly, like a real highlighter |
| `--color-zone-indigo` | `#5B5BF0` | AI interactions, primary buttons |
| `--color-chai` | `#C8553D` | Warm micro-accent, decorative |
| `--color-sage` | `#1FAF7A` | Success, correct answers |
| Night background | `#0D0F14` | Deep ink for Night Library theme |
| Night lamp | `#E8A43A` | Warm glow accents in dark mode |

All foreground/background pairs pass **WCAG AA** contrast. Theme persists in `localStorage` with an anti-FOUC inline script in `<head>`.

### Typography

| Role | Font | Usage |
|------|------|-------|
| Display | [Fraunces](https://fonts.google.com/specimen/Fraunces) | Hero headline, section titles |
| Body / UI | [Manrope](https://fonts.google.com/specimen/Manrope) | Paragraphs, buttons, labels |
| Mono / Data | [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Tags, chips, code-style labels |
| Handwriting | [Caveat](https://fonts.google.com/specimen/Caveat) | Margin notes, AI annotations |
| Devanagari | [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) | Hindi whisper line |

All fonts are **self-hosted** via `@fontsource` ΓÇö no Google Fonts requests at runtime. Type scale uses `clamp()` for fluid sizing across every viewport.

### Signature Motifs

These five elements repeat consistently ΓÇö they *are* the brand:

1. **Highlighter swipe** ΓÇö key headline words get a marker underline that draws itself on scroll reveal (CSS `scaleX` transition)
2. **Contour lines** ΓÇö a subtle topographic SVG texture; the syllabus as terrain you climb
3. **Margin notes** ΓÇö AI feedback appears as handwritten Caveat annotations in a notebook margin
4. **Focus ring** ΓÇö the "O" of ZONE is a target ring; reused for progress indicators, score rings, favicon and back-to-top button
5. **Paper grain** ΓÇö a 3% SVG noise overlay for tactile feel (CSS `::before` on `body`)

---

## Page Sections

### 1 ┬╖ Navigation
Sticky header with glass blur (`backdrop-filter`) after 20px scroll. Scroll-spy highlights the active section. Mobile: full-screen drawer with a proper focus trap (Tab cycles within drawer, Escape closes it). Theme toggle (ΓÿÇ∩╕Å / ≡ƒîÖ) remembers preference.

### 2 ┬╖ Hero ΓÇö Scatter ΓåÆ Snap
The signature animation: on load, six blurred, tilted cards float in chaos ΓÇö `12 tabs open`, `notes_final_v7(2).pdf`, `PYQ 2019 ΓÇö unsolved`, `Revise Art. 21`, `Mock 14: 62/200 ΓÇö why?`, `Editorial backlog: 9 days`. After 1.4 s they spring into a crisp **"Your Zone"** dashboard: Today's Plan, Mock Score ring, Current Affairs, Weak Zone bars, Streak, Ask Zone AI. A small **replay** button re-runs it. `aria-hidden` on the chaos layer; `prefers-reduced-motion` skips straight to the dashboard.

Below the hero: a slow auto-pausing marquee of exams covered (UPSC CSE, IFoS, CAPF, State PSCs, SSC CGL, Banking, CDS, NDA).

### 3 ┬╖ The Scatter Band
A single statement ΓÇö *"Aspirants don't lack effort. They lack a system."* ΓÇö followed by three pain points that slide into a tidy row on scroll.

### 4 ┬╖ Features Bento
Six tiles, each with a **live interactive demo** ΓÇö not a static icon:

| Tile | Demo |
|------|------|
| **AI Mock Tests** | Answerable MCQ (Article 32 ΓÇö factually correct Constitution question). Pick an answer ΓåÆ AI explanation types out as a margin note, flags the classic Art. 226 trap. Difficulty meter adapts. |
| **Daily Current Affairs** | Tap-to-flip card: front shows topic + summary (India's Deep Ocean Mission), back shows *Why it matters* + syllabus tags + probable question. |
| **Smart Notes** | A dense paragraph collapses into 5 bullets + a mnemonic (in Caveat handwriting) on "Summarise". Toggle back with "Dense". |
| **PYQ Intelligence** | Topic ├ù Year frequency heatmap table. Cells scale on hover; intensity encodes question count. Labelled "sample data". |
| **Mains Answer Coach** | Handwriting-style answer with a rotated AI annotation overlay ("Γ£ô Good structure") and three SVG score rings (Structure / Keywords / Clarity). |
| **Adaptive Study Planner** | A day timeline of tasks. Tap "miss" on any task ΓåÆ it's removed and remaining tasks reflow with updated time slots (Framer Motion layout animation). |

All tiles lift on hover (`translateY(-4px)`), are fully keyboard-operable (`tabIndex`, `role`, `aria-label`).

### 5 ┬╖ How It Works
Three checkpoints ΓÇö **Map ┬╖ Train ┬╖ Peak** ΓÇö connected by a scroll-driven SVG topographic path. The stroke draws progressively as you scroll through the section. Each checkpoint has an icon, a serif title, and a concise description.

### 6 ┬╖ Find Your Zone *(interactive, no backend)*
Three chip-group questions: Stage / Biggest struggle / Daily hours. Selecting all three triggers a **typewriter AI reply** that generates a personalised study plan. Answers persist in `localStorage`. The CTA inside the plan card scrolls to the footer signup.

### 7 ┬╖ Social Proof
Testimonials displayed as handwritten sticky-note cards in an accessible carousel (arrow buttons, dot tabs, keyboard ΓåÉ ΓåÆ, auto-advance every 6 s, pauses on focus). Below: four count-up statistics that animate on first scroll into view.

> ΓÜá∩╕Å **All testimonials and figures are placeholder content**, clearly labelled in the section header. Fictional first names + attempt number only ΓÇö no real names, no claimed ranks. Replace via `src/data/testimonials.json` and `src/data/stats.json`.

### 8 ┬╖ FAQ
Accessible accordion. Six questions including the important affiliation disclaimer. Uses `aria-expanded`, `aria-controls`, `role="region"` ΓÇö screen-reader correct.

### 9 ┬╖ Final CTA
Large serif headline with highlighter swipe. Primary CTA button. And a small animated **chai cup** Easter egg (SVG steam paths): click it ΓåÆ a floating card appears with *"5-minute break. Back to the zone."* and a countdown ring timer. Dismiss with "I'm back".

### 10 ┬╖ Footer
Giant cropped wordmark as a watermark. Four nav columns (Product / Exams / Resources / Company). **Email signup** with live front-end validation ΓÇö shows an inline error for invalid emails, a success state for valid ones. Social link icons. Legal disclaimer. *"Designed by Ritesh Yadav"* credit. Back-to-top button with hover state.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Build | [Vite 8](https://vitejs.dev) | Sub-2s builds with rolldown |
| UI | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org) | Strict mode, full type safety |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + CSS custom properties | Design tokens as vars, no JS-in-CSS |
| Animation | [Framer Motion](https://www.framer.com/motion/) | Spring physics, layout animations, `useInView` |
| Icons | [lucide-react](https://lucide.dev) | Consistent SVG, tree-shakeable |
| Fonts | [@fontsource](https://fontsource.org) | Self-hosted, no external requests |
| Deployment | GitHub Pages via GitHub Actions | Static, zero cost, CI/CD on every push |

**No backend. No API keys. No database.**

---

## Run Locally

```bash
# Clone
git clone https://github.com/riteshyadav33302111-cell/upsc-zone-ai-home.git
cd upsc-zone-ai-home

# Install
npm install

# Dev server (hot reload)
npm run dev
# ΓåÆ http://localhost:5173

# Production build
npm run build

# Preview production build locally
npm run preview
```

Requires **Node.js ΓëÑ 18**.

---

## Project Structure

```
upsc-zone-ai-home/
Γö£ΓöÇΓöÇ .github/
Γöé   ΓööΓöÇΓöÇ workflows/
Γöé       ΓööΓöÇΓöÇ deploy.yml          # GitHub Actions ΓåÆ Pages (build + deploy)
Γö£ΓöÇΓöÇ public/
Γöé   ΓööΓöÇΓöÇ favicon.svg             # Original SVG ΓÇö the Zone ring/target motif
Γö£ΓöÇΓöÇ src/
Γöé   Γö£ΓöÇΓöÇ components/
Γöé   Γöé   ΓööΓöÇΓöÇ sections/
Γöé   Γöé       Γö£ΓöÇΓöÇ Navbar.tsx       # Sticky glass nav, scroll-spy, mobile drawer
Γöé   Γöé       Γö£ΓöÇΓöÇ Hero.tsx         # ScatterΓåÆSnap animation, marquee
Γöé   Γöé       Γö£ΓöÇΓöÇ ScatterBand.tsx  # Pain-point statement band
Γöé   Γöé       Γö£ΓöÇΓöÇ Features.tsx     # 6-tile bento grid with live demos
Γöé   Γöé       Γö£ΓöÇΓöÇ HowItWorks.tsx   # Scroll-driven topographic SVG path
Γöé   Γöé       Γö£ΓöÇΓöÇ FindYourZone.tsx # Interactive quiz + typewriter AI output
Γöé   Γöé       Γö£ΓöÇΓöÇ SocialProof.tsx  # Testimonials carousel + count-up stats
Γöé   Γöé       Γö£ΓöÇΓöÇ FAQ.tsx          # Accessible accordion
Γöé   Γöé       Γö£ΓöÇΓöÇ FinalCTA.tsx     # CTA + chai cup Easter egg + ring timer
Γöé   Γöé       ΓööΓöÇΓöÇ Footer.tsx       # Email signup, nav, legal, back-to-top
Γöé   Γö£ΓöÇΓöÇ data/
Γöé   Γöé   Γö£ΓöÇΓöÇ testimonials.json   # ΓÜá∩╕Å PLACEHOLDER ΓÇö swap with real stories
Γöé   Γöé   Γö£ΓöÇΓöÇ stats.json          # ΓÜá∩╕Å PLACEHOLDER ΓÇö swap with real figures
Γöé   Γöé   ΓööΓöÇΓöÇ faq.json            # FAQ content (edit freely)
Γöé   Γö£ΓöÇΓöÇ hooks/
Γöé   Γöé   Γö£ΓöÇΓöÇ useTheme.ts         # Paper / Night Library toggle + localStorage
Γöé   Γöé   ΓööΓöÇΓöÇ useScrollReveal.ts  # useScrollSpy, useCountUp, useReducedMotion
Γöé   Γö£ΓöÇΓöÇ styles/
Γöé   Γöé   ΓööΓöÇΓöÇ globals.css         # Design tokens, typography scale, utilities
Γöé   Γö£ΓöÇΓöÇ App.tsx                 # Root ΓÇö composes all sections, lamp cursor
Γöé   Γö£ΓöÇΓöÇ main.tsx                # Entry point ΓÇö font imports, React root
Γöé   ΓööΓöÇΓöÇ vite-env.d.ts           # Vite + CSS type declarations
Γö£ΓöÇΓöÇ index.html                  # Meta tags, OG, anti-FOUC theme script
Γö£ΓöÇΓöÇ vite.config.ts
Γö£ΓöÇΓöÇ tsconfig.json
Γö£ΓöÇΓöÇ tsconfig.app.json
Γö£ΓöÇΓöÇ LICENSE                     # MIT
ΓööΓöÇΓöÇ README.md
```

---

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`)
- Skip-to-content link (visible on focus)
- All interactive elements have visible focus states
- Mobile drawer: full focus trap, `role="dialog"`, `aria-modal`
- FAQ accordion: `aria-expanded`, `aria-controls`, `role="region"`
- Testimonials carousel: `aria-live="polite"`, keyboard ΓåÉ ΓåÆ navigation
- Score rings: `aria-label` with readable values
- `prefers-reduced-motion`: all animations disabled, chaos ΓåÆ dashboard shown instantly
- 200% zoom: no horizontal scroll, no clipped text
- Tap targets: minimum 44 ├ù 44 px throughout
- Hindi text tagged with `lang="hi"`
- WCAG AA contrast on all text

---

## Responsiveness

Tested at: **360 ┬╖ 390 ┬╖ 768 ┬╖ 1024 ┬╖ 1280 ┬╖ 1440 ┬╖ 1920 px**

- 12-column grid with `clamp()` gutters
- Fluid type scale: display headings scale from ~2.5rem (mobile) to ~5rem (desktop)
- Bento grid: 3-col ΓåÆ 2-col (Γëñ 900px) ΓåÆ 1-col (Γëñ 580px)
- Nav: full links (desktop) ΓåÆ hamburger drawer (Γëñ 768px)
- Hero: two-column ΓåÆ single-column (Γëñ 768px)
- Footer columns: 4 ΓåÆ 2 ΓåÆ 1
- No horizontal scroll at any tested width

---

## Deployment

Automatic via **GitHub Actions** on every push to `main`:

```yaml
push ΓåÆ checkout ΓåÆ setup node 24 ΓåÆ npm ci ΓåÆ vite build ΓåÆ upload-pages-artifact ΓåÆ deploy-pages
```

To deploy manually:
```bash
npm run build
# dist/ is ready ΓÇö upload anywhere that serves static files
```

To enable Pages on a fork:
1. Go to **Settings ΓåÆ Pages**
2. Set source to **GitHub Actions**
3. Push to `main` ΓÇö the workflow handles the rest

---

## Content Notice

> ΓÜá∩╕Å All testimonials (names, quotes, attempt numbers) and statistics in the Social Proof section are **fictional placeholder content** created for this design concept. They are clearly labelled on the page. The real team should replace them with genuine user stories and verified figures via the JSON files in `src/data/`.

---

## Legal Disclaimer

**UPSC ZONE AI is an independent platform and is not affiliated with, endorsed by, or connected to the Union Public Service Commission (UPSC) or the Government of India.** "UPSC" in the platform name refers to the examination category.

All sample content (Constitution articles, exam topics) is factually correct and drawn from public domain sources.

No copyrighted assets, real people's images, national symbols, or government emblems are used anywhere in this project. The wordmark and favicon are original SVG artwork.

---

## Judging Criteria ΓÇö Self Assessment

| Criterion | What was done |
|-----------|---------------|
| **Creativity & Originality** | Original concept (THE ZONE), original wordmark, original SVG illustrations, five consistent signature motifs, chai cup Easter egg, ScatterΓåÆSnap animation ΓÇö nothing borrowed from templates or competitors |
| **UI/UX & Ease of Navigation** | Sticky nav with scroll-spy, skip link, smooth anchor scrolling with offset correction, 3-second test passed (tagline + CTA above the fold), max two primary CTAs per viewport |
| **Visual Appeal** | Two premium themes, five-font editorial system, topographic texture, paper grain, handwriting annotations, WCAG AA contrast, generous whitespace |
| **Relevance to UPSC Aspirants** | Correct Constitution MCQ, syllabus-mapped current affairs, PYQ heatmap, Mains answer coach, adaptive planner, Hindi language line, exam marquee |
| **Responsiveness & Detail** | Fluid clamp() scale, tested 360ΓÇô1920px, 44px tap targets, focus trap in drawer, prefers-reduced-motion, 200% zoom, semantic HTML |

---

## Credits

- **Designed & built by [Ritesh Yadav](https://github.com/riteshyadav33302111-cell)**
- Fonts: [Fraunces](https://github.com/undercasetype/Fraunces), [Manrope](https://github.com/sharanda/manrope), [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono), [Caveat](https://github.com/googlefonts/caveat), [Noto Sans](https://github.com/notofonts/latin-greek-cyrillic) ΓÇö all OFL licensed
- Icons: [Lucide](https://lucide.dev) ΓÇö ISC license
- Animation: [Framer Motion](https://www.framer.com/motion/) ΓÇö MIT license

---

## License

[MIT](./LICENSE) ┬⌐ 2025 Ritesh Yadav
