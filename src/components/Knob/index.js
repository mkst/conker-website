import React, {useEffect, useRef} from 'react'

import './Knob.scss'

const MAX_TILT = 40 // degrees the stick can be pushed from upright

// the pause menu's cursor: a little analog stick. With a mouse, the stick leans
// toward the pointer as if it's being pushed; on touch screens it wiggles instead.
export const Knob = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const canTrack = window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !canTrack) {
      return
    }

    el.classList.add('tracking')
    let frame = null
    let pointer = null

    const update = () => {
      frame = null
      // pivot at the base of the stick
      const rect = el.getBoundingClientRect()
      const px = rect.left + rect.width * 0.53
      const py = rect.top + rect.height * 0.75
      // a pointer below the stick still pushes it sideways, rather than flipping it
      const angle = Math.atan2(pointer.x - px, Math.abs(py - pointer.y)) * 180 / Math.PI
      const tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, angle))
      el.style.setProperty('--stick', `${tilt.toFixed(1)}deg`)
    }

    const onMove = e => {
      pointer = {x: e.clientX, y: e.clientY}
      if (frame === null) {
        frame = requestAnimationFrame(update)
      }
    }

    window.addEventListener('pointermove', onMove, {passive: true})
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
    }
  }, [])

  return (
    <svg ref={ref} className="knob" viewBox="0 0 60 64" aria-hidden="true">
      <defs>
        <radialGradient id="knob-base" cx="45%" cy="35%" r="70%">
          <stop offset="0" stopColor="#676873" />
          <stop offset=".55" stopColor="#34343f" />
          <stop offset="1" stopColor="#1b1a20" />
        </radialGradient>
        <linearGradient id="knob-stem" x1="0" x2="1">
          <stop offset="0" stopColor="#dbe0ec" />
          <stop offset=".5" stopColor="#adafb7" />
          <stop offset="1" stopColor="#464756" />
        </linearGradient>
        <radialGradient id="knob-cap" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#e4e9f4" />
          <stop offset=".45" stopColor="#adafb7" />
          <stop offset="1" stopColor="#464756" />
        </radialGradient>
      </defs>
      {/* rubber base */}
      <ellipse cx="32" cy="50" rx="26" ry="11" fill="url(#knob-base)" />
      <ellipse cx="32" cy="47" rx="13" ry="5" fill="#1b1a20" opacity=".7" />
      {/* stick + cap, pivoting from the base */}
      <g className="knob-stick">
        <path d="M29 47 L28.5 22 L35.5 22 L35 47 Z" fill="url(#knob-stem)" />
        <ellipse cx="32" cy="18" rx="16" ry="9" fill="url(#knob-cap)" />
        <ellipse cx="32" cy="16.5" rx="9" ry="4.5" fill="none" stroke="#676873" strokeWidth="2" />
        <ellipse cx="29" cy="14.5" rx="4" ry="1.8" fill="#e4e9f4" />
      </g>
    </svg>
  )
}
