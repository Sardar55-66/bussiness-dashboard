import React, { useState } from 'react'
import Chart from './Chart'
import DataTable from './DataTable'
import { chartData } from '../data/chartData'
import './Dashboard.css'

function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState(null)

  const handleRowSelect = (metric) => {
    setSelectedMetric(metric)
  }

  return (
    <div className="container">
      <h1>Бизнес-дашборд</h1>
      
      <div className="dashboard">
        {/* График */}
        <div className="chart-container">
          {selectedMetric ? (
            <Chart metric={selectedMetric} />
          ) : (
            <div className="chart-placeholder">
              Выберите строку в таблице для отображения графика
            </div>
          )}
        </div>
        
        {/* Таблица */}
        <div className="table-container">
          <DataTable 
            onRowSelect={handleRowSelect}
            selectedMetric={selectedMetric}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
