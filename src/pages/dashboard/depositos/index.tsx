import { Heading, SimpleGrid } from '@chakra-ui/layout'
import { Stat, StatArrow, StatHelpText } from '@chakra-ui/stat'
import React from 'react'
import Box from '../../../components/box'
import DepositosGraph from '../../../components/graphs/depositos'
import Indicador from './indicador'

const Depositos = () => {
  return (
    <Box>
      <Heading fontWeight="bold" color="#252F40" fontSize="xl" mb="3">
        Lucros
      </Heading>

      <DepositosGraph />

      <Box shadow="inner">
        <Heading fontWeight="bold" color="#252F40" fontSize="xl" mb="1">
          Depósitos
        </Heading>

        <Stat>
          <StatHelpText>
            <StatArrow type="increase" />
            (+23%) visão mensal
          </StatHelpText>
        </Stat>

        <SimpleGrid
          mt="5"
          columns={{ sm: 2, md: 3, xl: 4 }}
          spacing={{ base: 5 }}
          justifyContent="space-between"
        >
          <Indicador title="Clientes" value="3,6k" selectedColor="#FF0080" />
          <Indicador title="Receita" value="$2m" selectedColor="#2152FF" />
          <Indicador title="Depósitos" value="$772" selectedColor="#F88436" />
          <Indicador title="Saques" value="$82" selectedColor="#EA0606" />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Depositos
