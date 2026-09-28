import React from 'react'

import {MenuItem} from '../MenuItem'
import {GitHub} from '../GitHub'

import './Menu.scss'

export const Menu = ({
  activePanelHook
}) => {

  const [activePanel, setActivePanel] = activePanelHook

  return (
    <nav className='menu' aria-label='Chapters'>
      <MenuItem chapter={1} item={'progress'} active={activePanel === 'progress'} onClick={() =>setActivePanel('progress')} />
      <MenuItem chapter={2} item={'faq'} active={activePanel === 'faq'} onClick={() =>setActivePanel('faq')} />
      <GitHub chapter={3} url={"https://github.com/mkst/conker"}/>
    </nav>
  )
}
