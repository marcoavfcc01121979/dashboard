import Icon, { IconProps } from '@chakra-ui/icon'
import { IconType } from 'react-icons'

interface Props extends IconProps {
  icon: IconType
  selected?: boolean
}

const DefaultIcon = ({ icon, selected, ...rest }: Props) => {
  return (
    <Icon
      mr="5"
      fontSize="2.5rem"
      color="white"
      p=".6rem"
      borderRadius=".5rem"
      bg={selected ? '#6531FF' : '#979797'}
      as={icon}
      {...rest}
    />
  )
}

export default DefaultIcon
