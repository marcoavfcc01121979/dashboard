import { Avatar } from '@chakra-ui/avatar'
import { Heading, HStack, Text } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { Tag } from '@chakra-ui/tag'
import React from 'react'
import Box from '../../../components/box'

const Chat = () => {
  const Status = ({ status }: { status: boolean }) => {
    if (status) return <Tag colorScheme="whatsapp">Resolvido</Tag>
    return <Tag colorScheme="red">Pendente</Tag>
  }

  return (
    <Box>
      <Heading fontWeight="bold" color="#252F40" fontSize="xl">
        Depósitos
      </Heading>

      <Text mt="3" mb="8">
        Respondidos
        <Text color="#17C1E8" fontWeight="bold" ml="1" display="inline">
          40%
        </Text>
      </Text>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">Cliente</Th>
            <Th textAlign="center">Mensagem</Th>
            <Th textAlign="center">Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 10 }, () => ({
            user: 'Creusa',
            message: 'Bla bla bla',
            status: Boolean(Math.round(Math.random())),
          })).map((x, index: number) => (
            <Tr key={`item-${index}`}>
              <Td textAlign="center">
                <HStack>
                  {/*<Avatar size="xs" src="https://bit.ly/broken-link" />{' '}*/}
                  <Text fontWeight="bold" color="#252F40">
                    {x.user}
                  </Text>
                </HStack>
              </Td>
              <Td textAlign="center">{x.message}</Td>
              <Td textAlign="center">
                <Status status={x.status} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Chat
