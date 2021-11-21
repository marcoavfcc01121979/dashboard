import { Box, Flex, Heading, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'

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
                    <Table colorScheme="whiteAlpha" size="sm" variant="simple">
                        <Thead>
                            <Tr>
                                <Th textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Cliente</Th>
                                <Th color="gray" fontSize="14" fontWeight="bold">CPF</Th>
                                <Th textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">valor</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Data</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Hora</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Saldo Pré-depósito(US$)</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Saldo Atualizado(US$)</Th>
                                <Th color="gray" fontSize="14" fontWeight="bold">Status</Th>
                                <Th  textTransform="capitalize" color="gray" fontSize="14" fontWeight="bold">Observações</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr borderBottom="5">
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#68D391" borderRadius="15%">anchor</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#A0AEC0" borderRadius="15%">pendente</Td>                  
                            </Tr>
                            <Tr>
                                <Td fontSize="12">Luis</Td>
                                <Td fontSize="12">xxxxxxxxxxx</Td>
                                <Td fontSize="12" px="6">1.000,00</Td>
                                <Td fontSize="12">20/02/2021</Td>
                                <Td fontSize="12" px="6">15:30</Td>
                                <Td fontSize="12">1.000,00</Td> 
                                <Td fontSize="12">2.000,00</Td>
                                <Td fontSize="12" textTransform="uppercase" bg="#F6E05E" borderRadius="15%">banco</Td>                  
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}