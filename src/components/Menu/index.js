import React from 'react'

import {MenuItem} from '../MenuItem'
import {GitHub} from '../GitHub'

import './Menu.scss'

export const Menu = ({
  activePanelHook
}) => {

  const [activePanel, setActivePanel] = activePanelHook

  return (
    <div className='menu'>
      <div className='menu-items-left'>
        <MenuItem item={'progress'} active={activePanel === 'progress'} onClick={() =>setActivePanel('progress')} />
        <MenuItem item={'faq'} active={activePanel === 'faq'} onClick={() =>setActivePanel('faq')} />
      </div>
      <div className='menu-items-right'>
        <GitHub url={"https://github.com/mkst/conker"}/>
      </div>
    </div>
  )
}
