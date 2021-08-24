import React, { useState } from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItems, NavLinks } from './Navbar.Elements.js'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Button } from "./../../GlobalStyle";

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon />
            ULTRA
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {clicked ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu clicked={clicked} onClick={handleClick}>
            <NavItems>
              <NavLinks to='/'>Home</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to='/services'>Services</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to='/about-us'>About Us</NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks to='/sign-up'>
                <Button primary >SIGN UP</Button>
              </NavLinks>
            </NavItems>

          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
