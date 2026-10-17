import React, {useState} from 'react'

import './Censored.scss'

const SYMBOLS = '#@%$&!*'

// a censor-beep, synthesised on click (never played automatically)
const bleep = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  if (!AudioContext) {
    return
  }
  const ctx = new AudioContext()
  const tone = ctx.createOscillator()
  const volume = ctx.createGain()
  tone.frequency.value = 1000
  volume.gain.setValueAtTime(0.12, ctx.currentTime)
  volume.gain.setValueAtTime(0, ctx.currentTime + 0.35)
  tone.connect(volume).connect(ctx.destination)
  tone.start()
  tone.stop(ctx.currentTime + 0.4)
  tone.onended = () => ctx.close()
}

// like the game's censored subtitles: the swear shows as symbols. Hover or focus
// to let the real word slip through; click for the bleep.
export const Censored = ({children}) => {
  const word = String(children)
  const grawlix = word.split('').map((_, i) => SYMBOLS[i % SYMBOLS.length]).join('')
  const [bleeping, setBleeping] = useState(false)

  const onClick = () => {
    bleep()
    setBleeping(true)
    setTimeout(() => setBleeping(false), 400)
  }

  return (
    <button
      type="button"
      className={'censored' + (bleeping ? ' bleeping' : '')}
      aria-label={`${word} (censored, click to bleep)`}
      onClick={onClick}>
      <span className="censored-symbols" aria-hidden="true">{grawlix}</span>
      <span className="censored-word" aria-hidden="true">{word}</span>
    </button>
  )
}
