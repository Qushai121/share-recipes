import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    // console.log(url)
    const [datas,setDatas] = useState([])
    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState(false)

    useEffect(()=>{
        const getData = async() => {
            setLoading(true)
            try {
                const result = await axios.get(url)
                setDatas(result.data)
              } catch (error) {
                setErrors(error)
              }
              setLoading(false)
        }
        getData()
    },[url])

    return {datas,loading,errors}
}

export default useFetch;