import { Flex, FlexProps, Link, Text } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import DefaultIcon from '../../../components/default-icon'

interface NavItemProps extends FlexProps {
  icon: IconType
  href: string
  selected?: boolean

  children: ReactNode
}
const NavItem = ({ icon, children, href, selected, ...rest }: NavItemProps) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={selected ? '#252F40' : '#67748E'}
        _hover={{
          bg: 'gray.50',
        }}
        {...rest}
      >
        {icon && <DefaultIcon selected={selected} icon={icon} />}
        <Text fontWeight={selected && 'bold'} fontSize=".9rem">
          {children}
        </Text>
      </Flex>
    </Link>
  )
}

export default NavItem
