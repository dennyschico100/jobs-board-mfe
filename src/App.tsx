import React from 'react'
import { Button, HStack, Heading, Text } from '@chakra-ui/react'

const App = () => {
  return (
    <div style={{ margin: '100px' }}>
      <Heading>Heading example</Heading>
      <Text>Text example</Text>
      <HStack>
        <Button bg="brand.500" _hover={{ bg: 'brand.600' }}>
          Botón principal
        </Button>
        <Button bg="brand.600" _hover={{ bg: 'brand.500' }}>
          Botón principal
        </Button>
      </HStack>
    </div>
  )
}
export default App
