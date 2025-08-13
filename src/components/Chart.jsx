import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { chartData } from '../data/chartData'

function Chart({ metric }) {
  const data = chartData[metric]
  
  if (!data) return null

  const options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      style: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      },
      spacing: [20, 20, 20, 20]
    },
    title: {
      text: data.title,
      style: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#2c3e50'
      }
    },
    subtitle: {
      text: 'Динамика по часам',
      style: {
        fontSize: '14px',
        color: '#6c757d'
      }
    },
    xAxis: {
      categories: data.categories,
      labels: {
        style: {
          fontSize: '12px',
          color: '#495057'
        }
      },
      lineColor: '#dee2e6',
      tickColor: '#dee2e6'
    },
    yAxis: {
      title: {
        text: 'Значение',
        style: {
          fontSize: '14px',
          color: '#495057'
        }
      },
      labels: {
        style: {
          fontSize: '12px',
          color: '#495057'
        },
        formatter: function() {
          if (metric.includes('count')) {
            return this.value
          } else {
            return this.value.toLocaleString('ru-RU')
          }
        }
      },
      gridLineColor: '#e9ecef'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 4,
          symbol: 'circle',
          fillColor: data.color,
          lineColor: data.color,
          lineWidth: 2
        },
        lineWidth: 3,
        color: data.color
      },
      area: {
        fillOpacity: 0.1,
        fillColor: data.color
      }
    },
    series: [{
      name: data.title,
      data: data.data,
      color: data.color
    }],
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#dee2e6',
      borderRadius: 8,
      shadow: true,
      style: {
        fontSize: '13px'
      },
      formatter: function() {
        if (metric.includes('count')) {
          return `<b>${this.series.name}</b><br/>
                  <b>Время:</b> ${this.x}<br/>
                  <b>Значение:</b> ${this.y}`
        } else {
          return `<b>${this.series.name}</b><br/>
                  <b>Время:</b> ${this.x}<br/>
                  <b>Значение:</b> ${this.y.toLocaleString('ru-RU')} руб`
        }
      }
    },
    credits: {
      enabled: false
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 768
        },
        chartOptions: {
          title: {
            style: {
              fontSize: '16px'
            }
          },
          subtitle: {
            style: {
              fontSize: '12px'
            }
          }
        }
      }]
    }
  }

  return (
    <div className="chart-wrapper">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default Chart
