import {
  Box,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import DefaultIcon from '../../default-icon'

export interface StatsCardProps {
  title: string
  type: 'increase' | 'decrease'
  valuePercentage: number | string
  value: number | string
  icon: IconType
}

const StatsCard = ({
  title,
  type,
  value,
  valuePercentage,
  icon,
}: StatsCardProps) => {
  return (
    <Stat
      px={{ base: 1, md: 2 }}
      py={'3'}
      bg={'gray.50'}
      shadow={'xl'}
      rounded={'1rem'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel color="#67748E">{title}</StatLabel>
          <Flex alignItems="flex-end">
            <StatNumber color="#252F40" mr="1">
              {value}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={type} />
              {valuePercentage}%
            </StatHelpText>
          </Flex>
        </Box>

        <Box my={'auto'} alignContent={'center'}>
          {icon && <DefaultIcon selected icon={icon} />}
        </Box>
      </Flex>
    </Stat>
  )
}

export default StatsCard
