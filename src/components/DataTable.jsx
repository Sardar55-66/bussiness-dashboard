import React from 'react'
import { tableData } from '../data/tableData'
import './DataTable.css'

function DataTable({ onRowSelect, selectedMetric }) {
  const handleRowClick = (metric) => {
    onRowSelect(metric)
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Показатель</th>
          <th>Текущий день</th>
          <th>Вчера</th>
          <th>Этот день недели</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr
            key={row.metric}
            className={`table-row ${selectedMetric === row.metric ? 'selected' : ''}`}
            onClick={() => handleRowClick(row.metric)}
          >
            <td>{row.indicator}</td>
            <td className="current-day">{row.currentDay}</td>
            <td className="yesterday">
              <span className="value">{row.yesterday.value}</span>
              <span className={`change ${row.yesterday.changeType}`}>
                {row.yesterday.change}
              </span>
            </td>
            <td>{row.thisDayOfWeek}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
