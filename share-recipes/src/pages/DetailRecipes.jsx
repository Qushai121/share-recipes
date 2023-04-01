import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import Like from "../components/Like";
import { Link } from "react-router-dom";

const DetailRecipes = () => {
  const [menu, setMenu] = useState("Ingredient");
  const state = useLocation().state;
  const stylea =
    "text-walter-white text-xl duration-300 font-semibold bg-custom-butbrown py-2 px-10 rounded-lg";
  const styleb =
    "text-xl font-semibold text-custom-butbrown duration-300 py-2 px-10 rounded-lg";

  return (
    <div className="flex flex-col  font-inter ">
      <div
        className="w-full relative  z-auto h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(http://localhost:3002/${state.thumbnail_main})`,
        }}
      >
        <div className="flex justify-between mx-4 py-3">
          <p>-- Go back</p>
          <Bookmark
            bookmarks={state?.recipeStatefull}
            style={"w-6 mx-auto "}
            fill={"white"}
          />
        </div>
        <div className="w-full h-56 flex justify-center items-end ">
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
        <div className="mx-6 rounded-t-xl bg-walter-white h-[80vh]">
          <div className="mx-4 py-6">
            <div>
              <h1 className="text-xl font-semibold ">{state?.tittle}</h1>
              <h1 className="text-sm font-light ">{state?.about_food}</h1>
            </div>
            <div className="my-2 gap-4 flex">
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
                <Link to={`/chef/${state.UserId}`} className="bg-custom-main px-4 w-fit flex justify-center rounded-xl font-light" >Chef Detail</Link>
              </div>
            </div>
            <hr className="bg-custom-dark h-[2px] " />
            <div className=" scrollbar-hide overflow-scroll">
              <div className="flex my-2 justify-evenly ">
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
                <div className="whitespace-pre h-[50vh] scrollbar-hide overflow-scroll ">
                  {state?.step}
                </div>
              ) : (
                <div className="whitespace-pre h-[50vh] scrollbar-hide overflow-scroll ">
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
