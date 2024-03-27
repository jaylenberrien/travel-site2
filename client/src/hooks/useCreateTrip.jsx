import { useState } from "react";
import axios from 'axios'

export const useCreateTrip = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const createNewTrip = async(name, description) =>{
        setIsLoading(true)
        setError(null)
    
        const body = {
            name,
            description
        }
    
        try {
            const response = await axios.post('http://localhost:5000/trip/create', body)
            
        } catch (error) {
            console.error('Create trip error:',error)

            if(error.response){
                setError(error.response.data.error)
            }
            
            else{
                setError("An unexpected error occured, please try again!")
            }
        }
        finally{
            setIsLoading(false)
        }    
    }
    return { createNewTrip, isLoading, error }
    
}