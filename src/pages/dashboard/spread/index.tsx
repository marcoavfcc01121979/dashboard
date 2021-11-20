import { Box, Heading, Stat, StatArrow, StatHelpText } from '@chakra-ui/react'
import React from 'react'
import SpreadGraph from '../../../components/graphs/spread'

const Spread = () => {
  return (
    <Box p={'3'} bg={'gray.50'} shadow={'xl'} rounded={'1rem'}>
      <Heading fontWeight="bold" color="#252F40" fontSize="xl">
        Spread
      </Heading>
      <Stat>
        <StatHelpText>
          <StatArrow type="increase" />
          4% a mais em Dezembro
        </StatHelpText>
      </Stat>

      <SpreadGraph />
    </Box>
  )
}

export default Spread
