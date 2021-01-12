import React from 'react'

import {CurrentProgressPlot} from '../../plots/CurrentProgress'
import {HistoricProgressPlot} from '../../plots/HistoricProgress'

import '../Panels.scss'
import './Progress.scss'

export const ProgressPanel = () => {

  const summary = require('../../assets/data/summary.json')

  return (
    <div className="panel">
      <div className="panel-headline">
        CBFD Decomp Current Progress:
      </div>
      <CurrentProgressPlot data={summary} />

      <div className="panel-headline">
        Historic Progress:
      </div>
      <HistoricProgressPlot data={summary} />
    </div>
  )
}
