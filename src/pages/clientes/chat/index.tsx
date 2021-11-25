import { Avatar } from '@chakra-ui/avatar'
import { Heading, HStack, Text } from '@chakra-ui/layout'
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
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
        Clientes
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">Nome</Th>
            <Th textAlign="center">Cpf</Th>
            <Th textAlign="center">Data</Th>
            <Th textAlign="center">Saldo (US$)</Th>
            <Th textAlign="center">Saldo Indicações(US$)</Th>
            <Th textAlign="center">Rentabilidade Acumulada</Th>
            <Th textAlign="center">Receita Gerada (US$)</Th>
            {/*<Th>Status</Th>*/}
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 10 }, () => ({
            user: 'Creusa',
            cpf: 'xxx.xxx.xxx-xx',
            data: '25/11/2021',
            valor: '1.000,00',
            saldo_indicacoes: '35,00',
            rentabilidade: '112%',
            receita: '1000,00',
            // status: Boolean(Math.round(Math.random())),
          })).map((x, index: number) => (
            <Tr key={`item-${index}`}>
              <Td>
                <HStack>
                  {/*<Avatar size="xs" src="https://bit.ly/broken-link" />{' '}*/}
                  <Text fontWeight="bold" color="#252F40">
                    {x.user}
                  </Text>
                </HStack>
              </Td>
              <Td>{x.cpf}</Td>
              <Td>{x.data}</Td>
              <Td>{x.valor}</Td>
              <Td>{x.saldo_indicacoes}</Td>
              <Td>{x.rentabilidade}</Td>
              <Td>{x.receita}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Chat
