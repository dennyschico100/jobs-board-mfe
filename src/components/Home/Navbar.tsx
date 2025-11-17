import React, { useState } from 'react'
import './navbar.css'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Heading } from '@chakra-ui/react'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(true)
  return (
    <div>
      <nav id="navbar-dark-menu">
        <Heading color={'#fff'}>JOB FINDER</Heading>
        <ul id="navbar-dark" className={isClicked ? 'active' : ''}>
          <li>
            <a className="active" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Register</a>
          </li>
        </ul>
        <div id="navbar-mobile-menu">
          <span
            className="navbar-icon-container"
            onClick={() => {
              setIsClicked(prevState => !prevState)
            }}
          >
            {isClicked ? (
              <IconMenu2 size={24} stroke={2} color={'#17cf97'} />
            ) : (
              <IconX size={24} stroke={2} color={'#17cf97'} />
            )}
          </span>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
