import { Grid, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import StatsCard from '../../components/cards/stats'
import { mockedStatsCard } from '../../components/cards/stats/mock'
import Layout from '../../layout/sidebar'
import Chat from './chat'
import Depositos from './depositos'
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
      <Grid mt="5" gap="5" templateColumns={{ md: '1fr', xl: '1.3fr 2fr' }}>
        <Depositos />
        <Spread />
      </Grid>

      {/** chat e solicitações de saques*/}
      <Grid mt="5" gap="5" templateColumns={{ md: '1fr', xl: '2fr .9fr' }}>
        <Chat />
        <Chat />
      </Grid>
    </Layout>
  )
}
