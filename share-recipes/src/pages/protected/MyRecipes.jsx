import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useFetcher } from "react-router-dom";
import CardRecipeBlog from "../../components/Card/CardRecipeBlog";
// import { login } from "../../../../api/controller/authController";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

const MyRecipes = () => {
  const { datas, loading, errors,refetch } = useFetch("/recipeme");

  const deleteRecipeByMe = async (id) => {
    try {
      const result = await axios.delete(
        `/delete/recipeme/${id}`
      );
      refetch()
    } catch (error) {
      console.log(error);
    }
  };

  const lihatId = (id) => {
  };

  // console.log(datas)

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full pt-7 ">
      <div className="bg-custom-main h-fit py-2 text-center rounded-lg px-4 mb-4 shadow-nav ">
        <Link to={"/dashboard/add"}>Add New Recipe</Link>
      </div>
      <div className="bg-custom-main py-2 px-4 text-center rounded-lg">
        Your Card Apperance
      </div>
      <div className="mx-auto ">
        {datas?.result?.length <= 0 ? (
          <>Make Your First Recipe</>
        ) : (
          <>
            {loading ? (
              <Loading msg="Searching Your Recipes...." />
            ) : (
              <>
                {datas?.result?.map((value, index) => (
                  <div key={index} className="flex gap-2 flex-col">
                    <CardRecipeBlog value={value} />
                    <div className="flex gap-4 mx-6 ">
                    <Link
                        state={value} to={'edit'}
                        className="bg-green-300 shadow-green-400 shadow-xl h-fit py-2 text-center rounded-lg px-6"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteRecipeByMe(value.id)}
                        className="bg-red-400 shadow-red-400 shadow-xl h-fit py-2 text-center rounded-lg px-4 "
                      >
                        Delete
                      </button>
                      <button className="bg-blue-400 shadow-blue-400 shadow-xl h-fit py-2 text-center rounded-lg px-4 ">
                        Traffic
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyRecipes;
