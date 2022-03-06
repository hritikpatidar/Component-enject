
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const Logout = useNavigate();

  let logout=(e)=>{ 
    e.preventDefault();
    console.log("okok");
    localStorage.removeItem("jwt");
    Logout('/login');
  }
  return (
    <div>
     
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid me-5 ms-5">
          <a className="navbar-brand me-5" href="#">Ritik Patidar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="button">Search</button>
              <Link to="" className='btn btn-outline-success ms-2' onClick={ (e)=>{ logout(e)} }>Logout</Link>
            </form>
          </div>
        </div>
      </nav>


      

      


    </div>
  )
}
