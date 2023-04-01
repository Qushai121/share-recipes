import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const ChefDetail = () => {
  const { id } = useParams();
  // const [totalLike,setTotalLike] = useState()
  // console.log(id);

  const { datas, loading } = useFetch(`/chef/${id}`);
  console.log(datas[1]?.totalLike);
  return (
    <>
      <header>
        <Link to={"/home"}>Go Back</Link>
        <div className="flex flex-col items-center">
          <img
            className=" rounded-full border-2 border-custom-main w-20 h-20 object-cover shadow-xl"
            src={`/${datas[0]?.avatar || "default-avatar.png"}`}
            alt=""
          />
          <p className="mt-1">{datas[0]?.username}</p>
          {/* nanti ada field profil kalo g males 😪 */}
          <hr className="h-[2px] mt-3 bg-custom-second w-80" />
          <div className="flex gap-5 my-3" >
            <div className="flex flex-col text-lg font-semibold text-center">
              <p>{datas[0]?.recipes?.length}</p>
              <p className="font-light" >Post</p>
            </div>
            <div className="border-l-4 h-11 my-auto border-custom-main "></div>
            <div className="flex flex-col text-lg font-semibold text-center">
              <p>{datas[1]?.totalLike}</p>
              <p className="font-light" >Like</p>
            </div>
          </div>
        </div>
      </header>
      <div className=" w-[93vw] mx-auto relative ">
        <div className="flex w-full py-10 flex-wrap-reverse">
          {datas[0]?.recipes.map((value, index) => {
            return (
              <Link key={index} to={"/detail"} state={value}>
                <img
                  className="m-1 w-[90px] h-[90px] object-cover shadow-xl"
                  src={`/${value.thumbnail_main || "default-avatar.png"}`}
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChefDetail;
