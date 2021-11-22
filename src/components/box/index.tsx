import { Box as CBox, BoxProps } from '@chakra-ui/layout'
import { WithChildren } from '../../@types/with-children'

interface Props extends BoxProps {}

const Box = ({ children, ...rest }: WithChildren<Props>) => {
  return (
    <CBox p={'4'} bg={'gray.50'} shadow={'xl'} rounded={'1rem'} {...rest}>
      {children}
    </CBox>
  )
}

export default Box
