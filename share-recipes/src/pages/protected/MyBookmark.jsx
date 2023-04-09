import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CardRecipeBlog from "../../components/Card/CardRecipeBlog";
import Loading from "../../components/Loading";

const MyBookmark = () => {
  const { datas, loading, errors } = useFetch(`/getallbookmark`);

  // const coba = [
  //   {id:22},
  //   {id:2},
  //   {id:3},
  //   {id:4},
  //   {id:5},
  //   {id:9},
  // ]

  const hasil = datas.map((data)=> {return data})
 const newList = hasil.sort().reverse()
  
  return (
    <div className="mx-4">
      <div className="bg-custom-main py-2 px-4 text-center rounded-lg">
        Your Bookmark Recipe
      </div>
      <div className="my-6">
        {loading ? (
          <Loading msg={"Getting Your Bookmark List..."} />
        ) : (
          <>
            {datas == null ? (
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
// const MyBookmark = () => {
//   const [bookmark, setBookmark] = useState([]);

//   const getBookmark = async () => {
//     const result = await axios.get("/getallbookmark");
//     setBookmark(result.data);
//   };
//   useEffect(() => {
//     getBookmark();
//   }, []);

//   let element = [];
//   for (let i = 0; i < bookmark[0]?.length; i++) {
//     // yang penting jalan aja dulu yagesya
//     element.push(bookmark[0][i].myBookmark);
//     // next di kalo ada ilmu di perbaiki
//   }
//   const { datas, loading, errors, refetch } = useFetch(`/recipe?id=${element}`);
//   return (
//     <div className="mx-4">
//       <div className="bg-custom-main py-2 px-4 text-center rounded-lg">
//         Your Bookmark Recipe
//       </div>
//       <div className="my-6">
//         {loading ? (
//           <Loading msg={"Getting Your Bookmark List..."} />
//         ) : (
//           <>
//             {datas == null ? (
//               <></>
//             ) : (
//               <>
//                 {datas.map((value) => (
//                   <CardRecipeBlog value={value} />
//                 ))}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

export default MyBookmark;
