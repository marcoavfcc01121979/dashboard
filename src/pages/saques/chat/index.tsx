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
        Solicitações de Saques
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">Cliente</Th>
            <Th textAlign="center">Cpf</Th>
            <Th textAlign="center">Saldo na conta da Time Back</Th>
            <Th textAlign="center">Valor da Solicitação do Saque</Th>
            <Th textAlign="center">Data</Th>
            <Th textAlign="center">Hora</Th>
            <Th textAlign="center">Dados bancários</Th>
            <Th textAlign="center">Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 10 }, () => ({
            user: 'Creusa',
            cpf: 'xxx.xxx.xxx-xx',
            valor: '1.000,00',
            valor_solicitacao: '250,00',
            data: '25/11/2021',
            hora: '12:00',
            dados_bancario: 'ag-0000-0 / cc-00.000-0',
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
              <Td textAlign="center">{x.cpf}</Td>
              <Td textAlign="center">{x.valor}</Td>
              <Td textAlign="center">{x.valor_solicitacao}</Td>
              <Td textAlign="center">{x.data}</Td>
              <Td textAlign="center">{x.hora}</Td>
              <Td textAlign="center">{x.dados_bancario}</Td>
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
