import React from 'react'

import {ChocolateMeter} from '../../components/ChocolateMeter'
import {CashCounter} from '../../components/CashCounter'

import './CurrentProgress.scss'

const SECTION_NAMES = {
  init: 'Init',
  game: 'Game',
  debugger: 'Debugger',
  all: 'Whole ROM',
}

const sectionName = s => SECTION_NAMES[s] || s.charAt(0).toUpperCase() + s.slice(1)

const fmt = n => n.toLocaleString('en-US')

export const CurrentProgressPlot = ({
  data,
  version,
  section
}) => {

  const sections = data?.progress?.find(p => p.version === version)?.sections
  const current = sections?.find(s => s.section === section)

  if (!current) {
    return <div className="current-progress loading">Loading the good stuff&hellip;</div>
  }

  return (
    <div className="current-progress">
      <div className="hud">
        <ChocolateMeter
          percent={current.percent}
          label="Bytes decompiled"
          detail={`${fmt(current.c)} of ${fmt(current.total)} bytes in C (${sectionName(section).toLowerCase()} section)`} />
        <CashCounter
          value={current.c_functions}
          total={current.total_functions}
          label="Functions matched" />
      </div>

      <h3 className="chapters-title">Progress by section</h3>
      <ul className="chapters">
        {sections.map(s => (
          <li key={s.section} className={'chapter' + (s.section === 'all' ? ' chapter-total' : '')}>
            <span className="chapter-name">{sectionName(s.section)}</span>
            <span className="chapter-bar">
              <span className="chapter-bar-fill" style={{width: `${s.percent}%`}} />
            </span>
            <span className="chapter-percent">{s.percent.toFixed(1)}%</span>
            <span className="chapter-funcs">{fmt(s.c_functions)} / {fmt(s.total_functions)} funcs</span>
          </li>
        ))}
      </ul>

      {data.date && (
        <p className="panel-subtle last-updated">
          Last updated {new Date(data.date * 1000).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
          {data.hash && data.hash !== 'foo' && <>
            {' · '}
            <a href={`https://github.com/mkst/conker/commit/${data.hash}`} target="_blank" rel="noreferrer">
              {data.hash.slice(0, 7)}
            </a>
          </>}
        </p>
      )}
    </div>
  )
}
