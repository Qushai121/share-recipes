import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import Bookmark from "../Bookmark";
import Like from "../Like";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const CardTrending = () => {
  const { datas, loading, errors, refetch } = useFetch("/trending");

  return (
    <div className="my-2 ">
      {loading ? (
        <Loading wrapper={"my-5 ml-7"} msg="Getting Trending..." />
      ) : (
        <Swiper
          // does that actully work ? let find out
          slidesPerView={2}
          spaceBetween={120}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          
          breakpoints={{
            // when window width is >= 640px

            640: {
              // width:0,
              slidesPerView: 2,
              spaceBetween: 200,
            },
            768: {
              // width:0,
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1024: {
              // width:0,
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
          }}
        >
          {datas.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="h-[30vh] w-[60vw] md:w-[35vw] lg:h-[35vh] 2xl:w-[20vw] 
                   relative mx-4 my-2 pb-7 rounded-xl shadow-lg "
                >
                  <button className="absolute flex flex-col w-10 p-1 top-1 right-2 ">
                    {/* reuseable bookmark */}
                    <Bookmark
                      recipeId={value?.recipeStatefull}
                      style={"w-[20px] "}
                      wrapper={
                        " w-full flex flex-col items-center justify-center"
                      }
                      fill={"black"}
                    />
                  </button>

                  <button className="absolute flex flex-col w-10 p-1 top-16 right-2 ">
                    {/* reuseable heart/like */}
                    <Like
                      recipeId={value?.recipeStatefull}
                      wrapper={
                        " w-full flex flex-col  items-center justify-center"
                      }
                      style={"w-[24px] mx-auto pt-[1px] "}
                      fill={""}
                    />
                  </button>

                  {/* kirimkan value dari datas yang sudah di fetch di useFetch setelah itu kirimkan melalui tag Link  */}
                  <>
                    <Link to={"/detail"} state={value}>
                      <img
                        className="h-[60%] lg:h-[70%]
                         w-full rounded-t-xl object-cover object-left-bottom"
                        src={`http://localhost:3002/${value.thumbnail_main}`}
                        alt=""
                      />
                      <div className="mx-4 mt-2 flex justify-between font-inter font-thin [&>h1]:font-medium [&>h1]:text-lg ">
                        <div className="w-[70%]">
                          <h1 className=" scrollbar-hide font-medium overflow-x-scroll whitespace-nowrap h-6  text-lg">
                            {value.tittle}
                          </h1>
                          <div className=" text-sm gap-4 font-light">
                            <h1>
                              Recipe by <span>{value?.User?.username}</span>
                            </h1>
                            <p>{value.time}</p>
                          </div>
                        </div>
                        <div className="absolute right-3">
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
                        </div>
                      </div>
                    </Link>
                  </>
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
