import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        blue: {
            "900": "#1A365D",
            "800": "#2A4365",
            "700": "#2C5282",
            "600": "#2B6CB0",
            "500": "#3182CE",
            "400": "#4299E1",
            "300": "#63B3ED",
            "200": "#90CDF4",
            "100": "#BEE3F8",
            "50":  "#EBF8FF",
        }
    },
    fonts: {
        heading: 'Open Sans',
        body: 'Open Sans',
    },
    styles: {
        global: {
            body: {
                bg: '#FFFFFF',
                color: '#141414'
            }
        }
    }
})