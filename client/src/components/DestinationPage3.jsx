import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { TripEditor } from './TripEditor';
import { OldTrip } from './OldTrip'



export default function DestinationPage3 () {
  const { id } = useParams();
  const { nickname } = useParams()

  const [latLong, setLatLong] = useState()
  const [rest1Location, setRest1Location] = useState()
  const [rest1LocationId, setRest1LocationId] = useState()
  const [rest1LocationUrl, setRest1LocationUrl] = useState()
  const [rest2LocationId, setRest2LocationId] = useState()
  const [rest2LocationUrl, setRest2LocationUrl] = useState()
  const [rest2Location, setRest2Location] = useState()
  const [rest3Location, setRest3Location] = useState()
  const [rest3LocationUrl, setRest3LocationUrl] = useState()
  const [rest3LocationId, setRest3LocationId] = useState()

  const [hotel1Location, setHotel1Location] = useState()
  const [hotel1LocationUrl, setHotel1LocationUrl] = useState()
  const [hotel1LocationId, setHotel1LocationId] = useState()
  const [hotel2LocationId, setHotel2LocationId] = useState()
  const [hotel2LocationUrl, setHotel2LocationUrl] = useState()
  const [hotel2Location, setHotel2Location] = useState()
  const [hotel3Location, setHotel3Location] = useState()
  const [hotel3LocationUrl, setHotel3LocationUrl] = useState()
  const [hotel3LocationId, setHotel3LocationId] = useState()

  const [attraction1Location, setAttraction1Location] = useState()
  const [attraction1LocationUrl, setAttraction1LocationUrl] = useState()
  const [attraction1LocationId, setAttraction1LocationId] = useState()
  const [attraction2LocationId, setAttraction2LocationId] = useState()
  const [attraction2LocationUrl, setAttraction2LocationUrl] = useState()
  const [attraction2Location, setAttraction2Location] = useState()
  const [attraction3Location, setAttraction3Location] = useState()
  const [attraction3LocationUrl, setAttraction3LocationUrl] = useState()
  const [attraction3LocationId, setAttraction3LocationId] = useState()

  const [showSelector, setShowComponent] = useState(false)

  const handleSelectClick = () =>{
    setShowComponent(true);
  }

  

  return (
    <> 
      {/* <TripEditor /> */}
      {/* < OldTrip /> */}
      <div className='h-screen flex bg-green-800'>
        <div>
          <div className='my-14'>Experience {nickname} </div>
          <div className='grid grid-cols-4'>
            <div className=' m-4'>
              <p>Restaurants</p>
              <p>Indulge in some of the food to to eat in {nickname}</p>
            </div>
            <div class='frame icon-func' >
              {/* <img src='./imgs/add.png' /> */}
              <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
              {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
              <img src={rest1LocationUrl} />
              <p>{rest1Location}</p>
            </div>
            <div class='frame icon-func' >
              <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
              {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
              <img src={rest2LocationUrl} />
              <p>{rest2Location}</p>
            </div>
            <div class='frame icon-func' >
              <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
              {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
              <img src={rest3LocationUrl} />
              <p>{rest3Location}</p>
            </div>
          </div>
          <div className='grid grid-cols-4 grid-rows-2'>
          <div className=' m-4'>
            <p>Places to stay</p>
            <p>Places to stay during your trip</p>
          </div>
          <div class='frame icon-func' >
            <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
            {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
            <img src={hotel1LocationUrl} />
            <p>{hotel1Location}</p>
          </div>
          <div class='frame icon-func' >
            <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
            {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
            <img src={hotel2LocationUrl} />
            <p>{hotel2Location}</p>
          </div>
          <div class='frame icon-func' >
            <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
            {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
            <img src={hotel3LocationUrl} />
            <p>{hotel3Location}</p>
          </div>
          <div className=' m-4'>
            <p>Fun attractions</p>
            <p>Unique attractions and fun this city has to offer</p>
          </div>
          <div class='frame icon-func' >
            <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
            {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
            <img src={attraction1LocationUrl} />
            <p>{attraction1Location}</p>
          </div>
          <div class='frame icon-func' >
            <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
            {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
            <img src={attraction2LocationUrl} />
            <p>{attraction2Location}</p>
          </div>
          <div class='frame icon-func' >
            <img onClick={handleSelectClick} class='icon icon-func' src='https://cdn-icons-png.flaticon.com/128/10024/10024212.png' />
            {showSelector && <TripEditor showSelector={showSelector} setShowComponent={setShowComponent}/>}
            <img src={attraction3LocationUrl} />
            <p>{attraction3Location}</p>
          </div>
         </div>
        </div>
      </div>
    </>
    

  )
}

