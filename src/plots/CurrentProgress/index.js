import React, {useState, useEffect} from 'react'
import Plot from 'react-plotly.js'

import './CurrentProgress.scss'

export const CurrentProgressPlot = ({
  data,
  version,
  section
}) => {

  const [plotData, setPlotData] = useState(null)
  const [plot, setPlot] = useState(null)

  useEffect(() => {
    if ((data === null) || (data == null)) {
      return null
    }
    if (Object.keys(data).indexOf("progress") === -1) {
      return null
    }
    for (var i = 0; i < data.progress.length; i++) {
        if (data.progress[i].version === version) {
          const sections = data.progress[i].sections

          for (var j = 0; j < sections.length; j++) {
            if (sections[j].section === section) {
              setPlotData({
                c: sections[j].c,
                c_functions: sections[j].c_functions,
                percent: sections[j].percent,
                section: sections[j].section,
                total: sections[j].total,
                total_functions: sections[j].total_functions
              })
              break
            }
          }
        }
    }
  }, [data, version, section])

  useEffect(() => {
    if (plotData === null) {
      return;
    }
    setPlot(<Plot
      data={[{
        title: plotData.percent.toFixed(2) + '<br>%',
        values: [plotData.c, plotData.total - plotData.c],
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
        title: plotData.c_functions + '<br>of<br>' + plotData.total_functions,
        values: [plotData.c_functions, plotData.total_functions - plotData.c_functions],
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
    />)
  }, [plotData])

  return <div className="current-progress">
    {plot}
  </div>
}
