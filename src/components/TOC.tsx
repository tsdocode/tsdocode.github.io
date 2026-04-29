import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'oss', label: 'Open Source' },
]

export default function TOC() {
  const [active, setActive] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 12 }}
      transition={{ duration: 0.3 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 pointer-events-auto"
      aria-label="Table of contents"
    >
      {sections.map(s => {
        const isActive = active === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-2.5 py-1"
            aria-current={isActive ? 'location' : undefined}
          >
            {/* Tick mark */}
            <span
              className={`block h-px transition-all duration-300 ${
                isActive
                  ? 'w-5 bg-neutral-900'
                  : 'w-3 bg-neutral-300 group-hover:w-4 group-hover:bg-neutral-500'
              }`}
            />
            {/* Label */}
            <span
              className={`text-xs font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-neutral-900'
                  : 'text-neutral-400 group-hover:text-neutral-600'
              }`}
            >
              {s.label}
            </span>
          </a>
        )
      })}
    </motion.nav>
  )
}
