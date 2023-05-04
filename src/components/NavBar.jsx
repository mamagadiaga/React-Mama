import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="black" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className='text-white'>BG-COLOR</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> 
          <Nav.Link href="#home" className='text-white'>ACCEUIL</Nav.Link>
          <Nav.Link href="#about" className='text-white'>ABOUT</Nav.Link>
          <Nav.Link href="#contact" className='text-white'>CONTACTS</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
