import React, {useState} from 'react'

import gregg from '../../assets/images/characters/gregg.png'

import './Gregg.scss'

// Gregg has something new to grumble about every time you bother him
const LINES = [
  <>Oi! Get your <span className="gregg-bleep">#@%$</span> cursor off me!</>,
  <>Don&apos;t mind me. I&apos;m just here for the leftover ASM.</>,
  <>2030, eh? I&apos;ll wait. I&apos;ve got nothing but time.</>,
  <>Every matched function is one less soul for me. Thanks a lot.</>,
]

// Gregg the Grim Reaper, watching from the top corner of the FAQ; hover (or tap)
// and he hops up and says his piece.
export const Gregg = () => {
  const [open, setOpen] = useState(false)
  // starts on the last line, so the first visit shows the first one
  const [line, setLine] = useState(LINES.length - 1)

  const show = () => {
    if (!open) {
      setOpen(true)
      setLine(l => (l + 1) % LINES.length)
    }
  }
  const hide = () => setOpen(false)

  return (
    <button
      type="button"
      className={'gregg' + (open ? ' open' : '')}
      aria-label="Gregg the Grim Reaper"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={() => (open ? hide() : show())}>
      <span className="gregg-peek">
        <img src={gregg} alt="" />
      </span>
      <span className="gregg-bubble speech-bubble" aria-live="polite">
        {open && LINES[line]}
      </span>
    </button>
  )
}
