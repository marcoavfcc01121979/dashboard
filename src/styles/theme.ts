import {
  createStandaloneToast,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        color: '#67748E',
      },
    },
  },
})
export const toast = createStandaloneToast({ theme })
