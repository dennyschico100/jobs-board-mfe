import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>,
  )
} else {
  console.error('The element #root was not found in index.html')
}
