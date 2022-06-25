import React from 'react'
import Nav from '../Nav/Nav'
import '../Layout/Layout.css'
import Footer from '../../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='layout'>
    <Nav/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout;