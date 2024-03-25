import React from "react"
import { useState } from "react"
import { useCreateTrip } from '../hooks/useCreateTrip'


export function NewTrip ({ createTrip ,setCreateTrip}){
    
    const [tripName, setTripName] = useState('')
    const [description, setDescription] = useState('')
    const {createNewTrip, error, isLoading} = useCreateTrip()


    const remove = ()=>{
        setCreateTrip(false)
    }

    const handleNameChange = (e) =>{
        e.preventDefault()
        setTripName(e.target.value)
    }

    const handleDescriptionChange = (e) =>{
        e.preventDefault()
        setDescription(e.target.value)
    }

    const handleSubmit = async(e)=>{
        
        e.preventDefault()
        await createNewTrip(tripName, description)
        console.log(error)
        
    }
    
    return(
        <div className="flex flex-col p-15 bg-orange-300 fixed center left-80 top-72 right-80 bottom-64 text-center align-middle shadow-2xl z-50">
            <div>Create a Trip</div>
            <br />
            <form onSubmit={handleSubmit} className="mb-7">
                <div>Name:</div>
                <input type="text" value={tripName} onChange={handleNameChange}/>
                <br /><br />
                <div>Description:</div>
                <input type="text" value={description} onChange={handleDescriptionChange} className="w-64 h-32"/>
                <br /><br />
                <input  type='submit' value='Submit' className='text-white bg-gray-500 inline-block mr-4'/>
                <div onClick={remove} className="bg-red-400 w-12 inline-block">Cancel</div>
                <br /><br />
                {error && <div>{error}</div>}
            </form>
            
        </div>
    )
}

 