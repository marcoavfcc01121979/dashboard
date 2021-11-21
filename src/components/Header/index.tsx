import { Flex, Text, Icon } from '@chakra-ui/react'
import { RiNotificationLine } from "react-icons/ri";

interface HeaderProps {
    name: string;
}

export function Header({ name }: HeaderProps) {
    return(
        <Flex
            as="header"
            w="100%"
            maxWidth={1180}
            h="28"
            mx="auto"
            mt="2"
            px="6"
            align="center"
        >
            <Flex flexDir="column">
                <Text fontSize="14">
                    Pages / {name}
                </Text>
                <Text fontSize="16" fontWeight="bold">
                    {name}
                </Text>
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <Text textTransform="capitalize" fontSize="14">sign out</Text>
                <Icon as={RiNotificationLine} fontSize="20" ml="4" />
            </Flex>
            
        </Flex>
    )
} 