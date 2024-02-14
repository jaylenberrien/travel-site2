import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


export default function DestinationPage1 () {

  const { id } = useParams();
  const { nickname } = useParams();
  const [pic1, setPic1] = useState()

  useEffect(()=>{
    const Pics = async function (){

      try {
        let post={
          locationId: id
        }  
        const response = await axios.post('http://localhost:5000/search/photos', post)
        const pic1Url = response.picData.data[0].images.small.url
        console.log(pic1Url)
        setPic1(pic1Url)
        //that is the path to get to the pictures that we want from the response
      } catch (error) {
        console.log(error)
      }
    }
    Pics()
  }, [id])


  return (
    <div className='h-screen pt-20 flex flex-col'>
      <div><h1>Welcome to {nickname}</h1> </div>
      <div className='bg-blue-300 h-4/5 my-auto grid text-center grid-cols-2'>
        <div className='row-span-2'>
          <p>big pic</p>
        </div>
        <div>
          <img src = {pic1} />
        </div>
        <div>
          <p>small pic 2</p>
        </div>
      </div>
        
    </div>
  )
}

//i got the params to work now im going to use them for the initial api calls that i need, then we are setting up the rest of them, we are going to do them all from the backend so use what we have learned and done so far
