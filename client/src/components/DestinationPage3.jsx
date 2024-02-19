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
        console.log(latLong)
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

    const Experience3 = async function(){
      try {
        let post={
          locationId: rest1LocationId
        }
        const response = await axios.post('http://localhost:5000/search/photos', post)
        const rest1PicUrl = response.data.picData.data[0].images.small.url
        console.log(rest1PicUrl)
      } catch (error) {
        console.log(error)
      }
    }
    Experience()
    Experience2()
    Experience3()
  },[id])

  return (
    <div className='h-screen flex bg-green-800'>
      <div>
        <div className='my-14'>Experience {nickname} </div>
        <div className='grid grid-cols-4'>
          <div className=' m-4'>
            <p>Restaurants</p>
            <p>Indulge in some of the best places to eat in {nickname}</p>
          </div>
          <div className='bg-red-300 m-4'>
            <p>this is where the pic will go</p>
            <p>{rest1Location}</p>
          </div>
          <div className='bg-red-300 m-4'>
            <p>this is where the pic will go</p>
            <p>{rest2Location}</p>
          </div>
          <div className='bg-red-300 m-4'>
            <p>this is where the pic will go</p>
            <p>{rest3Location}</p>
          </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-2'>
            <div className=' m-4'>
              <p>places to stay</p>
              <p>there are some cool places that you can stay</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>this is where the name of the place will go</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>this is where the name of the place will go</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>this is where the name of the place will go</p>
            </div>
            <div className=' m-4'>
              <p>places to stay</p>
              <p>there are some cool places that you can stay</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>this is where the name of the place will go</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>this is where the name of the place will go</p>
            </div>
            <div className='bg-red-300 m-4'>
              <p>this is where the pic will go</p>
              <p>this is where the name of the place will go</p>
            </div>

      </div>
        
      
    </div>
    </div>

  )
}

//i merged my last pages and the ran into an issue that made me have extra components, clean that up and get rid of the review section