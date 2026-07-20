import { useState } from "react"
import {CreateRequest} from "../../src/services/SupportService"

const useSupport = () => {

     const [isLoading, setIsLoading]  = useState(true)
     const [error, setError]          = useState(null)
  
     const AddRequest = async (formdata) => {
          try{
            setIsLoading(true)
            const result = await CreateRequest(formdata)
            console.log(result)
            return result
          }catch(er){
            setError(er.response?.data?.message || "Failed to Create request")
          }finally{
            setIsLoading(false)
          }
     }
    return {isLoading, error, AddRequest}
}

export default useSupport