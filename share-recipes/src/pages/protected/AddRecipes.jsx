import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

// bikin sendiri bingung sendiri 🏴‍☠️
const AddRecipes = () => {
  const [img,setImg] = useState({
    thumbnail_main: false,
    thumbnail_second: false,
  })
  const [image, setImage] = useState({
    thumbnail_main: "",
    thumbnail_second: "",
  });
  const [file, setfile] = useState({
    tittle: "",
    thumbnail_main: "",
    thumbnail_second: "",
    about_food: "",
    ingredient: "",
    time: "",
    step: "",
    category: "",
  });

  // blm perfek kirim fotonya next project di bagusin
  // ini main thumbnail
  const handleUploadChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const files = e.target.files[0];         
    
    setImage((prev) => ({ ...prev, [name]: files }));
    // handleKirim(name, file);
  };

  const handleKirim = async (e) => {

    e.preventDefault()
    console.log('aaa')
    try {
      const formData = new FormData();
      formData.append("file", image.thumbnail_main);
      const res = await axios.post("http://localhost:3002/upload", formData);
      setfile((prev) => ({ ...prev, 'thumbnail_main': res.data }));
      setImg((prev) => ({ ...prev, 'thumbnail_main': true }))
      // addRecipe()
    } catch (error) {}
  };

  // ini second thumbnail
  const handleUploadChanges = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const files = e.target.files[0];         
    
    setImage((prev) => ({ ...prev, [name]: files }));
    // handleKirim(name, file);
  };

  const handleKirims = async (e) => {
    e.preventDefault()
    console.log('aaa')
    try {
      const formData = new FormData();
      formData.append("file", image.thumbnail_second);
      const res = await axios.post("http://localhost:3002/upload", formData);
      setfile((prev) => ({ ...prev, 'thumbnail_second': res.data }));
      setImg((prev) => ({ ...prev, 'thumbnail_second': true }))

    } catch (error) {}
  };

const handleInput = (e) =>{

  setfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}
                                   

  const addRecipe = async (e) => {
    console.log("halo");
    try {
      await axios.post("http://localhost:3002/add/recipeme", file);
      setfile(null)
      // Navigate("home")
    } catch (error) {
      console.log(error);
    }
  };
console.log(file)
// console.log(img.thumbnail_main)
  return (
    <div className="flex flex-col">
      {/* <form onSubmit={kirim} encType='multipart/form-data' > */}
      <img className="w-44" src={image} alt="" />
      <div className="flex flex-col gap-10">
      {img.thumbnail_main == true ?<>terkirim</>:<>

      <input
          onChange={handleUploadChange}
          // fungsi dari accept agar hanya menerima image 
          accept="image/*"
          type="file"
          name="thumbnail_main"
        />
      <button onClick={handleKirim}>Kirim Coy</button>
      </>
      }
        {img.thumbnail_second == true ?<>terkirim</>:<>


        <input
          onChange={handleUploadChanges}
          // fungsi dari accept agar hanya menerima image
          accept="image/*"
          type="file"
          name="thumbnail_second"
        />
      <button onClick={handleKirims}>Kirim Coys</button>
        </>
        }
       <input onChange={handleInput} type="text" name="tittle" id="" />
       <input onChange={handleInput} type="text" name="about_food" id="" />
       <input onChange={handleInput} type="text" name="ingredient" id="" />
       <input onChange={handleInput} type="text" name="time" id="" />
       <input onChange={handleInput} type="text" name="step" id="" />
       <input onChange={handleInput} type="text" name="category" id="" />
      </div>
      <button onClick={addRecipe}>Kirim database</button>
    </div>
  );
};

export default AddRecipes;
