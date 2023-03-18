import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserAccContext = createContext()

export const UserAccContextProvider = ({children})=>{

    const[userDatas,setUserDatas] = useState({})

    useEffect(()=>{
        getMe()
    },[])

    // const getAccessToken = async() => {
    //     try {
    //         const result = await axios.get('http://localhost:3002/refresh')
    //         getMe(result.data.accessToken)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getMe = async(accessToken)=>{
        try {
            const result = await axios.get("http://localhost:3002/user",{
               
            })
            setUserDatas(result.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserAccContext.Provider value={{userDatas}} >
            {children}
        </UserAccContext.Provider>
    )
}