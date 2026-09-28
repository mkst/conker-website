import React from 'react'

import conker from '../../assets/images/characters/conker.png'
import birdy from '../../assets/images/characters/birdy.png'

import './Portrait.scss'

const CAST = {conker, birdy}

// a character beside their speech bubble, as in the game's cutscenes
export const Portrait = ({who}) => {
  return (
    <figure className={'portrait portrait-' + who}>
      <img src={CAST[who]} alt="" />
    </figure>
  )
}
