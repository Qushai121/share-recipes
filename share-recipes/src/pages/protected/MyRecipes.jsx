import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useFetcher } from "react-router-dom";
import CardRecipeBlog from "../../components/Card/CardRecipeBlog";
// import { login } from "../../../../api/controller/authController";
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/Loading";

const MyRecipes = () => {

 const {datas,loading,errors} = useFetch("http://localhost:3002/recipeme")

  const deleteRecipeByMe = async (id) => {
    try {
     const  result = await axios.delete(`http://localhost:3002/delete/recipeme/${id}`)
     console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const lihatId = (id) => {
    console.log(id);
  };

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full ">
      <div className="bg-custom-main h-fit py-2 text-center rounded-lg px-4 mb-4 shadow-nav ">
        <Link to={"/dashboard/add"}>Add New Recipe</Link>
      </div>
      <div className="bg-custom-main py-2 px-4 text-center rounded-lg">
        Your Card Apperance
      </div>
      <div className="mx-auto ">

      {loading?<Loading msg='Searching Your Recipes....' /> : <>

      {datas?.result?.map((value, index) => {
        console.log(value.thumbnail_main);

        return (
          <div className="flex gap-2 flex-col">
            <CardRecipeBlog value={value} />
            <div className="flex gap-4">
              <button
                onClick={() => lihatId(value.id)}
                className="bg-green-300 shadow-green-400 cursor-pointer shadow-xl h-fit py-2 text text-center rounded-lg px-6"
              >
                <p>Edit</p>
              </button>
              <button onClick={()=>deleteRecipeByMe(value.id)} className="bg-red-400 shadow-red-400 shadow-xl h-fit py-2 text-center rounded-lg px-4 ">
                Delete
              </button>
              <button className="bg-blue-400 shadow-blue-400 shadow-xl h-fit py-2 text-center rounded-lg px-4 ">
                Traffic
              </button>
            </div>
          </div>
        );
      })}
      </>

    }

      </div>

    </div>
  );
};

export default MyRecipes;
