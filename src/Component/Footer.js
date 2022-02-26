
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
  
    <>
      <div className='bg-danger'>
        <Container  style={{ width: '100%', height: "250px" }}>
            <Row  className='pt-5'>
              <Col className="col-4 " style={{border:"2px solid black", color:"white"}}>
                <h4  className="ms-5">
                  Ritik Patidar
                </h4>   
                <ul className="ms-5">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                  <li>
                    <a href="/get_teacher">Get Teacher</a>
                  </li>
                </ul>

              </Col>
              <Col style={{border:"2px solid black"}} border="primary" >2 of 2</Col>
              <Col style={{border:"2px solid black"}} border="primary" >2 of 2</Col>
            </Row>
          </Container>
      </div>
    </>
          
  )
}
