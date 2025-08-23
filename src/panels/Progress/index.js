import React, { useState, useEffect } from 'react'

import { CurrentProgressPlot } from '../../plots/CurrentProgress'
import { HistoricProgressPlot } from '../../plots/HistoricProgress'

import '../Panels.scss'
import './Progress.scss'

export const ProgressPanel = () => {
  const [historicData, setHistoricData] = useState(null)
  const [latestData, setLatestData] = useState(null)

  const version = 'us'
  const section = 'game'

  useEffect(() => {
    fetch('/commits.json')
    .then(resp => resp.json())
    .then(setHistoricData)
  }, [setHistoricData])

  useEffect(() => {
    fetch('/latest.json')
    .then(resp => resp.json())
    .then(setLatestData)
  }, [setLatestData])

  return (
    <div className="panel">
      <div className="panel-headline">
        CBFD Decomp Current Progress:
      </div>
      <CurrentProgressPlot data={latestData} version={version} section={section} />

      <div className="panel-headline">
        Historic Progress:
      </div>
      <HistoricProgressPlot data={historicData} version={version} section={section} />
    </div>
  )
}
