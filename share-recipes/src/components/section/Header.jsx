import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAccContext } from "../../context/userAcc";


const Header = () => {

  const {userDatas,errors} = useContext(UserAccContext)
  // console.log(userDatas == null)
  return (
    <>
      <div className="flex py-6 mx-8 justify-between ">
        <div>
        <h1 className="text-2xl font-semibold">
            Hello 
            <span className="text-custom-dark"> {userDatas?.username || 'Guest '}</span>
          </h1>
          <p className="text-sm font-light ">What do you like to cook?</p>
        </div>
        <div className="group px-7 relative">
        {userDatas? 
        <>
        <img className="w-16 h-16 object-cover rounded-full" 
        src={`http://localhost:3002/${userDatas.avatar || 'default-avatar.png'}`} alt="" />
          <div className="absolute group-hover:scale-100 duration-200 scale-0 z-20 -left-2 bg-custom-light px-4 rounded-xl py-4 " >
            <Link to={'/dashboard'} >Dashboard</Link>
          </div>
        
        </>   
        :<>
        <img className="w-10 " src="/icons/login.svg" alt="" />
        <div className="absolute group-hover:scale-100 duration-200 scale-0 z-20 right-3 bg-custom-light px-4 rounded-xl py-4 " >
            <Link to={'/login'} >Login</Link>
          </div>
        </>
        }
        </div>
      </div>
      
    </>
  );
};

export default Header;
