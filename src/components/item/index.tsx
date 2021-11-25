import { Box, Grid, Text } from '@chakra-ui/layout'
import { format } from 'date-fns'
import { FaMoneyBillWave } from 'react-icons/fa'

interface Props {
  value: string
  user: string
  date: Date
}
const SaqueItem = ({ date, user, value }: Props) => {
  return (
    <Grid gap="5" mb="4" templateColumns={{ base: 'auto 1fr' }}>
      <FaMoneyBillWave fontSize="1.3rem" color="#F32C35" />
      <Box>
        <Text color="#252F40" fontWeight="bold">
          {value} - {user}
        </Text>
        <Text>{format(new Date(date), "dd MMM HH:mm'h'")}</Text>
      </Box>
    </Grid>
  )
}

export default SaqueItem
