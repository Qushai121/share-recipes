import React, { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/section/Header";
import { Link } from "react-router-dom";
import MenuFilter from "../components/MenuFilter";
import { UserAccContext } from "../context/userAcc";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Bookmark from "../components/Bookmark";
import Like from "../components/Like";
import Loading from "../components/Loading";

const CategoryMenu = [
  {
    link: "?/cate=breakfast",
    value: "Breakfast",
  },
  {
    link: "?/cate=dessert",
    value: "Dessert",
  },
  {
    link: "?/cate=fastfood",
    value: "Fast Food",
  },
  {
    link: "?/cate=vegan",
    value: "Vegan",
  },
  {
    link: "?/cate=asia",
    value: "AsianFood",
  },
  {
    link: "?/cate=asia",
    value: "WesternFood",
  },
  {
    link: "?/cate=seafood",
    value: "Seafood",
  },
];

const Home = () => {
  const { datas, loading, errors,refetch } = useFetch("http://localhost:3002/recipe");
  const [chefDatas, setChefDatas] = useState([]);
  // console.log(datas);
  useEffect(() => {
    getChef();
  }, []);
  // console.log(datas)

  const getChef = async () => {
    try {
      const result = await axios.get("http://localhost:3002/chef");
      setChefDatas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className=" font-inter">
      <div className="pt-3 pb-5">
        <Header />
        <div className="flex justify-center ">
          <Search />
        </div>
      </div>

      <div className="flex mx-8 justify-between">
        <h1 className="font-medium text-lg text-custom-dark ">Trending</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"trending"}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>
      <div className="">
{/* <button onClick={refetch} >Refetch</button> */}
      {/* TRENDING */}
        <div className="flex py-8 px-4 gap-4 overflow-x-scroll pt-4">
        {loading?<Loading msg="Getting Trending..." /> :<>
          {datas.map((value, index) => {
            return (
              <div
                key={index}
                className="relative bg-walter-white  pb-7 w-fit rounded-xl shadow-lg "
              >
                <button className="absolute flex flex-col w-10 p-1 top-1 right-2 ">
                {/* reuseable bookmark */}
                  <Bookmark bookmarks={value.recipeStatefull} 
                  style={'w-[20px] '} wrapper={' w-full flex flex-col items-center justify-center'} 
                  fill={''} />
    
                </button>

                <button className="absolute flex flex-col w-10 p-1 top-16 right-2 ">
                {/* reuseable heart/like */}
                  <Like recipeId={value?.recipeStatefull}
                  wrapper={' w-full flex flex-col items-center justify-center'}
                  style={'w-[24px] mx-auto pt-[1px] '} fill={''} />
                </button>

                {/* kirimkan value dari datas yang sudah di fetch di useFetch setelah itu kirimkan melalui tag Link  */}
                <Link to={"blog"} state={value}>
                  <img
                    className="h-32 w-full rounded-t-xl object-cover object-left-bottom"
                    src={`http://localhost:3002/${value.thumbnail_main}`}
                    alt=""
                  />
                  <div className="mx-4 mt-2 flex justify-between w-[50vw] font-inter font-thin [&>h1]:font-medium [&>h1]:text-lg ">
                    <div>
                      <h1 className="font-medium text-lg">{value.tittle}</h1>
                      <div className=" text-sm gap-4 font-light">
                        <h1>
                          Recipe by <span>{value?.User?.username}</span>
                        </h1>
                        <p>{value.time}</p>
                      </div>
                    </div>
                    <div className="bg-custom-main rounded-full h-10 w-14 ">
                    {value?.User?.avatar ? <img
                        className="w-16 h-14 object-cover object-center shadow-avatar rounded-full "
                        
                        src={`http://localhost:3002/${value?.User?.avatar}`}
                        alt=""
                      />
                    
                    :<img
                        className="w-12 h-12 shadow-avatar rounded-full "
                        src='http://localhost:3002/default-avatar.png'
                        alt=""
                      />
                    
                    }
                      
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          </>}
          <Link className="text-transparent flex items-center ">
            <img className="w-6 rounded-full " src="/icons/arrow.svg" alt="" />
            ss
          </Link>
        </div>
      </div>

      <div className="flex mx-8 justify-between">
        <h1 className="font-medium text-lg text-custom-dark ">Categories</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"categories"}
          state={CategoryMenu}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>
      <MenuFilter Category={CategoryMenu} />

      <div className="flex pb-10 pt-3 overflow-x-scroll">
        {CategoryMenu.map((value, index) => (
          <Link
            to={value.link}
            key={index}
            className="flex flex-col px-3 w-fit"
          >
            <div className=" relative py-20">
              <div className="bg-custom-main shadow-btn rounded-xl pt-16 flex flex-col items-center">
                <img
                  className="w-32 h-32 absolute shadow-xl object-cover object-center top-0 rounded-full border-8 border-custom-dark"
                  src="/img/pizza.png"
                  alt=""
                />
                <div className=" text-center w-44 pb-6">
                  <p className="whitespace-pre-line">Wagyu Rendang </p>
                  <p>by</p>
                  <p>Jacob Jones</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-between mx-8 pt-4">
        <h1 className="font-medium text-lg text-custom-dark">Popular Chef</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"trending"}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>

{/* POPULAR CHEF */}
      <div className="flex pb-10 pt-5 overflow-x-scroll">
        {chefDatas.map((value, index) => (
          <Link
            to={`chef/${value.id}`}
            // kita bisa kirim state chefDatas ke next link seperti dibawah ini
            state={value}
            key={index}
            className="flex flex-col px-3 w-fit"
          >
            <div className="bg-custom-main flex justify-center flex-col py-4 rounded-xl items-center ">
              <img
                className=" rounded-full w-12 h-12 object-cover shadow-xl"
                src={`http://localhost:3002/${value.avatar || "default-avatar.png"}`}
                alt=""
              />
              <p className="w-24 text-center overflow-x-scroll ">{value.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
