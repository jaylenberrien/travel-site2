import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


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
  const [attraction3LocationUrl, setAttractioon3LocationUrl] = useState()
  const [attraction3LocationId, setAttraction3LocationId] = useState()

  useEffect(()=>{
    const Experience = async function(){
      try {
        let post = {
          locationId: id,
        }
        const response = await axios.post("http://localhost:5000/search/location", post)
        const latitudeData = response.data.locationData.latitude
        const longitudeData = response.data.locationData.longitude 
        setLatLong(latitudeData + "," + longitudeData)
        // console.log(latLong)
      } catch (error) {
        console.log(error)
      }
    }

    const Experience2 = async function(){
      try {
        let post = {
          locationInfo: latLong
        }
        const response = await axios.post('http://localhost:5000/search/restaurants', post)

        const restaurant1Name = response.data.restaurantData.data[0].name
        setRest1Location(restaurant1Name)
        const restaurant1Id = response.data.restaurantData.data[0].location_id
        setRest1LocationId(restaurant1Id)

        const restaurant2Name = response.data.restaurantData.data[1].name
        setRest2Location(restaurant2Name)
        const restaurant2Id = response.data.restaurantData.data[1].location_id
        setRest2LocationId(restaurant2Id)

        const restaurant3Name = response.data.restaurantData.data[2].name
        setRest3Location(restaurant3Name)
        const restaurant3Id = response.data.restaurantData.data[2].location_id
        setRest3LocationId(restaurant3Id)
      } catch (error) {
        console.log(error)
      }

    }

    const RestPics = async function(){
      try {
        let post={locationId: rest1LocationId}
        // console.log(post)
        const response1 = await axios.post('http://localhost:5000/search/experience-pics', post)
        const rest1PicUrl = response1.data.expPicData.data[0].images.small.url
        setRest1LocationUrl(rest1PicUrl)
     
      } catch (error) {
        console.log(error)
      }
    }

    const RestPics2 = async function(){
      let post2={locationId: rest2LocationId}
      // console.log(post2)
      const response2 = await axios.post('http://localhost:5000/search/experience-pics', post2)
      const rest2PicUrl = response2.data.expPicData.data[0].images.small.url
      setRest2LocationUrl(rest2PicUrl)
     

    }

    const RestPics3 = async function(){
      let post3={locationId: rest3LocationId}
      // console.log(post3)
      const response3 = await axios.post('http://localhost:5000/search/experience-pics', post3)
      const rest3PicUrl = response3.data.expPicData.data[0].images.small.url
      setRest3LocationUrl(rest3PicUrl)

    }

    const Experience4 = async function(){
      try {
        let post = {
          locationInfo: latLong
        }
        
        const response = await axios.post('http://localhost:5000/search/hotels', post)

        const hotel1Name = response.data.hotelsData.data[0].name
        setHotel1Location(hotel1Name)
        const hotel1Id = response.data.hotelsData.data[0].location_id
        setHotel1LocationId(hotel1Id)

        const hotel2Name = response.data.hotelsData.data[1].name
        setHotel2Location(hotel2Name)
        const hotel2Id = response.data.hotelsData.data[1].location_id
        setHotel2LocationId(hotel2Id)

        const hotel3Name = response.data.hotelsData.data[2].name
        setHotel3Location(hotel3Name)
        const hotel3Id = response.data.hotelsData.data[2].location_id
        setHotel3LocationId(hotel3Id)
      } catch (error) {
        console.log(error)
      }

    }

    const HotelPics = async function(){
      try {
        let post={locationId: hotel1LocationId}
        // console.log(post)
        const response = await axios.post('http://localhost:5000/search/experience-pics', post)
        const hotel1PicUrl = response.data.expPicData.data[0].images.small.url
        setHotel1LocationUrl(hotel1PicUrl)
     
      } catch (error) {
        console.log(error)
      }
    }

    const HotelPics2 = async function(){
      let post2={locationId: hotel2LocationId}
      // console.log(post2)
      const response2 = await axios.post('http://localhost:5000/search/experience-pics', post2)
      const hotel2PicUrl = response2.data.expPicData.data[0].images.small.url
      setHotel2LocationUrl(hotel2PicUrl)
     

    }

    const HotelPics3 = async function(){
      let post3={locationId: hotel3LocationId}
      // console.log(post3)
      const response3 = await axios.post('http://localhost:5000/search/experience-pics', post3)
      const hotel3PicUrl = response3.data.expPicData.data[0].images.small.url
      setHotel3LocationUrl(hotel3PicUrl)


    }

    const Experience6 = async function(){
      try {
        let post = {
          locationInfo: latLong
        }
        
        const response = await axios.post('http://localhost:5000/search/attractions', post)

        const attraction1Name = response.data.attractionsData.data[0].name
        setAttraction1Location(attraction1Name)
        const attraction1Id = response.data.attractionsData.data[0].location_id
        setAttraction1LocationId(attraction1Id)

        const attraction2Name = response.data.attractionsData.data[1].name
        setAttraction2Location(attraction2Name)
        const attraction2Id = response.data.attractionsData.data[1].location_id
        setAttraction2LocationId(attraction2Id)

        const attraction3Name = response.data.attractionsData.data[2].name
        setAttraction3Location(attraction3Name)
        const attraction3Id = response.data.attractionsData.data[2].location_id
        setAttraction3LocationId(attraction3Id)
      } catch (error) {
        console.log(error)
      }

    }

    Experience()
    Experience2()
    Experience4()
    RestPics()
    RestPics2()
    RestPics3()
    
    HotelPics()
    HotelPics2()
    HotelPics3()
    Experience6()

    
   
    
    
  })

  return (
    <div className='h-screen flex bg-green-800'>
      <div>
        <div className='my-14'>Experience {nickname} </div>
        <div className='grid grid-cols-4'>
          <div className=' m-4'>
            <p>Restaurants</p>
            <p>Indulge in some of the food to to eat in {nickname}</p>
          </div>
          <div className='bg-red-300 m-4'>
            <img src={rest1LocationUrl} />
            <p>{rest1Location}</p>
          </div>
          <div className='bg-red-300 m-4'>
            <img src={rest2LocationUrl} />
            <p>{rest2Location}</p>
          </div>
          <div className='bg-red-300 m-4'>
            <img src={rest3LocationUrl} />
            <p>{rest3Location}</p>
          </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-2'>
            <div className=' m-4'>
              <p>Places to stay</p>
              <p>Places to stay during your trip</p>
            </div>
            <div className='bg-red-300 m-4'>
              <img src={hotel1LocationUrl} />
              <p>{hotel1Location}</p>
            </div>
            <div className='bg-red-300 m-4'>
              <img src={hotel1LocationUrl} />
              <p>{hotel2Location}</p>
            </div>
            <div className='bg-red-300 m-4'>
              <img src={hotel1LocationUrl} />
              <p>{hotel3Location}</p>
            </div>
            <div className=' m-4'>
              <p>Fun attractions</p>
              <p>Unique attractions and fun this city has to offer</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>{attraction1Location}</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>{attraction2Location}</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>{attraction3Location}</p>
            </div>

      </div>
        
      
    </div>
    </div>

  )
}

