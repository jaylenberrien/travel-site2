import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import axios from "axios";

export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} =  useAuthContext()

    const signup = async (username, password) =>{ 
        setIsLoading(true)
        setError(null)

        const body = {
            username,
            password
        }
         
        // const responseError = response.data.error

        try{
            const response = await axios.post('http://localhost:5000/auth/signup', body)
            if(response.status === 200){
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch({type: 'LOGIN', payload: response.data})
            }
        }
        catch (error){         
            console.error('Signup Error:', error)

            if (error.response){
                setError(error.response.data.error)
            }

            else{
                setError("An unexpected error occured, please try again.")
            }
            
        }
        finally{
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}