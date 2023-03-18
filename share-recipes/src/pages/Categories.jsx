import React from "react";

import { Link, useLocation } from "react-router-dom";
import MenuFilter from "../components/MenuFilter";

const Categories = () => {
  const CategoryMenu = useLocation().state;

  return (
    <div className="font-inter">
      <div className="w-full flex pt-3 justify-center  ">
        <h1 className="w-fit px-36 shadow-tittle text-xl font-semibold py-4 bg-custom-main rounded-xl">
          Categories
        </h1>
      </div>
      <MenuFilter Category={CategoryMenu} />
      <div className="mx-auto w-[90vw] ">
        {CategoryMenu.map((value, index) => (
        <div className="flex rounded-lg shadow-lg resepcard justify-between py-6">
        <div className="w-32 h-32 mx-2" >
          <img className="object-cover object-center rounded-xl" src='/img/pizza.png' alt="" />
          <button className="flex justify-center w-full py-4" ><img className="w-5" src='/icons/bookmark-uncheck.svg' alt="" /></button>
        </div>
        
          <div className="mx-4 " >
            <div className="flex justify-between " >
              <h1 className="text-xl font-medium font-roboto w-[45vw] overflow-x-auto whitespace-nowrap " >Buaaaaaaabur Beku </h1>
              <p className="font-light overflow-x-scroll w-16 h-7 "><span>|</span> 20 min</p>
            </div>
            <h1 className="text-sm scrollbar-hide mt-2 w-[60vw] h-24 overflow-y-scroll " >
              Deskripsi singkat nanti sdsds sssssssssssssssssssssssss dwsdsdsdsdsd sds sdjumlah kata dibatasi, Ea  illum veniam? Voluptatem cumque porro
              voluptatum esse
            </h1>
            <div className="bg-custom-main flex justify-center shadow-btn w-fit mt-2 py-2 px-4 rounded-lg"  >
            <Link to={'detail/'} >Start Cook</Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
