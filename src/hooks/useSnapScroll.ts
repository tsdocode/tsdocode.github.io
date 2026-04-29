import { useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'experience', 'oss']

// How far past a section boundary (px) before we snap to the next one.
// Larger = more forgiving for tall sections.
const BOUNDARY_THRESHOLD = 40

// Minimum wheel delta to trigger a snap (avoids accidental micro-scrolls).
const DELTA_THRESHOLD = 20

// Lock-out duration after a snap fires (ms). Prevents rapid multi-firing.
const SNAP_COOLDOWN = 950

export function useSnapScroll() {
  useEffect(() => {
    let isSnapping = false
    let lastSnapTime = 0

    const getSectionBounds = (id: string) => {
      const el = document.getElementById(id)
      if (!el) return null
      const rect = el.getBoundingClientRect()
      return {
        top: rect.top,
        bottom: rect.bottom,
        height: el.offsetHeight,
      }
    }

    const getCurrentIndex = (): number => {
      // The "current" section is the last one whose top is above the middle of the viewport.
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const bounds = getSectionBounds(SECTION_IDS[i])
        if (bounds && bounds.top <= window.innerHeight * 0.4) return i
      }
      return 0
    }

    const snapTo = (idx: number) => {
      const el = document.getElementById(SECTION_IDS[idx])
      if (!el) return
      isSnapping = true
      lastSnapTime = Date.now()
      el.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => { isSnapping = false }, SNAP_COOLDOWN)
    }

    const onWheel = (e: WheelEvent) => {
      // Ignore tiny/accidental nudges
      if (Math.abs(e.deltaY) < DELTA_THRESHOLD) return
      // Cooldown guard
      if (isSnapping || Date.now() - lastSnapTime < SNAP_COOLDOWN) return

      const idx = getCurrentIndex()
      const bounds = getSectionBounds(SECTION_IDS[idx])
      if (!bounds) return

      const goingDown = e.deltaY > 0
      const goingUp = e.deltaY < 0

      if (goingDown) {
        const atSectionBottom = bounds.bottom <= window.innerHeight + BOUNDARY_THRESHOLD
        if (atSectionBottom && idx < SECTION_IDS.length - 1) {
          e.preventDefault()
          snapTo(idx + 1)
        }
      } else if (goingUp) {
        const atSectionTop = bounds.top >= -BOUNDARY_THRESHOLD
        if (atSectionTop && idx > 0) {
          e.preventDefault()
          snapTo(idx - 1)
        }
      }
    }

    // Key-based navigation (arrow keys / Page Up / Page Down / Home / End)
    const onKeyDown = (e: KeyboardEvent) => {
      if (isSnapping || Date.now() - lastSnapTime < SNAP_COOLDOWN) return
      const idx = getCurrentIndex()

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (idx < SECTION_IDS.length - 1) { e.preventDefault(); snapTo(idx + 1) }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (idx > 0) { e.preventDefault(); snapTo(idx - 1) }
      } else if (e.key === 'Home') {
        e.preventDefault(); snapTo(0)
      } else if (e.key === 'End') {
        e.preventDefault(); snapTo(SECTION_IDS.length - 1)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}
