import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps  } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string; 
}

export function Input({name, label, ...rest}: InputProps) {
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name} fontSize="12">{label}</FormLabel>}
            <ChakraInput 
                name={name} 
                id={name}
                focusBorderColor="pink.500"
                bgColor="white.200"
                _hover={{
                bgColor: 'white.200'
                }}
                placeholder={label}
                {...rest}
            />
        </FormControl>
    )
}