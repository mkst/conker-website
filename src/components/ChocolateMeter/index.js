import React from 'react'

import {GameNumber} from '../GameNumber'

import './ChocolateMeter.scss'

// the jagged edge left by a bite, as a clip-path through the piece at `f` (0..1)
const bite = f => {
  const x = (d) => `${Math.min(Math.max(f * 100 + d, 6), 100)}%`
  return `polygon(0 0, ${x(4)} 0, ${x(-6)} 30%, ${x(5)} 55%, ${x(-4)} 78%, ${x(3)} 100%, 0 100%)`
}

// Conker's health is a slab of chocolate - so is ours. Eaten pieces leave the
// tray behind; the piece being eaten has a bite out of it.
export const ChocolateMeter = ({percent, pieces = 10, label, detail}) => {
  const perPiece = 100 / pieces

  return (
    <div className="chocolate-meter">
      <div className="hud-label">{label}</div>
      <div className="chocolate-meter-row">
        <div
          className="chocolate-slab-wrap"
          role="meter"
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Number(percent.toFixed(2))}>
          <div className="chocolate-slab">
            {Array.from({length: pieces}, (_, i) => {
              const fill = Math.min(Math.max((percent - i * perPiece) / perPiece, 0), 1)
              const state = fill === 1 ? ' whole' : fill > 0 ? ' bitten' : ''
              return (
                <span
                  key={i}
                  className={'chocolate-piece' + state}
                  style={{'--i': i, clipPath: state === ' bitten' ? bite(fill) : undefined}} />
              )
            })}
          </div>
        </div>
        <div className="hud-number">
          <GameNumber text={percent.toFixed(2)} />
          <small><GameNumber text="%" /></small>
        </div>
      </div>
      {detail && <div className="hud-detail">{detail}</div>}
    </div>
  )
}
