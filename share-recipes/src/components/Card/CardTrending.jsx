import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import Bookmark from "../Bookmark";
import Like from "../Like";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const CardTrending = () => {
  const { datas, loading, errors, refetch } = useFetch("/trending");

  return (
    <div className="my-2">
      {loading ? (
        <Loading wrapper={'my-5 ml-7'} msg="Getting Trending..." />
      ) : (
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={2}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
          {datas.map((value, index) => {
            return (
              <SwiperSlide key={index} className="mx-8 ">
                <div className="relative bg-walter-white h-[30vh] pb-7 w-[60vw] rounded-xl shadow-lg ">
                  <button className="absolute flex flex-col w-10 p-1 top-1 right-2 ">
                    {/* reuseable bookmark */}
                    <Bookmark
                      bookmarks={value.recipeStatefull}
                      style={"w-[20px] "}
                      wrapper={
                        " w-full flex flex-col items-center justify-center"
                      }
                      fill={""}
                    />
                  </button>

                  <button className="absolute flex flex-col w-10 p-1 top-16 right-2 ">
                    {/* reuseable heart/like */}
                    <Like
                      recipeId={value?.recipeStatefull}
                      wrapper={
                        " w-full flex flex-col items-center justify-center"
                      }
                      style={"w-[24px] mx-auto pt-[1px] "}
                      fill={""}
                    />
                  </button>

                  {/* kirimkan value dari datas yang sudah di fetch di useFetch setelah itu kirimkan melalui tag Link  */}
                  <Link to={"/detail"} state={value}>
                    <img
                      className="h-32 w-full rounded-t-xl object-cover object-left-bottom"
                      src={`http://localhost:3002/${value.thumbnail_main}`}
                      alt=""
                    />
                    <div className="mx-4 mt-2 flex justify-between  font-inter font-thin [&>h1]:font-medium [&>h1]:text-lg ">
                      <div>
                        <h1 className=" scrollbar-hide font-medium overflow-x-scroll whitespace-nowrap w-[36vw] h-6  text-lg">
                          {value.tittle}
                        </h1>
                        <div className=" text-sm gap-4 font-light">
                          <h1>
                            Recipe by <span>{value?.User?.username}</span>
                          </h1>
                          <p>{value.time}</p>
                        </div>
                      </div>
                      <>
                        {value?.User?.avatar ? (
                          <img
                            className="w-16 h-14 object-cover object-center shadow-avatar rounded-full "
                            src={`http://localhost:3002/${value?.User?.avatar}`}
                            alt=""
                          />
                        ) : (
                          <img
                            className="w-12 h-12 shadow-avatar rounded-full "
                            src="http://localhost:3002/default-avatar.png"
                            alt=""
                          />
                        )}
                      </>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default CardTrending;
