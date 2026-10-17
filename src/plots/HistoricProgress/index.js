import React, {useState, useEffect} from 'react'
import Plot from 'react-plotly.js'

import './HistoricProgress.scss'

export const HistoricProgressPlot = ({
  data,
  version,
  section
}) => {

  const [plotData, setPlotData] = useState(null)
  const [plot, setPlot] = useState(null)

  useEffect(() => {
    if ((data === null) || (data == null)) {
      return;
    }
    console.log(data)
    if (Object.keys(data).indexOf("commits") === -1) {
      return;
    }

    const x = []
    const y_bytes = []
    const y_bytes_text =[]
    const y_functions = []
    const y_functions_text = []

    for(var i = 0; i < data.commits.length; i++) {
      const commit = data.commits[i]
      const date = commit.date
      const d = new Date(0);
      d.setUTCSeconds(date);
      // const hash = entry['hash'] // what to do with this?
      const progress = commit.progress
      for (var j = 0; j < progress.length; j++) {
        const entry = progress[j]
        if (entry.version === version) {
          for (var k = 0; k < entry.sections.length; k++) {
            if (entry.sections[k].section == section) {
              const c = entry.sections[k].c
              const total = entry.sections[k].total
              const c_functions = entry.sections[k].c_functions
              const total_functions = entry.sections[k].total_functions
              const percent = entry.sections[k].percent
              // fixme later
              x.push(d)
              y_bytes.push(percent)
              y_bytes_text.push(percent.toFixed(2) + "%")
              y_functions.push(c_functions / total_functions * 100)
              y_functions_text.push(c_functions + '/' + total_functions)
            }
          }
        }
      }
    }
    console.log(x, y_bytes)
    setPlotData({
      x: x,
      y_bytes: y_bytes,
      y_bytes_text: y_bytes_text,
      y_functions: y_functions,
      y_functions_text: y_functions_text,
    })
  }, [data, version, section])

  useEffect(() => {
    if (plotData === null) {
      return;
    }
    setPlot(<Plot
      data={[{
          x: plotData.x,
          y: plotData.y_bytes,
          text: plotData.y_bytes_text,
          name: 'bytes',
          mode: 'lines',
          fill: 'tozeroy',
          marker: {
            color: '#382506',
          },
        },{
          x: plotData.x,
          y: plotData.y_functions,
          text: plotData.y_functions_text,
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
    />)
  }, [plotData])

  return <div className='historic-progress'>
    {plot}
  </div>
}
