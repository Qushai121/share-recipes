import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

// bikin sendiri bingung sendiri 🏴‍☠️
const AddRecipes = () => {
  const [img, setImg] = useState({
    thumbnail_main: false,
    thumbnail_second: false,
  });
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
    time: "00:00",
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
    e.preventDefault();
    console.log("aaa");
    try {
      const formData = new FormData();
      formData.append("file", image.thumbnail_main);
      const res = await axios.post("http://localhost:3002/upload", formData);
      setfile((prev) => ({ ...prev, thumbnail_main: res.data }));
      setImg((prev) => ({ ...prev, thumbnail_main: true }));
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
    e.preventDefault();
    console.log("aaa");
    try {
      const formData = new FormData();
      formData.append("file", image.thumbnail_second);
      const res = await axios.post("http://localhost:3002/upload", formData);
      setfile((prev) => ({ ...prev, thumbnail_second: res.data }));
      setImg((prev) => ({ ...prev, thumbnail_second: true }));
    } catch (error) {}
  };

  const handleInput = (e) => {
    setfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addRecipe = async (e) => {
    console.log("halo");
    try {
      await axios.post("http://localhost:3002/add/recipeme", file);
      // Navigate("home")
    } catch (error) {
      console.log(error);
    }
  };
  console.log(file);
  // console.log(img.thumbnail_main)
  return (
    <div className="flex flex-col">
      {/* <form onSubmit={kirim} encType='multipart/form-data' > */}

      <div className="flex flex-col gap-10">
        <div className="flex flex-col text-center gap-2">
            <p>Choose your Main Thumbnail</p>
          <div className="flex gap-2 mb-4 mx-auto " >
            <input
              required
              onChange={handleUploadChange}
              accept="image/*"
              type="file"
              name="thumbnail_main"
              class="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 py-1 w-56 focus:outline-none "
            />
            <button onClick={handleKirim}>Kirim Coy</button>
          </div>
            <p>Choose your Second Thumbnail</p>
          <div className="flex gap-2 mx-auto " >
            <input
              required
              onChange={handleUploadChanges}
              accept="image/*"
              type="file"
              name="thumbnail_second"
              class="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 py-1 w-56 focus:outline-none "
            />
            <button onClick={handleKirims}>Kirim Coy</button>
          </div>
        </div>
        <button></button>
        <form onSubmit={addRecipe} className="flex flex-col gap-6 w-96 mx-auto">
          <input
            onChange={handleInput}
            type="text"
            required
            name="tittle"
            id=""
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="about_food"
            id=""
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="ingredient"
            id=""
          />
          <input
            onChange={handleInput}
            type="time"
            value={file.time}
            required
            name="time"
            id=""
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="step"
            id=""
          />
          <input
            onChange={handleInput}
            type="text"
            required
            name="category"
            id=""
          />
          <button type="submit">Kirim database</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipes;
