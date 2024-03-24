
import { OldTrip } from "./OldTrip";
import { NewTrip } from "./NewTrip";
import { useState } from "react";

export function TripEditor({ showSelector, setShowComponent }) {
  const [showTrips, setShowTrips] = useState(false);

  const handleCancelClick = () => {
    setShowComponent(false);
  };

  //old trips
  const handleShowTrips = () => {
    setShowTrips(true);
  };

  //new trips
  const [createTrip, setCreateTrip] = useState(false)
  
  const makeTrip = () =>{
    setCreateTrip(true)
  }

  return (
    <div className="flex flex-col p-15 bg-blue-300 fixed center left-80 top-72 right-80 bottom-72 text-center align-middle shadow-2xl z-40">
      <div className="bg-purple-400 my-auto">
        <div onClick={handleShowTrips} className=" bg-red-400 my-4 h-24 w-60 mx-auto flex">
          <div className="mx-auto my-auto">Add to trip</div>
        </div>
        {showTrips && <OldTrip showTrips={showTrips} setShowTrips={setShowTrips} />}
        <div>or</div>
        <div onClick={makeTrip} className=" bg-red-400 mt-4 h-24 w-60 mx-auto flex">
          <div className="mx-auto my-auto">Create new trip</div>
        </div>
        {createTrip && < NewTrip createTrip={createTrip} setCreateTrip={setCreateTrip}/>}
      </div>
      <div onClick={handleCancelClick} className="mb-2 bg-red-400 w-12 mx-auto">
        Cancel
      </div>
    </div>
  );
}