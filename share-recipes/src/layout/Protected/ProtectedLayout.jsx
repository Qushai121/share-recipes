import React, { useContext } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { UserAccContext } from '../../context/userAcc'
import Sidebar from '../Sidebar'

const ProtectedLayout = () => {
const {userDatas,errors} = useContext(UserAccContext)

if(errors.response?.status===400){
  // bismillah aman 🗿
  // kaloau pun bisa masuk g bisa upload recipe
  return <div className='relative flex justify-center items-center'>
    <img className='w-72' src="/img/the-rock.gif" alt="" />
    <div className='kaget bottom-2 bg-custom-main bg-opacity-60 absolute font-bold font-inter text-5xl' >
      <Link to={'/login'}>LOGIN</Link>
    </div>
  </div>
}
  
  return (
    <div className='font-inter relative w-[100vw] flex g-[100vh] ' >
    <div className='absolute left-0 z-50' >
      <Sidebar/>
    </div>
      <div className='absolute w-full bg-walter-white overflow-y-scroll h-[100vh]' >
      <div className='pt-[4rem] ' >
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default ProtectedLayout