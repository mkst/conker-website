import React from 'react'

import {GameNumber} from '../GameNumber'

import './CashCounter.scss'

const fmt = n => n.toLocaleString('en-US')

// the cash counter from the HUD: the game's green $ in front of the digits
export const CashCounter = ({value, total, label}) => {
  return (
    <div className="cash-counter">
      <div className="hud-label">{label}</div>
      <span className="hud-number">
        <GameNumber text={`$${fmt(value)}`} />
        <span className="cash-total"> <GameNumber text={`/ ${fmt(total)}`} /></span>
      </span>
    </div>
  )
}
