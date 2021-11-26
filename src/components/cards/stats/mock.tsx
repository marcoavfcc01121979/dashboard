import { RiLuggageDepositLine } from 'react-icons/ri'
import { StatsCardProps } from '.'
import { BiRocket } from 'react-icons/bi'
import { GiMoneyStack, GiBalaclava } from 'react-icons/gi'

export const mockedStatsCard: StatsCardProps[] = [
  {
    icon: BiRocket,
    type: 'increase',
    title: 'Saldo Anchor',
    value: '$53,000',
    valuePercentage: '+55',
  },
  {
    icon: GiMoneyStack,
    type: 'decrease',
    title: 'Receita Acumulada',
    value: '$2,300',
    valuePercentage: '+20',
  },
  {
    icon: GiBalaclava,
    type: 'increase',
    title: 'Novos Clientes',
    value: '+3,462',
    valuePercentage: '+5',
  },
  {
    icon: RiLuggageDepositLine,
    type: 'decrease',
    title: 'Depósitos',
    value: '$103,430',
    valuePercentage: '+5',
  },
]
