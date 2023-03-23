import React from "react";
import { useLocation } from "react-router-dom";
import Bookmark from "../components/Bookmark";
import Like from "../components/Like";

const DetailRecipes = () => {
  const state = useLocation().state;

  console.log(state.User.avatar);
  return (
    <div className="flex flex-col ">
      <div
        className="w-full relative z-auto h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(http://localhost:3002/${state?.thumbnail_main})`,
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
        <div className="absolute bottom-3 left-1/2 right-1/2 ">
          {state?.time}
        </div>
      </div>
      <div className="bg-custom-main relative z-50 -mt-3 rounded-t-2xl ">
        <div className="absolute -top-8 right-2  ">
          <Like
            likes={state?.recipeStatefull}
            pStyle={"text-[14px] -mt-1 "}
            style={"w-8"}
            wrapper={"bg-red-400 w-fit py-2 px-5 rounded-full"}
          />
        </div>
        <div className="mx-6 mt-5 rounded-t-xl bg-walter-white h-full">
          <div className="mx-4">
            <div>
              <h1>{state.tittle}</h1>
              <h1>{state.about_food}</h1>
            </div>
            <div className="my-2">
              {state?.User?.avatar ? (
                <img
                  className="w-16 h-14 object-cover rounded-full "
                  src={`http://localhost:3002/${state?.User?.avatar}`}
                  alt=""
                />
              ) : (
                <img
                  className="w-14 h-14 rounded-full "
                  src="/icons/user-avatar.svg"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipes;
