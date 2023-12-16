import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
import Container from './Container'


const Layout = () => {
  return (
    <>
    <Container>
      <Header/>
    </Container>

    <Outlet/>
    
    <Container>
      <Footer/>
    </Container>
    </>
  )
}

export default Layout
