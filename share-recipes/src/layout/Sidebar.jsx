import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Menu, Transition} from '@headlessui/react'
import axios from 'axios'

const Sidebar = () => {
  const navigate = useNavigate()
        const[show,setShow] = useState(false)
    // return(null)

    const logout = async () => {
      try {
        await axios.delete("http://localhost:3002/logout")
        navigate('/home')
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <div className='py-2 w-full ' >
    <button onClick={()=>setShow(!show)} className='px-4' >

            <img className='w-10 z-50 bg-slate-200 p-2 rounded-lg' src="/icons/bars.svg" alt="" />
    </button>

    <div className={` ${show ?'translate-x-0 lg:-translate-x-96':'-translate-x-28 lg:translate-x-0 opacity-80 translate-y-5'} relative group mt-2 z-10 bg-orange-400 rounded-r-lg duration-300 xl:w-[5vw] w-[17vw] h-[90vh] xl:hover:w-[13vw] hp:hover:w-[43vw] sm:hover:w-[20vw] md:hover:w-[13vw] lg:hover:w-[13vw] `} >
        <div className='relative overflow-hidden' >
        <div className='flex flex-col gap-2 mt-3 '>
        <p className='font-semibold mx-auto ' >Menu</p>
       
       
       
       <Link to={'/home'}  className='flex relative w-full py-2 z-50 mt-5 ' >
       <div className='w-9 bg-custom-main ml-4 p-2 rounded-lg '>
       <img className='h-5 mx-auto z-50 ' src="/icons/house.svg" alt="" />
       </div>
       <div className='-z-10 w-96 absolute top-2 -left-6 opacity-0 duration-300 ml-6 group-hover:opacity-100 group-hover:translate-x-16  leading-9 ' >
            Home
       </div>
       </Link>

       <Link to={''}
        className='flex relative w-full py-2 z-50   ' >
       <div className='w-9 bg-custom-main ml-4 p-2 rounded-lg '>
       <img className='h-5 mx-auto z-50 ' src="/icons/readme.svg" alt="" />
       </div>
       <div className='-z-10 w-96 absolute top-2 -left-6 opacity-0 duration-300 ml-6 group-hover:opacity-100 group-hover:translate-x-16  leading-9 ' >
       instructions
       </div>
       </Link>
       
       <Link className='flex relative w-full py-2 z-50   ' >
       <div className='w-9 bg-custom-main ml-4 p-2 rounded-lg '>
       <img className='h-5 mx-auto z-50 ' src="/icons/user-avatar.svg" alt="" />
       </div>
       <div className='-z-10 w-96 absolute top-2 -left-6 opacity-0 duration-300 ml-6 group-hover:opacity-100 group-hover:translate-x-16  leading-9 ' >
            <Menu>
                <Menu.Button>Account</Menu.Button>
                <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

                <Menu.Items className={''} >
                    <Menu.Item>
                        {({active})=>(
                            <Link>Profil</Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
      </Transition>
            </Menu>
       </div>
       </Link>
       
       <Link to={'myrecipes'}
        className='flex relative w-full py-2 z-50   ' >
       <div className='w-9 bg-custom-main ml-4 p-2 rounded-lg '>
       <img className='h-5 mx-auto z-50 ' src="/icons/shop.svg" alt="" />
       </div>
       <div className='-z-10 w-96 absolute top-2 -left-6 opacity-0 duration-300 ml-6 group-hover:opacity-100 group-hover:translate-x-16  leading-9 ' >
            Recipes
       </div>
       </Link>
       
       <Link to="bookmark" className='flex relative w-full py-2 z-50   ' >
       <div className='w-9 bg-custom-main ml-4 p-2 rounded-lg '>
       <img className='h-5 mx-auto z-50 ' src="/icons/bookmark-check.svg" alt="" />
       </div>
       <div className='-z-10 w-96 absolute top-2 -left-6 opacity-0 duration-300 ml-6 group-hover:opacity-100 group-hover:translate-x-16  leading-9 ' >
            Bookmark
       </div>
       </Link>
       
       <div onClick={logout} className='flex relative w-full py-2 z-50 ' >
       <div className='w-9 bg-custom-main ml-4 p-2 rounded-lg '>
       <img className='h-5 mx-auto z-50 ' src="/icons/logout.svg" alt="" />
       </div>
       <div className='-z-10 w-96 absolute top-2 -left-6 opacity-0 duration-300 ml-6 group-hover:opacity-100 group-hover:translate-x-16  leading-9 ' >
            Logout
       </div>
       </div>
       
       
    
        </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar