import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, redirect, useLocation } from 'react-router-dom';
import { CategoryMenu } from '../../components/data/Category';
import Like from '../../components/Like';

const EditRecipes = () => {
    const state = useLocation().state;
    

  const [menu, setMenu] = useState("Ingredient");

const stylea =
  "text-walter-white text-xl duration-300 font-semibold bg-custom-butbrown py-2 px-10 rounded-lg";
const styleb =
  "text-xl font-semibold text-custom-butbrown duration-300 py-2 px-10 rounded-lg";

const menuChange = (e, menu) => {
  e.preventDefault();
  setMenu(menu);
};

const [img, setImg] = useState({
  thumbnail_main: false,
  thumbnail_second: false,
});
const [image, setImage] = useState({
  thumbnail_main: "",
  thumbnail_second: "",
});
const [file, setfile] = useState({
    id:state?.id,
  tittle: state?.tittle,
  thumbnail_main: state?.thumbnail_main,
  thumbnail_second: state?.thumbnail_second,
  about_food: state?.about_food,
  ingredient: state?.ingredient,
  time: state?.time,
  step: state?.step,
  category: state?.category,
});


// console.log(state)
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
  // console.log("aaa");
  try {
    const formData = new FormData();
    formData.append("file", image.thumbnail_second);
    const res = await axios.post("http://localhost:3002/upload", formData);
    setfile((prev) => ({ ...prev, thumbnail_second: res.data }));
    setImg((prev) => ({ ...prev, thumbnail_second: true }));
  } catch (error) {
    console.log(error)
  }
};

const handleInput = (e) => {
  setfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const addRecipe = async (e) => {
  // console.log("halo");
  try {
    await axios.patch("http://localhost:3002/edit/recipeme", file);
    // Navigate("home")
    window.location.href = 'http://localhost:3000/dashboard/myrecipes'

  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="flex flex-col font-inter ">
      <div
        className="w-full relative z-auto h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(http://localhost:3002/${state?.thumbnail_main})`,
        }}
      >
        <div className="flex justify-between mx-4 py-3">
          <p>Cancel</p>
          {/* <Bookmark recipeId={null} style={"w-6 mx-auto "} fill={"white"} /> */}
        </div>
        <div className="flex flex-col items-center">
          <span>Thumbnail Main</span>
          
          <input
            required
            onChange={handleUploadChange}
            accept="image/*"
            type="file"
            name="thumbnail_main"
            className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 py-1 w-56 focus:outline-none "
          />
          <button onClick={handleKirim}>Kirim Coy</button>
          <span className="mt-4">Thumbnail Second</span>
          {/* <p>{state?.thumbnail_main}</p> */}
          <input
            required
            onChange={handleUploadChanges}
            accept="image/*"
            type="file"
            name="thumbnail_second"
            className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 py-1 w-56 focus:outline-none "
          />
          <button onClick={handleKirims}>Kirim Coy</button>
        </div>

        <div className="absolute flex flex-col bottom-3 left-48 ">
          <label htmlFor="" className="absolute -top-4 w-24 -left-2 ">
            Cook Time
          </label>
          <input
            onChange={handleInput}
            type="time"
            defaultValue={file.time}
            required
            name="time"
            className="bg-walter-white "
          />
        </div>
        <div>
          <div className="flex gap-5">
            <span>Category</span>
            <select onChange={handleInput} required name="category">
              {CategoryMenu.map((value, index) => {
                if(value.value == state?.category){
                 return <option selected defaultValue={value.value}>{value.value}</option>;
                }else{
                 return <option defaultValue={value.value}>{value.value}</option>;
                }
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-custom-main relative h-full -mt-3 rounded-t-2xl ">
        <div className="absolute -top-8 right-2  ">
        
        </div>
        <form
          onSubmit={addRecipe}
          className="mx-6 mt-5 rounded-t-xl bg-walter-white h-full"
        >
          <div className="mx-4 py-6">
            <div>
              <h1 className="text-xl font-semibold ">
                <input
                  onChange={handleInput}
                  type="text"
                  defaultValue={state?.tittle}
                  required
                  name="tittle"
                  className="bg-walter-white"
                  placeholder="Input Your Tittle"
                />
              </h1>
              <h1 className="text-sm font-light ">
                <textarea
                  placeholder="About Your Food"
                  className="bg-walter-white scrollbar-hide"
                  onChange={handleInput}
                  type="text"
                  required
                  name="about_food"
                  cols="45"
                  rows="0"
                  defaultValue={state?.about_food}
                ></textarea>
              </h1>
            </div>
            <div className="my-2 gap-4 flex">
              {state?.User.avatar ? (
                <img
                  className="w-14 h-14 object-cover rounded-full "
                  src={`http://localhost:3002/${state?.User.avatar}`}
                  alt=""
                />
              ) : (
                <img
                  className="w-14 h-14 rounded-full "
                  src="http://localhost:3002/default-avatar.png"
                  alt=""
                />
              )}
              <span className="">{state?.User.username}</span>
            </div>
            <hr className="bg-custom-dark h-[2px] " />
            <div>
              <div className="flex my-2 justify-evenly ">
                <button
                  onClick={(e) => menuChange(e, "Ingredient")}
                  className={menu === "Ingredient" ? stylea : styleb}
                >
                  Ingredient
                </button>
                <button
                  onClick={(e) => menuChange(e, "Direction")}
                  className={menu === "Direction" ? stylea : styleb}
                >
                  Direction
                </button>
              </div>
              <div className="relative h-[60vh]">
                <div
                  className={` ${
                    menu === "Direction" ? "block" : "hidden"
                  } absolute whitespace-pre scrollbar-hide overflow-x-scroll`}
                >
                  <textarea
                    placeholder=" Share Your Direction To Help Other User"
                    className="bg-walter-white leading-none "
                    onChange={handleInput}
                    type="text"
                  defaultValue={state?.step}
                    name="step"
                    cols="37"
                    rows="30"
                  ></textarea>
                </div>

                <div
                  className={` ${
                    menu === "Ingredient" ? "block" : "hidden"
                  } absolute whitespace-pre leading-10 scrollbar-hide overflow-x-scroll`}
                >
                  <textarea
                    placeholder=" Share Your Ingredient To Help Other User"
                    className="bg-walter-white leading-none"
                  defaultValue={state?.ingredient}
                    
                    onChange={handleInput}
                    type="text"
                    name="ingredient"
                    cols="37"
                    rows="30"
                  ></textarea>
                </div>
              </div>
              <hr className="w-full bg-custom-second h-1 my-5" />
              <button
                type="submit"
                className="bg-custom-main py-4 px-6 rounded-lg flex justify-center w-full"
              >
                Share Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditRecipes