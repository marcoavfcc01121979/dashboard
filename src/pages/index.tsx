import { Flex, Input, Button, Stack, FormLabel, Switch, FormControl,Box } from "@chakra-ui/react";

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
          <FormControl>
            <FormLabel htmlFor="email" fontSize="12">E-mail</FormLabel>
            <Input 
              name="email" 
              id="email"
              type="email" 
              focusBorderColor="pink.500"
              bgColor="white.200"
              _hover={{
                bgColor: 'white.200'
              }}
              placeholder="Email"
            />
          </FormControl>
          
          <FormControl>
            <FormLabel htmlFor="password" fontSize="12">Password</FormLabel>
            <Input 
              name="password" 
              id="password"
              type="password" 
              focusBorderColor="pink.500"
              bgColor="white.200"
              _hover={{
                bgColor: 'white.200'
              }}
              placeholder="password"
            />
          </FormControl>
          

          <Switch fontSize="14" color="blue">Remember me</Switch>
        </Stack>
        

        <Button type="submit" mt="6" mb="6" colorScheme="blue" fontWeight="bold" textTransform="uppercase">sign in</Button>
        <Box fontSize="14">Don’t have an account?<Box fontWeight="bold" textTransform="capitalize">sign up</Box></Box>
      </Flex>
    </Flex>
  )
}
