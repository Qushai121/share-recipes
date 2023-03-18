import React from 'react'

const Search = () => {
  return (
    <div className="relative w-fit shadow-2xl">
        <input className='py-3 w-[35vh] rounded-lg ' type="text" placeholder=' Search for recipes....' />
        <button className='absolute bottom-[1px] right-1 pb-3 px-2 text-transparent' >ssss
        <img className='w-5' src="/icons/search.svg" alt="" />
        </button>
    </div>
  )
}

export default Search