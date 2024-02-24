import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import TabsComponent from './Components/TabsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Under Construction</AlertTitle>
          <AlertDescription>Webpage is not fully completed yet!</AlertDescription>
        </Alert>
        Test of App
        <TabsComponent />
      </ChakraProvider>
    </>
  )
}

export default App
