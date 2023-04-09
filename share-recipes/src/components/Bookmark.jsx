import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Bookmark = ({ recipeId, style, wrapper, fill }) => {
  const [bookmarkss, setBookmarkss] = useState([]);
  // const [bookmarkByme, setBookmarkByMe] = useState([]);

  const bookmark = kFormatter(bookmarkss?.bookmark);

  /* setiap 999 di konfersi ke k */
  const { datas, loading, errors, refetch } = useFetch(
    `/bookmarkme/${recipeId.id}`
  );

  const getBookmark = async () => {
    try {
      const result = await axios.post(`/getbookmark/${recipeId.id}`);
      setBookmarkss(result.data[0]);
      refetch();
    } catch (error) {}
  };

  useEffect(() => {
    getBookmark();
  }, []);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  const giveBookmark = async () => {
    try {
      const hasil = await axios.post(`/bookmark/${recipeId.id}`);
      console.log(hasil);
      getBookmark();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {datas[0]?.myBookmark == bookmarkss.recipeId ? (
            <div className={wrapper}>
              <div className={style}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill={fill}
                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192
         400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.
         5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                  />
                </svg>
              </div>
              <p className="text-[10px] scrollbar-hide flex justify-center overflow-x-scroll">
                {bookmark || "0"}
              </p>
            </div>
          ) : (
            <div className={wrapper}>
              <div onClick={() => giveBookmark()} className={style}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill={fill}
                    d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 
0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 
3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                  />
                </svg>
              </div>
              <p className="text-[10px] flex scrollbar-hide justify-center overflow-x-scroll">
                {bookmark || "0"}
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Bookmark;
