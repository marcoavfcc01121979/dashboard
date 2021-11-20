import { FiDroplet } from 'react-icons/fi'
import { StatsCardProps } from '.'

export const mockedStatsCard: StatsCardProps[] = [
  {
    icon: FiDroplet,
    type: 'increase',
    title: 'Saldo Anchor',
    value: '$53,000',
    valuePercentage: '+55',
  },
  {
    icon: FiDroplet,
    type: 'decrease',
    title: 'Saldo Anchor',
    value: '$2,300',
    valuePercentage: '+20',
  },
  {
    icon: FiDroplet,
    type: 'increase',
    title: 'Novos Clientes',
    value: '+3,462',
    valuePercentage: '+5',
  },
  {
    icon: FiDroplet,
    type: 'decrease',
    title: 'Depósitos',
    value: '$103,430',
    valuePercentage: '+5',
  },
]
