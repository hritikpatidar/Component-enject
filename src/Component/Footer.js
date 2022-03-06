
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <div id="navbarNav">
            <Navbar className="navbar-nav ms-5">
                <Nav className="nav-item ms-5">
                  <Link to="/register" className='nav-link'>About Us</Link>
                  <Link to="/register" className='nav-link'>Contact</Link>
                </Nav>
              
              </Navbar>
          </div>
        </div>
      </nav>

    </>
          
  )
}
