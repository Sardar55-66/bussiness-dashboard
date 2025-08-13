import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import DataTable from './DataTable'
import { generateDailyData } from '../data/tableData'
import './Dashboard.css'

function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState(null)
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(generateDailyData())
  }, [])

  const handleRowSelect = (metric) => {
    setSelectedMetric(metric)
  }

  const handleRefreshData = () => {
    setTableData(generateDailyData())
    setSelectedMetric(null)
  }

  const getSelectedRowData = () => {
    if (!selectedMetric) return null
    return tableData.find(row => row.metric === selectedMetric)
  }

  const selectedRowData = getSelectedRowData()

  return (
    <div className="container">
      <div className="dashboard">
        <div className="header-section">
          <div className="table-header">
            <div className="header-cell">Показатель</div>
            <div className="header-cell">Текущий день</div>
            <div className="header-cell">Вчера</div>
            <div className="header-cell">Этот день недели</div>
          </div>
          
          {selectedRowData && (
            <div className="selected-row-display">
              <div className="selected-indicator">{selectedRowData.indicator}</div>
              <div className="selected-current-day">{selectedRowData.currentDay}</div>
              <div className="selected-yesterday">
                <span className="selected-value">{selectedRowData.yesterday.value}</span>
                <span className={`selected-change ${selectedRowData.yesterday.changeType}`}>
                  {selectedRowData.yesterday.change}
                </span>
              </div>
              <div className="selected-week-day">{selectedRowData.thisDayOfWeek}</div>
            </div>
          )}
        </div>

        <div className="chart-container">
          {selectedMetric ? (
            <Chart metric={selectedMetric} />
          ) : (
            <div className="chart-placeholder">
              Выберите строку в таблице для отображения графика
            </div>
          )}
        </div>
        
        <div className="table-container">
          <div className="table-header-controls">
            <button className="refresh-button" onClick={handleRefreshData}>
              Обновить данные
            </button>
          </div>
          <DataTable 
            tableData={tableData}
            onRowSelect={handleRowSelect}
            selectedMetric={selectedMetric}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
