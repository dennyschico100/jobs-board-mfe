import React, { useState } from 'react'
import './header.css'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Heading, Button } from '@chakra-ui/react'

const Header = () => {
  const [isClicked, setIsClicked] = useState(true)
  return (
    <div id="nav-wrapper">
      <nav id="nav">
        <Heading color={'brand.secondary'}>Empleo SV</Heading>
        <ul id="navbar-ul" className={isClicked ? 'active' : ''}>
          <li>
            <a className="" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contactanos</a>
          </li>
          <li>
            <Button
              size={{ base: 'sm', md: 'lg' }}
              bg="brand.primary"
              _hover={{ bg: '#fff', color: 'brand.primary', borderColor: 'brand.primary' }}
            >
              Iniciar Sesion
            </Button>
          </li>
          <li>
            <Button
              size={{ base: 'sm', sm: 'lg' }}
              bg="brand.primary"
              _hover={{ bg: '#fff', color: 'brand.primary', borderColor: 'brand.primary' }}
            >
              Registrate
            </Button>
          </li>
        </ul>
        <div id="mobile">
          <span
            className="icon-container"
            onClick={() => {
              setIsClicked(prevState => !prevState)
            }}
          >
            {isClicked ? (
              <IconMenu2 size={24} stroke={2} color={'#fb246a'} />
            ) : (
              <IconX size={24} stroke={2} color={'#fb246a'} />
            )}
          </span>
        </div>
      </nav>
    </div>
  )
}
export default Header
