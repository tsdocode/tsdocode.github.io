import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Dot follows cursor instantly
  const dotX = useSpring(cursorX, { stiffness: 2000, damping: 80, mass: 0.1 })
  const dotY = useSpring(cursorY, { stiffness: 2000, damping: 80, mass: 0.1 })

  // Ring follows with lag
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 22, mass: 0.6 })
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 22, mass: 0.6 })

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(true)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
        setHidden(false)
      })
    }

    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)
    const onDown = () => setClicked(true)
    const onUp = () => setClicked(false)

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], label')) {
        setHovered(true)
      }
    }
    const onHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('a, button, [role="button"], label')) {
        setHovered(false)
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onHoverStart)
    document.addEventListener('mouseout', onHoverEnd)

    // Hide the native cursor globally
    document.documentElement.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onHoverStart)
      document.removeEventListener('mouseout', onHoverEnd)
      document.documentElement.style.cursor = ''
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-neutral-400"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: clicked ? 16 : hovered ? 28 : 22,
          height: clicked ? 16 : hovered ? 28 : 22,
          opacity: hidden ? 0 : hovered ? 0.6 : 0.4,
          borderColor: hovered ? '#111111' : '#737373',
          backgroundColor: hovered ? 'rgba(17,17,17,0.06)' : 'transparent',
        }}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-neutral-900"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: 3,
          height: 3,
          opacity: hidden ? 0 : 1,
          scale: clicked ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
