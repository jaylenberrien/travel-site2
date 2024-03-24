import { useState } from "react"
import { OldTripOpt } from "./OldTripOpt"

export function OldTrip ({ showTrips, setShowTrips }){

    const remove = () =>{
        setShowTrips(false)
    }
    
    return(
        <div className="flex flex-col p-15 bg-pink-300 fixed center left-80 top-72 right-80 bottom-72 text-center align-middle shadow-2xl z-50">
            <div>Select Trip</div>
            <OldTripOpt />
            <div onClick={remove} className="bg-red-400 w-12 mx-auto">Cancel</div>
        </div>
    )
}

