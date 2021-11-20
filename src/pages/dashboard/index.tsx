import { Grid, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import StatsCard from '../../components/cards/stats'
import { mockedStatsCard } from '../../components/cards/stats/mock'
import Layout from '../../layout/sidebar'
import Spread from './spread'

export default function Dashboard() {
  return (
    <Layout>
      {/** Indicadores */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {mockedStatsCard.map((x, index) => (
          <StatsCard
            key={index}
            icon={x.icon}
            type={x.type}
            title={x.title}
            value={x.value}
            valuePercentage={x.valuePercentage}
          />
        ))}
      </SimpleGrid>

      {/** gráficos */}

      <Grid
        mt="5"
        columns={{ base: 1, sm: 2 }}
        gap="5"
        templateColumns="1fr 2fr"
      >
        <Spread />
        <Spread />
      </Grid>

      {/** chat e solicitções de saques*/}
    </Layout>
  )
}
