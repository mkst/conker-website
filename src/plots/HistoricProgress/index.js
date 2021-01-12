import React from 'react'
import Plot from 'react-plotly.js'

import './HistoricProgress.scss'

export const HistoricProgressPlot = ({
  data
}) => {

  if ((data === null) || (data == null)) {
    return null
  }

  if (Object.keys(data).indexOf('summary') === -1) {
    return null
  }

  const x = []
  const y_bytes = []
  const y_bytes_text =[]
  const y_functions = []
  const y_functions_text = []

  for(var i = 0; i < data.summary.length; i++) {
    const entry = data.summary[i]
    const date = entry['date']
    const d = new Date(0);
    d.setUTCSeconds(date);
    // const hash = entry['hash'] // what to do with this?
    const summary = entry['summary']
    for (var j = 0; j < summary.length; j++) {
      const summary_entry = summary[j]
      // const version = summary_entry['version']
      const c = summary_entry['c']
      const total = summary_entry['total']
      const c_functions = summary_entry['c_functions']
      const total_functions = summary_entry['total_functions']
      // fixme later
      x.push(d)
      const pct = c / total * 100
      y_bytes.push(pct)
      y_bytes_text.push(pct.toFixed(2) + "%")
      y_functions.push(c_functions / total_functions * 100)
      y_functions_text.push(c_functions + '/' + total_functions)
    }
  }

  return <div className='historic-progress'>
    <Plot
      data={[{
          x: x,
          y: y_bytes,
          text: y_bytes_text,
          name: 'bytes',
          mode: 'lines',
          fill: 'tozeroy',
          marker: {
            color: '#382506',
          },
        },{
          x: x,
          y: y_functions,
          text: y_functions_text,
          name: 'functions',
          mode: 'lines',
          fill: 'tozeroy',
          visible: 'legendonly',
          marker: {
            color: '#6a4108',
          },
        },
      ]}
      layout={{
        font: {
          family: 'Lithos Black Bold',
          color: '#111'
        },
        margin: {'t': 20, 'b': 40, 'l': 40, 'r': 40},
        showlegend: true,
        legend: {'orientation': 'h'},
        xaxis: {
          showgrid: false,
        },
        yaxis: {
          title: 'Percentage Complete',
          showgrid: false,
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
      }}
      config={{displayModeBar: false, responsive: true}}
      style={{width: '100%', height: '100%'}}
    />
    </div>
}
