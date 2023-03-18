import React from 'react'
import { useLocation } from 'react-router-dom'

const Trending = () => {
    const state = useLocation().state
    console.log(state)
  return (
    <div>
        <div className="w-full flex pt-3 justify-center  ">
        <h1 className="w-fit px-36 shadow-tittle text-xl font-semibold py-4 bg-custom-main rounded-xl">
          Trending
        </h1>
      </div>
      
      <div>
        pagination 
      </div>
    </div>
  )
}

export default Trending