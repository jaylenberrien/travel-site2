import { useState } from "react"


export function NewTrip ({ createTrip ,setCreateTrip}){

    const remove = ()=>{
        setCreateTrip(false)
    }

    
    return(
        <div className="flex flex-col p-15 bg-orange-300 fixed center left-80 top-72 right-80 bottom-72 text-center align-middle shadow-2xl z-50">
            <div>Create a Trip</div>
            <br />
            <form className="mb-7">
                <div>Name:</div>
                <input type="text"/>
                <br /><br />
                <div>Description:</div>
                <input type="text" className="w-64 h-32"/>
            </form>
            <div onClick={remove} className="bg-red-400 w-12 mx-auto">Cancel</div>
        </div>
    )
}

