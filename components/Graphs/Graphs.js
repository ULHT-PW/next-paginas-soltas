import React from 'react'
import BarGraph from './BarGraph'
import LineGraph from './LineGraph'

export default function Graphs() {
  return (
    <div>
      <h1>Gráficos</h1>
      <LineGraph />
      <br></br>
      <BarGraph />
    </div>
  )
}
