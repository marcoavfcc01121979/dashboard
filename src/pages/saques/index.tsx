import { Grid, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import StatsCard from '../../components/cards/stats'
import { mockedStatsCard } from '../../components/cards/stats/mock'
import Layout from '../../layout/sidebar'
import Chat from './chat'

export default function Saques() {
  return (
    <Layout>
      {/** chat e solicitações de saques*/}
      <Grid mt="5" gap="5" templateColumns={{ md: '1fr' }}>
        <Chat />
      </Grid>
    </Layout>
  )
}
