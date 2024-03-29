import React from 'react'
// import Link from 'next/link';
import { Navbar } from 'flowbite-react'

const NavbarComponent = () => {
  return (
    <div className='shadow-lg'>
      <Navbar fluid rounded className='container mx-auto'>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
