import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        

        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link " to="/" className='nav-link '>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className='nav-link'>Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className='nav-link'>Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/GetStudent/1/10" className='nav-link'>Get Students</Link>
            </li>
           
        </ul>

    </div>
  )
}
