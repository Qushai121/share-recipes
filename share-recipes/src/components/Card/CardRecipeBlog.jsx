import React from 'react'
import { Link } from 'react-router-dom'
import Bookmark from '../Bookmark'
import Like from '../Like'

const CardRecipeBlog = ({value}) => {
    console.log(value?.recipeStatefull?.bookmark)
  return (
    <>
        <div className="flex rounded-lg shadow-2xl resepcard justify-between py-6">
            <div className=" flex flex-col w-24 mx-2">
              <img
                className="object-cover object-center h-36 w-36 rounded-xl"
                src={`http://localhost:3002/${value.thumbnail_main}`}
                alt=""
              />
              <div className="flex justify-evenly mt-2 ">
                <div>
                  <Like likes={value?.recipeStatefull}
                  style={'w-[26px] mx-auto '} wrapper={'flex flex-col'}
                  fill={''} />
                </div>
                 <Bookmark bookmarks={value?.recipeStatefull} style={'w-[20px] mx-auto '} fill={''} />
              </div>
            </div>

            <div className="mx-2 ">
              <div className="flex justify-between ">
                <h1 className="text-xl font-medium font-roboto w-[45vw] overflow-x-auto whitespace-nowrap ">
                  {value.tittle}
                </h1>
                <p className="font-light overflow-x-scroll w-16 h-7 ">
                  <span>|</span> {value.time}
                </p>
              </div>
              <h1 className="text-sm scrollbar-hide mt-2 w-[60vw] h-24 overflow-y-scroll ">
                {value.about_food}
              </h1>
              <div className="bg-custom-main flex justify-center shadow-btn w-fit mt-2 py-2 px-4 rounded-lg">
                <Link to={"detail/"}>See Body</Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default CardRecipeBlog