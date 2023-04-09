import React, { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/section/Header";
import { Link } from "react-router-dom";
import MenuFilter from "../components/MenuFilter";
import axios from "axios";
import CardTrending from "../components/Card/CardTrending";
import { CategoryMenu } from "../components/data/Category";
import useFetch from "../hooks/useFetch";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../components/Loading";

const Home = () => {
  const [chefDatas, setChefDatas] = useState([]);
  const { datas, loading } = useFetch("/recipe");
  useEffect(() => {
    getChef();
  }, []);

  const getChef = async () => {
    try {
      // pake proxy biar mudah
      const result = await axios.get("/chef");
      setChefDatas(result.data[0].data);
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

      <div className="flex mx-8 mt-6 justify-between">
        <h1 className="font-medium text-lg md:text-[20px] text-custom-dark ">Trending</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"trending"}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>
      <CardTrending />
      <div className="flex mx-8 mt-7 mb-1 justify-between">
        <h1 className=" md:text-[20px] font-medium text-lg text-custom-dark ">Categories</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"categories"}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>
      <MenuFilter />
      <div>
        {loading ? (
          <Loading wrapper={"my-5 ml-7"} msg={"Getting category..."} />
        ) : (
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={200}
              breakpoints={{
                // when window width is >= 640px

                768: {
                  // width:0,
                  slidesPerView: 4,
                  spaceBetween: 70,
                },
                1024: {
                  // width:0,
                  slidesPerView: 5,
                  spaceBetween: 100,
                },

                1440: {
                  slidesPerView: 7,
                  spaceBetween: 100,
                },
                1536: {
                  slidesPerView: 10,
                  spaceBetween: 100,
                },
              }}
            >
              {datas.slice(0, 15).map((value, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={"/detail"}
                    state={value}
                    className="flex flex-col px-3 w-fit"
                  >
                    <div className=" relative py-20">
                      <div className="bg-custom-main shadow-btn rounded-xl pt-16 flex flex-col items-center">
                        <img
                          className="w-32 h-32 absolute shadow-xl object-cover object-center top-0 rounded-full border-8 border-custom-dark"
                          src={`/${
                            value.thumbnail_main || "default-avatar.png"
                          }`}
                          alt=""
                        />
                        <div className=" text-center h-32 overflow-y-scroll scrollbar-hide w-44 pb-6">
                          <p className="whitespace-pre-line">{value.tittle}</p>
                          <p>by</p>
                          <p>{value.User.username}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>

      <div className="flex justify-between mx-8 pt-4">
        <h1 className=" md:text-[24px] font-medium text-lg text-custom-dark">Popular Chef</h1>
        <Link
          className="flex justify-center items-center gap-2 "
          to={"trending"}
        >
          <p className="text-custom-second">See all</p>
          <img className="w-5 " src="/icons/arrow.svg" alt="" />
        </Link>
      </div>

      {/* POPULAR CHEF */}
      <div className="my-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={2}
          breakpoints={{
            // when window width is >= 640px

            768: {
              // width:0,
              slidesPerView: 5,
              spaceBetween: 50
            },
            1024: {
              // width:0,
              slidesPerView: 7,
              spaceBetween: 100,
            },

            1440: {
              slidesPerView: 10,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 13,
              spaceBetween: 50,
            },
          }}
        >
          {chefDatas.map((value, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/chef/${value.id}`}
                key={index}
                className="flex flex-col px-3 w-fit"
              >
                <div className="w-32 h-44 bg-custom-main flex flex-col rounded-xl items-center ">
                  <img
                    className=" rounded-full w-16 mt-4 h-16 object-cover shadow-xl"
                    src={`http://localhost:3002/${
                      value.avatar || "default-avatar.png"
                    }`}
                    alt=""
                  />
                  <p className="w-24 text-center  mt-7 scrollbar-hide overflow-x-scroll ">
                    {value.username}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
