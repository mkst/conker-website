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
  // plotly measures legend text on first draw - wait for our fonts or labels get clipped
  const [fontsReady, setFontsReady] = useState(!document.fonts)

  useEffect(() => {
    if (document.fonts) {
      document.fonts.load('14px "Lithos Black Bold"')
        .catch(() => {})
        .then(() => setFontsReady(true))
    }
  }, [])

  useEffect(() => {
    if ((data === null) || (data == null)) {
      return null
    }
    if (Object.keys(data).indexOf("commits") === -1) {
      return null
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
    setPlotData({
      x: x,
      y_bytes: y_bytes,
      y_bytes_text: y_bytes_text,
      y_functions: y_functions,
      y_functions_text: y_functions_text,
    })
  }, [data, version, section])

  useEffect(() => {
    if (plotData === null || !fontsReady) {
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
          // colours from the hive texture
          fillcolor: 'rgba(254, 192, 8, 0.55)',
          hovertemplate: '%{text}<extra>bytes</extra>',
          line: {
            color: '#5b3b08',
            width: 3,
            shape: 'hv',
          },
        },{
          x: plotData.x,
          y: plotData.y_functions,
          text: plotData.y_functions_text,
          name: 'functions',
          mode: 'lines',
          fill: 'tozeroy',
          fillcolor: 'rgba(107, 53, 20, 0.45)',
          hovertemplate: '%{text}<extra>functions</extra>',
          visible: 'legendonly',
          line: {
            color: '#6b3514',
            width: 3,
            shape: 'hv',
          },
        },
      ]}
      layout={{
        font: {
          family: 'Lithos Black Bold',
          color: '#2b1606'
        },
        margin: {'t': 10, 'b': 40, 'l': 56, 'r': 16},
        showlegend: true,
        legend: {orientation: 'h', x: 0, y: -0.15, font: {size: 14}},
        hoverlabel: {
          bgcolor: '#fffaf0',
          bordercolor: '#2b1606',
          font: {family: 'Lithos Black Bold', color: '#2b1606'},
        },
        xaxis: {
          showgrid: false,
          linecolor: '#2b1606',
          linewidth: 3,
        },
        yaxis: {
          title: 'Percent complete',
          ticksuffix: '%',
          rangemode: 'tozero',
          gridcolor: 'rgba(43, 22, 6, 0.12)',
          linecolor: '#2b1606',
          linewidth: 3,
          zeroline: false,
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
      }}
      config={{displayModeBar: false, responsive: true}}
      style={{width: '100%', height: '100%'}}
    />)
  }, [plotData, fontsReady])

  return <div className='historic-progress'>
    {plot}
  </div>
}
