import React, { useEffect, useState } from 'react'
import './style.css'
import Navbar from './components/Home/Navbar'
import Header from './components/Home/Header'
import { Button } from '@chakra-ui/react'

const App = () => {
  const [showHeader, setShowHeader] = useState(false)
  const [click, setClick] = useState(false)

  useEffect(() => {}, [])
  return (
    <div>
      {!click && (
        <div
          style={{
            height: '100vh',
            backgroundColor: '#333',
            color: '#fff',
            opacity: '0.8',
            display: 'block',

            margin: '0 auto',
          }}
        >
          <div style={{ height: '200px', padding: '20px', width: '80%', margin: '0 auto' }}>
            <p>Mostrar Navbar oscuro?</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100px',
              }}
            >
              <Button
                bg="brand.primary"
                onClick={() => {
                  setShowHeader(true)
                  setClick(true)
                }}
              >
                Si
              </Button>
              <Button
                onClick={() => {
                  setShowHeader(false)
                  setClick(true)
                }}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* <Heading>Heading example</Heading> */}

      {showHeader ? <Navbar /> : <Header />}
    </div>
  )
}
export default App
