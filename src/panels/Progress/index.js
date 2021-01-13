import React, {useState, useEffect} from 'react'

import {CurrentProgressPlot} from '../../plots/CurrentProgress'
import {HistoricProgressPlot} from '../../plots/HistoricProgress'

import '../Panels.scss'
import './Progress.scss'

export const ProgressPanel = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/summary.json')
    .then(resp => resp.json())
    .then(setData)
  }, [setData])

  return (
    <div className="panel">
      <div className="panel-headline">
        CBFD Decomp Current Progress:
      </div>
      <CurrentProgressPlot data={data} />

      <div className="panel-headline">
        Historic Progress:
      </div>
      <HistoricProgressPlot data={data} />
    </div>
  )
}
