import dynamic from 'next/dynamic'
import React from 'react'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SpreadGraph = () => {
  return (
    <ReactApexChart
      options={{
        chart: {
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#6531FF', '#4BDB4B'],
        fill: {
          colors: ['#6531FF', '#4BDB4B'],
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      }}
      series={[
        {
          name: 'Spread 1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Spread 2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ]}
      type="area"
      height={'400'}
    />
  )
}

export default SpreadGraph
