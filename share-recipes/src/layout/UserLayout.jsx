import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const UserLayout = () => {
  return (
    <div className='bg-walter-white'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout