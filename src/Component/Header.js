import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <Navbar bg="black" variant="dark">
            <Container>
                <Navbar.Brand to="#home">Ritik Patidar</Navbar.Brand>
                <Nav className="me-5">
                    <Link className="nav-link " to="/"  >Home</Link>
                    <Link to="/login" className='nav-link'>Login</Link>
                    <Link to="/register" className='nav-link'>Register</Link>
                    <Link to="/get_teacher" className='nav-link'>Get Teacher</Link>
                </Nav>
            </Container>
        </Navbar>
       

    </div>
  )
}
