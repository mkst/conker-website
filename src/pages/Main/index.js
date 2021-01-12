import React, {useState} from 'react'

import "./Main.scss"

import {RenderIf} from '../../components/RenderIf'
import {Menu} from '../../components/Menu'

import {InfoPanel} from '../../panels/Info'
import {FaqPanel} from '../../panels/Faq'
import {ProgressPanel} from '../../panels/Progress'

export const MainPage = () => {

  const [activePanel, setActivePanel] = useState('progress')

  return (
    <div className='main'>
      <Menu activePanelHook={[activePanel, setActivePanel] } />

      <RenderIf condition={activePanel === 'progress'}>
        <ProgressPanel />
      </RenderIf>
      <RenderIf condition={activePanel === 'info'}>
        <InfoPanel />
      </RenderIf>
      <RenderIf condition={activePanel === 'faq'}>
        <FaqPanel />
      </RenderIf>

    </div>
  )
}
