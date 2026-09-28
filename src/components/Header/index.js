import React from 'react'

import './Header.scss'

// fixed "hand-placed" [rotation, drop] per letter, so they jostle like the box art
const JOSTLE = [
  [-4, -0.02], [3, 0.04], [-2, -0.03], [5, 0.02], [-3, 0.05],
  [2, -0.04], [-5, 0.01], [4, -0.02], [-2, 0.04], [3, -0.01],
]

// bronze 3D extrusion: stacked text-shadows stepping down-right and darkening
const extrusion = (depth, from, to) => {
  const [a, b] = [from, to].map(hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)))
  const layers = []
  for (let i = 1; i <= depth; i++) {
    const t = i / depth
    const [r, g, bl] = a.map((c, k) => Math.round(c + (b[k] - c) * t))
    layers.push(`${(i * 0.007).toFixed(3)}em ${(i * 0.01).toFixed(3)}em 0 rgb(${r},${g},${bl})`)
  }
  layers.push(`${(depth * 0.007 + 0.015).toFixed(3)}em ${(depth * 0.01 + 0.02).toFixed(3)}em 0 #1c0d02`)
  return layers.join(',')
}

const EXTRUSION = extrusion(12, '#d98a2a', '#4a1f02')

const Row = ({text, start}) => (
  <span className="logo-row">
    {text.split('').map((letter, i) => {
      const [r, dy] = JOSTLE[(start + i) % JOSTLE.length]
      return (
        <span
          key={i}
          className="logo-letter"
          data-letter={letter}
          style={{'--i': start + i, '--r': `${r}deg`, '--dy': `${dy}em`, textShadow: EXTRUSION}}>
          {letter}
        </span>
      )
    })}
  </span>
)

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo" aria-label="Conker’s Bad Fur Day Decomp">
        <span className="logo-conkers" aria-hidden="true">Conker’s</span>
        <span className="logo-bfd" aria-hidden="true">
          <Row text="BAD" start={0} />
          <Row text="FUR" start={3} />
          <Row text="DAY." start={6} />
        </span>
        <span className="logo-stamp" aria-hidden="true">Decomp</span>
      </h1>
      <p className="header-tagline speech-bubble">
        Decompiling the N64 classic back into C, one function at a time!
      </p>
    </header>
  )
}
