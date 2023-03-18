import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Navbar = () => {
  const [container,setContainer] = useState(false)

  console.log(container)
 
  return (
    <div className='font-roboto w-full z-50 flex justify-center text-center fixed h-[1px] translate-y-[85vh]' >
    <div className='h-24 pt-2 group ' >
      <div className={container ? 'translate-y-4 shadow-none flex nav-container bg-custom-main rounded-xl duration-300 h-fit pt-3 shadow-nav-small pb-4 gap-10 px-10':'flex nav-container bg-custom-main rounded-xl shadow-nav duration-300 h-fit pt-3 pb-4 gap-10 px-10'} >
          <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain ' src='/icons/house.svg' alt="" /></NavLink>
          <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain ' src='/icons/rectangle-list.svg' alt="" /></NavLink>
      <button onClick={()=>setContainer(!container)} className='' ><img className='h-8 aspect-auto object-contain' src='/icons/grip.svg' alt="" /></button>
          <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain' src='/icons/bookmark-check.svg' alt="" /></NavLink>
          <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain ' src='/icons/user-avatar.svg' alt="" /></NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar

// <div className='font-roboto w-full z-50 flex justify-center text-center fixed h-[1px] translate-y-[80vh]' >
//     <div className='h-24 pt-2 group ' >
//       <div className={container ? 'translate-y-4 shadow-none flex nav-container bg-custom-main rounded-xl duration-300 h-fit pt-3 pb-4 gap-10 px-10':'flex nav-container bg-custom-main rounded-xl shadow-nav duration-300 h-fit pt-3 pb-4 gap-10 px-10'} >
//           <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain ' src={house} alt="" /></NavLink>
//           <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain ' src={reactangle} alt="" /></NavLink>
//       <button onClick={()=>setContainer(!container)} className='' ><img className='h-8 aspect-auto object-contain' src={grip} alt="" /></button>
//           <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain' src={bookmark} alt="" /></NavLink>
//           <NavLink className={container ? 'hidden delay-300 duration-300 ' : 'block duration-300'} ><img className='h-8 aspect-auto object-contain ' src={avatar} alt="" /></NavLink>
//       </div>
//     </div>
//     </div>