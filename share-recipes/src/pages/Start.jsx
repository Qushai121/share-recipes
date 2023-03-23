import React from 'react'
import { Link } from 'react-router-dom'
import Sprinkle from '../components/Sprinkle'



const Start = () => {
  return (
    <div style={{backgroundImage:`url(/img/main.jpg)`}} className='bg-cover text-custom-main  bg-center w-[100vw] h-[100vh]' >
    <div className='bg-gradient-to-t flex-col from-custom-black relative h-full' >
      <div className='flex flex-col justify-center items-center translate-y-44' >
      {/* le ale */}
        <h1 className='text-5xl opacity-80 font-dmserif' >le`Ale</h1>
        <h1 className='text-[18px] opacity-80 font-inter' >COOK IT YOURSELF</h1>
      </div>
      <div className=' shadow-inherit  absolute bottom-20 right-10' >
        <h1 className='text-xl  opacity-80 ' ><Link to={'/home'} className="py-10 font-dmserif" >Start Cooking </Link> </h1>
      </div>
      <div className='flex justify-center mt-4 font-roboto translate-y-[84vh] bg-clip-text text-transparent bg-gradient-to-t from-custom-third  ' >&#169; copyright by uhuy.ltd</div>
      <div className='flex justify-center lg:translate-x-[20vw]' >
     <Sprinkle/>
      </div>
    </div>
    </div>
  )
}

export default Start