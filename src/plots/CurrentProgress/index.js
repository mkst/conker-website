import React from 'react'
import Plot from 'react-plotly.js'

import './CurrentProgress.scss'

export const CurrentProgressPlot = ({
  data
}) => {

  if ((data === null) || (data == null)) {
    return null
  }

  if (Object.keys(data).indexOf("summary") === -1) {
    return null
  }

  const lastData = data.summary[data.summary.length - 1].summary[0]

  const c_size = lastData["c"]
  const total = lastData["total"]

  const c_count = lastData["c_functions"]
  const total_functions = lastData["total_functions"]

  const percent = c_size / total * 100

  return <div className="current-progress">
    <Plot
      data={[{
        title: percent.toFixed(2) + '<br>%',
        values: [c_size, total - c_size],
        labels: ['C', 'ASM'],
        type: 'pie',
        hole: 0.66,
        textinfo: 'none',
        marker: {
          colors: ['#ffde08', 'rgba(0,0,0,0.1)']
        },
        domain: {
          row: 0,
          column: 0
        },
        direction: 'clockwise',
        sort: false,
        name: 'bytes'
      },
      {
        title: c_count + '<br>of<br>' + total_functions,
        values: [c_count, total_functions - c_count],
        labels: ['C', 'ASM'],
        type: 'pie',
        hole: 0.66,
        textinfo: 'none',
        marker: {
          colors: ['#ffde08', 'rgba(0,0,0,0.1)']
        },
        domain: {
          row: 0,
          column: 1
        },
        direction: 'clockwise',
        sort: false,
        name: 'functions'
      }]}
      layout={{
        font: {
          family : 'Lithos Black Bold',
          size: 20,
          color: '#111'
        },
        grid: {rows: 1, columns: 2},
        margin: {'t': 10, 'b': '15', 'l': 0, 'r': 0},
        showlegend: false,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        hovermode: false,
      }}
      config={{displayModeBar: false, responsive: true}}
      style={{width: "100%", height: "100%"}}
    />
  </div>
}
