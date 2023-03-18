import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  // navigate
  const navigate = useNavigate()

  // state start here
  const [inputData,setInputData] = useState({
    username:'',
    email:'',
    password:'',
    confpassword:''
  })
  
  const [errors,setErrors] = useState({
    username:'',
    email:'',
    password:'',
    confpassword:'',
  })
  
  const [succes,setSucces] = useState('')
  // state end here
  
  
  const handleInput = e => {
    setInputData((prev)=>({...prev,[e.target.name]:e.target.value}))
      
    }
    // console.log(inputData)
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const result = await axios.post("http://localhost:3002/register",inputData)
         setSucces(result.data)
         setTimeout(()=>{
           navigate("/login")
         },1000)
      } catch (error) {
        console.log(error.response.data)
        setErrors(error.response.data)
        for(let i = 0;i < error.response.data?.errors.length;i++){
          setErrors((prev)=>({...prev, [error.response.data.errors[i].param]:error.response.data.errors[i].msg}))
        }
      }
    }

    // console.log(succes)
// console.log(inputData)
// console.log(errors)
  return (
    <div className="flex justify-center font-roboto bg-custom-main items-center h-[100vh] ">
    <div className="bg-custom-main text-custom-butbrown shadow-bg rounded-lg py-12 px-20" >
    <h1 className="text-xl font-medium flex  justify-center " >Signup</h1>
    {succes && <span className='text-lg mt-2 text-green-500 bg-walter-white rounded-lg py-1 px-2 flex justify-center' >{succes}</span>}
      <form action="" method="post">
        <div className="flex flex-col
        [&>label]:text-xl [&>label]:font-medium [&>label]:my-2
        [&>input]:py-2 [&>input]:px-4 [&>input]:rounded-md [&>input]:shadow-lg
        ">
          {/* username */}
          <label htmlFor="username">Username</label>
          <input className={`${errors.username?'border-4 border-red-600' :'border-none'}`}
           onChange={handleInput} type="text" name="username"  />
          {errors.username &&<span className="inline-flex text-sm text-red-700">{errors.username}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></span>}


          {/* email */}
          <label htmlFor="email">Email</label>
          <input className={`${errors.email?'border-4 border-red-600' :'border-none'}`}
          onChange={handleInput} type="email" name="email"  />
          {errors.email &&<span className="inline-flex text-sm text-red-700">{errors.email}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></span>}

          {/* password */}
          <label htmlFor="password">password</label>
          <input className={`${errors.password?'border-4 border-red-600' :'border-none'}`}
          onChange={handleInput} type="password" name="password"  />
          {errors.password &&<span className="inline-flex text-sm text-red-700">{errors.password}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></span>}

          {/* confirm password */}
          <label htmlFor="confpassword">Confim password</label>
          <input className={`${errors.confpassword?'border-4 border-red-600' :'border-none'}`}
          onChange={handleInput} type="password" name="confpassword"  />
          {errors.confpassword &&<span className="inline-flex text-sm text-red-700">{errors.confpassword}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></span>}

          {/* submit buttton  */}
          <div className=" flex flex-col mt-4" >
          <button onClick={handleSubmit} className="py-3 bg-custom-main font-bold text-xl shadow-btn duration-200 active:translate-y-[7px] active:translate-x-[7px] active:shadow-none border border-yellow-800 rounded-md 
          ">SignUp</button>
            <div className="text-[15px] mt-4 " >Already Have an a account ? <Link to={'/login'} className="text-blue-500 underline" >Login</Link></div>
          </div>
        </div>
      </form>
      <div className='flex justify-center mt-4' >&#169; copyright by uhuy.ltd</div>
    </div>
    </div>
  )
}

export default SignUp