import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

export default function NavBar() {
  return (
    
<>
      <Navbar bg="dark" data-bs-theme="dark" id='navbar'>
        <Container>
          <Navbar.Brand href="/">Filmeo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  )
}
