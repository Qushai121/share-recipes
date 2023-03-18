import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const ProtectedLayout = () => {
  return (
    <div className='bg-red-200 font-inter relative w-[100vw] flex g-[100vh] ' >
    <div className='absolute left-0 z-50' >
      <Sidebar/>
    </div>
      <div className='absolute bg-stone-700 w-full h-[100vh]' >
      <div className='pt-[4rem] ' >
      <Outlet/>
        {/* <button><img className='w-6' src="/icons/bars.svg" alt="" /></button> */}
      </div>
      </div>
    </div>
  )
}

export default ProtectedLayout