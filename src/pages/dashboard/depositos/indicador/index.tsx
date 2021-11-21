import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { Progress } from '@chakra-ui/progress'
import { IconType } from 'react-icons'
import { FiHexagon } from 'react-icons/fi'
import DefaultIcon from '../../../../components/default-icon'

interface Props {
  icon?: IconType
  title: string
  value: string | number
  selectedColor?: string
}

const Indicador = ({ icon, title, value, selectedColor }: Props) => {
  return (
    <Box width="100%">
      <Flex alignItems="center">
        <DefaultIcon
          icon={icon ?? FiHexagon}
          selected
          selectedColor={selectedColor}
          mr="2"
          fontSize="1.7rem"
          p=".4rem"
        />

        <Text fontWeight="bold" color="#67748E">
          {title}
        </Text>
      </Flex>

      <Stack>
        <Heading fontSize="2xl" color="#252F40">
          {value}
        </Heading>
        <Progress
          value={Math.floor(Math.random() * 50)}
          rounded="4"
          height=".4rem"
          maxW="4.5rem"
          bg="#67748E18"
          colorScheme="gray"
        />
      </Stack>
    </Box>
  )
}

export default Indicador
