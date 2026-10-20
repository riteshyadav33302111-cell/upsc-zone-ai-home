import { useState, useEffect } from 'react'

type Theme = 'paper' | 'night'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('upsc-zone-theme') as Theme | null
      return stored ?? 'paper'
    }
    return 'paper'
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme === 'night' ? 'night' : 'paper')
    localStorage.setItem('upsc-zone-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'paper' ? 'night' : 'paper')

  return { theme, toggle, isDark: theme === 'night' }
}
