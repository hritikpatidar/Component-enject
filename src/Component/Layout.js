import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
      <>
        <br />
        <Header />
        <br />
        {props.children}
        <br />
        
        <Footer />
      </>
  )
}
