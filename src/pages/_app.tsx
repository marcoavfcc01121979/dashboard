import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import ThemeToggleProvider from '../contexts/toggle-provider'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeToggleProvider initialSchema={'dark'}>
        <Component {...pageProps} />
      </ThemeToggleProvider>
    </ChakraProvider>
  )
}

export default MyApp
