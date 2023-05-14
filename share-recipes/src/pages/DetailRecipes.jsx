import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import Like from "../components/Like";
import { Link } from "react-router-dom";

const DetailRecipes = () => {
  const [menu, setMenu] = useState("Ingredient");
  const state = useLocation().state;

  const stylea =
    "text-walter-white text-xl duration-300 font-semibold bg-custom-butbrown py-2 px-10 md:px-16 rounded-lg";
  const styleb =
    "text-xl font-semibold text-custom-butbrown duration-300 py-2 px-10 rounded-lg";

  return (
    <div className="flex flex-col font-inter  ">
      <div
        className="h-[40vh] xl:h-[50vh] 
        w-full relative  bg-cover bg-center"
        style={{
          backgroundImage: `url(http://localhost:3002/${state.thumbnail_main})`,
        }}
      >
        <div className="flex justify-between mx-4 py-3">
          <Link to={'/home'}>-- Go back</Link>
          <Bookmark
            recipeId={state?.recipeStatefull}
            style={"w-6 mx-auto "}
            fill={"white"}
          />
        </div>
        <div className=" h-56 md:h-60 xl:h-80 2xl:h-[23rem]
        w-full flex justify-center items-end ">
          {state?.time}
        </div>
      </div>
      <div className="bg-custom-main relative -mt-3 pt-4  rounded-t-2xl ">
        <div className="absolute -top-8 right-2  ">
          <Like
            recipeId={state?.recipeStatefull}
            pStyle={"text-[14px] -mt-1 "}
            style={"w-8"}
            fill={""}
            wrapper={
              "bg-custom-pink border-2 border-stone-300 shadow-xl w-fit py-1 px-3 rounded-full"
            }
          />
        </div>
        <div className="mx-6 xl:mx-20 
        rounded-t-xl bg-walter-white h-[100vh]">
          <div className="mx-4 
          xl:mx-40 py-6">
            <div>
              <h1 className="md:text-2xl
              text-xl font-semibold ">{state?.tittle}</h1>
              <h1 className="text-sm md:text-base
              font-light 
              ">{state?.about_food}</h1>
            </div>
            <div className="my-4 gap-4 flex">
              {state?.User?.avatar ? (
                <img
                  className="w-14 h-14 object-cover rounded-full "
                  src={`http://localhost:3002/${state?.User?.avatar}`}
                  alt=""
                />
              ) : (
                <img
                  className="w-14 h-14 rounded-full "
                  src="http://localhost:3002/default-avatar.png"
                  alt=""
                />
              )}
              <div className="flex flex-col" >
                <span className="">{state?.User?.username}</span>
                <Link to={`/chef/${state.UserId}`} className="bg-custom-main px-4 w-fit flex justify-center rounded-md font-light" >Chef Detail</Link>
              </div>
            </div>
            <hr className="bg-custom-dark h-[2px] my-2" />
            <div className=" scrollbar-hide overflow-scroll">
              <div className="flex mt-3 mb-5 justify-evenly ">
                <button
                  onClick={() => setMenu("Ingredient")}
                  className={menu === "Ingredient" ? stylea : styleb}
                >
                  Ingredient
                </button>
                <button
                  onClick={() => setMenu("Direction")}
                  className={menu === "Direction" ? stylea : styleb}
                >
                  Direction
                </button>
              </div>

              {menu === "Direction" ? (
                <div className="md:mx-10 md:text-lg font-normal
                whitespace-pre h-[50vh] leading-7 scrollbar-hide overflow-scroll ">
                  {state?.step}
                </div>
              ) : (
                <div className="md:mx-10 md:text-lg font-normal
                whitespace-pre h-[50vh] leading-7 scrollbar-hide overflow-scroll ">
                  {state?.ingredient}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipes;
