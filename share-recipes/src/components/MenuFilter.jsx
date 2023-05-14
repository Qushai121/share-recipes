import React from "react";
import { Link } from "react-router-dom";
import { CategoryMenu } from "./data/Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const MenuFilter = ({ refetch }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
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
        <div className="flex pb-10  pt-3 overflow-x-scroll">
          {CategoryMenu.map((value, index) => (
            <SwiperSlide key={index}>
              <button onClick={refetch}>
                <Link to={value.link} key={index} className="py-2 px-3 ">
                  {/* <img className="rounded-lg shadow-xl" src={breakfast} alt="" /> */}
                  <p className="w-40 overflow-x-scroll scrollbar-hide px-6 text-center shadow-btn whitespace-pre bg-custom-main py-2 rounded-lg">
                    {value.value}
                  </p>
                </Link>
              </button>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default MenuFilter;
