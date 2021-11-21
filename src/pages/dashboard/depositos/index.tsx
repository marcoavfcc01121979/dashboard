import { Box, Heading, HStack } from '@chakra-ui/layout'
import { Stat, StatArrow, StatHelpText } from '@chakra-ui/stat'
import React from 'react'
import DepositosGraph from '../../../components/graphs/depositos'
import Indicador from './indicador'

const Depositos = () => {
  return (
    <Box p={'4'} bg={'gray.50'} shadow={'xl'} rounded={'1rem'}>
      <DepositosGraph />

      <Box ml="2">
        <Heading fontWeight="bold" color="#252F40" fontSize="xl" mb="1">
          Depósitos
        </Heading>

        <Stat>
          <StatHelpText>
            <StatArrow type="increase" />
            (+23%) visão mensal
          </StatHelpText>
        </Stat>

        <HStack width="100%" mt="8">
          <Indicador title="Clientes" value="3,6k" selectedColor="#FF0080" />
          <Indicador title="Receita" value="$2m" selectedColor="#2152FF" />
          <Indicador title="Depósitos" value="$772" selectedColor="#F88436" />
          <Indicador title="Saques" value="$82" selectedColor="#EA0606" />
        </HStack>
      </Box>
    </Box>
  )
}

export default Depositos
