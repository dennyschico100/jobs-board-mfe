import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

export const system = createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      tokens: {
        colors: {
          brand: {
            primary: { value: '#fb246a' },
            secondary: { value: '#000035' },
            500: { value: '#0088cc' }, // color principal
            600: { value: 'rgba(68, 184, 0, 1)' }, // hover
          },
        },
        fonts: {
          heading: { value: `'Montserrat', sans-serif` },
          body: { value: `'Inter', sans-serif` },
        },
      },
    },
  }),
)
