import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import CardRecipeBlog from "./Card/CardRecipeBlog";
import Loading from "./Loading";

const Search = () => {
  const [tittle, setTittle] = useState("");
  const [container, setContainer] = useState(false);
  const tittleQuery = useLocation().search;

  const searchTittle = (e) => {
    setTittle(e.target.value);
    setContainer(true)
  };

  const { datas, errros, loading, refetch } = useFetch(
    `/search/?tittle=${tittle}`
  );

  return (
    <div className="flex flex-col ">
      <div className="relative w-fit shadow-2xl">
        <input
          onChange={searchTittle}
          className="py-3 w-[35vh] rounded-lg "
          type="text"
          placeholder=" Search for recipes...."
        />
        <Link onClick={()=>setContainer(true)}
          className="absolute bottom-[1px] right-1 pb-3 px-2 text-transparent"
        >
          ssss
          <img className="w-5" src="/icons/search.svg" alt="" />
        </Link>
      </div>
      {!container ? <></> :
      <div className="w-full flex justify-center" >
      <div className=" absolute w-[98vw] h-[40vh] shadow-2xl scrollbar-hide overflow-y-scroll top-52 z-50 py-10 bg-walter-white ">
      <div className="mx-2 relative " >
      <button onClick={()=>setContainer(false)} className=" bg-custom-main py-2 px-4 rounded-xl  " >Close</button>
      {loading ? <Loading wrapper={'py-20'} msg={'Searching Your Request....'} /> : 
        datas.map((value, index) => (
          <CardRecipeBlog value={value} />
        ))
      }
      </div>
      </div>
      </div>
      }
    </div>
  );
};

export default Search;
