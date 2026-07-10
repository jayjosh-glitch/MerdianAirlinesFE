import {RegisterUser} from "../services/appUserService";
import { useState } from "react";
import { Loginuser } from "../services/authService";

export const useAppUser = () => {

     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(false);

     const Register = async (formdata) => {
        try{
            setIsLoading(true);
            const response = await RegisterUser(formdata); ;
            return response;
        }catch (error) {
            setIsLoading(false);
            setError(error.response?.data?.message || "Something went wrong");
            throw error;
        }finally {
            setIsLoading(false);
        }
    }
    
    const Login = async (formdata) => {
        try{
            setIsLoading(true);
            const response = await Loginuser(formdata);
            console.log(response)
            return response;
        }catch (error) {
            setIsLoading(false);
            setError(error.response?.data?.message || "Something went wrong");
            throw error;
        }finally {
            setIsLoading(false);
        }
    }
    return { Register, Login, error, isLoading };
}

