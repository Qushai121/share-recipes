import React from "react";

import { Link, useLocation } from "react-router-dom";
import CardRecipeBlog from "../components/Card/CardRecipeBlog";
import Loading from "../components/Loading";
import MenuFilter from "../components/MenuFilter";
import useFetch from "../hooks/useFetch";

const Categories = () => {
  const cate = useLocation().search;

  const { datas, loading, errors, refetch } = useFetch(`/recipe${cate}`);

  return (
    <div className="font-inter">
      <div className="w-full flex pt-3 justify-center  ">
        <h1 className="w-fit px-36 shadow-tittle text-xl font-semibold py-4 bg-custom-main rounded-xl">
          Categories
        </h1>
      </div>
      <MenuFilter refetch={datas} />
      {loading ? (
        <Loading wrapper={'py-5 pl-5 '} msg={"Please Wait ...."} />
      ) : (
        <div className="mx-auto w-[90vw] gap-4 flex flex-col ">
          {datas.map((value, index) => (
            <CardRecipeBlog value={value} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
