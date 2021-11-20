import { Flex, Button, Stack, Box, Switch } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
      flexDir="column"
    >      
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="#FFF" 
        p="8" borderRadius={8}
        flexDir="column"
      >
        <Flex
          flexDir="column"
          mb="6"
        >
          <Box
            fontWeight="bold"
            fontSize="36"
            color="blue"
            textTransform="capitalize"
          >
            sign in
          </Box>
          <Box
            fontSize="14"
            color="gray"
          >
            Enter your email and password to sign in
          </Box>
        </Flex>
        
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Password" />
          <Switch fontSize="14" color="blue">Remember me</Switch>
        </Stack>
        

        <Button type="submit" mt="6" mb="6" colorScheme="blue" fontWeight="bold" textTransform="uppercase">sign in</Button>
        <Box fontSize="14">Don’t have an account?<Box fontWeight="bold" textTransform="capitalize">sign up</Box></Box>
      </Flex>
    </Flex>
  )
}
