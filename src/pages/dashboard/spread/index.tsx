import { Heading, Stat, StatArrow, StatHelpText } from '@chakra-ui/react'
import React from 'react'
import Box from '../../../components/box'
import SpreadGraph from '../../../components/graphs/spread'

const Spread = () => {
  return (
    <Box>
      <Heading fontWeight="bold" color="#252F40" fontSize="xl">
        Spread
      </Heading>

      <Stat mt="3">
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
