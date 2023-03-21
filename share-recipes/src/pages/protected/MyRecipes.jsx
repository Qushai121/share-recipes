import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { login } from "../../../../api/controller/authController";

const MyRecipes = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getRecipeByme();
  }, []);

  const getRecipeByme = async () => {
    try {
      const result = await axios.get("http://localhost:3002/recipeme");
      setDatas(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(datas[0])
  // console.log(datas[8].thumbnail_main)

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full ">
      <div className="bg-custom-main h-fit py-2 text-center rounded-lg px-4 mb-4 shadow-nav ">
        <Link to={"/dashboard/add"}>Add New Recipe</Link>
      </div>
      <div className="bg-custom-main py-2 px-4 rounded-lg">
        Your Card Apperance
      </div>
      {datas?.map((value, index) => {
        console.log(value.thumbnail_main)
        
        return(
        <div className="flex gap-2 flex-col">
          <div className="flex rounded-lg shadow-2xl resepcard justify-between py-6">
            <div className=" flex flex-col w-24 mx-2">
              <img
                className="object-cover object-center h-36 w-36 rounded-xl"
                src={`http://localhost:3002/${value.thumbnail_main}`}
                alt=""
              />
              <div className="flex justify-evenly">
                <button className="py-2 px-2">
                  <img
                    className="w-7"
                    src="/icons/heart-unchecked.svg"
                    alt=""
                  />
                </button>
                <button className="py-2 px-2">
                  <img
                    className="w-5"
                    src="/icons/bookmark-uncheck.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <div className="mx-2 ">
              <div className="flex justify-between ">
                <h1 className="text-xl font-medium font-roboto w-[45vw] overflow-x-auto whitespace-nowrap ">
                  Buaaaaaaabur Beku{" "}
                </h1>
                <p className="font-light overflow-x-scroll w-16 h-7 ">
                  <span>|</span> 20 min
                </p>
              </div>
              <h1 className="text-sm scrollbar-hide mt-2 w-[60vw] h-24 overflow-y-scroll ">
                Deskripsi singkat nanti sdsds sssssssssssssssssssssssss
                dwsdsdsdsdsd sds sdjumlah kata dibatasi, Ea illum veniam?
                Voluptatem cumque porro voluptatum esse
              </h1>
              <div className="bg-custom-main flex justify-center shadow-btn w-fit mt-2 py-2 px-4 rounded-lg">
                <Link to={"detail/"}>See Body</Link>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-300 shadow-green-400 shadow-xl h-fit py-2 text text-center rounded-lg px-6">
              Edit
            </div>
            <div className="bg-red-400 shadow-red-400 shadow-xl h-fit py-2 text-center rounded-lg px-4 ">
              Delete
            </div>
            {/* <div className="bg-blue-400 h-fit py-2 text-center rounded-lg px-4 " >Detail</div> */}
            <div className="bg-blue-400 shadow-blue-400 shadow-xl h-fit py-2 text-center rounded-lg px-4 ">
              Traffic
            </div>
          </div>
        </div>
      )})}
    </div>
  );
};

export default MyRecipes;
