import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { TripEditor } from './TripEditor';
import { OldTrip } from './OldTrip'
import { NewTrip } from './NewTrip'
// import async from 'async.js'



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

  const Experience = async function(){
    try {
      let post = {locationId: id}
      const response = await axios.post('http://localhost:5000/search/location', post)
      const latitude = response.data.locationData.latitude;
      const longitude = response.data.locationData.longitude;
      setLatLong(latitude + "," + longitude)
    } catch (error) {
      console.log(error)
    }
  }

  const Experience13 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/restaurants', post)
    setRest1Location(response.data.restaurantData.data[0].name)
    setRest1LocationId(response.data.restaurantData.data[0].location_id)
  }


  const RestPics = async function(){
    let post2= {locationId: rest1LocationId}
    const response1 = await axios.post('http://localhost:5000/search/experience-pics', post2)
    setRest1LocationUrl(response1.data.expPicData.data[0].images.small.url)
  }



  useEffect(() =>{
    Experience()
    Experience13()
    RestPics()
  },[id, latLong, rest1Location, rest1LocationId,])


  const Experience14 = async function(){
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/restaurants', post)
    setRest2Location(response.data.restaurantData.data[1].name)
    setRest2LocationId(response.data.restaurantData.data[1].location_id)
  }


  const RestPics2 = async function(){
    let post2={locationId: rest2LocationId}
    const response2 = await axios.post('http://localhost:5000/search/experience-pics', post2)
    setRest2LocationUrl(response2.data.expPicData.data[0].images.small.url)      
  }

  useEffect(() =>{
    Experience()
    Experience14()
    RestPics2()
  },[id, latLong, rest2Location, rest2LocationId,])

  const Experience15 = async function(){
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/restaurants', post)
    setRest3Location(response.data.restaurantData.data[2].name)
    setRest3LocationId(response.data.restaurantData.data[2].location_id)
  }

  const RestPics3 = async function(){
    let post3={locationId: rest3LocationId}
    const response3 = await axios.post('http://localhost:5000/search/experience-pics', post3)
    setRest3LocationUrl(response3.data.expPicData.data[0].images.small.url)    
  }

  useEffect(() =>{
    Experience()
    Experience15()
    RestPics3()
  },[id, latLong, rest3Location, rest3LocationId,])



  const Experience16 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/hotels', post)
    setHotel1Location(response.data.hotelsData.data[0].name)
    setHotel1LocationId(response.data.hotelsData.data[0].location_id)
  }

  const HotelPics = async function(){
    let post={locationId: hotel1LocationId}
    const response = await axios.post('http://localhost:5000/search/experience-pics', post)
    setHotel1LocationUrl(response.data.expPicData.data[0].images.small.url)
  }

  useEffect(() =>{
    Experience()
    Experience16()
    HotelPics()
  },[id, latLong, hotel1Location, hotel1LocationId,])
  
  const Experience17 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/hotels', post)
    setHotel2Location(response.data.hotelsData.data[1].name)
    setHotel2LocationId(response.data.hotelsData.data[1].location_id)
  }

  const HotelPics2 = async function(){
    let post={locationId: hotel2LocationId}
    const response = await axios.post('http://localhost:5000/search/experience-pics', post)
    setHotel2LocationUrl(response.data.expPicData.data[0].images.small.url)
  }

  useEffect(() =>{
    Experience()
    Experience17()
    HotelPics2()
  },[id, latLong, hotel2Location, hotel2LocationId,])

  const Experience18 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/hotels', post)
    setHotel3Location(response.data.hotelsData.data[2].name)
    setHotel3LocationId(response.data.hotelsData.data[2].location_id)
  }

  const HotelPics3 = async function(){
    let post={locationId: hotel3LocationId}
    const response = await axios.post('http://localhost:5000/search/experience-pics', post)
    setHotel3LocationUrl(response.data.expPicData.data[0].images.small.url)
  }

  useEffect(() =>{
    Experience()
    Experience18()
    HotelPics3()
  },[id, latLong, hotel3Location, hotel3LocationId, ])

  const Experience19 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/attractions', post)
    setAttraction1Location(response.data.attractionsData.data[0].name)
    setAttraction1LocationId(response.data.attractionsData.data[0].location_id)
  }

  const AttractionPics = async function(){
    let post={locationId: attraction1LocationId}
    const response = await axios.post('http://localhost:5000/search/experience-pics', post)
    setAttraction1LocationUrl(response.data.expPicData.data[0].images.small.url)
  }

  useEffect(() =>{
    Experience()
    Experience19()
    AttractionPics()
  },[id, latLong, attraction1Location, attraction1LocationId,])

  const Experience20 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/attractions', post)
    setAttraction2Location(response.data.attractionsData.data[1].name)
    setAttraction2LocationId(response.data.attractionsData.data[1].location_id)
  }

  const AttractionPics2 = async function(){
    let post={locationId: attraction2LocationId}
    const response = await axios.post('http://localhost:5000/search/experience-pics', post)
    setAttraction2LocationUrl(response.data.expPicData.data[0].images.small.url)
  }

  useEffect(() =>{
    Experience()
    Experience20()
    AttractionPics2()
  },[id, latLong, attraction2Location, attraction2LocationId,])

  const Experience21 = async function(){ 
    let post = {locationInfo: latLong}
    const response = await axios.post('http://localhost:5000/search/attractions', post)
    setAttraction3Location(response.data.attractionsData.data[2].name)
    setAttraction3LocationId(response.data.attractionsData.data[2].location_id)
  }

  const AttractionPics3 = async function(){
    let post={locationId: attraction3LocationId}
    const response = await axios.post('http://localhost:5000/search/experience-pics', post)
    setAttraction3LocationUrl(response.data.expPicData.data[0].images.small.url)
  }

  useEffect(() =>{
    Experience()
    Experience21()
    AttractionPics3()
  },[id, latLong, attraction3Location, attraction3LocationId,])

  // useEffect(() =>{
  //   Experience()
  //   Experience13()
  //   Experience14()
  //   Experience15()
  //   Experience16()
  //   Experience17()
  //   Experience18()
  //   Experience19()
  //   Experience20()
  //   Experience21()

  // },[id, latLong])

  // useEffect(() =>{
  //   RestPics()
  //   RestPics2()
  //   RestPics3()
  //   HotelPics()
  //   HotelPics2()
  //   HotelPics3()
  //   AttractionPics()
  //   AttractionPics2()
  //   AttractionPics3()
  // },[rest1LocationId, rest2LocationId, rest3LocationId, hotel1LocationId, hotel2LocationId, hotel3LocationId, attraction1LocationId, attraction2LocationId, attraction3LocationId])
  
  


  return (
    <> 
  
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