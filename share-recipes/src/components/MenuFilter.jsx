import React from 'react'
import { Link } from 'react-router-dom';

const MenuFilter = ({Category}) => {
  
  return (
    <>
        
      <div className="flex pb-10 px-4 pt-3 overflow-x-scroll">
        {Category.map((value, index) => (
          <Link
            to={value.link}
            key={index}
            className="flex flex-col px-3 w-fit "
          >
            {/* <img className="rounded-lg shadow-xl" src={breakfast} alt="" /> */}
            <p className="max-w-full px-6 text-center shadow-btn whitespace-pre bg-custom-main py-2 rounded-lg">
              {value.value}
            </p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default MenuFilter