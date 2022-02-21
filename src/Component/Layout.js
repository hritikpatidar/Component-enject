import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
      <>
        <br />
        <Header />
        <hr />
        <br />
        {props.children}
        <br />
        <hr />
        <Footer />
      </>
  )
}
