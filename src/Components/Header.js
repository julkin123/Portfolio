import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css"
 
function Header() {
  return (
    <Navbar  className="navbar navbar-expand-lg navbar-light bg-light" >
    <Container>
      <Navbar.Brand   href="/">JULKIN GEORGE</Navbar.Brand>
      <Nav className="me-auto">
     
        <Link  className='navlinks' to="/home">Home</Link>
        <Link className='navlinks' to="/projects">Projects</Link>
        <Link className='navlinks' to="/about">About</Link>
        <Link className='navlinks' to="/contacts">Contacts</Link>
       
      </Nav>
    </Container>
  </Navbar>
 
  
  )
}

export default Header
