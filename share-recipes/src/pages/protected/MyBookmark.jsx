import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CardRecipeBlog from "../../components/Card/CardRecipeBlog";
import Loading from "../../components/Loading";

const MyBookmark = () => {
  const { datas, loading, errors } = useFetch(`/getallbookmark`);

  

  const hasil = datas.map((data)=> {return data})
 const newList = hasil.sort().reverse()
  
  return (
    <div className="mx-4 pt-5">
      <div className="bg-custom-main py-2 px-4 text-center rounded-lg">
        Your Bookmark Recipe
      </div>
      <div className="my-6">
        {loading ? (
          <Loading msg={"Getting Your Bookmark List..."} />
        ) : (
          <>
            {errors ? (
              <></>
            ) : (
              <>
                {newList.map((value) => (
                  <CardRecipeBlog value={value} />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};


export default MyBookmark;
