import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export const useLogin = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} =  useAuthContext()
    const navigate = useNavigate()

    const login = async (username, password) =>{ 
        setIsLoading(true)
        setError(null)

        const body = {
            username,
            password
        }
         
        // const responseError = response.data.error

        try{
            const response = await axios.post('http://localhost:5000/auth/login', body)
            if(response.status === 200){
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch({type: 'LOGIN', payload: response.data})
                navigate('/search')
            }
        }
        catch (error){         
            console.error('login Error:', error)

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
    return { login, isLoading, error }
}