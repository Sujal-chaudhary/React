import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
  return (
    <>
        <div className="min-h-screen w-full">
    <Header />
    <Outlet/>
    <Footer />
    </div>
    </>
  )
}

export default Layout