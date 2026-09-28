import React, {useState, useEffect} from 'react'

import {CurrentProgressPlot} from '../../plots/CurrentProgress'
import {HistoricProgressPlot} from '../../plots/HistoricProgress'

import '../Panels.scss'
import './Progress.scss'

export const ProgressPanel = () => {

  const [historicData, setHistoricData] = useState(null)
  const [latestData, setLatestData] = useState(null)

  const version = 'us'
  const section = 'game'

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/commits.json`)
    .then(resp => resp.json())
    .then(setHistoricData)
  }, [setHistoricData])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/latest.json`)
    .then(resp => resp.json())
    .then(setLatestData)
  }, [setLatestData])

  return (
    <>
      <section className="panel">
        <h2 className="panel-headline">
          Current Progress
        </h2>
        <CurrentProgressPlot data={latestData} version={version} section={section} />
      </section>

      <section className="panel">
        <h2 className="panel-headline">
          The Story So Far
        </h2>
        <HistoricProgressPlot data={historicData} version={version} section={section} />
      </section>
    </>
  )
}
