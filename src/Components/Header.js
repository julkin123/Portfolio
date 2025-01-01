import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css"


function Header() {
  return (

   
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="/">JULKIN GEORGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="me-auto">

            <Link className='navlinks p-2' to="/home">Home</Link>
            <Link className='navlinks p-2' to="/projects">Projects</Link>
            <Link className='navlinks p-2' to="/about">About</Link>
            <Link className='navlinks p-2' to="/contacts">Contacts</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







  )
}

export default Header
