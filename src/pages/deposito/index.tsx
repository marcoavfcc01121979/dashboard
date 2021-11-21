import { Box, Flex, Heading, Table, Thead, Tr, Th } from '@chakra-ui/react'

import { Header } from "../../components/Header";

export default function Deposito() {
    return (
        <Box>
            <Header name="Depósitos" />

            <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
                <Box flex="1" borderRadius={8} bg="#FFF" p="8">
                    <Flex mb="8" justify="initial" align="center">
                        <Heading fontWeight="semibold" fontSize="20">
                            Histórico de Depósitos
                        </Heading>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Cliente</Th>
                                <Th color="gray" fontSize="14" fontWeight="bold">CPF</Th>
                                <Flex>
                                    <Flex flexDir="column" align="center">
                                        <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Saldo</Th>
                                        <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Pré-depósito(US$)</Th>
                                    </Flex>
                                    <Flex flexDir="column" align="center">
                                        <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Saldo</Th>
                                        <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Atualizado(US$)</Th>
                                    </Flex>
                                </Flex>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Data</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Hora</Th>
                                <Th color="gray" fontSize="14" fontWeight="bold">Status</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Observações</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}