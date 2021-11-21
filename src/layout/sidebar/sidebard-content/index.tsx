import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { IconType } from 'react-icons'
import { FiCompass, FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi'
import NavItem from '../nav-item'

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome, href: 'dashboard' },
  { name: 'Saques', icon: FiShoppingCart, href: 'saques' },
  { name: 'Depósitos', icon: FiCompass, href: 'depositos' },
  { name: 'Clientes', icon: FiUsers, href: 'clientes' },
]

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter()

  return (
    <Box
      bg="white.900"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="1xl" fontWeight="bold">
          Olá, Paulo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          href={link.href}
          icon={link.icon}
          selected={`/${link.href}` === router.pathname}
        >
          <Text fontSize=".9rem">{link.name}</Text>
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
