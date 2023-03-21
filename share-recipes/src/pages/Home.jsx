import React, { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/section/Header";
import { Link } from "react-router-dom";
import MenuFilter from "../components/MenuFilter";
import { UserAccContext } from "../context/userAcc";
import axios from "axios";
import useFetch from "../hooks/useFetch";

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
  const { datas, loading, errors } = useFetch("http://localhost:3002/recipe");
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
        <div className="flex py-8 px-4 gap-4 overflow-x-scroll pt-4">
          {datas.map((value, index) => {
            const bookmark = (kFormatter(value.recipeStatefull?.bookmark));
            {/* setiap 999 di konfersi ke k */}
            function kFormatter(num) {
              return Math.abs(num) > 999
                ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
                : Math.sign(num) * Math.abs(num);
            }
            const like = (kFormatter(value.recipeStatefull?.like));
            {/* console.log(like) */}

            return (
              <div
                key={index}
                className="relative bg-walter-white  pb-7 w-fit rounded-xl shadow-lg "
              >
                <button className="absolute flex flex-col w-10 p-1 top-1 right-2 ">
                  <img
                    className="w-[20px] mx-auto pt-[2px] "
                    src="/icons/bookmark-uncheck.svg"
                    alt=""
                  />

                  <p className="text-[10px] mx-auto overflow-x-scroll">{bookmark || '0'}</p>
                </button>
                <button className="absolute flex flex-col w-10 p-1 top-16 right-2 ">
                  <img
                    className="w-[24px] mx-auto pt-[1px] "
                    src="/icons/heart-unchecked.svg"
                    alt=""
                  />

                  <p className="text-[10px] mx-auto overflow-x-scroll">{like || '0'}</p>
                </button>
                {/* kirimkan value dari datas yang sudah di fetch di useFetch setelah itu kirimkan melalui tag Link  */}
                <Link to={"blog"} state={value}>
                  <img
                    className="h-32 w-full rounded-t-xl object-cover object-left-bottom"
                    src="/img/pizza.png"
                    alt=""
                  />
                  <div className="mx-4 mt-2 flex justify-between w-[50vw] font-inter font-thin [&>h1]:font-medium [&>h1]:text-lg ">
                    <div>
                      <h1 className="font-medium text-lg">{value.tittle}</h1>
                      <div className=" text-sm gap-4 font-light">
                        <h1>
                          Recipe by <span>{value.maker}</span>
                        </h1>
                        <p>20 min</p>
                      </div>
                    </div>
                    <div className="bg-custom-main rounded-2xl h-10 w-10 ">
                      <img
                        className="w-full h-full shadow-avatar rounded-2xl py-2"
                        src="/icons/user-avatar.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
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
                className=" rounded-full w-11 shadow-xl"
                src={`${value.avatar || "/icons/user-avatar.svg"}`}
                alt=""
              />
              <p className="w-24 text-center">{value.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
