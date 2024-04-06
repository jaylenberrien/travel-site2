import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { TripEditor } from './TripEditor';
import { OldTrip } from './OldTrip'
import { NewTrip } from './NewTrip'
import { response } from 'express';



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
      let post = {
        locationId: id,
      }
      // const response = await 
      axios.post("http://localhost:5000/search/location", post)
      // .then(response =>{

      // })
      const latitudeData = response.data.locationData.latitude
      const longitudeData = response.data.locationData.longitude 
      setLatLong(latitudeData + "," + longitudeData)
      console.log(latLong)

      
      let post2 = {
        locationInfo: latLong
      }
      const response2 = await axios.post('http://localhost:5000/search/restaurants', post2)
      const restaurant1Name = response2.data.restaurantData.data[0].name
      setRest1Location(restaurant1Name)
      const restaurant1Id = response2.data.restaurantData.data[0].location_id
      setRest1LocationId(restaurant1Id)
      const restaurant2Name = response2.data.restaurantData.data[1].name
      setRest2Location(restaurant2Name)
      const restaurant2Id = response2.data.restaurantData.data[1].location_id
      setRest2LocationId(restaurant2Id)
      const restaurant3Name = response2.data.restaurantData.data[2].name
      setRest3Location(restaurant3Name)
      const restaurant3Id = response2.data.restaurantData.data[2].location_id
      setRest3LocationId(restaurant3Id)

  

      let post3={locationId: rest1LocationId}
      // console.log(post)
      const response3 = await axios.post('http://localhost:5000/search/experience-pics', post3)
      const rest1PicUrl = response3.data.expPicData.data[0].images.small.url
      setRest1LocationUrl(rest1PicUrl)
   

  

      let post4={locationId: rest2LocationId}
      // console.log(post2)
      const response4 = await axios.post('http://localhost:5000/search/experience-pics', post4)
      const rest2PicUrl = response4.data.expPicData.data[0].images.small.url
      setRest2LocationUrl(rest2PicUrl)
    
    

      let post5={locationId: rest3LocationId}
      // console.log(post3)
      const response5 = await axios.post('http://localhost:5000/search/experience-pics', post5)
      const rest3PicUrl = response5.data.expPicData.data[0].images.small.url
      setRest3LocationUrl(rest3PicUrl)
    

      let post6 = {locationInfo: latLong}
      
      const response6 = await axios.post('http://localhost:5000/search/hotels', post6)
      const hotel1Name = response6.data.hotelsData.data[0].name
      setHotel1Location(hotel1Name)
      const hotel1Id = response6.data.hotelsData.data[0].location_id
      setHotel1LocationId(hotel1Id)
      const hotel2Name = response6.data.hotelsData.data[1].name
      setHotel2Location(hotel2Name)
      const hotel2Id = response6.data.hotelsData.data[1].location_id
      setHotel2LocationId(hotel2Id)
      const hotel3Name = response6.data.hotelsData.data[2].name
      setHotel3Location(hotel3Name)
      const hotel3Id = response6.data.hotelsData.data[2].location_id
      setHotel3LocationId(hotel3Id)


      let post7={locationId: hotel1LocationId}
      // console.log(post)
      const response7 = await axios.post('http://localhost:5000/search/experience-pics', post7)
      const hotel1PicUrl = response7.data.expPicData.data[0].images.small.url
      setHotel1LocationUrl(hotel1PicUrl)
  



      let post8={locationId: hotel2LocationId}
      // console.log(post2)
      const response8 = await axios.post('http://localhost:5000/search/experience-pics', post8)
      const hotel2PicUrl = response8.data.expPicData.data[0].images.small.url
      setHotel2LocationUrl(hotel2PicUrl)
      
    

      let post9={locationId: hotel3LocationId}
      // console.log(post3)
      const response9 = await axios.post('http://localhost:5000/search/experience-pics', post9)
      const hotel3PicUrl = response9.data.expPicData.data[0].images.small.url
      setHotel3LocationUrl(hotel3PicUrl)

      let post10 = {locationInfo: latLong}
      
      const response10 = await axios.post('http://localhost:5000/search/attractions', post10)
      const attraction1Name = response10.data.attractionsData.data[0].name
      setAttraction1Location(attraction1Name)
      const attraction1Id = response10.data.attractionsData.data[0].location_id
      setAttraction1LocationId(attraction1Id)
      const attraction2Name = response10.data.attractionsData.data[1].name
      setAttraction2Location(attraction2Name)
      const attraction2Id = response10.data.attractionsData.data[1].location_id
      setAttraction2LocationId(attraction2Id)
      const attraction3Name = response10.data.attractionsData.data[2].name
      setAttraction3Location(attraction3Name)
      const attraction3Id = response10.data.attractionsData.data[2].location_id
      setAttraction3LocationId(attraction3Id)

  
      
      
      let post11 ={locationId: attraction1LocationId}
      // console.log(post)
      const response11 = await axios.post('http://localhost:5000/search/experience-pics', post11)
      const attraction1LocationUrl = response11.data.expPicData.data[0].images.small.url
      setAttraction1LocationUrl(attraction1LocationUrl)
      console.log(attraction1LocationUrl)
    
  
  
      let post12={locationId: attraction2LocationId}
      // console.log(post2)
      const response12 = await axios.post('http://localhost:5000/search/experience-pics', post12)
      const attraction2LocationUrl = response12.data.expPicData.data[0].images.small.url
      console.log(attraction2LocationUrl)
      setAttraction2LocationUrl(attraction2LocationUrl)
    
    
  
      let post13={locationId: attraction3LocationId}
      // console.log(post3)
      const response13 = await axios.post('http://localhost:5000/search/experience-pics', post13)
      const attraction3LocationUrl = response13.data.expPicData.data[0].images.small.url
      console.log(attraction3LocationUrl)
      setAttraction3LocationUrl(attraction3LocationUrl)
  
  
      

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{

    Experience()
    
  

    

    // Experience2()
    // RestPics()
    // RestPics2()
    // RestPics3()

    
    // Experience4()
    // HotelPics()
    // HotelPics2()
    // HotelPics3()

  
    // Experience6()
    // AttractionPics()
    // AttractionPics2()
    // AttractionPics3()
    
  },[id, latLong]);


  

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

