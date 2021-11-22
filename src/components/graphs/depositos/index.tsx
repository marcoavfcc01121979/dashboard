import { Box } from '@chakra-ui/layout'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Depositos = () => {
  return (
    <Box bg="#232743" p="1" mb="5" rounded="2xl">
      <ReactApexChart
        options={{
          theme: {
            mode: 'dark',
          },
          chart: {
            type: 'bar',
            background: '#232743',
          },
          plotOptions: {
            bar: {
              borderRadius: 7,
              columnWidth: '20',
              dataLabels: {
                position: 'bottom', // top, center, bottom,
              },
            },
          },
          fill: {
            colors: ['#fff'],
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            tooltip: {
              enabled: false,
            },
          },
          title: {
            floating: false,
          },
        }}
        series={[
          {
            data: [
              '1000',
              '700',
              '800',
              '550',
              '600',
              '400',
              '200',
              '50',
              '100',
            ],
          },
        ]}
        type="bar"
        height={250}
      />
    </Box>
  )
}

export default Depositos
