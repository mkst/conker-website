import React from 'react'

import {Lightbulb} from '../Lightbulb'
import {Knob} from '../Knob'

import './MenuItem.scss'

export const MenuItem = ({chapter, item, active, onClick}) => {

  const activeClass = active ? 'active' : 'has-lightbulb'

  return (
    <button
      type="button"
      className={"menu-item pause-option " + activeClass}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}>
      {active ? <Knob /> : <Lightbulb />}
      <span className="pause-option-chapter">Chapter {chapter}</span>
      <span className="pill">{item}</span>
    </button>
  )
}
