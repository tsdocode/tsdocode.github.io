import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const ROLES = [
  'Senior AI Engineer',
  'TTS Specialist',
  'Voice AI Builder',
  'MLOps Engineer',
]

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const delay = deleting ? speed / 2 : speed

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export default function Hero() {
  const role = useTypingEffect(ROLES)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl w-full"
      >
        {/* Label */}
        <motion.div variants={itemVariants}>
          <span className="inline-block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl font-bold tracking-tight text-neutral-900 leading-none mb-4"
        >
          Sang
          <br />
          <span className="text-neutral-400">Nguyen</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl font-medium text-neutral-600 mb-3 h-8 flex items-center"
        >
          <span>{role}</span>
          <span className="ml-0.5 w-0.5 h-6 bg-neutral-600 animate-pulse inline-block" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-500 text-base max-w-xl leading-relaxed mb-10"
        >
          I build speech synthesis systems and real-time voice AI infrastructure —
          from raw audio datasets to production-grade inference at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://github.com/tsdocode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tsdocode/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 transition-colors"
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>
          <a
            href="mailto:tsdocode@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 transition-colors"
          >
            <FiMail size={15} /> Email
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-xs text-neutral-400"
        >
          <FiArrowDown size={12} className="animate-bounce" />
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
