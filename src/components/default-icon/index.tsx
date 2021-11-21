import Icon, { IconProps } from '@chakra-ui/icon'
import { IconType } from 'react-icons'

interface Props extends IconProps {
  icon: IconType
  selected?: boolean
  selectedColor?: string
}

const DefaultIcon = ({ icon, selected, selectedColor, ...rest }: Props) => {
  return (
    <Icon
      mr="5"
      fontSize="2.5rem"
      p=".6rem"
      color="white"
      borderRadius=".5rem"
      bg={selected ? selectedColor ?? '#6531FF' : '#979797'}
      as={icon}
      {...rest}
    />
  )
}

export default DefaultIcon
