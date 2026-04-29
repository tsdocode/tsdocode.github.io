import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Open Source', href: '#oss' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    return scrollY.on('change', v => setScrolled(v > 60))
  }, [scrollY])

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/80 border-b border-neutral-100 shadow-sm' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-bold text-neutral-900 tracking-tight">
          SN
        </a>
        <div className="flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:tsdocode@gmail.com"
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
