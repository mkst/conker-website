import React from 'react'

import './GameNumber.scss'

// a slight hand-placed tilt per character, like the in-game digit textures
const TILT = [-3, 2, -1, 3, -2, 1, -3, 2]

// renders a number the way the game's HUD does: every digit its own colour, gold-rimmed
export const GameNumber = ({text, className = ''}) => (
  <span className={'game-number ' + className}>
    {String(text).split('').map((ch, i) => {
      const kind = /[0-9]/.test(ch) ? `digit digit-${ch}` : (ch === '$' ? 'digit digit-dollar' : 'digit digit-sym')
      return (
        <span key={i} className={kind} style={{'--tilt': `${TILT[i % TILT.length]}deg`}}>
          {ch}
        </span>
      )
    })}
  </span>
)
