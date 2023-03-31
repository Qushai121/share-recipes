import React, { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/section/Header";
import { Link } from "react-router-dom";
import MenuFilter from "../components/MenuFilter";
import axios from "axios";
import CardTrending from "../components/Card/CardTrending";
import { CategoryMenu } from "../components/data/Category";


const Home = () => {
  
  const [chefDatas, setChefDatas] = useState([]);
  // console.log(datas);
  useEffect(() => {
    getChef();
  }, []);
  // console.log(datas)
  const getChef = async () => {
    try {
      // pake proxy biar mudah 
      const result = await axios.get("/chef");
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
        <CardTrending/>
      <div className="flex mx-8 justify-between">
        <h1 className="font-medium text-lg text-custom-dark ">Categories</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"categories"}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>
      <MenuFilter />

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
                src={`http://localhost:3002/${
                  value.avatar || "default-avatar.png"
                }`}
                alt=""
              />
              <p className="w-24 text-center overflow-x-scroll ">
                {value.username}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
