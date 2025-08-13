import React from 'react'
import './DataTable.css'

function DataTable({ tableData, onRowSelect, selectedMetric }) {
  const handleRowClick = (metric) => {
    onRowSelect(metric)
  }

  const filteredTableData = tableData.filter(row => row.metric !== selectedMetric)

  return (
    <table className="data-table">
      <tbody>
        {filteredTableData.map((row) => (
          <tr
            key={row.metric}
            className="table-row"
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
