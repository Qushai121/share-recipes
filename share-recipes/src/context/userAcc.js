import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserAccContext = createContext()

export const UserAccContextProvider = ({children})=>{

    const[userDatas,setUserDatas] = useState(null)
    const[errors,setErrors] = useState([])


    useEffect(()=>{
        getMe()
    },[])

    const getMe = async()=>{
        try {
            const result = await axios.get("/user",{
               
            })
            setUserDatas(result.data[0])
        } catch (error) {
            setErrors(error)
        }
    }

    return (
        <UserAccContext.Provider value={{userDatas,errors}} >
            {children}
        </UserAccContext.Provider>
    )
}