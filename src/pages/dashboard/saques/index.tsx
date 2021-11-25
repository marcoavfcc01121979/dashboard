import { Heading, Text } from '@chakra-ui/layout'
import { subMinutes } from 'date-fns'
import React from 'react'
import Box from '../../../components/box'
import SaqueItem from '../../../components/item'

const Saques = () => {
  return (
    <Box>
      <Heading fontWeight="bold" color="#252F40" fontSize="xl">
        Solicitações de Saques
      </Heading>

      <Text mt="3" mb="8">
        <Text color="#F32C35" fontWeight="bold" mr="1" display="inline">
          24%
        </Text>
        neste mês
      </Text>

      {Array.from({ length: 10 }).map((_, index: number) => (
        <SaqueItem
          key={`item-saques-${index}`}
          value={`R$ 1${index + 1},00`}
          user={'Creusa'}
          date={subMinutes(new Date(), index + 1)}
        />
      ))}
    </Box>
  )
}

export default Saques
