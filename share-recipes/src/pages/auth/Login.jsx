import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

const Login = () => {
  const navigate = useNavigate()

  const [expss,setExpss] = useState('')
  const [decodes,setDecodes] = useState('')
  const [deco,setDeco] = useState('2000')

  const [dataInput,setDataInput] = useState({
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({
    email:'',
    password:''
  })

  const [success,setSuccess] = useState({})

  const handleInput = e =>{
    setDataInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
      try {
        const result = await axios.post("http://localhost:3002/login",dataInput)
        // refresh(result.data.accessToken)
        console.log(result)
        const decode = jwt_decode(result.data.accessToken)
        setDecodes(decode)
        navigate('/home')
        window.location.reload()
        // const expires =  new Date(decode.exp * 1000);
        // setExpss(String(expires).split(' ')[4])
      // setExpss(decode.exp)
        
      }catch(error){
        setErrors(error.response.data)
        // console.log(error.response.data[0])
      }
  }

// console.log(decodes)
  // console.log(expss)
  // useEffect(()=>{
  //   updateToken()
  // },[])
  // console.log(errors.email)
  // const updateToken = () => {
  //   const dateNow = new Date()
  //   console.log(dateNow.getTime())
  //   if(expss * 1000 == dateNow.getTime()){
  //     console.log(decodes,'aa')
  //   }
  // }
  // const axiosJwt = axios.create()
  // axios.interceptors.request.use(async(config)=>{
  //   const baru = new Date()
  //   // console.log(baru.getTime())
  //   if(expss * 1000 < baru.getTime()){
  //     console.log('abis')
  //   }
  //   return config;
  // },(error)=>{
  //   return Promise.reject(error)
  // })

// console.log(parseInt(expss))
//   const dateNow = Date().split(' ')[4]
//   console.log(dateNow)
//   if(dateNow == expss){
//     console.log('jalan refresh')
//   }else{
    
//   }
  // otomatis update si accesstoken
// useEffect(()=>{
//   const interval = setInterval(()=>{
//     console.log(expss)
//   },deco)

//   return()=>{
//     clearInterval(interval)
//   }
// },[decodes])
  // const refresh = async(token) =>{
  //   console.log(token)
  //   try {
  //     const result = await axios.get('http://localhost:3002/refresh',{
  //       headers:{
  //         Authorization:`Bearer ${token}`
  //       }
  //     })
  //   } catch (error) {
      
  //   }
  // }
  // console.log(dataInput)
  return (
    <div className="flex justify-center  font-roboto items-center bg-custom-main h-[100vh] ">
    <div className="bg-custom-main w-[93vw] text-custom-butbrown shadow-bg rounded-lg py-12 px-20" >
    <h1 className="text-xl font-semibold flex justify-center " >Login</h1>
      <form action="" method="post">
        <div className="flex flex-col
        [&>label]:text-xl [&>label]:font-medium [&>label]:my-2
        [&>input]:py-2 [&>input]:px-4 [&>input]:rounded-md [&>input]:shadow-lg
        ">
          <label htmlFor="email">Email</label>
          <input className={`${errors.email?'border-4 border-red-600' :'border-none'}`}
          onChange={handleInput} 
          type="email" name="email" />
           {errors.email &&<span className="inline-flex text-sm text-red-700">{errors.email}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></span>}

          <label htmlFor="password">password</label>
          <input className={`${errors.password?'border-4  border-red-600' :'border-none'}`}
          onChange={handleInput} 
          type="password" name="password" />
           {errors.password &&<span className="inline-flex text-sm text-red-700">{errors.password}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg></span>}

          <div className=" flex flex-col mt-4" >
          <button onClick={handleSubmit}
          className="py-3 bg-custom-main font-bold text-xl shadow-btn duration-200 active:translate-y-[7px] active:translate-x-[7px] active:shadow-none border border-yellow-800 rounded-md ">Login</button>
            <div className="text-[15px] mt-4 " >Don`t Have Account yet ? <Link to={'/signup'} className="text-blue-500 underline" >SignUp</Link></div>
          </div>
        </div>
      </form>
      <div className='flex justify-center mt-4' >&#169; copyright by uhuy.ltd</div>
    </div>
    </div>
  );
};

export default Login;
